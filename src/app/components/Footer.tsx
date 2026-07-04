import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-slate-950 py-12 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight mb-4">
          Botify Agents <span className="text-emerald-500">✨</span>
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 max-w-lg mx-auto">
          أول سيلز عقارات آلي يعمل 24 ساعة على الواتساب بذكاء خارق.
        </p>
        <div className="flex items-center justify-center gap-6 mb-8">
          <Link href="#features" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">المميزات</Link>
          <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">طريقة العمل</Link>
          <Link href="#pricing" className="text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">الأسعار</Link>
        </div>
        <p className="text-sm text-slate-400 dark:text-slate-600">
          © {new Date().getFullYear()} Botify Agents by Dextra-Agent. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  );
}
