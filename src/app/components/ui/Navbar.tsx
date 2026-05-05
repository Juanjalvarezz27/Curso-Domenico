"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { signOut, getSession } from 'next-auth/react';
import { User, LogOut, Users, Menu, X as CloseIcon, ChevronRight, BookOpen } from 'lucide-react';
import LogoutModal from './LogoutModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);
  
  const [userRole, setUserRole] = useState<string | null>(null);

  useEffect(() => {
    getSession().then((session) => {
      if (session?.user?.role) {
        setUserRole(session.user.role);
      }
    });
  }, [pathname]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isMobileMenuOpen]);

  const isLanding = pathname === '/';
  const isLogin = pathname === '/login';
  const isSystem = pathname.startsWith('/home') || pathname.startsWith('/admin');

  if (isLogin) return null;

  const handleLogout = () => {
    signOut({ callbackUrl: '/' }); 
  };

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-fondo/80 backdrop-blur-xl border-b border-gray-200/60">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          <Link 
            href="/" 
            onClick={closeMobileMenu}
            className="text-2xl lg:text-3xl font-bold tracking-tighter text-texto-principal relative z-50"
            style={{ fontFamily: 'var(--font-syncopate), sans-serif' }}
          >
            D'ORAZIO
          </Link>

          <button 
            className="md:hidden relative z-50 text-texto-principal p-2 -mr-2 hover:bg-gray-100 rounded-full transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <CloseIcon size={24} /> : <Menu size={24} />}
          </button>

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
                  {userRole === 'ADMIN' && (
                    <Link href="/admin" className="flex items-center gap-2 hover:text-acento-naranja transition-colors">
                      <Users size={14} /> Gestión de Usuarios
                    </Link>
                  )}
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
      </nav>

      {/* MENÚ MÓVIL: Estructura mejorada para empujar el botón al fondo */}
      <div className={`md:hidden fixed inset-0 z-40 bg-fondo transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
        
        {/* Contenedor interno que maneja el flex y el scroll de forma segura */}
        <div className={`flex flex-col h-full pt-28 pb-12 px-6 overflow-y-auto transition-transform duration-300 ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-4'}`}>
          
          {isLanding && (
            <>
              {/* Opciones Superiores */}
              <div className="flex flex-col gap-4">
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

              {/* Botón Inferior: mt-auto lo empuja al fondo. pt-8 le da aire si la pantalla es muy pequeña */}
              <div className="mt-auto pt-8">
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
              <div className="flex flex-col gap-4">
                {userRole === 'ADMIN' && (
                  <Link 
                    href="/admin" 
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
                )}
              </div>

              {/* Botón Inferior de Salir */}
              <div className="mt-auto pt-8">
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

      <LogoutModal 
        isOpen={isLogoutModalOpen} 
        onClose={() => setIsLogoutModalOpen(false)} 
        onConfirm={handleLogout} 
      />
    </>
  );
}