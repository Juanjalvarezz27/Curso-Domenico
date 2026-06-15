"use client";

import { useState } from "react";
import { Play } from "lucide-react";

interface PremiumVideoPlayerProps {
 youtubeId?: string;
 poster?: string;
}

export default function PremiumVideoPlayer({ youtubeId, poster }: PremiumVideoPlayerProps) {
 const [isPlaying, setIsPlaying] = useState(false);

 const togglePlay = () => {
 setIsPlaying(true);
 };

 return (
 <div 
 className="relative w-full h-full group cursor-pointer rounded-2xl overflow-hidden bg-gray-900"
 onClick={!isPlaying ? togglePlay : undefined}
 >
 {/* IMAGEN DE PORTADA DE FONDO (Para evitar negros) */}
 {!isPlaying && poster && (
 <div 
 className="absolute inset-0 bg-cover bg-center z-0 opacity-60" 
 style={{ backgroundImage: `url(${poster})` }}
 ></div>
 )}

 {/* YOUTUBE IFRAME (Carga solo cuando hacen clic, ocultando títulos con controls=0) */}
 {isPlaying ? (
 <div className="absolute inset-0 z-10">
 <iframe 
 className="w-full h-full rounded-2xl"
 src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1&showinfo=0&iv_load_policy=3`}
 title="YouTube video player" 
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
 allowFullScreen
 ></iframe>
 {/* Franja que tapa el título, canal y avatar de YouTube */}
 <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-black from-60% to-transparent pointer-events-none z-20 rounded-t-2xl"></div>
 </div>
 ) : (
 /* OVERLAY PREMIUM CUANDO ESTÁ PAUSADO */
 <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black/20 transition-all duration-500">
 <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center border border-white/30 shadow-[0_0_40px_rgba(255,255,255,0.2)] group-hover:scale-110 transition-transform duration-500">
 <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-xl">
 <Play className="w-6 h-6 text-orange-500 ml-1" fill="currentColor" />
 </div>
 </div>
 <span className="mt-5 text-white font-black tracking-[0.3em] uppercase text-[10px] drop-shadow-md bg-black/60 px-4 py-1.5 rounded-full border border-white/10">
 Reproducir Video
 </span>
 </div>
 )}
 </div>
 );
}
