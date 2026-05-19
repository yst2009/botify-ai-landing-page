import Link from "next/link";
import { ThemeToggle } from "./ThemeToggle";

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center gap-8">
            <Link href="/" className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
              Botify-AI <span className="text-emerald-500">✨</span>
            </Link>
            <nav className="hidden md:flex items-center gap-6">
              <Link href="#features" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">المميزات</Link>
              <Link href="#how-it-works" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">طريقة العمل</Link>
              <Link href="#pricing" className="text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors">الأسعار</Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link href="https://dashboard-botify-ai.netlify.app" target="_blank" className="hidden md:flex items-center justify-center px-5 py-2.5 rounded-xl border-2 border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white font-bold hover:bg-slate-50 dark:hover:bg-slate-900 transition-colors">
              لوحة التحكم
            </Link>
            <Link href="#pricing" className="hidden md:flex items-center justify-center px-6 py-2.5 rounded-xl bg-gradient-to-l from-emerald-600 to-emerald-400 text-white font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 transition-all duration-300">
              ابدأ تجربة مجانية
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
