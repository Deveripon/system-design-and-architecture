'use client';

import { ContentBlock, TopicData } from '../../types/content';
import {
    AssignmentSection,
    KnowledgeCheckSection,
    PracticalLabSection,
} from './assessment-sections';
import { BorderCross } from './border-cross';
import { CodeBlock } from './code-block';
import { CompareTable } from './compare-table';
import { InfoBox } from './info-box';
import { StepFlow } from './step-flow';
import { SubHeader } from './sub-header';

export function DynamicTopicContent({ data }: { data: TopicData }) {
    return (
        <div className='space-y-16'>
            {/* Introduction section */}
            {data.introduction && (
                <BorderCross className='p-10 border-b-0'>
                    <div className='mb-12'>
                        <span className='px-3 py-1 bg-accent/10 text-accent font-mono text-[10px] uppercase tracking-widest border border-accent/20'>
                            {data.introduction.badge}
                        </span>
                    </div>
                    <h1 className='text-5xl md:text-6xl font-black uppercase tracking-tighter mb-8 leading-none'>
                        {data.introduction.title}
                    </h1>
                    <p className='text-xl text-muted-foreground leading-relaxed max-w-3xl mb-12'>
                        {data.introduction.description}
                    </p>

                    <div className='p-8 border border-border bg-card/50 relative overflow-hidden group'>
                        <div className='absolute top-0 left-0 w-1 h-full bg-primary/50' />
                        <p className='text-lg font-medium leading-relaxed relative z-10 italic'>
                            &quot;{data.introduction.quote.text}&quot;
                        </p>
                        <div className='mt-4 text-sm font-mono text-muted-foreground'>
                            — {data.introduction.quote.author},{' '}
                            <span className='text-accent'>
                                {data.introduction.quote.role}
                            </span>
                        </div>
                    </div>
                </BorderCross>
            )}

            {/* Dynamic Sections */}
            {data.sections.map(section => (
                <BorderCross key={section.id} className='p-10'>
                    <section id={section.id} className='scroll-mt-20'>
                        <SubHeader
                            index={section.subHeader.index}
                            title={section.subHeader.title}
                            className='mb-8'
                        />
                        <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                            {section.title}
                        </h2>

                        {section.blocks.map((block, idx) => (
                            <BlockRenderer key={idx} block={block} />
                        ))}
                    </section>
                </BorderCross>
            ))}

            {/* Summary */}
            {data.summary && (
                <BorderCross className='p-10'>
                    <section id='summary' className='scroll-mt-20'>
                        <SubHeader
                            index={(data.sections.length + 1)
                                .toString()
                                .padStart(3, '0')}
                            title='Lesson Summary'
                            className='mb-8'
                        />
                        <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                            SUMMERY — আজকে যা শিখলাম
                        </h2>
                        <CompareTable
                            headers={data.summary.headers}
                            rows={data.summary.rows}
                        />
                    </section>
                </BorderCross>
            )}

            {/* Assessments */}
            {data.knowledgeCheck && (
                <KnowledgeCheckSection
                    index={(data.sections.length + (data.summary ? 2 : 1))
                        .toString()
                        .padStart(3, '0')}
                    questions={data.knowledgeCheck.questions}
                />
            )}

            {data.assignment && (
                <AssignmentSection
                    index={(
                        data.sections.length +
                        (data.summary ? 1 : 0) +
                        (data.knowledgeCheck ? 1 : 0) +
                        1
                    )
                        .toString()
                        .padStart(3, '0')}
                    data={data.assignment}
                />
            )}

            {data.practicalLab && (
                <PracticalLabSection
                    index={(
                        data.sections.length +
                        (data.summary ? 1 : 0) +
                        (data.knowledgeCheck ? 1 : 0) +
                        (data.assignment ? 1 : 0) +
                        1
                    )
                        .toString()
                        .padStart(3, '0')}
                    data={data.practicalLab}
                />
            )}
        </div>
    );
}

function BlockRenderer({ block }: { block: ContentBlock }) {
    switch (block.type) {
        case 'html':
            return <div className='mb-8'>{block.content}</div>;
        case 'info-box':
            return (
                <div className='mb-8'>
                    <InfoBox variant={block.variant} title={block.title}>
                        {block.content}
                    </InfoBox>
                </div>
            );
        case 'compare-table':
            return (
                <div className='mb-8'>
                    <CompareTable headers={block.headers} rows={block.rows} />
                </div>
            );
        case 'code-block':
            return (
                <div className='mb-8'>
                    <CodeBlock
                        language={block.language}
                        filename={block.filename}
                        code={block.code}
                    />
                </div>
            );
        case 'step-flow':
            return (
                <div className='mb-8'>
                    <StepFlow steps={block.steps} />
                </div>
            );
        case 'custom':
            return <div className='mb-8'>{block.component}</div>;
        default:
            return null;
    }
}

