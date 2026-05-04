import { Sidebar } from '@/components/course/sidebar';

export default function TopicLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className='min-h-screen flex overflow-hidden'>
            {/* Sidebar */}
            <Sidebar />

            {/* Main Content */}
            <main className='flex-1 md:ml-84 bg-background'>
                <div className='max-w-5xl px-6 py-12 md:px-12 md:py-20 lg:px-20'>
                    {children}
                </div>
            </main>
        </div>
    );
}

