export default function VisionPage() {
  return (
    <main className="min-h-screen bg-[#0A192F] pt-32 pb-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* HERO SECTION */}
        <div className="mb-24">
          <h2 className="text-[#FF5722] font-black uppercase tracking-[0.4em] text-[10px] mb-6">The Master Plan</h2>
          <h1 className="text-6xl md:text-9xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8">
            Defining the <br/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500 italic">
              Nairobi Standard
            </span>
          </h1>
          <p className="text-xl text-slate-400 leading-relaxed max-w-2xl font-medium">
            WACOSE was born from the streets of Nairobi with a single goal: to prove that 
            local logistics can operate with global-tier technology and creative precision.
          </p>
        </div>

        {/* THE THREE PILLARS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
          {[
            { 
              title: "Hyper-Local Logistics", 
              desc: "Moving assets across the city with zero friction through custom-built dispatch algorithms.",
              icon: "⚡" 
            },
            { 
              title: "Cinematic Branding", 
              desc: "Documenting the growth of African enterprises through high-definition visual storytelling.",
              icon: "📸" 
            },
            { 
              title: "Scalable Systems", 
              desc: "Architecting the digital infrastructure that powers the future of East African commerce.",
              icon: "💻" 
            }
          ].map((pillar) => (
            <div key={pillar.title} className="bg-white/5 border border-white/10 p-10 rounded-[3rem] hover:bg-white/10 transition-colors">
              <div className="text-4xl mb-6">{pillar.icon}</div>
              <h3 className="text-xl font-black text-white uppercase mb-4 tracking-tight">{pillar.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>

        {/* THE 10-YEAR ROADMAP */}
        <div className="border-t border-white/10 pt-20">
          <h3 className="text-white font-black uppercase tracking-widest text-sm mb-16">The 2026—2036 Roadmap</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
            <div className="relative">
              <div className="w-4 h-4 bg-[#FF5722] rounded-full mb-6 shadow-[0_0_15px_#FF5722]"></div>
              <h4 className="text-2xl font-black text-white mb-2">The Foundation</h4>
              <p className="text-slate-500 text-xs font-bold uppercase mb-4">2026 — 2028</p>
              <p className="text-slate-400 text-sm">Establishing the core logistics network and launching the WACOSE digital platform across Nairobi.</p>
            </div>

            <div className="relative">
              <div className="w-4 h-4 bg-white/20 rounded-full mb-6"></div>
              <h4 className="text-2xl font-black text-white mb-2">Integration</h4>
              <p className="text-slate-500 text-xs font-bold uppercase mb-4">2029 — 2032</p>
              <p className="text-slate-400 text-sm">Merging media production with real-time delivery tracking to create the first "Context-Aware" logistics service.</p>
            </div>

            <div className="relative">
              <div className="w-4 h-4 bg-white/20 rounded-full mb-6"></div>
              <h4 className="text-2xl font-black text-white mb-2">Pan-African</h4>
              <p className="text-slate-500 text-xs font-bold uppercase mb-4">2033 — 2036</p>
              <p className="text-slate-400 text-sm">Scaling the WACOSE systems to Kampala, Dar es Salaam, and Kigali, setting the standard for regional trade.</p>
            </div>
          </div>
        </div>

        {/* FOUNDER'S QUOTE */}
        <div className="mt-40 text-center pb-20">
          <p className="text-3xl md:text-5xl font-black text-white italic tracking-tighter leading-tight max-w-4xl mx-auto">
            "We don't just move packages. We move the systems that build empires."
          </p>
          <p className="mt-8 text-[#FF5722] font-black uppercase tracking-[0.3em] text-xs">
            — Denis Wasike, Founder & CTO
          </p>
        </div>
      </div>
    </main>
  );
}