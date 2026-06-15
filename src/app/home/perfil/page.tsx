"use client";

import { useState, useEffect } from "react";
import { getSession } from "next-auth/react";
import { toast } from "react-toastify";
import { Loader2, Save, User, Lock, Settings } from "lucide-react";

export default function ProfilePage() {
 const [loading, setLoading] = useState(false);
 const [username, setUsername] = useState("");
 const [password, setPassword] = useState("");
 const [originalUsername, setOriginalUsername] = useState("");

 // Usamos getSession en lugar de useSession para no requerir un <SessionProvider> global
 useEffect(() => {
 getSession().then((session) => {
 if (session?.user?.username) {
 setUsername(session.user.username);
 setOriginalUsername(session.user.username);
 }
 });
 }, []);

 const handleSubmit = async (e: React.FormEvent) => {
 e.preventDefault();
 setLoading(true);

 try {
 const res = await fetch("/api/profile", {
 method: "PUT",
 headers: { "Content-Type": "application/json" },
 body: JSON.stringify({
 username,
 password: password || undefined, // Solo envía si hay algo escrito
 }),
 });

 const data = await res.json();

 if (res.ok) {
 toast.success("¡Tus datos se actualizaron correctamente!");
 setPassword(""); // Limpiamos la caja de contraseña por seguridad
 
 // Si el usuario cambió su @username, recargamos la página
 // para que el Navbar y la sesión se actualicen automáticamente
 if (username !== originalUsername) {
 setTimeout(() => {
 window.location.reload();
 }, 1500); // Le damos 1.5s para que lea el mensaje de éxito antes de recargar
 }
 } else {
 toast.error(data.error || "Hubo un error al actualizar.");
 }
 } catch (error) {
 toast.error("Error de conexión.");
 } finally {
 setLoading(false);
 }
 };

 return (
 <main className="min-h-screen bg-gray-50/50 pt-32 pb-24 px-6 relative">
 <div className="max-w-xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-500">
 
 {/* HEADER */}
 <header className="mb-10 text-center">
 <div className="w-20 h-20 bg-gray-900 text-white rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl">
 <Settings size={36} />
 </div>
 <h1 className="text-3xl font-black text-gray-900 tracking-tight uppercase">
 Ajustes de <span className="text-orange-500">Perfil</span>
 </h1>
 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mt-2">
 Gestiona tus credenciales de acceso
 </p>
 </header>

 {/* FORMULARIO */}
 <form onSubmit={handleSubmit} className="bg-white p-8 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-sm space-y-6">
 
 <div className="space-y-4">
 <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">
 Nombre de Usuario
 </label>
 <div className="relative">
 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
 <User size={18} />
 </div>
 <input
 type="text"
 required
 value={username}
 onChange={(e) => setUsername(e.target.value)}
 placeholder="Tu usuario"
 className="w-full bg-gray-50 pl-12 pr-6 py-4 rounded-2xl text-sm font-bold border-2 border-transparent focus:border-orange-500/30 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900 lowercase"
 />
 </div>
 </div>

 <div className="space-y-4 pt-2">
 <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest ml-2">
 Nueva Contraseña
 </label>
 <div className="relative">
 <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
 <Lock size={18} />
 </div>
 <input
 type="password"
 value={password}
 onChange={(e) => setPassword(e.target.value)}
 placeholder="Déjalo en blanco si no quieres cambiarla"
 className="w-full bg-gray-50 pl-12 pr-6 py-4 rounded-2xl text-sm font-bold border-2 border-transparent focus:border-orange-500/30 focus:bg-white outline-none transition-all placeholder:text-gray-400 text-gray-900"
 />
 </div>
 <p className="text-[9px] font-bold text-orange-500 uppercase tracking-widest ml-2 flex items-center gap-1">
 * Recuerda esta clave para tu próximo inicio de sesión
 </p>
 </div>

 <button
 disabled={loading || !username}
 type="submit"
 className="w-full mt-4 flex items-center justify-center gap-3 bg-gray-900 text-white px-5 py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.2em] hover:bg-orange-600 transition-colors shadow-lg active:scale-[0.98] disabled:opacity-50"
 >
 {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} className="text-orange-500" />}
 {loading ? "Guardando..." : "Guardar Cambios"}
 </button>

 </form>
 </div>
 </main>
 );
}