import { Instagram, Linkedin, Mail, MessageCircle } from "lucide-react";
import { Wordmark } from "@/components/brand";
import { useLocale } from "@/lib/locale";
import { site } from "@/content/site";

const SECTIONS = ["work", "services", "process", "about", "contact"] as const;

export function SiteFooter() {
  const { t } = useLocale();
  const year = new Date().getFullYear();

  const socials = [
    { href: site.whatsappUrl, label: t.contact.whatsappLabel, icon: MessageCircle },
    { href: site.linkedin, label: t.contact.linkedinLabel, icon: Linkedin },
    { href: site.instagram, label: t.contact.instagramLabel, icon: Instagram },
    { href: `mailto:${site.email}`, label: t.contact.emailLabel, icon: Mail },
  ];

  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="container-page flex flex-col gap-10 py-12 md:py-16">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr_1fr]">
          <div className="flex flex-col gap-3">
            <Wordmark />
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              {t.footer.tagline}
            </p>
            <p className="text-sm font-medium text-primary">{t.footer.built}</p>
          </div>

          <nav aria-label={t.footer.navLabel} className="flex flex-col gap-2.5">
            {SECTIONS.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                className="w-fit text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t.nav[id]}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              {t.footer.socialLabel}
            </p>
            <ul className="flex flex-wrap gap-2">
              {socials.map(({ href, label, icon: Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    target={href.startsWith("mailto:") ? undefined : "_blank"}
                    rel="noreferrer noopener"
                    aria-label={label}
                    className="grid size-11 place-items-center rounded-xl border border-border bg-background/70 text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
                  >
                    <Icon className="size-4" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p dir="ltr" className="text-sm text-muted-foreground">
              {site.email}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {site.brand}. {t.footer.rights}
          </p>
          <p>{t.about.location}</p>
        </div>
      </div>
    </footer>
  );
}
