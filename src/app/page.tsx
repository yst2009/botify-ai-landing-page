import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroActions } from "./components/HeroActions";
import { Zap, MessageSquare, Smartphone, CheckCircle, X } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        {/* B. Hero Section */}
        <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-emerald-100/40 via-transparent to-transparent dark:from-emerald-900/20 dark:via-transparent dark:to-transparent -z-10" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white tracking-tight mb-8 leading-tight">
              منصة Botify-AI: أول سيلز عقارات آلي <br className="hidden md:block" /> شغال 24 ساعة على الواتساب 🚀
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              منصة Botify-AI تدرب مساعد عقاري ذكي يقرأ كتالوجاتك، يرد على عملائك في ثوانٍ، ويقودهم لإتمام المعاينة دون تدخل بشري.
            </p>
            <HeroActions />
          </div>
        </section>

        {/* C. Features Grid */}
        <section id="features" className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">مميزات صُممت لشركات العقارات</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">كل ما تحتاجه لأتمتة مبيعاتك العقارية وزيادة معدل التحويل بشكل غير مسبوق.</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1 */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Zap size={28} className="text-emerald-600 dark:text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">تجهيز المخزن الفوري ⚡📦</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  ارمي ملف الـ Excel أو الـ PDF، وسيب النظام يفرش عقاراتك ويدرب المساعد الذكي في ثوانٍ.
                </p>
              </div>
              {/* Card 2 */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <MessageSquare size={28} className="text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">الرد الذكي والأمين 🤖💬</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  مساعد يفهم لغة السوق العقاري، مبيعشمش العميل في وحدات محجوزة، ويوجهه فوراً للبدائل المتاحة.
                </p>
              </div>
              {/* Card 3 */}
              <div className="bg-slate-50 dark:bg-slate-900/50 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 hover:-translate-y-2 hover:shadow-xl hover:border-emerald-500/30 dark:hover:border-emerald-500/30 transition-all duration-300 group">
                <div className="w-14 h-14 bg-orange-100 dark:bg-orange-900/40 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Smartphone size={28} className="text-orange-600 dark:text-orange-400" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">أتمتة خطوط الواتساب 📲🔥</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  ربط مباشر برقم شركتك لاستقبال آلاف المحادثات في نفس اللحظة بدون أي بطء.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* D. How It Works Section */}
        <section id="how-it-works" className="py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">كيف يعمل النظام؟</h2>
              <p className="text-slate-600 dark:text-slate-400">ثلاث خطوات بسيطة تبدأ بها ثورة المبيعات العقارية في شركتك.</p>
            </div>
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 dark:before:via-slate-700 before:to-transparent">
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  1
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">الخطوة 1: ارفع ملف عقاراتك</h3>
                  <p className="text-slate-600 dark:text-slate-400">ارفع ملف إكسيل أو PDF يحتوي على الكتالوج الخاص بك.</p>
                </div>
              </div>
              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  2
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-2">الخطوة 2: تحليل البيانات</h3>
                  <p className="text-slate-600 dark:text-slate-400">الـ AI يدرس الأسعار، المساحات، ونظام التقسيط تلقائياً ويفهم تفاصيل كل وحدة.</p>
                </div>
              </div>
              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-white dark:border-slate-950 bg-emerald-500 text-white font-bold shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
                  3
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                  <h3 className="font-bold text-lg text-emerald-900 dark:text-emerald-400 mb-2">الخطوة 3: استقبال العملاء</h3>
                  <p className="text-emerald-800 dark:text-emerald-200/80">البوت يبدأ يستقبل العملاء على الواتساب ويقفل المعاينات بنجاح مبهر!</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* E. Pricing Table */}
        <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">باقات تناسب حجم عملك</h2>
              <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">اختر الباقة الأنسب واستثمر في مستقبل مبيعاتك.</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {/* Plan 1: Free Trial */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">الباقة التجريبية (Free Trial)</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">مجاناً</span>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-4">لمدة أسبوعين (14 يوم)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>تجربة ردود البوت الذكي</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>ربط خط تجريبي</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>دعم فني أساسي</span>
                  </li>
                </ul>
                <a href="https://wa.me/201028086887?text=أهلاً%20Botify-AI،%20أريد%20تفعيل%20الباقة%20التجريبية%20المجانية%20لمدة%20أسبوعين%20لشركتي" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                  ابدأ تجربتك المجانية الآن
                </a>
              </div>
              
              {/* Plan 2: Pro Plan */}
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">الباقة البرو (Pro Plan)</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-black text-slate-900 dark:text-white">7,500</span>
                    <span className="text-slate-500 dark:text-slate-400 mr-1 text-sm font-semibold">جنيه مصري</span>
                  </div>
                  <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">ترخيص سنوي</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">(تشمل 1500 حق السيستم + 6000 تشغيل البوت بدون داشبورد)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>أتمتة كاملة لخط الواتساب</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>الرد الذكي والمساعد الأمين</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
                    <CheckCircle size={20} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span>معالجة ملفات العقارات</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-400 dark:text-slate-500">
                    <X size={20} className="text-slate-400 dark:text-slate-500 shrink-0 mt-0.5" />
                    <span className="line-through">بدون لوحة تحكم Dashboard</span>
                  </li>
                </ul>
                <a href="https://wa.me/201028086887?text=أهلاً%20Botify-AI،%20أريد%20حجز%20الباقة%20البرو%20(بدون%20داشبورد)%20لبدء%20أتمتة%20المبيعات" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
                  احجز باقة البرو الآن
                </a>
              </div>

              {/* Plan 3: Pro Max Plan */}
              <div className="bg-slate-900 dark:bg-slate-900 border border-emerald-500/50 rounded-3xl p-8 flex flex-col relative shadow-xl shadow-emerald-500/10">
                <div className="absolute top-0 right-8 -translate-y-1/2">
                  <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    🔥 الأكثر طلباً
                  </span>
                </div>
                <div className="mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">باقة البرو ماكس (Pro Max Plan)</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-black text-white">9,500</span>
                    <span className="text-slate-400 mr-1 text-sm font-semibold">جنيه مصري</span>
                  </div>
                  <p className="text-emerald-400 font-semibold mb-2">ترخيص سنوي</p>
                  <p className="text-xs text-slate-400 leading-relaxed">(تشمل 1500 حق السيستم + 8000 تشغيل البوت + لوحة التحكم الكاملة)</p>
                </div>
                <ul className="space-y-4 mb-8 flex-1">
                  <li className="flex items-start gap-3 text-slate-200">
                    <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span>كل مميزات الباقة البرو</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">لوحة التحكم التنفيذية الشاملة (Executive Dashboard)</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">تحليل اهتمامات ومناطق العملاء لايف من قاعدة البيانات</span>
                  </li>
                  <li className="flex items-start gap-3 text-slate-200">
                    <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                    <span className="leading-snug">إدارة كاملة للمخزن الفوري</span>
                  </li>
                </ul>
                <a href="https://wa.me/201028086887?text=أهلاً%20Botify-AI،%20أريد%20حجز%20الباقة%20البرو%20ماكس%20الشاملة%20(البوت%20+%20الداشبورد)%20لشركتي%20العقارية" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-gradient-to-l from-emerald-600 to-emerald-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300">
                  احجز باقة البرو ماكس الآن
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
