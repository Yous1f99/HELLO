import { type NextRequest, NextResponse } from "next/server"
import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { firstName, lastName, email, phone, message } = body

    // التحقق من البيانات المطلوبة
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json({ error: "جميع الحقول مطلوبة" }, { status: 400 })
    }

    // الاتصال بقاعدة البيانات
    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("contacts")

    // إدراج البيانات
    const result = await collection.insertOne({
      firstName,
      lastName,
      email,
      phone,
      message,
      createdAt: new Date(),
      status: "new",
    })

    return NextResponse.json(
      {
        message: "تم إرسال رسالتك بنجاح",
        id: result.insertedId,
      },
      { status: 201 },
    )
  } catch (error) {
    console.error("خطأ في إرسال الرسالة:", error)
    return NextResponse.json({ error: "حدث خطأ في إرسال الرسالة" }, { status: 500 })
  } finally {
    await client.close()
  }
}

export async function GET() {
  try {
    await client.connect()
    const db = client.db("coffee_shop")
    const collection = db.collection("contacts")

    const contacts = await collection.find({}).sort({ createdAt: -1 }).toArray()

    return NextResponse.json(contacts)
  } catch (error) {
    console.error("خطأ في جلب الرسائل:", error)
    return NextResponse.json({ error: "حدث خطأ في جلب الرسائل" }, { status: 500 })
  } finally {
    await client.close()
  }
}
