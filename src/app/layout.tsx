import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Botify AI | Advanced AI Sales Agent for WhatsApp Automation",
  description: "Automate your customer acquisition and sales workflows with Botify AI, the leading multi-tenant AI sales agent platform seamlessly integrated with WhatsApp and Supabase.",
  keywords: ["AI Sales Agent", "WhatsApp Automation", "SaaS", "Real Estate AI", "Automated Sales Bot", "Botify AI"],
  openGraph: {
    title: "Botify AI | Advanced AI Sales Agent for WhatsApp Automation",
    description: "Automate your customer acquisition and sales workflows with Botify AI, the leading multi-tenant AI sales agent platform seamlessly integrated with WhatsApp and Supabase.",
    url: "https://botify-ai.com",
    siteName: "Botify AI",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Botify AI - Advanced AI Sales Agent",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Botify AI | Advanced AI Sales Agent for WhatsApp Automation",
    description: "Automate your customer acquisition and sales workflows with Botify AI, the leading multi-tenant AI sales agent platform seamlessly integrated with WhatsApp and Supabase.",
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
