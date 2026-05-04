'use client';

import { motion, useScroll, useSpring } from 'framer-motion';

export function ScrollProgressBar() {
    const { scrollYProgress } = useScroll();
    
    // Spring configuration gives it a buttery smooth, slightly delayed follow effect
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <div className="fixed top-0 left-0 md:left-84 right-0 h-1 bg-border z-50 overflow-hidden origin-left">
            <motion.div
                className="h-full bg-primary"
                style={{ scaleX, transformOrigin: 'left' }}
            />
        </div>
    );
}
