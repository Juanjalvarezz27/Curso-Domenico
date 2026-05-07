"use client";

import Image from "next/image";
import {
  UserCircle, PenTool, Camera, Palette, Share2, 
  LinkIcon, MousePointerClick, Eye, Zap, Flame, 
  Briefcase, TrendingUp, ShieldCheck, Crown, 
  Crosshair, Activity, LayoutTemplate, ArrowRight,
  CheckCircle2, Lock, Unlock, Gem, Sparkles, Magnet,
  Play, MessageCircle, Star
} from "lucide-react";

// Importamos el componente del Plan Básico
import BasicoView from "./BasicoView";

export default function PremiumView() {
  return (
    <div className="space-y-24 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-500">

      <BasicoView />

      {/* ========================================== */}
      {/* HERO SECTION PREMIUM                       */}
      {/* ========================================== */}
      <div className="bg-gray-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border-2 border-orange-500/30 shadow-[0_0_80px_-20px_rgba(249,115,22,0.4)] w-full">
        <div className="absolute inset-0 opacity-20 mix-blend-luminosity">
          <Image
            src="/Ig.png"
            alt="Fondo Premium"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-tr from-orange-500/20 via-pink-500/10 to-blue-900/40"></div>

        <div className="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-linear-to-r from-orange-500/20 to-rose-500/20 text-orange-300 border border-orange-500/30 text-xs font-black tracking-widest uppercase mb-8 shadow-lg backdrop-blur-md">
            <Crown size={16} className="text-orange-400" /> Nivel Experto
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1]">
            Psicología, Estrategia <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-rose-400 to-purple-500">
              y Ventas
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-gray-300 leading-relaxed max-w-3xl mx-auto mb-12">
            Deja de competir por precio. Hackea la percepción de tu audiencia, posiciona tu perfil como una autoridad indiscutible y aprende los secretos de neuromarketing para vender servicios High-Ticket.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* MÓDULO 7: INGENIERÍA DE PERFIL             */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 7 // Ingeniería de Perfil
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <UserCircle className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Psicología Visual
            </h2>
          </div>
        </div>

        {/* BENTO BOX COMPLEJO */}
        <div className="grid lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* FÓRMULA BIO (7 Columnas - Dark) */}
          <div className="lg:col-span-7 bg-gray-900 rounded-[3rem] p-8 sm:p-10 xl:p-12 text-white relative overflow-hidden shadow-2xl border border-gray-800 flex flex-col h-full">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="flex items-center gap-4 mb-8 relative z-10">
              <div className="w-14 h-14 bg-linear-to-br from-orange-500/20 to-orange-600/10 border border-orange-500/20 rounded-2xl flex items-center justify-center shadow-inner shrink-0">
                <PenTool className="w-7 h-7 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-none mb-1">Copywriting Persuasivo</h3>
                <p className="text-[10px] font-black text-orange-500 uppercase tracking-widest">La Biografía Perfecta</p>
              </div>
            </div>
            
            <p className="text-gray-400 font-medium text-base sm:text-lg mb-8 relative z-10 leading-relaxed">
              No eres un poeta, eres un negocio. Tu biografía debe actuar como un embudo de ventas que responda 3 preguntas en menos de 5 segundos.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-4xl p-6 sm:p-8 backdrop-blur-md relative z-10 flex-1">
              <h4 className="font-black text-white text-base uppercase tracking-widest mb-6 flex items-center gap-2">
                <Gem size={18} className="text-orange-400" /> La Fórmula de 4 Líneas
              </h4>
              <div className="space-y-6 sm:space-y-6 lg:space-y-8 xl:space-y-10">
                
                {/* FIX MOBILE: flex-col sm:flex-row para que no quede apretado de lado en celulares */}
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group p-3 -mx-3 sm:p-4 sm:-mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="bg-gray-800 text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">L1</div>
                  <div>
                    <strong className="text-white text-base block mb-1.5 group-hover:text-orange-300 transition-colors duration-300">Autoridad / Nicho</strong>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Tu audiencia debe saber a qué te dedicas al instante. Olvida los títulos genéricos, sé específico y posiciona tu autoridad. (Ej. <em className="text-gray-300">"Estratega de Ventas"</em>).</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group p-3 -mx-3 sm:p-4 sm:-mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="bg-gray-800 text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">L2</div>
                  <div>
                    <strong className="text-white text-base block mb-1.5 group-hover:text-orange-300 transition-colors duration-300">Punto de Dolor</strong>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Ataca el problema de tu cliente ideal y comunica directamente el beneficio que obtendrán contigo. (Ej. <em className="text-gray-300">"Te ayudo a facturar sin bailes virales"</em>).</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group p-3 -mx-3 sm:p-4 sm:-mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="bg-gray-800 text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">L3</div>
                  <div>
                    <strong className="text-white text-base block mb-1.5 group-hover:text-orange-300 transition-colors duration-300">Prueba Social</strong>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Mata el escepticismo rápido. Usa datos duros o hitos que demuestren con hechos que dominas tu industria. (Ej. <em className="text-gray-300">"+500 alumnos facturando"</em>).</p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start gap-3 sm:gap-4 group p-3 -mx-3 sm:p-4 sm:-mx-4 rounded-2xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
                  <div className="bg-gray-800 text-orange-400 w-10 h-10 rounded-full flex items-center justify-center font-black text-sm shrink-0 mt-0.5 border border-gray-700 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300 group-hover:shadow-[0_0_15px_rgba(249,115,22,0.5)]">L4</div>
                  <div>
                    <strong className="text-white text-base block mb-1.5 group-hover:text-orange-300 transition-colors duration-300">Llamado a la Acción 👇</strong>
                    <p className="text-sm sm:text-base text-gray-400 leading-relaxed">Da instrucciones claras. El usuario no adivinará qué hacer; dile el siguiente paso y usa emojis para guiar su vista. (Ej. <em className="text-gray-300">"Aplica a mi mentoría aquí 👇"</em>).</p>
                  </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* COLUMNA DERECHA (5 Columnas) - FOTO Y COLOR */}
          <div className="lg:col-span-5 flex flex-col gap-6 xl:gap-8 h-full">
            
            {/* LA FOTO ESTRATÉGICA */}
            <div className="bg-white p-6 sm:p-8 xl:p-10 rounded-[2.5rem] border border-gray-200 shadow-xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 flex-1 flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-rose-50 text-rose-500 rounded-2xl flex items-center justify-center shadow-sm border border-rose-100 shrink-0 group-hover:scale-110 transition-transform">
                  <Camera className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-gray-900 leading-none mb-1">Foto Estratégica</h3>
                  <p className="text-[10px] font-black text-rose-500 uppercase tracking-widest">Estatus Visual</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-gray-600 font-medium mb-6 leading-relaxed">
                El cerebro humano juzga rostros en milisegundos. Tu foto debe hacer "match" exacto con el nivel que buscas transmitir.
              </p>
              <ul className="space-y-4 bg-gray-50 p-6 rounded-2xl border border-gray-100">
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium"><strong className="text-gray-900">Sonrisa Duchenne:</strong> Sonríe con los ojos, genera empatía.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-rose-500 shrink-0 mt-0.5" />
                  <span className="text-sm sm:text-base text-gray-700 font-medium"><strong className="text-gray-900">Fondo Sólido:</strong> Usa la herramienta "Quita Fondos" de Canva. Evita el ruido visual de tu sala o cuarto.</span>
                </li>
              </ul>
            </div>

            {/* PSICOLOGÍA DEL COLOR */}
            <div className="bg-blue-950 p-6 sm:p-8 xl:p-10 rounded-[2.5rem] border border-blue-900 shadow-2xl relative overflow-hidden group hover:-translate-y-1 transition-transform duration-500 flex-1 flex flex-col justify-center">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-blue-500/20 blur-[50px] rounded-full pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center shadow-inner border border-blue-500/30 shrink-0 group-hover:scale-110 transition-transform">
                  <Palette className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-black text-white leading-none mb-1">Neuromarketing</h3>
                  <p className="text-[10px] font-black text-blue-400 uppercase tracking-widest">Psicología del Color</p>
                </div>
              </div>
              <p className="text-sm sm:text-base text-blue-100 font-medium mb-6 leading-relaxed relative z-10 flex-1">
                Aprende a estructurar las portadas de tus Historias Destacadas hackeando la percepción del cliente.
              </p>
              
              <div className="bg-blue-900/50 border border-blue-800/50 rounded-2xl p-6 relative z-10 backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <Sparkles size={20} className="text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white text-base block mb-1">El Poder del Azul</strong>
                    <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Las marcas financieras y tecnológicas usan tonos azules porque el cerebro lo asocia con <strong className="text-white">Confianza, Seguridad y Profesionalismo</strong>. Aplícalo en detalles clave de tu diseño.</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 8: ECOSISTEMA DIGITAL (DISTRIBUCIÓN)*/}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 8 // Distribución
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Magnet className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Ecosistema Digital
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          
          {/* TEXTO Y EXPLICACIÓN (Light Card) */}
          <div className="bg-white p-8 md:p-12 xl:p-14 rounded-[3rem] border border-gray-200 shadow-xl flex flex-col justify-center h-full group hover:shadow-2xl transition-all duration-500">
            <h3 className="text-3xl sm:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              El Error de depender solo de Instagram
            </h3>
            <p className="text-gray-600 font-medium text-base sm:text-lg mb-10 leading-relaxed">
              Instagram es tu vitrina, pero no debe ser tu único canal. Si mañana te cierran la cuenta o el algoritmo cambia, <strong className="text-gray-900 font-black">pierdes tu negocio de la noche a la mañana</strong>. Aprende a crear un flujo de tráfico controlado.
            </p>

            <div className="space-y-6 mt-auto">
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-blue-50/50 hover:border-blue-100 transition-colors group/item">
                <div className="bg-blue-100 text-blue-600 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                  <LinkIcon size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">Link in Bio Estratégico</h4>
                  <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">Olvídate del link directo a un solo sitio. Aprende a usar <strong className="text-gray-900">Bento o Linktree</strong> para estructurar múltiples ofertas, recursos gratuitos y contacto en una sola página optimizada.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-5 p-6 rounded-3xl bg-gray-50 border border-gray-100 hover:bg-green-50/50 hover:border-green-100 transition-colors group/item">
                <div className="bg-green-100 text-green-600 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 group-hover/item:scale-110 transition-transform">
                  <MousePointerClick size={24} />
                </div>
                <div>
                  <h4 className="font-black text-gray-900 text-lg mb-2">Tráfico Dirigido</h4>
                  <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed">No todos los seguidores compran igual. Envía a los "fríos" a tu <strong className="text-gray-900">YouTube o Web</strong> para ganar autoridad, y a los "calientes" a tu <strong className="text-gray-900">WhatsApp</strong> para cerrar ventas.</p>
                </div>
              </div>
            </div>
          </div>

          {/* GRÁFICO VISUAL (Dark Diagram Card) */}
          <div className="bg-gray-900 p-8 md:p-12 xl:p-14 rounded-[3rem] border border-gray-800 shadow-2xl relative overflow-hidden flex flex-col items-center justify-center text-center group">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-blue-500/20 transition-colors duration-1000"></div>
            
            <h4 className="absolute top-8 left-8 text-[10px] font-black text-gray-500 uppercase tracking-widest">Esquema de Tráfico</h4>

            <div className="relative z-10 w-full max-w-sm space-y-0 mt-8">
              
              {/* Nodo 1: Instagram */}
              <div className="bg-linear-to-r from-pink-500 via-rose-500 to-orange-500 p-0.5 rounded-3xl shadow-[0_0_30px_rgba(236,72,153,0.2)] mx-auto w-full max-w-[280px] hover:shadow-[0_0_40px_rgba(236,72,153,0.4)] transition-shadow">
                <div className="bg-gray-950 rounded-[22px] px-6 py-5 flex items-center justify-between">
                  <span className="font-black text-white text-base sm:text-lg flex items-center gap-3">
                    <Camera size={20} className="text-pink-400" /> Instagram
                  </span>
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest bg-gray-800 px-2 py-1 rounded-md">Origen</span>
                </div>
              </div>
              
              {/* Conector Vertical */}
              <div className="flex justify-center my-1">
                <div className="w-1 h-12 bg-linear-to-b from-orange-500 to-blue-500 rounded-full opacity-60"></div>
              </div>

              {/* Nodo 2: Link in Bio */}
              <div className="bg-blue-500/20 border border-blue-500/40 rounded-3xl px-6 py-5 flex items-center justify-center backdrop-blur-md mx-auto w-full max-w-[220px] shadow-[0_0_20px_rgba(59,130,246,0.1)] hover:bg-blue-500/30 transition-colors">
                <span className="font-black text-blue-300 text-base sm:text-lg flex items-center gap-3">
                  <LinkIcon size={20} /> Link in Bio
                </span>
              </div>

              {/* Conectores Diagonales */}
              <div className="flex justify-center gap-20 my-1 relative h-16 w-full max-w-[220px] mx-auto">
                <div className="absolute top-0 left-1/4 w-1 h-16 bg-gradient-to-b from-blue-500 to-red-500 rounded-full opacity-60 transform origin-top rotate-[35deg]"></div>
                <div className="absolute top-0 right-1/4 w-1 h-16 bg-gradient-to-b from-blue-500 to-green-500 rounded-full opacity-60 transform origin-top -rotate-[35deg]"></div>
              </div>

              {/* Nodos Finales */}
              <div className="flex gap-4 justify-between w-full max-w-[320px] mx-auto relative z-20">
                <div className="flex-1 bg-gray-800/80 border border-red-500/30 rounded-3xl p-5 backdrop-blur-xl flex flex-col items-center shadow-lg hover:border-red-500/60 transition-colors group/btn">
                  <Play size={28} className="text-red-500 mb-3 group-hover/btn:scale-110 transition-transform" />
                  <strong className="text-white font-black text-sm block">YouTube</strong>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Autoridad</span>
                </div>
                <div className="flex-1 bg-gray-800/80 border border-green-500/30 rounded-3xl p-5 backdrop-blur-xl flex flex-col items-center shadow-lg hover:border-green-500/60 transition-colors group/btn">
                  <MessageCircle size={28} className="text-green-500 mb-3 group-hover/btn:scale-110 transition-transform" />
                  <strong className="text-white font-black text-sm block">WhatsApp</strong>
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Ventas</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 9: NEURO-RETENCIÓN                  */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 9 // Retención Visual
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Eye className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Atrapar la Atención
            </h2>
          </div>
        </div>

        <div className="bg-gray-900 rounded-[3rem] p-8 md:p-12 xl:p-16 relative overflow-hidden shadow-2xl border border-gray-800 flex flex-col lg:flex-row items-center gap-12 xl:gap-16">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none"></div>

          {/* LADO IZQUIERDO: EXPLICACIÓN */}
          <div className="flex-1 relative z-10 text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-yellow-500/10 border border-yellow-500/20 text-yellow-400 text-xs font-black tracking-widest uppercase mb-8 shadow-sm backdrop-blur-md">
              <Zap size={14} /> La Regla de los 3 Segundos
            </div>
            
            <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 leading-tight">
              El Arte del <br/><span className="text-yellow-400">Doble Hook</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-300 font-medium leading-relaxed mb-10 max-w-xl">
              El contenido excelente no sirve de nada si el usuario desliza el dedo antes de escucharlo. Aprende la fórmula neuro-visual para enganchar el cerebro de las personas y retenerlas.
            </p>
            
            <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-md max-w-xl">
              <h4 className="font-black text-white text-base sm:text-lg mb-6 flex items-center gap-3">
                <Flame className="text-orange-500" /> Los dos tipos de Ganchos
              </h4>
              <div className="space-y-6">
                <div className="group">
                  <strong className="text-yellow-400 font-black text-sm sm:text-base uppercase tracking-widest block mb-2 group-hover:text-yellow-300 transition-colors">1. Hook Visual (Movimiento)</strong>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">No empieces estático. Cambia de plano, haz zoom, deja caer un objeto o señala la pantalla en el segundo 0.0 para romper inmediatamente el patrón de scroll del usuario.</p>
                </div>
                <div className="w-full h-px bg-white/10"></div>
                <div className="group">
                  <strong className="text-yellow-400 font-black text-sm sm:text-base uppercase tracking-widest block mb-2 group-hover:text-yellow-300 transition-colors">2. Hook Verbal (El Dolor)</strong>
                  <p className="text-gray-400 text-sm sm:text-base leading-relaxed font-medium">Tu primera frase debe tocar una herida o generar intriga absoluta. (Ej. usa <em className="text-gray-200">"El error que te hace perder ventas..."</em> en lugar del aburrido <em className="text-gray-500 line-through">"Hola, hoy hablaré de..."</em>).</p>
                </div>
              </div>
            </div>
          </div>

          {/* LADO DERECHO: TIMELINE VISUAL */}
          <div className="w-full lg:w-5/12 xl:w-1/3 relative z-10">
            <h4 className="text-white font-black text-lg mb-8 text-center sm:text-left">La Anatomía del Video</h4>
            
            <div className="flex flex-col gap-5">
              {/* Bloque 1: Rojo */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-6 relative overflow-hidden group hover:border-red-500/50 transition-colors shadow-lg hover:shadow-red-500/10">
                <div className="absolute top-0 left-0 w-2 h-full bg-red-500 shadow-[0_0_15px_rgba(239,68,68,0.8)]"></div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-red-500 font-black text-xl sm:text-2xl tracking-tight">0s - 3s</span>
                  <div className="bg-red-500/20 text-red-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Crítico</div>
                </div>
                <strong className="text-white font-bold text-base block mb-1">El Doble Gancho</strong>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">Decisión inconsciente del usuario. Si fallas aquí visual o verbalmente, pierdes la vista.</p>
              </div>
              
              {/* Bloque 2: Amarillo */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-6 relative overflow-hidden group hover:border-yellow-500/50 transition-colors shadow-lg hover:shadow-yellow-500/10 lg:ml-6">
                <div className="absolute top-0 left-0 w-2 h-full bg-yellow-500 shadow-[0_0_15px_rgba(234,179,8,0.8)]"></div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-yellow-500 font-black text-xl sm:text-2xl tracking-tight">3s - 15s</span>
                  <div className="bg-yellow-500/20 text-yellow-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Desarrollo</div>
                </div>
                <strong className="text-white font-bold text-base block mb-1">Entrega de Valor</strong>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">Justifica el gancho rápido. Mantén el ritmo alto aplicando edición dinámica (cortes de aire, B-Rolls).</p>
              </div>

              {/* Bloque 3: Verde */}
              <div className="bg-gray-950/80 border border-gray-800 rounded-3xl p-6 relative overflow-hidden group hover:border-green-500/50 transition-colors shadow-lg hover:shadow-green-500/10 lg:ml-12">
                <div className="absolute top-0 left-0 w-2 h-full bg-green-500 shadow-[0_0_15px_rgba(34,197,94,0.8)]"></div>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-green-500 font-black text-xl sm:text-2xl tracking-tight">15s+</span>
                  <div className="bg-green-500/20 text-green-400 text-[10px] font-bold px-2 py-1 rounded-md uppercase tracking-wider">Cierre</div>
                </div>
                <strong className="text-white font-bold text-base block mb-1">Llamado a la Acción</strong>
                <p className="text-gray-400 font-medium text-sm leading-relaxed">Micro-compromisos. Pide que comenten una palabra clave o que guarden el video para el algoritmo.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 10: ESTATUS Y MONETIZACIÓN          */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-green-500 w-8 rounded-full"></div>
            <span className="text-green-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 10 // Monetización Avanzada
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-green-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Briefcase className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Tu Imagen como Experto
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 xl:gap-8 items-stretch">
          
          {/* SEPARACIÓN PROFESIONAL (5 Columnas) */}
          <div className="lg:col-span-5 bg-white p-8 xl:p-12 rounded-[3rem] border border-gray-200 shadow-xl flex flex-col relative overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gray-50 rounded-full blur-[80px] pointer-events-none group-hover:bg-green-50/50 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex-1 flex flex-col">
              <div className="w-16 h-16 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform duration-500 shrink-0">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight leading-none mb-5">
                Barrera de Estatus
              </h3>
              <p className="text-gray-600 font-medium text-base sm:text-lg mb-8 leading-relaxed">
                La diferencia entre un creador promedio y un referente de la industria es el <strong className="text-gray-900">estatus percibido</strong>. Tienes que curar lo que publicas.
              </p>

              <div className="bg-gray-50 border border-gray-100 rounded-3xl p-6 sm:p-8 mt-auto relative overflow-hidden group/box hover:border-gray-200 transition-colors">
                <div className="absolute top-0 left-0 w-1.5 h-full bg-gray-900"></div>
                <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Lock size={18} className="text-gray-500" /> Curaduría Visual
                </h4>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed font-medium">
                  No muestres cada minuto de tu vida. Documenta estratégicamente. Muestra detrás de cámaras, logros y testimonios. El exceso de accesibilidad destruye tu autoridad. <strong className="text-gray-900 block mt-3">Un poco de misterio eleva tu valor.</strong>
                </p>
              </div>
            </div>
          </div>

          {/* HIGH TICKET Y PRECIOS (7 Columnas) */}
          <div className="lg:col-span-7 bg-gray-900 p-8 xl:p-12 rounded-[3rem] border border-gray-800 shadow-2xl relative overflow-hidden group flex flex-col justify-center">
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-500/10 blur-[120px] rounded-full pointer-events-none group-hover:bg-green-500/20 transition-colors duration-700"></div>
            
            <div className="relative z-10 flex flex-col h-full">
              <div className="flex items-center justify-between mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500/20 to-emerald-600/10 border border-green-500/20 text-green-400 rounded-2xl flex items-center justify-center shadow-inner shrink-0 group-hover:scale-110 transition-transform duration-500">
                  <TrendingUp className="w-8 h-8" />
                </div>
                <div className="bg-green-500/10 border border-green-500/20 text-green-400 px-4 py-2 rounded-xl text-[10px] sm:text-xs font-black uppercase tracking-widest backdrop-blur-md flex items-center gap-2">
                  <Gem size={14} /> High Ticket
                </div>
              </div>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-none mb-5">
                Pricing Power
              </h3>
              <p className="text-gray-400 font-medium text-base sm:text-lg mb-10 leading-relaxed max-w-xl">
                La gente no paga por tu tiempo, paga por la certeza del resultado y el estatus de trabajar contigo. <strong className="text-white">Si tu perfil luce premium, tus precios pueden serlo.</strong>
              </p>

              <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 mt-auto">
                <div className="bg-white/5 border border-white/10 rounded-[2rem] p-6 sm:p-8 backdrop-blur-md hover:bg-white/10 transition-colors group/halo">
                  <Activity size={24} className="text-green-400 mb-4 group-hover/halo:scale-110 transition-transform" />
                  <h4 className="font-black text-white text-lg mb-2">El Efecto Halo</h4>
                  <p className="text-sm text-gray-400 leading-relaxed font-medium">
                    Si tu calidad visual, audio y oratoria transmiten excelencia, el cliente asume que tu servicio es igual de excelente.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-green-500/10 to-transparent border border-green-500/20 rounded-[2rem] p-6 sm:p-8 backdrop-blur-md flex flex-col justify-center items-start group/zero">
                  <h4 className="font-black text-green-400 text-3xl sm:text-4xl mb-3 leading-none group-hover/zero:scale-105 transition-transform origin-left">Cero<br/>Quejas</h4>
                  <p className="text-sm text-green-100/70 font-medium leading-relaxed">
                    Al elevar tu estatus percibido con contenido estratégico, erradicas las objeciones por precio en tus ventas por DM.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* SECCIÓN DEL PLAN BÁSICO (RENDERIZADO FINAL)*/}
      {/* ========================================== */}
      <div className="mt-24 pt-16 border-t-2 border-gray-200/50 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-orange-500 rounded-b-full"></div>
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-green-50 text-green-600 px-5 py-2.5 rounded-full border border-green-200 shadow-sm text-xs font-black tracking-widest uppercase mb-6">
            <Unlock size={16} /> Contenido Desbloqueado
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tighter leading-tight mb-4">
            Fundamentos del <br/> Ecosistema
          </h2>
          <p className="text-gray-600 font-medium text-lg max-w-2xl mx-auto">
            Tu Plan Premium incluye acceso total y de por vida a todas las guías y herramientas técnicas del Plan Básico.
          </p>
        </div>

        {/* Renderiza todo el componente BasicoView aquí */}
        <BasicoView />
      </div>

    </div>
  );
}