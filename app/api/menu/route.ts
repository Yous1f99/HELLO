import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function GET() {
  try {
    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("menu_items")

    const menuItems = await collection.find({ available: true }).toArray()

    return NextResponse.json(menuItems)
  } catch (error) {
    console.error("خطأ في جلب قائمة المشروبات:", error)
    return NextResponse.json({ error: "حدث خطأ في جلب قائمة المشروبات" }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, price, description, category, image, available = true } = body

    if (!name || !price || !category) {
      return NextResponse.json({ error: "الاسم والسعر والفئة مطلوبة" }, { status: 400 })
    }

    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("menu_items")

    const result = await collection.insertOne({
      name,
      price,
      description,
      category,
      image,
      available,
      createdAt: new Date(),
    })

    return NextResponse.json(
      {
        message: "تم إضافة المشروب بنجاح",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("خطأ في إضافة المشروب:", error)
    return NextResponse.json({ error: "حدث خطأ في إضافة المشروب" }, { status: 500 })
  } finally {
    await client.close()
  }
}
