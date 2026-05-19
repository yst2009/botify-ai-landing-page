"use client";

import { useState, useEffect } from "react";
import { ArrowLeft, X, MessageCircle } from "lucide-react";
import Link from "next/link";

export function HeroActions() {
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [showBotResponse, setShowBotResponse] = useState(false);

  useEffect(() => {
    if (isDemoOpen) {
      setShowBotResponse(false);
      const timer = setTimeout(() => {
        setShowBotResponse(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [isDemoOpen]);

  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link href="#pricing" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-l from-emerald-600 to-emerald-400 text-white font-bold shadow-lg shadow-emerald-500/30 hover:scale-105 hover:shadow-emerald-500/50 transition-all duration-300 relative group overflow-hidden">
          <span className="relative z-10 flex items-center justify-center gap-2">
            ابدأ أتمتة شركتك الآن <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          </span>
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
        </Link>
        <button 
          onClick={() => setIsDemoOpen(true)}
          className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-bold hover:border-emerald-500 dark:hover:border-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 flex items-center justify-center gap-2"
        >
          شاهد ديمو حي 🎥
        </button>
      </div>

      {isDemoOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm animate-in fade-in duration-300">
          <div className="w-full max-w-md bg-[#efeae2] dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl animate-in zoom-in-95 duration-300 flex flex-col h-[500px] border border-slate-200 dark:border-slate-800" dir="rtl">
            {/* Header */}
            <div className="bg-[#075e54] text-white px-4 py-3 flex items-center justify-between shadow-md z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-xl">✨</span>
                </div>
                <div>
                  <h3 className="font-bold text-sm">Botify-AI Assistant</h3>
                  <p className="text-[10px] text-emerald-100/80">شغال 24 ساعة</p>
                </div>
              </div>
              <button onClick={() => setIsDemoOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors flex items-center justify-center">
                <X size={20} />
                <span className="sr-only">إغلاق</span>
              </button>
            </div>

            {/* Chat Area */}
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-slate-100 dark:bg-slate-950">
              {/* User Message */}
              <div className="self-end bg-[#dcf8c6] dark:bg-emerald-800 text-slate-900 dark:text-emerald-50 max-w-[80%] rounded-2xl rounded-tr-none px-4 py-2 shadow-sm text-sm">
                مساء الخير، متاح شقق 3 غرف في التجمع؟
                <span className="text-[10px] text-slate-500 dark:text-emerald-200/60 block mt-1 text-left">الآن</span>
              </div>

              {/* Bot Status/Message */}
              {!showBotResponse ? (
                <div className="self-start bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 max-w-[80%] rounded-2xl rounded-tl-none px-4 py-3 shadow-sm text-sm flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              ) : (
                <div className="self-start bg-white dark:bg-slate-800 text-slate-900 dark:text-slate-100 max-w-[85%] rounded-2xl rounded-tl-none px-4 py-2 shadow-sm text-sm leading-relaxed animate-in fade-in slide-in-from-bottom-2 duration-300">
                  <p>أهلاً بك يا فندم! ✨</p>
                  <p className="mt-1">متاح لدينا شقة في (التجمع الخامس) مساحة 160م، 3 غرف، بمقدم 10% وتقسيط على 7 سنوات.</p>
                  <p className="mt-2 font-bold text-emerald-700 dark:text-emerald-400">هل تحب أحجزلك موعد معاينة مع مستشارنا العقاري؟</p>
                  <span className="text-[10px] text-slate-400 dark:text-slate-500 block mt-1 text-left">الآن</span>
                </div>
              )}
            </div>
            
            {/* Input Area placeholder */}
            <div className="bg-[#f0f0f0] dark:bg-slate-900 p-3 flex items-center gap-2">
              <div className="flex-1 bg-white dark:bg-slate-950 rounded-full h-10 px-4 flex items-center text-slate-400 text-sm shadow-sm">
                اكتب رسالة...
              </div>
              <div className="w-10 h-10 rounded-full bg-[#008f68] flex items-center justify-center text-white shadow-sm">
                <MessageCircle size={20} className="fill-current" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
