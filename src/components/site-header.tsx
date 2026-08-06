import { useEffect, useState } from "react";
import { Languages, Menu, MessageCircle, Monitor, Moon, Sun, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Wordmark } from "@/components/brand";
import { useLocale } from "@/lib/locale";
import { useTheme, type Theme } from "@/lib/theme";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const SECTIONS = ["work", "services", "process", "about", "contact"] as const;

export function SiteHeader() {
  const { t, locale, toggleLocale } = useLocale();
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const themeOptions: { value: Theme; label: string; icon: typeof Sun }[] = [
    { value: "light", label: t.a11y.themeLight, icon: Sun },
    { value: "dark", label: t.a11y.themeDark, icon: Moon },
    { value: "system", label: t.a11y.themeSystem, icon: Monitor },
  ];
  const ActiveThemeIcon = theme === "light" ? Sun : theme === "dark" ? Moon : Monitor;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border bg-background/85 backdrop-blur-xl"
          : "border-b border-transparent",
      )}
    >
      <div className="container-page flex h-16 items-center gap-3 md:h-20">
        <a href="#top" className="me-auto" aria-label={site.brand}>
          <Wordmark />
        </a>

        <nav aria-label={t.a11y.mainNav} className="hidden items-center gap-1 lg:flex">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
            >
              {t.nav[id]}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-1.5 lg:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLocale}
            aria-label={t.a11y.switchLanguage}
            className="gap-1.5 px-2 text-xs font-semibold uppercase w-auto"
          >
            <Languages className="size-4" aria-hidden="true" />
            {locale === "en" ? "AR" : "EN"}
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t.a11y.toggleTheme}>
                <ActiveThemeIcon className="size-4" aria-hidden="true" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-36">
              {themeOptions.map(({ value, label, icon: Icon }) => (
                <DropdownMenuItem
                  key={value}
                  onSelect={() => setTheme(value)}
                  className={cn("gap-2", theme === value && "text-primary")}
                >
                  <Icon className="size-4" aria-hidden="true" />
                  {label}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button asChild variant="hero" size="default" className="ms-1.5">
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer noopener">
              <MessageCircle className="size-4" aria-hidden="true" />
              {t.cta.whatsapp}
            </a>
          </Button>
        </div>

        <div className="flex items-center gap-1.5 lg:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleLocale}
            aria-label={t.a11y.switchLanguage}
            className="text-xs font-semibold uppercase"
          >
            {locale === "en" ? "AR" : "EN"}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label={t.a11y.toggleTheme}
          >
            <ActiveThemeIcon className="size-4" aria-hidden="true" />
          </Button>
          <Button
            variant="quiet"
            size="icon"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? t.a11y.closeMenu : t.a11y.openMenu}
            aria-expanded={open}
            aria-controls="mobile-nav"
          >
            {open ? (
              <X className="size-4" aria-hidden="true" />
            ) : (
              <Menu className="size-4" aria-hidden="true" />
            )}
          </Button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="border-t border-border bg-background/95 backdrop-blur-xl lg:hidden"
      >
        <nav aria-label={t.a11y.mainNav} className="container-page flex flex-col gap-1 py-4">
          {SECTIONS.map((id) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-xl px-3 py-3 text-base font-medium text-foreground transition-colors hover:bg-accent"
            >
              {t.nav[id]}
            </a>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-2 w-full">
            <a href={site.whatsappUrl} target="_blank" rel="noreferrer noopener">
              <MessageCircle className="size-4" aria-hidden="true" />
              {t.cta.whatsapp}
            </a>
          </Button>
        </nav>
      </div>
    </header>
  );
}
