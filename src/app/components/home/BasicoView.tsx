"use client";

import Image from "next/image";
import {
  Settings,
  Smartphone,
  LayoutTemplate,
  CalendarDays,
  MessageCircleHeart,
  Link as LinkIcon,
  CheckCircle2,
  Lightbulb,
  Video,
  PenTool,
  ImageIcon,
  AlertTriangle,
  ExternalLink,
  Download,
  UserCircle,
  Timer,
  Map,
  ArrowRight,
  Mic,
  Camera,
  Scissors,
  Sparkles,
  Zap,
  Clock,
  Star,
  Play,
  Images,
  MessageCircle,
  Pin,
  X,
  Search,
} from "lucide-react";

export default function BasicoView() {
  return (
    <div className="space-y-12 sm:space-y-20 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-500">
      {/* ========================================== */}
      {/* HERO SECTION (ESTILO INSTAGRAM) */}
      {/* ========================================== */}
      <div className="bg-gray-900 rounded-2xl sm:rounded-[3rem] p-6 sm:p-8 md:p-20 text-center relative overflow-hidden border-2 border-gray-800 shadow-2xl w-full">
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

          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase tracking-tighter mb-6 leading-[1.1]">
            Tu Ecosistema <br />
            <span className="text-transparent bg-clip-text bg-linear-to-r from-orange-400 via-pink-500 to-purple-500">
              Digital
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-medium text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Esta es tu hoja de ruta. Lee, aplica los conceptos, usa las
            herramientas y transforma tu perfil en una máquina de atracción en
            tiempo récord.
          </p>
        </div>
      </div>

      {/* ========================================== */}
      {/* MÓDULO 1: LA VITRINA DIGITAL */}
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
            <div className="bg-gray-900 rounded-2xl sm:rounded-4xl p-5 sm:p-8 text-white relative overflow-hidden shadow-xl border border-gray-800">
              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white p-3 rounded-xl shrink-0 shadow-lg shadow-orange-500/30">
                    <Timer className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">
                    La regla de los 3 segundos
                  </h3>
                </div>
                <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                  Es el tiempo exacto que tienes para que un visitante decida si
                  te sigue o se va. Si tu perfil es un laberinto visual o no
                  comunicas al instante qué problema resuelves, pierdes clientes
                  antes de que vean tu contenido.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/10 rounded-full pointer-events-none"></div>
            </div>

            {/* LAS 3 CARDS REDISEÑADAS */}
            <div className="grid sm:grid-cols-3 gap-6 flex-1">
              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <PenTool className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">
                      Paso 01 // Copia
                    </span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">
                      Bio de Impacto
                    </h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      Usa la fórmula:{" "}
                      <span className="text-gray-900 font-black">
                        "Ayudo a [X] a lograr [Y] con [Z]"
                      </span>
                      . No olvides incluir tu palabra clave para el SEO.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <UserCircle className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">
                      Paso 02 // Branding
                    </span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">
                      Identidad Visual
                    </h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      Foto clara con fondo sólido, o el logo de tu negocio.{" "}
                      <strong className="text-gray-900 block mt-1">
                        Tip: Si usas logo, la tendencia es el minimalismo y
                        tipografías limpias.
                      </strong>
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white p-5 sm:p-8 rounded-2xl sm:rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-2 transition-all duration-500">
                <div className="absolute top-0 left-0 w-full h-1.5 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col gap-5 h-full">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                    <LayoutTemplate className="w-6 h-6" />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-orange-500 uppercase tracking-[0.2em] mb-2 block">
                      Paso 03 // Conversión
                    </span>
                    <h4 className="font-black text-gray-900 leading-tight text-2xl mb-3">
                      Historias Fijas
                    </h4>
                    <p className="text-sm xl:text-base text-gray-600 font-medium leading-relaxed">
                      4 carpetas estratégicas:{" "}
                      <span className="font-bold text-gray-800">
                        Quién soy, Servicios, Testimonios y Contacto
                      </span>
                      . Tu embudo automático 24/7.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-linear-to-br from-orange-50 to-orange-100 border border-orange-200 p-4 sm:p-5 rounded-2xl sm:rounded-4xl flex flex-row items-center gap-3 sm:gap-4 hover:shadow-md hover:shadow-orange-500/10 transition-all group">
              <div className="bg-white text-orange-500 w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-sm border border-orange-100 group-hover:scale-105 transition-transform">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div className="flex-1">
                <h4 className="font-black text-orange-600 uppercase text-[10px] sm:text-xs tracking-widest mb-1">
                  Paso Obligatorio
                </h4>
                <p className="text-orange-950 font-black text-sm sm:text-base leading-tight">
                  Cambia a "Cuenta de Creador" en Ajustes.
                </p>
              </div>
              <div className="hidden sm:flex w-8 h-8 bg-orange-200/50 text-orange-600 rounded-full items-center justify-center shrink-0 group-hover:bg-orange-500 group-hover:text-white transition-colors">
                <ArrowRight size={16} />
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl sm:rounded-4xl p-5 sm:p-6 xl:p-8 border border-gray-200 shadow-lg flex flex-col h-full relative overflow-hidden">
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-gray-50 rounded-full pointer-events-none"></div>
            <h3 className="text-xl font-black text-gray-900 uppercase tracking-tight mb-10 flex items-center gap-3 relative z-10">
              <Map className="text-orange-500" size={24} /> Roadmap
            </h3>
            <div className="relative ml-2 flex-1 z-10">
              <div className="absolute top-2 bottom-6 left-3 w-0.5 bg-linear-to-b from-orange-500 via-gray-200 to-gray-100 rounded-full"></div>
              <div className="space-y-10">
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-orange-500 text-orange-600 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:scale-125 transition-transform z-10">
                    1
                  </div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">
                    Estructura Bio
                  </h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">
                    Aplica la fórmula y escríbelo hoy mismo.
                  </p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-gray-200 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all z-10">
                    2
                  </div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">
                    Limpieza Visual
                  </h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">
                    Sube foto clara con fondo sólido.
                  </p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-white border-4 border-gray-200 text-gray-400 w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all z-10">
                    3
                  </div>
                  <h4 className="font-black text-gray-900 text-sm uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">
                    Destacadas
                  </h4>
                  <p className="text-xs xl:text-sm text-gray-500 font-medium leading-relaxed">
                    Diseña 4 portadas simples en Canva.
                  </p>
                </div>
                <div className="relative pl-12 group cursor-default transition-all duration-300 hover:translate-x-1">
                  <div className="absolute -left-1 top-0 bg-orange-500 border-4 border-orange-100 text-white w-8 h-8 rounded-full flex items-center justify-center font-black text-xs shadow-md z-10">
                    4
                  </div>
                  <h4 className="font-black text-orange-600 text-sm uppercase tracking-widest mb-1">
                    Modo Creador
                  </h4>
                  <p className="text-xs xl:text-sm text-gray-600 font-medium leading-relaxed">
                    Activa el panel profesional en la app.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 🎬 VIDEO 1: DEMO CONFIGURACIÓN DE PERFIL */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="bg-gray-900 rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 relative overflow-hidden border border-gray-800 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-pink-500/10 rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
              <span className="text-orange-400 font-black text-xs uppercase tracking-[0.2em]">
                Ejemplo Práctico
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-white tracking-tight leading-tight mb-3">
                  Tu Perfil es tu{" "}
                  <span className="text-orange-400">Landing Page</span>
                </h3>
                <p className="text-gray-400 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                  Observa estos ejemplos reales. Un perfil optimizado retiene la
                  atención, demuestra autoridad al instante y guía al usuario
                  hacia la conversión.
                </p>
              </div>
            </div>

            {/* IMÁGENES DE PERFIL OPTIMIZADAS (HORIZONTALES) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-8 w-full max-w-5xl mx-auto">
              <div className="relative rounded-2xl sm:rounded-3xl border-2 border-gray-800 bg-gray-950/60 shadow-xl group flex items-center justify-center p-2 overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-gray-800 text-gray-300 text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-gray-600">
                  Ejemplo 1
                </div>
                <Image
                  src="/Perfil1.png"
                  alt="Perfil 1"
                  width={1280}
                  height={720}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
              </div>
              <div className="relative rounded-2xl sm:rounded-3xl border-2 border-gray-800 bg-gray-950/60 shadow-xl group flex items-center justify-center p-2 overflow-hidden">
                <div className="absolute top-4 left-4 z-20 bg-orange-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-orange-400">
                  Ejemplo 2
                </div>
                <Image
                  src="/Perfil2.png"
                  alt="Perfil 2"
                  width={1280}
                  height={720}
                  sizes="(max-width: 640px) 100vw, 50vw"
                  className="w-full h-auto object-contain rounded-xl sm:rounded-2xl group-hover:scale-105 transition-transform duration-700 relative z-10"
                />
              </div>
            </div>

            {/* TIPS PÚBLICOS */}
            <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h4 className="text-white font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-orange-400" /> Checklist de
                Optimización
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-orange-400 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    <strong className="text-white">Foto Clara y Limpia:</strong>{" "}
                    Usa fondos sólidos o colores de tu marca. El rostro debe
                    verse iluminado y transmitir confianza.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-orange-400 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    <strong className="text-white">Bio Estructurada:</strong>{" "}
                    Escribe a quién ayudas y cómo lo haces. Termina siempre con
                    un llamado a la acción (CTA) directo hacia tu enlace.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-orange-400 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-300 font-medium">
                    <strong className="text-white">
                      Historias Estratégicas:
                    </strong>{" "}
                    Diseña portadas limpias para tus destacadas (Servicios,
                    Testimonios, Sobre Mí). Serán tus vendedoras 24/7.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 2: TU ESTUDIO DE BOLSILLO */}
      {/* ========================================== */}
      <section className="w-full flex flex-col gap-6 xl:gap-8">
        <div className="mb-4 sm:mb-6">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 2 // Tu Estudio de Bolsillo
            </span>
          </div>
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Smartphone className="w-5 h-5 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Producción Audiovisual
            </h2>
          </div>
        </div>

        <div className="w-full bg-gray-900 rounded-2xl sm:rounded-4xl p-4 sm:p-8 xl:p-12 text-white relative overflow-hidden shadow-2xl border border-gray-800">
          <div className="absolute top-0 right-0 w-96 h-96 bg-orange-500/10 rounded-full pointer-events-none"></div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-4 sm:gap-6 mb-4 sm:mb-10 pb-6 sm:pb-8 border-b border-gray-800/80">
            <div className="flex items-center gap-3 sm:gap-6">
              <div className="bg-linear-to-br from-orange-500/20 to-orange-600/10 p-2.5 sm:p-4 rounded-xl sm:rounded-2xl border border-white/10 shadow-inner shrink-0">
                <Camera className="w-6 h-6 sm:w-10 sm:h-10 text-orange-400" />
              </div>
              <h3 className="text-xl sm:text-4xl xl:text-5xl font-black tracking-tight leading-none">
                El Set Físico
              </h3>
            </div>
            <p className="text-gray-400 font-medium text-sm sm:text-lg xl:text-xl max-w-2xl lg:text-right leading-relaxed">
              No necesitas invertir cientos de dólares. Domina estas 3 variables
              clave para multiplicar tu calidad visual hoy mismo.
            </p>
          </div>

          <div className="relative z-10 grid md:grid-cols-3 gap-5 sm:gap-6 xl:gap-8 mt-2">
            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-orange-500/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-500/20 rounded-xl flex items-center justify-center shadow-orange-500/20 shadow-lg shrink-0">
                  <Lightbulb size={24} className="text-orange-400" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">
                  1. La Luz
                </h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                Graba siempre de frente a una ventana. La luz natural oculta
                imperfecciones y resalta tu rostro sin necesidad de aros de luz.
              </p>
            </div>

            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-blue-500/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500/20 rounded-xl flex items-center justify-center shadow-blue-500/20 shadow-lg shrink-0">
                  <Mic size={24} className="text-blue-400" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">
                  2. El Audio
                </h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                El audio es el 50% del éxito. Usa un micrófono inalámbrico o
                graba en salas amuebladas para que los objetos absorban el eco.
              </p>
            </div>

            <div className="bg-white/5 p-6 xl:p-8 rounded-3xl border border-white/10 hover:border-gray-400/50 transition-all duration-500 group">
              <div className="flex items-center gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gray-500/20 rounded-xl flex items-center justify-center shadow-gray-500/20 shadow-lg shrink-0">
                  <Smartphone size={24} className="text-gray-300" />
                </div>
                <h4 className="font-black text-white text-xl xl:text-2xl">
                  3. El Lente
                </h4>
              </div>
              <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed">
                Limpia el lente con tu camiseta siempre antes de grabar. Usa la
                cámara trasera para mayor nitidez y ubícala a la altura de tus
                ojos.
              </p>
            </div>
          </div>
        </div>

        {/* HERRAMIENTAS - 3 COLUMNAS */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          {/* CANVA */}
          <div className="bg-white rounded-4xl border border-gray-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="h-44 bg-purple-100 relative overflow-hidden">
              <Image
                src="/Premier.png"
                alt="Canva Interface"
                fill
                className="object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-purple-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white shrink-0">
                  <span className="font-black text-2xl">C</span>
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                    Canva
                  </h4>
                  <p className="text-[10px] font-black text-purple-600 uppercase tracking-widest mt-1">
                    Diseño de Autoridad
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="bg-purple-50/50 rounded-3xl p-5 border border-purple-100 mb-6 flex-1">
                <h5 className="font-black text-purple-900 text-[11px] mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                  <Sparkles size={16} className="text-purple-500" /> Tips de
                  Retención
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-purple-900 font-black">
                        Regla del 20%:
                      </strong>{" "}
                      El título gigante atrapa el ojo rápido.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-purple-900 font-black">
                        La IA como apoyo:
                      </strong>{" "}
                      Usa su Inteligencia Artificial para acelerar ideas, pero{" "}
                      <strong className="text-red-500">
                        no dejes que haga todo
                      </strong>
                      . Mantén tu esencia humana.
                    </p>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.canva.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.canva.com/", "_blank");
                }}
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 hover:bg-purple-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg mt-auto"
              >
                Abrir Canva <ExternalLink size={16} />
              </a>
            </div>
          </div>

          {/* CAPCUT */}
          <div className="bg-white rounded-4xl border border-gray-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="h-44 bg-gray-200 relative overflow-hidden">
              <Image
                src="/Meeting1.png"
                alt="Video Editing"
                fill
                className="object-cover mix-blend-multiply opacity-70 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white shrink-0">
                  <Scissors className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                    CapCut
                  </h4>
                  <p className="text-[10px] font-black text-gray-500 uppercase tracking-widest mt-1">
                    Edición de Impacto
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="bg-gray-50 rounded-3xl p-5 border border-gray-200 mb-6 flex-1">
                <h5 className="font-black text-gray-900 text-[11px] mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                  <Zap size={16} className="text-gray-500" /> Fórmula Dinámica
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-gray-900 font-black">
                        Mejora de Voz (IA):
                      </strong>{" "}
                      Si no tienes buen micrófono, usa la herramienta{" "}
                      <em className="text-gray-900">"Mejorar Voz"</em> (Pro)
                      para limpiar el ruido.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-gray-900 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-gray-900 font-black">
                        SFX y Hooks:
                      </strong>{" "}
                      Usa Ganchos visuales (zoom in) y Efectos de Sonido
                      (Whoosh, Pop) en transiciones.
                    </p>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.capcut.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.capcut.com/", "_blank");
                }}
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 hover:bg-gray-800 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg mt-auto"
              >
                Descargar App <Download size={16} />
              </a>
            </div>
          </div>

          {/* PEXELS (B-ROLL) */}
          <div className="bg-white rounded-4xl border border-gray-200 shadow-sm flex flex-col overflow-hidden group hover:shadow-2xl transition-all duration-500">
            <div className="h-44 bg-teal-100 relative overflow-hidden">
              <Image
                src="/Pexels.png"
                alt="Pexels Interface"
                fill
                className="object-cover mix-blend-overlay opacity-80 group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-teal-600/10"></div>
              <div className="absolute inset-0 bg-linear-to-t from-white via-transparent to-transparent"></div>
              <div className="absolute bottom-6 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-teal-500 to-emerald-600 text-white rounded-2xl flex items-center justify-center shadow-2xl border-2 border-white shrink-0">
                  <Search className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl sm:text-2xl font-black text-gray-900 leading-none">
                    Pexels
                  </h4>
                  <p className="text-[10px] font-black text-teal-600 uppercase tracking-widest mt-1">
                    Videos de Apoyo
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 flex flex-col flex-1">
              <div className="bg-teal-50/50 rounded-3xl p-5 border border-teal-100 mb-6 flex-1">
                <h5 className="font-black text-teal-900 text-[11px] mb-4 flex items-center gap-2 uppercase tracking-[0.15em]">
                  <Video size={16} className="text-teal-500" /> B-Roll Gratuito
                </h5>
                <ul className="space-y-3">
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-teal-900 font-black">
                        Videos de Fondo:
                      </strong>{" "}
                      Busca términos como "aesthetic", "working" o "abstract"
                      para colocar textos encima.
                    </p>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-teal-500 mt-2 shrink-0"></div>
                    <p className="text-sm text-gray-700 font-medium">
                      <strong className="text-teal-900 font-black">
                        Dinámismo Total:
                      </strong>{" "}
                      Intercala tu rostro hablando con videos descargados de
                      Pexels para evitar que se aburran.
                    </p>
                  </li>
                </ul>
              </div>
              <a
                href="https://www.pexels.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("https://www.pexels.com/", "_blank");
                }}
                className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gray-900 hover:bg-teal-700 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-lg mt-auto"
              >
                Buscar B-Roll <ExternalLink size={16} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 3: FORMATOS QUE FUNCIONAN */}
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

        {/* 3 COLUMNAS COMPACTAS Y ELEGANTES */}
        <div className="grid lg:grid-cols-3 gap-6 xl:gap-8">
          {/* CARD REELS */}
          <div className="bg-gray-900 rounded-2xl sm:rounded-[2.5rem] border border-gray-800 shadow-2xl flex flex-col overflow-hidden group hover:shadow-pink-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-gray-950 shrink-0">
              <Image
                src="/Reels.png"
                alt="Reels Creator"
                fill
                className="object-cover opacity-40 group-hover:scale-105 group-hover:opacity-50 transition-all duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-linear-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-linear-to-br from-pink-500 to-rose-500 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 shrink-0 group-hover:rotate-6 transition-transform">
                  <Play className="w-5 h-5 fill-white" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white leading-none mb-1">
                    Reels
                  </h4>
                  <p className="text-[10px] font-black text-pink-400 uppercase tracking-widest">
                    Alcance Masivo
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-sm text-gray-300 font-medium mb-5 leading-relaxed">
                El motor para que gente nueva te descubra. Instagram los muestra
                masivamente a{" "}
                <strong className="text-white">no seguidores</strong>.
              </p>

              {/* Botón Video de Referencia Reel */}
              <a
                href="https://www.instagram.com/reel/DQXtyo-ga6s/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-800/80 border border-gray-700 hover:border-pink-500/50 hover:bg-gray-800 rounded-2xl p-4 flex items-center justify-center gap-3 transition-all mb-5 group/btn shadow-sm"
              >
                <Play
                  size={18}
                  className="text-pink-400 group-hover/btn:scale-110 transition-transform"
                />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Ver Ejemplo Real
                </span>
                <ExternalLink size={14} className="text-gray-400" />
              </a>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-5 mt-auto">
                <h5 className="font-black text-white text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <Video size={16} className="text-pink-400" /> Anatomía Viral
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-xs shrink-0 border border-pink-500/30 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Gancho (0-3s)
                      </strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Di el beneficio o dolor más grande rápido para atrapar
                        al usuario.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-xs shrink-0 border border-pink-500/30 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Cuerpo (3-15s)
                      </strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Entrega la solución rápido sin introducciones aburridas.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-pink-500/20 text-pink-400 flex items-center justify-center font-black text-xs shrink-0 border border-pink-500/30 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Llamado a la Acción
                      </strong>
                      <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                        Dile a la gente qué hacer: "Comenta INFO para más
                        detalles".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD CARRUSELES */}
          <div className="bg-blue-950/80 rounded-2xl sm:rounded-4xl border border-blue-900/50 shadow-2xl flex flex-col overflow-hidden group hover:shadow-blue-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-blue-900 shrink-0">
              <Image
                src="/Historias.png"
                alt="Carousel Grid"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-linear-to-t from-blue-950 via-blue-950/60 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <Images className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white leading-none mb-1">
                    Carruseles
                  </h4>
                  <p className="text-[10px] font-black text-blue-300 uppercase tracking-widest mt-1">
                    Autoridad
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-sm text-blue-200 font-medium mb-5 leading-relaxed">
                El formato perfecto para enseñar. Mantiene al usuario
                deslizando, lo cual{" "}
                <strong className="text-white">Instagram premia</strong>.
              </p>

              {/* Botón Carrusel de Referencia */}
              <a
                href="https://www.instagram.com/p/DYAyIu7mlbg/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-900/40 border border-blue-800 hover:border-blue-500/50 hover:bg-blue-900/60 rounded-2xl p-4 flex items-center justify-center gap-3 transition-all mb-5 group/btn shadow-sm"
              >
                <Images
                  size={18}
                  className="text-blue-400 group-hover/btn:scale-110 transition-transform"
                />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Ver Ejemplo Real
                </span>
                <ExternalLink size={14} className="text-blue-300" />
              </a>

              <div className="bg-blue-500/10 border border-blue-500/20 rounded-2xl p-5 mt-auto">
                <h5 className="font-black text-blue-300 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-blue-400" />{" "}
                  Estructura AIDA
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs shrink-0 border border-blue-500/30 mt-0.5">
                      A
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Atención (Slide 1)
                      </strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
                        Título gigante que despierte curiosidad inmediata.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs shrink-0 border border-blue-500/30 mt-0.5">
                      I
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Interés (Slides 2-7)
                      </strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
                        Una sola idea o consejo por imagen. Usa letra grande.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-blue-500/20 text-blue-400 flex items-center justify-center font-black text-xs shrink-0 border border-blue-500/30 mt-0.5">
                      A
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Acción (Slide Final)
                      </strong>
                      <p className="text-sm sm:text-base text-blue-200 leading-relaxed">
                        Pide explícitamente que guarden o compartan el post.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CARD HISTORIAS */}
          <div className="bg-orange-950/80 rounded-2xl sm:rounded-4xl border border-orange-900/50 shadow-2xl flex flex-col overflow-hidden group hover:shadow-orange-500/10 transition-all duration-500">
            <div className="h-32 sm:h-36 relative overflow-hidden bg-orange-900 shrink-0">
              <Image
                src="/Youtube.png"
                alt="Stories Creator"
                fill
                className="object-cover opacity-40 group-hover:scale-105 transition-transform duration-700 mix-blend-overlay"
              />
              <div className="absolute inset-0 bg-linear-to-t from-orange-950 via-orange-950/60 to-transparent"></div>
              <div className="absolute bottom-5 left-6 flex items-center gap-4">
                <div className="w-12 h-12 bg-orange-600 text-white rounded-xl flex items-center justify-center shadow-lg border border-white/10 shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-2xl font-black text-white leading-none mb-1">
                    Historias
                  </h4>
                  <p className="text-[10px] font-black text-orange-300 uppercase tracking-widest mt-1">
                    Conexión Diaria
                  </p>
                </div>
              </div>
            </div>

            <div className="p-5 sm:p-6 flex flex-col flex-1">
              <p className="text-sm sm:text-base text-orange-200 font-medium mb-5 leading-relaxed">
                Para los que{" "}
                <strong className="text-white">ya te siguen</strong>. Aquí
                conectas humanamente y cierras ventas por DM.
              </p>

              {/* Botón Historias de Referencia */}
              <a
                href="https://www.instagram.com/domenicodorazio_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-orange-900/40 border border-orange-800 hover:border-orange-500/50 hover:bg-orange-900/60 rounded-2xl p-4 flex items-center justify-center gap-3 transition-all mb-5 group/btn shadow-sm"
              >
                <MessageCircle
                  size={18}
                  className="text-orange-400 group-hover/btn:scale-110 transition-transform"
                />
                <span className="text-xs font-bold text-white uppercase tracking-widest">
                  Ver Ejemplo Real
                </span>
                <ExternalLink size={14} className="text-orange-300" />
              </a>

              <div className="bg-orange-500/10 border border-orange-500/20 rounded-2xl p-5 mt-auto">
                <h5 className="font-black text-orange-300 text-xs mb-4 flex items-center gap-2 uppercase tracking-widest">
                  <CheckCircle2 size={16} className="text-orange-400" />{" "}
                  Secuencia Vendedora
                </h5>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs shrink-0 border border-orange-500/30 mt-0.5">
                      1
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Contexto
                      </strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">
                        Muestra algo de tu día a día o un detrás de cámaras.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs shrink-0 border border-orange-500/30 mt-0.5">
                      2
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Problema
                      </strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">
                        Habla de un dolor o problema común de tus clientes
                        actuales.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-orange-500/20 text-orange-400 flex items-center justify-center font-black text-xs shrink-0 border border-orange-500/30 mt-0.5">
                      3
                    </div>
                    <div>
                      <strong className="text-white text-sm sm:text-base block mb-0.5">
                        Llamado (CTA)
                      </strong>
                      <p className="text-sm sm:text-base text-orange-200 leading-relaxed">
                        "Vota en la encuesta" o "Mándame un DM para ayudarte".
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* 🎬 VIDEO 2: DEMO CREACIÓN DE CONTENIDO */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="bg-white rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 relative overflow-hidden border border-gray-200 shadow-xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-pink-500/5 rounded-full pointer-events-none"></div>

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="h-0.5 bg-pink-500 w-8 rounded-full"></div>
              <span className="text-pink-500 font-black text-xs uppercase tracking-[0.2em]">
                Ejemplo Práctico
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 md:gap-8 mb-8">
              <div className="flex-1">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-black text-gray-900 tracking-tight leading-tight mb-3">
                  Análisis de{" "}
                  <span className="text-pink-500">Reels Virales</span>
                </h3>
                <p className="text-gray-500 font-medium text-sm sm:text-base leading-relaxed max-w-xl">
                  Observa estos ejemplos reales que lograron captar la atención
                  de millones. Analiza el gancho, la retención y el llamado a la
                  acción.
                </p>
              </div>
            </div>

            {/* IMÁGENES DE REELS CON LINKS A INSTAGRAM */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8 mb-8 w-full max-w-xs sm:max-w-2xl mx-auto">
              <a
                href="https://www.instagram.com/reel/DUzT0c2CbCI/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[9/16] rounded-2xl sm:rounded-3xl border-4 border-gray-100 overflow-hidden shadow-[0_10px_30px_rgba(236,72,153,0.15)] group block hover:shadow-[0_10px_40px_rgba(236,72,153,0.3)] transition-all"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                    <Play
                      className="w-8 h-8 text-pink-500 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-20 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-pink-400">
                  Ejemplo 1
                </div>
                <Image
                  src="/Reel1.jpg"
                  alt="Reel Viral 1"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
              <a
                href="https://www.instagram.com/reel/DW9VoncCU1G/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="relative aspect-[9/16] rounded-2xl sm:rounded-3xl border-4 border-gray-100 overflow-hidden shadow-[0_10px_30px_rgba(236,72,153,0.15)] group block hover:shadow-[0_10px_40px_rgba(236,72,153,0.3)] transition-all"
              >
                <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors duration-500 z-10 flex items-center justify-center">
                  <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-xl transform group-hover:scale-110 transition-transform duration-500">
                    <Play
                      className="w-8 h-8 text-pink-500 ml-1"
                      fill="currentColor"
                    />
                  </div>
                </div>
                <div className="absolute top-4 left-4 z-20 bg-pink-500 text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg border border-pink-400">
                  Ejemplo 2
                </div>
                <Image
                  src="/Reel2.jpg"
                  alt="Reel Viral 2"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </a>
            </div>

            {/* TIPS PÚBLICOS */}
            <div className="bg-gray-50 border border-gray-200 rounded-2xl sm:rounded-3xl p-5 sm:p-6">
              <h4 className="text-gray-900 font-black text-sm uppercase tracking-widest mb-4 flex items-center gap-2">
                <Sparkles size={16} className="text-pink-500" /> Fórmula de
                Viralidad
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-pink-500 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    <strong className="text-gray-900">
                      El Gancho (3 Segundos):
                    </strong>{" "}
                    Rompe el patrón visual o usa una frase inesperada desde el
                    primer instante para detener el scroll.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-pink-500 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    <strong className="text-gray-900">
                      Retención Dinámica:
                    </strong>{" "}
                    Mantén un ritmo rápido. Cambia de plano, añade textos en
                    pantalla para apoyar lo que dices y elimina espacios en
                    blanco.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-pink-500 shrink-0 mt-0.5"
                  />
                  <span className="text-sm text-gray-600 font-medium">
                    <strong className="text-gray-900">
                      Cierre con Acción:
                    </strong>{" "}
                    Diles exactamente qué hacer al final. Un claro "Guarda este
                    video", "Sígueme para más" o "Comenta para info".
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULOS 4 & 5 // OPERACIÓN DIARIA */}
      {/* ========================================== */}
      <section className="w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulos 4 y 5 // Operación Diaria
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <CalendarDays className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Organización y Comunidad
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 xl:gap-8 items-stretch">
          {/* MÓDULO 4: CALENDARIO */}
          <div className="bg-gray-900 p-5 sm:p-8 xl:p-12 rounded-2xl sm:rounded-[3rem] border border-gray-800 shadow-2xl relative overflow-hidden group flex flex-col">
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-500/10 rounded-full pointer-events-none"></div>

            <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mb-3 relative z-10">
              Tu Primer Calendario
            </h3>
            <p className="text-gray-400 font-medium text-base sm:text-lg mb-10 relative z-10">
              La constancia vence al talento. Organiza tu semana de contenido en
              3 simples pasos para evitar el caos.
            </p>

            <div className="space-y-4 sm:space-y-6 relative z-10 flex-1">
              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-4xl p-5 sm:p-6 hover:bg-white/10 transition-colors">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-12 h-12 bg-orange-500/20 text-orange-400 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <Lightbulb size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">
                      1. Lluvia de Ideas
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Anota las 5 preguntas que más te hacen tus clientes al
                      comprar. Esas son tus primeras publicaciones de alto
                      valor.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-4xl p-5 sm:p-6 hover:bg-white/10 transition-colors">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-12 h-12 bg-pink-500/20 text-pink-400 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <Pin size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">
                      2. Video Pilar (Fijado)
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Graba un Reel presentándote, contando tu historia y
                      diciendo exactamente cómo puedes ayudar. Fíjalo en tu
                      perfil.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl sm:rounded-4xl p-5 sm:p-6 hover:bg-white/10 transition-colors">
                <div className="flex gap-4 sm:gap-5 items-start">
                  <div className="w-12 h-12 bg-blue-500/20 text-blue-400 rounded-2xl flex items-center justify-center shrink-0 shadow-inner">
                    <Camera size={24} />
                  </div>
                  <div>
                    <h4 className="font-black text-white text-lg sm:text-xl mb-1">
                      3. Grabación en Bloque
                    </h4>
                    <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                      Cámbiate de camisa 3 veces en un solo día y graba 3 videos
                      seguidos. Ahorrarás horas de preparación mental y física.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* MÓDULO 5: COMUNIDAD */}
          <div className="bg-white p-5 sm:p-8 xl:p-12 rounded-2xl sm:rounded-[3rem] border border-gray-200 shadow-xl relative overflow-hidden group hover:shadow-2xl transition-all flex flex-col">
            <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/5 rounded-full pointer-events-none"></div>

            <h3 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3 relative z-10">
              Retención Activa
            </h3>
            <p className="text-gray-500 font-medium text-base sm:text-lg mb-10 relative z-10">
              Instagram es una red social, no un periódico. Si publicas y te vas
              inmediatamente, el algoritmo te ocultará.
            </p>

            <div className="space-y-6 relative z-10 flex-1 flex flex-col justify-center">
              {/* THE DON'T */}
              <div className="bg-red-50/50 border border-red-100 rounded-2xl sm:rounded-4xl p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-red-500/10 rounded-full pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-red-500/10 text-red-600 flex items-center justify-center shrink-0">
                    <AlertTriangle size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-red-500 uppercase tracking-widest block mb-0.5">
                      El Peor Error
                    </span>
                    <h5 className="font-black text-red-950 text-lg sm:text-xl leading-none">
                      Lo que NO debes hacer
                    </h5>
                  </div>
                </div>
                <p className="text-red-900/80 font-medium text-sm sm:text-base leading-relaxed mb-4">
                  Prácticas que matan tu alcance y le dicen al algoritmo que tu
                  contenido no genera interés real:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-red-900/90 font-medium">
                      Responder solo con emojis ("🔥", "🙌").
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-red-900/90 font-medium">
                      Dar "Like" y dejar a la persona en visto sin conversar.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <span className="text-sm sm:text-base text-red-900/90 font-medium">
                      Ignorar por completo los comentarios largos.
                    </span>
                  </li>
                </ul>
              </div>

              {/* THE DO */}
              <div className="bg-green-50/50 border border-green-100 rounded-2xl sm:rounded-4xl p-5 sm:p-8 relative overflow-hidden">
                <div className="absolute -right-4 -top-4 w-24 h-24 bg-green-500/10 rounded-full pointer-events-none"></div>
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-2xl bg-green-500/10 text-green-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={24} />
                  </div>
                  <div>
                    <span className="text-[10px] font-black text-green-600 uppercase tracking-widest block mb-0.5">
                      La Estrategia
                    </span>
                    <h5 className="font-black text-green-950 text-lg sm:text-xl leading-none">
                      Lo que SÍ debes hacer
                    </h5>
                  </div>
                </div>
                <p className="text-green-900/80 font-medium text-sm sm:text-base leading-relaxed mb-4">
                  Transforma cada interacción en un hilo para que Instagram
                  expanda el alcance de tu publicación:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span className="text-sm sm:text-base text-green-900/90 font-medium">
                      Responde con una afirmación y una pregunta.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span className="text-sm sm:text-base text-green-900/90 font-medium">
                      Menciona a la persona por su nombre.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2
                      size={18}
                      className="text-green-600 shrink-0 mt-0.5"
                    />
                    <span className="text-sm sm:text-base text-green-900/90 font-medium">
                      Deriva al DM estratégicamente ("Te envío info").
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 6 // EMBUDO DE CIERRE (REDISEÑO) */}
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
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <LinkIcon className="w-6 h-6 sm:w-7 sm:h-7 text-green-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Embudo de Cierre
            </h2>
          </div>
        </div>

        <div className="bg-gray-900 rounded-2xl sm:rounded-[3rem] p-5 sm:p-8 md:p-12 xl:p-16 relative overflow-hidden shadow-2xl border border-gray-800 flex flex-col md:flex-row items-center gap-6 sm:gap-10 xl:gap-16">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full pointer-events-none"></div>

          <div className="flex-1 relative z-10 text-left">
            <h3 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4">
              De Seguidores a Clientes
            </h3>
            <p className="text-base sm:text-lg text-gray-400 font-medium leading-relaxed mb-8 max-w-xl">
              Los likes no pagan las facturas. Tienes que sacar a la gente de
              Instagram y llevarla a tu terreno: WhatsApp. Crea un link directo
              a tu chat para que te contacten sin fricción.
            </p>

            <a
              href="https://create.wa.link/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                e.preventDefault();
                window.open("https://create.wa.link/", "_blank");
              }}
              className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-green-950 px-8 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all shadow-[0_0_40px_-10px_rgba(34,197,94,0.5)] hover:shadow-[0_0_60px_-15px_rgba(34,197,94,0.7)] hover:-translate-y-1 w-full sm:w-auto"
            >
              Crear Link de WhatsApp <ExternalLink size={18} />
            </a>
          </div>

          <div className="w-full md:w-5/12 lg:w-2/5 relative z-10">
            <div className="bg-red-500/10 border border-red-500/20 p-5 sm:p-8 rounded-2xl sm:rounded-4xl shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
              <div className="flex items-center gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 text-red-400 flex items-center justify-center shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <span className="text-[10px] font-black text-red-400 uppercase tracking-widest block mb-0.5">
                    Advertencia
                  </span>
                  <h4 className="font-black text-white text-lg leading-tight">
                    La Regla de Oro
                  </h4>
                </div>
              </div>
              <p className="text-gray-300 font-medium text-sm sm:text-base leading-relaxed">
                <strong className="text-white">
                  NUNCA des tus precios en los comentarios públicos.
                </strong>
                <br />
                <br />
                Responde siempre:{" "}
                <em className="text-red-200">
                  "¡Hola! Te acabo de enviar toda la información detallada por
                  mensaje privado 📩"
                </em>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
