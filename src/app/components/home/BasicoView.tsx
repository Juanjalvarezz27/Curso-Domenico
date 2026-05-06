"use client";

import Image from "next/image";
import {
  Settings, Smartphone, LayoutTemplate, CalendarDays,
  MessageCircleHeart, Link as LinkIcon, CheckCircle2,
  Lightbulb, Video, PenTool, ImageIcon, AlertTriangle,
  ExternalLink, Download, UserCircle, Timer, Map, ArrowRight,
  Mic, Camera, Scissors, Sparkles, Zap, Clock, Star,
  Play, Images, MessageCircle
} from "lucide-react";

export default function BasicoView() {
  return (
    <div className="space-y-24 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-500">

      {/* ========================================== */}
      {/* HERO SECTION (ESTILO INSTAGRAM)            */}
      {/* ========================================== */}
      <div className="bg-gray-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border-2 border-gray-800 shadow-2xl w-full">
        {/* Imagen Optimizada de Instagram */}
        <div className="absolute inset-0 opacity-15 mix-blend-luminosity">
          <Image
            src="/Ig.png"
            alt="Fondo Ecosistema Digital"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-linear-to-tr from-yellow-500/5 via-pink-500/5 to-purple-500/5"></div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gray-800 text-pink-400 text-xs font-black tracking-widest uppercase mb-8 border border-gray-700 shadow-sm">
            <LayoutTemplate size={16} /> Fundamentos del Negocio
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1]">
            Tu Ecosistema <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500">
              Digital
            </span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Esta es tu hoja de ruta. Lee, aplica los conceptos, usa las herramientas y transforma tu perfil en una máquina de atracción en tiempo récord.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* MÓDULO 1: LA VITRINA DIGITAL               */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 1 // La Vitrina Digital
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Settings className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Arquitectura de Perfil
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_320px] xl:grid-cols-[minmax(0,1fr)_360px] gap-6 xl:gap-8 items-stretch">
          <div className="flex flex-col gap-6 min-w-0">
            {/* Banner Regla de 3 segundos */}
            <div className="bg-gray-900 rounded-4xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-gray-800">
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl shrink-0 shadow-lg shadow-orange-500/30">
                    <Timer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">La regla de los 3 segundos</h3>
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                  Es el tiempo exacto que tienes para que un visitante decida si te sigue o se va. Si tu perfil es un laberinto visual o no comunicas al instante qué problema resuelves, pierdes clientes antes de que vean tu contenido.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 blur-[80px] rounded-full pointer-events-none"></div>
            </div>

            {/* LAS 3 CARDS REDISEÑADAS */}
            <div className="grid sm:grid-cols-3 gap-6 flex-1">
              <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">Paso 01 // Copia</span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">Bio de Impacto</h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      Usa la fórmula: <span className="text-gray-900 font-black">"Ayudo a [X] a lograr [Y] con [Z]"</span>. No olvides incluir tu palabra clave para el SEO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <UserCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">Paso 02 // Branding</span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">Identidad Visual</h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      Foto de rostro iluminada con fondo sólido para generar confianza, o el logo de tu negocio si es una marca comercial.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">Paso 03 // Conversión</span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">Historias Fijas</h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      4 carpetas estratégicas: <span className="font-bold text-gray-800">Quién soy, Servicios, Testimonios y Contacto</span>. Tu embudo automático 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 p-5 rounded-4xl flex flex-row items-center gap-4 hover:shadow-md hover:shadow-orange-500/10 transition-all group">
              <div className="bg-white text-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-orange-100 group-hover:scale-105 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-orange-600 uppercase text-[10px] sm:text-xs tracking-widest mb-1">Paso Obligatorio</h4>
                <p className="text-orange-950 font-black text-sm sm:text-base leading-tight">Cambia a "Cuenta de Creador" en Ajustes.</p>
              </div>
              <div className="hidden sm:flex w-8 h-8 bg-orange-200/50 text-orange-600 rounded-full items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-4xl p-6 xl:p-8 border border-gray-200 shadow-lg flex flex-col h-full relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full blur-2xl pointer-events-none"></div>
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-10 flex items-center gap-3 relative z-10">
              <Map className="text-orange-500" size={24} /> Roadmap 
            </h3>
            <div className="relative ml-2 flex-1 z-10">
              <div className="absolute top-2 bottom-6 left-3 w-0.5 bg-linear-to-b from-orange-500 via-gray-200 to-gray-100 rounded-full"></div>
              <div className="space-y-10">
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-orange-500 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:scale-125 transition-transform z-10">1</div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Estructura Bio</h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">Aplica la fórmula y escríbelo hoy mismo.</p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-gray-200 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all z-10">2</div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Limpieza Visual</h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">Sube foto clara con fondo sólido.</p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-gray-200 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all z-10">3</div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Destacadas</h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">Diseña 4 portadas simples en Canva.</p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-orange-500 border-4 border-orange-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-md z-10">4</div>
                  <h4 className="font-black text-orange-600 text-sm uppercase tracking-widest mb-1">Modo Creador</h4>
                  <p className="text-xs xl:text-sm text-gray-600 font-medium leading-relaxed">Activa el panel profesional en la app.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 2: TU ESTUDIO DE BOLSILLO           */}
      {/* ========================================== */}
      <section className="w-full flex flex-col gap-6 xl:gap-8">
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 2 // Tu Estudio de Bolsillo
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Producción Audiovisual
            </h2>
          </div>
        </div>

        <div className="w-full bg-gray-900 rounded-4xl p-5 sm:p-8 xl:p-12 text-white relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 blur-[120px] rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-10 pb-6 sm:pb-8 border-b border-gray-800/80">
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="bg-linear-to-br from-orange-500/20 to-orange-600/10 p-3 sm:p-4 rounded-2xl border border-white/10 shadow-inner shrink-0">
                <Camera className="w-7 h-7 sm:w-10 sm:h-10 text-orange-400" />
              </div>
              <h3 className="text-2xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-none">El Set Físico</h3>
            </div>
            <p className="text-gray-400 font-medium text-base sm:text-lg xl:text-xl max-w-2xl lg:text-right leading-relaxed">
              No necesitas invertir cientos de dólares. Domina estas 3 variables clave para multiplicar tu calidad visual hoy mismo.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-5 sm:gap-6 xl:gap-8 mt-2">
            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center shadow-orange-500/20 shadow-lg shrink-0">
                  <Lightbulb size={24} className="text-orange-400" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">1. La Luz</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                Graba siempre de frente a una ventana. La luz natural oculta imperfecciones y resalta tu rostro sin necesidad de aros de luz.
              </p>
            </div>

            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shadow-blue-500/20 shadow-lg shrink-0">
                  <Mic size={24} className="text-blue-400" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">2. El Audio</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                El audio es el 50% del éxito. Usa un micrófono inalámbrico ($15) o graba en salas amuebladas para que los objetos absorban el eco.
              </p>
            </div>

            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-gray-400/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-500/20 rounded-xl flex items-center justify-center shadow-gray-500/20 shadow-lg shrink-0">
                  <Smartphone size={24} className="text-gray-300" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">3. El Lente</h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                Limpia el lente con tu camiseta siempre antes de grabar. Usa la cámara trasera para mayor nitidez y ubícala a la altura de tus ojos.
              </p>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8">
          <div className="bg-white rounded-4xl border border-gray-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="h-44 sm:h-48 xl:h-56 bg-purple-100 relative overflow-hidden">
              <Image 
                src="/Premier.png" 
                alt="Canva Interface" 
                fill
                className="object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 sm:left-8 flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-linear-to-br from-purple-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white shrink-0">
                  <span className="font-black text-2xl sm:text-3xl">C</span>
                </div>
                <div>
                  <h4 className="text-xl sm:text-3xl font-black text-gray-900 leading-none">Canva</h4>
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mt-1">Diseño de Autoridad</p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 flex flex-col flex-1">
              <div className="bg-purple-50/50 rounded-3xl p-5 sm:p-6 border border-purple-100 mb-8 flex-1">
                <h5 className="font-black text-purple-900 text-[11px] sm:text-sm mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                  <Sparkles size={18} className="text-purple-500" /> Tips de Retención
                </h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-purple-900 font-black">Regla del 20%:</strong> El título debe ser gigante para atrapar el ojo rápido.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-purple-900 font-black">Zonas Seguras:</strong> No pongas textos importantes en los bordes de la imagen.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-purple-900 font-black">Consistencia:</strong> Define solo 2 fuentes (una gruesa, una fina) y 2 colores.
                    </p>
                  </li>
                </ul>
              </div>
              <a 
                href="https://www.canva.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                onClick={(e) => { e.preventDefault(); window.open('https://www.canva.com/', '_blank'); }} 
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 hover:bg-purple-700 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg"
              >
                Abrir Canva <ExternalLink size={18} />
              </a>
            </div>
          </div>

          <div className="bg-white rounded-4xl border border-gray-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="h-44 sm:h-48 xl:h-56 bg-gray-200 relative overflow-hidden">
              <Image 
                src="/Meeting.png" 
                alt="Video Editing" 
                fill
                className="object-cover mix-blend-multiply opacity-70 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 sm:left-8 flex items-center gap-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white shrink-0">
                  <Scissors className="w-6 h-6 sm:w-7 sm:h-7" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-3xl font-black text-gray-900 leading-none">CapCut</h4>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">Edición de Impacto</p>
                </div>
              </div>
            </div>
            <div className="p-6 sm:p-10 flex flex-col flex-1">
              <div className="bg-gray-50 rounded-3xl p-5 sm:p-6 border border-gray-200 mb-8 flex-1">
                <h5 className="font-black text-gray-900 text-[11px] sm:text-sm mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                  <Zap size={18} className="text-gray-500" /> Fórmula Dinámica
                </h5>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-gray-900 font-black">Cortes de Aire:</strong> Elimina cada segundo de silencio para ser continuo.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-gray-900 font-black">Subtítulos Pop:</strong> Activa los subtítulos dinámicos en el centro para retener.
                    </p>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
                    <p className="text-sm xl:text-base text-gray-700 font-medium">
                      <strong className="text-gray-900 font-black">SFX (Efectos de Sonido):</strong> Añade un "Whoosh" en transiciones y un "Pop" con textos.
                    </p>
                  </li>
                </ul>
              </div>
              <a 
                href="https://www.capcut.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                onClick={(e) => { e.preventDefault(); window.open('https://www.capcut.com/', '_blank'); }}
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg"
              >
                Descargar App <Download size={18} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 3: ESTRATEGIA VISUAL                */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 3 // Estrategia Visual
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <LayoutTemplate className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Formatos que Funcionan
            </h2>
          </div>
        </div>

        {/* 3 COLUMNAS DIRECTAS EN DESKTOP (TODO DARK MODE) */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">

          {/* CARD REELS */}
          <div className="bg-gray-900 rounded-[2.5rem] border border-gray-800 shadow-2xl flex flex-col overflow-hidden group hover:shadow-pink-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-gray-950 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1516280440502-86db406a4a75?q=80&w=1000&auto=format&fit=crop"
                alt="Reels Creator"
                className="w-full h-full object-cover opacity-30 group-hover:scale-105 group-hover:opacity-40 transition-all duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-rose-500 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 group-hover:rotate-6 transition-transform shrink-0">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="text-2xl sm:text-3xl font-black text-white leading-none mb-1">Reels</h4>
                  <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest mt-1">Alcance Masivo</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1 text-white">
              <p className="text-sm sm:text-base text-gray-300 font-medium mb-5 leading-relaxed">
                El motor para que gente nueva te descubra. Instagram los muestra masivamente a <strong className="text-white">no seguidores</strong>.
              </p>
              
              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 flex-1">
                <h5 className="font-black text-white text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Video size={16} className="text-pink-400" /> Anatomía Viral
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-pink-500/30 mt-0.5">1</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Gancho (0-3s)</strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Di el beneficio o dolor más grande rápido para atrapar al usuario.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-pink-500/30 mt-0.5">2</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Cuerpo (3-15s)</strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Entrega la solución rápido sin introducciones aburridas.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-pink-500/30 mt-0.5">3</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Llamado a la Acción</strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">Dile a la gente qué hacer: "Comenta INFO para más detalles".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD CARRUSELES */}
          <div className="bg-blue-950 rounded-[2.5rem] border border-blue-900 shadow-2xl flex flex-col overflow-hidden group hover:shadow-blue-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-blue-900 shrink-0">
              <img
                src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=800&auto=format&fit=crop"
                alt="Carousel Grid"
                className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <Images className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-none">Carruseles</h4>
                  <p className="text-[10px] sm:text-xs font-black text-blue-300 uppercase tracking-widest mt-1">Autoridad</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <p className="text-sm sm:text-base text-blue-200 font-medium mb-5 leading-relaxed">
                El formato perfecto para enseñar. Mantiene al usuario deslizando, lo cual <strong className="text-white">Instagram premia</strong>.
              </p>
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 flex-1">
                <h5 className="font-black text-blue-300 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-blue-400" /> Estructura AIDA
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-blue-500/30 mt-0.5">A</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Atención (Slide 1)</strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Título gigante que despierte curiosidad inmediata.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-blue-500/30 mt-0.5">I</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Interés (Slides 2-7)</strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Una sola idea o consejo por imagen. Usa letra grande.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-blue-500/30 mt-0.5">A</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Acción (Slide Final)</strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">Pide explícitamente que guarden o compartan el post.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD HISTORIAS */}
          <div className="bg-orange-950 rounded-[2.5rem] border border-orange-900 shadow-2xl flex flex-col overflow-hidden group hover:shadow-orange-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-orange-900 shrink-0">
              <Image
                src="/Historias.png"
                alt="Stories Creator"
                fill
                className="object-cover opacity-20 group-hover:scale-105 transition-transform duration-700 mix-blend-luminosity"
              />
              <div className="absolute inset-0 bg-linear-to-t from-orange-950 via-orange-950/60 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-white leading-none mb-1">Historias</h4>
                  <p className="text-[10px] sm:text-xs font-black text-orange-300 uppercase tracking-widest mt-1">Conexión Diaria</p>
                </div>
              </div>
            </div>

            <div className="p-6 sm:p-7 flex flex-col flex-1">
              <p className="text-sm sm:text-base text-orange-200 font-medium mb-5 leading-relaxed">
                Para los que <strong className="text-white">ya te siguen</strong>. Aquí conectas humanamente y cierras ventas por DM.
              </p>
              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 flex-1">
                <h5 className="font-black text-orange-300 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-orange-400" /> Secuencia Vendedora
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-orange-500/30 mt-0.5">1</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Contexto</strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">Muestra algo de tu día a día o un detrás de cámaras.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-orange-500/30 mt-0.5">2</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Problema</strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">Habla de un dolor o problema común de tus clientes actuales.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-[10px] shrink-0 border border-orange-500/30 mt-0.5">3</div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">Llamado (CTA)</strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">"Vota en la encuesta" o "Mándame un DM para ayudarte".</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULOS 4 & 5 // CALENDARIO Y COMUNIDAD    */}
      {/* ========================================== */}
      <section className="w-full grid lg:grid-cols-2 gap-6 xl:gap-8">
        <div className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-800 flex flex-col h-full shadow-xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 bg-orange-500 w-6 rounded-full"></div>
              <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
                Módulo 4 // Anticaos
              </span>
            </div>
            <h2 className="text-3xl font-black text-white uppercase tracking-tighter">Tu Primer Calendario</h2>
          </div>
          <div className="space-y-6">
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="bg-gray-800 text-orange-500 w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0 border border-gray-700 mt-0.5">1</div>
              <div>
                <h4 className="font-black text-white text-base sm:text-lg tracking-tight">Lluvia de Ideas</h4>
                <p className="text-gray-400 text-sm xl:text-base mt-1">Anota las 5 preguntas que más te hacen tus clientes. Esas son tus primeras publicaciones.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="bg-gray-800 text-orange-500 w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0 border border-gray-700 mt-0.5">2</div>
              <div>
                <h4 className="font-black text-white text-base sm:text-lg tracking-tight">Video Pilar (Fijado)</h4>
                <p className="text-gray-400 text-sm mt-1">Graba un Reel diciendo quién eres y fíjalo permanentemente arriba en tu perfil.</p>
              </div>
            </div>
            <div className="flex gap-4 sm:gap-5 items-start">
              <div className="bg-gray-800 text-orange-500 w-10 h-10 rounded-xl flex items-center justify-center font-black shrink-0 border border-gray-700 mt-0.5">3</div>
              <div>
                <h4 className="font-black text-white text-base sm:text-lg tracking-tight">Grabación en Bloque</h4>
                <p className="text-gray-400 text-sm xl:text-base mt-1">Cámbiate de camisa 3 veces en un día y graba 3 videos seguidos. Ahorrarás horas.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 bg-orange-500 w-6 rounded-full"></div>
              <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
                Módulo 5 // Comunidad
              </span>
            </div>
            <h2 className="text-3xl font-black text-gray-900 uppercase tracking-tighter">Retención Activa</h2>
          </div>
          <p className="text-gray-600 font-medium mb-8 text-base sm:text-lg">Instagram es una red social. Si publicas y te vas, te ocultará.</p>
          <div className="space-y-4 mt-auto">
            <div className="p-5 border border-red-200 bg-red-50 rounded-3xl">
              <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                <AlertTriangle size={14} /> Lo que NO debes hacer
              </p>
              <p className="text-sm xl:text-base font-medium text-red-900">Responder comentarios solo con emojis ("🔥🙌") o dar likes. Eso frena la interacción algorítmica.</p>
            </div>
            <div className="p-5 border border-green-200 bg-green-50 rounded-3xl">
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                <CheckCircle2 size={14} /> La estrategia ganadora
              </p>
              <p className="text-sm xl:text-base font-medium text-green-900">Responde con preguntas para generar conversaciones largas. Eso dispara tu alcance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 6 // EMBUDO DE CIERRE               */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-green-500 w-8 rounded-full"></div>
            <span className="text-green-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 6 // Conversión Directa
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-green-600 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Embudo de Cierre
            </h2>
          </div>
        </div>
        <div className="bg-white p-8 md:p-14 rounded-[3rem] shadow-sm border border-gray-200 text-left md:text-center">
          <p className="text-base sm:text-lg font-medium text-gray-600 mb-8 md:mb-10 max-w-2xl md:mx-auto">
            Los likes no pagan las facturas. Tienes que llevar a la gente a tu WhatsApp. Crea un link directo a tu chat para que te contacten sin fricción.
          </p>

          <a
            href="https://create.wa.link/"
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => { e.preventDefault(); window.open('https://create.wa.link/', '_blank'); }}
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-all shadow-lg hover:shadow-green-500/20 w-full md:w-auto"
          >
            Crear Link de WhatsApp <ExternalLink size={18} />
          </a>

          <div className="mt-10 md:mt-12 p-5 sm:p-6 bg-red-50 border border-red-200 rounded-4xl max-w-xl md:mx-auto text-left flex gap-4 sm:gap-5 items-start">
            <div className="bg-red-100 p-2 sm:p-3 rounded-xl text-red-500 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-red-600 font-black uppercase tracking-widest text-[11px] sm:text-xs mb-1">Regla de Oro Inquebrantable</h4>
              <p className="text-red-900 font-medium text-xs sm:text-sm leading-relaxed">
                <strong>NUNCA des tus precios en comentarios públicos.</strong> Responde siempre: "¡Hola! Te acabo de enviar toda la info detallada por mensaje privado 📩".
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}