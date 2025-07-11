"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  Coffee,
  MapPin,
  Phone,
  Mail,
  Star,
  Music,
  Users,
  Menu,
  X,
  Send,
  Award,
  Crown,
  Gem,
  Truck,
  Quote,
  Sparkles,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function CoffeeShopPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const menuItems = [
    {
      name: "إسبريسو الماس",
      price: "45 ريال",
      category: "حصري",
      image: "/images/espresso.jpg",
      description: "إسبريسو مركز من أجود أنواع البن الإثيوبي",
    },
    {
      name: "كابتشينو الذهب",
      price: "55 ريال",
      category: "مميز",
      image: "/images/cappuccino.jpg",
      description: "كابتشينو كريمي مع رغوة الحليب الطبيعية",
    },
    {
      name: "لاتيه الملكي",
      price: "60 ريال",
      category: "فاخر",
      image: "/images/latte.jpg",
      description: "لاتيه ناعم بنكهة الفانيليا الطبيعية",
    },
    {
      name: "موكا البلاتين",
      price: "70 ريال",
      category: "حصري",
      image: "/images/mocha.jpg",
      description: "مزيج رائع من القهوة والشوكولاتة البلجيكية",
    },
    {
      name: "قهوة الأمراء",
      price: "85 ريال",
      category: "نادر",
      image: "/images/arabic-coffee.jpg",
      description: "قهوة عربية أصيلة بالهيل والزعفران",
    },
    {
      name: "فرابتشينو الكريستال",
      price: "65 ريال",
      category: "مميز",
      image: "/images/frappuccino.jpg",
      description: "مشروب قهوة بارد منعش مع الكريمة المخفوقة",
    },
    {
      name: "شاي التنين الأخضر",
      price: "40 ريال",
      category: "فاخر",
      image: "/images/green-tea.jpg",
      description: "شاي أخضر ياباني أصيل مع الياسمين",
    },
    {
      name: "عصير الآلهة",
      price: "50 ريال",
      category: "حصري",
      image: "/images/orange-juice.jpg",
      description: "عصير برتقال طبيعي 100% مع النعناع الطازج",
    },
  ]

  const customerReviews = [
    {
      name: "أحمد المالكي",
      rating: 5,
      comment: "تجربة استثنائية! القهوة رائعة والخدمة في قمة الاحترافية. المكان يشعرك بالفخامة الحقيقية.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "فاطمة العتيبي",
      rating: 5,
      comment: "أفضل مقهى في الرياض بلا منازع. الأجواء ساحرة والقهوة لذيذة جداً. أنصح الجميع بزيارته.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "محمد الشهري",
      rating: 5,
      comment: "خدمة التوصيل سريعة والقهوة وصلت ساخنة ولذيذة. فريق العمل محترف جداً.",
      image: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "نورا القحطاني",
      rating: 5,
      comment: "مكان مثالي للاجتماعات المهمة. الهدوء والأناقة مع أفضل أنواع القهوة.",
      image: "/placeholder.svg?height=60&width=60",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Luxury Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-amber-500/20">
        <div className="container mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-sm"></div>
                <Crown className="relative h-10 w-10 text-amber-400 z-10" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                  كافيه الذهبي
                </span>
                <span className="text-xs text-amber-300/70 font-light tracking-widest">LUXURY COFFEE EXPERIENCE</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {[
                { href: "#home", label: "الرئيسية" },
                { href: "#services", label: "خدماتنا" },
                { href: "#menu", label: "القائمة" },
                { href: "#reviews", label: "آراء العملاء" },
                { href: "#about", label: "من نحن" },
                { href: "#contact", label: "تواصل معنا" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative text-white/80 hover:text-amber-400 transition-all duration-300 font-medium group"
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-600 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center gap-4">
              <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-6 py-2 rounded-full shadow-lg hover:shadow-amber-500/25 transition-all duration-300">
                احجز طاولة
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden text-amber-400 hover:text-amber-300 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </nav>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-amber-500/20">
              <div className="flex flex-col gap-4 pt-4">
                {[
                  { href: "#home", label: "الرئيسية" },
                  { href: "#services", label: "خدماتنا" },
                  { href: "#menu", label: "القائمة" },
                  { href: "#reviews", label: "آراء العملاء" },
                  { href: "#about", label: "من نحن" },
                  { href: "#contact", label: "تواصل معنا" },
                ].map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-white/80 hover:text-amber-400 transition-colors font-medium py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black font-bold mt-4 rounded-full">
                  احجز طاولة
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Enhanced Hero Section with Coffee Shop Background */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Coffee Shop Background Image */}
        <div className="absolute inset-0">
          <Image src="/images/coffee-shop-hero-bg.jpg" alt="مقهى فاخر" fill className="object-cover" priority />
          {/* Dark Overlay for better text readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70"></div>
          {/* Additional gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60"></div>
        </div>

        {/* Floating Sparkles and Coffee Elements */}
        <div className="absolute top-20 left-10 animate-pulse">
          <Sparkles className="h-6 w-6 text-amber-400 opacity-60" />
        </div>
        <div className="absolute top-40 right-20 animate-bounce">
          <Coffee className="h-5 w-5 text-yellow-500 opacity-40" />
        </div>
        <div className="absolute bottom-40 left-20 animate-ping">
          <Gem className="h-4 w-4 text-amber-300 opacity-50" />
        </div>
        <div className="absolute top-60 right-40 animate-pulse">
          <Crown className="h-5 w-5 text-amber-500 opacity-30" />
        </div>
        <div className="absolute bottom-60 right-10 animate-bounce">
          <Sparkles className="h-4 w-4 text-yellow-400 opacity-40" />
        </div>

        <div className="container mx-auto px-6 py-32 relative z-10">
          <div className="flex flex-col items-center justify-center text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <Badge className="bg-gradient-to-r from-amber-500/30 to-yellow-600/30 text-amber-300 border-amber-400/40 hover:bg-amber-500/40 px-6 py-3 text-base font-medium backdrop-blur-sm">
                <Crown className="w-5 h-5 mr-2" />
                تجربة فاخرة حصرية
              </Badge>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-white via-amber-100 to-amber-300 bg-clip-text text-transparent drop-shadow-2xl">
                  مملكة
                </span>
                <br />
                <span className="bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent drop-shadow-2xl">
                  القهوة الذهبية
                </span>
              </h1>
              <p className="text-2xl text-amber-100 leading-relaxed max-w-3xl mx-auto drop-shadow-lg">
                ادخل إلى عالم من الفخامة والأناقة، حيث تتحول كل رشفة إلى لحظة سحرية لا تُنسى في أجواء ملكية استثنائية.
              </p>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-6">
              <Button
                size="lg"
                className="bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold px-10 py-5 text-lg rounded-full shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
              >
                <Crown className="w-6 h-6 mr-3" />
                ابدأ رحلتك الملكية
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-3 border-amber-400 text-amber-300 hover:bg-amber-500/20 hover:text-amber-200 px-10 py-5 text-lg rounded-full bg-black/30 backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
              >
                <Gem className="w-6 h-6 mr-3" />
                اكتشف الكنوز الذهبية
              </Button>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 w-full max-w-2xl">
              <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-amber-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                  1000+
                </div>
                <div className="text-amber-300 text-sm font-medium">عميل من النخبة</div>
              </div>
              <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-amber-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                  25+
                </div>
                <div className="text-amber-300 text-sm font-medium">نوع قهوة نادر</div>
              </div>
              <div className="text-center p-4 bg-black/30 backdrop-blur-sm rounded-2xl border border-amber-500/20">
                <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent mb-2">
                  24/7
                </div>
                <div className="text-amber-300 text-sm font-medium">خدمة ملكية</div>
              </div>
            </div>

            {/* Coffee Image with Rating */}
            <div className="mt-16">{/* مساحة فارغة */}</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30 mb-6 px-4 py-2">
              <Award className="w-4 h-4 mr-2" />
              خدمات حصرية
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                تجربة فاخرة شاملة
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              نقدم مجموعة من الخدمات الحصرية المصممة خصيصاً لتلبية توقعات النخبة
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Coffee,
                title: "قهوة حرفية مخصصة",
                desc: "خبراء القهوة يحضرون لك مزيجاً فريداً من أندر أنواع البن العالمي",
              },
              {
                icon: Truck,
                title: "توصيل مجاني سريع",
                desc: "خدمة توصيل مجانية لجميع الطلبات أكثر من 100 ريال خلال 30 دقيقة",
              },
              { icon: Crown, title: "خدمة VIP", desc: "خدمة شخصية متميزة مع مضيف خاص لكل طاولة" },
              { icon: Music, title: "أجواء موسيقية راقية", desc: "موسيقى كلاسيكية وجاز منتقاة بعناية لتعزيز تجربتك" },
              { icon: Users, title: "صالات خاصة", desc: "مساحات منعزلة وأنيقة للاجتماعات الهامة والمناسبات الخاصة" },
              { icon: Award, title: "برنامج العضوية الذهبية", desc: "مزايا حصرية وخصومات خاصة لأعضاء النادي الذهبي" },
            ].map((service, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-6 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                    <service.icon className="relative h-16 w-16 text-amber-400 mx-auto" />
                  </div>
                  <CardTitle className="text-xl font-bold text-white group-hover:text-amber-400 transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center leading-relaxed">
                    {service.desc}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Section */}
      <section id="menu" className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30 mb-6 px-4 py-2">
              <Coffee className="w-4 h-4 mr-2" />
              القائمة الذهبية
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                مجموعة مختارة من النخبة
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              تشكيلة حصرية من أفخر المشروبات المحضرة بأيدي خبراء عالميين
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {menuItems.map((item, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-500/20 hover:border-amber-500/40 overflow-hidden group hover:shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="relative overflow-hidden">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.name}
                    width={300}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge
                      className={`
                      ${
                        item.category === "نادر"
                          ? "bg-gradient-to-r from-purple-500 to-pink-600"
                          : item.category === "حصري"
                            ? "bg-gradient-to-r from-amber-500 to-yellow-600"
                            : item.category === "فاخر"
                              ? "bg-gradient-to-r from-blue-500 to-cyan-600"
                              : "bg-gradient-to-r from-green-500 to-emerald-600"
                      }
                      text-white font-bold px-3 py-1 text-xs
                    `}
                    >
                      {item.category}
                    </Badge>
                  </div>
                  <div className="absolute bottom-4 left-4 bg-black/80 backdrop-blur-sm px-4 py-2 rounded-full">
                    <span className="text-amber-400 font-bold text-lg">{item.price}</span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 leading-relaxed">{item.description}</p>
                  <Button
                    className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold rounded-full transition-all duration-300 transform hover:scale-105"
                    onClick={() => alert(`تم إضافة ${item.name} إلى طلبك الفاخر! 👑✨`)}
                  >
                    <Crown className="w-4 h-4 mr-2" />
                    أضف للطلب الملكي
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="py-32 bg-gradient-to-b from-black to-gray-900 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30 mb-6 px-4 py-2">
              <Quote className="w-4 h-4 mr-2" />
              آراء النخبة
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                ما يقوله عملاؤنا المميزون
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              تجارب حقيقية من عملائنا الكرام الذين اختبروا الفخامة معنا
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {customerReviews.map((review, index) => (
              <Card
                key={index}
                className="bg-gradient-to-br from-gray-900 to-black border-amber-500/20 hover:border-amber-500/40 transition-all duration-500 hover:shadow-2xl hover:shadow-amber-500/10 group hover:-translate-y-2"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4">
                    <Image
                      src={review.image || "/placeholder.svg"}
                      alt={review.name}
                      width={60}
                      height={60}
                      className="rounded-full border-2 border-amber-500/30"
                    />
                  </div>
                  <div className="flex justify-center mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-400 fill-current" />
                    ))}
                  </div>
                  <CardTitle className="text-lg font-bold text-amber-400">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Quote className="h-6 w-6 text-amber-500/50 mb-3" />
                  <CardDescription className="text-gray-400 text-center leading-relaxed italic">
                    "{review.comment}"
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gradient-to-b from-gray-900 to-black relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30 px-4 py-2 w-fit">
                <Award className="w-4 h-4 mr-2" />
                قصة الفخامة
              </Badge>
              <h2 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                  رحلة في عالم الرقي
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  كافيه الذهبي ليس مجرد مقهى، بل وجهة حصرية للنخبة الباحثة عن تجربة استثنائية تجمع بين فن القهوة الراقي
                  والأجواء الملكية.
                </p>
                <p>
                  منذ تأسيسنا، نحن نعيد تعريف مفهوم الفخامة في عالم القهوة، حيث نقدم أندر أنواع البن المستورد من أفخر
                  المزارع العالمية، محضرة بأيدي خبراء حاصلين على شهادات دولية.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    1000+
                  </div>
                  <div className="text-gray-400 text-sm">عميل من النخبة</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    25+
                  </div>
                  <div className="text-gray-400 text-sm">نوع قهوة نادر</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-amber-400 to-yellow-600 bg-clip-text text-transparent">
                    5
                  </div>
                  <div className="text-gray-400 text-sm">نجوم تقييم</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400/20 to-yellow-600/20 rounded-3xl blur-3xl"></div>
              <Image
                src="/images/coffee-shop-interior.jpg"
                alt="داخل المقهى الفاخر"
                width={700}
                height={600}
                className="relative rounded-3xl shadow-2xl border border-amber-500/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Contact Section */}
      <section
        id="contact"
        className="py-32 bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_transparent_0%,_black_70%)]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <Badge className="bg-gradient-to-r from-amber-500/20 to-yellow-600/20 text-amber-400 border-amber-500/30 mb-6 px-4 py-2">
              <Crown className="w-4 h-4 mr-2" />
              تواصل النخبة
            </Badge>
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white via-amber-100 to-amber-400 bg-clip-text text-transparent">
                ابدأ رحلتك الفاخرة
              </span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              تواصل معنا لحجز تجربتك الحصرية أو للاستفسار عن خدماتنا المميزة
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="grid gap-6">
                {[
                  {
                    icon: MapPin,
                    title: "العنوان الحصري",
                    content: "برج المملكة، الطابق 45، شارع الملك فهد، الرياض",
                    subtitle: "في قلب المنطقة التجارية الراقية",
                  },
                  {
                    icon: Phone,
                    title: "خط النخبة المباشر",
                    content: "+966 11 999 8888",
                    subtitle: "متاح 24/7 لخدمة VIP",
                  },
                  {
                    icon: Mail,
                    title: "البريد الملكي",
                    content: "vip@goldencafe.luxury",
                    subtitle: "للاستفسارات الحصرية",
                  },
                  {
                    icon: Truck,
                    title: "التوصيل المجاني",
                    content: "خدمة توصيل مجانية خلال 30 دقيقة",
                    subtitle: "لجميع الطلبات أكثر من 100 ريال",
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-6 p-6 rounded-2xl bg-gradient-to-r from-gray-900/50 to-black/50 border border-amber-500/20 backdrop-blur-sm hover:border-amber-500/40 transition-all duration-300 group"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                      <item.icon className="relative h-8 w-8 text-amber-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-bold text-xl text-white mb-2 group-hover:text-amber-400 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-amber-300 font-medium mb-1">{item.content}</p>
                      <p className="text-gray-400 text-sm">{item.subtitle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Luxury Contact Form */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-yellow-600/10 rounded-3xl blur-xl"></div>
              <Card className="relative bg-gradient-to-br from-gray-900/80 to-black/80 border-amber-500/30 backdrop-blur-xl shadow-2xl">
                <CardHeader className="text-center pb-8">
                  <div className="mx-auto mb-4 relative">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-lg opacity-30"></div>
                    <Gem className="relative h-12 w-12 text-amber-400 mx-auto" />
                  </div>
                  <CardTitle className="text-2xl font-bold bg-gradient-to-r from-white to-amber-400 bg-clip-text text-transparent">
                    رسالة من النخبة
                  </CardTitle>
                  <CardDescription className="text-gray-400 mt-2">
                    شاركنا تفاصيل تجربتك المرغوبة وسنتواصل معك خلال دقائق
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      alert(
                        "شكراً لك من النخبة! 👑\nتم إرسال رسالتك الفاخرة بنجاح\nسيتواصل معك مستشار VIP خلال 15 دقيقة",
                      )
                    }}
                  >
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="relative">
                        <Input
                          placeholder="الاسم الأول"
                          className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl py-3 px-4 backdrop-blur-sm"
                          required
                        />
                      </div>
                      <div className="relative">
                        <Input
                          placeholder="الاسم الأخير"
                          className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl py-3 px-4 backdrop-blur-sm"
                          required
                        />
                      </div>
                    </div>
                    <div className="mb-6">
                      <Input
                        placeholder="البريد الإلكتروني الشخصي"
                        type="email"
                        className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl py-3 px-4 backdrop-blur-sm"
                        required
                      />
                    </div>
                    <div className="mb-6">
                      <Input
                        placeholder="رقم الهاتف المباشر"
                        className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 rounded-xl py-3 px-4 backdrop-blur-sm"
                      />
                    </div>
                    <div className="mb-8">
                      <Textarea
                        placeholder="اكتب لنا عن التجربة التي تتطلع إليها... حجز طاولة VIP، مناسبة خاصة، أو استفسار عن خدماتنا الحصرية"
                        className="bg-black/50 border-amber-500/30 text-white placeholder:text-gray-500 focus:border-amber-400 focus:ring-amber-400/20 min-h-[120px] rounded-xl p-4 backdrop-blur-sm resize-none"
                        required
                      />
                    </div>
                    <Button
                      type="submit"
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-600 hover:from-amber-600 hover:to-yellow-700 text-black font-bold py-4 rounded-xl shadow-2xl hover:shadow-amber-500/25 transition-all duration-300 transform hover:scale-105"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      إرسال الرسالة الفاخرة
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Luxury Footer */}
      <footer className="bg-gradient-to-t from-black to-gray-900 border-t border-amber-500/20 py-16">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-yellow-600 rounded-full blur-sm"></div>
                  <Crown className="relative h-10 w-10 text-amber-400" />
                </div>
                <div className="flex flex-col">
                  <span className="text-2xl font-bold bg-gradient-to-r from-amber-400 via-yellow-500 to-amber-600 bg-clip-text text-transparent">
                    كافيه الذهبي
                  </span>
                  <span className="text-xs text-amber-300/70 font-light tracking-widest">LUXURY COFFEE EXPERIENCE</span>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-4">
                تجربة قهوة استثنائية في عالم من الفخامة والرقي، حيث يلتقي الفن بالطعم الأصيل في أجواء ملكية لا تُنسى.
              </p>
              <div className="flex items-center gap-2 text-green-400">
                <Truck className="h-5 w-5" />
                <span className="text-sm font-medium">توصيل مجاني للطلبات أكثر من 100 ريال</span>
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">الروابط الذهبية</h3>
              <div className="space-y-3">
                {[
                  { href: "#home", label: "الرئيسية" },
                  { href: "#services", label: "خدماتنا الحصرية" },
                  { href: "#menu", label: "القائمة الذهبية" },
                  { href: "#reviews", label: "آراء العملاء" },
                  { href: "#about", label: "قصتنا" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="block text-gray-400 hover:text-amber-400 transition-colors duration-300 hover:translate-x-2 transform"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
            <div>
              <h3 className="font-bold text-white mb-6 text-lg">النشرة الذهبية</h3>
              <p className="text-gray-400 mb-6 text-sm">اشترك لتصلك أحدث العروض الحصرية والفعاليات الخاصة</p>
              <div className="flex gap-2">
                <Input
                  placeholder="بريدك الإلكتروني"
                  className="bg-gray-900 border-amber-500/30 text-white flex-1 rounded-xl"
                />
                <Button
                  className="bg-gradient-to-r from-amber-500 to-yellow-600 text-black px-4 rounded-xl hover:from-amber-600 hover:to-yellow-700 transition-all duration-300"
                  onClick={() => alert("مرحباً بك في النادي الذهبي! 👑✨")}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
          <div className="border-t border-amber-500/20 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 كافيه الذهبي - جميع الحقوق محفوظة |<span className="text-amber-400 mx-2">تجربة فاخرة حصرية</span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
