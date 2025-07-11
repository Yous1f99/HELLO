import { MongoClient } from "mongodb"

const uri = process.env.MONGODB_URI || "mongodb://localhost:27017"
const client = new MongoClient(uri)

async function setupDatabase() {
  try {
    console.log("🔄 جاري الاتصال بقاعدة البيانات...")
    await client.connect()
    console.log("✅ تم الاتصال بقاعدة البيانات MongoDB بنجاح!")

    const db = client.db("coffee_shop")

    // إنشاء مجموعة قائمة المشروبات
    const menuCollection = db.collection("menu_items")

    // حذف البيانات الموجودة إن وجدت
    await menuCollection.deleteMany({})
    console.log("🗑️ تم مسح البيانات القديمة")

    // إدراج بيانات تجريبية لقائمة المشروبات
    const menuItems = [
      {
        name: "إسبريسو كلاسيكي",
        price: 15,
        description: "قهوة إسبريسو أصيلة محضرة من أجود أنواع البن",
        category: "قهوة ساخنة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "كابتشينو فاخر",
        price: 20,
        description: "كابتشينو كريمي مع رغوة الحليب الطبيعية",
        category: "قهوة ساخنة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "لاتيه بالفانيليا",
        price: 22,
        description: "لاتيه ناعم بنكهة الفانيليا الطبيعية",
        category: "قهوة ساخنة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "موكا بالشوكولاتة",
        price: 25,
        description: "مزيج رائع من القهوة والشوكولاتة الفاخرة",
        category: "قهوة ساخنة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "قهوة عربية أصيلة",
        price: 18,
        description: "قهوة عربية تقليدية بالهيل والزعفران",
        category: "قهوة تقليدية",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "فرابتشينو بارد",
        price: 28,
        description: "مشروب قهوة بارد منعش مع الكريمة المخفوقة",
        category: "قهوة باردة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "شاي أخضر",
        price: 12,
        description: "شاي أخضر طبيعي منعش ومفيد للصحة",
        category: "مشروبات ساخنة",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      },
      {
        name: "عصير برتقال طازج",
        price: 16,
        description: "عصير برتقال طبيعي 100% بدون إضافات",
        category: "عصائر طبيعية",
        image: "/placeholder.svg?height=200&width=300",
        available: true,
        createdAt: new Date(),
      }
    ]

    const menuResult = await menuCollection.insertMany(menuItems)
    console.log(`📋 تم إدراج ${menuResult.insertedCount} عنصر في قائمة المشروبات`)

    // إنشاء فهارس للبحث السريع
    await menuCollection.createIndex({ name: 1 })
    await menuCollection.createIndex({ category: 1 })
    await menuCollection.createIndex({ available: 1 })
    console.log("🔍 تم إنشاء فهارس قائمة المشروبات")

    // إنشاء مجموعة الطلبات مع فهارس
    const ordersCollection = db.collection("orders")
    await ordersCollection.createIndex({ orderNumber: 1 }, { unique: true })
    await ordersCollection.createIndex({ createdAt: -1 })
    await ordersCollection.createIndex({ status: 1 })
    console.log("📦 تم إنشاء مجموعة الطلبات والفهارس")

    // إنشاء مجموعة الرسائل مع فهارس
    const contactsCollection = db.collection("contacts")
    await contactsCollection.createIndex({ email: 1 })
    await contactsCollection.createIndex({ createdAt: -1 })
    await contactsCollection.createIndex({ status: 1 })
    console.log("📧 تم إنشاء مجموعة الرسائل والفهارس")

    // إدراج بيانات تجريبية للطلبات
    const sampleOrders = [
      {
        orderNumber: `ORD-${Date.now()}-1`,
        customerName: "أحمد محمد",
        customerPhone: "+966501234567",
        customerEmail: "ahmed@example.com",
        items: [
          { name: "كابتشينو فاخر", price: 20, quantity: 2 },
          { name: "موكا بالشوكولاتة", price: 25, quantity: 1 },
        ],
        totalAmount: 65,
        orderType: "dine-in",
        status: "completed",
        createdAt: new Date(Date.now() - 86400000), // أمس
      },
      {
        orderNumber: `ORD-${Date.now()}-2`,
        customerName: "فاطمة علي",
        customerPhone: "+966507654321",
        customerEmail: "fatima@example.com",
        items: [
          { name: "لاتيه بالفانيليا", price: 22, quantity: 1 },
          { name: "قهوة عربية أصيلة", price: 18, quantity: 1 },
        ],
        totalAmount: 40,
        orderType: "takeaway",
        status: "pending",
        createdAt: new Date(),
      },
    ]

    const ordersResult = await ordersCollection.insertMany(sampleOrders)
    console.log(`🛒 تم إدراج ${ordersResult.insertedCount} طلب تجريبي`)

    // إدراج بيانات تجريبية للرسائل
    const sampleContacts = [
      {
        firstName: "سارة",
        lastName: "أحمد",
        email: "sara@example.com",
        phone: "+966501111111",
        message: "أريد الاستفسار عن إمكانية حجز طاولة لحفل صغير",
        status: "new",
        createdAt: new Date(Date.now() - 3600000), // منذ ساعة
      },
      {
        firstName: "محمد",
        lastName: "خالد",
        email: "mohammed@example.com",
        phone: "+966502222222",
        message: "هل تقدمون خدمة التوصيل؟ وما هي المناطق المشمولة؟",
        status: "replied",
        createdAt: new Date(Date.now() - 7200000), // منذ ساعتين
      },
    ]

    const contactsResult = await contactsCollection.insertMany(sampleContacts)
    console.log(`💬 تم إدراج ${contactsResult.insertedCount} رسالة تجريبية`)

    console.log("\n🎉 تم إعداد قاعدة البيانات بنجاح!")
    console.log("📊 إحصائيات قاعدة البيانات:")
    console.log(`   ☕ المشروبات: ${menuResult.insertedCount}`)
    console.log(`   🛒 الطلبات: ${ordersResult.insertedCount}`)
    console.log(`   💬 الرسائل: ${contactsResult.insertedCount}`)
    console.log("\n✨ يمكنك الآن تشغيل الموقع باستخدام: npm run dev")
    
  } catch (error) {
    console.error("❌ خطأ في إعداد قاعدة البيانات:", error)
    process.exit(1)
  } finally {
    await client.close()
    console.log("🔌 تم إغلاق الاتصال بقاعدة البيانات")
  }
}

// تشغيل الدالة
setupDatabase()
