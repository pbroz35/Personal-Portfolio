"use client";
import { cn } from "@/utils/cn";
import React, { useEffect, useState } from "react";

export const Meteors = ({
  number,
  className,
}: {
  number?: number;
  className?: string;
}) => {
  const [meteorStyles, setMeteorStyles] = useState<
    Array<{ top: string; left: string; animationDelay: string; animationDuration: string }>
  >([]);

  useEffect(() => {
    const styles = new Array(number || 20).fill(true).map(() => ({
      top: "-5%",
      left: Math.floor(Math.random() * 100) + "%",
      animationDelay: (Math.random() * 1 + 0.2).toFixed(2) + "s",
      animationDuration: Math.floor(Math.random() * 6 + 4) + "s",
    }));
    setMeteorStyles(styles);
  }, [number]);

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2 h-0.5 w-0.5 rotate-[215deg] animate-meteor rounded-full bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
            className
          )}
          style={{
            top: style.top,
            left: style.left,
            animationDelay: style.animationDelay,
            animationDuration: style.animationDuration,
          }}
        >
          <div className="pointer-events-none absolute top-1/2 -z-10 h-px w-[50px] -translate-y-1/2 bg-gradient-to-r from-[#CBACF9] to-transparent" />
        </span>
      ))}
    </>
  );
};
