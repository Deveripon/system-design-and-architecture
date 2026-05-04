'use client';

import React from "react";
import { SubHeader } from "../../sub-header";
import { InfoBox } from "../../info-box";
import { BorderCross } from "../../border-cross";
import { ScenarioCard, ScenarioGrid } from "../../scenario-grid";
import { VerticalScalingDiagram } from "./diagrams";

export const VerticalScalingSection = React.memo(() => (
  <BorderCross className="p-10">
    <section id="vertical" className="scroll-mt-20">
      <SubHeader index="002" title="Vertical Scaling" className="mb-8" />
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
        Scale Up — বড় মেশিন কিনো
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
        Vertical scaling মানে তোমার existing server কে আরো powerful বানানো। বেশি RAM, বেশি CPU, বেশি storage।
      </p>

      <VerticalScalingDiagram />

      <h3 className="text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary mb-6">কখন Vertical Scaling সঠিক?</h3>
      <ScenarioGrid>
        <ScenarioCard 
          title="✅ ভালো situation" 
          description="Database server — PostgreSQL, MySQL। Single-threaded workload। Code change করা সম্ভব না। Quick fix দরকার।" 
        />
        <ScenarioCard 
          title="❌ খারাপ situation" 
          description="Already সবচেয়ে বড় machine কিনে ফেলেছো। Hardware limit আছে। Cost অনেক বেশি। Single point of failure।" 
        />
      </ScenarioGrid>

      <div className="mt-12">
        <InfoBox variant="warning" title="Vertical Scaling এর সীমাবদ্ধতা">
          পৃথিবীর সবচেয়ে বড় single server এও limit আছে। AWS এর biggest instance (u-24tb1.metal) এর ৪৪৮ CPU, ২৪TB RAM — এর বেশি আর যাওয়া সম্ভব না। আর এই machine ঘণ্টায় $200+ এর বেশি।
        </InfoBox>
      </div>
    </section>
  </BorderCross>
));

VerticalScalingSection.displayName = "VerticalScalingSection";
