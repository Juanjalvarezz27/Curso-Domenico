"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { User, LogOut, Users, BookOpen } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();

  // Lógica inteligente para saber dónde estamos
  const isLanding = pathname === '/';
  const isLogin = pathname === '/login';
  const isSystem = pathname.startsWith('/home');

  // Si estamos en el Login, ocultamos el Navbar por completo
  if (isLogin) return null;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-fondo/80 backdrop-blur-xl border-b border-gray-200/60">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* LOGO */}
        <Link 
          href="/" 
          className="text-2xl lg:text-3xl font-bold tracking-tighter text-texto-principal"
          style={{ fontFamily: 'var(--font-syncopate), sans-serif' }}
        >
          D'ORAZIO
        </Link>

        {isLanding && (
          <>
            <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <a href="#temario" className="hover:text-acento-naranja transition-colors">El Programa</a>
              <a href="#planes" className="hover:text-acento-naranja transition-colors">Planes</a>
            </div>
            
            <Link 
              href="/login" 
              className="flex items-center gap-2 bg-texto-principal text-superficie px-5 py-2.5 rounded-full font-bold text-sm hover:bg-gray-800 transition-all shadow-sm transform hover:-translate-y-0.5 active:scale-95 group"
            >
              <User size={16} className="text-acento-naranja group-hover:scale-110 transition-transform" />
              <span>Ingresar</span>
            </Link>
          </>
        )}

        {isSystem && (
          <>
            <div className="hidden md:flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
              <Link href="/plataforma" className="flex items-center gap-2 hover:text-acento-naranja transition-colors">
                <BookOpen size={14} /> Cursos
              </Link>
              
              <Link href="/admin/usuarios" className="flex items-center gap-2 hover:text-acento-naranja transition-colors">
                <Users size={14} /> Gestión de Usuarios
              </Link>
            </div>
            
            <button 
              onClick={() => console.log('Lógica de cerrar sesión')}
              className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition-all shadow-sm transform hover:-translate-y-0.5 active:scale-95 group"
            >
              <LogOut size={16} className="fill-current opacity-80 group-hover:scale-110 transition-transform" />
              <span>Salir</span>
            </button>
          </>
        )}

      </div>
    </nav>
  );
}