import { ArrowDown, MessageCircle, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AssetSlot } from "@/components/asset-slot";
import { useLocale } from "@/lib/locale";
import { site } from "@/content/site";

export function Hero() {
  const { t } = useLocale();

  return (
    <section id="top" className="grid-backdrop relative overflow-hidden pb-16 pt-28 md:pb-24 md:pt-36">
      <span className="glow-orb -top-24 start-[-6rem] size-[26rem]" aria-hidden="true" />
      <span
        className="glow-orb top-40 end-[-8rem] size-[22rem] opacity-30"
        aria-hidden="true"
      />

      <div className="container-page">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div className="rise-in flex flex-col items-start gap-6">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3.5 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="relative flex size-2" aria-hidden="true">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary/60" />
              <span className="relative inline-flex size-2 rounded-full bg-primary" />
            </span>
            {t.hero.eyebrow}
          </span>

          <h1 className="max-w-4xl text-balance text-4xl font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]">
            {t.hero.headline}{" "}
            <span className="text-gradient-brand">{t.hero.headlineAccent}</span>
          </h1>

          <p className="max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            {t.hero.sub}
          </p>

          <div className="flex w-full flex-col gap-3 pt-2 sm:w-auto sm:flex-row sm:items-center">
            <Button asChild variant="hero" size="xl">
              <a href={site.whatsappUrl} target="_blank" rel="noreferrer noopener">
                <MessageCircle className="size-4" aria-hidden="true" />
                {t.cta.whatsapp}
              </a>
            </Button>
            <Button asChild variant="quiet" size="xl">
              <a href="#work">
                <ArrowDown className="size-4" aria-hidden="true" />
                {t.cta.work}
              </a>
            </Button>
          </div>

          <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            {t.hero.availability}
          </p>
        </div>

        {/* Video Player */}
        <div className="rise-in w-full max-w-xl mx-auto lg:max-w-none">
          <div className="surface-panel sheen relative overflow-hidden p-2 shadow-[var(--shadow-lift)] md:p-3 bg-black">
            <div className="relative overflow-hidden rounded-xl">
              <video 
                className="w-full aspect-video object-cover rounded-xl"
                controls
                playsInline
                poster="/images/reel-poster.jpg"
              >
                <source src="/videos/reel.mp4.mp4" type="video/mp4" />
                {t.hero.reelTitle}
              </video>
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
