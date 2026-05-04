"use client";

import { Star, Phone, Calendar, CheckCircle2, XCircle, MoreVertical } from "lucide-react";

export default function UserCard({ user }: { user: any }) {
  return (
    <div className="bg-white rounded-[2.5rem] p-6 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group relative">
      {/* Badge de Plan */}
      <div className={`absolute top-6 right-6 px-3 py-1 rounded-full text-[9px] font-black uppercase tracking-widest ${
        user.plan === 'PREMIUM' ? 'bg-orange-500 text-white' : 'bg-gray-100 text-gray-400'
      }`}>
        {user.plan}
      </div>

      <div className="flex items-center gap-4 mb-6">
        <div className="w-14 h-14 bg-gray-50 rounded-2xl flex items-center justify-center font-black text-gray-300 text-xl border border-gray-100">
          {user.name.charAt(0)}
        </div>
        <div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight">{user.name}</h3>
          <p className="text-xs font-bold text-orange-500 uppercase tracking-widest">@{user.username}</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 mb-6">
        {user.phone && (
          <div className="flex items-center gap-3 text-xs font-bold text-gray-500 bg-gray-50 p-3 rounded-2xl border border-gray-100">
            <Phone size={14} className="text-green-500" />
            {user.phone}
          </div>
        )}
        <div className="flex items-center justify-between px-2 pt-2 border-t border-gray-50">
          <div className="flex items-center gap-2">
            {user.hasPaid ? (
              <CheckCircle2 size={16} className="text-blue-500" />
            ) : (
              <XCircle size={16} className="text-red-400" />
            )}
            <span className={`text-[10px] font-black uppercase tracking-widest ${user.hasPaid ? 'text-blue-600' : 'text-red-400'}`}>
              {user.hasPaid ? 'Pago Al Día' : 'Pago Pendiente'}
            </span>
          </div>
          <span className="text-[9px] font-bold text-gray-300 uppercase tracking-tighter">
            {new Date(user.createdAt).toLocaleDateString()}
          </span>
        </div>
      </div>

      <div className="flex gap-2 pt-2">
        <button className="flex-1 py-3 bg-gray-50 hover:bg-gray-100 text-gray-500 rounded-xl text-[10px] font-black uppercase tracking-widest transition-colors">
          Editar
        </button>
        <button className="flex-1 py-3 bg-red-50 hover:bg-red-500 hover:text-white text-red-400 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all">
          Suspender
        </button>
      </div>
    </div>
  );
}