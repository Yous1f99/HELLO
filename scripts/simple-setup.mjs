import { MongoClient } from "mongodb"

async function simpleSetup() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
  const client = new MongoClient(uri)

  try {
    console.log("🔄 جاري اختبار الاتصال بقاعدة البيانات...")
    await client.connect()
    console.log("✅ تم الاتصال بنجاح!")

    const db = client.db("coffee_shop")

    // إنشاء مجموعة بسيطة للاختبار
    const testCollection = db.collection("test")
    
    // حذف البيانات القديمة
    await testCollection.deleteMany({})
    
    // إدراج بيانات اختبار
    await testCollection.insertOne({
      message: "مرحباً من كافيه الذهبي! 🎉",
      timestamp: new Date(),
      status: "success"
    })

    console.log("✅ تم إنشاء قاعدة البيانات بنجاح!")

    // عرض البيانات
    const data = await testCollection.findOne()
    console.log("📄 البيانات المحفوظة:", data)
    
    // اختبار العمليات الأساسية
    const count = await testCollection.countDocuments()
    console.log(`📊 عدد المستندات: ${count}`)
    
    console.log("\n🎯 الاختبار مكتمل! قاعدة البيانات تعمل بشكل صحيح")
    
  } catch (error) {
    console.error("❌ خطأ في الاتصال:", error.message)
    console.log("\n💡 تأكد من:")
    console.log("   1. تشغيل MongoDB على جهازك")
    console.log("   2. صحة رابط قاعدة البيانات")
    console.log("   3. صحة بيانات الاعتماد إن وجدت")
    process.exit(1)
  } finally {
    await client.close()
    console.log("🔌 تم إغلاق الاتصال")
  }
}

simpleSetup()
