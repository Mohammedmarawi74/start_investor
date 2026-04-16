import React from "react";
import { HeroBanner } from "./HomeViews/HeroBanner";
import { DecisionLayer } from "./HomeViews/DecisionLayer";
import { IntelligenceStream } from "./HomeViews/IntelligenceStream";
import { UnicornAnatomy } from "./HomeViews/UnicornAnatomy";
import { StrategicUpgrade } from "./HomeViews/StrategicUpgrade";
import { StrategicLaunchpad } from "./HomeViews/StrategicLaunchpad";
import { StrategicPathFinder } from "./HomeViews/StrategicPathFinder";

export const Home = ({ setActiveTab }: any) => {
  return (
    <div 
      className="min-h-screen bg-white" 
      dir="rtl" 
      style={{ fontFamily: '"IBM Plex Sans Arabic", sans-serif' }}
    >
      {/* ── Layer 0: Strategic Hero Banner ── */}
      <HeroBanner />

      {/* ── Layer 1: Decision Layer ── */}
      <DecisionLayer setActiveTab={setActiveTab} />

      {/* ── Layer 2: Live Intelligence Stream (Feed) ── */}
      <IntelligenceStream setActiveTab={setActiveTab} />

      {/* ── Layer 2.5: Unicorn Anatomy (Case Studies) ── */}
      <UnicornAnatomy />

      {/* ── Layer 2.6: Strategic Upgrade (Pro Banner) ── */}
      <StrategicUpgrade setActiveTab={setActiveTab} />

      {/* ── Layer 3: Strategic Launchpad (Quick Tools) ── */}
      <StrategicLaunchpad setActiveTab={setActiveTab} />

      {/* ── Layer 4: Strategic Finder Stepper (Advisor) ── */}
      <StrategicPathFinder setActiveTab={setActiveTab} />
    </div>
  );
};
