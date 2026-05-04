'use client';

import { courseData } from '@/lib/course-data';
import { cn } from '@/lib/utils';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ModeToggle } from '../mode-toggle';

export function MobileNav() {
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    // Close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    // Prevent body scroll when open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
        return () => {
            document.body.style.overflow = '';
        };
    }, [isOpen]);

    return (
        <>
            {/* Mobile top bar */}
            <header className='md:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 h-14 bg-background/95 backdrop-blur-sm border-b border-border'>
                <Link href='/' className='flex items-center gap-2'>
                    <span className='font-mono text-[10px] text-primary tracking-[0.2em] uppercase'>
                        System Design
                    </span>
                    <span className='font-heading text-sm font-bold leading-none'>
                        Mastery
                    </span>
                </Link>
                <div className='flex items-center gap-3'>
                    <ModeToggle />
                    <button
                        onClick={() => setIsOpen(v => !v)}
                        className='w-9 h-9 flex items-center justify-center border border-border hover:border-primary/50 transition-colors'
                        aria-label='Toggle navigation'>
                        {isOpen ? (
                            <X className='w-4 h-4' />
                        ) : (
                            <Menu className='w-4 h-4' />
                        )}
                    </button>
                </div>
            </header>

            {/* Drawer overlay */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className='md:hidden fixed inset-0 z-40 bg-black/60 backdrop-blur-sm'
                            onClick={() => setIsOpen(false)}
                        />
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{
                                duration: 0.35,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className='md:hidden fixed left-0 top-0 bottom-0 w-72 z-50 bg-muted border-r border-border overflow-y-auto'>
                            <div className='px-6 py-5 border-b border-border flex items-center justify-between'>
                                <div>
                                    <span className='font-mono text-[10px] text-primary tracking-[0.2em] uppercase block mb-1'>
                                        System Design
                                    </span>
                                    <h1 className='font-heading text-lg font-bold leading-tight'>
                                        Mastery Course
                                    </h1>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className='w-8 h-8 flex items-center justify-center border border-border hover:border-primary/50 transition-colors'>
                                    <X className='w-4 h-4' />
                                </button>
                            </div>

                            <nav className='px-3 py-6 space-y-8'>
                                {courseData.map(section => (
                                    <div key={section.id} className='space-y-2'>
                                        <h3 className='px-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-4'>
                                            {section.title}
                                        </h3>
                                        <div className='space-y-1'>
                                            {section.topics.map(
                                                (topic, idx) => {
                                                    const isActive =
                                                        pathname ===
                                                        `/topic/${topic.id}`;
                                                    return (
                                                        <Link
                                                            key={topic.id}
                                                            href={`/topic/${topic.id}`}
                                                            className={cn(
                                                                'flex items-center gap-3 px-3 py-2.5 text-sm transition-all duration-200 group',
                                                                isActive
                                                                    ? 'bg-primary/10 text-primary font-medium'
                                                                    : 'text-muted-foreground hover:bg-card hover:text-foreground'
                                                            )}>
                                                            <topic.icon
                                                                className={cn(
                                                                    'w-4 h-4 shrink-0',
                                                                    isActive
                                                                        ? 'text-primary'
                                                                        : 'text-muted-foreground group-hover:text-foreground'
                                                                )}
                                                            />
                                                            <span className='truncate'>
                                                                {topic.title}
                                                            </span>
                                                            <span className='ml-auto font-mono text-[10px] text-muted-foreground'>
                                                                {String(
                                                                    idx + 1
                                                                ).padStart(
                                                                    2,
                                                                    '0'
                                                                )}
                                                            </span>
                                                        </Link>
                                                    );
                                                }
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </nav>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}

