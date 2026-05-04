/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { ChevronDown } from 'lucide-react';
import React from 'react';
import { Assignment } from '../../assignment';
import { BorderCross } from '../../border-cross';
import { CodeBlock } from '../../code-block';
import { InfoBox } from '../../info-box';
import { MCQ } from '../../mcq';
import { StepFlow } from '../../step-flow';
import { SubHeader } from '../../sub-header';

export const KnowledgeCheckSection = React.memo(
    ({ questions }: { questions: any[] }) => {
        const [isExpanded, setIsExpanded] = React.useState(false);

        return (
            <BorderCross className='p-10'>
                <section id='mcq' className='scroll-mt-20'>
                    <div
                        className='flex items-center justify-between cursor-pointer group'
                        onClick={() => setIsExpanded(!isExpanded)}>
                        <SubHeader index='008' title='Knowledge Check' />
                        <button className='flex items-center gap-2 px-4 py-2 border border-border bg-muted/5 group-hover:bg-muted/20 group-hover:border-primary/50 transition-all font-mono text-[10px] uppercase tracking-widest text-muted-foreground'>
                            {isExpanded ? 'Hide Quiz' : 'Take Quiz'}
                            <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                            />
                        </button>
                    </div>

                    {isExpanded && (
                        <div className=' animate-in fade-in slide-in-from-top-4 duration-300'>
                            <MCQ questions={questions} />
                        </div>
                    )}
                </section>
            </BorderCross>
        );
    }
);

export const AssignmentSection = React.memo(() => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <BorderCross className='p-10'>
            <section id='assignment' className='scroll-mt-20'>
                <div
                    className='flex items-center justify-between cursor-pointer group'
                    onClick={() => setIsExpanded(!isExpanded)}>
                    <SubHeader index='009' title='Assignment & Homework' />
                    <button className='flex items-center gap-2 px-4 py-2 border border-border bg-muted/5 group-hover:bg-muted/20 group-hover:border-primary/50 transition-all font-mono text-[10px] uppercase tracking-widest text-muted-foreground'>
                        {isExpanded ? 'Hide Details' : 'View Details'}
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {isExpanded && (
                    <div className='mt-12 animate-in fade-in slide-in-from-top-4 duration-300'>
                        <Assignment
                            title='Scaling Analysis & Strategy'
                            time='২-৩ ঘণ্টা'
                            difficulty='Junior Level'
                            tasks={[
                                '<strong>Scenario Analysis:</strong> নিচের ৩টা company এর জন্য বলো কোনটা Vertical, কোনটা Horizontal scaling উপযুক্ত এবং কেন: (ক) একটি ছোট startup এর blog site — ১,০০০ daily users (খ) একটি live cricket score app — match এর সময় ১০ লক্ষ concurrent users (গ) একটি hospital এর patient database — ৫০০ internal users।',
                                '<strong>Diagram Drawing:</strong> Excalidraw (excalidraw.com) বা draw.io ব্যবহার করে একটা horizontal scaling architecture diagram আঁকো — Users → Load Balancer → [3 Web Servers] → Database। লেবেল দাও প্রতিটা component এ।',
                                '<strong>Code Reading:</strong> উপরে দেওয়া Nginx config টা পড়ো এবং explain করো: (ক) <code>upstream backend</code> block কী করে? (খ) যদি ১২টা server থাকে সেটা কীভাবে add করবে? (গ) একটা server down হলে কী হবে?',
                                '<strong>Research Task:</strong> Google করে বের করো — Netflix কতটা server ব্যবহার করে এবং তারা কোন cloud provider ব্যবহার করে। ৩-৪ লাইনে লেখো。',
                                '<strong>Reflection:</strong> তুমি এখন যে company তে কাজ করো বা পরিচিত কোনো app — সেটা কীভাবে scale করে বলে তোমার মনে হয়? ৫ লাইন লেখো।',
                            ]}
                            deliverables={[
                                'Scenario analysis এর written answers',
                                'Architecture diagram (screenshot বা file)',
                                'Nginx config এর explanation (নিজের ভাষায়)',
                                'Netflix research summary',
                                'Personal reflection note',
                            ]}
                        />
                    </div>
                )}
            </section>
        </BorderCross>
    );
});

export const PracticalLabSection = React.memo(() => {
    const [isExpanded, setIsExpanded] = React.useState(false);

    return (
        <BorderCross className='p-10'>
            <section id='project' className='scroll-mt-20'>
                <div
                    className='flex items-center justify-between cursor-pointer group'
                    onClick={() => setIsExpanded(!isExpanded)}>
                    <SubHeader index='010' title='Practical Lab' />
                    <button className='flex items-center gap-2 px-4 py-2 border border-border bg-muted/5 group-hover:bg-muted/20 group-hover:border-primary/50 transition-all font-mono text-[10px] uppercase tracking-widest text-muted-foreground'>
                        {isExpanded ? 'Hide Lab' : 'Start Lab'}
                        <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                        />
                    </button>
                </div>

                {isExpanded && (
                    <div className='mt-12 animate-in fade-in slide-in-from-top-4 duration-300'>
                        <div className='border border-border bg-card overflow-hidden'>
                            <div className='p-10 border-b border-border bg-emerald-500/10 flex items-center gap-4'>
                                <span className='text-3xl'>🚀</span>
                                <h2 className='text-2xl font-black uppercase tracking-tighter text-emerald-500 leading-none'>
                                    Hands-On Project Task
                                </h2>
                            </div>
                            <div className='p-10'>
                                <p className='text-muted-foreground mb-8 text-sm font-mono uppercase tracking-widest'>
                                    Mini Load Balancer Setup (Docker)
                                </p>

                                <StepFlow
                                    steps={[
                                        {
                                            title: 'Docker install করো',
                                            description:
                                                'docker.com থেকে Docker Desktop install করো। Windows/Mac/Linux সব সাপোর্ট করে।',
                                        },
                                        {
                                            title: 'Simple Node.js server বানাও',
                                            description:
                                                'server.js — শুধু "Hello from Server X" return করবে, X হবে server এর নাম।',
                                        },
                                        {
                                            title: 'docker-compose.yml লেখো',
                                            description:
                                                '৩টা app service এবং ১টা nginx service define করো।',
                                        },
                                        {
                                            title: 'Nginx config লেখো',
                                            description:
                                                'upstream block এ ৩টা server add করো।',
                                        },
                                        {
                                            title: 'Test করো',
                                            description:
                                                'Browser এ localhost এ বারবার refresh করো — দেখো কোন server respond করছে।',
                                        },
                                        {
                                            title: 'Bonus: একটা server kill করো',
                                            description:
                                                'docker stop দিয়ে একটা server বন্ধ করো। দেখো অন্য দুটো তখন কাজ করছে কিনা।',
                                        },
                                    ]}
                                />

                                <div className='mt-8'>
                                    <CodeBlock
                                        language='yaml'
                                        filename='docker-compose.yml'
                                        code={`version: '3'
services:
  nginx:
    image: nginx:alpine
    ports: ["80:80"]
    volumes: ["./nginx.conf:/etc/nginx/nginx.conf"]
    depends_on: [app1, app2, app3]

  app1:
    build: .
    environment:
      SERVER_NAME: "Server-1"

  app2:
    build: .
    environment:
      SERVER_NAME: "Server-2"

  app3:
    build: .
    environment:
      SERVER_NAME: "Server-3"`}
                                    />
                                </div>

                                <div className='mt-8'>
                                    <InfoBox variant='tip' title='Pro Tip'>
                                        Theoretical না — actually দেখবে Load
                                        Balancer কীভাবে traffic ভাগ করে। একটা
                                        server kill করলে দেখবে system তখনও চলছে।
                                        এটাই horizontal scaling এর power।
                                    </InfoBox>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </BorderCross>
    );
});

KnowledgeCheckSection.displayName = 'KnowledgeCheckSection';
AssignmentSection.displayName = 'AssignmentSection';
PracticalLabSection.displayName = 'PracticalLabSection';

