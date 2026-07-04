import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HeroActions } from "./components/HeroActions";
import { Zap, MessageSquare, Smartphone } from "lucide-react";
import { PricingSection } from "./components/PricingSection";

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
              منصة Botify Agents: أول سيلز عقارات آلي <br className="hidden md:block" /> شغال 24 ساعة على الواتساب 🚀
            </h1>
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-12 leading-relaxed">
              منصة Botify Agents تدرب مساعد عقاري ذكي يقرأ كتالوجاتك، يرد على عملائك في ثوانٍ، ويقودهم لإتمام المعاينة دون تدخل بشري.
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
                  مساعد يفهم لغة السوق العقاري، ما يبيعش العميل في وحدات محجوزة، ويوجهه فوراً للبدائل المتاحة.
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
        <PricingSection />

        {/* F. FAQ Section */}
        <section id="faq" className="py-24 bg-slate-50 dark:bg-slate-900/30 border-t border-slate-200 dark:border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Frequently Asked Questions</h2>
              <p className="text-slate-600 dark:text-slate-400">Everything you need to know about integrating our AI Sales Agent into your real estate workflow.</p>
            </div>
            
            <div className="space-y-6 text-left" dir="ltr">
              {/* FAQ Item 1 */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How does the AI Sales Agent handle complex real estate inquiries?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Our AI Sales Agent is specifically trained for real estate brokers and developers. It leverages advanced Natural Language Processing to analyze your property catalogs, understand client requirements—such as budget, preferred locations, and amenities—and provide highly accurate, contextual responses instantly via WhatsApp automation.
                </p>
              </div>
              
              {/* FAQ Item 2 */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Can the automated sales bot qualify leads before human intervention?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Absolutely. The AI acts as your tireless frontline qualifier. It engages prospects by asking targeted, high-intent questions. Once a lead is fully qualified and ready to schedule a viewing or request a contract, the bot seamlessly hands over the complete context to your human sales team.
                </p>
              </div>

              {/* FAQ Item 3 */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">How quickly can we deploy WhatsApp automation for our agency?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Integration is rapid and hassle-free. Thanks to our robust SaaS architecture, we can connect your official business WhatsApp API and sync your property listings in under 48 hours, immediately supercharging your customer acquisition workflows.
                </p>
              </div>

              {/* FAQ Item 4 */}
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">Is our client and property data secure with Botify AI?</h3>
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                  Yes, data security is our top priority. We utilize enterprise-grade infrastructure to ensure that all conversational logs, lead details, and proprietary real estate data remain strictly confidential and fully isolated within your dedicated tenant environment.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
