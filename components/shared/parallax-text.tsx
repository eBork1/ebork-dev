"use client";

import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "framer-motion";
import { useLayoutEffect, useRef, useState } from "react";
import { plaster } from "@/app/fonts";

type Props = {
  children: string;
  baseVelocity?: number;
};

export function ParallaxText({ children, baseVelocity = 60 }: Props) {
  const baseX = useMotionValue(0);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, { damping: 50, stiffness: 400 });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 4], { clamp: false });

  const direction = useRef(1);

  // Measure one copy's width so we can loop perfectly
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [copyWidth, setCopyWidth] = useState(0);

  useLayoutEffect(() => {
    if (!measureRef.current) return;
    const el = measureRef.current;

    const update = () => setCopyWidth(el.getBoundingClientRect().width);

    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);

    return () => ro.disconnect();
  }, []);

  useAnimationFrame((_, delta) => {
    if (!copyWidth) return;

    let moveBy = direction.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) direction.current = -1;
    else if (velocityFactor.get() > 0) direction.current = 1;

    moveBy += direction.current * moveBy * velocityFactor.get();

    let next = baseX.get() - moveBy;

    // Seamless loop: once we've shifted one full copy, wrap by that exact width
    if (next <= -copyWidth) next += copyWidth;
    if (next >= 0) next -= copyWidth;

    baseX.set(next);
  });

  return (
    <div className="w-screen overflow-hidden whitespace-nowrap">
      <motion.div
        className={`
          ${plaster.className}
          flex
          uppercase
          leading-none
          tracking-[-0.06em]
          text-white
          text-[clamp(2.25rem,5.5vw,4rem)]
        `}
        style={{ x: baseX }}
      >
        {/* First copy (measured) */}
        <span
          ref={measureRef}
          className="mr-10 font-[var(--font-plaster)] uppercase leading-none tracking-[-0.06em] text-white text-[clamp(2.25rem,5.5vw,4rem)]"
        >
          {children}
        </span>

        {/* Second copy (identical) */}
        <span className="mr-10 font-[var(--font-plaster)] uppercase leading-none tracking-[-0.06em] text-white text-[clamp(2.25rem,5.5vw,4rem)]">
          {children}
        </span>
      </motion.div>
    </div>
  );
}
