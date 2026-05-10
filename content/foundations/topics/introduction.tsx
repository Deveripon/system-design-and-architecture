import Image from 'next/image';
import {
    CONTENT_TYPES,
    INFO_BOX_VARIANTS,
    TopicData,
} from '../../../types/content';

export const introductionContent: TopicData = {
    id: 'introduction',
    introduction: {
        badge: 'INTRODUCTION',
        title: (
            <span className='font-heading'>
                System Design{' '}
                <span className='italic italic-gradient'>আসলে কী?</span>
            </span>
        ),
        description: (
            <div className='space-y-4'>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                    ধরেন আপনি এমন একটা নাইস এপ্লিকেশন বানালেন যেটা প্রতিদিন নতুন
                    নতুন ইউজার পাচ্ছে এবং লক্ষ লক্ষ মানুষ এটা ব্যবহার করছে।
                    প্রথমদিকে এপ্লিকেশন খুব ভালো পারফর্ম করতেছিলো, কিন্তু কিছু
                    দিন যেতেই আপনার এপ্লিকেশনের ইউজার সংখ্যা কয়েকশ থেকে কয়েক
                    হাজারে পৌঁছালো এবং তখন থেকেই কিছু ইউজার বলছে যে তাদের
                    এপ্লিকেশন টি স্লো মনে হচ্ছে। এরপর আরও কিছুদিন পর যখন কয়েক
                    লক্ষে পৌঁছালো তখন অবস্থা আরো খারাপ, এপ চলছেনা, স্লো হয়ে
                    যাচ্ছে, এমনকি আপ্লিকেশন ক্রাশ করছে, ডেটা লস হচ্ছে, ডেটা
                    ইনকনসিসটেন্ট হচ্ছে, ডেটা করাপ্ট হচ্ছে, ডেটা সিকিউরিটি ইস্যু
                    তৈরি হচ্ছে, এবং ইউজাররা রেগে গিয়ে ভালো রেটিং না দিয়ে চলে
                    যাচ্ছে।
                </p>
                <div className='my-10 border border-border bg-card p-2 rounded-xl overflow-hidden shadow-2xl'>
                    <Image
                        src='/expectation-vs-reality.png'
                        alt='Expectation vs Reality of System Success'
                        width={1408}
                        height={768}
                        className='w-full h-auto rounded-lg'
                    />
                    {/*             <p className='text-[10px] text-center mt-2 font-mono uppercase tracking-widest opacity-50'>
                        Expectation vs Reality — Scale Changes Everything
                    </p> */}
                </div>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                    এইখানেই আসলে আপনার সিস্টেম ডিজাইনের প্রয়োজনীয়তা দেখা যায়।
                    আপনি যদি শুরু থেকেই সিস্টেম ডিজাইন মাথায় রেখে এপ্লিকেশনটি
                    তৈরি করতেন তবে এই সমস্যাগুলোর অনেক গুলোই সমাধান করা সম্ভব
                    ছিল। কারণ আপনি তখন চিন্তা করতেন যে আমার এপ্লিকশনে যদি ১ লক্ষ
                    ইউজার হয় তাহলে কিভাবে সিস্টেম ডিজাইন করব, কিভাবে ডেটা
                    হ্যান্ডেল করব, কিভাবে ইউজারদের ডেটা সিকিউরিটির বিষয়টি
                    নিশ্চিত করব, কিভাবে সিস্টেমের লোড হ্যান্ডেল করব, কিভাবে
                    সিস্টেমের স্কেলিং করব ইত্যাদি। এইযে শুরু থেকেই কিছু বিষয়
                    প্ল্যান করে কাজ করা এটাকেই সিস্টেম ডিজাইন বলা হয়।
                </p>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                    সহজ কথায় বলতে গেলে, সিস্টেম ডিজাইন হলো এমন একটি প্রক্রিয়া
                    যার মাধ্যমে আমরা একটি সফটওয়্যার বা অ্যাপ্লিকেশনকে এমনভাবে
                    পরিকল্পনা করে তৈরি করি যাতে সেটি লক্ষ লক্ষ ইউজারের চাপ
                    সামলাতে পারে এবং কোনো সমস্যা ছাড়াই কাজ করতে পারে।
                </p>
                <p className='text-muted-foreground leading-relaxed text-lg'>
                    এটি অনেকটা একটি বিশাল বিল্ডিং বা ব্রিজ তৈরি করার আগেই যেই
                    প্লান বা নকশা করা হয় তার মতো । আপনি যদি জানেন যে আপনার
                    বিল্ডিং এ ১০ জন থাকবে, তবে তার ডিজাইন একরকম হবে। আবার যদি
                    জানেন ১০ হাজার লোক থাকবে, তবে তার ডিজাইন হবে সম্পূর্ণ আলাদা।
                </p>
            </div>
        ),
        quote: {
            text: 'System design is the process of defining the architecture, components, modules, interfaces, and data for a system to satisfy specified requirements.',
            author: 'System Design Essentials',
            role: 'Core Concept',
        },
    },
    sections: [
        {
            id: 'why-system-design',
            subHeader: { index: '001', title: 'Why System Design?' },
            title: (
                <span className='font-heading'>সিস্টেম ডিজাইন কেন শিখবেন?</span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <div className='space-y-6'>
                            <p className='text-muted-foreground leading-relaxed text-lg'>
                                আপনি যদি শুধু কোড করতে জানেন, তবে আপনি একজন{" "}
                                <strong className='text-foreground'>
                                    Coder
                                </strong>{" "}
                                কিন্তু আপনি যদি জানেন সেই কোড কীভাবে লক্ষ
                                লক্ষ মানুষের কাছে পৌঁছাবে, সার্ভার ক্র্যাশ না করে
                                কীভাবে ডেটা হ্যান্ডেল হবে, কিভাবে সিকিউরিটি নিশ্চিত
                                করা যায়, কিভাবে ডেটা লস হওয়া থেকে বাঁচানো যায়, কিভাবে ইউজারদের ডেটা সিকিউরিটির
                                বিষয়টি নিশ্চিত করা যায়, কিভাবে সিস্টেমের লোড
                                হ্যান্ডেল করা যায়, কিভাবে সিস্টেমের স্কেলিং করা
                                যায় ইত্যাদি তবেই আপনি একজন
                                <strong className='text-foreground'> System Architect </strong>বা{" "}
                                <strong className='text-foreground'>
                                    Senior Engineer
                                </strong>
                                ।
                            </p>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                                <div className='p-6 border border-border bg-card/50'>
                                    <h4 className='font-bold mb-2 flex items-center gap-2'>
                                        <span className='w-2 h-2 bg-primary rounded-full' />
                                        Career Growth
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                        বড় টেক কোম্পানিগুলোর (Google, Meta,
                                        Amazon) ইন্টারভিউতে সিস্টেম ডিজাইন
                                        রাউন্ড সবচেয়ে গুরুত্বপূর্ণ।
                                    </p>
                                </div>
                                <div className='p-6 border border-border bg-card/50'>
                                    <h4 className='font-bold mb-2 flex items-center gap-2'>
                                        <span className='w-2 h-2 bg-primary rounded-full' />
                                        Building Reliable Apps
                                    </h4>
                                    <p className='text-sm text-muted-foreground'>
                                        আপনার বানানো অ্যাপ যেন ১০ জন থেকে ১০
                                        কোটিতে যাওয়ার সময় ভেঙে না পড়ে, তার জন্য
                                        ডিজাইন জানা মাস্ট।
                                    </p>
                                </div>
                            </div>
                        </div>
                    ),
                },
            ],
        },
        {
            id: 'scaling-basics',
            subHeader: { index: '002', title: 'Scaling Fundamentals' },
            title: (
                <span className='font-heading'>স্ক্যালিং (Scaling) কী?</span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.HTML,
                    content: (
                        <p className='text-muted-foreground leading-relaxed text-lg mb-8'>
                            স্ক্যালিং মানে হলো আপনার সিস্টেমের ক্ষমতা বাড়ানো।
                            ইউজার বাড়লে সিস্টেম যেন ডাউন না হয়, তার জন্য আমরা
                            দুইভাবে স্ক্যালিং করি:
                        </p>
                    ),
                },
                {
                    type: CONTENT_TYPES.COMPARE_TABLE,
                    headers: [
                        'ধরণ',
                        'Vertical Scaling (Up)',
                        'Horizontal Scaling (Out)',
                    ],
                    rows: [
                        [
                            'মূল ধারণা',
                            'একটি মেশিনের ক্ষমতা বাড়ানো (RAM/CPU)',
                            'অনেকগুলো নতুন মেশিন যোগ করা',
                        ],
                        [
                            'খরচ',
                            'অনেক বেশি (High-end hardware expensive)',
                            'সাশ্রয়ী (ছোট ছোট অনেক মেশিন)',
                        ],
                        [
                            'সীমাবদ্ধতা',
                            'লিমিট আছে (একটা মেশিনের সর্বোচ্চ ক্ষমতা আছে)',
                            'আনলিমিটেড (যত খুশি মেশিন যোগ করা যায়)',
                        ],
                        [
                            'উদাহরণ',
                            'পিসি আপডেট করা (৮ থেকে ১৬ জিবি র‍্যাম)',
                            'অফিসে লোক বাড়ানো (১ জন কর্মীর বদলে ১০ জন)',
                        ],
                    ],
                },
                {
                    type: CONTENT_TYPES.INFO_BOX,
                    variant: INFO_BOX_VARIANTS.TIP,
                    title: 'Pro Tip',
                    content: (
                        <p>
                            শুরুতে <strong>Vertical Scaling</strong> সহজ, কিন্তু
                            বড় স্কেলে <strong>Horizontal Scaling</strong>-ই হলো
                            আসল সমাধান।
                        </p>
                    ),
                },
            ],
        },
        {
            id: 'core-concepts',
            subHeader: { index: '003', title: 'Core Components' },
            title: (
                <span className='font-heading'>
                    সিস্টেম ডিজাইনের মূল হাতিয়ারসমূহ
                </span>
            ),
            blocks: [
                {
                    type: CONTENT_TYPES.STEP_FLOW,
                    steps: [
                        {
                            title: 'Load Balancer',
                            description:
                                'এটি ট্রাফিককে বিভিন্ন সার্ভারে ভাগ করে দেয় যাতে কোনো একটি সার্ভারের ওপর বেশি চাপ না পড়ে।',
                        },
                        {
                            title: 'Caching',
                            description:
                                'ডেটা দ্রুত দেখানোর জন্য মেমোরিতে (যেমন: Redis) জমা রাখা।',
                        },
                        {
                            title: 'Database Sharding',
                            description:
                                'বিশাল ডেটাবেসকে ছোট ছোট টুকরো করে বিভিন্ন সার্ভারে রাখা।',
                        },
                        {
                            title: 'Microservices',
                            description:
                                'পুরো অ্যাপকে ছোট ছোট স্বাধীন সার্ভিসে ভাগ করা।',
                        },
                    ],
                },
            ],
        },
    ],
    summary: {
        headers: ['Concept', 'এক লাইনে'],
        rows: [
            ['System Design', 'বড় স্কেলের সফটওয়্যার তৈরির ব্লুপ্রিন্ট।'],
            ['Vertical Scaling', 'মেশিনকে আরও শক্তিশালী করা।'],
            ['Horizontal Scaling', 'আরও মেশিন যোগ করা।'],
            ['Load Balancer', 'ট্রাফিক ভাগ করে দেওয়ার ট্রাফিক পুলিশ।'],
        ],
    },
    knowledgeCheck: {
        questions: [
            {
                id: 1,
                text: 'যখন আপনি একটি সিঙ্গেল সার্ভারের র‍্যাম ৪ জিবি থেকে ১৬ জিবি করেন, তাকে কী ধরণের স্ক্যালিং বলে?',
                options: [
                    { key: 'A', text: 'Horizontal Scaling', isCorrect: false },
                    {
                        key: 'B',
                        text: 'Vertical Scaling',
                        isCorrect: true,
                        explanation:
                            'সিঙ্গেল মেশিনের পাওয়ার বাড়ানোই হলো Vertical Scaling।',
                    },
                    { key: 'C', text: 'Diagonal Scaling', isCorrect: false },
                    { key: 'D', text: 'No Scaling', isCorrect: false },
                ],
            },
            {
                id: 2,
                text: 'নিচের কোনটি ট্রাফিক ম্যানেজমেন্টের জন্য ব্যবহৃত হয়?',
                options: [
                    { key: 'A', text: 'Database', isCorrect: false },
                    {
                        key: 'B',
                        text: 'Load Balancer',
                        isCorrect: true,
                        explanation:
                            'Load Balancer ইনকামিং রিকোয়েস্টগুলোকে বিভিন্ন সার্ভারে ডিস্ট্রিবিউট করে।',
                    },
                    { key: 'C', text: 'Hard Drive', isCorrect: false },
                    { key: 'D', text: 'Monitor', isCorrect: false },
                ],
            },
        ],
    },
    practicalLab: {
        title: 'Your First Step',
        subtitle: 'Think like an Architect',
        steps: [
            {
                title: 'Scenario Analysis',
                description:
                    'মনে করুন আপনি একটি ফেসবুকের মতো অ্যাপ বানাচ্ছেন। শুরুতে আপনার ১০ জন বন্ধু ইউজ করছে। আপনি কি তখন Load Balancer ব্যবহার করবেন?',
            },
            {
                title: 'Diagram Practice',
                description:
                    'খাতায় বা কোনো টুলে (যেমন Excalidraw) একটি সিম্পল ইউজার → সার্ভার → ডেটাবেস ডায়াগ্রাম আঁকুন।',
            },
        ],
        tip: 'সবসময় ছোট করে শুরু করুন, কিন্তু বড় হওয়ার চিন্তা মাথায় রাখুন।',
    },
};

