import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "WACOSE | Logistics, Media & Design",
  description: "Denis Wasike's tech-enabled empire in Nairobi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-[#0A192F] text-white`}>
        {/* Sticky World-Class Navigation */}
        <Navbar />
        
        {/* Main Content Area with padding for the Navbar */}
        <div className="pt-24 md:pt-32">
          {children}
        </div>

        {/* Professional Footer */}
        <footer className="py-20 border-t border-white/5 text-center mt-20">
          <p className="text-[10px] font-black uppercase tracking-[0.5em] text-slate-500">
            © 2026 WACOSE EMPIRE • NAIROBI, KENYA
          </p>
        </footer>
      </body>
    </html>
  );
} 