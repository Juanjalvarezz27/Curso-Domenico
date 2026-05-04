import Image from 'next/image';
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
  MessageCircle
} from 'lucide-react';
import Footer from './components/ui/Footer'; 

export default function LandingPage() {
  return (
    <main className="relative overflow-hidden pt-20">
      
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
      <section id="temario" className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-12 scroll-mt-24">
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
          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative w-full h-40">
              <Image 
                src="/Profile1.png" 
                alt="Tu Perfil Perfecto" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-20" 
              />
            </div>
            <div className="p-6 grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-acento-naranja shrink-0 shadow-sm border border-orange-100">
                  <Smartphone size={24} />
                </div>
                <h3 className="font-outfit text-xl md:text-2xl font-black text-texto-principal leading-tight">Tu Perfil Perfecto</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">Biografías que venden, fotos estratégicas y portafolio en tus historias destacadas.</p>
            </div>
          </div>

          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative w-full h-40">
              <Image 
                src="/Meeting1.png" 
                alt="Retención y Edición" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-20" 
              />
            </div>
            <div className="p-6 grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-acento-naranja shrink-0 shadow-sm border border-orange-100">
                  <PlayCircle size={24} />
                </div>
                <h3 className="font-outfit text-xl md:text-2xl font-black text-texto-principal leading-tight">Retención y Edición</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">Dominio rápido de Canva/CapCut y ganchos de 3 segundos para que no te ignoren.</p>
            </div>
          </div>

          <div className="bg-superficie rounded-3xl overflow-hidden shadow-lg border border-gray-100 flex flex-col">
            <div className="relative w-full h-40">
              <Image 
                src="/Stats1.png" 
                alt="Estrategia y Ventas" 
                fill 
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover grayscale-20" 
              />
            </div>
            <div className="p-6 grow flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-orange-50 w-12 h-12 rounded-xl flex items-center justify-center text-acento-naranja shrink-0 shadow-sm border border-orange-100">
                  <Palette size={24} />
                </div>
                <h3 className="font-outfit text-xl md:text-2xl font-black text-texto-principal leading-tight">Estrategia de Cierre</h3>
              </div>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed font-medium">Psicología visual y embudos directos a tu WhatsApp para cerrar ventas.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECCIÓN DE VENTA: WIDGETS VISUALES FIJOS */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 py-10 md:py-16">
        <div className="bg-superficie rounded-[3rem] p-8 md:p-14 shadow-[0_8px_40px_rgba(0,0,0,0.06)] border border-gray-100 relative overflow-hidden">
          <div className="relative z-10 text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-acento-naranja text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
               <TrendingUp size={14} />
               Tu Transformación
            </div>
            <h2 className="font-outfit text-3xl md:text-5xl font-black text-texto-principal tracking-tight max-w-3xl mx-auto mb-5 leading-tight">
              El objetivo no es ser famoso, es <span className="text-acento-naranja">ser rentable.</span>
            </h2>
            <p className="text-gray-600 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
              Pasa de crear contenido por inercia a tener un ecosistema digital que trabaja para ti. Menos estrés, más autoridad y clientes listos para comprar.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative z-10">
            {/* 1. WIDGET AUTORIDAD */}
            <div className="relative bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 flex flex-col items-center text-center shadow-sm overflow-hidden">
              <div className="relative z-10 w-16 h-16 bg-linear-to-br from-orange-50 text-acento-naranja to-orange-100/50 rounded-2xl flex items-center justify-center mb-6 border border-orange-200/50 shadow-inner">
                <TrendingUp size={30} strokeWidth={1.5} />
              </div>
              <h4 className="relative z-10 font-outfit text-xl font-bold text-texto-principal mb-6">Referente del Sector</h4>
              <div className="relative z-10 w-full bg-fondo/80 p-5 rounded-2xl border border-gray-100 shadow-inner flex items-end justify-between h-28 gap-2.5">
                {[40, 30, 50, 40, 60, 50, 95].map((h, i) => (
                  <div key={i} className="relative w-full rounded-t-md bg-gray-200" style={{ height: `${h}%` }}>
                    {i === 6 && <div className="absolute bottom-0 left-0 w-full bg-linear-to-t from-acento-naranja to-orange-400 rounded-t-md h-full"></div>}
                  </div>
                ))}
                <div className="absolute -top-4 -right-2 bg-texto-principal text-superficie text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 opacity-100">
                  <TrendingUp size={12} className="text-acento-naranja" /> +150%
                </div>
              </div>
            </div>
            
            {/* 2. WIDGET TIEMPO */}
            <div className="relative bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 flex flex-col items-center text-center shadow-sm overflow-hidden">
              <div className="relative z-10 w-16 h-16 bg-linear-to-br from-blue-50 text-blue-500 to-blue-100/50 rounded-2xl flex items-center justify-center mb-6 border border-blue-200/50 shadow-inner">
                <Clock size={30} strokeWidth={1.5} />
              </div>
              <h4 className="relative z-10 font-outfit text-xl font-bold text-texto-principal mb-6">Cero Horas Extra</h4>
              <div className="relative z-10 w-full bg-fondo/80 p-5 rounded-2xl border border-gray-100 shadow-inner flex flex-col justify-center h-28 gap-3">
                <div className="flex items-center justify-between px-1"><span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Flujo de Trabajo</span></div>
                <div className="bg-white p-3.5 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between">
                  <div className="flex items-center gap-2.5"><Sparkles size={18} className="text-acento-naranja" /><span className="text-sm font-bold text-gray-800">Piloto Automático</span></div>
                  <div className="w-12 h-6 bg-acento-naranja rounded-full relative">
                    <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-md"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* 3. WIDGET VENTAS */}
            <div className="relative bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 flex flex-col items-center text-center shadow-sm overflow-hidden">
              <div className="relative z-10 w-16 h-16 bg-linear-to-br from-green-50 text-green-500 to-green-100/50 rounded-2xl flex items-center justify-center mb-6 border border-green-200/50 shadow-inner">
                <MessageCircle size={30} strokeWidth={1.5} />
              </div>
              <h4 className="relative z-10 font-outfit text-xl font-bold text-texto-principal mb-6">Tráfico a WhatsApp</h4>
              <div className="relative z-10 w-full bg-fondo/80 p-4 rounded-2xl border border-gray-100 shadow-inner flex flex-col gap-3 h-28 justify-end">
                <div className="bg-green-50 px-4 py-3 rounded-2xl rounded-bl-sm border border-green-200 shadow-md self-start flex items-center gap-3">
                  <div className="relative flex shrink-0">
                     <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                     <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-lg shadow-sm">🤝</div>
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="text-[10px] text-green-600 font-bold uppercase tracking-wider mb-0.5">Venta Cerrada</span>
                    <span className="text-xs font-bold text-green-900">"Quiero reservar el plan"</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING / PLANES (Ahora con id="planes" y scroll margin) */}
      <section id="planes" className="relative z-20 max-w-5xl mx-auto px-6 py-10 md:py-12 scroll-mt-24">
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
          <div className="bg-superficie p-8 md:p-10 rounded-3xl border border-gray-200 shadow-xl flex flex-col">
            <div className="mb-6">
              <h3 className="font-outfit text-3xl font-bold mb-2 text-texto-principal">Básico</h3>
              <p className="text-gray-500 text-sm">Los cimientos para ordenar la casa.</p>
            </div>
            <div className="text-5xl font-outfit font-bold mb-8 text-texto-principal">$X.XX</div>
            <ul className="space-y-4 mb-2 grow text-gray-600 font-medium text-sm">
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-gray-400" />Configuración de Perfil</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-gray-400" />Guías de Canva y CapCut</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-gray-400" />Formatos y Calendario</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-gray-400" />Link a WhatsApp</li>
            </ul>
          </div>

          <div className="bg-texto-principal p-8 md:p-10 rounded-3xl shadow-2xl flex flex-col border-2 border-acento-naranja relative md:-translate-y-4">
            <div className="absolute top-0 right-0 bg-acento-naranja text-white px-5 py-1.5 rounded-bl-2xl rounded-tr-2xl text-xs font-bold uppercase tracking-wider shadow-sm">Recomendado</div>
            <div className="mb-6">
              <h3 className="font-outfit text-3xl font-bold mb-2 text-superficie">Premium</h3>
              <p className="text-gray-400 text-sm">Monetiza y eleva tu autoridad.</p>
            </div>
            <div className="text-5xl font-outfit font-bold mb-8 text-superficie">$X.XX</div>
            <ul className="space-y-4 mb-2 grow text-gray-300 font-medium text-sm">
              <li className="flex items-center gap-3"><ShieldCheck size={20} className="text-acento-naranja" />Todo el contenido Básico</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-acento-naranja" />Psicología Visual Avanzada</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-acento-naranja" />Neuromarketing de Retención</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-acento-naranja" />Cierre de Ventas en WhatsApp</li>
              <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-acento-naranja" />Tu Imagen como Experto</li>
            </ul>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}