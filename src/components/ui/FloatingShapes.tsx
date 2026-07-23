import { cn } from "@/lib/utils";

export default function FloatingShapes({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <div className="animate-float-slow absolute -left-32 top-0 h-[420px] w-[420px] rounded-full bg-[#F3E7FF]/[0.07] blur-[120px]" />
      <div
        className="animate-float absolute -right-24 top-1/3 h-[360px] w-[360px] rounded-full bg-white/[0.05] blur-[110px]"
        style={{ animationDelay: "1.2s" }}
      />
      <div
        className="animate-float-slow absolute bottom-0 left-1/3 h-[320px] w-[320px] rounded-full bg-[#F3E7FF]/[0.05] blur-[100px]"
        style={{ animationDelay: "2.4s" }}
      />
    </div>
  );
}
