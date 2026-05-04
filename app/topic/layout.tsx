import { MobileNav } from '@/components/course/mobile-nav';
import { Sidebar } from '@/components/course/sidebar';

export default function TopicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='min-h-screen flex overflow-hidden'>
            {/* Desktop sidebar — hidden on mobile */}
            <Sidebar />

            {/* Mobile top bar + drawer */}
            <MobileNav />

            {/* Main Content */}
            <main className='flex-1 md:ml-84 bg-background pt-14 md:pt-0'>
                <div className='w-full max-md:mx-auto  max-w-[380px] min-[480px]:max-w-xl md:max-w-5xl lg:max-w-6xl px-4 py-8 md:px-12 md:py-20 lg:px-20'>
                    {children}
                </div>
            </main>
        </div>
    );
}

