/* eslint-disable @typescript-eslint/no-explicit-any */
import { ReactNode } from 'react';

export type ContentBlock =
    | { type: 'html'; content: ReactNode }
    | {
          type: 'info-box';
          variant: 'concept' | 'warning' | 'tip' | 'important';
          title: string;
          content: ReactNode;
      }
    | { type: 'compare-table'; headers: ReactNode[]; rows: ReactNode[][] }
    | { type: 'code-block'; language: string; filename?: string; code: string }
    | {
          type: 'step-flow';
          steps: { title: ReactNode; description: ReactNode }[];
      }
    | { type: 'custom'; component: ReactNode };

export interface TopicSection {
    id: string;
    subHeader: { index: string; title: string };
    title: ReactNode;
    blocks: ContentBlock[];
}

export interface TopicData {
    id: string;
    introduction?: {
        badge: string;
        title: ReactNode;
        description: ReactNode;
        quote: { text: ReactNode; author: string; role: string };
    };
    sections: TopicSection[];
    summary?: {
        headers: ReactNode[];
        rows: ReactNode[][];
    };
    knowledgeCheck?: {
        questions: {
            id: number;
            text: string;
            options: {
                key: string;
                text: string;
                isCorrect: boolean;
                explanation: string;
            }[];
        }[];
    };
    assignment?: {
        title: string;
        time: string;
        difficulty: string;
        tasks: ReactNode[];
        deliverables: ReactNode[];
    };
    practicalLab?: {
        title: string;
        subtitle: string;
        steps: { title: ReactNode; description: ReactNode }[];
        codeBlock?: { language: string; filename: string; code: string };
        tip?: ReactNode;
    };
}
