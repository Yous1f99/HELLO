import { MongoClient } from "mongodb"

async function simpleSetup() {
  const uri = "mongodb://localhost:27017"
  const client = new MongoClient(uri)

  try {
    console.log("🔄 جاري الاتصال بقاعدة البيانات...")
    await client.connect()
    console.log("✅ تم الاتصال بنجاح!")

    const db = client.db("coffee_shop")

    // إنشاء مجموعة بسيطة للاختبار
    const testCollection = db.collection("test")
    await testCollection.insertOne({
      message: "مرحباً من كافيه الذهبي!",
      timestamp: new Date(),
    })

    console.log("✅ تم إنشاء قاعدة البيانات بنجاح!")

    // عرض البيانات
    const data = await testCollection.findOne()
    console.log("📄 البيانات المحفوظة:", data)
  } catch (error) {
    console.error("❌ خطأ:", error.message)
  } finally {
    await client.close()
    console.log("🔌 تم إغلاق الاتصال")
  }
}

simpleSetup()
