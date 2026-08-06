import { cn } from "@/lib/utils";

export function SectionHeading({
  label,
  title,
  sub,
  align = "start",
  className,
}: {
  label: string;
  title: string;
  sub?: string;
  align?: "start" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" ? "items-center text-center" : "items-start text-start",
        className,
      )}
    >
      <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-muted-foreground">
        <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
        {label}
      </span>
      <h2 className="max-w-2xl text-balance text-3xl font-extrabold leading-[1.12] sm:text-4xl md:text-[2.75rem]">
        {title}
      </h2>
      {sub ? (
        <p className="max-w-xl text-pretty text-base leading-relaxed text-muted-foreground">{sub}</p>
      ) : null}
    </div>
  );
}
