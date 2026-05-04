"use client";

import { useState } from "react";
import { UserPlus, Loader2, Check, CreditCard, ShieldCheck, X } from "lucide-react";

interface UserFormProps {
  isOpen: boolean;
  onClose: () => void;
  onUserCreated: () => void;
}

export default function UserForm({ 
  isOpen, 
  onClose, 
  onUserCreated 
}: UserFormProps) {
  const [loading, setLoading] = useState(false);
  const [plan, setPlan] = useState("BASICO");
  const [hasPaid, setHasPaid] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    const rawData = Object.fromEntries(formData);

    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify({ 
        ...rawData, 
        plan, 
        hasPaid,
        // El valor se envía en minúsculas al servidor, pero visualmente se respeta la capitalización
        username: String(rawData.username).toLowerCase()
      }),
      headers: { "Content-Type": "application/json" },
    });

    if (res.ok) {
      onUserCreated();
      onClose();
    }
    setLoading(false);
  };

  return (
    // Fondo oscuro con padding y centrado
    <div className="fixed inset-0 z-100 flex items-center justify-center p-4 bg-black/70 animate-in fade-in duration-300">
      {/* Overlay para cerrar al tocar fuera */}
      <div className="fixed inset-0" onClick={onClose} />
      
      {/* Contenedor del Modal con bordes redondeados completos y overflow controlado */}
      <div className="bg-white w-full max-w-lg rounded-4xl md:rounded-[3rem] shadow-2xl overflow-hidden relative z-10 flex flex-col max-h-[95vh] animate-in zoom-in-95 duration-300">
        
        {/* Encabezado con contraste fuerte */}
        <div className="shrink-0 h-24 md:h-28 bg-gray-900 flex items-center px-8 md:px-10 relative">
          <div>
            <h2 className="text-xl md:text-2xl font-black text-white uppercase tracking-tight">NUEVO CLIENTE</h2>
            <p className="text-orange-500 text-[10px] font-black uppercase tracking-widest">Configuración de acceso</p>
          </div>
          {/* Botón X de cierre en la esquina superior derecha */}
          <button
            type="button"
            onClick={onClose}
            className="absolute top-6 right-6 text-white/70 hover:text-white p-1 rounded-full hover:bg-gray-800 transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Cuerpo del formulario con scroll en pantallas pequeñas */}
        <form onSubmit={handleSubmit} className="p-6 md:p-10 space-y-5 overflow-y-auto">
          
          {/* Campos de entrada */}
          <div className="space-y-4">
            <input 
              name="name" 
              placeholder="Nombre completo" 
              required 
              className="w-full bg-gray-50 px-6 py-4 rounded-2xl text-sm font-bold border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" 
            />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Placeholder 'Username' con capitalización inicial */}
              <input 
                name="username" 
                placeholder="Username" 
                required 
                className="w-full bg-gray-50 px-6 py-4 rounded-2xl text-sm font-bold border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" 
              />
              <input 
                name="phone" 
                placeholder="WhatsApp" 
                className="w-full bg-gray-50 px-6 py-4 rounded-2xl text-sm font-bold border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" 
              />
            </div>

            <input 
              name="password" 
              placeholder="Contraseña temporal" 
              required 
              className="w-full bg-gray-50 px-6 py-4 rounded-2xl text-sm font-bold border-2 border-gray-200 focus:border-orange-500 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900" 
            />
          </div>

          {/* Selector de Plan */}
          <div className="space-y-3">
            <label className="text-[10px] font-black text-gray-500 uppercase tracking-widest ml-1">Seleccionar Plan</label>
            <div className="grid grid-cols-2 gap-3">
              <button 
                type="button"
                onClick={() => setPlan("BASICO")}
                className={`py-4 rounded-2xl border-2 font-black text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 ${plan === "BASICO" ? "border-gray-900 bg-gray-900 text-white shadow-lg" : "border-gray-200 bg-gray-50 text-gray-400"}`}
              >
                {plan === "BASICO" && <Check size={14} />} BÁSICO
              </button>
              <button 
                type="button"
                onClick={() => setPlan("PREMIUM")}
                className={`py-4 rounded-2xl border-2 font-black text-[10px] tracking-widest transition-all flex items-center justify-center gap-2 ${plan === "PREMIUM" ? "border-orange-500 bg-orange-500 text-white shadow-lg" : "border-gray-200 bg-gray-50 text-gray-400"}`}
              >
                {plan === "PREMIUM" && <Check size={14} />} PREMIUM
              </button>
            </div>
          </div>

          {/* Toggle de Pago */}
          <button
            type="button"
            onClick={() => setHasPaid(!hasPaid)}
            className={`w-full flex items-center justify-between p-4 rounded-2xl border-2 transition-all ${hasPaid ? "border-blue-500 bg-blue-50/50" : "border-gray-200 bg-gray-50"}`}
          >
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-xl ${hasPaid ? "bg-blue-500 text-white" : "bg-gray-300 text-white"}`}>
                <CreditCard size={18} />
              </div>
              <div className="text-left">
                <p className={`text-[10px] font-black uppercase tracking-widest ${hasPaid ? "text-blue-600" : "text-gray-500"}`}>¿Ya pagó?</p>
                <p className="text-[9px] font-bold text-gray-400 uppercase">{hasPaid ? "Confirmado" : "Pendiente"}</p>
              </div>
            </div>
            <div className={`w-12 h-6 rounded-full relative transition-colors ${hasPaid ? "bg-blue-500" : "bg-gray-300"}`}>
              <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-all ${hasPaid ? "left-7" : "left-1"}`} />
            </div>
          </button>

          {/* Botones de Acción */}
          <div className="flex flex-col md:flex-row gap-3 pt-2">
            <button 
              disabled={loading}
              className="order-1 md:order-2 flex-2 bg-gray-900 text-white font-black py-5 rounded-2xl hover:bg-orange-600 transition-all active:scale-[0.98] flex items-center justify-center gap-3 uppercase text-[10px] tracking-[0.2em] shadow-xl"
            >
              {loading ? <Loader2 className="animate-spin" size={18} /> : <ShieldCheck size={18} className="text-orange-500" />}
              {loading ? "Registrando..." : "Activar Acceso"}
            </button>
            {/* Botón Cancelar con color rojo suave y texto rojo */}
            <button 
              type="button"
              onClick={onClose}
              className="order-2 md:order-1 flex-1 py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest bg-red-50/50 text-red-600 hover:bg-red-100 transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}