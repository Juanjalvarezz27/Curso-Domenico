// src/app/home/page.tsx
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route"; // Ajusté la ruta relativa
import { redirect } from "next/navigation";
import { PlayCircle, Lock, Sparkles, BookOpen, Crown } from "lucide-react";

export default async function UserDashboard() {
  const session = await getServerSession(authOptions);

  // Protección extra por si alguien llega aquí sin sesión válida
  if (!session?.user) {
    redirect("/login");
  }

  const userPlan = session.user.plan || "BASICO";
  const userName = session.user.name?.split(" ")[0] || session.user.username; // Agarra el primer nombre

  return (
    <main className="min-h-screen bg-gray-50/50 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER COMÚN PARA AMBOS PLANES */}
        <header className="mb-12 border-b border-gray-200/60 pb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight uppercase mb-2">
              Tu <span className="text-orange-500">Espacio</span>
            </h1>
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
              Bienvenido de vuelta, {userName}
            </p>
          </div>
          
          {/* Badge del plan actual */}
          <div className={`px-5 py-2.5 rounded-2xl border flex items-center gap-2 shadow-sm ${
            userPlan === "PREMIUM" 
              ? "bg-linear-to-r from-orange-500 to-orange-400 border-orange-400 text-white" 
              : "bg-white border-gray-200 text-gray-600"
          }`}>
            {userPlan === "PREMIUM" ? <Crown size={18} /> : <BookOpen size={18} />}
            <span className="text-xs font-black uppercase tracking-widest">
              Plan {userPlan}
            </span>
          </div>
        </header>

        {/* CONTROLADOR DE TRÁFICO: Muestra la vista según el plan */}
        {userPlan === "PREMIUM" ? <PremiumView /> : <BasicoView />}

      </div>
    </main>
  );
}

// ==========================================
// VISTA BÁSICA (Módulos iniciales)
// ==========================================
function BasicoView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Tarjeta de Contenido Básico */}
        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group">
          <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <PlayCircle size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Configuración de Perfil</h3>
          <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">Aprende a estructurar tu biografía y tus historias destacadas.</p>
          <button className="w-full py-4 bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-900 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            Ver Módulo
          </button>
        </div>

        {/* Tarjeta Bloqueada (Upsell a Premium) */}
        <div className="bg-gray-50/50 p-8 rounded-4xl border-2 border-dashed border-gray-200 relative overflow-hidden flex flex-col justify-center items-center text-center">
          <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px] z-10" />
          <div className="relative z-20 flex flex-col items-center">
            <div className="w-14 h-14 bg-gray-200 text-gray-400 rounded-2xl flex items-center justify-center mb-4">
              <Lock size={24} />
            </div>
            <h3 className="text-lg font-black text-gray-900 uppercase tracking-tight mb-2">Psicología Visual</h3>
            <p className="text-xs font-bold text-orange-500 uppercase tracking-widest mb-4">Exclusivo Premium</p>
            <button className="px-6 py-3 bg-white border border-gray-200 text-gray-900 rounded-xl text-[10px] font-black uppercase tracking-widest shadow-sm hover:border-orange-500 transition-colors">
              Mejorar Plan
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

// ==========================================
// VISTA PREMIUM (Todo desbloqueado + Extras)
// ==========================================
function PremiumView() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      
      {/* Banner de Bienvenida Premium */}
      <div className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/30 text-orange-400 text-[10px] font-black tracking-widest uppercase mb-4">
            <Sparkles size={14} /> Acceso Total
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-2">
            El Ecosistema Completo
          </h2>
          <p className="text-gray-400 font-medium max-w-xl">
            Tienes acceso a neuromarketing, estrategias de retención y embudos de WhatsApp.
          </p>
        </div>
        <button className="relative z-10 shrink-0 bg-orange-500 text-white px-8 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest hover:bg-orange-600 transition-colors shadow-lg shadow-orange-500/20 active:scale-95">
          Continuar Curso
        </button>
        {/* Decoración de fondo */}
        <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-orange-500/10 blur-3xl rounded-full pointer-events-none" />
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Aquí irían las tarjetas de los módulos premium (desbloqueadas) */}
        
        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-gray-900">
          <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <PlayCircle size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Configuración de Perfil</h3>
          <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">Módulo 1: Básicos de estructura y biografía.</p>
          <button className="w-full py-4 bg-gray-50 hover:bg-gray-900 hover:text-white text-gray-900 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            Ver Módulo
          </button>
        </div>

        <div className="bg-white p-8 rounded-4xl border border-gray-100 shadow-sm hover:shadow-xl transition-all group border-b-4 border-b-orange-500">
          <div className="w-14 h-14 bg-orange-50 text-orange-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
            <PlayCircle size={24} />
          </div>
          <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-2">Psicología Visual</h3>
          <p className="text-sm font-medium text-gray-500 leading-relaxed mb-6">Módulo 2: Neuromarketing y ganchos de retención.</p>
          <button className="w-full py-4 bg-gray-50 hover:bg-orange-500 hover:text-white text-gray-900 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all">
            Ver Módulo
          </button>
        </div>
        
      </div>
    </div>
  );
}