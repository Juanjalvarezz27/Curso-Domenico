"use client";

import { useState } from "react";
import BasicoView from "./BasicoView";
import PremiumView from "./PremiumView";
import { Eye, BookOpen, Crown } from "lucide-react";

export default function AdminViewToggle() {
  const [view, setView] = useState<"BASICO" | "PREMIUM">("PREMIUM");

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      
      {/* PANEL DE AUDITORÍA ELEGANTE */}
      <div className="flex flex-col sm:flex-row items-center justify-between bg-white p-4 rounded-4xl border border-gray-100 shadow-sm gap-4">
        
        {/* Lado izquierdo: Título e Ícono */}
        <div className="flex items-center gap-4 px-2 w-full sm:w-auto">
          <div className="bg-orange-50 p-2.5 rounded-xl text-orange-500 shrink-0">
            <Eye size={20} />
          </div>
          <div>
            <h3 className="text-sm font-black text-gray-900 uppercase tracking-widest mb-0.5">Auditoría</h3>
            <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">Cambia la vista del alumno</p>
          </div>
        </div>
        
        {/* Lado derecho: Selector tipo Switch de iOS */}
        <div className="flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 w-full sm:w-auto relative">
          <button
            onClick={() => setView("BASICO")}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              view === "BASICO"
                ? "bg-white text-gray-900 shadow-sm border border-gray-200/50"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <BookOpen size={16} className={view === "BASICO" ? "text-orange-500" : ""} />
            Básico
          </button>
          
          <button
            onClick={() => setView("PREMIUM")}
            className={`flex-1 sm:flex-none flex items-center justify-center gap-2 px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
              view === "PREMIUM"
                ? "bg-white text-orange-600 shadow-sm border border-gray-200/50"
                : "text-gray-400 hover:text-gray-600"
            }`}
          >
            <Crown size={16} />
            Premium
          </button>
        </div>
      </div>

      {/* RENDERIZADO DINÁMICO */}
      <div className="transition-all duration-300 ease-in-out">
        {view === "BASICO" ? <BasicoView /> : <PremiumView />}
      </div>

    </div>
  );
}