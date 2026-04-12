'use client';

import { useState } from 'react';
import { handleBooking } from './actions';

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');
  const [price, setPrice] = useState<number | null>(null);

  // Simulated price calculator for Nairobi deliveries
  const handlePriceCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > 2) {
      setPrice(250); // Base KSh rate
    } else {
      setPrice(null);
    }
  };

  async function clientAction(formData: FormData) {
    setStatus('sending');
    try {
      await handleBooking(formData);
      setStatus('success');
      setTimeout(() => {
        setStatus('idle');
        setPrice(null);
      }, 5000);
    } catch (error) {
      console.error("Booking failed", error);
      setStatus('idle');
    }
  }

  return (
    <main className="min-h-screen bg-[#0A192F] p-4 md:p-10 font-sans text-white">
      {/* HEADER */}
      <header className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic">WACOSE</h1>
          <p className="text-[#FF5722] font-bold tracking-[0.2em] uppercase text-sm mt-2">
            Logistics • Media • Design
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. LOGISTICS & PRICE CALCULATOR */}
        <section className="bg-white rounded-[2.5rem] p-8 text-[#0A192F] shadow-xl flex flex-col justify-between min-h-[450px]">
          <div>
            <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Logistics</h2>
            <p className="text-slate-500 text-sm mb-6 italic">Reliable courier services.</p>
            
            <form action={clientAction} className="space-y-4">
              <input 
                name="pickup"
                onChange={handlePriceCheck}
                placeholder="Pickup Location" 
                className="w-full p-4 bg-slate-100 rounded-2xl outline-none text-sm border-2 border-transparent focus:border-[#FF5722]"
                required
              />
              <input 
                name="destination"
                placeholder="Destination" 
                className="w-full p-4 bg-slate-100 rounded-2xl outline-none text-sm border-2 border-transparent focus:border-[#FF5722]"
                required
              />

              {price && (
                <div className="bg-orange-50 p-4 rounded-2xl border-l-4 border-[#FF5722] flex justify-between items-center animate-pulse">
                  <span className="text-[10px] font-black uppercase text-slate-400">Est. Cost</span>
                  <span className="text-xl font-black text-[#FF5722]">KSh {price}</span>
                </div>
              )}

              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-2xl font-black transition-all uppercase tracking-widest text-sm text-white ${
                  status === 'success' ? 'bg-green-500' : 'bg-[#FF5722]'
                }`}
              >
                {status === 'idle' && "Request Rider Now"}
                {status === 'sending' && "Processing..."}
                {status === 'success' && "Order Received! 🚀"}
              </button>
            </form>
          </div>
        </section>

        {/* 2. MEDIA STUDIO (With Lightbox Trick) */}
        <section className="bg-[#1A2C42] rounded-[2.5rem] p-8 md:col-span-2 flex flex-col justify-between min-h-[450px] relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl font-black mb-1 uppercase tracking-tighter">Media Studio</h2>
            <p className="text-slate-400 text-sm max-w-sm">HD Photography & Cinematography.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative z-10">
            {[1, 2, 3, 4].map((i) => (
              <div 
                key={i} 
                onClick={() => window.open(`/shoot-${i}.jpg`, '_blank')}
                className="aspect-[3/4] bg-slate-800 rounded-2xl overflow-hidden relative group/img cursor-zoom-in border border-white/5"
              >
                <img src={`/shoot-${i}.jpg`} alt="Work" className="w-full h-full object-cover transition-transform group-hover/img:scale-110" />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="text-[10px] font-bold uppercase tracking-widest">View HD</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3. DESIGN LAB (Tech Stack Pills) */}
        <section className="bg-[#FF5722] rounded-[2.5rem] p-8 md:col-span-2 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter text-[#0A192F]">Design Lab</h2>
            <div className="flex flex-wrap gap-2 mt-4">
              {['Next.js', 'TypeScript', 'Tailwind', 'PostgreSQL', 'Drizzle'].map((tech) => (
                <span key={tech} className="bg-[#0A192F] text-white text-[10px] font-bold px-3 py-1.5 rounded-full uppercase">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="text-6xl font-black text-white/10 select-none">BUILD. SCALE. BECOME</div>
        </section>

        {/* 4. CONTACT */}
        <section className="bg-white rounded-[2.5rem] p-8 text-[#0A192F] flex flex-col justify-center items-center text-center">
          <h3 className="text-xl font-black">Denis Wasike</h3>
          <p className="text-sm text-slate-500 uppercase font-bold mt-1">call/Text or WhatsApp: 0759 162363</p>
          <p className="text-sm text-slate-500 uppercase font-bold mt-1">Nairobi, Kenya</p>
        </section>

      </div>
    </main>
  );
}