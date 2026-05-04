import React from "react";
import { notFound } from "next/navigation";
import { courseData } from "@/lib/course-data";
import { TopicHeader } from "@/components/course/topic-header";
import { InfoBox } from "@/components/course/info-box";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowLeft, Rocket } from "lucide-react";

export default function TopicPage({ params }: { params: { id: string } }) {
  const topicId = params.id;
  
  // Find the topic in our data
  const phase = courseData.find(p => p.topics.some(t => t.id === topicId));
  const topic = phase?.topics.find(t => t.id === topicId);

  if (!topic) {
    notFound();
  }

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      <TopicHeader
        phase={phase?.title || "Course Topic"}
        topicNum="--"
        title={topic.title}
        time="৩০-৪৫ মিনিট"
        level="Intermediate"
        type="Theory & Practice"
      />

      <section className="min-h-[400px] flex flex-col items-center justify-center text-center p-12 rounded-none border border-dashed border-border bg-muted/20">
        <div className="w-20 h-20 rounded-none bg-primary/10 flex items-center justify-center mb-6">
          <Rocket className="w-10 h-10 text-primary animate-bounce" />
        </div>
        <h2 className="text-3xl font-black mb-4">Content Coming Soon!</h2>
        <p className="max-w-md text-muted-foreground leading-relaxed mb-8">
          We are currently crafting high-quality, deep-dive content for <strong>{topic.title}</strong>. 
          Check back soon for interactive diagrams, code examples, and MCQs.
        </p>
        
        <div className="flex gap-4">
          <Link href="/">
            <Button variant="outline" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Roadmap
            </Button>
          </Link>
          <Link href="/topic/scalability">
            <Button className="gap-2">
              View Scalability (Demo)
            </Button>
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
