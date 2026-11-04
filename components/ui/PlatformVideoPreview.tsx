"use client";

import { useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX, ArrowUpRight } from "lucide-react";

export function PlatformVideoPreview() {
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
    <div className="relative w-full max-w-5xl mx-auto border border-white/[0.12] bg-black select-none">
      {/* Top Defined Window Header (Cursor / Terminal IDE Style) */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.08] bg-black text-[11px] font-mono text-neutral-400">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-neutral-700" />
            <span className="w-2 h-2 rounded-full bg-neutral-700" />
            <span className="w-2 h-2 rounded-full bg-neutral-700" />
          </div>
          <span className="text-neutral-500 ml-2 hidden sm:inline">entelechae // platform-runtime.mp4</span>
        </div>

        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-[10px] text-neutral-300">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400 animate-pulse" />
            <span>120 FPS WEBGPU</span>
          </div>
          <div className="text-neutral-600">|</div>
          <div className="text-[10px] text-neutral-500 uppercase">OFFLINE RUNTIME</div>
        </div>
      </div>

      {/* Video Viewport */}
      <div className="relative w-full aspect-[16/9] sm:aspect-[21/9] overflow-hidden bg-black">
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          poster="/images/atelier-identity.jpg"
          className="w-full h-full object-cover"
        >
          <source src="/images/atelier-white-video.mp4" type="video/mp4" />
          <source src="/images/entelechae-hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient subtle vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

        {/* Floating Quick Action Overlay */}
        <div className="absolute bottom-4 left-4 right-4 z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 text-xs font-mono">
            <a
              href="https://entele-visuals.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-black/80 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-neutral-200 transition-all inline-flex items-center gap-1 rounded-[2px]"
            >
              <span>Visuals</span>
              <ArrowUpRight size={11} />
            </a>
            <a
              href="https://entelechae-code.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1 bg-black/80 hover:bg-white hover:text-black backdrop-blur-md border border-white/20 text-neutral-200 transition-all inline-flex items-center gap-1 rounded-[2px]"
            >
              <span>Code</span>
              <ArrowUpRight size={11} />
            </a>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={togglePlay}
              className="flex items-center justify-center w-7 h-7 bg-black/80 hover:bg-black border border-white/20 text-white transition-colors rounded-[2px]"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={12} /> : <Play size={12} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center justify-center w-7 h-7 bg-black/80 hover:bg-black border border-white/20 text-white transition-colors rounded-[2px]"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={12} /> : <Volume2 size={12} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

