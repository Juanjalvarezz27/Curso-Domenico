import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; 
import { redirect } from "next/navigation";
import { BookOpen, Crown, ShieldAlert } from "lucide-react";

import BasicoView from "../components/home/BasicoView";
import PremiumView from "../components/home/PremiumView";
import AdminViewToggle from "../components/home/AdminViewToggle";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    redirect("/login");
  }

  const isAdmin = session.user.role === "ADMIN";
  const userPlan = session.user.plan || "BASICO";
  const userName = session.user.name?.split(" ")[0] || session.user.username; 

  return (
    <main className="min-h-screen bg-gray-50/50 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER COMÚN */}
        <header className="mb-12 border-b border-gray-200/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase mb-2">
              Tu <span className="text-orange-500">Espacio</span>
            </h1>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Bienvenido de vuelta, {userName}
            </p>
          </div>
          
          {/* BADGE: ADMIN o Plan del Alumno */}
          <div className={`px-5 py-2.5 rounded-2xl border flex items-center gap-2 shadow-sm ${
            isAdmin ? "bg-gray-900 border-gray-900 text-white" :
            userPlan === "PREMIUM" 
              ? "bg-linear-to-r from-orange-500 to-orange-400 border-orange-400 text-white" 
              : "bg-white border-gray-200 text-gray-600"
          }`}>
            {isAdmin ? <ShieldAlert size={18} className="text-orange-500" /> : (userPlan === "PREMIUM" ? <Crown size={18} /> : <BookOpen size={18} />)}
            <span className="text-xs font-black uppercase tracking-widest">
              {isAdmin ? "ADMIN" : `Plan ${userPlan}`}
            </span>
          </div>
        </header>

        {/* LÓGICA DE RENDERIZADO */}
        {isAdmin ? (
          <AdminViewToggle />
        ) : (
          userPlan === "PREMIUM" ? <PremiumView /> : <BasicoView />
        )}

      </div>
    </main>
  );
}