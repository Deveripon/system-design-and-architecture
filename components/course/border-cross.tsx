import { cn } from "@/lib/utils";

interface BorderCrossProps {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}

export function BorderCross({ children, className, containerClassName }: BorderCrossProps) {
  return (
    <div className={cn("border-cross group/cross", containerClassName)}>
      <div className="border-cross-inner">
        <div className={cn("relative", className)}>
          {children}
        </div>
      </div>
    </div>
  );
}
