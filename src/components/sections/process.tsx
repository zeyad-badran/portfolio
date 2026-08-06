import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/lib/locale";

export function Process() {
  const { t } = useLocale();

  return (
    <section id="process" className="section-y border-t border-border bg-surface/40">
      <div className="container-page">
        <SectionHeading label={t.process.label} title={t.process.title} sub={t.process.sub} />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
          {t.process.steps.map((step, i) => (
            <li
              key={step.title}
              className="group relative flex flex-col gap-3 rounded-2xl border border-border bg-background/70 p-6 transition-colors duration-300 hover:border-primary/40"
            >
              <div className="flex items-center gap-3">
                <span className="font-display text-sm font-bold tabular-nums text-primary">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="h-px flex-1 bg-border" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-bold">{step.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
