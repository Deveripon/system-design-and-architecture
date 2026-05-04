"use client";

import React, { useEffect, useState } from "react";
import { Sidebar } from "@/components/course/sidebar";

export default function TopicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Progress Bar */}
      <div className="fixed top-0 left-0 md:left-64 right-0 h-0.5 bg-border z-50">
        <div 
          className="h-full bg-gradient-to-r from-primary to-emerald-500 transition-all duration-100 ease-out"
          style={{ width: `${scrollProgress}%` }}
        />
      </div>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 bg-background overflow-x-hidden">
        <div className="max-w-4xl mx-auto px-6 py-12 md:px-12 md:py-20 lg:px-20">
          {children}
        </div>
      </main>
    </div>
  );
}
