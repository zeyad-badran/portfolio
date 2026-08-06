import { ArrowUpRight, Instagram, Linkedin, Mail, MapPin, MessageCircle } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/locale";
import { site } from "@/content/site";

export function Contact() {
  const { t } = useLocale();

  const links = [
    {
      label: t.contact.emailLabel,
      value: site.email,
      href: `mailto:${site.email}`,
      icon: Mail,
      external: false,
    },
    {
      label: t.contact.linkedinLabel,
      value: "zeyad-badran",
      href: site.linkedin,
      icon: Linkedin,
      external: true,
    },
    {
      label: t.contact.instagramLabel,
      value: "@zeyadbadran81",
      href: site.instagram,
      icon: Instagram,
      external: true,
    },
  ];

  return (
    <section id="contact" className="section-y border-t border-border">
      <div className="container-page">
        <div className="surface-panel grid-backdrop relative overflow-hidden p-7 md:p-12">
          <span className="glow-orb -bottom-32 start-1/3 size-[24rem] opacity-40" aria-hidden="true" />
          <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
            <div>
              <SectionHeading label={t.contact.label} title={t.contact.title} sub={t.contact.sub} />
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button asChild variant="hero" size="xl">
                  <a href={site.whatsappUrl} target="_blank" rel="noreferrer noopener">
                    <MessageCircle className="size-4" aria-hidden="true" />
                    {t.cta.whatsapp}
                  </a>
                </Button>
                <Button asChild variant="quiet" size="xl">
                  <a href={`mailto:${site.email}`}>
                    <Mail className="size-4" aria-hidden="true" />
                    {t.cta.email}
                  </a>
                </Button>
              </div>
              <p className="mt-4 text-xs text-muted-foreground">{t.contact.responseNote}</p>
            </div>

            <ul className="flex flex-col divide-y divide-border overflow-hidden rounded-2xl border border-border bg-background/70">
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="flex items-center gap-4 p-5 transition-colors hover:bg-accent"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary">
                    <MessageCircle className="size-4" aria-hidden="true" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                      {t.contact.whatsappLabel}
                    </span>
                    <span dir="ltr" className="block truncate text-sm font-medium">
                      {site.whatsappDisplay}
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 shrink-0 text-muted-foreground" aria-hidden="true" />
                </a>
              </li>
              {links.map(({ label, value, href, icon: Icon, external }) => (
                <li key={label}>
                  <a
                    href={href}
                    {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
                    className="flex items-center gap-4 p-5 transition-colors hover:bg-accent"
                  >
                    <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary">
                      <Icon className="size-4" aria-hidden="true" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                        {label}
                      </span>
                      <span dir="ltr" className="block truncate text-sm font-medium">
                        {value}
                      </span>
                    </span>
                    <ArrowUpRight
                      className="size-4 shrink-0 text-muted-foreground"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
              <li className="flex items-center gap-4 p-5">
                <span className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface text-primary">
                  <MapPin className="size-4" aria-hidden="true" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs uppercase tracking-[0.14em] text-muted-foreground">
                    {t.contact.locationLabel}
                  </span>
                  <span className="block truncate text-sm font-medium">{t.about.location}</span>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
