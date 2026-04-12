import React from 'react';
import { 
  Package, 
  Truck, 
  Briefcase, 
  ShoppingBag, 
  FileLock, 
  Wrench, 
  Utensils, 
  Baby, 
  Zap, 
  Building2,
  Shirt,
  BoxSelect
} from 'lucide-react';

export default function LogisticsPage() {
  const categories = [
    { name: "Small Parcels", icon: <Package className="w-5 h-5" />, desc: "Keys, Gadgets, Small items" },
    { name: "Medium & Large", icon: <BoxSelect className="w-5 h-5" />, desc: "Boxes, Electronics, Gear" },
    { name: "Clothes & Fashion", icon: <Shirt className="w-5 h-5" />, desc: "Boutique & Laundry drop-offs" },
    { name: "Wide Cargo", icon: <Truck className="w-5 h-5" />, desc: "Bulky items & Heavy logistics" },
    { name: "Confidential Docs", icon: <FileLock className="w-5 h-5" />, desc: "Sensitive legal & business files" },
    { name: "Household Shopping", icon: <ShoppingBag className="w-5 h-5" />, desc: "Groceries & Supermarket runs" },
    { name: "Baby Shop", icon: <Baby className="w-5 h-5" />, desc: "Diapers, Formula & Essentials" },
    { name: "Food Deliveries", icon: <Utensils className="w-5 h-5" />, desc: "Restaurant & Home-cooked meals" },
    { name: "Garage Errands", icon: <Wrench className="w-5 h-5" />, desc: "Spare parts & Mechanic coordination" },
    { name: "Law Firm Errands", icon: <Briefcase className="w-5 h-5" />, desc: "Court filings & Document serving" },
    { name: "Online Shops", icon: <Zap className="w-5 h-5" />, desc: "E-commerce fulfillment" },
    { name: "Premium/Corporate", icon: <Building2 className="w-5 h-5" />, desc: "White-glove dedicated handling" },
  ];

  return (
    <main className="min-h-screen bg-[#0A192F] pt-32 p-6 md:p-10 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row justify-between items-end mb-20 gap-10">
          <h1 className="text-6xl md:text-8xl font-black uppercase tracking-tighter leading-[0.9]">
            Nairobi <br />
            <span className="text-[#FF5722]">Logistics Hub</span>
          </h1>
          <div className="max-w-md">
            <p className="text-slate-400 leading-relaxed text-lg mb-6">
              Operating a dedicated fleet of motorcycle couriers, WACOSE ensures that your documents, 
              packages, and creative assets move across the city with zero friction.
            </p>
            <button className="bg-[#FF5722] hover:bg-orange-600 text-white font-black py-4 px-10 rounded-full uppercase tracking-widest text-xs transition-all">
              Open Corporate Account
            </button>
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-[#FF5722]/50 transition-colors">
            <div className="flex justify-between items-center mb-8">
              <h3 className="text-[#FF5722] font-black uppercase tracking-widest text-xs">Express Orders</h3>
              <span className="bg-[#FF5722]/20 text-[#FF5722] text-[10px] font-bold px-2 py-1 rounded">FASTEST</span>
            </div>
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <div>
                <p className="font-bold text-2xl">Lightning Courier</p>
                <p className="text-slate-500 text-sm">Priority dispatch | Under 45 mins</p>
              </div>
              <span className="text-3xl font-black">KSh 450</span>
            </div>
          </div>

          <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-white/20 transition-colors">
            <h3 className="text-slate-500 font-black uppercase tracking-widest text-xs mb-8">Standard Tier</h3>
            <div className="flex justify-between items-center border-b border-white/5 pb-6">
              <div>
                <p className="font-bold text-2xl">Daily Delivery</p>
                <p className="text-slate-500 text-sm">Scheduled routes | Same day</p>
              </div>
              <span className="text-3xl font-black">KSh 250</span>
            </div>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-black uppercase tracking-widest">Specialized Handlings</h2>
            <div className="h-px bg-white/10 flex-grow"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((cat, i) => (
              <div 
                key={i} 
                className="group bg-white/5 p-6 rounded-2xl border border-white/5 hover:bg-white/10 hover:border-[#FF5722]/30 transition-all cursor-default"
              >
                <div className="text-[#FF5722] mb-4 group-hover:scale-110 transition-transform">
                  {cat.icon}
                </div>
                <h4 className="font-bold text-lg mb-1">{cat.name}</h4>
                <p className="text-slate-500 text-sm leading-snug">{cat.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Meta */}
        <div className="mt-20 pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-bold text-slate-600 uppercase tracking-[0.2em]">
          <p>WACOSE DEEP LOGISTICS DIVISION</p>
          <p>NAIROBI - MOMBASA - KISUMU</p>
        </div>
      </div>
    </main>
  );
}