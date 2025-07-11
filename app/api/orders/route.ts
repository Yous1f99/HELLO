import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { customerName, customerPhone, customerEmail, items, totalAmount, orderType = "dine-in" } = body

    if (!customerName || !customerPhone || !items || items.length === 0) {
      return NextResponse.json({ error: "بيانات العميل والطلبات مطلوبة" }, { status: 400 })
    }

    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("orders")

    const orderNumber = `ORD-${Date.now()}`

    const result = await collection.insertOne({
      orderNumber,
      customerName,
      customerPhone,
      customerEmail,
      items,
      totalAmount,
      orderType,
      status: "pending",
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "تم تسجيل طلبك بنجاح",
        orderNumber,
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("خطأ في تسجيل الطلب:", error)
    return NextResponse.json({ error: "حدث خطأ في تسجيل الطلب" }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function GET() {
  try {
    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("orders")

    const orders = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(orders)
  } catch (error) {
    console.error("خطأ في جلب الطلبات:", error)
    return NextResponse.json({ error: "حدث خطأ في جلب الطلبات" }, { status: 500 })
  } finally {
    await client.close()
  }
}
