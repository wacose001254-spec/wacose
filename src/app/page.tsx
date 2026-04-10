'use client';

import { useState } from 'react';
import { handleBooking } from './actions';

export default function Page() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  async function clientAction(formData: FormData) {
    setStatus('sending');
    try {
      await handleBooking(formData);
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error("Booking failed", error);
      setStatus('idle');
    }
  }

  return (
    <main className="min-h-screen bg-[#0A192F] p-4 md:p-10 font-sans text-white">
      {/* HEADER SECTION */}
      <header className="max-w-7xl mx-auto mb-12 flex justify-between items-end">
        <div>
          <h1 className="text-6xl font-black tracking-tighter uppercase italic">WACOSE</h1>
          <p className="text-[#FF5722] font-bold tracking-[0.2em] uppercase text-sm mt-2">
            Logistics • Media • Design
          </p>
        </div>
        <div className="hidden md:block text-right text-slate-500 text-xs font-mono uppercase">
          Nairobi, Kenya <br /> 41.2° N / 2.3° E
        </div>
      </header>

      {/* THE BENTO GRID */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* 1. LOGISTICS & BOOKING (The "Engine") */}
        <section className="bg-white rounded-[2.5rem] p-8 text-[#0A192F] shadow-xl flex flex-col justify-between min-h-[450px] md:col-span-1">
          <div>
            <h2 className="text-2xl font-black mb-2 uppercase tracking-tight">Logistics</h2>
            <p className="text-slate-500 text-sm mb-8 italic">Reliable courier & boda services across Nairobi.</p>
            
            <form action={clientAction} className="space-y-4">
              <input 
                name="pickup"
                type="text" 
                placeholder="Pickup Location" 
                className="w-full p-4 bg-slate-100 rounded-2xl outline-none text-sm border-2 border-transparent focus:border-[#FF5722] transition-all"
                required
              />
              <input 
                name="destination"
                type="text" 
                placeholder="Destination" 
                className="w-full p-4 bg-slate-100 rounded-2xl outline-none text-sm border-2 border-transparent focus:border-[#FF5722] transition-all"
                required
              />
              <button 
                type="submit"
                disabled={status === 'sending'}
                className={`w-full py-4 rounded-2xl font-black transition-all uppercase tracking-widest text-sm text-white ${
                  status === 'success' ? 'bg-green-500' : 'bg-[#FF5722]'
                } hover:scale-[1.02] active:scale-[0.98] shadow-lg`}
              >
                {status === 'idle' && "Request Rider Now"}
                {status === 'sending' && "Processing..."}
                {status === 'success' && "Order Received! 🚀"}
              </button>

              {status === 'success' && (
                <p className="text-green-600 text-[10px] font-black text-center mt-2 animate-pulse uppercase">
                  Rider Dispatching in 3... 2... 1...
                </p>
              )}
            </form>
          </div>
        </section>

        {/* 2. MEDIA STUDIO & PHOTOGRAPHY */}
<section className="bg-[#1A2C42] rounded-[2.5rem] p-8 md:col-span-2 flex flex-col justify-between relative overflow-hidden group min-h-[480px] border border-white/5">
  <div className="relative z-10 flex justify-between items-start">
    <div>
      <h2 className="text-4xl font-black mb-1 uppercase tracking-tighter text-white">Media Studio</h2>
      <p className="text-slate-400 text-sm max-w-sm italic">Capturing the pulse of the city through professional lenswork.</p>
    </div>
    <div className="flex flex-col items-end gap-1">
       <span className="bg-[#FF5722] text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest shadow-lg shadow-[#FF5722]/20 text-white">Portfolio</span>
       <span className="text-[9px] text-slate-500 font-mono uppercase tracking-widest">HD Quality</span>
    </div>
  </div>

  {/* Interactive HD Gallery Grid */}
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 relative z-10">
    {[
      { id: 1, src: '/shoot-1.jpg', alt: 'Our Brand Motorcycle' },
      { id: 2, src: '/shoot-2.jpg', alt: 'Corporate Delivery' },
      { id: 3, src: '/shoot-3.jpg', alt: 'Birthday Photo Shoot' },
      { id: 4, src: '/shoot-4.jpg', alt: 'Web Development' }
    ].map((photo) => (
      <div key={photo.id} className="aspect-[3/4] bg-slate-800/50 rounded-2xl border border-white/5 overflow-hidden relative group/img cursor-pointer">
        <img 
          src={photo.src} 
          alt={photo.alt}
          className="w-full h-full object-cover transition-transform duration-500 group-hover/img:scale-110"
        />
        {/* The Fixed Overlay Section */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] via-transparent to-transparent opacity-0 group-hover/img:opacity-90 transition-opacity duration-300 flex items-end p-4">
          <p className="text-[10px] font-black uppercase tracking-widest text-[#FF5722]">
            {photo.alt}
          </p> {/* This was the missing closing tag! */}
        </div>
      </div>
    ))}
  </div>

  <div className="relative z-10 flex justify-between items-center mt-6">
    <button className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 hover:text-white transition-colors">
      View All Projects →
    </button>
    <div className="flex gap-2 items-center">
      <div className="w-2 h-2 rounded-full bg-[#FF5722] animate-ping"></div>
      <span className="text-[9px] font-bold text-slate-500 uppercase">Studio Live</span>
    </div>
  </div>
</section>

        {/* 3. DESIGN & WEB DEV */}
        <section className="bg-[#FF5722] rounded-[2.5rem] p-8 md:col-span-2 flex flex-col justify-between min-h-[300px]">
          <div>
            <h2 className="text-3xl font-black mb-2 uppercase tracking-tighter text-[#0A192F]">Design Lab</h2>
            <p className="text-[#0A192F]/70 text-sm font-bold uppercase">Web Dev • Graphics • UI/UX</p>
          </div>
          <div className="text-6xl font-black text-white/20 select-none">CODE. CREATE. BECOME</div>
        </section>

        {/* 4. CONTACT / FOOTER BOX */}
        <section className="bg-white rounded-[2.5rem] p-8 text-[#0A192F] flex flex-col justify-center items-center text-center">
          <p className="text-xs font-bold uppercase text-slate-400 mb-2">Ready to grow?</p>
          <h3 className="text-xl font-black">Contact Denis</h3>
          <p className="text-sm mt-2 text-slate-600">0759 162363</p>
          <p className="text-sm mt-2 text-slate-600">Nairobi, KE</p>
        </section>

      </div>
    </main>
  );
}