/* eslint-disable react/jsx-key */
'use client';

import React from "react";

// Sub-components
import { ScalabilityIntroduction } from "./scalability/introduction";
import { VerticalScalingSection } from "./scalability/vertical-scaling";
import { HorizontalScalingSection } from "./scalability/horizontal-scaling";
import { ComparisonSection, RealWorldSection, AdvancedScalingSection } from "./scalability/analysis";
import { LessonSummarySection } from "./scalability/summary";
import { KnowledgeCheckSection, AssignmentSection, PracticalLabSection } from "./scalability/assessment";

export function ScalabilityContent() {
  return (
    <div className="space-y-16">
      <ScalabilityIntroduction />
      <VerticalScalingSection />
      <HorizontalScalingSection />
      <ComparisonSection />
      <RealWorldSection />
      <AdvancedScalingSection />
      <LessonSummarySection />
      <KnowledgeCheckSection questions={mcqQuestions} />
      <AssignmentSection />
      <PracticalLabSection />
    </div>
  );
}

const mcqQuestions = [
  {
    id: 1,
    text: "একটি e-commerce app এর database server এর CPU usage ৯০% হয়ে গেছে। তুমি দ্রুততম সমাধান হিসেবে কী করবে?",
    options: [
      { key: "A", text: "আরও ৫টা application server যোগ করবো", isCorrect: false, explanation: "Application servers বাড়ালে database এর load আরও বাড়বে। Database horizontal scaling (sharding) complex এবং সময় লাগে।" },
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
      { key: "B", text: "Load balancer ব্যবহার করা", isCorrect: false, explanation: "Load balancer দরকার (B) কিন্তু সেটা sufficient না — stateful app এ sticky session এর সমস্যা হবে।" },
      { key: "C", text: "Application কে Stateless বানানো", isCorrect: true, explanation: "Stateless architecture ছাড়া horizontal scaling কাজ করবে না।" },
      { key: "D", text: "Database server বড় করা", isCorrect: false, explanation: "এটা vertical scaling এর অংশ।" },
    ]
  },
  {
    id: 3,
    text: "Stack Overflow মাত্র কয়েকটা server দিয়ে কোটি user handle করে। এর প্রধান কারণ কী?",
    options: [
      { key: "A", text: "তারা খুব সস্তা server ব্যবহার করে", isCorrect: false, explanation: "সস্তা server দিয়ে কাজ হয় না।" },
      { key: "B", text: "Read-heavy workload এবং heavy caching ব্যবহার", isCorrect: true, explanation: "Stack Overflow এর ৯৫%+ traffic হলো read (প্রশ্ন পড়া)। Read-heavy apps caching এর মাধ্যমে কম server দিয়েই বিশাল traffic handle করতে পারে।" },
      { key: "C", text: "তাদের user সংখ্যা আসলে কম", isCorrect: false, explanation: "user সংখ্যা আসলে অনেক।" },
      { key: "D", text: "তারা serverless ব্যবহার করে", isCorrect: false, explanation: "serverless ব্যবহার করে না।" },
    ]
  },
  {
    id: 4,
    text: "নিচের কোনটি Vertical Scaling এর সবচেয়ে বড় সমস্যা?",
    options: [
      { key: "A", text: "Setup করতে কঠিন", isCorrect: false, explanation: "Setup সহজ।" },
      { key: "B", text: "Load balancer দরকার হয়", isCorrect: false, explanation: "দরকার হয় না।" },
      { key: "C", text: "Code change করতে হয়", isCorrect: false, explanation: "করতে হয় না।" },
      { key: "D", text: "Hardware limit আছে এবং Single point of failure", isCorrect: true, explanation: "Vertical scaling এর দুটো critical সমস্যা: (১) পৃথিবীর সবচেয়ে বড় server এরও limit আছে। (২) একটাই server থাকায় সেটা down হলে পুরো app down — এটাই Single Point of Failure (SPOF)。" },
    ]
  },
  {
    id: 5,
    text: "একটি social media app এ user login করলে server memory তে session রাখা হয়। এই app কে horizontal scale করলে কী সমস্যা হবে?",
    options: [
      { key: "A", text: "User যদি ভিন্ন server এ যায় তাহলে logged out হয়ে যাবে", isCorrect: true, explanation: "এটাই stateful architecture এর classic problem। User এর session যে server এ আছে, পরের request অন্য server এ গেলে সেখানে session না পাওয়ায় user কে logged out মনে হবে।" },
      { key: "B", text: "Server বেশি RAM use করবে", isCorrect: false, explanation: "না।" },
      { key: "C", text: "Database slow হয়ে যাবে", isCorrect: false, explanation: "না।" },
      { key: "D", text: "Load balancer কাজ করবে না", isCorrect: false, explanation: "না।" },
    ]
  },
  {
    id: 6,
    text: "AWS Auto Scaling এর কাজ কী?",
    options: [
      { key: "A", text: "Automatically database backup নেওয়া", isCorrect: false, explanation: "না।" },
      { key: "B", text: "Code automatically deploy করা", isCorrect: false, explanation: "না।" },
      { key: "C", text: "Traffic অনুযায়ী automatically server সংখ্যা বাড়ানো-কমানো", isCorrect: true, explanation: "Auto Scaling group define করে min/max server সংখ্যা। Traffic spike handle করতে automatically instance বাড়ায়।" },
      { key: "D", text: "Server এর hardware upgrade করা", isCorrect: false, explanation: "না।" },
    ]
  },
  {
    id: 7,
    text: "একটা system এর web server গুলো fast কিন্তু database queries ৫ সেকেন্ড নিচ্ছে। আরও web server যোগ করলে কী হবে?",
    options: [
      { key: "A", text: "System অনেক fast হয়ে যাবে", isCorrect: false, explanation: "না।" },
      { key: "B", text: "Database এর উপর চাপ আরও বাড়বে, system আরও slow হবে", isCorrect: true, explanation: "Database bottleneck হলে web server বাড়ালে DB requests আরও বেড়ে যাবে, ফলে system আরও ধীর হবে।" },
      { key: "C", text: "Database automatically fast হয়ে যাবে", isCorrect: false, explanation: "না।" },
      { key: "D", text: "কিছুই পরিবর্তন হবে না", isCorrect: false, explanation: "না।" },
    ]
  },
  {
    id: 8,
    text: "JWT (JSON Web Token) ব্যবহার করলে horizontal scaling সহজ হয় কারণ —",
    options: [
      { key: "A", text: "JWT encryption খুব fast", isCorrect: false, explanation: "না।" },
      { key: "B", text: "JWT database এ রাখা হয়", isCorrect: false, explanation: "না।" },
      { key: "C", text: "JWT শুধু একটা server এ কাজ করে", isCorrect: false, explanation: "না।" },
      { key: "D", text: "JWT stateless — server কে কিছু store করতে হয় না, যেকোনো server verify করতে পারে", isCorrect: true, explanation: "JWT self-contained, তাই server এ state রাখতে হয় না। যেকোনো server secret key দিয়ে verify করতে পারে।" },
    ]
  },
  {
    id: 9,
    text: "Nginx load balancer এ Round Robin algorithm কীভাবে কাজ করে?",
    options: [
      { key: "A", text: "Requests একে একে সব server এ পাঠায় — 1→2→3→1→2→3...", isCorrect: true, explanation: "Round Robin সবচেয়ে simple algorithm যা circular order এ requests বন্টন করে।" },
      { key: "B", text: "सबसे कम busy server এ পাঠায়", isCorrect: false, explanation: "না।" },
      { key: "C", text: "User এর IP অনুযায়ী সবসময় একই server এ পাঠায়", isCorrect: false, explanation: "না।" },
      { key: "D", text: "Random server এ পাঠায়", isCorrect: false, explanation: "না।" },
    ]
  },
  {
    id: 10,
    text: "একটি banking app design করছো — ৫০০ concurrent users এবং ভবিষ্যতে ৫০,০০০ users হতে পারে। কোন approach নেবে?",
    options: [
      { key: "A", text: "এখনই ১০০টা server নিয়ে শুরু করো", isCorrect: false, explanation: "না।" },
      { key: "B", text: "Vertical scaling করতে থাকো, horizontal এর কথা পরে ভাববো", isCorrect: false, explanation: "না।" },
      { key: "C", text: "Stateless architecture দিয়ে শুরু করো, ছোট করে শুরু করো কিন্তু horizontal scale করার জন্য ready রাখো", isCorrect: true, explanation: "Pragmatic approach হলো শুরুতে ছোট শুরু করা কিন্তু stateless design রাখা যাতে পরে সহজেই horizontal scale করা যায়।" },
      { key: "D", text: "NoSQL database ব্যবহার করলেই scaling সমস্যা সমাধান হবে", isCorrect: false, explanation: "না।" },
    ]
  }
];
