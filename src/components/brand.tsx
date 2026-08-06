import { cn } from "@/lib/utils";

/**
 * Temporary geometric Z mark. Replace the inner <svg> paths (or swap in an
 * <img src="/images/logo.svg" />) once the final logo lands — sizing, spacing
 * and the wordmark stay untouched.
 */
export function ZMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "relative grid size-9 shrink-0 place-items-center overflow-hidden rounded-xl border border-border-strong bg-surface",
        className,
      )}
      aria-hidden="true"
    >
      <span className="absolute inset-0 bg-primary/12" />
      <svg viewBox="0 0 24 24" className="relative size-5" fill="none" strokeLinecap="square">
        <path d="M6 5h12L6 19h12" className="stroke-primary" strokeWidth="2.4" />
        <path d="M6 5h12" className="stroke-foreground/70" strokeWidth="2.4" />
      </svg>
    </span>
  );
}

export function Wordmark({ className }: { className?: string }) {
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <ZMark />
      <span className="font-display text-lg font-extrabold tracking-tight">
        Zeyad<span className="text-primary">.dev</span>
      </span>
    </span>
  );
}
