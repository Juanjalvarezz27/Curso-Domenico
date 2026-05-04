"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut } from 'next-auth/react';
import { User, LogOut, Users, BookOpen, Menu, X as CloseIcon, ChevronRight } from 'lucide-react';
import LogoutModal from './LogoutModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  // Bloquear el scroll de la página de fondo cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  // Lógica inteligente para saber dónde estamos
  const isLanding = pathname === '/';
  const isLogin = pathname === '/login';
  const isSystem = pathname.startsWith('/home');

  // Si estamos en el Login, ocultamos el Navbar por completo
  if (isLogin) return null;

  // Ejecuta el logout de NextAuth y manda a /home (que luego el middleware mandará a /login)
  const handleLogout = () => {
    signOut({ callbackUrl: '/home' });
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-fondo/80 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* LOGO */}
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className="text-2xl lg:text-3xl font-bold tracking-tighter text-texto-principal relative z-50"
            style={{ fontFamily: 'var(--font-syncopate), sans-serif' }}
          >
            D'ORAZIO
          </Link>

          {/* BOTÓN HAMBURGUESA (MÓVIL) */}
          <button 
            className="md:hidden relative z-50 text-texto-principal p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>

          {/* MENÚ DESKTOP */}
          <div className="hidden md:flex items-center gap-8">
            {isLanding && (
              <>
                <div className="flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
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
                <div className="flex items-center gap-8 text-xs font-bold text-gray-500 uppercase tracking-widest">
                  <Link href="/home" className="flex items-center gap-2 hover:text-acento-naranja transition-colors">
                    <BookOpen size={14} /> Cursos
                  </Link>
                  <Link href="/home/admin/usuarios" className="flex items-center gap-2 hover:text-acento-naranja transition-colors">
                    <Users size={14} /> Gestión de Usuarios
                  </Link>
                </div>
                
                <button 
                  onClick={() => setIsLogoutModalOpen(true)}
                  className="flex items-center gap-2 bg-red-50 text-red-600 border border-red-200 px-5 py-2.5 rounded-full font-bold text-sm hover:bg-red-600 hover:text-white transition-all shadow-sm transform hover:-translate-y-0.5 active:scale-95 group"
                >
                  <LogOut size={16} className="fill-current opacity-80 group-hover:scale-110 transition-transform" />
                  <span>Salir</span>
                </button>
              </>
            )}
          </div>
        </div>

        {/* MENÚ DESPLEGABLE FULLSCREEN (MÓVIL) */}
        <div className={`md:hidden fixed top-20 left-0 w-full h-[calc(100vh-5rem)] bg-fondo flex flex-col transition-all duration-300 ease-in-out overflow-y-auto ${isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
          <div className="px-6 py-8 flex flex-col grow">
            
            {isLanding && (
              <>
                <div className="flex flex-col gap-4 mt-2">
                  <a 
                    href="#temario" 
                    onClick={closeMobileMenu} 
                    className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-50 p-2.5 rounded-xl text-acento-naranja group-hover:scale-110 transition-transform">
                        <BookOpen size={20} />
                      </div>
                      <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">El Programa</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-acento-naranja group-hover:translate-x-1 transition-all" />
                  </a>

                  <a 
                    href="#planes" 
                    onClick={closeMobileMenu} 
                    className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-50 p-2.5 rounded-xl text-acento-naranja group-hover:scale-110 transition-transform">
                        <User size={20} />
                      </div>
                      <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">Planes</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-acento-naranja group-hover:translate-x-1 transition-all" />
                  </a>
                </div>

                <div className="mt-auto pb-8">
                  <Link 
                    href="/login" 
                    onClick={closeMobileMenu}
                    className="flex items-center justify-center gap-3 w-full bg-texto-principal text-superficie px-5 py-4 rounded-xl font-bold text-base hover:bg-gray-800 transition-all shadow-md active:scale-95"
                  >
                    <User size={20} className="text-acento-naranja" />
                    <span>Ingresar al Sistema</span>
                  </Link>
                </div>
              </>
            )}

            {isSystem && (
              <>
                <div className="flex flex-col gap-4 mt-2">
                  <Link 
                    href="/home" 
                    onClick={closeMobileMenu} 
                    className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-50 p-2.5 rounded-xl text-acento-naranja group-hover:scale-110 transition-transform">
                        <BookOpen size={20} />
                      </div>
                      <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">Cursos</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-acento-naranja group-hover:translate-x-1 transition-all" />
                  </Link>

                  <Link 
                    href="/home/admin/usuarios" 
                    onClick={closeMobileMenu} 
                    className="flex items-center justify-between bg-white border border-gray-100 p-4 rounded-2xl shadow-sm hover:shadow-md hover:border-orange-200 transition-all active:scale-95 group"
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-orange-50 p-2.5 rounded-xl text-acento-naranja group-hover:scale-110 transition-transform">
                        <Users size={20} />
                      </div>
                      <span className="font-bold text-gray-700 uppercase tracking-widest text-sm">Gestión de Usuarios</span>
                    </div>
                    <ChevronRight size={18} className="text-gray-300 group-hover:text-acento-naranja group-hover:translate-x-1 transition-all" />
                  </Link>
                </div>

                <div className="mt-auto pb-8">
                  <button 
                    onClick={() => {
                      closeMobileMenu();
                      setIsLogoutModalOpen(true);
                    }}
                    className="flex items-center justify-center gap-3 w-full bg-red-50 text-red-600 border border-red-200 px-5 py-4 rounded-xl font-bold text-base hover:bg-red-500 hover:text-white transition-all shadow-sm active:scale-95"
                  >
                    <LogOut size={20} className="opacity-80" />
                    <span>Cerrar Sesión</span>
                  </button>
                </div>
              </>
            )}

          </div>
        </div>
      </nav>

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout} 
      />
    </>
  );
}