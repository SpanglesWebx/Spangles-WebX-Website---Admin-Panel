import React from "react";
import Hero from "./Components/Hero";
import Stats from "./Components/Stats";
import MissionVision from "./Components/MissionVision";
import TechStack from "./Components/TechStack";
import Team from "./Components/Team";
import Clients from "./Components/Clients";
import Support from "./Components/Support";

export default function About() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <MissionVision />
      <TechStack />
      <Team />
      <Clients />
      <div className="-mt-[40px] relative z-10 max-xl:-mt-9 max-lg:-mt-8 max-md:-mt-7 max-sm:-mt-6 max-[413px]:-mt-6">
        <Support />
      </div>
    </div>
  );
}
