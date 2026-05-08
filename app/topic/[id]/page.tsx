import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { courseData } from "@/lib/course-data";
import { TopicHeader } from "@/components/course/topic-header";
import { InfoBox } from "@/components/course/info-box";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";
import { TopicNavigation } from "@/components/course/topic-navigation";
import { BorderCross } from "@/components/course/border-cross";
import { contentMap } from "@/content";
import { DynamicTopicContent } from "@/components/course/dynamic-topic-content";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id: topicId } = await params;
  const phase = courseData.find(p => p.topics.some(t => t.id === topicId));
  const topic = phase?.topics.find(t => t.id === topicId);

  if (!topic) return {};

  const title = topic.title;
  const description = topic.summary
    ? `${topic.summary} — Part of "${phase?.title}" in System Design Mastery.`
    : `Deep dive into ${topic.title}. Part of the System Design Mastery curriculum.`;
  const url = `/topic/${topicId}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${title} | System Design Mastery`,
      description,
      url,
      type: 'article',
      section: phase?.title,
      tags: [topic.tag, topic.level, topic.type].filter(Boolean) as string[],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | System Design Mastery`,
      description,
    },
  };
}

export default async function TopicPage({ params }: { params: Promise<{ id: string }> }) {
  const { id: topicId } = await params;
  
  // Find the topic in our data
  const phase = courseData.find(p => p.topics.some(t => t.id === topicId));
  const topic = phase?.topics.find(t => t.id === topicId);

  if (!topic) {
    notFound();
  }

  // Calculate Previous and Next topics dynamically
  const allTopics = courseData.flatMap(p => p.topics);
  const currentIdx = allTopics.findIndex(t => t.id === topicId);
  
  const prevTopic = currentIdx > 0 ? { id: allTopics[currentIdx - 1].id, title: allTopics[currentIdx - 1].title } : null;
  const nextTopic = currentIdx < allTopics.length - 1 ? { id: allTopics[currentIdx + 1].id, title: allTopics[currentIdx + 1].title } : null;

  const contentData = contentMap[topicId];

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <TopicHeader
        phase={phase?.title || "Course Topic"}
        topicNum="--"
        title={topic.title}
        time={topic.time || "৩০-৪৫ মিনিট"}
        level={topic.level || "Intermediate"}
        type={topic.type || "Theory & Practice"}
      />

      {contentData ? (
        <DynamicTopicContent data={contentData} />
      ) : (
        <BorderCross>
          <section className="min-h-100 flex flex-col items-center justify-center text-center p-12 rounded-none border border-border bg-muted/20">
            <div className="w-20 h-20 border border-primary flex items-center justify-center mb-6 bg-primary/5">
              <Rocket className="w-10 h-10 text-primary" />
            </div>
            <h2 className="text-3xl font-black mb-4">Content Coming Soon!</h2>
            <p className="max-w-md text-muted-foreground leading-relaxed mb-8">
              We are currently crafting high-quality, deep-dive content for <strong>{topic.title}</strong>. 
              Check back soon for interactive diagrams, code examples, and MCQs.
            </p>
            
            <div className="flex gap-4">
              <Link href="/">
                <button className="px-6 py-3 border border-border text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:text-foreground hover:border-primary/50 dark:hover:border-white/30 transition-all flex items-center gap-2">
                  <ArrowLeft className="w-3 h-3" />
                  Back to Roadmap
                </button>
              </Link>
              <Link href="/topic/scalability">
                <button className="px-6 py-3 bg-primary text-primary-foreground text-[10px] font-mono font-bold uppercase tracking-[0.2em] hover:bg-foreground hover:text-background dark:hover:bg-white dark:hover:text-black transition-all border border-primary flex items-center gap-2">
                  View Scalability (Demo)
                </button>
              </Link>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 opacity-50 pointer-events-none">
            <InfoBox variant="concept" title="Learning Objectives">
              {topic.details}
            </InfoBox>
            <InfoBox variant="tip" title="Tools to Explore">
              <div className="flex flex-wrap gap-2 mt-2">
                {topic.tools?.map((tool: string) => (
                  <span key={tool} className="px-2 py-1 rounded-none bg-white/5 border border-white/10 text-xs font-mono">
                    {tool}
                  </span>
                ))}
              </div>
            </InfoBox>
          </div>
        </BorderCross>
      )}

      <TopicNavigation prev={prevTopic} next={nextTopic} />
    </div>
  );
}

export async function generateStaticParams() {
  const paths = courseData.flatMap(phase => 
    phase.topics.map(topic => ({
      id: topic.id,
    }))
  );
  return paths;
}
