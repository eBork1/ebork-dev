import type { ISourceOptions } from "@tsparticles/engine";

export const COSMIC_DRIFT: ISourceOptions = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  fpsLimit: 60,
  detectRetina: true,

  particles: {
    number: {
      value: 90,
      density: {
        enable: true,
        width: 800,   // instead of area
        height: 800,  // instead of area
      },
    },

    color: { value: "#ffffff" },

    opacity: {
      // subtle variation in brightness
      value: { min: 0.03, max: 0.12 },
      animation: {
        enable: true,
        speed: 0.4,
        startValue: "random",
        sync: false,
      },
    },

    size: {
      // small, “dusty” particles
      value: { min: 0.5, max: 2.2 },
      animation: {
        enable: true,
        speed: 2,
        startValue: "random",
        destroy: "none",
        sync: false,
      },
    },

    move: {
      enable: true,
      speed: 0.6,
      direction: "none",
      random: true,
      straight: false,
      outModes: { default: "out" },
      attract: { enable: false },
    },

    links: {
      enable: true,
      color: "#ffffff",
      distance: 140,
      opacity: 0.08,
      width: 1,
    },
  },

  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      onClick: { enable: false },
      resize: { enable: true },
    },
    modes: {
      repulse: { distance: 120, duration: 0.4 },
    },
  },
};