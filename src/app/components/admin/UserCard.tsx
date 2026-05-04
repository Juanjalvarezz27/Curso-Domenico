"use client";

import { Phone, CheckCircle2, XCircle, CalendarDays, Edit2, Ban, MessageCircle } from "lucide-react";

interface User {
  id: string;
  name: string;
  username: string;
  password?: string; 
  phone?: string;
  plan: "BASICO" | "PREMIUM";
  hasPaid: boolean;
  createdAt: string | Date;
}

interface UserCardProps {
  user: User;
  onEdit: (user: User) => void;
  onDelete: (user: User) => void;
}

export default function UserCard({ user, onEdit, onDelete }: UserCardProps) {
  const initial = user.name ? user.name.charAt(0).toUpperCase() : "?";

  const handleWhatsApp = () => {
    if (!user.phone) return;
    let cleanNumber = user.phone.replace(/\s+/g, '').replace(/-/g, '');
    if (cleanNumber.startsWith('0')) {
      cleanNumber = '58' + cleanNumber.substring(1);
    } else if (!cleanNumber.startsWith('58')) {
      cleanNumber = '58' + cleanNumber;
    }
    const message = `Hola ${user.name}, aquí tienes tus credenciales de acceso:\n\n👤 *Usuario:* ${user.username}\n🔑 *Contraseña:* ${user.password || '********'}\n\n¡Gracias por ser parte de nuestro servicio!`;
    const whatsappUrl = `https://wa.me/${cleanNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white rounded-4xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 group relative flex flex-col h-full">

      <div className={`absolute top-5 right-5 px-3 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest flex items-center shadow-sm ${
        user.plan === 'PREMIUM'
          ? 'bg-linear-to-r from-orange-500 to-orange-400 text-white shadow-orange-200/50'
          : 'bg-gray-100 text-gray-500'
      }`}>
        {user.plan}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-14 h-14 shrink-0 rounded-2xl flex items-center justify-center font-black text-white text-xl bg-linear-to-br from-gray-800 to-gray-900 shadow-md">
            {initial}
          </div>
          <div className="flex flex-col pr-14">
            <h3 className="font-black text-gray-900 text-lg leading-tight line-clamp-1">{user.name}</h3>
            <p className="text-[11px] font-bold text-orange-500 lowercase tracking-wide mt-0.5">@{user.username}</p>
          </div>
        </div>

        <div className="space-y-2.5 mb-6">
          {user.phone && (
            <button onClick={handleWhatsApp} disabled={!user.hasPaid} className={`w-full flex items-center gap-3 text-[11px] font-bold p-3 rounded-2xl border transition-all duration-300 ${user.hasPaid ? 'bg-green-50 border-green-100 text-green-700 hover:bg-green-600 hover:text-white hover:border-green-600' : 'bg-gray-50 border-gray-100 text-gray-400 cursor-not-allowed'}`}>
              <div className={`p-1.5 rounded-lg ${user.hasPaid ? 'bg-white text-green-600' : 'bg-gray-200 text-gray-400'}`}>
                {user.hasPaid ? <MessageCircle size={14} /> : <Phone size={14} />}
              </div>
              <span className="flex-1 text-left">{user.phone}</span>
              {user.hasPaid && <span className="text-[8px] uppercase tracking-tighter opacity-70">Enviar Acceso</span>}
            </button>
          )}

          <div className="flex items-center justify-between bg-gray-50 p-3 rounded-2xl border border-gray-100 transition-colors group-hover:bg-white group-hover:border-gray-200">
            <div className="flex items-center gap-2">
              {user.hasPaid ? <CheckCircle2 size={16} className="text-blue-500" /> : <XCircle size={16} className="text-red-500" />}
              <span className={`text-[10px] font-black uppercase tracking-widest ${user.hasPaid ? 'text-blue-600' : 'text-red-500'}`}>
                {user.hasPaid ? 'PAGADO' : 'PENDIENTE'}
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <CalendarDays size={12} />
              <span>{new Date(user.createdAt).toLocaleDateString()}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-2.5 mt-auto pt-2">
        {/* Aquí conectamos los botones a los callbacks */}
        <button onClick={() => onEdit(user)} className="flex-1 py-3.5 bg-white border-2 border-gray-100 hover:border-gray-900 hover:bg-gray-900 hover:text-white text-gray-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
          <Edit2 size={14} /> Editar
        </button>
        <button onClick={() => onDelete(user)} className="flex-1 py-3.5 bg-red-50 hover:bg-red-500 hover:text-white text-red-500 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 flex items-center justify-center gap-2">
          <Ban size={14} /> Suspender
        </button>
      </div>
    </div>
  );
}