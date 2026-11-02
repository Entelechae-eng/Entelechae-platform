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
    <div className="relative w-full max-w-5xl mx-auto border border-white/10 overflow-hidden bg-black">
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
          <source src="/images/atelier-white-video.MOV" type="video/quicktime" />
          <source src="/images/entelechae-hero.mp4" type="video/mp4" />
        </video>

        {/* Top Badges Overlay */}
        <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
          <div className="flex items-center gap-2 px-2.5 py-1 bg-black/80 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono">
            <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
            <span className="tracking-widest uppercase">FLAGSHIP: ATELIER</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-black/60 backdrop-blur-md border border-white/10 text-neutral-400 text-[10px] font-mono">
            <span>V1.0 RUNTIME</span>
          </div>
        </div>

        {/* Bottom Bar Overlay with Controls */}
        <div className="absolute bottom-4 inset-x-4 z-20 flex items-center justify-between">
          <div className="hidden sm:block">
            <p className="text-white text-xs font-mono tracking-tight">
              Atelier — A place to make what matters.
            </p>
          </div>

          <div className="flex items-center gap-2 ml-auto">
            <button
              type="button"
              onClick={togglePlay}
              className="flex items-center justify-center w-8 h-8 bg-black/70 hover:bg-black border border-white/15 text-white transition-colors"
              aria-label={isPlaying ? "Pause video" : "Play video"}
            >
              {isPlaying ? <Pause size={13} /> : <Play size={13} className="ml-0.5" />}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="flex items-center justify-center w-8 h-8 bg-black/70 hover:bg-black border border-white/15 text-white transition-colors"
              aria-label={isMuted ? "Unmute video" : "Mute video"}
            >
              {isMuted ? <VolumeX size={13} /> : <Volume2 size={13} />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
