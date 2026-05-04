/* eslint-disable react/jsx-key */
'use client';

import React from 'react';
import { BorderCross } from '../../border-cross';
import { CompareTable } from '../../compare-table';
import { SubHeader } from '../../sub-header';

export const LessonSummarySection = React.memo(() => (
    <BorderCross className='p-10'>
        <section id='summary' className='scroll-mt-20'>
            <SubHeader index='007' title='Lesson Summary' className='mb-8' />
            <h2 className='text-4xl font-black uppercase tracking-tighter mb-8 leading-none'>
                আজকে যা শিখলাম
            </h2>
            <CompareTable
                headers={['Concept', 'এক লাইনে']}
                rows={[
                    [<span className='font-bold text-primary'>Scalability</span>, 'বাড়তি load handle করার ক্ষমতা'],
                    [<span className='font-bold text-primary'>Vertical Scaling</span>, 'বড় মেশিন কিনো, সহজ কিন্তু limit আছে'],
                    [<span className='font-bold text-primary'>Horizontal Scaling</span>, 'বেশি মেশিন যোগ করো, unlimited কিন্তু stateless দরকার'],
                    [<span className='font-bold text-primary'>Stateless</span>, 'যেকোনো server যেকোনো request handle করতে পারে'],
                    [<span className='font-bold text-primary'>Load Balancer</span>, 'Traffic সব server এ ভাগ করে দেয়'],
                    [<span className='font-bold text-primary'>Bottleneck</span>, 'System এর সবচেয়ে slow part — সেটাই fix করো আগে'],
                ]}
            />
        </section>
    </BorderCross>
));

LessonSummarySection.displayName = 'LessonSummarySection';
