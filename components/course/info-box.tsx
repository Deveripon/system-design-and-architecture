import { cn } from '@/lib/utils';
import { AlertTriangle, Book, Info, Lightbulb } from 'lucide-react';
import React from 'react';

type InfoBoxVariant = 'concept' | 'warning' | 'tip' | 'important';

interface InfoBoxProps {
    variant: InfoBoxVariant;
    title?: string;
    children: React.ReactNode;
}

export function InfoBox({ variant, title, children }: InfoBoxProps) {
    const variants = {
        concept: 'border-blue-500/50 bg-blue-500/5 text-blue-100',
        tip: 'border-emerald-500/50 bg-emerald-500/5 text-emerald-100',
        warning: 'border-red-500/50 bg-red-500/5 text-red-100',
        important: 'border-purple-500/50 bg-purple-500/5 text-purple-100',
    };

    const icons = {
        concept: <Book className='w-5 h-5 text-blue-400' />,
        tip: <Lightbulb className='w-5 h-5 text-emerald-400' />,
        warning: <AlertTriangle className='w-5 h-5 text-red-400' />,
        important: <Info className='w-5 h-5 text-purple-400' />,
    };

    return (
        <div
            className={cn(
                'my-12 p-8 border border-border bg-card relative group',
                'before:absolute before:left-0 before:top-0 before:bottom-0 before:w-1',
                variant === 'concept'
                    ? 'before:bg-blue-500'
                    : variant === 'tip'
                      ? 'before:bg-emerald-500'
                      : variant === 'warning'
                        ? 'before:bg-red-500'
                        : 'before:bg-purple-500'
            )}>
            <div className='flex items-center gap-4 mb-6'>
                <div className='w-10 h-10 border border-border flex items-center justify-center bg-background'>
                    {icons[variant]}
                </div>
                <h4 className='text-[10px] font-mono font-black uppercase tracking-[0.3em] opacity-80'>
                    {title}
                </h4>
            </div>
            <div className='text-base leading-relaxed font-medium'>
                {children}
            </div>
        </div>
    );
}

