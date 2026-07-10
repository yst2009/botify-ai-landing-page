import Image from "next/image";
import Link from "next/link";
import { Bell, Search, LayoutDashboard, MessageSquare, Package, CreditCard, ChevronDown } from "lucide-react";
// Safely importing the local image file
import logo from "./Botify-Agents.jpg";

export function DashboardNavbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-[#080c14]/95 backdrop-blur-xl border-b border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Left Section: Logo & Platform Badge */}
          <div className="flex items-center gap-6">
            <Link href="/dashboard" className="flex items-center gap-4 group">
              <div className="w-10 h-10 flex items-center justify-center overflow-hidden">
                <Image 
                  src={logo} 
                  alt="Botify Agents" 
                  priority
                  className="h-full w-full object-contain transition-all duration-300 mix-blend-multiply dark:invert dark:mix-blend-screen dark:brightness-150 dark:contrast-125"
                />
              </div>
              <div className="hidden sm:flex items-center gap-3 border-l border-slate-800/60 pl-4 ml-2">
                <span className="bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-widest shadow-[0_0_10px_rgba(16,185,129,0.2)]">
                  Platform
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1 ml-4">
              <Link href="/dashboard/analytics" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                <LayoutDashboard size={16} className="text-slate-400" />
                Analytics
              </Link>
              <Link href="/dashboard/conversations" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                <MessageSquare size={16} className="text-slate-400" />
                Conversations
              </Link>
              <Link href="/dashboard/inventory" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                <Package size={16} className="text-slate-400" />
                Inventory
              </Link>
              <Link href="/dashboard/billing" className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/50 transition-all duration-200">
                <CreditCard size={16} className="text-slate-400" />
                Billing
              </Link>
            </div>
          </div>

          {/* Right Section: Actions & Profile */}
          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2">
              <button className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                <Search size={18} />
              </button>
              <button className="relative p-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors">
                <Bell size={18} />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-emerald-500 rounded-full border-2 border-[#080c14]"></span>
              </button>
            </div>
            
            <div className="w-px h-6 bg-slate-800/60 mx-1 hidden sm:block"></div>

            <button className="flex items-center justify-center px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-cyan-500 text-white text-sm font-bold shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_25px_rgba(16,185,129,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 border border-emerald-400/20">
              New Agent
            </button>
            
            <button className="flex items-center gap-2 pl-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-slate-700 to-slate-800 border border-slate-600 flex items-center justify-center text-sm font-bold text-white shadow-inner">
                AD
              </div>
              <ChevronDown size={14} className="text-slate-400 hidden sm:block" />
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
