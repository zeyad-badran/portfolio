import { MapPin } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { ZMark } from "@/components/brand";
import { useLocale } from "@/lib/locale";
import { site } from "@/content/site";

export function About() {
  const { t } = useLocale();

  return (
    <section id="about" className="section-y border-t border-border">
      <div className="container-page grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="min-w-0">
          <SectionHeading label={t.about.label} title={t.about.title} />
          <div className="mt-6 flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
            <p className="text-pretty">{t.about.body}</p>
            <p className="text-pretty">{t.about.body2}</p>
          </div>
          <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            <span>
              {t.about.locationLabel}: {t.about.location}
            </span>
          </div>
        </div>

        <div className="surface-panel flex min-w-0 flex-col gap-6 p-6 md:p-8">
          <div className="flex items-center gap-3">
            <ZMark className="size-11" />
            <div className="min-w-0">
              <p className="truncate font-display font-bold">{site.name}</p>
              <p className="truncate text-sm text-muted-foreground">{t.meta.role}</p>
            </div>
          </div>
          <div className="h-px bg-border" aria-hidden="true" />
          <ul className="flex flex-col gap-5">
            {t.about.principles.map((p) => (
              <li key={p.title}>
                <p className="font-semibold">{p.title}</p>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
