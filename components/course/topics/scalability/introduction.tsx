'use client';

import React from "react";
import { SubHeader } from "../../sub-header";
import { InfoBox } from "../../info-box";
import { BorderCross } from "../../border-cross";

export const ScalabilityIntroduction = React.memo(() => (
  <BorderCross className="p-10">
    <section id="concept" className="scroll-mt-20">
      <SubHeader index="001" title="Introduction" className="mb-8" />
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
        Scalability কেন শিখতে হবে?
      </h2>
      <div className="space-y-6 text-lg text-muted-foreground leading-relaxed max-w-3xl">
        <p>
          তুমি একটা app বানালে। শুরুতে ১০০ user। সব ঠিকঠাক চলছে। কিন্তু হঠাৎ TechCrunch এ feature হলো — ১০ লক্ষ user একসাথে ঢুকলো। Server crash। App down।
        </p>
        <p>
          এই সমস্যার নাম হলো <strong>Scalability problem</strong>। একজন system engineer হিসেবে তোমাকে আগে থেকেই plan করতে হবে — <em>আমার system যদি ১০x, ১০০x, ১০০০x বড় হয়, তখনও কি এটা কাজ করবে?</em>
        </p>
      </div>

      <div className="mt-12">
        <InfoBox variant="concept" title="Definition">
          <strong>Scalability</strong> হলো একটা system এর ক্ষমতা — বাড়তি load (users, data, requests) handle করার জন্য নিজেকে বড় করার ক্ষমতা, এবং performance ঠিক রাখার ক্ষমতা।
        </InfoBox>
      </div>
    </section>
  </BorderCross>
));

ScalabilityIntroduction.displayName = "ScalabilityIntroduction";
