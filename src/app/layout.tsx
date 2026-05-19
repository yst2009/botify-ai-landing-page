import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Botify-AI | أتمتة تسويق ومبيعات العقارات عبر الواتساب",
  description: "ضاعف مبيعات شركتك العقارية وأتمت ردود الواتساب بنسبة 100%. نظام Botify-AI يدرب مساعد ذكي يقرأ الكتالوجات ويؤهل العملاء تلقائياً.",
  openGraph: {
    title: "Botify-AI | أتمتة تسويق ومبيعات العقارات عبر الواتساب",
    description: "ضاعف مبيعات شركتك العقارية وأتمت ردود الواتساب بنسبة 100%. نظام Botify-AI يدرب مساعد ذكي يقرأ الكتالوجات ويؤهل العملاء تلقائياً.",
    url: "https://botify-ai.com",
    siteName: "Botify-AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "منصة Botify-AI لأتمتة العقارات",
      },
    ],
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botify-AI | أتمتة تسويق ومبيعات العقارات عبر الواتساب",
    description: "ضاعف مبيعات شركتك العقارية وأتمت ردود الواتساب بنسبة 100%. نظام Botify-AI يدرب مساعد ذكي يقرأ الكتالوجات ويؤهل العملاء تلقائياً.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <body className={`${cairo.className} min-h-screen flex flex-col bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-100 transition-colors duration-300`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
