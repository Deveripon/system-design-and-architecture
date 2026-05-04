'use client';

import { animate } from 'framer-motion';

export function ExploreButton() {
    const handleScroll = (e: React.MouseEvent) => {
        e.preventDefault();
        const target = document.getElementById('roadmap');
        
        if (target) {
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            
            // Use framer-motion for a highly customized smooth scroll curve
            animate(window.scrollY, targetPosition, {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1], // Custom architectural/spring-like ease
                onUpdate: value => window.scrollTo(0, value),
            });
        }
    };

    return (
        <button
            onClick={handleScroll}
            className='px-10 py-4 bg-primary text-primary-foreground font-black uppercase tracking-[0.2em] text-xs hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black transition-all border border-primary'>
            Explore Roadmap
        </button>
    );
}
