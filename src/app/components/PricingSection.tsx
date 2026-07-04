"use client";

import { useState } from "react";
import { CheckCircle, X } from "lucide-react";

export function PricingSection() {
  const [region, setRegion] = useState<"EG" | "GLOBAL">("GLOBAL");

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">باقات تناسب حجم عملك</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">اختر الباقة الأنسب واستثمر في مستقبل مبيعاتك.</p>
        </div>

        {/* Currency Toggle */}
        <div className="flex justify-center mb-16">
          <div className="bg-slate-100 dark:bg-slate-900 p-1.5 rounded-2xl inline-flex border border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setRegion("GLOBAL")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                region === "GLOBAL"
                  ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              🌍 الخليج ودولياً
            </button>
            <button
              onClick={() => setRegion("EG")}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all duration-300 ${
                region === "EG"
                  ? "bg-white dark:bg-slate-800 text-emerald-600 dark:text-emerald-400 shadow-sm"
                  : "text-slate-500 hover:text-slate-700 dark:hover:text-slate-300"
              }`}
            >
              🇪🇬 مصر
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Plan 1: Free Trial */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">الباقة التجريبية (Trial)</h3>
              <div className="mb-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white">مجاناً</span>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">تجربة تفاعلية لمدة 7 أيام</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                مطلوب مبلغ تأمين رمزي {region === "EG" ? "1,000 جنيه" : "$50"} يُرد بالكامل عند عدم الاستمرار، لضمان جدية التجربة
              </p>
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
            <a href="https://wa.me/201028086887?text=أهلاً%20Botify%20Agents،%20أريد%20تفعيل%20الباقة%20التجريبية%20لشركتي" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              ابدأ تجربتك الآن
            </a>
          </div>

          {/* Plan 2: Pro Plan */}
          <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl p-8 flex flex-col hover:border-slate-300 dark:hover:border-slate-700 transition-colors">
            <div className="mb-8">
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">الباقة البرو (Pro)</h3>
              <div className="mb-2">
                <span className="text-3xl font-black text-slate-900 dark:text-white">
                  {region === "EG" ? "3,500 - 4,500" : "300"}
                </span>
                <span className="text-slate-500 dark:text-slate-400 mr-1 text-sm font-semibold">
                  {region === "EG" ? "ج.م / شهرياً" : "$ / شهرياً"}
                </span>
              </div>
              <p className="text-emerald-600 dark:text-emerald-400 font-semibold mb-2">اشتراك شهري متكرر</p>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">حل مثالي للشركات العقارية الناشئة والمتوسطة</p>
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
                <span>حتى 500 محادثة شهرياً</span>
              </li>
              <li className="flex items-start gap-3 text-slate-400 dark:text-slate-500">
                <X size={20} className="text-red-500 shrink-0 mt-0.5" />
                <span className="line-through">لوحة تحكم وتحليلات (Dashboard)</span>
              </li>
            </ul>
            <a href="https://wa.me/201028086887?text=أهلاً%20Botify%20Agents،%20أريد%20حجز%20الباقة%20البرو%20لبدء%20أتمتة%20المبيعات" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-300 dark:hover:bg-slate-700 transition-colors">
              احجز باقة البرو الآن
            </a>
          </div>

          {/* Plan 3: Pro Max Plan */}
          <div className="bg-slate-900 dark:bg-slate-900 border border-emerald-500/50 rounded-3xl p-8 flex flex-col relative shadow-xl shadow-emerald-500/10 hover:shadow-emerald-500/20 hover:-translate-y-1 transition-all duration-300">
            <div className="absolute top-0 right-8 -translate-y-1/2">
              <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                🔥 الأكثر طلباً
              </span>
            </div>
            <div className="mb-8">
              <h3 className="text-xl font-bold text-white mb-2">باقة البرو ماكس (Pro Max)</h3>
              <div className="mb-2">
                <span className="text-3xl font-black text-white">
                  {region === "EG" ? "6,000 - 7,500" : "500"}
                </span>
                <span className="text-slate-400 mr-1 text-sm font-semibold">
                  {region === "EG" ? "ج.م / شهرياً" : "$ / شهرياً"}
                </span>
              </div>
              <p className="text-emerald-400 font-semibold mb-2">اشتراك شهري متكرر</p>
              <p className="text-xs text-slate-400 leading-relaxed">الخيار المتكامل للشركات العقارية الرائدة</p>
            </div>
            <ul className="space-y-4 mb-8 flex-1">
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span>كل مميزات الباقة البرو</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">لوحة تحكم تنفيذية شاملة (Executive Dashboard)</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">تقارير ذكية وتحليل لبيانات العملاء</span>
              </li>
              <li className="flex items-start gap-3 text-slate-200">
                <CheckCircle size={20} className="text-emerald-400 shrink-0 mt-0.5" />
                <span className="leading-snug">حتى 1000 محادثة شهرياً</span>
              </li>
            </ul>
            <a href="https://wa.me/201028086887?text=أهلاً%20Botify%20Agents،%20أريد%20حجز%20الباقة%20البرو%20ماكس%20الشاملة%20لشركتي%20العقارية" target="_blank" rel="noopener noreferrer" className="w-full block text-center py-3.5 rounded-xl bg-gradient-to-l from-emerald-600 to-emerald-400 text-white font-bold shadow-lg hover:scale-105 transition-transform duration-300">
              احجز باقة البرو ماكس الآن
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
