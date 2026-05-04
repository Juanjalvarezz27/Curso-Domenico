import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans, Syncopate } from "next/font/google";
import Navbar from "./components/ui/Navbar"; 
import "./globals.css";

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit" 
});

const jakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"], 
  variable: "--font-jakarta" 
});

const syncopate = Syncopate({ 
  weight: ["400", "700"], 
  subsets: ["latin"], 
  variable: "--font-syncopate" 
});

export const metadata: Metadata = {
  title: "Domenico D'orazio - Cursos y Mentorías",
  description: "Plataforma de cursos y mentorías",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${outfit.variable} ${jakarta.variable} ${syncopate.variable} font-jakarta bg-fondo text-texto-principal selection:bg-acento-naranja selection:text-white antialiased`}>
        
        {/* Fondos Globales */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-[-5%] left-[-5%] w-96 h-96 bg-blue-400/15 rounded-full blur-3xl scale-150"></div>
          <div className="absolute top-[20%] right-[-5%] w-96 h-96 bg-orange-400/15 rounded-full blur-3xl scale-150"></div>
          <div className="absolute bottom-[10%] left-[5%] w-96 h-96 bg-orange-400/10 rounded-full blur-3xl scale-150"></div>
          <div className="absolute bottom-[-5%] right-[-5%] w-96 h-96 bg-blue-400/15 rounded-full blur-3xl scale-150"></div>
        </div>

        <div 
          className="fixed inset-0 pointer-events-none z-10 opacity-25"
          style={{ backgroundImage: 'radial-gradient(#475569 1.5px, transparent 1.5px)', backgroundSize: '48px 48px' }}
        ></div>

        <div className="relative z-20 flex flex-col min-h-screen">
          <Navbar /> 
          {children}
        </div>

      </body>
    </html>
  );
}