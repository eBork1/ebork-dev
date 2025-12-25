"use client";

import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";
import { useTsParticlesInit } from "../hooks/useTsParticlesInit"; // whatever hook you already use

export function NameParticles() {
  const init = useTsParticlesInit();

  const options: ISourceOptions = useMemo(
    () => ({
      fullScreen: { enable: false },
      background: { color: { value: "transparent" } },

      detectRetina: true,
      fpsLimit: 120,

      particles: {
        number: { value: 350, density: { enable: false } },
        color: { value: ["#4285f4", "#34A853", "#FBBC05", "#EA4335"] },
        size: { value: 1 },
        move: {
          enable: true,
          speed: 0.1,
          outModes: { default: "bounce" },
        },
        links: {
          enable: true,
          distance: 40,
          color: { value: "random" },
          opacity: 1,
          width: 1,
        },
        opacity: {
          value: { min: 0.05, max: 0.4 },
          animation: {
            enable: true,
            speed: 1,
            startValue: "random",
          },
        },
      },

      polygon: {
        enable: true,
        type: "inline",
        inline: { arrangement: "equidistant" },

        // 👇 radius affects how particles fill the shape
        move: { radius: 8, type: "path" },

        // 👇 THE FIX — center the shape inside its canvas
        position: { x: 50, y: 50 }, // percent-based center

        // 👇 adjust this so the logo fits inside your box
        scale: 4.5,

        draw: {
          enable: true,
          stroke: {
            color: { value: "black" },
            width: 0.5,
            opacity: 0.2,
          },
        },

        url: "/ethan-logo.svg",
      },
    }),
    []
  );

  if (!init) return null;

  return (
    <div
      className="
        relative
        w-64 h-32
        md:w-80 md:h-40 
        lg:w-200 lg:h-60
        border
      "
    >
      {/* Make the canvas fill the wrapper properly */}
      <Particles
        id="ethan-logo"
        options={options}
        className="absolute inset-0"
      />
    </div>
  );
}
