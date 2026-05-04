import { ChevronLeft, ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { BorderCross } from './border-cross';

interface TopicInfo {
    id: string;
    title: string;
}

interface TopicNavigationProps {
    prev: TopicInfo | null;
    next: TopicInfo | null;
}

export function TopicNavigation({ prev, next }: TopicNavigationProps) {
    return (
        <BorderCross>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mt-16'>
                {prev ? (
                    <Link
                        href={`/topic/${prev.id}`}
                        className='flex flex-col items-start p-6 bbg-muted/5 hover:bg-muted/20  transition-all group'>
                        <span className='font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2'>
                            <ChevronLeft className='w-4 h-4 group-hover:-translate-x-1 transition-transform' />
                            Previous Topic
                        </span>
                        <h3 className='text-lg font-bold group-hover:text-primary transition-colors line-clamp-1'>
                            {prev.title}
                        </h3>
                    </Link>
                ) : (
                    <div /> // Empty placeholder to keep grid alignment
                )}

                {next ? (
                    <Link
                        href={`/topic/${next.id}`}
                        className='flex flex-col items-end text-right p-6 bg-muted/5 hover:bg-muted/20 transition-all group'>
                        <span className='font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-3 flex items-center gap-2'>
                            Next Topic
                            <ChevronRight className='w-4 h-4 group-hover:translate-x-1 transition-transform' />
                        </span>
                        <h3 className='text-lg font-bold group-hover:text-primary transition-colors line-clamp-1'>
                            {next.title}
                        </h3>
                    </Link>
                ) : (
                    <div /> // Empty placeholder to keep grid alignment
                )}
            </div>
        </BorderCross>
    );
}

