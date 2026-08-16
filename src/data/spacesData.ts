export interface SpaceItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  subtitle: {
    en: string;
    ar: string;
  };
  capacity: {
    seated: number;
    standing?: number;
  };
  description: {
    en: string;
    ar: string;
  };
  features: {
    en: string[];
    ar: string[];
  };
  image: string;
  type: 'dining' | 'event' | 'boardroom';
}

export const spacesData: SpaceItem[] = [
  {
    id: "suite-1977",
    name: {
      en: "The 1977 Heritage Suite",
      ar: "جناح 1977 التراثي الخاص"
    },
    subtitle: {
      en: "Ultra-Private Executive Dining",
      ar: "تناول طعام تنفيذي فائق الخصوصية"
    },
    capacity: {
      seated: 12,
      standing: 16
    },
    description: {
      en: "An intimate, soundproof dining salon crafted for high-level business negotiations, discreet executive dinners, and distinguished family celebrations.",
      ar: "صالون طعام حميمي وعازل للصوت مصمم لاجتماعات العمل رفيعة المستوى وعشاء كبار التنفيذيين والاحتفالات العائلية المميزة."
    },
    features: {
      en: [
        "Dedicated private butler service",
        "Customized bespoke degustation menus",
        "Acoustic walnut wood paneling",
        "Private discreet entrance"
      ],
      ar: [
        "خدمة نادل خاص متفرغ",
        "قوائم تذوق خاصة ومصممة حسب الطلب",
        "ألواح جدارية خشبية عازلة للصوت",
        "مدخل خاص ومنفصل"
      ]
    },
    image: "/assets/images/private-dining.jpg",
    type: "dining"
  },
  {
    id: "coastal-salon",
    name: {
      en: "The Coastal Salon",
      ar: "صالون الساحل للضيافة"
    },
    subtitle: {
      en: "Family & Corporate Group Dining",
      ar: "تناول الطعام للمجموعات والعائلات"
    },
    capacity: {
      seated: 24,
      standing: 30
    },
    description: {
      en: "A spacious private salon combining natural daylight, textured warm plaster, and flexible modular seating for gatherings up to 24 guests.",
      ar: "صالون خاص واسع يجمع بين الإضاءة الطبيعية وجدران الجص الدافئة وترتيبات جلوس مرنة لما يصل إلى 24 ضيفاً."
    },
    features: {
      en: [
        "Independent climate control",
        "Dedicated hospitality team",
        "Audio integration for speeches",
        "Curated sharing platters"
      ],
      ar: [
        "تحكم مستقل في درجات الحرارة",
        "فريق ضيافة مخصص للغرفة",
        "نظام صوتي متكامل للكلمات والخطابات",
        "أطباق مشاركة فاخرة منتقاة"
      ]
    },
    image: "/assets/images/restaurant-interior.jpg",
    type: "dining"
  },
  {
    id: "grand-conference-hall",
    name: {
      en: "The Jubail Conference Hall",
      ar: "قاعة الجبيل الكبرى للمؤتمرات والفعاليات"
    },
    subtitle: {
      en: "Conferences, Seminars & Corporate Banquets",
      ar: "المؤتمرات وورش العمل والمآدب الرسمية"
    },
    capacity: {
      seated: 120,
      standing: 180
    },
    description: {
      en: "A modern, high-specification event hall equipped with state-of-the-art 4K LED presentation displays, studio audio acoustics, and world-class live culinary stations.",
      ar: "قاعة فعاليات حديثة ومجهزة بشاشات عرض 4K LED متطورة، وهندسة صوتية استثنائية، ومحطات طهي حية بمعايير عالمية."
    },
    features: {
      en: [
        "4K Laser presentation projection & displays",
        "Wireless conference microphone systems",
        "Customizable theatrical & banquet lighting",
        "High-speed fiber connectivity"
      ],
      ar: [
        "شاشات عرض ليزرية بدقة 4K",
        "أنظمة ميكروفونات لاسلكية للاجتماعات",
        "إضاءة مسرحية ومآدب قابلة للتخصيص",
        "اتصال إنترنت فائق السرعة عبر الألياف"
      ]
    },
    image: "/assets/images/events-boardroom.jpg",
    type: "event"
  },
  {
    id: "executive-boardroom",
    name: {
      en: "The Executive Boardroom",
      ar: "قاعة مجلس الإدارة التنفيذي"
    },
    subtitle: {
      en: "Corporate Strategy & C-Suite Meetings",
      ar: "اجتماعات مجالس الإدارة والاستراتيجية"
    },
    capacity: {
      seated: 18,
      standing: 20
    },
    description: {
      en: "Designed specifically for Jubail’s industrial, energy, and commercial leaders requiring uncompromising privacy, video-conferencing technology, and continuous gourmet coffee service.",
      ar: "صُممت خصيصاً لقادة قطاعات الطاقة والصناعة في الجبيل الذين يطلبون خصوصية تامة وتقنيات اجتماعات فيديو وخدمة قهوة فاخرة مستمرة."
    },
    features: {
      en: [
        "Ultra-HD video conferencing hardware",
        "Executive ergonomic leather seating",
        "Integrated conference table connectivity",
        "Continuous business coffee & tea break service"
      ],
      ar: [
        "أجهزة اجتماعات فيديو فائقة الدقة",
        "مقاعد جلدية تنفيذية مريحة",
        "منافذ شحن وتوصيل مدمجة في طاولة الاجتماع",
        "خدمة استراحة قهوة وشاي مستمرة طوال الجلسة"
      ]
    },
    image: "/assets/images/events-boardroom.jpg",
    type: "boardroom"
  }
];
