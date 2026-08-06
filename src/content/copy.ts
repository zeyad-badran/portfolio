import type { Locale } from "./site";

export interface Copy {
  nav: { work: string; services: string; process: string; about: string; contact: string };
  a11y: {
    skip: string;
    openMenu: string;
    closeMenu: string;
    toggleTheme: string;
    switchLanguage: string;
    mainNav: string;
    themeLight: string;
    themeDark: string;
    themeSystem: string;
  };
  cta: { whatsapp: string; work: string; email: string; visitLive: string };
  hero: {
    eyebrow: string;
    headline: string;
    headlineAccent: string;
    sub: string;
    reelTitle: string;
    reelNote: string;
    availability: string;
  };
  services: {
    label: string;
    title: string;
    sub: string;
    items: { title: string; body: string; points: string[] }[];
  };
  work: {
    label: string;
    title: string;
    sub: string;
    challenge: string;
    solution: string;
    features: string;
    stack: string;
    typeLabel: string;
    statusLabel: string;
    disclosureLabel: string;
    mediaPlaceholder: string;
    more: string;
  };
  process: {
    label: string;
    title: string;
    sub: string;
    steps: { title: string; body: string }[];
  };
  about: {
    label: string;
    title: string;
    body: string;
    body2: string;
    principles: { title: string; body: string }[];
    locationLabel: string;
    location: string;
  };
  contact: {
    label: string;
    title: string;
    sub: string;
    responseNote: string;
    emailLabel: string;
    whatsappLabel: string;
    linkedinLabel: string;
    instagramLabel: string;
    locationLabel: string;
  };
  footer: { tagline: string; rights: string; built: string; navLabel: string; socialLabel: string };
  meta: { title: string; description: string; role: string };
}

const en: Copy = {
  nav: { work: "Work", services: "Services", process: "Process", about: "About", contact: "Contact" },
  a11y: {
    skip: "Skip to content",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
    toggleTheme: "Change theme",
    switchLanguage: "Switch language to Arabic",
    mainNav: "Main navigation",
    themeLight: "Light",
    themeDark: "Dark",
    themeSystem: "System",
  },
  cta: {
    whatsapp: "Message on WhatsApp",
    work: "View selected work",
    email: "Send an email",
    visitLive: "Visit live site",
  },
  hero: {
    eyebrow: "Independent digital product studio",
    headline: "Transforming ambitious ideas into",
    headlineAccent: "digital products that work.",
    sub: "Zeyad.dev is a studio practice for modern websites, scalable SaaS platforms and AI-powered solutions — designed with clarity, built to hold up in real use.",
    reelTitle: "Studio reel",
    reelNote: "A short launch reel will live here.",
    availability: "Available for new projects",
  },
  services: {
    label: "Services",
    title: "Four ways I help you ship",
    sub: "Focused engagements, from a first landing page to a product that grows with your business.",
    items: [
      {
        title: "Website Development",
        body: "Fast, responsive marketing sites that make your offer clear and turn attention into enquiries.",
        points: ["Responsive builds", "Performance & SEO basics", "Bilingual content"],
      },
      {
        title: "SaaS Development",
        body: "Product interfaces and dashboards built around real workflows, structured to scale as usage grows.",
        points: ["Dashboards & app UI", "Clean data structure", "Maintainable code"],
      },
      {
        title: "AI Solutions & Automation",
        body: "Practical AI features and automations that remove repetitive work and speed up everyday operations.",
        points: ["Assistants & chat flows", "Content & data automation", "Workflow integrations"],
      },
      {
        title: "UI/UX Design",
        body: "Interface design with a clear visual direction, sensible hierarchy and interactions people understand.",
        points: ["Design systems", "Interface flows", "Accessible patterns"],
      },
    ],
  },
  work: {
    label: "Selected work",
    title: "Featured project",
    sub: "A close look at one project, its brief and how it was approached.",
    challenge: "The challenge",
    solution: "The approach",
    features: "What it includes",
    stack: "Built with",
    typeLabel: "Type",
    statusLabel: "Status",
    disclosureLabel: "Disclosure",
    mediaPlaceholder: "Screenshot slot — real captures drop in here.",
    more: "More projects will be added here as they launch.",
  },
  process: {
    label: "Process",
    title: "A clear path from idea to launch",
    sub: "Six steps, so you always know where the project stands and what comes next.",
    steps: [
      { title: "Discover", body: "We talk through your goals, audience and constraints before anything is designed." },
      { title: "Define", body: "Scope, structure and priorities are written down so the build has a fixed target." },
      { title: "Design", body: "Visual direction and interface flows are shaped and reviewed with you." },
      { title: "Build", body: "Development happens in reviewable increments with working previews." },
      { title: "Test", body: "Responsiveness, accessibility, content and edge cases are checked on real devices." },
      { title: "Launch", body: "Deployment, final checks and a clean handover with notes on how to extend it." },
    ],
  },
  about: {
    label: "About",
    title: "The person behind the studio",
    body: "I'm Zeyad Tariq Badran, a web developer and digital product builder based in Amman, Jordan. I create modern websites, scalable SaaS platforms and AI-powered solutions with a focus on clear user experiences, strong visual direction and dependable implementation.",
    body2:
      "I work directly with the people I build for — no layers, no handoffs. That keeps decisions fast, scope honest and the finished product close to the intent behind it.",
    principles: [
      { title: "Clarity first", body: "If the message and the interface are clear, everything else gets easier." },
      { title: "Built to last", body: "Structured code and content that can be extended instead of rebuilt." },
      { title: "Direct collaboration", body: "One point of contact, straight answers, visible progress." },
    ],
    locationLabel: "Based in",
    location: "Amman, Jordan",
  },
  contact: {
    label: "Contact",
    title: "Have a project in mind?",
    sub: "Tell me what you're building and what it needs to do. WhatsApp is the fastest way to reach me.",
    responseNote: "Messages are usually answered the same day.",
    emailLabel: "Email",
    whatsappLabel: "WhatsApp",
    linkedinLabel: "LinkedIn",
    instagramLabel: "Instagram",
    locationLabel: "Location",
  },
  footer: {
    tagline: "Websites, SaaS platforms and AI solutions.",
    rights: "All rights reserved.",
    built: "Built with intention in Amman.",
    navLabel: "Footer navigation",
    socialLabel: "Social links",
  },
  meta: {
    title: "Zeyad.dev — Web Developer, SaaS Builder & AI Solutions Creator",
    description:
      "Zeyad.dev is an independent digital product studio led by Zeyad Tariq Badran in Amman, Jordan — modern websites, scalable SaaS platforms and AI-powered solutions.",
    role: "Web Developer, SaaS Builder & AI Solutions Creator",
  },
};

const ar: Copy = {
  nav: { work: "الأعمال", services: "الخدمات", process: "المنهجية", about: "نبذة", contact: "تواصل" },
  a11y: {
    skip: "الانتقال إلى المحتوى",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
    toggleTheme: "تغيير المظهر",
    switchLanguage: "التبديل إلى اللغة الإنجليزية",
    mainNav: "التنقل الرئيسي",
    themeLight: "فاتح",
    themeDark: "داكن",
    themeSystem: "النظام",
  },
  cta: {
    whatsapp: "تواصل عبر واتساب",
    work: "استعرض الأعمال",
    email: "أرسل بريداً إلكترونياً",
    visitLive: "زيارة الموقع",
  },
  hero: {
    eyebrow: "استوديو مستقل لبناء المنتجات الرقمية",
    headline: "أحوّل الأفكار الطموحة إلى",
    headlineAccent: "منتجات رقمية تعمل فعلاً.",
    sub: "Zeyad.dev استوديو متخصص في المواقع الحديثة ومنصات SaaS القابلة للتوسّع والحلول المدعومة بالذكاء الاصطناعي، بتصميم واضح وتنفيذ يصمد في الاستخدام الحقيقي.",
    reelTitle: "عرض الاستوديو",
    reelNote: "سيُضاف هنا مقطع تعريفي قصير.",
    availability: "متاح لمشاريع جديدة",
  },
  services: {
    label: "الخدمات",
    title: "أربع طرق لإخراج مشروعك إلى النور",
    sub: "خدمات محددة الأهداف، من أول صفحة تعريفية إلى منتج ينمو مع عملك.",
    items: [
      {
        title: "تطوير المواقع الإلكترونية",
        body: "مواقع سريعة ومتوافقة مع جميع الشاشات توضّح ما تقدّمه وتحوّل الاهتمام إلى استفسارات فعلية.",
        points: ["تصميم متوافق مع الشاشات", "أداء وأساسيات SEO", "محتوى بلغتين"],
      },
      {
        title: "تطوير منصات SaaS",
        body: "واجهات منتجات ولوحات تحكم مبنية على سياق العمل الحقيقي، ومهيّأة للتوسّع مع نمو الاستخدام.",
        points: ["لوحات تحكم وواجهات تطبيقات", "بنية بيانات منظمة", "كود قابل للصيانة"],
      },
      {
        title: "حلول الذكاء الاصطناعي والأتمتة",
        body: "ميزات ذكاء اصطناعي وأتمتة عملية تختصر المهام المتكرّرة وتسرّع العمل اليومي.",
        points: ["مساعدون ومحادثات ذكية", "أتمتة المحتوى والبيانات", "ربط سير العمل"],
      },
      {
        title: "تصميم واجهات وتجربة المستخدم",
        body: "تصميم واجهات باتجاه بصري واضح وتسلسل منطقي وتفاعلات يفهمها المستخدم بسهولة.",
        points: ["أنظمة تصميم", "مسارات الاستخدام", "أنماط متاحة للجميع"],
      },
    ],
  },
  work: {
    label: "أعمال مختارة",
    title: "المشروع المميّز",
    sub: "نظرة أقرب على مشروع واحد: متطلباته وطريقة التعامل معه.",
    challenge: "التحدي",
    solution: "المعالجة",
    features: "ما يتضمّنه",
    stack: "التقنيات",
    typeLabel: "النوع",
    statusLabel: "الحالة",
    disclosureLabel: "إفصاح",
    mediaPlaceholder: "مساحة مخصّصة للصور — تُضاف اللقطات الفعلية هنا.",
    more: "ستُضاف مشاريع أخرى هنا عند إطلاقها.",
  },
  process: {
    label: "المنهجية",
    title: "مسار واضح من الفكرة إلى الإطلاق",
    sub: "ست مراحل تجعلك على دراية دائمة بموقع المشروع وبالخطوة التالية.",
    steps: [
      { title: "الاستكشاف", body: "نتحدث عن أهدافك وجمهورك وقيودك قبل البدء بأي تصميم." },
      { title: "التحديد", body: "نوثّق النطاق والبنية والأولويات ليكون للتنفيذ هدف ثابت." },
      { title: "التصميم", body: "نصيغ الاتجاه البصري ومسارات الواجهة ونراجعها معك." },
      { title: "التنفيذ", body: "يتم التطوير على مراحل قابلة للمراجعة مع نسخ تجريبية تعمل." },
      { title: "الاختبار", body: "نتحقق من التوافق وإتاحة الوصول والمحتوى والحالات الاستثنائية على أجهزة حقيقية." },
      { title: "الإطلاق", body: "النشر والفحص النهائي وتسليم منظّم مع ملاحظات للتوسّع لاحقاً." },
    ],
  },
  about: {
    label: "نبذة",
    title: "من يقف خلف الاستوديو",
    body: "أنا زياد طارق بدران، مطوّر ويب وباني منتجات رقمية مقيم في عمّان، الأردن. أبني مواقع حديثة ومنصات SaaS قابلة للتوسّع وحلولاً مدعومة بالذكاء الاصطناعي، مع تركيز على تجارب استخدام واضحة واتجاه بصري قوي وتنفيذ يمكن الاعتماد عليه.",
    body2:
      "أعمل مباشرة مع أصحاب المشاريع دون وسطاء، وهذا يجعل القرارات أسرع والنطاق أكثر واقعية والنتيجة أقرب إلى الفكرة الأصلية.",
    principles: [
      { title: "الوضوح أولاً", body: "عندما تكون الرسالة والواجهة واضحتين، يصبح كل ما تبقّى أسهل." },
      { title: "بناء يدوم", body: "كود ومحتوى منظّمان قابلان للتوسّع بدل إعادة البناء من الصفر." },
      { title: "تعاون مباشر", body: "جهة تواصل واحدة، إجابات صريحة، وتقدّم واضح." },
    ],
    locationLabel: "المقر",
    location: "عمّان، الأردن",
  },
  contact: {
    label: "تواصل",
    title: "لديك مشروع في ذهنك؟",
    sub: "أخبرني بما تريد بناءه وما يجب أن يحققه. واتساب هو أسرع وسيلة للوصول إليّ.",
    responseNote: "غالباً ما يتم الرد على الرسائل في اليوم نفسه.",
    emailLabel: "البريد الإلكتروني",
    whatsappLabel: "واتساب",
    linkedinLabel: "لينكدإن",
    instagramLabel: "إنستغرام",
    locationLabel: "الموقع",
  },
  footer: {
    tagline: "مواقع إلكترونية ومنصات SaaS وحلول ذكاء اصطناعي.",
    rights: "جميع الحقوق محفوظة.",
    built: "صُنع بعنايةٍ في عمّان.",
    navLabel: "تنقل التذييل",
    socialLabel: "روابط التواصل",
  },
  meta: {
    title: "Zeyad.dev — مطوّر ويب وباني منصات SaaS وحلول ذكاء اصطناعي",
    description:
      "Zeyad.dev استوديو مستقل للمنتجات الرقمية يقوده زياد طارق بدران من عمّان، الأردن: مواقع حديثة ومنصات SaaS قابلة للتوسّع وحلول مدعومة بالذكاء الاصطناعي.",
    role: "مطوّر ويب وباني منصات SaaS وحلول ذكاء اصطناعي",
  },
};

export const copy: Record<Locale, Copy> = { en, ar };
