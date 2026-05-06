"use client";

import { 
  Settings, Smartphone, LayoutTemplate, CalendarDays, 
  MessageCircleHeart, Link as LinkIcon, CheckCircle2, 
  Lightbulb, Video, PenTool, ImageIcon, AlertTriangle, 
  ExternalLink, Download, UserCircle, Timer, Map
} from "lucide-react";

export default function BasicoView() {
  return (
    <div className="space-y-24 pb-24 animate-in fade-in slide-in-from-bottom-8 duration-500">
      
      {/* ========================================== */}
      {/* HERO SECTION (ESTILO INSTAGRAM)            */}
      {/* ========================================== */}
      <div className="bg-gray-900 rounded-[3rem] p-8 md:p-20 text-center relative overflow-hidden border-2 border-gray-800 shadow-2xl">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611262588024-d12430b98920?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center opacity-15 mix-blend-luminosity"></div>
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
      {/* MÓDULO 1: LA VITRINA DIGITAL (BENTO BOX)   */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        
        {/* ENCABEZADO PREMIUM */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            {/* TEXTO AGRANDADO A text-xs sm:text-sm */}
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

        <div className="grid lg:grid-cols-12 gap-6 items-stretch">
          
          {/* LADO IZQUIERDO: BENTO BOX */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Bloque 1: Regla 3 Segundos */}
            <div className="bg-gray-900 rounded-4xl p-6 sm:p-8 text-white relative overflow-hidden shadow-xl border border-gray-800">
              <div className="relative z-10 flex flex-col gap-4 sm:gap-5">
                <div className="flex items-center gap-4 sm:gap-5">
                  <div className="bg-linear-to-br from-orange-500 to-orange-600 text-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shrink-0 shadow-lg shadow-orange-500/30">
                    <Timer className="w-6 h-6 sm:w-7 sm:h-7" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight leading-tight">La regla de los 3 segundos</h3>
                </div>
                <p className="text-gray-300 font-medium text-base sm:text-lg leading-relaxed">
                  Es el tiempo exacto que tienes para que un visitante decida si te sigue o se va. Si tu perfil es un laberinto visual, pierdes clientes antes de que vean tu contenido.
                </p>
              </div>
              <div className="absolute top-0 right-0 w-48 h-48 bg-orange-500/10 blur-[60px] rounded-full pointer-events-none"></div>
            </div>

            {/* Bloque 2: Las 3 Tarjetas */}
            <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 flex-1">
              <div className="bg-white p-6 sm:p-7 rounded-4xl border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <PenTool className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-gray-900 leading-tight text-lg sm:text-xl">Bio de Impacto</h4>
                </div>
                <p className="text-base text-gray-600 font-medium mt-auto leading-relaxed">Fórmula: <em className="text-gray-800 font-bold">"Ayudo a [X] a lograr [Y] con [Z]"</em>.</p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-4xl  border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <UserCircle className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-gray-900 leading-tight text-lg sm:text-xl">Identidad Visual</h4>
                </div>
                <p className="text-base text-gray-600 font-medium mt-auto leading-relaxed">Foto de rostro bien iluminada o logo limpio.</p>
              </div>

              <div className="bg-white p-6 sm:p-7 rounded-4xl  border border-gray-200 shadow-sm flex flex-col relative overflow-hidden group hover:shadow-xl hover:shadow-orange-500/5 hover:-translate-y-1 transition-all duration-300">
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-orange-400 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-orange-50 border border-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <LayoutTemplate className="w-5 h-5" />
                  </div>
                  <h4 className="font-black text-gray-900 leading-tight text-lg sm:text-xl">Historias Fijas</h4>
                </div>
                <p className="text-base text-gray-600 font-medium mt-auto leading-relaxed">Solo 4 carpetas: Quién soy, Servicios, Testimonios y Contacto.</p>
              </div>
            </div>

            {/* Bloque 3: Banner de Modo Creador */}
            <div className="bg-orange-50 border border-orange-200 p-5 sm:p-6 rounded-4xl  flex items-center gap-4 sm:gap-5 hover:bg-orange-100/50 transition-colors">
              <div className="bg-white text-orange-500 w-12 h-12 rounded-full flex items-center justify-center shrink-0 shadow-sm border border-orange-100">
                <Lightbulb className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-black text-orange-900 uppercase text-[10px] tracking-widest mb-1">Paso Obligatorio</h4>
                <p className="text-orange-800 font-bold text-sm">Cambia a "Cuenta de Creador" en Ajustes.</p>
              </div>
            </div>

          </div>

          {/* LADO DERECHO: ROADMAP */}
          <div className="lg:col-span-5 bg-white rounded-[2.5rem] p-8 md:p-10 border border-gray-200 shadow-lg flex flex-col h-full relative overflow-hidden">
            <div className="absolute -top-12.5 -right-12.5 w-40 h-40 bg-gray-50 rounded-full blur-2xl pointer-events-none"></div>
            
            <h3 className="text-2xl font-black text-gray-900 uppercase tracking-tight mb-8 flex items-center gap-3 relative z-10">
              <Map className="text-orange-500" size={28} /> Roadmap 
            </h3>
            
            <div className="relative ml-4 space-y-10 pb-2 flex-1 z-10">
              <div className="absolute top-2 bottom-4 left-3.75 w-0.75 bg-linear-to-b from-orange-500 via-gray-200 to-gray-100 rounded-full"></div>
              
              <div className="relative pl-12 group cursor-default">
                <div className="absolute -left-px -top-0.5 bg-white border-4 border-orange-500 text-orange-600 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-sm group-hover:scale-110 transition-transform">1</div>
                <h4 className="font-black text-gray-900 text-base uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Estructura Bio</h4>
                <p className="text-sm text-gray-500 font-medium">Aplica la fórmula y escríbelo en tu perfil hoy mismo.</p>
              </div>
              
              <div className="relative pl-12 group cursor-default">
                <div className="absolute -left-px -top-0.5 bg-white border-4 border-gray-200 text-gray-400 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all">2</div>
                <h4 className="font-black text-gray-900 text-base uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Limpieza Visual</h4>
                <p className="text-sm text-gray-500 font-medium">Sube una foto clara con un fondo de color sólido.</p>
              </div>

              <div className="relative pl-12 group cursor-default">
                <div className="absolute -left-px -top-0.5 bg-white border-4 border-gray-200 text-gray-400 w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-sm group-hover:border-orange-300 group-hover:text-orange-400 transition-all">3</div>
                <h4 className="font-black text-gray-900 text-base uppercase tracking-widest mb-1 group-hover:text-orange-500 transition-colors">Destacadas</h4>
                <p className="text-sm text-gray-500 font-medium">Diseña 4 portadas simples en Canva.</p>
              </div>

              <div className="relative pl-12 group cursor-default">
                <div className="absolute -left-px -top-0.5 bg-orange-500 border-4 border-orange-100 text-white w-9 h-9 rounded-full flex items-center justify-center font-black text-sm shadow-md ring-2 ring-transparent group-hover:ring-orange-200 transition-all">4</div>
                <h4 className="font-black text-orange-600 text-base uppercase tracking-widest mb-1">Modo Creador</h4>
                <p className="text-sm text-gray-600 font-medium">Activa el panel para profesionales en la app y listo.</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 2: TU ESTUDIO DE BOLSILLO           */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        
        {/* ENCABEZADO PREMIUM */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            {/* TEXTO AGRANDADO A text-xs sm:text-sm */}
            <span className="text-orange-500 font-black text-xs sm:text-sm uppercase tracking-[0.2em]">
              Módulo 2 // Tu Estudio de Bolsillo
            </span>
          </div>
          <div className="flex items-center gap-4 sm:gap-6">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white border border-gray-200 text-gray-900 rounded-2xl flex items-center justify-center shadow-sm shrink-0">
              <Smartphone className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-gray-900 uppercase tracking-tighter leading-tight sm:leading-none">
              Herramientas y Grabación
            </h2>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Tarjetas de Apps */}
          <div className="space-y-6">
            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-purple-100 text-purple-600 rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                <span className="font-black text-2xl sm:text-3xl">C</span>
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-1">Canva (Diseño)</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3 sm:mb-4">La mejor herramienta para diseñar portadas y carruseles.</p>
                <a href="https://www.canva.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-colors">
                  <ExternalLink size={14} /> Abrir Canva
                </a>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-8 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-row gap-4 sm:gap-6 items-start sm:items-center">
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-black text-white rounded-xl sm:rounded-2xl flex items-center justify-center shrink-0 mt-1 sm:mt-0">
                <Video className="w-5 h-5 sm:w-8 sm:h-8" />
              </div>
              <div className="flex-1">
                <h4 className="text-lg sm:text-xl font-black text-gray-900 mb-1">CapCut (Edición)</h4>
                <p className="text-xs sm:text-sm text-gray-500 font-medium mb-3 sm:mb-4">Usa su función de subtítulos automáticos para tus Reels.</p>
                <a href="https://www.capcut.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 bg-gray-900 hover:bg-gray-800 text-white rounded-xl font-black text-[10px] uppercase tracking-widest transition-colors">
                  <Download size={14} /> Descargar App
                </a>
              </div>
            </div>
          </div>

          {/* Tip de Iluminación - Icono en fila */}
          <div className="bg-orange-50 p-6 sm:p-10 rounded-[2.5rem] border border-orange-200 flex flex-col justify-center">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="bg-white w-fit p-3 rounded-xl shadow-sm border border-orange-100 shrink-0">
                <Lightbulb className="w-6 h-6 sm:w-8 sm:h-8 text-orange-500" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-black text-orange-900 tracking-tight leading-tight mb-0">El Secreto de la Luz</h3>
            </div>
            <p className="text-orange-800 font-medium text-sm sm:text-lg leading-relaxed mb-6">
              Tu cámara no es mala, tu iluminación sí. No necesitas comprar aros de luz ni equipos costosos.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-orange-900">
                <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                <span className="font-bold text-sm">Graba siempre de frente a una ventana (Luz natural).</span>
              </li>
              <li className="flex items-center gap-3 text-orange-900">
                <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                <span className="font-bold text-sm">Limpia el lente de tu cámara antes de empezar.</span>
              </li>
              <li className="flex items-center gap-3 text-orange-900">
                <CheckCircle2 className="text-orange-500 shrink-0" size={20} />
                <span className="font-bold text-sm">Apaga las luces amarillas de tu techo.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULO 3: ESTRATEGIA DE CONTENIDO          */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        
        {/* ENCABEZADO PREMIUM */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-orange-500 w-8 rounded-full"></div>
            {/* TEXTO AGRANDADO A text-xs sm:text-sm */}
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

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm p-6 sm:p-8 group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-orange-100 text-orange-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Video className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Pilar 1</p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mb-0">Reels (Alcance)</h3>
              </div>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              El motor para que gente nueva te descubra. Úsalos para dar consejos rápidos. Pon siempre un título llamativo en los primeros 3 segundos.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm p-6 sm:p-8 group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 text-blue-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <ImageIcon className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Pilar 2</p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mb-0">Carruseles</h3>
              </div>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Guías visuales de varias imágenes. La gente los guarda, y eso le dice a Instagram que tu contenido es valioso. Úsalos para tutoriales.
            </p>
          </div>

          <div className="bg-white rounded-[2.5rem] border border-gray-200 shadow-sm p-6 sm:p-8 group hover:-translate-y-1 transition-transform duration-300">
            <div className="flex items-center gap-4 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-100 text-pink-600 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                <Smartphone className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>
              <div>
                <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-0.5">Pilar 3</p>
                <h3 className="text-xl sm:text-2xl font-black text-gray-900 tracking-tight leading-none mb-0">Historias</h3>
              </div>
            </div>
            <p className="text-gray-600 font-medium text-sm leading-relaxed">
              Para los que ya te siguen. Muestra tu día a día, usa encuestas y cierra ventas charlando directamente por mensaje privado.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================== */}
      {/* MÓDULOS 4 & 5: CALENDARIO E INTERACCIÓN    */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 md:px-0 grid md:grid-cols-2 gap-8">
        
        {/* Calendario */}
        <div className="bg-gray-900 p-8 md:p-12 rounded-[2.5rem] border border-gray-800 flex flex-col h-full shadow-xl">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 bg-orange-500 w-6 rounded-full"></div>
              {/* TEXTO AGRANDADO A text-xs sm:text-sm */}
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
                <p className="text-gray-400 text-sm mt-1">Anota las 5 preguntas que más te hacen tus clientes. Esas son tus primeras publicaciones.</p>
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
                <p className="text-gray-400 text-sm mt-1">Cámbiate de camisa 3 veces en un día y graba 3 videos seguidos. Ahorrarás horas.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Interacción */}
        <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-gray-200 shadow-sm flex flex-col h-full">
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-0.5 bg-orange-500 w-6 rounded-full"></div>
              {/* TEXTO AGRANDADO A text-xs sm:text-sm */}
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
              <p className="text-sm font-medium text-red-900">Responder comentarios solo con emojis ("🔥🙌") o dar likes. Eso frena la interacción algorítmica.</p>
            </div>

            <div className="p-5 border border-green-200 bg-green-50 rounded-3xl">
              <p className="text-[10px] font-black text-green-600 uppercase tracking-widest mb-2 flex items-center gap-2">
                <CheckCircle2 size={14} /> Lo que SÍ debes hacer
              </p>
              <p className="text-sm font-medium text-green-900">Hacer preguntas de vuelta: <em>"¡Gracias María! ¿Tú ya lo probaste?"</em>. Usa encuestas en historias a diario.</p>
            </div>
          </div>
        </div>

      </section>

      {/* ========================================== */}
      {/* MÓDULO 6: EL EMBUDO DE CIERRE DIRECTO      */}
      {/* ========================================== */}
      <section className="max-w-6xl mx-auto px-4 md:px-0">
        
        {/* ENCABEZADO FINAL HOMOLOGADO */}
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 mb-4 sm:mb-5">
            <div className="h-0.5 bg-green-500 w-8 rounded-full"></div>
            {/* TEXTO AGRANDADO A text-xs sm:text-sm (VERDE) */}
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
            className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white px-8 md:px-12 py-4 md:py-5 rounded-2xl font-black text-xs sm:text-sm uppercase tracking-widest transition-colors shadow-sm w-full md:w-auto"
          >
            Crear Link de WhatsApp <ExternalLink size={16} />
          </a>

          <div className="mt-10 md:mt-12 p-5 sm:p-6 bg-red-50 border border-red-200 rounded-4xl  max-w-xl md:mx-auto text-left flex gap-4 sm:gap-5 items-start">
            <div className="bg-red-100 p-2 sm:p-3 rounded-xl text-red-500 shrink-0 mt-0.5">
              <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <h4 className="text-red-600 font-black uppercase tracking-widest text-[11px] sm:text-xs mb-1">Regla de Oro Inquebrantable</h4>
              <p className="text-red-900 font-medium text-xs sm:text-sm leading-relaxed">
                <strong>NUNCA des tus precios en comentarios públicos.</strong> Responde siempre: <em>"¡Hola! Te acabo de enviar toda la info detallada por mensaje privado 📩"</em>.
              </p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}