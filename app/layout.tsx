import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

export const metadata: Metadata = {
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.png',
    apple: '/apple-icon.png',
  },
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://betvaultonline.com'),
  title: "BetVault | Online Cricket Betting, Sports Betting & Casino",
  description: "Create your instant online sports betting ID for IPL, Cricket, Football & Live Casino in 2 minutes. 5-minute instant UPI withdrawals and 24/7 human WhatsApp support.",
  keywords: ["Betting ID", "Cricket Betting ID", "IPL Betting 2026", "Diamond Exchange ID", "SkyExchange ID", "Instant UPI Withdrawal"],
  verification: {
    google: "cMQV48otbl1KCDV0rc8NsQuqg6xQLBwPRbmCsdZlEGA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-amethyst-950 text-slate-100 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
