"use client";

import { Sparkles } from "lucide-react";

export default function PremiumView() {
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

      {/* CONTENEDOR PRINCIPAL PREMIUM */}
      <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-100 shadow-sm border-b-4 border-b-orange-500 min-h-[30vh]">
        <h2 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-4">
          Módulos Premium
        </h2>
        <p className="text-gray-500 font-medium">
          Espacio listo para estructurar el contenido avanzado...
        </p>
      </div>

    </div>
  );
}