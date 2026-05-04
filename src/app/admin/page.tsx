"use client";

import { useState, useEffect } from "react";
import UserForm from "../components/admin/UserFormModal";
import EditUserModal from "../components/admin/EditUserModal";
import DeleteUserModal from "../components/admin/DeleteUserModal";
import UserCard from "../components/admin/UserCard";
import { Users, Loader2, UserPlus, Search, FilterX, ChevronLeft, ChevronRight } from "lucide-react";

const ITEMS_PER_PAGE = 40; // Cantidad máxima de tarjetas por página

export default function AdminPage() {
  const [users, setUsers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Estados para los modales
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState<any>(null);
  const [deletingUser, setDeletingUser] = useState<any>(null);

  // Estados para los filtros y paginación
  const [searchTerm, setSearchTerm] = useState("");
  const [filterPlan, setFilterPlan] = useState("ALL"); 
  const [filterStatus, setFilterStatus] = useState("ALL"); 
  const [currentPage, setCurrentPage] = useState(1);

  const fetchUsers = async () => {
    try {
      const res = await fetch("/api/users");
      const data = await res.json();
      setUsers(data);
    } catch (error) {
      console.error("Error cargando usuarios");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  // Resetear a la página 1 cada vez que el usuario usa un filtro
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterPlan, filterStatus]);

  // 1. Aplicamos los filtros
  const filteredUsers = users.filter((user) => {
    const matchesSearch = 
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
      user.username.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesPlan = filterPlan === "ALL" || user.plan === filterPlan;
    const matchesStatus = filterStatus === "ALL" || (filterStatus === "PAID" ? user.hasPaid : !user.hasPaid);

    return matchesSearch && matchesPlan && matchesStatus;
  });

  // 2. Calculamos la paginación sobre los resultados filtrados
  const totalPages = Math.ceil(filteredUsers.length / ITEMS_PER_PAGE);
  const paginatedUsers = filteredUsers.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <main className="min-h-screen bg-gray-50/50 pt-32 pb-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER */}
        <header className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="text-4xl font-black text-gray-900 tracking-tight uppercase">
              Control de <span className="text-orange-500">Acceso</span>
            </h1>
          </div>
          <div className="bg-white px-6 py-3 rounded-2xl border border-gray-100 shadow-sm flex items-center gap-4">
            <span className="text-xl font-black text-gray-900">{filteredUsers.length}</span>
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">
              {filteredUsers.length === 1 ? 'Alumno Visible' : 'Alumnos Visibles'}
            </span>
          </div>
        </header>

        {/* BARRA DE FILTROS */}
        {!loading && users.length > 0 && (
          <div className="mb-10 flex flex-col md:flex-row gap-4 items-center justify-between bg-white p-3 rounded-3xl border border-gray-100 shadow-sm">
            <div className="relative w-full md:flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Buscar por nombre o @username..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-gray-50 pl-11 pr-4 py-3.5 rounded-2xl text-sm font-bold border-2 border-transparent focus:border-orange-500/30 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900"
              />
            </div>
            <div className="flex w-full md:w-auto gap-3">
              <select
                value={filterPlan}
                onChange={(e) => setFilterPlan(e.target.value)}
                className="flex-1 md:flex-none bg-gray-50 px-4 py-3.5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest border-2 border-transparent focus:border-orange-500/30 focus:bg-white outline-none transition-all text-gray-600 cursor-pointer appearance-none"
              >
                <option value="ALL">Todos los Planes</option>
                <option value="BASICO">Solo Básico</option>
                <option value="PREMIUM">Solo Premium</option>
              </select>
              <select
                value={filterStatus}
                onChange={(e) => setFilterStatus(e.target.value)}
                className="flex-1 md:flex-none bg-gray-50 px-4 py-3.5 rounded-2xl text-[10px] md:text-xs font-black uppercase tracking-widest border-2 border-transparent focus:border-orange-500/30 focus:bg-white outline-none transition-all text-gray-600 cursor-pointer appearance-none"
              >
                <option value="ALL">Cualquier Pago</option>
                <option value="PAID">Pagados</option>
                <option value="UNPAID">Pendientes</option>
              </select>
            </div>
          </div>
        )}

        {/* LISTADO DE USUARIOS (PAGINADOS) */}
        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-orange-500" size={40} />
          </div>
        ) : filteredUsers.length > 0 ? (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {/* Cambiamos el .map para que use paginatedUsers en vez de filteredUsers */}
              {paginatedUsers.map((u: any) => (
                <UserCard
                  key={u.id}
                  user={u}
                  onEdit={(user: any) => setEditingUser(user)}
                  onDelete={(user: any) => setDeletingUser(user)}
                />
              ))}
            </div>

            {/* CONTROLES DE PAGINACIÓN */}
            {totalPages > 1 && (
              <div className="mt-12 flex items-center justify-center gap-6">
                <button
                  onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                  disabled={currentPage === 1}
                  className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-all disabled:opacity-40 disabled:hover:text-gray-500 disabled:hover:border-gray-100 disabled:cursor-not-allowed"
                >
                  <ChevronLeft size={20} />
                </button>
                <span className="text-[11px] font-black text-gray-400 uppercase tracking-widest">
                  Página <span className="text-gray-900 mx-1">{currentPage}</span> de <span className="text-gray-900 mx-1">{totalPages}</span>
                </span>
                <button
                  onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                  disabled={currentPage === totalPages}
                  className="p-3 bg-white rounded-2xl border border-gray-100 shadow-sm text-gray-500 hover:text-orange-500 hover:border-orange-200 transition-all disabled:opacity-40 disabled:hover:text-gray-500 disabled:hover:border-gray-100 disabled:cursor-not-allowed"
                >
                  <ChevronRight size={20} />
                </button>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center justify-center py-20 bg-white rounded-[3rem] border border-dashed border-gray-200">
            <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-gray-400 mb-4">
              <FilterX size={24} />
            </div>
            <h3 className="text-lg font-black text-gray-900 tracking-tight uppercase mb-1">Sin Resultados</h3>
            <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">
              No hay alumnos que coincidan con estos filtros.
            </p>
            {(searchTerm || filterPlan !== "ALL" || filterStatus !== "ALL") && (
              <button 
                onClick={() => {
                  setSearchTerm("");
                  setFilterPlan("ALL");
                  setFilterStatus("ALL");
                }}
                className="mt-6 px-6 py-2.5 bg-gray-900 text-white rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-orange-500 transition-colors"
              >
                Limpiar Filtros
              </button>
            )}
          </div>
        )}

        {/* FAB BOTÓN */}
        <button
          onClick={() => setIsCreateModalOpen(true)}
          className="fixed bottom-10 right-10 w-16 h-16 bg-gray-900 text-white rounded-full shadow-2xl shadow-orange-900/20 flex items-center justify-center hover:scale-110 hover:bg-orange-500 transition-all z-40 group"
        >
          <UserPlus size={28} className="group-hover:rotate-12 transition-transform" />
        </button>

        {/* MODALES */}
        <UserForm
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onUserCreated={fetchUsers}
        />

        <EditUserModal
          isOpen={!!editingUser}
          onClose={() => setEditingUser(null)}
          onUserUpdated={fetchUsers}
          user={editingUser}
        />

        <DeleteUserModal
          isOpen={!!deletingUser}
          onClose={() => setDeletingUser(null)}
          onUserDeleted={fetchUsers}
          user={deletingUser}
        />

      </div>
    </main>
  );
}