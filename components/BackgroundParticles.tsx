"use client";

import Particles from "@tsparticles/react";
import type { ISourceOptions } from "@tsparticles/engine";
import { useMemo } from "react";
import { useTsParticlesInit } from "../hooks/useTsParticlesInit"
import { COSMIC_DRIFT } from "./particles-options/cosmic-drift";
import { CYBER_MESH } from "./particles-options/cyber-mesh";
import { NAME_MASK } from "./particles-options/name-mask";

export function BackgroundParticles({
  id,
  hoverEventsEnabled = true,
}: {
  id: string
  hoverEventsEnabled?: boolean
}) {

  const init = useTsParticlesInit();

  let options: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  detectRetina: true,
  fpsLimit: 60,

  particles: {
    number: {
      value: 180,
      density: {
        enable: false, // keep it simple; adjust "value" instead
      },
    },

    color: { value: ["#6ee7ff", "#ff0000"] }, // cyan / neon

    links: {
      enable: true,
      distance: 130,
      opacity: 0.25,
      width: 1,
      // color: "#6ee7ff",
      color: "black",
    },

    opacity: {
      // slight breathing effect
      // value: { min: 0.15, max: 0.4 },
      animation: {
        enable: true,
        speed: 1,
        startValue: "random",
        sync: false,
      },
    },

    size: {
      value: { min: .8, max: .8 },
      animation: {
        enable: false,
        speed: 0, // can leave this if you want static size
        startValue: "max",
        sync: false,
      },
    },

    move: {
      enable: true,
      speed: .4,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
    },
  },

  interactivity: {
    events: {
      onHover: { enable: hoverEventsEnabled, mode: ["connect"] },
      // onClick: { enable: true, mode: "push" },
      resize: { enable: true },
    },
    modes: {
      connect: {
        radius: 330,
        distance: 180,
        links: {
          color: "#6ee7ff", // <--- TARGET BRIGHT BLUE COLOR on hover
          opacity: 0.1, // Also increase opacity for emphasis
          width: 0.6,
        },
      },
    },
  },
};

  if (!init) return null;

  return (
    <div className="absolute inset-0 -z-10">
      <Particles
        id={id}
        options={options}
        className="h-full w-full"
      />
    </div>
  );
}
