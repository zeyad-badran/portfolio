import { ArrowUpRight, Check, Info } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { AssetSlot, BrowserFrame, PhoneFrame } from "@/components/asset-slot";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { projects, type Project } from "@/content/site";

export function Work() {
  const { t } = useLocale();

  return (
    <section id="work" className="section-y border-t border-border bg-surface/40">
      <div className="container-page">
        <SectionHeading label={t.work.label} title={t.work.title} sub={t.work.sub} />

        <div className="mt-12 flex flex-col gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <p className="mt-8 text-sm text-muted-foreground">{t.work.more}</p>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const { t, locale } = useLocale();
  const [primary, secondary] = project.media;

  return (
    <article className="surface-panel overflow-hidden bg-background/70">
      <div className="grid gap-8 p-6 md:p-8 lg:grid-cols-2 lg:items-center lg:gap-12 lg:p-10">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold text-accent-foreground">
              <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
              {project.status[locale]}
            </span>
            <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
              {project.year}
            </span>
          </div>

          <div>
            <h3 className="text-2xl font-extrabold sm:text-3xl" dir="auto">
              {project.name}
            </h3>
            <p className="mt-1.5 text-sm font-medium text-primary">{project.type[locale]}</p>
          </div>

          <p className="text-pretty text-sm leading-relaxed text-muted-foreground md:text-base">
            {project.description[locale]}
          </p>

          <dl className="grid gap-5 sm:grid-cols-2">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t.work.challenge}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.challenge[locale]}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                {t.work.solution}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-foreground/85">
                {project.solution[locale]}
              </dd>
            </div>
          </dl>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.work.features}
            </p>
            <ul className="mt-3 grid gap-2 sm:grid-cols-2">
              {project.features[locale].map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-foreground/85">
                  <Check className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>
          </div>



          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="lg">
              <a href={project.liveUrl} target="_blank" rel="noreferrer noopener">
                {t.cta.visitLive}
                <ArrowUpRight className="size-4" aria-hidden="true" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          {primary ? (
            <BrowserFrame url={project.liveUrl}>
              <AssetSlot
                src={primary.src}
                alt={primary.alt[locale]}
                label={t.work.mediaPlaceholder}
                ratio="16 / 10"
              />
            </BrowserFrame>
          ) : null}
          {secondary ? (
            <div className="flex items-end justify-center gap-4 sm:justify-start">
              <PhoneFrame>
                <AssetSlot
                  src={secondary.src}
                  alt={secondary.alt[locale]}
                  ratio="9 / 16"
                  label={t.work.mediaPlaceholder}
                />
              </PhoneFrame>
              <p className="hidden max-w-[22ch] pb-3 text-xs leading-relaxed text-muted-foreground sm:block">
                {t.work.mediaPlaceholder}
              </p>
            </div>
          ) : null}
        </div>
      </div>

      <div className="flex items-start gap-3 border-t border-border bg-surface/70 p-5 md:px-8 lg:px-10">
        <Info className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
        <p className="text-xs leading-relaxed text-muted-foreground">
          <span className="font-semibold text-foreground">{t.work.disclosureLabel}: </span>
          {project.disclosure[locale]}
        </p>
      </div>
    </article>
  );
}
