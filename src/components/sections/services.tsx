import { Bot, Check, Code2, LayoutGrid, PenTool } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useLocale } from "@/lib/locale";

const ICONS = [Code2, LayoutGrid, Bot, PenTool];

export function Services() {
  const { t } = useLocale();

  return (
    <section id="services" className="section-y border-t border-border">
      <div className="container-page">
        <SectionHeading label={t.services.label} title={t.services.title} sub={t.services.sub} />

        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:gap-6">
          {t.services.items.map((item, i) => {
            const Icon = ICONS[i] ?? Code2;
            return (
              <li
                key={item.title}
                className="surface-panel sheen group relative overflow-hidden p-6 transition-colors duration-300 hover:border-primary/40 md:p-8"
              >
                <span className="grid size-11 place-items-center rounded-xl border border-border bg-background/60 text-primary">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                <ul className="mt-5 flex flex-col gap-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-sm text-foreground/85">
                      <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
