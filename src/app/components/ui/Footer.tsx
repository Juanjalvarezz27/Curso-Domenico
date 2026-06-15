import { MessageCircle } from 'lucide-react';

export default function Footer() {
 return (
 <footer className="relative z-20 bg-fondo/80 pt-24 pb-12 flex flex-col items-center justify-center border-t border-gray-200/60 mt-10 overflow-hidden">
 
 {/* Brillo decorativo sutil en el centro del footer */}
 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-50 bg-orange-100/30 rounded-full pointer-events-none"></div>
 
 {/* Título Principal Syncopate */}
 <h2 
 className="relative text-6xl sm:text-7xl md:text-8xl lg:text-[10rem] font-bold tracking-tighter text-texto-principal mb-6 text-center leading-none drop-shadow-sm"
 style={{ fontFamily: 'var(--font-syncopate), sans-serif' }}
 >
 D'ORAZIO
 </h2>
 
 {/* Subtítulo espaciado con acento */}
 <p className="relative text-[10px] md:text-xs tracking-[0.35em] text-gray-500 font-semibold mb-20 uppercase text-center flex flex-wrap items-center justify-center gap-3 px-4">
 <span>Estrategia</span>
 <span className="text-acento-naranja/80">&</span>
 <span>Marca Personal</span>
 </p>
 
 {/* Barra de Créditos Inferior */}
 <div className="relative w-full max-w-5xl mx-auto border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between px-6 gap-6">
 
 <p className="text-[10px] tracking-widest text-gray-400 font-bold uppercase">
 © {new Date().getFullYear()} Domenico D'Orazio
 </p>

 {/* Créditos de Desarrollo con el mensaje de WhatsApp simplificado */}
 <div className="text-[10px] tracking-widest text-gray-500 font-semibold uppercase text-center flex flex-col md:flex-row items-center gap-4">
 <span className="opacity-70">Diseñado por Juan Álvarez</span>
 
 <div className="flex items-center gap-3">
 {/* BOTÓN WHATSAPP VERDE CON MENSAJE DIRECTO */}
 <a 
 href="https://wa.me/584129164371?text=Hola%20Juan,%20estoy%20interesado%20en%20un%20sistema%20o%20pagina%20web" 
 target="_blank" 
 rel="noreferrer" 
 className="flex items-center gap-2 bg-green-50 text-green-600 border border-green-200 px-4 py-2 rounded-full hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm active:scale-95 group"
 >
 <MessageCircle size={14} className="fill-current opacity-80 group-hover:scale-110 transition-transform" />
 <span className="font-bold">¿BUSCAS UN SITIO ASÍ?</span>
 </a>

 <span className="hidden md:inline text-gray-300 font-light">|</span>
 
 <a 
 href="https://instagram.com/juanjalvarezz" 
 target="_blank" 
 rel="noreferrer" 
 className="hover:text-acento-naranja transition-colors py-1"
 >
 @JUANJALVAREZZ
 </a>
 </div>
 </div>

 </div>
 
 </footer>
 );
}