"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function HeroVideo() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="relative w-full max-w-6xl mx-auto rounded-3xl p-1.5 sm:p-2 bg-gradient-to-b from-white/15 via-white/[0.04] to-transparent border border-white/10 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] rounded-[22px] overflow-hidden bg-[#0a0a0e]">
        {/* Ambient video glow behind frame */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 z-10 pointer-events-none" />

        {/* Video Element */}
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/atelier-identity.jpg"
          className="w-full h-full object-cover scale-[1.01]"
        >
          <source src="/images/atelier-white-video.mp4" type="video/mp4" />
          <source src="/images/atelier-white-video.MOV" type="video/quicktime" />
          <source src="/images/entelechae-hero.mp4" type="video/mp4" />
        </video>

        {/* Top Badges Overlay */}
        <div className="absolute top-4 sm:top-6 left-4 sm:left-6 z-20 flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/15 text-white text-xs font-mono">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="tracking-widest uppercase">FLAGSHIP: ATELIER</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-xl border border-white/15 text-neutral-300 text-xs font-mono">
            <span>V1.0 RUNTIME</span>
          </div>
        </div>

        {/* Bottom Bar Overlay with Controls */}
        <div className="absolute bottom-4 sm:bottom-6 inset-x-4 sm:inset-x-6 z-20 flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-white text-sm font-medium tracking-tight">
              Atelier — A place to make what matters.
            </p>
            <p className="text-neutral-400 text-xs font-mono">
              The first sovereign software platform by Entelechae.
            </p>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={togglePlay}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20 text-white transition-all hover:scale-105"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center justify-center w-10 h-10 rounded-full bg-black/60 hover:bg-black/80 backdrop-blur-xl border border-white/20 text-white transition-all hover:scale-105"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={16} /> : <Volume2 size={16} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
