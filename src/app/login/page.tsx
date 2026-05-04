"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Loader2, Lock, MessageCircle, Eye, EyeOff } from "lucide-react";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await signIn("credentials", {
      username,
      password,
      redirect: false,
    });

    if (res?.error) {
      setError(res.error);
      setLoading(false);
    } else {
      router.push("/home"); 
      router.refresh();
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      
      {/* Botón de regreso al Landing */}
      <Link href="/" className="absolute top-8 left-8 flex items-center gap-2 text-gray-500 hover:text-texto-principal transition-colors text-sm font-bold tracking-widest uppercase z-20">
        <ArrowLeft size={16} /> Volver
      </Link>

      <div className="w-full max-w-md relative z-10">
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black font-outfit text-texto-principal mb-2 uppercase tracking-tight">
            Acceso <span className="text-acento-naranja">Privado</span>
          </h1>
          <p className="text-sm font-medium text-gray-500">
            Ingresa tus credenciales para ver tu contenido.
          </p>
        </div>

        <div className="bg-superficie/80 backdrop-blur-xl p-8 rounded-4xl shadow-[0_8px_30px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col">
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            {error && (
              <div className="bg-red-50 text-red-600 text-xs font-bold p-3 rounded-xl border border-red-100 text-center uppercase tracking-wider">
                {error}
              </div>
            )}

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Usuario</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="bg-fondo w-full px-4 py-3.5 rounded-xl border border-gray-200 focus:outline-none focus:border-acento-naranja focus:ring-1 focus:ring-acento-naranja transition-all text-texto-principal font-medium"
                placeholder="tu_usuario"
                required
              />
            </div>

            <div className="flex flex-col gap-2 mb-2">
              <label className="text-xs font-bold text-gray-400 uppercase tracking-widest pl-1">Contraseña</label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="bg-fondo w-full px-4 py-3.5 pr-12 rounded-xl border border-gray-200 focus:outline-none focus:border-acento-naranja focus:ring-1 focus:ring-acento-naranja transition-all text-texto-principal font-medium"
                  placeholder="••••••••"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-acento-naranja transition-colors"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-texto-principal text-superficie font-bold py-4 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition-all shadow-md disabled:opacity-70 disabled:cursor-not-allowed mt-2"
            >
              {loading ? <Loader2 size={18} className="animate-spin" /> : <Lock size={18} />}
              {loading ? "VERIFICANDO..." : "INGRESAR AL SISTEMA"}
            </button>
          </form>

          {/* DIVISOR Y SECCIÓN DE CONTACTO WHATSAPP */}
          <div className="mt-8 pt-6 border-t border-gray-100/80 flex flex-col items-center gap-4">
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-widest text-center">
              ¿Aún no tienes una cuenta?
            </p>
            <a 
              href="https://wa.me/584126900224?text=Hola,%20quiero%20adquirir%20acceso%20a%20la%20plataforma%20de%20Capacitacion%20de%20redes%20sociales%20de%20Domenico%20D'Orazio" 
              target="_blank" 
              rel="noreferrer" 
              className="flex items-center justify-center w-full gap-2 bg-green-50 text-green-600 border border-green-200 px-4 py-3.5 rounded-xl hover:bg-green-600 hover:text-white transition-all duration-300 transform hover:-translate-y-0.5 shadow-sm active:scale-95 group"
            >
              <MessageCircle size={16} className="fill-current opacity-80 group-hover:scale-110 transition-transform" />
              <span className="font-bold text-sm">SOLICITAR ACCESO</span>
            </a>
          </div>

        </div>
      </div>
    </main>
  );
}