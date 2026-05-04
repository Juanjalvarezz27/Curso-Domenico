"use client";

import { LogOut, X } from "lucide-react";

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export default function LogoutModal({ isOpen, onClose, onConfirm }: LogoutModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/40  px-4">
      <div className="bg-white rounded-3xl p-6 md:p-8 w-full max-w-sm shadow-2xl relative animate-in fade-in zoom-in duration-200">
        
        {/* Botón de cerrar (X) */}
        <button 
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-gray-800 transition-colors"
        >
          <X size={20} />
        </button>
        
        <div className="flex flex-col items-center text-center gap-4 pt-2">
          {/* Icono Destacado */}
          <div className="w-16 h-16 bg-red-50 text-red-500 rounded-full flex items-center justify-center mb-2 border border-red-100">
            <LogOut size={28} strokeWidth={2} className="ml-1" />
          </div>
          
          <h3 className="font-outfit text-2xl font-bold text-texto-principal">¿Cerrar sesión?</h3>
          <p className="text-sm text-gray-500 font-medium mb-4 px-2 leading-relaxed">
            Tendrás que volver a ingresar tus credenciales para acceder a la plataforma.
          </p>

          {/* Botones de acción */}
          <div className="flex w-full gap-3">
            <button 
              onClick={onClose}
              className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors"
            >
              Cancelar
            </button>
            <button 
              onClick={onConfirm}
              className="flex-1 py-3.5 px-4 rounded-xl font-bold text-sm bg-red-500 text-white hover:bg-red-600 transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 active:scale-95"
            >
              Sí, salir
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}