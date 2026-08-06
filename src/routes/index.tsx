import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { Work } from "@/components/sections/work";
import { Process } from "@/components/sections/process";
import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { useLocale } from "@/lib/locale";
import { copy } from "@/content/copy";
import { site, projects } from "@/content/site";

const title = copy.en.meta.title;
const description = copy.en.meta.description;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      {
        name: "keywords",
        content:
          "web developer Amman, SaaS developer Jordan, AI solutions, UI UX design, Zeyad Badran, Zeyad.dev",
      },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:url", content: "/" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify([
          {
            "@context": "https://schema.org",
            "@type": "Person",
            name: site.name,
            jobTitle: copy.en.meta.role,
            email: `mailto:${site.email}`,
            telephone: "+962770645959",
            url: "/",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amman",
              addressCountry: "JO",
            },
            knowsAbout: [
              "Website Development",
              "SaaS Development",
              "AI Solutions & Automation",
              "UI/UX Design",
            ],
            sameAs: [site.linkedin, site.instagram],
          },
          {
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: site.brand,
            description,
            founder: { "@type": "Person", name: site.name },
            areaServed: "Worldwide",
            email: `mailto:${site.email}`,
            telephone: "+962770645959",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Amman",
              addressCountry: "JO",
            },
            makesOffer: copy.en.services.items.map((item) => ({
              "@type": "Offer",
              itemOffered: { "@type": "Service", name: item.title, description: item.body },
            })),
            sameAs: [site.linkedin, site.instagram],
            hasPart: projects.map((p) => ({
              "@type": "CreativeWork",
              name: p.name,
              url: p.liveUrl,
            })),
          },
        ]),
      },
    ],
  }),
  component: Index,
});

function Index() {
  const { t } = useLocale();

  return (
    <div className="min-h-screen">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground"
      >
        {t.a11y.skip}
      </a>
      <SiteHeader />
      <main id="main">
        <Hero />
        <Work />
        <Services />
        <Process />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </div>
  );
}
