import React from 'react';

export default function Footer() {
  return (
    <footer className="relative z-20 bg-fondo/80  pt-24 pb-12 flex flex-col items-center justify-center border-t border-gray-200/60 mt-10 overflow-hidden">
      
      {/* Brillo decorativo sutil en el centro del footer para amarrar la paleta de colores */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-100 h-50 bg-orange-100/30 blur-[100px] rounded-full pointer-events-none"></div>
      
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
      
      {/* Barra de Créditos Inferior (Editorial Style) */}
      <div className="relative w-full max-w-5xl mx-auto border-t border-gray-200/60 pt-8 flex flex-col md:flex-row items-center justify-between px-6 gap-6">
        
        <p className="text-[10px] tracking-widest text-gray-400 font-bold uppercase">
          © {new Date().getFullYear()} Domenico D'Orazio
        </p>

        {/* Créditos de Desarrollo */}
        <div className="text-[10px] tracking-widest text-gray-500 font-semibold uppercase text-center flex flex-col md:flex-row items-center gap-2 md:gap-3">
          <span>Desarrollado por Juan Álvarez</span>
          <span className="hidden md:inline text-acento-naranja/40 font-light">|</span>
          <span>+58 412 9164371</span>
          <span className="hidden md:inline text-acento-naranja/40 font-light">|</span>
          <a 
            href="https://instagram.com/juanjalvarezz" 
            target="_blank" 
            rel="noreferrer" 
            className="hover:text-acento-naranja transition-colors"
          >
            IG: @JUANJALVAREZZ
          </a>
        </div>

      </div>
      
    </footer>
  );
}