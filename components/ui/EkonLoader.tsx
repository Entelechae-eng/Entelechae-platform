"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const wordmark = "ENTELECHÆ.STUDIO";

export function EkonLoader() {
  const [stage, setStage] = useState<"text" | "exitText" | "exitPanels" | "done">("text");

  useEffect(() => {
    // Phase 1: Text stays visible for 1.1s
    const timer1 = setTimeout(() => {
      setStage("exitText");
    }, 1100);

    // Phase 2: Text fades out and panels slide up at 1.4s
    const timer2 = setTimeout(() => {
      setStage("exitPanels");
    }, 1450);

    // Phase 3: Complete and unmount from DOM at 2.4s
    const timer3 = setTimeout(() => {
      setStage("done");
    }, 2450);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  if (stage === "done") return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] w-screen h-screen overflow-hidden pointer-events-none select-none">
        {/* 4 Vertical Black Panels (Exact Ekon Curtain Reveal) */}
        <div className="absolute inset-0 grid grid-cols-4 w-full h-full pointer-events-auto">
          {[0, 1, 2, 3].map((index) => (
            <motion.div
              key={index}
              initial={{ y: 0 }}
              animate={stage === "exitPanels" ? { y: "-100%" } : { y: 0 }}
              transition={{
                duration: 0.85,
                ease: [0.77, 0, 0.175, 1], // Smooth exponential ease-in-out
                delay: index * 0.08, // Staggered column lift
              }}
              className="w-full h-full bg-black border-r border-white/[0.03] last:border-r-0"
            />
          ))}
        </div>

        {/* Centered Small Typography: ENTELECHÆ.STUDIO */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={
              stage === "text"
                ? { opacity: 1, y: 0 }
                : stage === "exitText" || stage === "exitPanels"
                ? { opacity: 0, y: -16 }
                : { opacity: 0 }
            }
            transition={{
              duration: 0.5,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex items-center"
          >
            <h2 className="text-xs sm:text-sm font-sans font-medium tracking-[0.25em] text-white uppercase text-center">
              {wordmark.split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.35,
                    delay: 0.15 + i * 0.03,
                    ease: "easeOut",
                  }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h2>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
}

