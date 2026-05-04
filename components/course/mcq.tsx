'use client';

import React from "react";
import { cn } from "@/lib/utils";
import { CheckCircle2, ChevronRight, PlayCircle } from "lucide-react";

import { SubHeader } from "./sub-header";

interface Option {
  key: string;
  text: string;
  isCorrect: boolean;
  explanation?: string;
}

interface Question {
  id: number;
  text: string;
  options: Option[];
}

interface MCQProps {
  questions: Question[];
}

export function MCQ({ questions = [] }: MCQProps) {
  const [selectedOptions, setSelectedOptions] = React.useState<Record<number, string>>({});
  const [showResults, setShowResults] = React.useState(false);

  const handleSelect = (qId: number, key: string) => {
    if (showResults) return;
    setSelectedOptions((prev) => ({ ...prev, [qId]: key }));
  };

  const calculateScore = () => {
    let score = 0;
    questions.forEach((q) => {
      const correctOption = q.options.find((o) => o.isCorrect);
      if (selectedOptions[q.id] === correctOption?.key) {
        score++;
      }
    });
    return score;
  };

  return (
    <section className="my-24 border border-border bg-card">
      <div className="p-10 border-b border-border bg-muted/20">
        <SubHeader index="004" title="Assessment" className="mb-4" />
        <h2 className="text-2xl font-black uppercase tracking-tighter">Knowledge Check</h2>
      </div>

      <div className="p-10 space-y-20">
        {questions.map((q, qIdx) => (
          <div key={q.id} className="space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-[10px] font-mono font-bold text-primary border border-primary/30 px-3 py-1 bg-primary/5 uppercase">Question 0{qIdx + 1}</span>
              </div>
              <h3 className="text-xl font-bold leading-tight max-w-3xl">{q.text}</h3>
            </div>

            <div className="grid grid-cols-1 border-t border-l border-border">
              {q.options.map((option) => {
                const isSelected = selectedOptions[q.id] === option.key;
                const isCorrect = option.isCorrect;
                const showFeedback = showResults;

                return (
                  <button
                    key={option.key}
                    disabled={showFeedback}
                    onClick={() => handleSelect(q.id, option.key)}
                    className={cn(
                      "flex items-start gap-8 p-8 border-r border-b border-border text-left transition-all group",
                      !showFeedback && "hover:bg-muted/10",
                      showFeedback && isCorrect && "bg-emerald-500/5",
                      showFeedback && isSelected && !isCorrect && "bg-red-500/5",
                      !showFeedback && isSelected && "bg-primary/5"
                    )}
                  >
                    <div className={cn(
                      "w-12 h-12 border border-border flex items-center justify-center font-mono text-sm font-black transition-all shrink-0",
                      showFeedback && isCorrect ? "bg-emerald-500 text-white border-emerald-500" :
                      showFeedback && isSelected && !isCorrect ? "bg-red-500 text-white border-red-500" :
                      !showFeedback && isSelected ? "bg-primary text-white border-primary" :
                      "bg-background group-hover:border-primary/50"
                    )}>
                      {option.key}
                    </div>
                    <div className="space-y-3">
                      <p className="text-base font-bold leading-none">{option.text}</p>
                      {showFeedback && (isSelected || isCorrect) && (
                        <p className={cn(
                          "text-sm leading-relaxed font-medium max-w-2xl",
                          isCorrect ? "text-emerald-400" : "text-red-400"
                        )}>
                          {option.explanation}
                        </p>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="p-10 border-t border-border bg-muted/20">
        {!showResults ? (
          <button
            onClick={() => setShowResults(true)}
            disabled={Object.keys(selectedOptions).length < questions.length}
            className="w-full py-4 border border-primary bg-primary/10 text-primary font-black uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Check Answers
          </button>
        ) : (
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground">Your Score</span>
              <span className="text-2xl font-black">{calculateScore()} / {questions.length}</span>
            </div>
            <button
              onClick={() => {
                setSelectedOptions({});
                setShowResults(false);
              }}
              className="px-8 py-3 border border-border font-black uppercase tracking-widest text-xs hover:bg-muted transition-all"
            >
              Retry Quiz
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
