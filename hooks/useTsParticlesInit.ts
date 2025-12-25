"use client";

import { useEffect, useState } from "react";
import { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles"; // or loadSlim/loadBasic as needed
import { loadPolygonMaskPlugin } from "@tsparticles/plugin-polygon-mask";

export function useTsParticlesInit() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // Runs only once globally under the hood
      await loadPolygonMaskPlugin(engine);
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return init;
}