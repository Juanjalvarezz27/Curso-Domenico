"use client";

import { useState } from "react";
import { AlertTriangle, Loader2, X } from "lucide-react";
import { toast } from "react-toastify";

interface DeleteUserModalProps {
  isOpen: boolean;
  onClose: () => void;
  onUserDeleted: () => void;
  user: any | null;
}

export default function DeleteUserModal({ isOpen, onClose, onUserDeleted, user }: DeleteUserModalProps) {
  const [loading, setLoading] = useState(false);
  const [confirmText, setConfirmText] = useState("");

  if (!isOpen || !user) return null;

  const handleClose = () => {
    setConfirmText(""); // Limpiamos el texto si cancelan
    onClose();
  };

  const handleDelete = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/users/${user.id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        toast.success(`El acceso de @${user.username} ha sido revocado.`);
        onUserDeleted();
        handleClose();
      } else {
        const errorData = await res.json();
        toast.error(errorData.error || "Ocurrió un error al eliminar.");
      }
    } catch (error) {
      toast.error("Error de conexión con el servidor.");
    } finally {
      setLoading(false);
    }
  };

  // Validación: Solo se habilita si escriben "eliminar" (sin importar mayúsculas)
  const isConfirmed = confirmText.trim().toLowerCase() === "eliminar";

  return (
    <div className="fixed inset-0 z-100 flex items-end md:items-center justify-center bg-black/70 animate-in fade-in duration-300">
      <div className="fixed inset-0" onClick={handleClose} />

      <div className="bg-white w-full max-w-sm rounded-t-[2.5rem] md:rounded-[3rem] shadow-2xl overflow-hidden relative z-10 animate-in slide-in-from-bottom md:zoom-in-95 duration-300 p-8 text-center pb-12 md:pb-8">
        
        <button onClick={handleClose} className="absolute top-6 right-6 text-gray-400 hover:text-gray-800 transition-colors p-2 bg-gray-50 rounded-full">
          <X size={20} />
        </button>

        <div className="w-20 h-20 bg-red-50 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 border-4 border-white shadow-lg shadow-red-500/20 mt-4">
          <AlertTriangle size={32} />
        </div>

        <h3 className="text-xl md:text-2xl font-black text-gray-900 tracking-tight uppercase mb-2">¿Revocar Acceso?</h3>
        <p className="text-xs font-bold text-gray-500 leading-relaxed mb-6">
          Estás a punto de suspender y borrar a <br />
          <span className="text-red-500 font-black text-sm">@{user.username}</span>
        </p>

        {/* Input de confirmación estricto */}
        <div className="mb-8 text-left bg-gray-50 p-5 rounded-3xl border border-gray-100">
          <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3 text-center">
            Escribe <span className="text-red-500 bg-red-50 px-2 py-0.5 rounded-md">ELIMINAR</span> para confirmar
          </label>
          <input
            type="text"
            value={confirmText}
            onChange={(e) => setConfirmText(e.target.value)}
            placeholder="ELIMINAR"
            className="w-full bg-white border-2 border-gray-200 rounded-2xl px-4 py-4 text-center text-sm font-black tracking-widest uppercase focus:border-red-500 focus:ring-4 focus:ring-red-500/10 outline-none transition-all placeholder:text-gray-300 text-gray-900"
          />
        </div>

        <div className="flex flex-col gap-3">
          <button 
            disabled={loading || !isConfirmed} 
            onClick={handleDelete} 
            className="w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest bg-red-500 text-white hover:bg-red-600 transition-all shadow-xl shadow-red-500/30 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none active:scale-[0.98]"
          >
            {loading ? <Loader2 className="animate-spin" size={18} /> : "Sí, Eliminar Alumno"}
          </button>
          
          <button onClick={handleClose} className="w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-widest bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors">
            Cancelar
          </button>
        </div>

      </div>
    </div>
  );
}