"use client";

import { useState } from "react";
import { Flame, AlertTriangle, Eye, Volume2, CheckCircle2, XCircle, Zap } from "lucide-react";

export default function DobleHookStoryboard() {
 const [activeTab, setActiveTab] = useState<'aburrido' | 'acierto'>('aburrido');
 const isAburrido = activeTab === 'aburrido';

 return (
 <div className="w-full flex flex-col items-center relative z-10">
 
 {/* FONDO ANIMADO (Glows) */}
 <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full pointer-events-none transition-all duration-1000 -z-10 ${
 isAburrido ? 'bg-slate-300/30' : 'bg-amber-500/20'
 }`}></div>

 {/* TOGGLE PREMIUM */}
 <div className="flex bg-white/60 p-1.5 rounded-full mb-8 sm:mb-12 border border-white/80 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-20">
 <button
 onClick={() => setActiveTab('aburrido')}
 className={`flex items-center gap-2 px-6 sm:px-10 py-3.5 rounded-full text-sm font-black transition-all duration-500 ${
 isAburrido 
 ? 'bg-slate-800 text-white shadow-xl scale-105' 
 : 'text-slate-500 hover:text-slate-700 hover:bg-white/50'
 }`}
 >
 <AlertTriangle size={18} className={isAburrido ? "text-slate-300" : ""} /> 
 Intro Aburrido
 </button>
 <button
 onClick={() => setActiveTab('acierto')}
 className={`flex items-center gap-2 px-6 sm:px-10 py-3.5 rounded-full text-sm font-black transition-all duration-500 ${
 !isAburrido 
 ? 'bg-linear-to-r from-amber-500 to-orange-500 text-white shadow-[0_0_30px_rgba(245,158,11,0.5)] scale-105 border border-amber-400' 
 : 'text-amber-700/60 hover:text-amber-700 hover:bg-white/50'
 }`}
 >
 <Flame size={18} className={!isAburrido ? "text-amber-100 animate-pulse" : ""} /> 
 Doble Hook
 </button>
 </div>

 {/* CONTENEDOR PRINCIPAL */}
 <div className={`w-full relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] p-4 sm:p-10 transition-all duration-700 border ${
 isAburrido 
 ? 'bg-slate-50/90 border-slate-200/60 shadow-[0_20px_50px_rgba(148,163,184,0.15)]' 
 : 'bg-amber-50/90 border-amber-200/60 shadow-[0_20px_50px_rgba(245,158,11,0.15)]'
 }`}>
 
 {/* Decoraciones internas */}
 {!isAburrido && (
 <div className="absolute -top-20 -right-20 w-60 h-60 bg-orange-400/10 rounded-full pointer-events-none"></div>
 )}

 {/* HEADER DE ESTADO */}
 <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 mb-8 sm:mb-10 relative z-10">
 <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center shrink-0 shadow-lg border relative ${
 isAburrido ? 'bg-white border-slate-200 text-slate-500' : 'bg-linear-to-br from-amber-100 to-orange-100 border-amber-200 text-amber-600'
 }`}>
 {isAburrido ? <AlertTriangle size={28} /> : <Zap size={28} className="animate-bounce" />}
 {/* Ping animation for success */}
 {!isAburrido && <div className="absolute inset-0 rounded-2xl border border-amber-400 animate-ping opacity-20"></div>}
 </div>
 <div>
 <h4 className={`text-2xl sm:text-4xl font-black tracking-tight leading-none mb-2 transition-colors duration-500 ${
 isAburrido ? 'text-slate-800' : 'text-transparent bg-clip-text bg-linear-to-r from-amber-600 to-orange-600'
 }`}>
 {isAburrido ? 'El Error del 99%' : 'El Acierto (1% Top)'}
 </h4>
 <div className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest border transition-colors duration-500 ${
 isAburrido ? 'bg-slate-100 text-slate-500 border-slate-200' : 'bg-amber-100 text-amber-700 border-amber-200'
 }`}>
 {isAburrido ? 'Patrón: Aburrimiento Inmediato' : 'Patrón: Retención Magnética'}
 </div>
 </div>
 </div>

 {/* CUADRÍCULA VISUAL VS VERBAL */}
 <div className="grid md:grid-cols-2 gap-6 lg:gap-8 mb-10 relative z-10">
 {/* Tarjeta Visual */}
 <div className={`rounded-3xl p-6 sm:p-8 border shadow-xl flex flex-col justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
 isAburrido ? 'bg-white border-slate-100' : 'bg-white/80 border-amber-100/50'
 }`}>
 <div className="flex items-center gap-3 mb-6">
 <div className={`p-3 rounded-xl shadow-inner border transition-colors duration-500 ${
 isAburrido ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-orange-50 border-orange-100 text-orange-500'
 }`}>
 <Eye size={24} />
 </div>
 <strong className="text-gray-900 font-black uppercase tracking-widest text-sm">Lo que ve el ojo <span className={`transition-colors duration-500 ${isAburrido ? 'text-slate-400' : 'text-orange-400'}`}>(0.0s)</span></strong>
 </div>
 <p className="text-gray-600 font-medium text-lg sm:text-xl italic leading-relaxed relative">
 <span className="text-4xl absolute -top-4 -left-3 opacity-20 font-serif">"</span>
 {isAburrido 
 ? 'Estático, sentado frente a la cámara, sin mover las manos ni cambiar de plano.' 
 : 'Inicia caminando hacia la cámara o hace un Zoom In dinámico desde la edición.'}
 </p>
 </div>

 {/* Tarjeta Verbal */}
 <div className={`rounded-3xl p-6 sm:p-8 border shadow-xl flex flex-col justify-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${
 isAburrido ? 'bg-white border-slate-100' : 'bg-white/80 border-amber-100/50'
 }`}>
 <div className="flex items-center gap-3 mb-6">
 <div className={`p-3 rounded-xl shadow-inner border transition-colors duration-500 ${
 isAburrido ? 'bg-slate-50 border-slate-100 text-slate-500' : 'bg-amber-50 border-amber-100 text-amber-500'
 }`}>
 <Volume2 size={24} />
 </div>
 <strong className="text-gray-900 font-black uppercase tracking-widest text-sm">Lo que escucha <span className={`transition-colors duration-500 ${isAburrido ? 'text-slate-400' : 'text-amber-500'}`}>(1.0s)</span></strong>
 </div>
 <p className="text-gray-600 font-medium text-lg sm:text-xl italic leading-relaxed relative">
 <span className="text-4xl absolute -top-4 -left-3 opacity-20 font-serif">"</span>
 {isAburrido 
 ? 'Hola chicos, ¿cómo están? Hoy les vengo a hablar de un tema muy importante...' 
 : 'El 90% de tus clientes te ignoran porque estás cometiendo este estúpido error...'}
 </p>
 </div>
 </div>

 {/* CAJA DE ANÁLISIS */}
 <div className={`relative overflow-hidden rounded-2xl sm:rounded-[2.5rem] p-5 sm:p-10 border shadow-2xl transition-colors duration-700 ${
 isAburrido ? 'bg-white border-red-100' : 'bg-gray-900 border-gray-800'
 }`}>
 {/* Fondo sutil caja análisis */}
 {!isAburrido && <div className="absolute top-0 right-0 w-80 h-80 bg-green-500/5 rounded-full pointer-events-none"></div>}
 
 <h5 className={`font-black mb-6 sm:mb-8 flex items-center gap-3 uppercase tracking-widest text-sm sm:text-lg relative z-10 transition-colors duration-500 ${
 isAburrido ? 'text-gray-900' : 'text-white'
 }`}>
 {isAburrido ? (
 <div className="bg-red-100 text-red-500 p-1.5 sm:p-2 rounded-xl"><XCircle size={20} className="sm:w-6 sm:h-6" /></div>
 ) : (
 <div className="bg-green-500/20 text-green-400 p-1.5 sm:p-2 rounded-xl"><CheckCircle2 size={20} className="sm:w-6 sm:h-6" /></div>
 )}
 {isAburrido ? 'Por qué el usuario desliza' : 'Por qué el cerebro se engancha'}
 </h5>
 
 <ul className="space-y-3 sm:space-y-5 relative z-10">
 {isAburrido ? (
 <>
 <li className="flex items-start gap-3 sm:gap-4 bg-red-50/50 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-red-50">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs">1</div>
 <span className="text-gray-700 font-medium text-sm sm:text-lg pt-0.5">Desperdicia los críticos primeros 2 segundos saludando (el usuario ya se fue).</span>
 </li>
 <li className="flex items-start gap-3 sm:gap-4 bg-red-50/50 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-red-50">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs">2</div>
 <span className="text-gray-700 font-medium text-sm sm:text-lg pt-0.5">No hay estímulo visual inicial. El ojo percibe el video como algo pasivo y aburrido.</span>
 </li>
 <li className="flex items-start gap-3 sm:gap-4 bg-red-50/50 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-red-50">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs">3</div>
 <span className="text-gray-700 font-medium text-sm sm:text-lg pt-0.5">No promete ningún beneficio inmediato ni toca ningún dolor del espectador.</span>
 </li>
 </>
 ) : (
 <>
 <li className="flex items-start gap-3 sm:gap-4 bg-white/5 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 text-gray-900 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs shadow-[0_0_15px_rgba(34,197,94,0.4)]">1</div>
 <span className="text-gray-300 font-medium text-sm sm:text-lg pt-0.5"><strong className="text-white">Hook Visual:</strong> El movimiento inicial rompe violentamente el patrón de scroll, obligando a mirar.</span>
 </li>
 <li className="flex items-start gap-3 sm:gap-4 bg-white/5 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 text-gray-900 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs shadow-[0_0_15px_rgba(34,197,94,0.4)]">2</div>
 <span className="text-gray-300 font-medium text-sm sm:text-lg pt-0.5"><strong className="text-white">Hook Verbal:</strong> Ataca un dolor real y genera curiosidad de inmediato (¿Qué error estoy cometiendo?).</span>
 </li>
 <li className="flex items-start gap-3 sm:gap-4 bg-white/5 p-3 sm:p-5 rounded-xl sm:rounded-2xl border border-white/10 hover:bg-white/10 transition-colors">
 <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-green-500 text-gray-900 flex items-center justify-center shrink-0 font-black text-[10px] sm:text-xs shadow-[0_0_15px_rgba(34,197,94,0.4)]">3</div>
 <span className="text-gray-300 font-medium text-sm sm:text-lg pt-0.5">Va directo a la yugular. Cero saludos, cero pausas, 100% retención.</span>
 </li>
 </>
 )}
 </ul>
 </div>
 </div>
 </div>
 );
}
