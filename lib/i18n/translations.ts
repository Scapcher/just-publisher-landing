export type Locale = "en" | "tr";

export type Translations = {
  nav: {
    brand: string;
    links: { label: string; href: string }[];
    cta: { label: string; href: string };
  };
  hero: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: { label: string; href: string };
    secondary: { label: string; href: string };
    trust: string;
  };
  trackRecord: {
    eyebrow: string;
    metrics: { prefix: string; value: number; suffix: string; label: string }[];
  };
  apps: {
    eyebrow: string;
    title: string;
  };
  marquee: {
    heading: string;
    cta: string;
  };
  faq: {
    eyebrow: string;
    title: string;
    stillUnsure: string;
    bookCall: string;
    items: { question: string; answer: string }[];
  };
  cta: {
    eyebrow: string;
    headline: string;
    subtitle: string;
    cta: { label: string; href: string };
    emailDirect: string;
  };
  footer: {
    brand: string;
    nav: { label: string; href: string }[];
    legal: { label: string; href: string }[];
    copy: string;
  };
  about: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    model: {
      label: string;
      heading: string;
      para1: string;
      para2: string;
    };
    values: { icon: string; title: string; body: string }[];
    process: {
      label: string;
      heading: string;
      steps: { num: string; title: string; body: string }[];
    };
    stats: { value: string; label: string }[];
    ctaStrip: {
      eyebrow: string;
      heading: string;
      body: string;
      cta: string;
    };
  };
  contact: {
    eyebrow: string;
    heading: string;
    subtitle: string;
    emailLabel: string;
    whyLabel: string;
    trustBadges: { icon: string; text: string }[];
    whatToIncludeLabel: string;
    checkItems: string[];
    nextStepsLabel: string;
    nextSteps: string[];
    form: {
      heading: string;
      subheading: string;
      nameLabel: string;
      namePlaceholder: string;
      emailLabel: string;
      emailPlaceholder: string;
      appLabel: string;
      appPlaceholder: string;
      messageLabel: string;
      messagePlaceholder: string;
      submit: string;
      submitting: string;
      successTitle: string;
      successBodyPrefix: string;
      successBodySuffix: string;
      submitAnother: string;
      errorFallback: string;
      orEmail: string;
    };
    statsPanel: { value: string; label: string }[];
  };
};

export const translations: Record<Locale, Translations> = {
  en: {
    nav: {
      brand: "JustPublisher",
      links: [
        { label: "Apps",    href: "#apps" },
        { label: "About",   href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      cta: { label: "Book a Call", href: "mailto:hello@justpublisher.com" },
    },

    hero: {
      eyebrow: "(01) MOBILE APP PUBLISHER",
      headline: "JustPublisher.",
      subtitle:
        "We buy great apps and grow them. If you've built something worth believing in, we'd like to talk.",
      cta:       { label: "Book a Call",  href: "mailto:hello@justpublisher.com" },
      secondary: { label: "See our apps", href: "#apps" },
      trust: "Response within 48 hours · No commitments",
    },

    trackRecord: {
      eyebrow: "(02) TRACK RECORD",
      metrics: [
        { prefix: "+$", value: 1,  suffix: "M", label: "Revenue Generated" },
        { prefix: "+",  value: 10, suffix: "",  label: "Apps Published" },
        { prefix: "+",  value: 20, suffix: "",  label: "Studios Supported" },
      ],
    },

    apps: {
      eyebrow: "(03) PORTFOLIO",
      title: "Apps we believe in.",
    },

    marquee: {
      heading: "Apps we believe in.",
      cta: "Explore Our Apps",
    },

    faq: {
      eyebrow: "(04) QUESTIONS",
      title: "Things people ask.",
      stillUnsure: "Still unsure?",
      bookCall: "Book a call",
      items: [
        {
          question: "What does a publisher actually do?",
          answer:
            "We handle the full distribution layer — App Store optimization, paid user acquisition, review management, and A/B testing release cadences. You build. We make sure people find it, install it, and keep coming back.",
        },
        {
          question: "Do I lose ownership of my app?",
          answer:
            "No. You own your codebase, your data, and your users. We acquire the commercial rights to distribute and grow the app. If the relationship ends, you walk away with everything that's yours.",
        },
        {
          question: "How is revenue split?",
          answer:
            "It depends on the deal, but we're transparent about the model upfront: a percentage of net revenue, negotiated before anything is signed. We win when you win.",
        },
        {
          question: "What kind of apps are you looking for?",
          answer:
            "Consumer apps with a clear use case, decent retention, and a founder who cares about the craft. Downloads don't matter much. We look for apps that are a bit too good for the attention they're getting.",
        },
        {
          question: "My app has almost no downloads. Is it too early?",
          answer:
            "Probably not. Most apps we've taken on had fewer than 5,000 downloads. We're not buying traction — we're buying potential.",
        },
        {
          question: "How long does the process take?",
          answer:
            "Usually 4 to 6 weeks from first call to signed agreement. We move at whatever speed you're comfortable with. Rushed decisions make bad partners.",
        },
        {
          question: "What happens after we sign?",
          answer:
            "We run a 30 day audit. Product, ASO, analytics. Then we ship a growth plan. You keep shipping features. We handle everything above the code.",
        },
      ],
    },

    cta: {
      eyebrow: "Ready to grow",
      headline: "Have an app? Let's grow.",
      subtitle: "We respond to every serious inquiry within 48 hours.",
      cta: { label: "Book a Call", href: "mailto:hello@justpublisher.com" },
      emailDirect: "Or email directly →",
    },

    footer: {
      brand: "JustPublisher",
      nav: [
        { label: "Apps",    href: "#apps" },
        { label: "About",   href: "/about" },
        { label: "Contact", href: "/contact" },
      ],
      legal: [
        { label: "EULA",    href: "/eula" },
        { label: "Privacy", href: "/privacy" },
        { label: "Terms",   href: "/terms" },
        { label: "Cookies", href: "/cookies" },
        { label: "KVKK",    href: "/kvkk" },
      ],
      copy: "© 2026 JustPublisher LLC. All rights reserved.",
    },

    about: {
      eyebrow: "(05) About",
      heading: "We back apps\nworth believing in.",
      subtitle:
        "JustPublisher is a mobile app publishing studio. We acquire, grow, and monetize apps built by independent developers — so they can keep building.",
      model: {
        label: "Our model",
        heading: "We win when\nyou win.",
        para1:
          "We acquire the commercial rights to distribute and grow your app. You retain full ownership of your code, your data, and your users. Revenue is split transparently before anything is signed.",
        para2:
          "We handle the full distribution layer: App Store optimization, paid user acquisition, review management, A/B testing, and release strategy. You keep shipping.",
      },
      values: [
        {
          icon: "◆",
          title: "We buy potential, not traction",
          body: "Most apps we've taken on had fewer than 5,000 downloads. We look for something a bit too good for the attention it's getting.",
        },
        {
          icon: "◎",
          title: "Radical transparency",
          body: "Revenue share is on the table before anything is signed. We walk you through every number. No surprises.",
        },
        {
          icon: "▲",
          title: "You own everything",
          body: "Your codebase, your users, your data. We acquire distribution rights only. If the relationship ends, you walk away whole.",
        },
      ],
      process: {
        label: "How it works",
        heading: "Four steps,\nzero surprises.",
        steps: [
          {
            num: "01",
            title: "Discovery",
            body: "Send us your app. We'll respond within 48 hours with honest feedback — whether we're the right fit or not.",
          },
          {
            num: "02",
            title: "Audit",
            body: "We dig into the product, analytics, market, and retention. Takes 1 to 2 weeks. No fluff, just clarity.",
          },
          {
            num: "03",
            title: "Agreement",
            body: "Transparent deal on the table before anything is signed. Your code, your users, your data — always.",
          },
          {
            num: "04",
            title: "Growth",
            body: "We run ASO, paid UA, A/B tests, and release strategy. You keep shipping features. We handle distribution.",
          },
        ],
      },
      stats: [
        { value: "+$1M", label: "Revenue Generated" },
        { value: "10+",  label: "Apps Published" },
        { value: "20+",  label: "Studios Supported" },
      ],
      ctaStrip: {
        eyebrow: "Ready to grow",
        heading: "Ready to grow your app?",
        body: "We respond to every serious inquiry within 48 hours.",
        cta: "Book a Call",
      },
    },

    contact: {
      eyebrow: "(06) Contact",
      heading: "Let's talk.",
      subtitle:
        "We respond to every serious inquiry within 48 hours. Real conversations, not templates.",
      emailLabel: "Email us directly",
      whyLabel: "Why reach out",
      trustBadges: [
        { icon: "⏱", text: "Response within 48 hours, every time" },
        { icon: "◎", text: "Real conversations — we review every inquiry personally" },
        { icon: "▲", text: "No commitment required to get a response" },
        { icon: "◆", text: "Your code and users stay yours, always" },
      ],
      whatToIncludeLabel: "What to include",
      checkItems: [
        "Your app name and what it does (one sentence)",
        "Platform(s) — iOS, Android, or both",
        "Current download or revenue numbers (ballpark is fine)",
        "What you're looking for from a publisher",
        "Timeline or any constraints",
      ],
      nextStepsLabel: "What happens next",
      nextSteps: [
        "We review your inquiry and respond within 48 hours.",
        "If there's potential fit, we schedule a 30 min intro call.",
        "We run a product and market audit — free, no strings.",
        "If we both like what we see, we put a deal on the table.",
      ],
      form: {
        heading: "Tell us about your app.",
        subheading:
          "We review every submission personally. Downloads don't matter — potential does.",
        nameLabel: "Your name",
        namePlaceholder: "Alex Johnson",
        emailLabel: "Email address",
        emailPlaceholder: "alex@example.com",
        appLabel: "App name",
        appPlaceholder: "My App",
        messageLabel: "Tell us about your app",
        messagePlaceholder:
          "What does your app do? What stage is it at? What are you looking for?",
        submit: "Send Inquiry",
        submitting: "Sending…",
        successTitle: "Inquiry received!",
        successBodyPrefix: "We'll respond to ",
        successBodySuffix: " within 48 hours.",
        submitAnother: "Submit another inquiry",
        errorFallback: "Something went wrong. Please email us directly.",
        orEmail: "Or email us at",
      },
      statsPanel: [
        { value: "+$1M", label: "Revenue Generated" },
        { value: "10+",  label: "Apps Published" },
        { value: "48h",  label: "Max Response Time" },
        { value: "100%", label: "Inquiry Response Rate" },
      ],
    },
  },

  // ─── Turkish ──────────────────────────────────────────────────────────────────

  tr: {
    nav: {
      brand: "JustPublisher",
      links: [
        { label: "Uygulamalar", href: "#apps" },
        { label: "Hakkımızda",  href: "/about" },
        { label: "İletişim",    href: "/contact" },
      ],
      cta: { label: "Görüşme Ayarla", href: "mailto:hello@justpublisher.com" },
    },

    hero: {
      eyebrow: "(01) MOBİL UYGULAMA YAYINCISI",
      headline: "JustPublisher.",
      subtitle:
        "Harika uygulamaları satın alır ve büyütürüz. Eğer inanmaya değer bir şey inşa ettiyseniz, görüşmek isteriz.",
      cta:       { label: "Görüşme Ayarla",       href: "mailto:hello@justpublisher.com" },
      secondary: { label: "Uygulamalarımızı gör", href: "#apps" },
      trust: "48 saat içinde yanıt · Taahhüt gerektirmez",
    },

    trackRecord: {
      eyebrow: "(02) BAŞARIM",
      metrics: [
        { prefix: "+$", value: 1,  suffix: "M", label: "Elde Edilen Gelir" },
        { prefix: "+",  value: 10, suffix: "",  label: "Yayınlanan Uygulama" },
        { prefix: "+",  value: 20, suffix: "",  label: "Desteklenen Stüdyo" },
      ],
    },

    apps: {
      eyebrow: "(03) PORTFÖY",
      title: "İnandığımız uygulamalar.",
    },

    marquee: {
      heading: "İnandığımız uygulamalar.",
      cta: "Uygulamalarımızı Keşfet",
    },

    faq: {
      eyebrow: "(04) SORULAR",
      title: "Sık sorulanlar.",
      stillUnsure: "Hâlâ emin değil misiniz?",
      bookCall: "Görüşme ayarlayın",
      items: [
        {
          question: "Bir yayıncı aslında ne yapar?",
          answer:
            "Tam dağıtım katmanını yönetiriz — App Store optimizasyonu, ücretli kullanıcı edinimi, yorum yönetimi ve A/B testi sürüm döngüleri. Siz geliştirin. Biz insanların bulmasını, indirmesini ve geri gelmesini sağlarız.",
        },
        {
          question: "Uygulamamın sahipliğini kaybeder miyim?",
          answer:
            "Hayır. Kaynak kodunuz, verileriniz ve kullanıcılarınız size aittir. Biz yalnızca uygulamayı dağıtma ve büyütme ticari haklarını alırız. İlişki sona ererse, size ait olan her şeyle ayrılırsınız.",
        },
        {
          question: "Gelir paylaşımı nasıl işliyor?",
          answer:
            "Anlaşmaya göre değişir, ancak modeli baştan şeffaf bir şekilde paylaşırız: net gelirin yüzdesi, herhangi bir şey imzalanmadan önce müzakere edilir. Biz kazandığınızda kazanırız.",
        },
        {
          question: "Ne tür uygulamalar arıyorsunuz?",
          answer:
            "Açık bir kullanım senaryosu, makul bir elde tutma oranı ve işine önem veren bir kurucusu olan tüketici uygulamaları. İndirme sayısı çok önemli değil. Aldıkları ilgiye göre biraz fazla iyi olan uygulamaları arıyoruz.",
        },
        {
          question: "Uygulamamın neredeyse hiç indirmesi yok. Çok erken mi?",
          answer:
            "Muhtemelen değil. Üstlendiğimiz uygulamaların çoğunun 5.000'den az indirmesi vardı. Biz çekiş satın almıyoruz — potansiyel satın alıyoruz.",
        },
        {
          question: "Süreç ne kadar sürer?",
          answer:
            "Genellikle ilk görüşmeden imzalanan anlaşmaya kadar 4-6 hafta. İstediğiniz hızda ilerliyoruz. Aceleyle alınan kararlar kötü ortaklıklar yaratır.",
        },
        {
          question: "İmzaladıktan sonra ne olur?",
          answer:
            "30 günlük bir denetim yapıyoruz. Ürün, ASO, analitik. Ardından bir büyüme planı sunuyoruz. Siz özellikler geliştirmeye devam edersiniz. Biz kod dışındaki her şeyi yönetiriz.",
        },
      ],
    },

    cta: {
      eyebrow: "Büyümeye hazır",
      headline: "Bir uygulamanız var mı? Büyütelim.",
      subtitle: "Her ciddi başvuruya 48 saat içinde yanıt veriyoruz.",
      cta: { label: "Görüşme Ayarla", href: "mailto:hello@justpublisher.com" },
      emailDirect: "Ya da doğrudan e-posta gönderin →",
    },

    footer: {
      brand: "JustPublisher",
      nav: [
        { label: "Uygulamalar", href: "#apps" },
        { label: "Hakkımızda",  href: "/about" },
        { label: "İletişim",    href: "/contact" },
      ],
      legal: [
        { label: "EULA",    href: "/eula" },
        { label: "Gizlilik", href: "/privacy" },
        { label: "Şartlar",  href: "/terms" },
        { label: "Çerezler", href: "/cookies" },
        { label: "KVKK",    href: "/kvkk" },
      ],
      copy: "© 2026 JustPublisher LLC. Tüm hakları saklıdır.",
    },

    about: {
      eyebrow: "(05) Hakkımızda",
      heading: "İnanmaya değer\nuygulamaları destekliyoruz.",
      subtitle:
        "JustPublisher bir mobil uygulama yayın stüdyosudur. Bağımsız geliştiriciler tarafından inşa edilen uygulamaları satın alır, büyütür ve monetize ederiz — onlar geliştirmeye devam etsin diye.",
      model: {
        label: "Modelimiz",
        heading: "Siz kazandığınızda\nbiz kazanırız.",
        para1:
          "Uygulamanızı dağıtma ve büyütme ticari haklarını alırız. Kaynak kodunuzun, verilerinizin ve kullanıcılarınızın tam sahipliği sizde kalır. Gelir, herhangi bir şey imzalanmadan önce şeffaf bir şekilde paylaşılır.",
        para2:
          "Tam dağıtım katmanını yönetiriz: App Store optimizasyonu, ücretli kullanıcı edinimi, yorum yönetimi, A/B testi ve sürüm stratejisi. Siz geliştirmeye devam edersiniz.",
      },
      values: [
        {
          icon: "◆",
          title: "Çekiş değil, potansiyel satın alırız",
          body: "Üstlendiğimiz uygulamaların çoğunun 5.000'den az indirmesi vardı. Aldığı ilgiye göre biraz fazla iyi olan şeyleri arıyoruz.",
        },
        {
          icon: "◎",
          title: "Radikal şeffaflık",
          body: "Gelir paylaşımı, herhangi bir şey imzalanmadan önce masaya yatırılır. Her rakamı sizinle birlikte gözden geçiririz. Sürpriz yok.",
        },
        {
          icon: "▲",
          title: "Her şey size ait",
          body: "Kaynak kodunuz, kullanıcılarınız, verileriniz. Yalnızca dağıtım haklarını alırız. İlişki sona ererse, eksiksiz ayrılırsınız.",
        },
      ],
      process: {
        label: "Nasıl çalışır",
        heading: "Dört adım,\nsıfır sürpriz.",
        steps: [
          {
            num: "01",
            title: "Keşif",
            body: "Bize uygulamanızı gönderin. Doğru eşleşme olup olmadığına dair dürüst geri bildirimle 48 saat içinde yanıt veririz.",
          },
          {
            num: "02",
            title: "Denetim",
            body: "Ürün, analitik, pazar ve elde tutma oranını inceleriz. 1-2 hafta sürer. Gereksiz detay yok, sadece netlik.",
          },
          {
            num: "03",
            title: "Anlaşma",
            body: "Herhangi bir şey imzalanmadan önce şeffaf bir teklif. Kodunuz, kullanıcılarınız, verileriniz — her zaman.",
          },
          {
            num: "04",
            title: "Büyüme",
            body: "ASO, ücretli UA, A/B testleri ve sürüm stratejisi yürütürüz. Siz özellikler geliştirmeye devam edin. Biz dağıtımı yönetiriz.",
          },
        ],
      },
      stats: [
        { value: "+$1M", label: "Elde Edilen Gelir" },
        { value: "10+",  label: "Yayınlanan Uygulama" },
        { value: "20+",  label: "Desteklenen Stüdyo" },
      ],
      ctaStrip: {
        eyebrow: "Büyümeye hazır",
        heading: "Uygulamanızı büyütmeye hazır mısınız?",
        body: "Her ciddi başvuruya 48 saat içinde yanıt veriyoruz.",
        cta: "Görüşme Ayarla",
      },
    },

    contact: {
      eyebrow: "(06) İletişim",
      heading: "Konuşalım.",
      subtitle:
        "Her ciddi başvuruya 48 saat içinde yanıt veriyoruz. Gerçek konuşmalar, şablonlar değil.",
      emailLabel: "Doğrudan e-posta gönderin",
      whyLabel: "Neden ulaşmalısınız",
      trustBadges: [
        { icon: "⏱", text: "Her seferinde 48 saat içinde yanıt" },
        { icon: "◎", text: "Gerçek konuşmalar — her başvuruyu kişisel olarak inceliyoruz" },
        { icon: "▲", text: "Yanıt almak için herhangi bir taahhüt gerekmez" },
        { icon: "◆", text: "Kodunuz ve kullanıcılarınız her zaman size ait" },
      ],
      whatToIncludeLabel: "Neleri dahil etmelisiniz",
      checkItems: [
        "Uygulamanızın adı ve ne yaptığı (tek cümle)",
        "Platform(lar) — iOS, Android veya her ikisi",
        "Mevcut indirme veya gelir rakamları (yaklaşık olabilir)",
        "Bir yayıncıdan ne aradığınız",
        "Zaman çizelgesi veya herhangi bir kısıtlama",
      ],
      nextStepsLabel: "Sırada ne var",
      nextSteps: [
        "Başvurunuzu inceliyoruz ve 48 saat içinde yanıt veriyoruz.",
        "Potansiyel bir uyum varsa, 30 dakikalık bir tanışma görüşmesi ayarlıyoruz.",
        "Ücretsiz, koşulsuz bir ürün ve pazar denetimi yapıyoruz.",
        "Her iki taraf da beğenirse, masaya bir teklif koyuyoruz.",
      ],
      form: {
        heading: "Uygulamanız hakkında bize anlatın.",
        subheading:
          "Her başvuruyu kişisel olarak inceliyoruz. İndirme sayısı önemli değil — potansiyel önemli.",
        nameLabel: "Adınız",
        namePlaceholder: "Ahmet Yılmaz",
        emailLabel: "E-posta adresi",
        emailPlaceholder: "ahmet@example.com",
        appLabel: "Uygulama adı",
        appPlaceholder: "Uygulamam",
        messageLabel: "Uygulamanız hakkında bize anlatın",
        messagePlaceholder:
          "Uygulamanız ne yapıyor? Hangi aşamada? Ne arıyorsunuz?",
        submit: "Başvuru Gönder",
        submitting: "Gönderiliyor…",
        successTitle: "Başvurunuz alındı!",
        successBodyPrefix: "",
        successBodySuffix: " adresine 48 saat içinde yanıt vereceğiz.",
        submitAnother: "Başka bir başvuru gönderin",
        errorFallback: "Bir şeyler ters gitti. Lütfen bize doğrudan e-posta gönderin.",
        orEmail: "Ya da bize e-posta gönderin:",
      },
      statsPanel: [
        { value: "+$1M", label: "Elde Edilen Gelir" },
        { value: "10+",  label: "Yayınlanan Uygulama" },
        { value: "48h",  label: "Maks Yanıt Süresi" },
        { value: "100%", label: "Başvuru Yanıt Oranı" },
      ],
    },
  },
};
