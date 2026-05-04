import React from 'react';
import { 
  GraduationCap, 
  PlayCircle, 
  CheckCircle2, 
  ChevronRight, 
  ShieldCheck,
  Smartphone,
  Palette,
  Sparkles,
  Target,
  TrendingUp,
  Clock,
  MessageCircle,
  X
} from 'lucide-react';
import Footer from './components/ui/Footer'; 

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden">
      
      {/* HEADER / HERO SECTION */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 pt-24 md:pt-28 pb-8 text-center">
        
        <div className="inline-flex items-center gap-2 bg-orange-50 px-5 py-2.5 rounded-full border border-orange-200 shadow-sm text-xs md:text-sm font-bold tracking-widest text-acento-naranja mb-8 uppercase">
          <GraduationCap size={18} strokeWidth={2.5} />
          <span>Programa de Formación para Creadores</span>
        </div>
        
        <h1 className="font-outfit text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight mb-6 leading-[1.1] uppercase">
          <span className="text-texto-principal block mb-1 md:mb-2">
            DEJA DE TENER LA
          </span>
          <span className="text-acento-naranja drop-shadow-md block">
            CASA DESORDENADA.
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-800 max-w-2xl mx-auto mb-10 leading-relaxed font-medium px-2">
          Aprende a estructurar tu marca personal, profesionalizar tu contenido y convertir a tus seguidores en clientes.
        </p>
        
        <a href="#temario" className="group inline-flex bg-texto-principal text-superficie font-bold py-4 px-8 rounded-full hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1 items-center justify-center gap-2 mx-auto">
          Ver Temario del Curso
          <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
        </a>
      </section>

      {/* SECCIÓN VISUAL: QUÉ VAS A APRENDER */}
      <section id="temario" className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-12 scroll-mt-10">
        
        <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-superficie border border-gray-200 text-gray-500 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
             <Target size={14} className="text-acento-naranja" />
             Módulos del Programa
          </div>
          <h2 className="font-outfit text-3xl md:text-4xl font-black mb-4 text-texto-principal tracking-tight">
            ¿Qué vas a <span className="text-acento-naranja">dominar?</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          
          {/* Card 1 */}
          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1616469829581-73993eb86b02?q=80&w=800&auto=format&fit=crop" 
              alt="Setup de creación" 
              className="w-full h-40 object-cover grayscale-20"
            />
            <div className="p-6 grow">
              <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-acento-naranja mb-4">
                <Smartphone size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold mb-2">Tu Perfil Perfecto</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Biografías que venden, fotos estratégicas y portafolio en tus historias destacadas.
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop" 
              alt="Edición de Video" 
              className="w-full h-40 object-cover grayscale-20"
            />
            <div className="p-6 grow">
              <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-acento-naranja mb-4">
                <PlayCircle size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold mb-2">Retención y Edición</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Dominio rápido de Canva/CapCut y ganchos de 3 segundos para que no te ignoren.
              </p>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col hover:-translate-y-1 transition-transform">
            <img 
              src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=800&auto=format&fit=crop" 
              alt="Estrategia y Ventas" 
              className="w-full h-40 object-cover grayscale-20"
            />
            <div className="p-6 grow">
              <div className="bg-orange-50 w-10 h-10 rounded-xl flex items-center justify-center text-acento-naranja mb-4">
                <Palette size={20} />
              </div>
              <h3 className="font-outfit text-lg font-bold mb-2">Estrategia de Cierre</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Psicología visual y embudos directos a tu WhatsApp para cerrar ventas.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* NUEVA SECCIÓN DE VENTA: WIDGETS VISUALES */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-12">
        <div className="bg-superficie rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden">
          
          <div className="relative z-10 text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-acento-naranja text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
               <TrendingUp size={14} />
               Tu Transformación
            </div>
            <h2 className="font-outfit text-3xl md:text-5xl font-black text-texto-principal tracking-tight max-w-3xl mx-auto mb-4 leading-tight">
              El objetivo no es ser famoso, es <span className="text-acento-naranja">ser rentable.</span>
            </h2>
            <p className="text-gray-600 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
              Pasa de crear contenido por inercia a tener un ecosistema digital que trabaja para ti. Menos estrés, más autoridad y clientes listos para comprar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 relative z-10">
            
            {/* Widget 1 */}
            <div className="bg-fondo rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-acento-naranja mb-4">
                <TrendingUp size={24} />
              </div>
              <h4 className="font-outfit text-lg font-bold text-texto-principal mb-4">Referente del Sector</h4>
              
              <div className="w-full bg-white p-3 rounded-xl border border-gray-100 shadow-sm flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-acento-naranja text-xs">⭐</div>
                <div className="flex flex-col gap-1.5 w-full">
                  <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div className="w-4/5 h-full bg-texto-principal rounded-full"></div>
                  </div>
                  <div className="text-[10px] text-gray-400 text-left font-bold uppercase tracking-wider">Alto Valor Percibido</div>
                </div>
              </div>
            </div>
            
            {/* Widget 2 */}
            <div className="bg-fondo rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-acento-naranja mb-4">
                <Clock size={24} />
              </div>
              <h4 className="font-outfit text-lg font-bold text-texto-principal mb-4">Cero Horas Extra</h4>
              
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center justify-between bg-white px-3 py-2 rounded-lg border border-gray-100">
                  <span className="text-xs font-semibold text-gray-400 line-through">Editar todo el día</span>
                  <X size={14} className="text-red-400" />
                </div>
                <div className="flex items-center justify-between bg-orange-50 px-3 py-2 rounded-lg border border-orange-100">
                  <span className="text-xs font-bold text-acento-naranja">Sistemas Probados</span>
                  <CheckCircle2 size={14} className="text-acento-naranja" />
                </div>
              </div>
            </div>

            {/* Widget 3 */}
            <div className="bg-fondo rounded-2xl p-6 border border-gray-100 flex flex-col items-center justify-center text-center hover:bg-white transition-colors shadow-sm">
              <div className="w-12 h-12 bg-orange-50 rounded-full flex items-center justify-center text-acento-naranja mb-4">
                <MessageCircle size={24} />
              </div>
              <h4 className="font-outfit text-lg font-bold text-texto-principal mb-4">Tráfico a WhatsApp</h4>
              
              <div className="bg-green-50 w-full p-3 rounded-xl border border-green-100 flex items-center gap-3 relative">
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-ping"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-green-600 text-xs shadow-sm">💬</div>
                <span className="text-xs font-semibold text-green-700">"¡Hola! Quiero empezar."</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* PRICING / PLANES (Sin Botones) */}
      <section className="relative z-20 max-w-5xl mx-auto px-6 py-10 md:py-12">
        
        <div className="text-center mb-10 md:mb-12 flex flex-col items-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-acento-naranja text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
             <Sparkles size={14} />
             Inversión Única
          </div>
          <h2 className="font-outfit text-3xl md:text-4xl font-black mb-4 text-texto-principal tracking-tight">
            Elige tu <span className="text-acento-naranja">plan de acción</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          
          {/* PLAN BÁSICO */}
          <div className="bg-superficie p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="font-outfit text-3xl font-bold mb-2 text-texto-principal">Básico</h3>
              <p className="text-gray-500 text-sm">Los cimientos para ordenar la casa.</p>
            </div>
            <div className="text-5xl font-outfit font-bold mb-8 text-texto-principal">$X.XX</div>
            
            <ul className="space-y-4 mb-2 grow text-gray-600 font-medium text-sm">
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gray-400" />
                Configuración de Perfil
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gray-400" />
                Guías de Canva y CapCut
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gray-400" />
                Formatos y Calendario
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-gray-400" />
                Link a WhatsApp
              </li>
            </ul>
          </div>

          {/* PLAN PREMIUM */}
          <div className="bg-texto-principal p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col border-2 border-acento-naranja relative md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-acento-naranja text-white px-5 py-1.5 rounded-bl-2xl rounded-tr-2xl text-xs font-bold uppercase tracking-wider shadow-sm">
              Recomendado
            </div>
            
            <div className="mb-6">
              <h3 className="font-outfit text-3xl font-bold mb-2 text-superficie">Premium</h3>
              <p className="text-gray-400 text-sm">Monetiza y eleva tu autoridad.</p>
            </div>
            <div className="text-5xl font-outfit font-bold mb-8 text-superficie">$X.XX</div>
            
            <ul className="space-y-4 mb-2 grow text-gray-300 font-medium text-sm">
              <li className="flex items-center gap-3">
                <ShieldCheck size={20} className="text-acento-naranja" />
                Todo el contenido Básico
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-acento-naranja" />
                Psicología Visual Avanzada
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-acento-naranja" />
                Neuromarketing de Retención
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-acento-naranja" />
                Cierre de Ventas en WhatsApp
              </li>
              <li className="flex items-center gap-3">
                <CheckCircle2 size={20} className="text-acento-naranja" />
                Tu Imagen como Experto
              </li>
            </ul>
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <Footer />

    </main>
  );
}