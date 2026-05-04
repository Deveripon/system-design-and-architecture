import React, { ReactNode } from "react";
import { SubHeader } from "./sub-header";

interface Step {
  title: ReactNode;
  description: ReactNode;
}

interface StepFlowProps {
  steps: Step[];
}

export function StepFlow({ steps = [] }: StepFlowProps) {
  return (
    <div className="my-10 md:my-16 border-t border-l border-border grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {steps.map((step, idx) => (
        <div key={idx} className="p-6 md:p-10 border-r border-b border-border bg-card hover:bg-white/2 transition-colors group">
          <div className="flex flex-col gap-6 md:gap-8">
            <SubHeader index={`STEP 0${idx + 1}`} title="System Task" />
            <div className="space-y-3 md:space-y-4">
              <h4 className="text-sm md:text-base font-black uppercase tracking-tight leading-snug md:leading-none group-hover:text-primary transition-colors">
                {step.title}
              </h4>
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed font-medium">
                {step.description}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
