'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#0A192F]/90 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-[#FF5722] rounded-xl flex items-center justify-center font-black text-white italic transition-transform group-hover:rotate-12">W</div>
          <span className="text-2xl font-black tracking-tighter uppercase italic text-white">WACOSE</span>
        </Link>

        <div className="hidden md:flex gap-10 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
          <Link href="/" className="hover:text-[#FF5722] transition-colors">Home</Link>
          <Link href="/logistics" className="hover:text-[#FF5722] transition-colors">Logistics</Link>
          <Link href="/media" className="hover:text-[#FF5722] transition-colors">Media</Link>
          <Link href="/vision" className="hover:text-[#FF5722] transition-colors">Our Vision</Link>
        </div>

        <Link href="/#book" className="bg-[#FF5722] text-white text-[10px] font-black px-6 py-3 rounded-full uppercase tracking-widest hover:shadow-[0_0_20px_rgba(255,87,34,0.4)] transition-all">
          Book Service
        </Link>
      </div>
    </nav>
  );
}