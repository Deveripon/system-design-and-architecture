/* eslint-disable react/jsx-key */
import {
    HorizontalScalingDiagram,
    VerticalScalingDiagram,
} from '../../../components/course/topics/scalability/diagrams';
import {
    CONTENT_TYPES,
    INFO_BOX_VARIANTS,
    TopicData,
} from '../../../types/content';

export const scalabilityContent: TopicData = {
    id: 'scalability',
    sections: [
        {
            id: 'intro-concept',
            subHeader: { index: '001', title: 'Introduction' },
            title: (
                <span className='font-heading'>SCALABILITY কেন শিখতে হবে?</span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <div className='space-y-6'>
                            <p className='text-muted-foreground leading-relaxed text-lg'>
                                ধরুন আপনি একটা অ্যাপ বানালেনন। শুরুতে ১০০ ইউজার। সব ঠিকঠাক
                                চলছে। কিন্তু হঠাৎ TechCrunch এ feature হলো — ১০
                                লক্ষ ইউজার একসাথে ঢুকলো। Server crash। App down।
                            </p>
                            <p className='text-muted-foreground leading-relaxed text-lg'>
                                এই সমস্যার নাম হলো{' '}
                                <strong className='text-foreground'>
                                    Scalability problem
                                </strong>
                                । একজন system engineer হিসেবে আপনাকে আগে থেকেই
                                plan করতে হবে — আমার system যদি ১০x, ১০০x, ১০০০x
                                বড় হয়, তখনও কি এটা কাজ করবেন?
                            </p>
                        </div>
                    ),
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.CONCEPT,
                    title: 'DEFINITION',
                    content: (
                        <p>
                            <strong>Scalability</strong> হলো একটা system এর
                            ক্ষমতা — বাড়তি load (users, data, requests) handle
                            করার জন্য নিজেকে বড় করার ক্ষমতা, এবং performance ঠিক
                            রাখার ক্ষমতা।
                        </p>
                    ),
                },
            ],
        },
        {
            id: 'vertical',
            subHeader: { index: '002', title: 'Vertical Scaling' },
            title: (
                <span className='font-heading'>Scale Up — বড় মেশিন কিনো</span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <p className='text-muted-foreground leading-relaxed mb-10 text-lg'>
                            Vertical scaling মানে আপনার existing server কে আরো
                            powerful বানানো। বেশি RAM, বেশি CPU, বেশি storage।
                        </p>
                    ),
                },
                {
                    type: CONTENT_TYPES.CUSTOM,
                    component: <VerticalScalingDiagram />,
                },
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <>
                            <h3 className='text-xs font-mono font-bold uppercase tracking-[0.3em] text-blue-400 mb-10 mt-20'>
                                কখন Vertical Scaling সঠিক?
                            </h3>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-0 border border-border'>
                                <div className='p-8 border-r border-border bg-card/30'>
                                    <h4 className='font-bold text-foreground mb-4 flex items-center gap-3 font-mono uppercase tracking-widest text-[10px]'>
                                        <span className='w-1.5 h-1.5 bg-blue-500' />
                                        CASE{' '}
                                        <span className='text-emerald-400'>
                                            ✅ ভালো situation
                                        </span>
                                    </h4>
                                    <p className='text-sm text-muted-foreground leading-relaxed'>
                                        Database server — PostgreSQL, MySQL।
                                        Single-threaded workload। Code change
                                        করা সম্ভব না। Quick fix দরকার।
                                    </p>
                                </div>
                                <div className='p-8 bg-card/30'>
                                    <h4 className='font-bold text-foreground mb-4 flex items-center gap-3 font-mono uppercase tracking-widest text-[10px]'>
                                        <span className='w-1.5 h-1.5 bg-blue-500' />
                                        CASE{' '}
                                        <span className='text-red-400'>
                                            ❌ খারাপ situation
                                        </span>
                                    </h4>
                                    <p className='text-sm text-muted-foreground leading-relaxed'>
                                        Already সবচেয়ে বড় machine কিনে ফেলেছো।
                                        Hardware limit আছে। Cost অনেক বেশি।
                                        Single point of failure।
                                    </p>
                                </div>
                            </div>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.WARNING,
                    title: 'VERTICAL SCALING এর সীমাবদ্ধতা',
                    content: (
                        <p className='text-lg leading-relaxed'>
                            পৃথিবীর সবচেয়ে বড় single server এও limit আছে। AWS
                            এর biggest instance (u-24tb1.metal) এর ৪৪৮ CPU, ২৪TB
                            RAM — এর বেশি আর যাওয়া সম্ভব না। আর এই machine
                            ঘণ্টায় $200+ এর বেশি।
                        </p>
                    ),
                },
            ],
        },
        {
            id: 'horizontal',
            subHeader: { index: '003', title: 'Horizontal Scaling' },
            title: (
                <span className='font-heading'>
                    Scale Out — বেশি মেশিন যোগ করুন
                </span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <p className='text-muted-foreground leading-relaxed mb-10 text-lg'>
                            Horizontal scaling মানে একটা বড় মেশিনের বদলে
                            অনেকগুলো ছোট মেশিন ব্যবহার করা। Load টা সবার মধ্যে
                            ভাগ হয়ে যায়।
                        </p>
                    ),
                },
                {
                    type: CONTENT_TYPES.CUSTOM,
                    component: <HorizontalScalingDiagram />,
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.TIP,
                    title: 'Key Insight',
                    content: (
                        <>
                            Horizontal scaling এর সবচেয়ে বড় সুবিধা হলো{' '}
                            <strong>theoretically unlimited</strong> — আপনি
                            যতখুশি server যোগ করতে পারেন। Google, Facebook এর
                            লক্ষ লক্ষ server এভাবেই কাজ করে।
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <>
                            <h3 className='text-xl font-bold mt-16 mb-6'>
                                Stateless vs Stateful — গুরুত্বপূর্ণ পার্থক্য
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                                Horizontal scaling সফলভাবে করতে হলে আপনার
                                servers কে <strong>stateless</strong> হতে হবে।
                                মানে, যেকোনো server যেকোনো request handle করতে
                                পারবেন।
                            </p>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.COMPARE_TABLE,
                    headers: ['বিষয়', 'Stateless ✅', 'Stateful ❌'],
                    rows: [
                        [
                            'Session data',
                            'Redis/DB তে রাখুন',
                            'Server memory তে রাখুন',
                        ],
                        [
                            'Scale করা যায়?',
                            <span className='text-emerald-400 font-bold uppercase tracking-tight'>
                                সহজেই যায়
                            </span>,
                            <span className='text-red-400 uppercase tracking-tight'>
                                কঠিন, sticky session লাগে
                            </span>,
                        ],
                        [
                            'Server crash হলে?',
                            <span className='text-emerald-400 font-bold uppercase tracking-tight'>
                                অন্য server handle করে
                            </span>,
                            <span className='text-red-400 uppercase tracking-tight'>
                                User এর session হারিয়ে যায়
                            </span>,
                        ],
                        [
                            'উদাহরণ',
                            'REST API, JWT auth',
                            'Server-side sessions',
                        ],
                    ],
                },
                {
                    type: CONTENT_TYPES.CODE_BLOCK,
                    language: 'javascript',
                    filename: 'stateless-auth.js',
                    code: `// ❌ STATEFUL — এটা করুন না (horizontal scaling এ সমস্যা)
const sessions = {}; // Server memory তে session রাখা = BAD

app.post('/login', (req, res) => {
  sessions[userId] = { loggedIn: true, cart: [...] };
  // User 2nd request করলেন অন্য server এ গেলে session নেই!
});

// ✅ STATELESS — এটা করুন (horizontal scaling এর জন্য ready)
const redis = require('redis');
const jwt = require('jsonwebtoken');

app.post('/login', async (req, res) => {
  // Session Redis এ রাখুন — যেকোনো server access করতে পারবেন
  await redis.set(\`session:\${userId}\`, JSON.stringify(sessionData));
  
  // অথবা JWT use করুন — server এ কিছুই রাখতে হবে না
  const token = jwt.sign({ userId, role }, process.env.SECRET);
  res.json({ token });
});`,
                },
            ],
        },
        {
            id: 'patterns',
            subHeader: { index: '004', title: 'Deep Comparison' },
            title: (
                <span className='font-heading'>
                    Vertical vs Horizontal — সম্পূর্ণ তুলনা
                </span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.COMPARE_TABLE,
                    headers: [
                        'বিষয়',
                        'Vertical Scaling',
                        'Horizontal Scaling',
                    ],
                    rows: [
                        ['সংজ্ঞা', 'একটা মেশিন বড় করুন', 'বেশি মেশিন যোগ করুন'],
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
                            'কখন ব্যবহার করুন',
                            'DB servers, quick fix',
                            'Web servers, API, large scale',
                        ],
                    ],
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.IMPORTANT,
                    title: 'Interview এ এটা বলুন',
                    content: (
                        <>
                            &quot;আমি সবসময় vertical scaling দিয়ে শুরু করবো
                            কারণ এটা simpler। কিন্তু যখন hardware limit আসবেন বা
                            single point of failure acceptable না হবে, তখন
                            horizontal scaling এ shift করবো।&quot; — এটাই সঠিক
                            industry approach।
                        </>
                    ),
                },
            ],
        },
        {
            id: 'realworld',
            subHeader: { index: '005', title: 'Industry Cases' },
            title: (
                <span className='font-heading'>
                    Real World <span className='italic'>Analysis</span>
                </span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
                            <div className='space-y-4'>
                                <h3 className='text-lg font-bold flex items-center gap-2'>
                                    🐦 Twitter এর গল্প
                                </h3>
                                <p className='text-muted-foreground leading-relaxed italic'>
                                    ২০০৮ সালে Twitter Rails monolith ছিল — একটাই
                                    server। ২০০৯ এর Oscars broadcast এ tweet
                                    storm এলো, সব crash। তারপর তারা horizontal
                                    scaling + stateless architecture তে গেলো।
                                    এখন হাজার হাজার server চলে।
                                </p>
                            </div>

                            <div className='space-y-4'>
                                <h3 className='text-lg font-bold flex items-center gap-2'>
                                    📈 Stack Overflow এর ব্যতিক্রম
                                </h3>
                                <p className='text-muted-foreground leading-relaxed italic'>
                                    Stack Overflow শুধু Vertical Scaling ব্যবহার
                                    করে এবং মাত্র কয়েকটা server দিয়ে ১ কোটি+
                                    daily user handle করে। কারণ তাদের কাজ
                                    read-heavy (বেশিরভাগ লোক শুধু পড়ে, লেখে কম)
                                    এবং heavy caching ব্যবহার করে।
                                </p>
                            </div>
                        </div>
                    ),
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.TIP,
                    title: 'এটাই মূল শিক্ষা',
                    content: (
                        <>
                            &quot;Always horizontal scale&quot; — এটা ভুল। Use
                            case বুঝে decide করুন। Stack Overflow মাত্র ৯টা web
                            server দিয়ে বিশাল traffic handle করে। কিন্তু
                            Netflix এর ১০,০০০+ server দরকার।
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <>
                            <h3 className='text-xl font-bold mt-16 mb-6'>
                                Load Balancer কীভাবে কাজ করে (Quick Look)
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                                Horizontal scaling কাজ করে{' '}
                                <strong>Load Balancer</strong> এর মাধ্যমে। Load
                                Balancer incoming traffic নেয় এবং সব server এর
                                মধ্যে ভাগ করে দেয়।
                            </p>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.CODE_BLOCK,
                    language: 'nginx',
                    filename: 'nginx.conf',
                    code: `# Simple Nginx Load Balancer config
upstream backend {
    # Round Robin (default) — সব server এ সমান ট্র্যাফিক
    server 192.168.1.10:3000;
    server 192.168.1.11:3000;
    server 192.168.1.12:3000;
    
    # Health check — কোনো server down হলে automatically বাদ দিন
    keepalive 32;
}

server {
    listen 80;
    
    location / {
        proxy_pass http://backend;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
    }
}`,
                },
            ],
        },
        {
            id: 'advanced',
            subHeader: { index: '006', title: 'Advanced Patterns' },
            title: (
                <span className='font-heading'>
                    Scaling Patterns যা জানতে হবে
                </span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <>
                            <h3 className='text-xl font-bold mb-6'>
                                1. Database Scaling Problem
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                                Web servers horizontal scale করা সহজ। কিন্তু
                                database? সব server তো একই DB তে লিখছে!
                            </p>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.COMPARE_TABLE,
                    headers: ['Approach', 'কীভাবে কাজ করে', 'কখন ব্যবহার করুন'],
                    rows: [
                        [
                            'Read Replica',
                            'Write → Master, Read → Replica',
                            'Read-heavy apps (blogs, news)',
                        ],
                        [
                            'Database Sharding',
                            'Data টুকরুন টুকরুন করে ভাগ করুন',
                            'Massive data (billions of rows)',
                        ],
                        [
                            'Caching Layer',
                            'Redis/Memcached দিয়ে DB hit কমাও',
                            'সবসময় (DB এর সামনে cache রাখুন)',
                        ],
                    ],
                },
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <h3 className='text-xl font-bold mt-16 mb-6'>
                            2. The Bottleneck Rule
                        </h3>
                    ),
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.CONCEPT,
                    title: '📌 Core Principle',
                    content: (
                        <>
                            System সবসময় তার সবচেয়ে slow component এর speed এ
                            চলে। আপনি ১০০০ web server দিলেও যদি database slow
                            থাকে, পুরো system slow।{' '}
                            <strong>Bottleneck খুঁজুন, সেটা fix করুন।</strong>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <>
                            <h3 className='text-xl font-bold mt-16 mb-6'>
                                3. Auto-Scaling
                            </h3>
                            <p className='text-muted-foreground leading-relaxed mb-8 text-lg'>
                                Modern cloud এ (AWS, GCP) আপনি auto-scaling set
                                করতে পারেন। Traffic বাড়লে automatically নতুন
                                server আসবেন, কমলে চলে যাবেন। এতে cost optimize
                                হয়।
                            </p>
                        </>
                    ),
                },
                {
                    type: CONTENT_TYPES.CODE_BLOCK,
                    language: 'bash',
                    filename: 'auto-scaling.sh',
                    code: `# AWS Auto Scaling Group তৈরি করা
aws autoscaling create-auto-scaling-group \\
  --auto-scaling-group-name "my-app-asg" \\
  --min-size 2 \\        # সবসময় minimum 2 server
  --max-size 20 \\       # maximum 20 server পর্যন্ত বাড়াও
  --desired-capacity 3  # শুরুতে 3 server

# Scaling Policy: CPU > 70% হলে নতুন server যোগ করুন
aws autoscaling put-scaling-policy \\
  --policy-name "scale-out" \\
  --scaling-adjustment 2 \\  # 2টা server যোগ করুন
  --adjustment-type ChangeInCapacity`,
                },
            ],
        },
    ],
    summary: {
        headers: ['Concept', 'এক লাইনে'],
        rows: [
            [
                <span className='font-bold text-primary'>Scalability</span>,
                'বাড়তি load handle করার ক্ষমতা',
            ],
            [
                <span className='font-bold text-primary'>
                    Vertical Scaling
                </span>,
                'বড় মেশিন কিনো, সহজ কিন্তু limit আছে',
            ],
            [
                <span className='font-bold text-primary'>
                    Horizontal Scaling
                </span>,
                'বেশি মেশিন যোগ করুন, unlimited কিন্তু stateless দরকার',
            ],
            [
                <span className='font-bold text-primary'>Stateless</span>,
                'যেকোনো server যেকোনো request handle করতে পারে',
            ],
            [
                <span className='font-bold text-primary'>Load Balancer</span>,
                'Traffic সব server এ ভাগ করে দেয়',
            ],
            [
                <span className='font-bold text-primary'>Bottleneck</span>,
                'System এর সবচেয়ে slow part — সেটাই fix করুন আগে',
            ],
        ],
    },
    knowledgeCheck: {
        questions: [
            {
                id: 1,
                text: 'একটি e-commerce app এর database server এর CPU usage ৯০% হয়ে গেছে। আপনি দ্রুততম সমাধান হিসেবে কী করবেন?',
                options: [
                    {
                        key: 'A',
                        text: 'আরও ৫টা application server যোগ করবো',
                        isCorrect: false,
                        explanation:
                            'Application servers বাড়ালে database এর load আরও বাড়বে। Database horizontal scaling (sharding) complex এবং সময় লাগে।',
                    },
                    {
                        key: 'B',
                        text: 'Database server এ বেশি CPU/RAM add করবো (Vertical Scale)',
                        isCorrect: true,
                        explanation:
                            'Database এর CPU bottleneck এর জন্য দ্রুততম সমাধান হলো vertical scaling (বড় মেশিন)।',
                    },
                    {
                        key: 'C',
                        text: 'নতুন database software কিনবো',
                        isCorrect: false,
                        explanation: 'Software change করা অনেক সময়ের ব্যাপার।',
                    },
                    {
                        key: 'D',
                        text: 'App এর code পুরো rewrite করবো',
                        isCorrect: false,
                        explanation:
                            "এটা scalable solution হতে পারে কিন্তু 'দ্রুততম' না।",
                    },
                ],
            },
            {
                id: 2,
                text: 'Horizontal scaling সফলভাবে কাজ করার জন্য সবচেয়ে গুরুত্বপূর্ণ কোনটি?',
                options: [
                    {
                        key: 'A',
                        text: 'সব server একই hardware হওয়া',
                        isCorrect: false,
                        explanation: 'Hardware different হলেও সমস্যা নেই।',
                    },
                    {
                        key: 'B',
                        text: 'Load balancer ব্যবহার করা',
                        isCorrect: false,
                        explanation:
                            'Load balancer দরকার (B) কিন্তু সেটা sufficient না — stateful app এ sticky session এর সমস্যা হবে।',
                    },
                    {
                        key: 'C',
                        text: 'Application কে Stateless বানানো',
                        isCorrect: true,
                        explanation:
                            'Stateless architecture ছাড়া horizontal scaling কাজ করবেন না।',
                    },
                    {
                        key: 'D',
                        text: 'Database server বড় করা',
                        isCorrect: false,
                        explanation: 'এটা vertical scaling এর অংশ।',
                    },
                ],
            },
            {
                id: 3,
                text: 'Stack Overflow মাত্র কয়েকটা server দিয়ে কোটি user handle করে। এর প্রধান কারণ কী?',
                options: [
                    {
                        key: 'A',
                        text: 'তারা খুব সস্তা server ব্যবহার করে',
                        isCorrect: false,
                        explanation: 'সস্তা server দিয়ে কাজ হয় না।',
                    },
                    {
                        key: 'B',
                        text: 'Read-heavy workload এবং heavy caching ব্যবহার',
                        isCorrect: true,
                        explanation:
                            'Stack Overflow এর ৯৫%+ traffic হলো read (প্রশ্ন পড়া)। Read-heavy apps caching এর মাধ্যমে কম server দিয়েই বিশাল traffic handle করতে পারে।',
                    },
                    {
                        key: 'C',
                        text: 'তাদের user সংখ্যা আসলে কম',
                        isCorrect: false,
                        explanation: 'user সংখ্যা আসলে অনেক।',
                    },
                    {
                        key: 'D',
                        text: 'তারা serverless ব্যবহার করে',
                        isCorrect: false,
                        explanation: 'serverless ব্যবহার করে না।',
                    },
                ],
            },
        ],
    },
    assignment: {
        title: 'Scaling Analysis & Strategy',
        time: '২-৩ ঘণ্টা',
        difficulty: 'Junior Level',
        tasks: [
            <span key='1'>
                <strong>Scenario Analysis:</strong> নিচের ৩টা company এর জন্য
                বলুন কোনটা Vertical, কোনটা Horizontal scaling উপযুক্ত এবং কেন:
                (ক) একটি ছোট startup এর blog site — ১,০০০ daily users (খ) একটি
                live cricket score app — match এর সময় ১০ লক্ষ concurrent users
                (গ) একটি hospital এর patient database — ৫০০ internal users।
            </span>,
            <span key='2'>
                <strong>Diagram Drawing:</strong> Excalidraw (excalidraw.com) বা
                draw.io ব্যবহার করে একটা horizontal scaling architecture diagram
                আঁকুন — Users → Load Balancer → [3 Web Servers] → Database। লেবেল
                দিন প্রতিটা component এ।
            </span>,
            <span key='3'>
                <strong>Code Reading:</strong> উপরে দেওয়া Nginx config টা পড়ো
                এবং explain করুন: (ক) <code>upstream backend</code> block কী করে?
                (খ) যদি ১২টা server থাকে সেটা কীভাবে add করবেন? (গ) একটা server
                down হলে কী হবে?
            </span>,
            <span key='4'>
                <strong>Research Task:</strong> Google করে বের করুন — Netflix
                কতটা server ব্যবহার করে এবং তারা কোন cloud provider ব্যবহার করে।
                ৩-৪ লাইনে লিখুন。
            </span>,
            <span key='5'>
                <strong>Reflection:</strong> আপনি এখন যে company তে কাজ করুন বা
                পরিচিত কোনো app — সেটা কীভাবে scale করে বলে আপনার মনে হয়? ৫
                লাইন লিখুন।
            </span>,
        ],
        deliverables: [
            <span key='1'>Scenario analysis এর written answers</span>,
            <span key='2'>Architecture diagram (screenshot বা file)</span>,
            <span key='3'>Nginx config এর explanation (নিজের ভাষায়)</span>,
            <span key='4'>Netflix research summary</span>,
            <span key='5'>Personal reflection note</span>,
        ],
    },
    practicalLab: {
        title: 'Hands-On Project Task',
        subtitle: 'Mini Load Balancer Setup (Docker)',
        steps: [
            {
                title: 'Docker install করুন',
                description:
                    'docker.com থেকে Docker Desktop install করুন। Windows/Mac/Linux সব সাপোর্ট করে।',
            },
            {
                title: 'Simple Node.js server বানান',
                description:
                    'server.js — শুধু "Hello from Server X" return করবেন, X হবে server এর নাম।',
            },
            {
                title: 'docker-compose.yml লিখুন',
                description:
                    '৩টা app service এবং ১টা nginx service define করুন।',
            },
            {
                title: 'Nginx config লিখুন',
                description: 'upstream block এ ৩টা server add করুন।',
            },
            {
                title: 'Test করুন',
                description:
                    'Browser এ localhost এ বারবার refresh করুন — দেখুন কোন server respond করছে।',
            },
            {
                title: 'Bonus: একটা server kill করুন',
                description:
                    'docker stop দিয়ে একটা server বন্ধ করুন। দেখুন অন্য দুটো তখন কাজ করছে কিনা।',
            },
        ],
        codeBlock: {
            language: 'yaml',
            filename: 'docker-compose.yml',
            code: `version: '3'
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
      SERVER_NAME: "Server-3"`,
        },
        tip: 'Theoretical না — actually দেখবেন Load Balancer কীভাবে traffic ভাগ করে। একটা server kill করলেন দেখবেন system তখনও চলছে। এটাই horizontal scaling এর power।',
    },
};

