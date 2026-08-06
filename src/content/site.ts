/**
 * Central brand + project data. Add new projects to `projects` and the site
 * picks them up automatically. Media slots accept real assets later without
 * any layout changes (see src/components/AssetSlot.tsx).
 */

export const site = {
  brand: "Zeyad.dev",
  name: "Zeyad Tariq Badran",
  email: "zeyaddev81@gmail.com",
  whatsappDisplay: "+962 7 7064 5959",
  whatsappUrl:
    "https://wa.me/962770645959?text=Hello%20Zeyad%2C%20I%20found%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.",
  linkedin: "https://www.linkedin.com/in/zeyad-badran-97405b420/",
  instagram: "https://instagram.com/zeyadbadran81",
} as const;

export type Locale = "en" | "ar";

export type LocalizedText = Record<Locale, string>;
export type LocalizedList = Record<Locale, string[]>;

export interface ProjectMedia {
  /** Drop a real screenshot path here (e.g. "/images/two-hundred-burger-home.jpg"). */
  src?: string;
  alt: LocalizedText;
  frame: "browser" | "phone";
}

export interface Project {
  slug: string;
  name: string;
  type: LocalizedText;
  status: LocalizedText;
  liveUrl: string;
  year: string;
  description: LocalizedText;
  challenge: LocalizedText;
  solution: LocalizedText;
  features: LocalizedList;
  stack: string[];
  disclosure: LocalizedText;
  media: ProjectMedia[];
}

export const projects: Project[] = [
  {
    slug: "two-hundred-burger",
    name: "Two Hundred Burger",
    year: "2025",
    liveUrl: "https://twohundredburger.netlify.app/",
    type: {
      en: "Restaurant Website & Digital Ordering Experience",
      ar: "موقع مطعم وتجربة طلب رقمية",
    },
    status: { en: "Active", ar: "قيد التشغيل" },
    description: {
      en: "A premium restaurant website designed to strengthen the brand's online presence and simplify the path from menu discovery to ordering. It combines cinematic visuals, an interactive menu, bilingual support and direct WhatsApp ordering.",
      ar: "موقع مطعم بمستوى بصري راقٍ صُمّم لتعزيز حضور العلامة على الإنترنت وتبسيط الطريق من استعراض القائمة إلى إتمام الطلب، ويجمع بين لغة بصرية سينمائية وقائمة تفاعلية ودعم لغتين وطلب مباشر عبر واتساب.",
    },
    challenge: {
      en: "Many restaurants depend heavily on social platforms and lack a structured branded web experience where customers can browse offerings and act quickly.",
      ar: "تعتمد مطاعم كثيرة بشكل كبير على منصات التواصل الاجتماعي، وتفتقر إلى تجربة إلكترونية منظمة تحمل هوية العلامة ويستطيع فيها العميل استعراض ما يقدّمه المطعم واتخاذ قرار الطلب بسرعة.",
    },
    solution: {
      en: "A responsive dedicated restaurant experience that presents the brand professionally, makes menu discovery intuitive and creates a direct ordering path.",
      ar: "تجربة مخصّصة ومتوافقة مع جميع الشاشات تعرض العلامة بشكل احترافي، وتجعل استكشاف القائمة سهلاً وبديهياً، وتفتح مساراً مباشراً لإتمام الطلب.",
    },
    features: {
      en: [
        "Cinematic hero section",
        "Fully responsive layout",
        "Interactive digital menu",
        "Menu search",
        "Category filters",
        "Featured offers",
        "WhatsApp ordering",
        "English and Arabic",
        "Clear calls to action",
      ],
      ar: [
        "واجهة افتتاحية سينمائية",
        "تصميم متوافق مع جميع الشاشات",
        "قائمة رقمية تفاعلية",
        "بحث داخل القائمة",
        "تصفية حسب الأقسام",
        "عروض مميّزة",
        "الطلب عبر واتساب",
        "الإنجليزية والعربية",
        "دعوات واضحة لاتخاذ الإجراء",
      ],
    },
    stack: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    disclosure: {
      en: "Portfolio concept: this is a self-initiated demo project, not an official commissioned website for the brand. The live demo states that it is unofficial and simulated.",
      ar: "عمل تعريفي: هذا مشروع تجريبي بمبادرة شخصية، وليس موقعاً رسمياً مُتعاقداً عليه مع العلامة. النسخة المنشورة توضّح أنها غير رسمية ومحاكاة لتجربة حقيقية.",
    },
    media: [
      {
        src: "/images/two-hundred-burger-desktop.png",
        frame: "browser",
        alt: {
          en: "Two Hundred Burger website home page on desktop",
          ar: "الصفحة الرئيسية لموقع Two Hundred Burger على الحاسوب",
        },
      },
      {
        src: "/images/two-hundred-burger-mobile.jpg",
        frame: "phone",
        alt: {
          en: "Two Hundred Burger interactive menu on mobile",
          ar: "القائمة التفاعلية لموقع Two Hundred Burger على الهاتف",
        },
      },
    ],
  },
];
