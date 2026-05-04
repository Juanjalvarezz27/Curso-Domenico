"use client";

import { useState, useEffect } from "react";
import UserForm from "../components/admin/UserFormModal";
import UserCard from "../components/admin/UserCard";
import { Users, Loader2, UserPlus } from "lucide-react";

export default function AdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchUsers(); }, []);

  return (
    <main className="min-h-screen bg-gray-50/50 pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header ... (igual al anterior) */}
        <header className="mb-12 flex justify-between items-end">
           <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">
              Control de <span className="text-orange-500">Acceso</span>
            </h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <span className="text-xl font-black text-gray-900">{users.length}</span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Alumnos</span>
          </div>
        </header>

        {/* Grid de Cards (Ahora ocupa todo el ancho) */}
        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="animate-spin text-orange-500" size={40} /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {users.map((u: any) => <UserCard key={u.id} user={u} />)}
          </div>
        )}

        {/* Floating Action Button */}
        <button 
          onClick={() => setIsModalOpen(true)}
          className="fixed bottom-10 right-10 w-16 h-16 bg-gray-900 text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 hover:bg-orange-600 transition-all z-40 group"
        >
          <UserPlus size={28} className="group-hover:rotate-12 transition-transform" />
        </button>

        {/* Modal de Registro */}
        <UserForm 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          onUserCreated={fetchUsers} 
        />
      </div>
    </main>
  );
}