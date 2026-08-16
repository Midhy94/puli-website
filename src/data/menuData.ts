export interface MenuItem {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
  price: number;
  currency: {
    en: string;
    ar: string;
  };
  category: string;
  isSignature?: boolean;
  isChefSpecial?: boolean;
  dietary?: ('seafood' | 'vegetarian' | 'poultry' | 'lamb' | 'gluten-free')[];
  image?: string;
}

export interface MenuCategory {
  id: string;
  name: {
    en: string;
    ar: string;
  };
  description: {
    en: string;
    ar: string;
  };
}

export const menuCategories: MenuCategory[] = [
  {
    id: "signatures",
    name: {
      en: "Puli Signatures",
      ar: "أطباق بولي الخاصة"
    },
    description: {
      en: "Heritage recipes perfected across decades of coastal culinary dedication.",
      ar: "وصفات عريقة تم صقلها عبر عقود من الشغف بمأكولات الساحل."
    }
  },
  {
    id: "seafood",
    name: {
      en: "Coastal Seafood",
      ar: "مأكولات بحرية ساحلية"
    },
    description: {
      en: "Fresh Arabian Gulf and Indian Ocean catches cooked with traditional Kundapur spices.",
      ar: "صيد طازج من الخليج العربي والمحيط الهندي مطهو بتوابل كونداپور الأصيلة."
    }
  },
  {
    id: "tandoor",
    name: {
      en: "Clay Oven Tandoor",
      ar: "التندور والمشاوي"
    },
    description: {
      en: "Marinated over 24 hours and flame-kissed in authentic clay ovens.",
      ar: "متبل لأكثر من 24 ساعة ومشوي على لهب أفران الطين التقليدية."
    }
  },
  {
    id: "curries",
    name: {
      en: "Artisanal Curries",
      ar: "الكاري الهندي الفاخر"
    },
    description: {
      en: "Slow-cooked gravies infused with freshly stone-ground whole spices.",
      ar: "مرق مطهو ببطء وممزوج بتوابل كاملة مطحونة على الحجر."
    }
  },
  {
    id: "biryani",
    name: {
      en: "Biryani & Rice",
      ar: "البرياني والأرز المعطر"
    },
    description: {
      en: "Aged long-grain basmati steamed in sealed copper degs with coastal aromatics.",
      ar: "أرز بسمتي فاخر مطهو على البخار في قدور نحاسية مع عطور الساحل."
    }
  },
  {
    id: "desserts",
    name: {
      en: "Desserts & Refreshments",
      ar: "الحلويات والمشروبات"
    },
    description: {
      en: "Delicate confectioneries and botanical elixirs crafted to conclude your meal.",
      ar: "حلويات رقيقة ومشروبات نباتية منعشة صُممت لتختتم وجبتك بأناقة."
    }
  }
];

export const menuItems: MenuItem[] = [
  {
    id: "crab-butter-pepper-garlic",
    name: {
      en: "Butter Pepper Garlic Mud Crab",
      ar: "سلطعون بصلصة الزبدة والفلفل والثوم"
    },
    description: {
      en: "Fresh Arabian Gulf mud crab tossed in clarified butter, freshly crushed black pepper, and golden roasted garlic.",
      ar: "سلطعون الخليج الطازج مقلب في السمن النقي والفلفل الأسود المطحون والثوم المحمص الذهبي."
    },
    price: 145,
    currency: { en: "SAR", ar: "ر.س" },
    category: "signatures",
    isSignature: true,
    dietary: ["seafood"],
    image: "/assets/images/dish-crab.jpg"
  },
  {
    id: "prawns-ghee-roast",
    name: {
      en: "Mangalorean Tiger Prawns Ghee Roast",
      ar: "روبيان تايجر غي روست مانغلوري"
    },
    description: {
      en: "Succulent jumbo prawns slow-roasted in pure country ghee with a fiery, aromatic Kundapur red chili paste.",
      ar: "روبيان جامبو مطهو على نار هادئة في السمن البلدي الخالص مع معجون فلفل كونداپور الأحمر العطري."
    },
    price: 125,
    currency: { en: "SAR", ar: "ر.س" },
    category: "signatures",
    isSignature: true,
    dietary: ["seafood"],
    image: "/assets/images/dish-ghee-roast.jpg"
  },
  {
    id: "pomfret-tandoori",
    name: {
      en: "Tandoori Whole Silver Pomfret",
      ar: "سمك زبيدي فضي كامل في التندور"
    },
    description: {
      en: "Whole silver pomfret marinated in coastal spices, hung yogurt, and mustard oil, charred to perfection in the clay oven.",
      ar: "سمكة زبيدي فضية كاملة متبلة بالتوابل الساحلية والزبادي المصفى وزيت الخردل، مشوية بلهب التندور."
    },
    price: 110,
    currency: { en: "SAR", ar: "ر.س" },
    category: "seafood",
    dietary: ["seafood", "gluten-free"]
  },
  {
    id: "neer-dosa-platter",
    name: {
      en: "Traditional Neer Dosa with Coastal Fish Curry",
      ar: "نير دوسا التقليدية مع كاري السمك الساحلي"
    },
    description: {
      en: "Delicate, lace-like steamed rice crepes served with Kingfish in a rich coconut-tamarind Mangalorean gravy.",
      ar: "فطائر أرز خفيفة كالدانيل تقدم مع سمك الكنعد في مرق جوز الهند والتمر الهندي المانغلوري."
    },
    price: 88,
    currency: { en: "SAR", ar: "ر.س" },
    category: "seafood",
    dietary: ["seafood", "gluten-free"]
  },
  {
    id: "chicken-ghee-roast",
    name: {
      en: "Kori Ghee Roast (Chicken)",
      ar: "كوري غي روست (دجاج مانغلوري)"
    },
    description: {
      en: "Tender boneless chicken roasted with whole ground spices, tamarind tang, and artisanal coastal ghee.",
      ar: "قطع دجاج طرية منزوعة العظم مطهوة مع توابل مطحونة طازجة ولمسة تمر هندي في السمن الحرفي."
    },
    price: 78,
    currency: { en: "SAR", ar: "ر.س" },
    category: "signatures",
    isSignature: true,
    dietary: ["poultry"]
  },
  {
    id: "tandoori-malai-broccoli",
    name: {
      en: "Tandoori Malai Broccoli & Truffle",
      ar: "بروكلي تندوري بصلصة الكريمة والكمأة"
    },
    description: {
      en: "Charred broccoli florets marinated in cardamom cream cheese, roasted garlic, and a whisper of winter truffle essence.",
      ar: "زهرات البروكلي المشوية في التندور متبلة بجبن الهيل الكريمي والثوم المحمص وزيت الكمأة."
    },
    price: 65,
    currency: { en: "SAR", ar: "ر.س" },
    category: "tandoor",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: "galouti-kebab",
    name: {
      en: "Awadhi Lamb Galouti Kebab",
      ar: "كباب غلاوتي الضأن الملكي"
    },
    description: {
      en: "Melt-in-mouth smoked lamb patties infused with 24 secret coastal and Awadhi spices, served over saffron sheermal.",
      ar: "أقراص لحم الضأن المدخنة المتبلة بـ 24 نوعاً من التوابل العطرية، تقدم على خبز الشيرمال بالزعفران."
    },
    price: 85,
    currency: { en: "SAR", ar: "ر.س" },
    category: "tandoor",
    dietary: ["lamb"]
  },
  {
    id: "paneer-kundapur-masala",
    name: {
      en: "Artisanal Paneer Kundapur Masala",
      ar: "بانير كونداپور بمرق التوابل الحرفية"
    },
    description: {
      en: "Organic fresh cottage cheese simmered in a roasted coconut, coriander seed, and Byadgi chili reduction.",
      ar: "جبن القريش الطازج مطهو في صلصة مركزة من جوز الهند المحمص وبذور الكزبرة وفلفل بيادجي."
    },
    price: 68,
    currency: { en: "SAR", ar: "ر.س" },
    category: "curries",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: "nalli-nihari",
    name: {
      en: "Slow-Braised Nalli Gosht Nihari",
      ar: "نهاري ساق الضأن المطهو ببطء"
    },
    description: {
      en: "Prime lamb shanks simmered overnight for 12 hours with fragrant marrow broth, rose petals, and ginger slivers.",
      ar: "موزات لحم ضأن فاخرة مطهوة على نار هادئة لمدة 12 ساعة مع مرق نخاع العظم وبتلات الورد والزنجبيل."
    },
    price: 98,
    currency: { en: "SAR", ar: "ر.س" },
    category: "curries",
    dietary: ["lamb", "gluten-free"]
  },
  {
    id: "puli-dum-biryani-prawn",
    name: {
      en: "Puli Coastal Dum Biryani (Prawn)",
      ar: "برياني بولي الساحلي بالروبيان"
    },
    description: {
      en: "Fragrant Khaima rice layered with spiced prawns, caramelized onions, mint, and saffron steam.",
      ar: "أرز خيما العطري المطهو مع روبيان متبل والبصل المكرمل والنعناع الطازج وبخار الزعفران."
    },
    price: 85,
    currency: { en: "SAR", ar: "ر.س" },
    category: "biryani",
    dietary: ["seafood", "gluten-free"]
  },
  {
    id: "hyderabadi-lamb-biryani",
    name: {
      en: "Kachche Gosht Lamb Dum Biryani",
      ar: "برياني لحم الضأن المطهو على الفحم"
    },
    description: {
      en: "Tender spiced lamb marinated in raw papaya and yogurt, sealed in a copper handi with aged basmati rice.",
      ar: "لحم ضأن متبل في الزبادي والبهارات، مغلق بإحكام في قدر نحاسي مع أرز البسمتي المعتق."
    },
    price: 82,
    currency: { en: "SAR", ar: "ر.س" },
    category: "biryani",
    dietary: ["lamb", "gluten-free"]
  },
  {
    id: "tender-coconut-payasam",
    name: {
      en: "Elaneer Payasam (Tender Coconut)",
      ar: "بياسام جوز الهند الطازج والهيل"
    },
    description: {
      en: "Silky dessert made with young coconut pulp, condensed organic milk, green cardamom, and toasted pistachios.",
      ar: "حلوى ناعمة مصنوعة من لب جوز الهند الغض والحليب المكثف والهيل الأخضر والفستق المحمص."
    },
    price: 42,
    currency: { en: "SAR", ar: "ر.س" },
    category: "desserts",
    dietary: ["vegetarian", "gluten-free"]
  },
  {
    id: "kokum-sol-kadi",
    name: {
      en: "Signature Coastal Kokum Sol Kadi",
      ar: "إكسير السول كادي بالكوكم الساحلي"
    },
    description: {
      en: "Refreshing traditional digestive elixir of wild kokum fruit, freshly pressed coconut milk, garlic, and green chili.",
      ar: "مشروب هاضم منعش وتقليدي من فاكهة الكوكم البرية وحليب جوز الهند الطازج والثوم وفلفل خفيف."
    },
    price: 28,
    currency: { en: "SAR", ar: "ر.س" },
    category: "desserts",
    dietary: ["vegetarian", "gluten-free"]
  }
];
