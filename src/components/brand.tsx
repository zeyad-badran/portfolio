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
      <video
        src="/videos/logo.mp4"
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 size-full object-cover"
      />
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
