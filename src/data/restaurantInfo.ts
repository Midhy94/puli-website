export interface RestaurantInfo {
  name: {
    en: string;
    ar: string;
  };
  tagline: {
    en: string;
    ar: string;
  };
  address: {
    street: {
      en: string;
      ar: string;
    };
    city: {
      en: string;
      ar: string;
    };
    country: {
      en: string;
      ar: string;
    };
    full: {
      en: string;
      ar: string;
    };
  };
  coordinates: {
    lat: number;
    lng: number;
  };
  contact: {
    phone: string;
    phoneFormatted: string;
    mobile: string;
    mobileFormatted: string;
    whatsapp: string;
    email: string;
    eventsEmail: string;
  };
  websiteUrl: string;
  menuUrl: string;
  hours: {
    general: {
      days: { en: string; ar: string };
      time: { en: string; ar: string };
    };
    lunch: {
      days: { en: string; ar: string };
      time: { en: string; ar: string };
    };
    dinner: {
      days: { en: string; ar: string };
      time: { en: string; ar: string };
    };
  };
  social: {
    instagram: string;
    facebook: string;
    googleMaps: string;
  };
}

export const restaurantLogos = {
  favicon: "/assets/images/Logo/Fav icon.png",
  light: {
    en: "/assets/images/Logo/Puli-logoEN-light.svg",
    ar: "/assets/images/Logo/Puli LOGO AR PNG_light.png"
  },
  dark: {
    en: "/assets/images/Logo/Puli-logoEN.svg",
    ar: "/assets/images/Logo/Puli Logo Arabic_dark.png"
  }
};

export const restaurantInfo: RestaurantInfo = {
  name: {
    en: "PULI | Seafood & Contemporary Multi-Cuisine",
    ar: "بولي | مطعم مأكولات بحرية وأطباق هندية معاصرة"
  },
  tagline: {
    en: "Best Seafood & Contemporary Indian Dining in Al Jubail",
    ar: "أفضل مطعم للمأكولات البحرية والأطباق الهندية المعاصرة في الجبيل"
  },
  address: {
    street: {
      en: "Intersection of Prince Mashhoor St. & Prince Metib St.",
      ar: "تقاطع شارع الأمير مشهور مع شارع الأمير متعب"
    },
    city: {
      en: "Al Jubail, Eastern Province",
      ar: "الجبيل، المنطقة الشرقية"
    },
    country: {
      en: "Kingdom of Saudi Arabia",
      ar: "المملكة العربية السعودية"
    },
    full: {
      en: "Prince Mashhoor St. & Prince Metib St. Intersection, Al Jubail 35514, Kingdom of Saudi Arabia",
      ar: "تقاطع شارع الأمير مشهور مع شارع الأمير متعب، الجبيل ٣٥٥١٤، المملكة العربية السعودية"
    }
  },
  coordinates: {
    lat: 27.0112,
    lng: 49.6583
  },
  contact: {
    phone: "+966133615222",
    phoneFormatted: "+966 13 361 5222",
    mobile: "+966593332904",
    mobileFormatted: "+966 59 333 2904",
    whatsapp: "+966593332904",
    email: "info@puli.rest",
    eventsEmail: "events@puli.rest"
  },
  websiteUrl: "https://puli.rest",
  menuUrl: "https://puli.eazymenu.in/",
  hours: {
    general: {
      days: { en: "Daily (7 Days a Week)", ar: "يومياً (طوال أيام الأسبوع)" },
      time: { en: "11:30 AM – 11:30 PM", ar: "١١:٣٠ صباحاً – ١١:٣٠ مساءً" }
    },
    lunch: {
      days: { en: "Daily", ar: "يومياً" },
      time: { en: "11:30 AM – 04:30 PM", ar: "١١:٣٠ ص – ٠٤:٣٠ م" }
    },
    dinner: {
      days: { en: "Daily", ar: "يومياً" },
      time: { en: "06:30 PM – 11:30 PM", ar: "٠٦:٣٠ م – ١١:٣٠ م" }
    }
  },
  social: {
    instagram: "https://instagram.com/puli.restaurant",
    facebook: "https://facebook.com/puli.restaurant",
    googleMaps: "https://maps.google.com/?q=Puli+Restaurant+Jubail"
  }
};
