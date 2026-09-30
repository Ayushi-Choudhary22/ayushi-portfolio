"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { Sparkles, MessageSquare, Eye, Hand, RotateCcw } from "lucide-react";

export default function HeroCharacter() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [characterState, setCharacterState] = useState<"idle" | "look-left" | "look-right" | "greet" | "point">("idle");
  const [message, setMessage] = useState<string | null>("Hey there! Move your cursor anywhere 👀");
  const [eyeOffset, setEyeOffset] = useState({ x: 0, y: 0 });
  const [tilt, setTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [isTouchDevice, setIsTouchDevice] = useState(false);

  const resetTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Preload all 5 frames
  useEffect(() => {
    const imagesToPreload = [
      "/images/hero/hero-idle.jpg",
      "/images/hero/hero-look-left.jpg",
      "/images/hero/hero-look-right.jpg",
      "/images/hero/hero-greet.jpg",
      "/images/hero/hero-point.jpg",
    ];

    imagesToPreload.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });

    if (typeof window !== "undefined" && window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
    }
  }, []);

  // Global window mousemove tracking so the eyes & face track cursor ANYWHERE on screen
  useEffect(() => {
    if (isTouchDevice) return;

    const handleWindowMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.35; // approximate eye level

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;
      const distance = Math.hypot(deltaX, deltaY);

      // Max eye pupil travel distance: ~9px horizontally, ~6px vertically
      const maxEyeX = 9;
      const maxEyeY = 6;
      const pupilX = Math.max(-maxEyeX, Math.min(maxEyeX, deltaX * 0.025));
      const pupilY = Math.max(-maxEyeY, Math.min(maxEyeY, deltaY * 0.025));
      setEyeOffset({ x: pupilX, y: pupilY });

      // Subtle 3D card tilt tracking the mouse (max 6 degrees)
      const maxTilt = 5;
      const tiltY = Math.max(-maxTilt, Math.min(maxTilt, (deltaX / window.innerWidth) * (maxTilt * 2)));
      const tiltX = Math.max(-maxTilt, Math.min(maxTilt, -(deltaY / window.innerHeight) * (maxTilt * 2)));
      setTilt({ rotateX: tiltX, rotateY: tiltY });

      // If user is hovering within greeting distance of center
      if (Math.abs(deltaX) < 130 && Math.abs(deltaY) < 180) {
        if (characterState !== "greet" && characterState !== "point") {
          setCharacterState("greet");
          setMessage("Hey, it’s you! 👋");
          if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
          resetTimerRef.current = setTimeout(() => {
            setCharacterState("point");
            setMessage("Check out my work below ↓");
          }, 1200);
        }
      } else if (deltaX < -140) {
        if (characterState !== "look-left") {
          setCharacterState("look-left");
          setMessage("Looking left at your cursor 👀");
        }
      } else if (deltaX > 140) {
        if (characterState !== "look-right") {
          setCharacterState("look-right");
          setMessage("Looking right at your cursor 👀");
        }
      } else {
        if (characterState !== "idle" && characterState !== "greet" && characterState !== "point") {
          setCharacterState("idle");
          setMessage("Following your cursor anywhere!");
        }
      }
    };

    window.addEventListener("mousemove", handleWindowMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleWindowMouseMove);
      if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    };
  }, [isTouchDevice, characterState]);

  const triggerGreet = () => {
    setCharacterState("greet");
    setMessage("Hiiii! 👋 Welcome to my portfolio!");
    if (resetTimerRef.current) clearTimeout(resetTimerRef.current);
    resetTimerRef.current = setTimeout(() => {
      setCharacterState("point");
      setMessage("Explore my work below ↓");
      resetTimerRef.current = setTimeout(() => {
        setCharacterState("idle");
        setMessage("Following your cursor anywhere!");
      }, 4000);
    }, 1500);
  };

  const triggerLookLeft = () => {
    setCharacterState("look-left");
    setMessage("Looking towards the left 👀");
  };

  const triggerLookRight = () => {
    setCharacterState("look-right");
    setMessage("Looking towards the right 👀");
  };

  const resetState = () => {
    setCharacterState("idle");
    setMessage("Following your cursor anywhere!");
    setEyeOffset({ x: 0, y: 0 });
    setTilt({ rotateX: 0, rotateY: 0 });
  };

  const getImageSrc = () => {
    switch (characterState) {
      case "look-left":
        return "/images/hero/hero-look-left.jpg";
      case "look-right":
        return "/images/hero/hero-look-right.jpg";
      case "greet":
        return "/images/hero/hero-greet.jpg";
      case "point":
        return "/images/hero/hero-point.jpg";
      case "idle":
      default:
        return "/images/hero/hero-idle.jpg";
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-[560px] mx-auto select-none">
      {/* Floating Speech / Reaction Bubble */}
      <div className="h-10 mb-2 flex items-center justify-center">
        {message && (
          <div className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#18181B] font-semibold text-xs sm:text-sm shadow-md shadow-black/5 border border-[#E8E3D9] animate-in fade-in zoom-in-95 duration-200">
            <MessageSquare className="w-3.5 h-3.5 text-[#8E1E46]" />
            <span>{message}</span>
          </div>
        )}
      </div>

      {/* Main Centered Interactive Head / Portrait Frame */}
      <div
        ref={containerRef}
        onClick={triggerGreet}
        style={{
          transform: `perspective(1000px) rotateX(${tilt.rotateX}deg) rotateY(${tilt.rotateY}deg)`,
          transition: "transform 0.1s ease-out",
        }}
        className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl shadow-[#8E1E46]/10 border-2 border-[#E8E3D9] bg-white cursor-pointer group"
        role="region"
        aria-label="Interactive developer face in center. Move cursor anywhere on screen to guide her gaze."
      >
        {/* Soft Radial Center Glow */}
        <div className="absolute inset-0 hero-glow-center rounded-3xl pointer-events-none -z-10" />

        {/* Character Image */}
        <Image
          src={getImageSrc()}
          alt="Ayushi Choudhary - Interactive Developer Portrait"
          fill
          priority
          sizes="(max-width: 768px) 90vw, 560px"
          className="object-cover object-center transition-all duration-300 pointer-events-none"
        />

        {/* Subtle dynamic eye gaze indicator overlay near eye level */}
        <div className="absolute top-[32%] left-[47%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          <div
            style={{
              transform: `translate(${eyeOffset.x}px, ${eyeOffset.y}px)`,
              transition: "transform 0.05s ease-out",
            }}
            className="w-1.5 h-1.5 rounded-full bg-[#8E1E46] shadow-sm"
          />
        </div>

        {/* Live Tracking Status Badge */}
        <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#E8E3D9] text-[11px] font-medium text-[#52525B] shadow-xs">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Eye & Head Tracking: Active</span>
        </div>

        {/* Mode badge */}
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-[#E8E3D9] text-[10px] uppercase tracking-wider font-bold text-[#8E1E46] shadow-xs">
          <Sparkles className="w-3 h-3 text-[#8E1E46]" />
          <span>
            {characterState === "idle" && "Tracking Cursor"}
            {characterState === "look-left" && "Looking Left"}
            {characterState === "look-right" && "Looking Right"}
            {characterState === "greet" && "Saying Hello!"}
            {characterState === "point" && "Pointing Down"}
          </span>
        </div>
      </div>

      {/* Quick Action Interactive Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-2 mt-4">
        <button
          onClick={triggerLookLeft}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 shadow-2xs ${
            characterState === "look-left"
              ? "bg-[#8E1E46] text-white border-[#8E1E46]"
              : "bg-white text-[#52525B] border-[#E8E3D9] hover:bg-[#F5F3EE] hover:text-[#18181B]"
          }`}
        >
          <Eye className="w-3 h-3" />
          <span>Look Left</span>
        </button>

        <button
          onClick={triggerGreet}
          className={`px-4 py-1.5 rounded-full text-xs font-bold border transition-all flex items-center gap-1.5 shadow-xs ${
            characterState === "greet" || characterState === "point"
              ? "bg-[#8E1E46] text-white border-[#8E1E46]"
              : "bg-white text-[#18181B] border-[#E8E3D9] hover:bg-[#F5F3EE]"
          }`}
        >
          <Hand className="w-3.5 h-3.5 text-[#8E1E46]" />
          <span>Say Hi / Wave 👋</span>
        </button>

        <button
          onClick={triggerLookRight}
          className={`px-3 py-1.5 rounded-full text-xs font-semibold border transition-all flex items-center gap-1.5 shadow-2xs ${
            characterState === "look-right"
              ? "bg-[#8E1E46] text-white border-[#8E1E46]"
              : "bg-white text-[#52525B] border-[#E8E3D9] hover:bg-[#F5F3EE] hover:text-[#18181B]"
          }`}
        >
          <Eye className="w-3 h-3" />
          <span>Look Right</span>
        </button>

        <button
          onClick={resetState}
          className="p-1.5 rounded-full text-xs text-[#71717A] hover:text-[#18181B] bg-white border border-[#E8E3D9] hover:bg-[#F5F3EE] transition-all"
          title="Reset to center"
        >
          <RotateCcw className="w-3.5 h-3.5" />
        </button>
      </div>
    </div>
  );
}
