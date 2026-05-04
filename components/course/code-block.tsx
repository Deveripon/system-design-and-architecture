import React from "react";
import { cn } from "@/lib/utils";
import { Copy, Terminal } from "lucide-react";

interface CodeBlockProps {
  code: string;
  language: string;
  filename?: string;
}

export function CodeBlock({ code, language, filename }: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="my-12 border border-border bg-[#05080f]">
      <div className="flex items-center justify-between px-6 py-3 border-b border-border bg-muted/20">
        <div className="flex items-center gap-3">
          <Terminal className="w-4 h-4 text-primary" />
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground">
            {filename || language}
          </span>
        </div>
        <button 
          onClick={copyToClipboard}
          className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
      </div>
      <div className="relative">
        <pre className="p-5 font-mono text-[13px] leading-relaxed overflow-x-auto text-slate-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  );
}
