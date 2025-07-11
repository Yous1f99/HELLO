import { MongoClient } from "mongodb"

async function checkConnection() {
  const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
  
  console.log("🔍 فحص الاتصال بقاعدة البيانات...")
  console.log(`📡 الرابط: ${uri}`)
  
  const client = new MongoClient(uri)

  try {
    // محاولة الاتصال مع timeout
    await client.connect()
    
    // اختبار ping
    await client.db("admin").command({ ping: 1 })
    console.log("✅ الاتصال ناجح!")
    
    // عرض معلومات الخادم
    const admin = client.db("admin")
    const serverStatus = await admin.command({ serverStatus: 1 })
    console.log(`🖥️ إصدار MongoDB: ${serverStatus.version}`)
    console.log(`⏰ وقت التشغيل: ${Math.floor(serverStatus.uptime / 60)} دقيقة`)
    
  } catch (error) {
    console.error("❌ فشل الاتصال:", error.message)
    
    if (error.message.includes("ECONNREFUSED")) {
      console.log("\n💡 يبدو أن MongoDB غير مُشغل. تأكد من:")
      console.log("   • تشغيل MongoDB على المنفذ 27017")
      console.log("   • أو تعيين MONGODB_URI للاتصال بخادم خارجي")
    }
  } finally {
    await client.close()
  }
}

checkConnection()
