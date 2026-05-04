"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { courseData } from "@/lib/course-data";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 bottom-0 w-64 bg-muted border-r border-border py-6 overflow-y-auto z-40 hidden md:block">
      <div className="px-6 pb-6 mb-6 border-b border-border">
        <span className="font-mono text-[10px] text-primary tracking-[0.2em] uppercase block mb-1">
          System Design
        </span>
        <h1 className="font-heading text-lg font-bold leading-tight">
          Mastery Course
        </h1>
      </div>

      <nav className="px-3 space-y-8">
        {courseData.map((section) => (
          <div key={section.id} className="space-y-2">
            <h3 className="px-3 font-mono text-[9px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.topics.map((topic, idx) => {
                const isActive = pathname === `/topic/${topic.id}`;
                return (
                  <Link
                    key={topic.id}
                    href={`/topic/${topic.id}`}
                    className={cn(
                      "flex items-center gap-3 px-3 py-2 rounded-none text-sm transition-all duration-200 group",
                      isActive 
                        ? "bg-primary/10 text-primary font-medium" 
                        : "text-muted-foreground hover:bg-card hover:text-foreground"
                    )}
                  >
                    <topic.icon className={cn(
                      "w-4 h-4 shrink-0 transition-colors",
                      isActive ? "text-primary" : "text-muted-foreground group-hover:text-foreground"
                    )} />
                    <span className="truncate">{topic.title}</span>
                    <span className="ml-auto font-mono text-[10px] text-muted-foreground group-hover:text-primary transition-colors">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </nav>
    </aside>
  );
}
