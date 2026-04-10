import { db } from '../../db/index';
import { orders } from '../../db/schema';
import { desc } from 'drizzle-orm';
import { redirect } from 'next/navigation';

// We explicitly type the props for Next.js 14+
export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ pw?: string }>;
}) {
  // 1. Wait for the search params to load
  const params = await searchParams;
  const secret = process.env.ADMIN_PASSWORD;

  // 2. The Security Check
  // If no password is provided OR it doesn't match the .env
  if (!params.pw || params.pw !== secret) {
    console.log("❌ Admin Access Denied. Expected:", secret, "Got:", params.pw);
    redirect('/'); 
  }

  // 3. If it matches, fetch the orders
  const allOrders = await db.select().from(orders).orderBy(desc(orders.id));

  return (
    <div className="p-8 bg-slate-50 min-h-screen font-sans text-[#0A192F]">
      <div className="max-w-5xl mx-auto">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-black uppercase tracking-tighter">
            WACOSE <span className="text-[#FF5722]">Command Center</span>
          </h1>
          <div className="flex items-center gap-4">
            <span className="text-[10px] bg-green-100 text-green-700 px-2 py-1 rounded font-bold uppercase">Authenticated</span>
            <a href="/" className="text-xs font-bold text-slate-400 hover:text-[#FF5722] uppercase">Exit</a>
          </div>
        </header>

        {/* ... table code remains the same ... */}
        <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-slate-100">
           <table className="w-full text-left">
            <thead className="bg-[#0A192F] text-white">
              <tr>
                <th className="p-6 text-xs uppercase">ID</th>
                <th className="p-6 text-xs uppercase">Pickup</th>
                <th className="p-6 text-xs uppercase">Destination</th>
              </tr>
            </thead>
            <tbody>
              {allOrders.map((order: any) => (
                <tr key={order.id} className="border-b border-slate-50">
                  <td className="p-6 font-mono text-slate-400">#{order.id}</td>
                  <td className="p-6 font-bold">{order.pickup}</td>
                  <td className="p-6">{order.destination}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}