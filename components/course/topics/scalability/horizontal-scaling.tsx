/* eslint-disable react/jsx-key */
'use client';

import React from "react";
import { SubHeader } from "../../sub-header";
import { InfoBox } from "../../info-box";
import { BorderCross } from "../../border-cross";
import { CompareTable } from "../../compare-table";
import { CodeBlock } from "../../code-block";
import { HorizontalScalingDiagram } from "./diagrams";

export const HorizontalScalingSection = React.memo(() => (
  <BorderCross className="p-10">
    <section id="horizontal" className="scroll-mt-20">
      <SubHeader index="003" title="Horizontal Scaling" className="mb-8" />
      <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 leading-none">
        Scale Out — বেশি মেশিন যোগ করো
      </h2>
      <p className="text-muted-foreground leading-relaxed mb-10 text-lg">
        Horizontal scaling মানে একটা বড় মেশিনের বদলে অনেকগুলো ছোট মেশিন ব্যবহার করা। Load টা সবার মধ্যে ভাগ হয়ে যায়।
      </p>

      <HorizontalScalingDiagram />

      <InfoBox variant="tip" title="Key Insight">
        Horizontal scaling এর সবচেয়ে বড় সুবিধা হলো <strong>theoretically unlimited</strong> — তুমি যতখুশি server যোগ করতে পারো। Google, Facebook এর লক্ষ লক্ষ server এভাবেই কাজ করে।
      </InfoBox>

      <h3 className="text-xl font-bold mt-16 mb-6">Stateless vs Stateful — গুরুত্বপূর্ণ পার্থক্য</h3>
      <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
        Horizontal scaling সফলভাবে করতে হলে তোমার servers কে <strong>stateless</strong> হতে হবে। মানে, যেকোনো server যেকোনো request handle করতে পারবে।
      </p>

      <CompareTable 
        headers={["বিষয়", "Stateless ✅", "Stateful ❌"]}
        rows={[
          ["Session data", "Redis/DB তে রাখো", "Server memory তে রাখো"],
          ["Scale করা যায়?", <span className="text-emerald-400 font-bold uppercase tracking-tight">সহজেই যায়</span>, <span className="text-red-400 uppercase tracking-tight">কঠিন, sticky session লাগে</span>],
          ["Server crash হলে?", <span className="text-emerald-400 font-bold uppercase tracking-tight">অন্য server handle করে</span>, <span className="text-red-400 uppercase tracking-tight">User এর session হারিয়ে যায়</span>],
          ["উদাহরণ", "REST API, JWT auth", "Server-side sessions"]
        ]}
      />

      <div className="mt-12">
        <CodeBlock 
          language="Node.js"
          filename="stateless-auth.js"
          code={`// ❌ STATEFUL — এটা করো না (horizontal scaling এ সমস্যা)
const sessions = {}; // Server memory তে session রাখা = BAD

app.post('/login', (req, res) => {
  sessions[userId] = { loggedIn: true, cart: [...] };
  // User 2nd request করলে অন্য server এ গেলে session নেই!
});

// ✅ STATELESS — এটা করো (horizontal scaling এর জন্য ready)
const redis = require('redis');
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  // Session Redis এ রাখো — যেকোনো server access করতে পারবে
  await redis.set(\`session:\${userId}\`, JSON.stringify(sessionData));
  
  // অথবা JWT use করো — server এ কিছুই রাখতে হবে না
  const token = jwt.sign({ userId, role }, process.env.SECRET);
  res.json({ token });
});`}
        />
      </div>
    </section>
  </BorderCross>
));

HorizontalScalingSection.displayName = "HorizontalScalingSection";
