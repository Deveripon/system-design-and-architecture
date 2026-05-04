import React from "react";
import { TopicHeader } from "@/components/course/topic-header";
import { InfoBox } from "@/components/course/info-box";
import { CodeBlock } from "@/components/course/code-block";
import { CompareTable } from "@/components/course/compare-table";
import { ScenarioGrid, ScenarioCard } from "@/components/course/scenario-grid";
import { MCQ } from "@/components/course/mcq";
import { Assignment } from "@/components/course/assignment";
import { StepFlow } from "@/components/course/step-flow";
import { NextCTA } from "@/components/course/next-cta";

export default function ScalabilityPage() {
  return (
    <>
      <TopicHeader
        phase="Phase 1 — Foundations"
        topicNum="01"
        title="Scalability Fundamentals"
        time="৪৫-৬০ মিনিট"
        level="Junior Level"
        type="Architecture"
      />

      <section className="space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Why It Matters</h2>
          <p className="text-muted-foreground leading-relaxed">
            তুমি একটা app বানালে। শুরুতে ১০০ user। সব ঠিকঠাক চলছে। কিন্তু হঠাৎ TechCrunch এ feature হলো — ১০ লক্ষ user একসাথে ঢুকলো। Server crash। App down।
          </p>
          <p className="text-muted-foreground leading-relaxed">
            এই সমস্যার নাম হলো <strong>Scalability problem</strong>। একজন system engineer হিসেবে তোমাকে আগে থেকেই plan করতে হবে — <em>আমার system যদি ১০x, ১০০x, ১০০০x বড় হয়, তখনও কি এটা কাজ করবে?</em>
          </p>
        </div>

        <InfoBox variant="concept" title="Definition">
          <strong>Scalability</strong> হলো একটা system এর ক্ষমতা — বাড়তি load (users, data, requests) handle করার জন্য নিজেকে বড় করার ক্ষমতা, এবং performance ঠিক রাখার ক্ষমতা।
        </InfoBox>
      </section>

      <section className="mt-16 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Scale Up — বড় মেশিন কিনো</h2>
          <p className="text-muted-foreground leading-relaxed">
            Vertical scaling মানে তোমার existing server কে আরো powerful বানানো। বেশি RAM, বেশি CPU, বেশি storage।
          </p>
        </div>

        {/* Diagram Placeholder */}
        <div className="my-8 p-12 rounded-none border border-dashed border-border flex items-center justify-center bg-muted/20">
          <div className="text-center">
            <p className="font-mono text-xs text-muted-foreground uppercase tracking-widest mb-2">Diagram: Vertical Scaling</p>
            <p className="text-sm text-primary">SVG Diagram from reference goes here</p>
          </div>
        </div>

        <h3 className="text-lg font-bold">কখন Vertical Scaling সঠিক?</h3>
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

        <InfoBox variant="warning" title="Vertical Scaling এর সীমাবদ্ধতা">
          পৃথিবীর সবচেয়ে বড় single server এও limit আছে। AWS এর biggest instance (u-24tb1.metal) এর ৪৪৮ CPU, ২৪TB RAM — এর বেশি আর যাওয়া সম্ভব না। আর এই machine ঘণ্টায় $200+ এর বেশি।
        </InfoBox>
      </section>

      <section className="mt-16 space-y-6">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold">Scale Out — বেশি মেশিন যোগ করো</h2>
          <p className="text-muted-foreground leading-relaxed">
            Horizontal scaling মানে একটা বড় মেশিনের বদলে অনেকগুলো ছোট মেশিন ব্যবহার করা। Load টা সবার মধ্যে ভাগ হয়ে যায়।
          </p>
        </div>

        <InfoBox variant="tip" title="Key Insight">
          Horizontal scaling এর সবচেয়ে বড় সুবিধা হলো <strong>theoretically unlimited</strong> — তুমি যতখুশি server যোগ করতে পারো। Google, Facebook এর লক্ষ লক্ষ server এভাবেই কাজ করে।
        </InfoBox>

        <h3 className="text-lg font-bold">Stateless vs Stateful — গুরুত্বপূর্ণ পার্থক্য</h3>
        <p className="text-muted-foreground leading-relaxed">
          Horizontal scaling সফলভাবে করতে হলে তোমার servers কে <strong>stateless</strong> হতে হবে। মানে, যেকোনো server যেকোনো request handle করতে পারবে।
        </p>

        <CompareTable 
          headers={["বিষয়", "Stateless ✅", "Stateful ❌"]}
          rows={[
            ["Session data", "Redis/DB তে রাখো", "Server memory তে রাখো"],
            ["Scale করা যায়?", <span className="text-emerald-400 font-bold">সহজেই যায়</span>, <span className="text-red-400">কঠিন, sticky session লাগে</span>],
            ["Server crash হলে?", <span className="text-emerald-400 font-bold">অন্য server handle করে</span>, <span className="text-red-400">User এর session হারিয়ে যায়</span>],
            ["উদাহরণ", "REST API, JWT auth", "Server-side sessions"]
          ]}
        />

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
      </section>

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Vertical vs Horizontal — সম্পূর্ণ তুলনা</h2>
        <CompareTable 
          headers={["বিষয়", "Vertical Scaling", "Horizontal Scaling"]}
          rows={[
            ["সংজ্ঞা", "একটা মেশিন বড় করো", "বেশি মেশিন যোগ করো"],
            ["Cost", <span className="text-red-400">Exponentially বাড়ে</span>, <span className="text-emerald-400 font-bold">Linearly বাড়ে</span>],
            ["Limit আছে?", <span className="text-red-400">হ্যাঁ, hardware limit</span>, <span className="text-emerald-400 font-bold">না, unlimited</span>],
            ["Downtime লাগে?", <span className="text-red-400">হ্যাঁ, upgrade করতে</span>, <span className="text-emerald-400 font-bold">না, live এ add করা যায়</span>],
            ["Single point of failure", <span className="text-red-400">হ্যাঁ (risky)</span>, <span className="text-emerald-400 font-bold">না (fault tolerant)</span>],
            ["Code change লাগে?", "না", <span className="text-yellow-400">হ্যাঁ (stateless করতে হয়)</span>],
          ]}
        />

        <InfoBox variant="important" title="Interview Tip">
          "আমি সবসময় vertical scaling দিয়ে শুরু করবো কারণ এটা simpler। কিন্তু যখন hardware limit আসবে বা single point of failure acceptable না হবে, তখন horizontal scaling এ shift করবো।" — এটাই সঠিক industry approach।
        </InfoBox>
      </section>

      <MCQ 
        questions={[
          {
            id: 1,
            text: "একটি e-commerce app এর database server এর CPU usage ৯০% হয়ে গেছে। তুমি দ্রুততম সমাধান হিসেবে কী করবে?",
            options: [
              { key: "A", text: "আরও ৫টা application server যোগ করবো", isCorrect: false, explanation: "Application servers বাড়ালে database এর load আরও বাড়বে।" },
              { key: "B", text: "Database server এ বেশি CPU/RAM add করবো (Vertical Scale)", isCorrect: true, explanation: "Database এর CPU bottleneck এর জন্য দ্রুততম সমাধান হলো vertical scaling (বড় মেশিন)।" },
              { key: "C", text: "নতুন database software কিনবো", isCorrect: false, explanation: "Software change করা অনেক সময়ের ব্যাপার।" },
              { key: "D", text: "App এর code পুরো rewrite করবো", isCorrect: false, explanation: "এটা scalable solution হতে পারে কিন্তু 'দ্রুততম' না।" },
            ]
          },
          {
            id: 2,
            text: "Horizontal scaling সফলভাবে কাজ করার জন্য সবচেয়ে গুরুত্বপূর্ণ কোনটি?",
            options: [
              { key: "A", text: "সব server একই hardware হওয়া", isCorrect: false, explanation: "Hardware different হলেও সমস্যা নেই।" },
              { key: "B", text: "Load balancer ব্যবহার করা", isCorrect: false, explanation: "Load balancer দরকার কিন্তু application stateless না হলে সমস্যা হবে।" },
              { key: "C", text: "Application কে Stateless বানানো", isCorrect: true, explanation: "Stateless architecture ছাড়া horizontal scaling কাজ করবে না।" },
              { key: "D", text: "Database server বড় করা", isCorrect: false, explanation: "এটা vertical scaling এর অংশ।" },
            ]
          }
        ]}
      />

      <Assignment 
        title="Scaling Analysis"
        time="২-৩ ঘণ্টা"
        difficulty="Intermediate"
        tasks={[
          "<strong>Scenario Analysis:</strong> নিচের ৩টা company এর জন্য বলো কোনটা Vertical, কোনটা Horizontal scaling উপযুক্ত এবং কেন: (ক) ছোট startup এর blog site (খ) live cricket score app (গ) hospital patient database।",
          "<strong>Diagram Drawing:</strong> Users → Load Balancer → [3 Web Servers] → Database ডায়াগ্রাম আঁকো।",
          "<strong>Nginx Config:</strong> উপরের দেওয়া Nginx config টা পড়ো এবং explain করো।"
        ]}
        deliverables={[
          "Scenario analysis written answers",
          "Architecture diagram screenshot",
          "Nginx config explanation"
        ]}
      />

      <section className="mt-16 space-y-6">
        <h2 className="text-2xl font-bold">Hands-On Project Task</h2>
        <StepFlow 
          steps={[
            { title: "Docker install করো", description: "docker.com থেকে Docker Desktop install করো।" },
            { title: "Simple Node.js server বানাও", description: "server.js — শুধু 'Hello from Server X' return করবে।" },
            { title: "docker-compose.yml লেখো", description: "৩টা app service এবং ১টা nginx service define করো।" },
            { title: "Nginx config লেখো", description: "upstream block এ ৩টা server add করো।" },
            { title: "Test করো", description: "Browser এ localhost এ বারবার refresh করো।" },
          ]}
        />
      </section>

      <NextCTA href="/topic/networking" title="Networking Basics for Engineers" />
    </>
  );
}
