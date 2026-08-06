import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface AssetSlotProps {
  /** Provide a real image path to replace the placeholder. */
  src?: string | undefined;
  alt: string;
  label?: string | undefined;
  className?: string | undefined;
  ratio?: string | undefined;
}

/**
 * Single insertion point for real media. Until `src` is provided it renders a
 * polished placeholder with the same footprint, so no layout shift later.
 */
export function AssetSlot({ src, alt, label, className, ratio = "16 / 10" }: AssetSlotProps) {
  return (
    <div
      className={cn("relative w-full overflow-hidden bg-surface", className)}
      style={{ aspectRatio: ratio }}
    >
      {src ? (
        <img src={src} alt={alt} loading="lazy" className="size-full object-cover" />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 p-6 text-center">
          <div
            className="absolute inset-0 opacity-[0.5]"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, color-mix(in oklab, var(--foreground) 6%, transparent) 0 1px, transparent 1px 12px)",
            }}
            aria-hidden="true"
          />
          <span className="relative grid size-10 place-items-center rounded-full border border-border bg-background/70">
            <ImageIcon className="size-4 text-muted-foreground" aria-hidden="true" />
          </span>
          {label ? (
            <p className="relative max-w-[26ch] text-xs leading-relaxed text-muted-foreground">
              {label}
            </p>
          ) : null}
          <span className="sr-only">{alt}</span>
        </div>
      )}
    </div>
  );
}

export function BrowserFrame({
  children,
  url,
  className,
}: {
  children: React.ReactNode;
  url?: string | undefined;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-2xl border border-border bg-card shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-border bg-surface px-3 py-2.5">
        <span className="flex gap-1.5" aria-hidden="true">
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
          <span className="size-2.5 rounded-full bg-border-strong" />
        </span>
        {url ? (
          <span
            dir="ltr"
            className="mx-auto max-w-[70%] truncate rounded-md bg-background px-2.5 py-1 text-[11px] text-muted-foreground"
          >
            {url}
          </span>
        ) : null}
      </div>
      {children}
    </div>
  );
}

export function PhoneFrame({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string | undefined;
}) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[220px] overflow-hidden rounded-[2rem] border-[6px] border-border-strong bg-card p-1 shadow-[var(--shadow-lift)]",
        className,
      )}
    >
      <div className="overflow-hidden rounded-[1.6rem]">{children}</div>
    </div>
  );
}
