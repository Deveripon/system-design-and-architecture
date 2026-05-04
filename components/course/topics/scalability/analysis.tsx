/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import { BorderCross } from '../../border-cross';
import { CodeBlock } from '../../code-block';
import { CompareTable } from '../../compare-table';
import { InfoBox } from '../../info-box';
import { SubHeader } from '../../sub-header';

export const ComparisonSection = React.memo(() => (
    <BorderCross className='p-10'>
        <section id='patterns' className='scroll-mt-20'>
            <SubHeader index='004' title='Deep Comparison' className='mb-8' />
            <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                Vertical vs Horizontal — সম্পূর্ণ তুলনা
            </h2>
            <CompareTable
                headers={['বিষয়', 'Vertical Scaling', 'Horizontal Scaling']}
                rows={[
                    ['সংজ্ঞা', 'একটা মেশিন বড় করো', 'বেশি মেশিন যোগ করো'],
                    [
                        'Cost',
                        <span className='text-red-400'>
                            Exponentially বাড়ে
                        </span>,
                        <span className='text-emerald-400 font-bold'>
                            Linearly বাড়ে
                        </span>,
                    ],
                    [
                        'Limit আছে?',
                        <span className='text-red-400'>
                            হ্যাঁ, hardware limit
                        </span>,
                        <span className='text-emerald-400 font-bold'>
                            না, unlimited
                        </span>,
                    ],
                    [
                        'Downtime লাগে?',
                        <span className='text-red-400'>
                            হ্যাঁ, upgrade করতে
                        </span>,
                        <span className='text-emerald-400 font-bold'>
                            না, live এ add করা যায়
                        </span>,
                    ],
                    [
                        'Single point of failure',
                        <span className='text-red-400'>হ্যাঁ (risky)</span>,
                        <span className='text-emerald-400 font-bold'>
                            না (fault tolerant)
                        </span>,
                    ],
                    [
                        'Code change লাগে?',
                        'না',
                        <span className='text-yellow-400'>
                            হ্যাঁ (stateless করতে হয়)
                        </span>,
                    ],
                    [
                        'কখন ব্যবহার করো',
                        'DB servers, quick fix',
                        'Web servers, API, large scale',
                    ],
                ]}
            />

            <div className='mt-12'>
                <InfoBox variant='important' title='Interview এ এটা বলো'>
                    &quot;আমি সবসময় vertical scaling দিয়ে শুরু করবো কারণ এটা
                    simpler। কিন্তু যখন hardware limit আসবে বা single point of
                    failure acceptable না হবে, তখন horizontal scaling এ shift
                    করবো।&quot; — এটাই সঠিক industry approach।
                </InfoBox>
            </div>
        </section>
    </BorderCross>
));

export const RealWorldSection = React.memo(() => (
    <BorderCross className='p-10'>
        <section id='realworld' className='scroll-mt-20'>
            <SubHeader index='005' title='Industry Cases' className='mb-8' />
            <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                Real World Analysis
            </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                <div className='space-y-4'>
                    <h3 className='text-lg font-bold flex items-center gap-2'>
                        🐦 Twitter এর গল্প
                    </h3>
                    <p className='text-muted-foreground leading-relaxed italic'>
                        ২০০৮ সালে Twitter Rails monolith ছিল — একটাই server।
                        ২০০৯ এর Oscars broadcast এ tweet storm এলো, সব crash।
                        তারপর তারা horizontal scaling + stateless architecture
                        তে গেলো। এখন হাজার হাজার server চলে।
                    </p>
                </div>

                <div className='space-y-4'>
                    <h3 className='text-lg font-bold flex items-center gap-2'>
                        📈 Stack Overflow এর ব্যতিক্রম
                    </h3>
                    <p className='text-muted-foreground leading-relaxed italic'>
                        Stack Overflow শুধু Vertical Scaling ব্যবহার করে এবং
                        মাত্র কয়েকটা server দিয়ে ১ কোটি+ daily user handle
                        করে। কারণ তাদের কাজ read-heavy (বেশিরভাগ লোক শুধু পড়ে,
                        লেখে কম) এবং heavy caching ব্যবহার করে।
                    </p>
                </div>
            </div>

            <div className='mt-12'>
                <InfoBox variant='tip' title='এটাই মূল শিক্ষা'>
                    &quot;Always horizontal scale&quot; — এটা ভুল। Use case বুঝে
                    decide করো। Stack Overflow মাত্র ৯টা web server দিয়ে বিশাল
                    traffic handle করে। কিন্তু Netflix এর ১০,০০০+ server দরকার।
                </InfoBox>
            </div>

            <h3 className='text-xl font-bold mt-16 mb-6'>Load Balancer কীভাবে কাজ করে (Quick Look)</h3>
            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                Horizontal scaling কাজ করে <strong>Load Balancer</strong> এর মাধ্যমে। Load Balancer incoming traffic নেয় এবং সব server এর মধ্যে ভাগ করে দেয়।
            </p>

            <CodeBlock
                language='nginx'
                filename='nginx.conf'
                code={`# Simple Nginx Load Balancer config
upstream backend {
    # Round Robin (default) — সব server এ সমান ট্র্যাফিক
    server 192.168.1.10:3000;
    server 192.168.1.11:3000;
    server 192.168.1.12:3000;
    
    # Health check — কোনো server down হলে automatically বাদ দাও
    keepalive 32;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`}
            />
        </section>
    </BorderCross>
));

export const AdvancedScalingSection = React.memo(() => (
    <BorderCross className='p-10'>
        <section className='scroll-mt-20'>
            <SubHeader index='006' title='Advanced Patterns' className='mb-8' />
            <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                Scaling Patterns যা জানতে হবে
            </h2>

            <h3 className='text-xl font-bold mb-6'>
                1. Database Scaling Problem
            </h3>
            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                Web servers horizontal scale করা সহজ। কিন্তু database? সব server তো একই DB তে লিখছে!
            </p>
            <CompareTable
                headers={['Approach', 'কীভাবে কাজ করে', 'কখন ব্যবহার করো']}
                rows={[
                    [
                        'Read Replica',
                        'Write → Master, Read → Replica',
                        'Read-heavy apps (blogs, news)',
                    ],
                    [
                        'Database Sharding',
                        'Data টুকরো টুকরো করে ভাগ করো',
                        'Massive data (billions of rows)',
                    ],
                    [
                        'Caching Layer',
                        'Redis/Memcached দিয়ে DB hit কমাও',
                        'সবসময় (DB এর সামনে cache রাখো)',
                    ],
                ]}
            />

            <h3 className='text-xl font-bold mt-16 mb-6'>2. The Bottleneck Rule</h3>
            <div className='mb-12'>
                <InfoBox variant='concept' title='📌 Core Principle'>
                    System সবসময় তার সবচেয়ে slow component এর speed এ চলে।
                    তুমি ১০০০ web server দিলেও যদি database slow থাকে, পুরো
                    system slow।{' '}
                    <strong>Bottleneck খোঁজো, সেটা fix করো।</strong>
                </InfoBox>
            </div>

            <h3 className='text-xl font-bold mt-16 mb-6'>3. Auto-Scaling</h3>
            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                Modern cloud এ (AWS, GCP) তুমি auto-scaling set করতে পারো। Traffic বাড়লে automatically নতুন server আসবে, কমলে চলে যাবে। এতে cost optimize হয়।
            </p>
            <CodeBlock
                language='bash'
                filename='auto-scaling.sh'
                code={`# AWS Auto Scaling Group তৈরি করা
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name "my-app-asg" \\
  --min-size 2 \\        # সবসময় minimum 2 server
  --max-size 20 \\       # maximum 20 server পর্যন্ত বাড়াও
  --desired-capacity 3  # শুরুতে 3 server

# Scaling Policy: CPU > 70% হলে নতুন server যোগ করো
aws autoscaling put-scaling-policy \\
  --policy-name "scale-out" \\
  --scaling-adjustment 2 \\  # 2টা server যোগ করো
  --adjustment-type ChangeInCapacity`}
            />
        </section>
    </BorderCross>
));

ComparisonSection.displayName = 'ComparisonSection';
RealWorldSection.displayName = 'RealWorldSection';
AdvancedScalingSection.displayName = 'AdvancedScalingSection';

