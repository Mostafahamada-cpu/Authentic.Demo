/* =========================================================================
   WEDDING INVITATION — MASTER SCRIPT
   Self-contained, single file. No external dependencies beyond Google Fonts.
   Execution order: config → translations → icons → utils → render →
   envelope → preloader → nav → countdown → gallery → lightbox →
   music → rsvp → messages → scroll-reveal → language-init
   ========================================================================= */

/* --------------------------------------------------------------------------
   GLOBAL NAMESPACE
   -------------------------------------------------------------------------- */
window.WS = window.WS || {};

/* =========================================================================
   WEDDING CONFIG
   ========================================================================= */
WS.config = {
  groomName: "Karim",
  brideName: "Yasmine",
  nameOrder: "bride-groom", // "bride-groom" or "groom-bride"

  tagline:  { en: "The Wedding Of", ar: "حفل زفاف" },
  subtitle: {
    en: "Together with their families, invite you to celebrate their marriage and the beginning of their life together.",
    ar: "مع عائلتيهما الكريمتين، يدعوانكم للاحتفال بزواجهما وبداية حياتهما معاً."
  },
  heroImage: "", // Set to a URL for a custom hero background

  date:       "2026-12-12T17:00:00",
  venue:      { en: "Marriott Mena House", ar: "ماريوت ميناهاوس" },
  address:    { en: "Al Haram, Giza, Cairo, Egypt", ar: "الهرم، الجيزة، القاهرة، مصر" },
  mapsLink:   "https://maps.google.com/?q=Marriott+Mena+House+Giza+Egypt",
  mapEmbedSrc:"https://www.google.com/maps?q=Marriott+Mena+House+Giza+Egypt&output=embed",

  colors: { accent: "#AD8A4E", accentDeep: "#8A6A38", accentLight: "#DCC793" },

  backgroundMusic: "", // Set to "music.mp3" if file exists
  musicTitle: "Maak – Amr Diab",

  rsvpDeadline: "2026-11-01",
  rsvpPassword: "love", // password for the messages modal (also "حب")

  storyEnabled:      true,
  locationEnabled:   true,
  guidelinesEnabled: true,
  galleryEnabled:    true,
  countdownEnabled:  true,
  musicEnabled:      true,
  rsvpEnabled:       true,

  story: [
    {
      date: { en: "August 2019", ar: "أغسطس ٢٠١٩" },
      title: { en: "First Meeting", ar: "اللقاء الأول" },
      description: {
        en: "At a rooftop dinner in downtown Cairo, Karim arrived late and took the only open seat next to Yasmine. They talked until the lights went out.",
        ar: "في حفل عشاء على سطح إحدى مباني وسط القاهرة، وصل كريم متأخراً وجلس في المقعد الوحيد المتاح بجانب ياسمين. تحدّثا حتى أُطفئت الأضواء."
      },
      icon: "sparkle",
      image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: { en: "March 2021", ar: "مارس ٢٠٢١" },
      title: { en: "First Trip Together", ar: "أول رحلة مشتركة" },
      description: {
        en: "A trip to Luxor and Aswan turned into two weeks of laughter and beautiful memories along the banks of the Nile.",
        ar: "رحلة إلى الأقصر وأسوان تحوّلت إلى أسبوعين من الضحك وصنع ذكريات جميلة على ضفاف النيل."
      },
      icon: "plane",
      image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: { en: "June 2023", ar: "يونيو ٢٠٢٣" },
      title: { en: "Our First Home", ar: "بيتنا الأول" },
      description: {
        en: "A cozy apartment in Zamalek with a view of the Nile became the first place they truly called home together.",
        ar: "شقة دافئة في الزمالك بإطلالة على النيل أصبحت أول مكان يسمّيانه بيتاً معاً."
      },
      icon: "home",
      image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: { en: "February 2026", ar: "فبراير ٢٠٢٦" },
      title: { en: "The Proposal", ar: "خطبة الأحلام" },
      description: {
        en: "On the Nile Corniche under the stars, Karim proposed before dessert arrived, and Yasmine said yes before he could finish the sentence.",
        ar: "على كورنيش النيل تحت النجوم، تقدّم كريم بالخطبة قبل أن يصل الحلوى، وقالت ياسمين نعم قبل أن ينهي جملته."
      },
      icon: "rings",
      image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80"
    },
    {
      date: { en: "December 12, 2026", ar: "١٢ ديسمبر ٢٠٢٦" },
      title: { en: "The Beginning", ar: "البداية" },
      description: {
        en: "Surrounded by loved ones, they begin a new chapter — and you are a witness to this beautiful beginning.",
        ar: "محاطَيْن بالأحبّاء، يبدآن فصلاً جديداً — وأنت شاهد على هذه البداية الجميلة."
      },
      icon: "heart",
      image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
    }
  ],

  guidelines: [
    {
      icon: "dress-code",
      title: { en: "Dress Code", ar: "كود اللباس" },
      description: {
        en: "Formal evening attire. Suggested colours: champagne, sage green, and light blue.",
        ar: "ملابس سهرة رسمية. الألوان المقترحة: الشامبانيا، الأخضر الميّة، والأزرق الفاتح."
      }
    },
    {
      icon: "arrival",
      title: { en: "Arrival Time", ar: "موعد الوصول" },
      description: {
        en: "Please arrive no later than 4:30 PM. The ceremony begins at 5:00 PM.",
        ar: "يُرجى الحضور في موعد أقصاه ٤:٣٠ مساءً. يبدأ الحفل تماماً في الساعة ٥:٠٠ مساءً."
      }
    },
    {
      icon: "parking",
      title: { en: "Parking", ar: "ركن السيارات" },
      description: {
        en: "Complimentary valet service at the main entrance from 4:00 PM.",
        ar: "خدمة صف سيارات مجانية عند المدخل الرئيسي اعتباراً من الساعة ٤:٠٠ مساءً."
      }
    },
    {
      icon: "no-smoking",
      title: { en: "Non-Smoking Area", ar: "منطقة غير مدخّنة" },
      description: {
        en: "All gardens are non-smoking. There is a designated area near the west courtyard.",
        ar: "جميع الحدائق غير مخصصة للتدخين. توجد منطقة مخصصة بالقرب من الفناء الغربي."
      }
    },
    {
      icon: "gift",
      title: { en: "Gifts", ar: "الهدايا" },
      description: {
        en: "Your presence is the greatest gift. A registry is attached to this invitation for those who wish.",
        ar: "حضوركم هو أجمل هدية. لمن يرغب في تقديم هدية، يرجى الاطلاع على القائمة المرفقة بالدعوة."
      }
    },
    {
      icon: "contact",
      title: { en: "Enquiries", ar: "للاستفسار" },
      description: {
        en: "To contact wedding coordinator Maryam, please call: 01000123456.",
        ar: "للتواصل مع منسّقة الحفل مريم، يُرجى الاتصال على: ٠١٠٠٠١٢٣٤٥٦."
      }
    }
  ],

  gallery: [
    { src: "https://picsum.photos/800/600?random=1",  alt: { en: "Photo 1", ar: "صورة ١" }, caption: { en: "Sunset glow",       ar: "ضوء الغروب" } },
    { src: "https://picsum.photos/800/600?random=2",  alt: { en: "Photo 2", ar: "صورة ٢" }, caption: { en: "The Proposal",      ar: "الخطبة" } },
    { src: "https://picsum.photos/800/600?random=3",  alt: { en: "Photo 3", ar: "صورة ٣" }, caption: { en: "First Meeting",     ar: "اللقاء الأول" } },
    { src: "https://picsum.photos/800/600?random=4",  alt: { en: "Photo 4", ar: "صورة ٤" }, caption: { en: "Mena House",        ar: "ميناهاوس" } },
    { src: "https://picsum.photos/800/600?random=5",  alt: { en: "Photo 5", ar: "صورة ٥" }, caption: { en: "Quiet evenings",    ar: "أمسيات هادئة" } },
    { src: "https://picsum.photos/800/600?random=6",  alt: { en: "Photo 6", ar: "صورة ٦" }, caption: { en: "Luxor, 2021",       ar: "الأقصر ٢٠٢١" } },
    { src: "https://picsum.photos/800/600?random=7",  alt: { en: "Photo 7", ar: "صورة ٧" }, caption: { en: "Details",           ar: "تفاصيل" } },
    { src: "https://picsum.photos/800/600?random=8",  alt: { en: "Photo 8", ar: "صورة ٨" }, caption: { en: "Here it begins",    ar: "من هنا تبدأ الحكاية" } }
  ],

  socialLinks: { instagram: "", facebook: "" }
};

/* =========================================================================
   TRANSLATIONS
   ========================================================================= */
WS.t = {
  en: {
    "skip-link":          "Skip to content",
    "nav-story":          "Our Story",
    "nav-location":       "The Celebration",
    "nav-guidelines":     "Good To Know",
    "nav-gallery":        "Gallery",
    "nav-rsvp":           "RSVP",
    "hero-eyebrow":       "The Wedding Of",
    "hero-rsvp":          "Reserve Your Seat",
    "cd-eyebrow":         "Counting Down To Forever",
    "cd-days":            "Days",
    "cd-hours":           "Hours",
    "cd-mins":            "Minutes",
    "cd-secs":            "Seconds",
    "cd-arrived":         "Today is the day — we\u2019re married!",
    "story-eyebrow":      "Our Story",
    "story-title":        "How It All Began",
    "loc-eyebrow":        "The Celebration",
    "loc-btn":            "Get Directions",
    "guide-eyebrow":      "Good To Know",
    "guide-title":        "A Few Details",
    "gal-eyebrow":        "Moments",
    "gal-title":          "Our Gallery",
    "couple-eyebrow":     "The Couple",
    "couple-names":       "Yasmine & Karim",
    "couple-desc":        "\u201cWe can\u2019t wait to celebrate our special day with you. Thank you for being part of our story.\u201d",
    "couple-link":        "View Guest Messages",
    "rsvp-eyebrow":       "Join Us",
    "rsvp-title":         "Kindly Respond",
    "rsvp-deadline-pre":  "Kindly respond by ",
    "rsvp-lbl-name":      "Full Name",
    "rsvp-lbl-phone":     "Phone Number",
    "rsvp-lbl-guests":    "Number of Guests",
    "rsvp-lbl-attend":    "Will You Attend?",
    "rsvp-btn-accept":    "Joyfully Accepts",
    "rsvp-btn-decline":   "Regretfully Declines",
    "rsvp-lbl-msg":       "Message",
    "rsvp-lbl-opt":       "(optional)",
    "rsvp-btn-submit":    "Send RSVP",
    "rsvp-thanks-title":  "Thank You",
    "rsvp-success-attending": "We can\u2019t wait to see you! Your RSVP has been received.",
    "rsvp-success-declining": "We\u2019re sorry you can\u2019t make it, but thank you for letting us know.",
    "err-name-required":  "Please enter your full name.",
    "err-phone-required": "Please enter your phone number.",
    "err-guests-required":"Please enter number of guests.",
    "err-attend-required":"Please let us know if you\u2019ll attend.",
    "footer-thanks":      "With love and gratitude for being part of our story.",
    "footer-credit":      "Crafted with love",
    "modal-title":        "Guest Messages",
    "modal-pass-prompt":  "Enter the password to read the messages:",
    "modal-pass-placeholder": "Password (hint: love)",
    "modal-pass-btn":     "Open",
    "modal-pass-error":   "Incorrect password.",
    "envlp-kicker":       "You are cordially invited to the wedding of",
    "envlp-hint":         "Click to open your invitation",
    "envlp-time":         "Ceremony at 5:00 PM",
    "preloader-text":     "Preparing something beautiful",
    "music-toggle-play":  "Play background music",
    "music-toggle-pause": "Pause background music",
    // message.html
    "msg-back":           "The Invitation",
    "msg-eyebrow":        "With Love",
    "msg-title":          "Guest Messages",
    "msg-desc":           "Every wish, note, and blessing our family and friends have left for the two of us.",
    "msg-stat-messages":  "Messages",
    "msg-stat-guests":    "Guests Joining",
    "msg-stat-latest":    "Latest Message",
    "msg-sort-newest":    "Newest First",
    "msg-sort-oldest":    "Oldest First",
    "msg-search-placeholder": "Search by guest name\u2026"
  },
  ar: {
    "skip-link":          "تخطي إلى المحتوى",
    "nav-story":          "قصتنا",
    "nav-location":       "الاحتفال",
    "nav-guidelines":     "معلومات تهمك",
    "nav-gallery":        "معرض الصور",
    "nav-rsvp":           "تأكيد الحضور",
    "hero-eyebrow":       "حفل زفاف",
    "hero-rsvp":          "تأكيد الحضور",
    "cd-eyebrow":         "عدّ تنازلي ليومنا المنتظر",
    "cd-days":            "أيام",
    "cd-hours":           "ساعات",
    "cd-mins":            "دقائق",
    "cd-secs":            "ثواني",
    "cd-arrived":         "اليوم هو يومنا — لقد تزوّجنا!",
    "story-eyebrow":      "قصتنا",
    "story-title":        "كيف بدأت الحكاية",
    "loc-eyebrow":        "الاحتفال",
    "loc-btn":            "احصل على الاتجاهات",
    "guide-eyebrow":      "معلومات تهمك",
    "guide-title":        "بعض التفاصيل",
    "gal-eyebrow":        "لحظات",
    "gal-title":          "معرض الصور",
    "couple-eyebrow":     "العروسان",
    "couple-names":       "ياسمين وكريم",
    "couple-desc":        "\u201cلا نستطيع الانتظار حتى نحتفل بيومنا المميز مع أحبابنا. شكراً من القلب لأنكم جزء من حياتنا وقصتنا.\u201d",
    "couple-link":        "عرض رسائل الضيوف",
    "rsvp-eyebrow":       "شاركنا فرحتنا",
    "rsvp-title":         "نرجو الرد",
    "rsvp-deadline-pre":  "نرجو الرد بحلول ",
    "rsvp-lbl-name":      "الاسم بالكامل",
    "rsvp-lbl-phone":     "رقم الهاتف",
    "rsvp-lbl-guests":    "عدد الضيوف",
    "rsvp-lbl-attend":    "هل ستحضر؟",
    "rsvp-btn-accept":    "سأحضر بكل سرور",
    "rsvp-btn-decline":   "نعتذر عن الحضور",
    "rsvp-lbl-msg":       "رسالة",
    "rsvp-lbl-opt":       "(اختياري)",
    "rsvp-btn-submit":    "إرسال الرد",
    "rsvp-thanks-title":  "شكراً لك",
    "rsvp-success-attending": "يسعدنا حضوركم! تم استلام ردكم.",
    "rsvp-success-declining": "نأسف لعدم تمكّنكم من الحضور، شكراً لإعلامنا.",
    "err-name-required":  "يرجى إدخال اسمك الكامل.",
    "err-phone-required": "يرجى إدخال رقم هاتفك.",
    "err-guests-required":"يرجى إدخال عدد الضيوف.",
    "err-attend-required":"يرجى إخبارنا إذا كنت ستحضر.",
    "footer-thanks":      "بكل الحب والامتنان لكونكم جزءاً من قصتنا.",
    "footer-credit":      "صُنع بحب",
    "modal-title":        "رسائل الضيوف",
    "modal-pass-prompt":  "أدخل كلمة المرور لقراءة الرسائل:",
    "modal-pass-placeholder": "كلمة السر (تلميح: حب)",
    "modal-pass-btn":     "فتح",
    "modal-pass-error":   "كلمة المرور غير صحيحة.",
    "envlp-kicker":       "يشرّفنا دعوتكم لحضور حفل زفاف",
    "envlp-hint":         "انقر لفتح دعوتك",
    "envlp-time":         "حفل الزفاف الساعة ٥:٠٠ مساءً",
    "preloader-text":     "نجهّز شيئاً جميلاً",
    "music-toggle-play":  "تشغيل الموسيقى",
    "music-toggle-pause": "إيقاف الموسيقى",
    // message.html
    "msg-back":           "الدعوة",
    "msg-eyebrow":        "بكل الحب",
    "msg-title":          "رسائل الضيوف",
    "msg-desc":           "كل أمنية وكلمة ودعاء تركها لنا أهلنا وأصدقاؤنا.",
    "msg-stat-messages":  "الرسائل",
    "msg-stat-guests":    "الضيوف",
    "msg-stat-latest":    "أحدث رسالة",
    "msg-sort-newest":    "الأحدث أولاً",
    "msg-sort-oldest":    "الأقدم أولاً",
    "msg-search-placeholder": "ابحث باسم الضيف\u2026"
  }
};

// Keep backward compat alias used elsewhere
WS.translations = WS.t;

/* =========================================================================
   SVG ICON LIBRARY
   ========================================================================= */
WS.icon = function(name) {
  var icons = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linejoin="round"><path d="M12 21s-7.5-4.7-10.2-9.3C.3 8.8 1.6 5 5.3 4.1c2-.5 4 .3 5.2 2 1.2-1.7 3.2-2.5 5.2-2 3.7.9 5 4.7 3.5 7.6C19.5 16.3 12 21 12 21z"/></svg>',
    sparkle: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l1.8 5.4L19 9l-5.2 2.8L12 17l-1.8-5.2L5 9l5.2-1.6z"/></svg>',
    plane: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><path d="M21 3L3 10.5l7 3L13 21l2-6 6-12z"/></svg>',
    home: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1z"/><rect x="9" y="12" width="6" height="9"/></svg>',
    rings: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4"><circle cx="8" cy="13" r="5"/><circle cx="16" cy="11" r="5"/></svg>',
    "dress-code": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><path d="M8 2l-4 5 4 2v13h8V9l4-2-4-5"/><path d="M8 2l4 7 4-7"/></svg>',
    arrival: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 3"/></svg>',
    parking: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M9 17V7h4a3 3 0 010 6H9"/></svg>',
    "no-smoking": '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><circle cx="12" cy="12" r="9"/><path d="M4.5 4.5l15 15"/></svg>',
    gift: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="8" width="18" height="13" rx="1"/><path d="M21 8H3V6a3 3 0 016 0c0-1.7 1.3-3 3-3s3 1.3 3 3a3 3 0 016 0v2z"/><line x1="12" y1="8" x2="12" y2="21"/></svg>',
    contact: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>'
  };
  return icons[name] || icons.heart;
};

/* =========================================================================
   UTILITIES
   ========================================================================= */
WS.utils = {
  $: function(sel, scope) { return (scope || document).querySelector(sel); },
  $$: function(sel, scope) { return Array.from((scope || document).querySelectorAll(sel)); },
  escapeHTML: function(s) {
    return String(s == null ? "" : s)
      .replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")
      .replace(/"/g,"&quot;").replace(/'/g,"&#39;");
  },
  pad2: function(n) { return String(Math.max(0,n)).padStart(2,"0"); },
  safeRun: function(label, fn) {
    try { fn(); } catch(e) { console.warn("[WS] " + label + ":", e); }
  },
  prefersReducedMotion: function() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  },
  formatLongDate: function(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    var lang = document.documentElement.lang === "ar" ? "ar-EG" : "en-US";
    return new Intl.DateTimeFormat(lang, { day:"numeric", month:"long", year:"numeric" }).format(d);
  },
  formatTime: function(iso) {
    var d = new Date(iso);
    if (isNaN(d)) return "";
    var lang = document.documentElement.lang === "ar" ? "ar-EG" : "en-US";
    return new Intl.DateTimeFormat(lang, { hour:"numeric", minute:"2-digit" }).format(d);
  },
  debounce: function(fn, ms) {
    var t; return function() { var a=arguments,c=this; clearTimeout(t); t=setTimeout(function(){ fn.apply(c,a); }, ms); };
  },
  rafThrottle: function(fn) {
    var p=false; return function() { var a=arguments,c=this; if(!p){ p=true; requestAnimationFrame(function(){ fn.apply(c,a); p=false; }); } };
  }
};
var u = WS.utils;

/* =========================================================================
   LANGUAGE SYSTEM
   ========================================================================= */
WS.lang = (function() {
  var current = localStorage.getItem("ws_lang") || "ar";

  function t(key) { return (WS.t[current] || WS.t.en)[key] || key; }

  function applyLang(lang) {
    current = lang;
    localStorage.setItem("ws_lang", lang);
    document.documentElement.lang = lang;
    document.documentElement.dir  = lang === "ar" ? "rtl" : "ltr";

    // Static [data-i18n] elements
    u.$$("[data-i18n]").forEach(function(el) {
      var key = el.getAttribute("data-i18n");
      var val = WS.t[lang] && WS.t[lang][key];
      if (val != null) el.textContent = val;
    });

    // Placeholder-only elements
    u.$$("[data-i18n-placeholder]").forEach(function(el) {
      var key = el.getAttribute("data-i18n-placeholder");
      var val = WS.t[lang] && WS.t[lang][key];
      if (val != null) el.placeholder = val;
    });

    // Lang toggle label
    var btn = document.getElementById("lang-toggle");
    if (btn) btn.textContent = lang === "ar" ? "EN" : "AR";

    window.dispatchEvent(new CustomEvent("wsLangChanged", { detail: lang }));
  }

  function init() {
    applyLang(current);
    var btn = document.getElementById("lang-toggle");
    if (btn) {
      btn.addEventListener("click", function() {
        applyLang(current === "ar" ? "en" : "ar");
        // Re-render dynamic content
        WS.safeRenderAll && WS.safeRenderAll();
      });
    }
  }

  return { init: init, apply: applyLang, t: t, get: function(){ return current; } };
})();

// Convenience alias
function _t(key) { return WS.lang.t(key); }

/* =========================================================================
   PRELOADER + ENVELOPE GATE
   Order: envelope shows first → user clicks → preloader runs → page shows
   ========================================================================= */

// --- ENVELOPE ---
WS.initEnvelope = function() {
  var overlay = document.getElementById("envlp-overlay");
  if (!overlay) return;

  // Translate envelope text
  var kicker = document.getElementById("envlp-kicker");
  var hint   = document.getElementById("envlp-hint");
  var envTime= document.getElementById("envlp-time");
  var mono   = document.getElementById("envlp-mono");

  function updateEnvText() {
    var lang = WS.lang.get();
    if (kicker) kicker.textContent = _t("envlp-kicker");
    if (hint)   hint.textContent   = _t("envlp-hint");
    if (envTime)envTime.textContent = _t("envlp-time");

    // Names in envelope (lang-aware order)
    var cfg  = WS.config;
    var nameA = document.getElementById("envlp-name-a");
    var nameB = document.getElementById("envlp-name-b");
    if (cfg.nameOrder === "groom-bride") {
      if (nameA) nameA.textContent = lang === "ar" ? "كريم"   : cfg.groomName;
      if (nameB) nameB.textContent = lang === "ar" ? "ياسمين" : cfg.brideName;
    } else {
      if (nameA) nameA.textContent = lang === "ar" ? "ياسمين" : cfg.brideName;
      if (nameB) nameB.textContent = lang === "ar" ? "كريم"   : cfg.groomName;
    }

    // Date
    var envDate = document.getElementById("envlp-date");
    if (envDate) envDate.textContent = u.formatLongDate(cfg.date);

    // Venue
    var envVenue = document.getElementById("envlp-venue");
    if (envVenue) {
      var v = cfg.venue;
      envVenue.textContent = (typeof v === "object" ? (v[lang] || v.en) : v);
    }
  }

  updateEnvText();
  window.addEventListener("wsLangChanged", updateEnvText);

  // If user already opened the envelope this session, skip straight to page
  if (sessionStorage.getItem("ws_envelope_done")) {
    overlay.style.display = "none";
    WS.initPreloader(true);
    return;
  }

  // Reduced-motion: skip straight to page
  if (u.prefersReducedMotion()) {
    overlay.style.display = "none";
    sessionStorage.setItem("ws_envelope_done","1");
    WS.initPreloader(true);
    return;
  }

  // Animate seal in
  var envlpEl = document.getElementById("envlp");
  setTimeout(function() { overlay.classList.add("is-drawing"); }, 300);

  function openEnvelope() {
    if (overlay.classList.contains("is-opening")) return;
    overlay.classList.add("is-opening");

    var scene  = overlay.querySelector(".envlp-scene");
    var envBtn = document.getElementById("envlp");

    // Stage 1: seal cracks
    setTimeout(function() { overlay.classList.add("stage-seal"); }, 100);
    // Stage 2: flap opens
    setTimeout(function() { overlay.classList.add("stage-flap"); }, 700);
    // Stage 3: letter rises
    setTimeout(function() { overlay.classList.add("stage-letter"); }, 1300);
    // Stage 4: card presents
    setTimeout(function() { overlay.classList.add("stage-card"); }, 2200);
    // Stage 5: fade out overlay, start preloader
    setTimeout(function() {
      overlay.classList.add("is-leaving");
      sessionStorage.setItem("ws_envelope_done","1");
      setTimeout(function() {
        overlay.style.display = "none";
        WS.initPreloader(false);
      }, 900);
    }, 3400);
  }

  if (envlpEl) {
    envlpEl.addEventListener("click", openEnvelope);
    envlpEl.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openEnvelope(); }
    });
  }
};

// --- PRELOADER ---
WS.initPreloader = function(instant) {
  var pre  = document.getElementById("preloader");
  var fill = document.getElementById("preloader-fill");
  var ptxt = document.getElementById("preloader-text");
  if (!pre) { WS.initPage(); return; }

  pre.style.display = "flex";

  if (ptxt) {
    var dots = ptxt.querySelector(".preloader-dots");
    ptxt.childNodes[0].textContent = _t("preloader-text");
  }

  if (instant || u.prefersReducedMotion()) {
    pre.style.display = "none";
    WS.initPage();
    return;
  }

  // Animate the fill bar, then hide
  var start = null;
  var dur   = 1800;
  pre.classList.add("is-drawing");

  function step(ts) {
    if (!start) start = ts;
    var pct = Math.min(((ts - start) / dur) * 100, 100);
    if (fill) fill.style.width = pct + "%";
    if (pct < 100) {
      requestAnimationFrame(step);
    } else {
      setTimeout(function() {
        pre.classList.add("is-hidden");
        setTimeout(function() {
          pre.style.display = "none";
          WS.initPage();
        }, 900);
      }, 200);
    }
  }
  requestAnimationFrame(step);
};

/* =========================================================================
   PAGE INITIALISATION — runs after preloader
   ========================================================================= */
WS.initPage = function() {
  u.safeRun("applyTheme",    WS.applyTheme);
  u.safeRun("applyToggles",  WS.applyToggles);
  u.safeRun("renderAll",     WS.renderAll);
  u.safeRun("initNav",       WS.initNav);
  u.safeRun("initCountdown", WS.initCountdown);
  u.safeRun("initParticles", WS.initParticles);
  u.safeRun("initGallery",   WS.initGallery);
  u.safeRun("initLightbox",  WS.initLightbox);
  u.safeRun("initMusic",     WS.initMusic);
  u.safeRun("initRsvp",      WS.initRsvp);
  u.safeRun("initMessages",  WS.initMessages);
  u.safeRun("initReveal",    WS.initReveal);
  u.safeRun("initBackToTop", WS.initBackToTop);
  u.safeRun("initScrollIndicator", WS.initScrollIndicator);
};

// Allow re-render on lang change
WS.safeRenderAll = function() {
  u.safeRun("renderAll",    WS.renderAll);
  u.safeRun("renderGallery",WS.renderGallery);
  u.safeRun("rsvpDeadline", WS.renderRsvpDeadline);
};

/* =========================================================================
   THEME
   ========================================================================= */
WS.applyTheme = function() {
  var c = WS.config.colors || {};
  var r = document.documentElement.style;
  if (c.accent)      r.setProperty("--accent",       c.accent);
  if (c.accentDeep)  r.setProperty("--accent-deep",  c.accentDeep);
  if (c.accentLight) r.setProperty("--accent-light",  c.accentLight);
};

WS.applyToggles = function() {
  var cfg = WS.config;
  var map = {
    "countdown-section": cfg.countdownEnabled,
    "story":             cfg.storyEnabled,
    "location":          cfg.locationEnabled,
    "guidelines":        cfg.guidelinesEnabled,
    "gallery":           cfg.galleryEnabled,
    "rsvp":              cfg.rsvpEnabled
  };
  Object.keys(map).forEach(function(id) {
    if (map[id] === false) {
      var el = document.getElementById(id);
      if (el) el.hidden = true;
    }
  });
  if (cfg.musicEnabled === false) {
    var mp = document.getElementById("music-player");
    if (mp) mp.hidden = true;
  }
};

/* =========================================================================
   RENDER — writes config data into DOM (runs on init & lang change)
   ========================================================================= */
WS.renderAll = function() {
  var cfg  = WS.config;
  var lang = WS.lang.get();

  function localize(val) {
    if (!val) return "";
    if (typeof val === "object") return val[lang] || val.en || "";
    return val;
  }

  // Names
  var ordered = cfg.nameOrder === "groom-bride"
    ? { first: cfg.groomName, second: cfg.brideName }
    : { first: cfg.brideName, second: cfg.groomName };
  var arFirst  = cfg.nameOrder === "groom-bride" ? "كريم"   : "ياسمين";
  var arSecond = cfg.nameOrder === "groom-bride" ? "ياسمين" : "كريم";
  var nameA = lang === "ar" ? arFirst  : ordered.first;
  var nameB = lang === "ar" ? arSecond : ordered.second;

  // Hero
  var heroA = document.getElementById("hero-name-a");
  var heroB = document.getElementById("hero-name-b");
  if (heroA) heroA.textContent = nameA;
  if (heroB) heroB.textContent = nameB;

  var heroDate = document.getElementById("hero-date");
  if (heroDate) heroDate.textContent = u.formatLongDate(cfg.date);

  var heroSub = document.getElementById("hero-subtitle");
  if (heroSub) heroSub.textContent = localize(cfg.subtitle);

  // Monograms
  var mono = (lang === "ar" ? "ي" : nameA.charAt(0)) + " & " + (lang === "ar" ? "ك" : nameB.charAt(0));
  ["nav-monogram","footer-monogram"].forEach(function(id) {
    var el = document.getElementById(id);
    if (el) el.textContent = mono;
  });
  var sealInit = document.getElementById("seal-initials");
  if (sealInit) sealInit.textContent = (lang === "ar" ? "ي" : nameA.charAt(0)) + "&" + (lang === "ar" ? "ك" : nameB.charAt(0));

  // Footer
  var footNames = document.getElementById("footer-names");
  if (footNames) footNames.textContent = nameA + " & " + nameB;
  var footDate = document.getElementById("footer-date");
  if (footDate) footDate.textContent = u.formatLongDate(cfg.date);
  var footYear = document.getElementById("footer-year");
  if (footYear) { var d = new Date(cfg.date); footYear.textContent = isNaN(d) ? new Date().getFullYear() : d.getFullYear(); }

  // Couple section
  var coupleNames = document.getElementById("couple-names");
  if (coupleNames) coupleNames.textContent = nameA + " & " + nameB;
  var coupleDesc = document.getElementById("couple-desc");
  if (coupleDesc) coupleDesc.textContent = _t("couple-desc");

  // Venue / location
  var venueEl = document.getElementById("venue-name");
  if (venueEl) venueEl.textContent = localize(cfg.venue);
  var addrEl = document.getElementById("venue-address");
  if (addrEl) addrEl.textContent = localize(cfg.address);
  var dtEl = document.getElementById("location-datetime");
  if (dtEl) dtEl.textContent = u.formatLongDate(cfg.date) + "  ·  " + u.formatTime(cfg.date);
  var mapsEl = document.getElementById("maps-link");
  if (mapsEl && cfg.mapsLink) mapsEl.href = cfg.mapsLink;

  // Title & meta
  document.title = nameA + " & " + nameB + (lang === "ar" ? " — دعوة زفاف" : " — Wedding Invitation");

  // Nav
  WS.buildNav();

  // Timeline
  WS.renderTimeline();

  // Guidelines
  WS.renderGuidelines();

  // RSVP deadline
  WS.renderRsvpDeadline();

  // Music title
  var mtEl = document.getElementById("music-title");
  if (mtEl) mtEl.textContent = cfg.musicTitle || "";
};

var NAV_ITEMS = [
  { id:"story",      key:"nav-story",      flag:"storyEnabled" },
  { id:"location",   key:"nav-location",   flag:"locationEnabled" },
  { id:"guidelines", key:"nav-guidelines", flag:"guidelinesEnabled" },
  { id:"gallery",    key:"nav-gallery",    flag:"galleryEnabled" },
  { id:"rsvp",       key:"nav-rsvp",       flag:"rsvpEnabled" }
];

WS.buildNav = function() {
  var cfg  = WS.config;
  var lang = WS.lang.get();
  ["nav-links","drawer-links"].forEach(function(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    container.innerHTML = "";
    NAV_ITEMS
      .filter(function(item) { return cfg[item.flag] !== false; })
      .forEach(function(item) {
        var a = document.createElement("a");
        a.href = "#" + item.id;
        a.textContent = _t(item.key);
        a.addEventListener("click", function() {
          // Close drawer if open
          var drawer = document.getElementById("nav-drawer");
          var scrim  = document.getElementById("nav-scrim");
          var toggle = document.getElementById("nav-toggle");
          if (drawer) drawer.classList.remove("is-open");
          if (scrim)  scrim.classList.remove("is-open");
          if (toggle) toggle.setAttribute("aria-expanded","false");
        });
        container.appendChild(a);
      });
  });
};

WS.renderTimeline = function() {
  var container = document.getElementById("timeline");
  if (!container) return;
  container.innerHTML = "";
  var lang = WS.lang.get();
  (WS.config.story || []).forEach(function(item, i) {
    var art = document.createElement("article");
    art.className = "timeline-item";
    art.setAttribute("data-reveal", i % 2 === 0 ? "fade-right" : "fade-left");

    var dot = document.createElement("div");
    dot.className = "timeline-dot";
    dot.innerHTML = WS.icon(item.icon || "heart");
    art.appendChild(dot);

    function localize(v) { if(!v) return ""; return typeof v==="object" ? (v[lang]||v.en||"") : v; }

    var dateEl = document.createElement("span");
    dateEl.className = "timeline-date";
    dateEl.textContent = localize(item.date);
    art.appendChild(dateEl);

    var titleEl = document.createElement("h3");
    titleEl.className = "timeline-title";
    titleEl.textContent = localize(item.title);
    art.appendChild(titleEl);

    var descEl = document.createElement("p");
    descEl.className = "timeline-desc";
    descEl.textContent = localize(item.description);
    art.appendChild(descEl);

    if (item.image) {
      var wrap = document.createElement("div");
      wrap.className = "timeline-image";
      var img = document.createElement("img");
      img.src = item.image;
      img.alt = localize(item.title);
      img.loading = "lazy";
      img.onerror = function() { this.parentNode.style.display = "none"; };
      wrap.appendChild(img);
      art.appendChild(wrap);
    }
    container.appendChild(art);
  });
  // Re-observe newly added elements
  if (WS._revealObserver) {
    u.$$("[data-reveal]", container).forEach(function(el) {
      WS._revealObserver.observe(el);
    });
  }
};

WS.renderGuidelines = function() {
  var container = document.getElementById("guidelines-grid");
  if (!container) return;
  container.innerHTML = "";
  var lang = WS.lang.get();
  function localize(v) { if(!v) return ""; return typeof v==="object" ? (v[lang]||v.en||"") : v; }
  (WS.config.guidelines || []).forEach(function(item, i) {
    var card = document.createElement("div");
    card.className = "guideline-card";
    card.setAttribute("data-reveal","fade-up");
    card.style.setProperty("--reveal-delay", (i % 3) * 90 + "ms");

    var iconWrap = document.createElement("div");
    iconWrap.className = "guideline-icon";
    iconWrap.innerHTML = WS.icon(item.icon || "heart");
    card.appendChild(iconWrap);

    var h3 = document.createElement("h3");
    h3.textContent = localize(item.title);
    card.appendChild(h3);

    var p = document.createElement("p");
    p.textContent = localize(item.description);
    card.appendChild(p);

    container.appendChild(card);
  });
};

WS.renderRsvpDeadline = function() {
  var el = document.getElementById("rsvp-deadline");
  if (!el || !WS.config.rsvpDeadline) return;
  el.textContent = _t("rsvp-deadline-pre") + u.formatLongDate(WS.config.rsvpDeadline);
};

/* =========================================================================
   GALLERY
   ========================================================================= */
WS.renderGallery = function() {
  var container = document.getElementById("gallery-grid");
  if (!container) return;
  container.innerHTML = "";
  var lang = WS.lang.get();
  function localize(v) { if(!v) return ""; return typeof v==="object" ? (v[lang]||v.en||"") : v; }

  WS._galleryItems = WS.config.gallery || [];
  WS._galleryItems.forEach(function(item, i) {
    var div = document.createElement("div");
    div.className = "gallery-item";
    div.setAttribute("data-index", i);
    div.setAttribute("role","button");
    div.setAttribute("tabindex","0");
    div.setAttribute("aria-label", localize(item.caption));

    var img = document.createElement("img");
    img.alt = localize(item.alt);
    img.loading = "lazy";
    img.src = item.src;
    img.onerror = function() {
      div.style.background = "var(--color-champagne)";
      div.style.minHeight  = "200px";
      this.remove();
    };
    img.addEventListener("load", function() { this.classList.add("is-loaded"); });

    var overlay = document.createElement("div");
    overlay.className = "gallery-overlay";
    var cap = document.createElement("span");
    cap.textContent = localize(item.caption);
    overlay.appendChild(cap);

    div.appendChild(img);
    div.appendChild(overlay);

    div.addEventListener("click", function() { WS.openLightbox(i); });
    div.addEventListener("keydown", function(e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); WS.openLightbox(i); }
    });

    container.appendChild(div);
  });
};

WS.initGallery = function() { WS.renderGallery(); };

/* =========================================================================
   LIGHTBOX
   ========================================================================= */
WS.initLightbox = function() {
  var lb      = document.getElementById("lightbox");
  var lbImg   = document.getElementById("lightbox-img");
  var lbCap   = document.getElementById("lightbox-caption");
  var lbClose = document.getElementById("lightbox-close");
  var lbPrev  = document.getElementById("lightbox-prev");
  var lbNext  = document.getElementById("lightbox-next");
  if (!lb) return;

  WS._lbIndex = 0;

  function show(i) {
    var items = WS._galleryItems || [];
    if (!items.length) return;
    WS._lbIndex = ((i % items.length) + items.length) % items.length;
    var item = items[WS._lbIndex];
    var lang = WS.lang.get();
    function localize(v) { return typeof v==="object" ? (v[lang]||v.en||"") : (v||""); }
    if (lbImg) { lbImg.src = item.src; lbImg.alt = localize(item.alt); }
    if (lbCap) lbCap.textContent = localize(item.caption);
    lb.classList.add("is-open");
    lb.setAttribute("aria-hidden","false");
    document.body.style.overflow = "hidden";
    if (lbClose) lbClose.focus();
  }

  function close() {
    lb.classList.remove("is-open");
    lb.setAttribute("aria-hidden","true");
    document.body.style.overflow = "";
  }

  WS.openLightbox = show;
  if (lbClose) lbClose.addEventListener("click", close);
  if (lbPrev)  lbPrev.addEventListener("click",  function() { show(WS._lbIndex - 1); });
  if (lbNext)  lbNext.addEventListener("click",  function() { show(WS._lbIndex + 1); });
  lb.addEventListener("click", function(e) { if (e.target === lb) close(); });
  document.addEventListener("keydown", function(e) {
    if (!lb.classList.contains("is-open")) return;
    if (e.key === "Escape")     close();
    if (e.key === "ArrowLeft")  show(WS._lbIndex - 1);
    if (e.key === "ArrowRight") show(WS._lbIndex + 1);
  });
};

/* =========================================================================
   NAV — scroll shadow + mobile drawer + active link
   ========================================================================= */
WS.initNav = function() {
  var nav    = document.getElementById("site-nav");
  var toggle = document.getElementById("nav-toggle");
  var drawer = document.getElementById("nav-drawer");
  var scrim  = document.getElementById("nav-scrim");

  if (nav) {
    window.addEventListener("scroll", u.rafThrottle(function() {
      nav.classList.toggle("is-scrolled", window.scrollY > 40);
    }), { passive: true });
  }

  if (toggle && drawer && scrim) {
    function openDrawer() {
      drawer.classList.add("is-open");
      scrim.classList.add("is-open");
      toggle.setAttribute("aria-expanded","true");
    }
    function closeDrawer() {
      drawer.classList.remove("is-open");
      scrim.classList.remove("is-open");
      toggle.setAttribute("aria-expanded","false");
    }
    toggle.addEventListener("click", function() {
      drawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
    });
    scrim.addEventListener("click", closeDrawer);
    document.addEventListener("keydown", function(e) {
      if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
    });
  }

  // Active link highlighting
  var sections = NAV_ITEMS.map(function(i) { return document.getElementById(i.id); }).filter(Boolean);
  var allNavLinks = u.$$(".nav-links a, .drawer-links a");
  window.addEventListener("scroll", u.rafThrottle(function() {
    var scrollY = window.scrollY + 120;
    sections.forEach(function(sec) {
      if (scrollY >= sec.offsetTop && scrollY < sec.offsetTop + sec.offsetHeight) {
        allNavLinks.forEach(function(a) {
          a.classList.toggle("is-active", a.getAttribute("href") === "#" + sec.id);
        });
      }
    });
  }), { passive: true });
};

/* =========================================================================
   COUNTDOWN
   ========================================================================= */
WS.initCountdown = function() {
  var cfg     = WS.config;
  var target  = new Date(cfg.date).getTime();
  var daysEl  = document.getElementById("cd-days");
  var hoursEl = document.getElementById("cd-hours");
  var minsEl  = document.getElementById("cd-mins");
  var secsEl  = document.getElementById("cd-secs");
  var arrived = document.getElementById("countdown-arrived");
  var cdSec   = document.getElementById("countdown-section");
  if (!daysEl) return;

  function flip(el, newVal) {
    if (el.textContent !== newVal) {
      el.classList.remove("is-flipping");
      void el.offsetWidth; // reflow
      el.classList.add("is-flipping");
      el.textContent = newVal;
    }
  }

  function tick() {
    var now  = Date.now();
    var diff = target - now;
    if (diff <= 0) {
      if (cdSec) {
        daysEl.textContent = hoursEl.textContent = minsEl.textContent = secsEl.textContent = "00";
      }
      if (arrived) { arrived.hidden = false; arrived.textContent = _t("cd-arrived"); }
      return;
    }
    var days  = Math.floor(diff / 86400000);
    var hours = Math.floor((diff % 86400000) / 3600000);
    var mins  = Math.floor((diff % 3600000)  / 60000);
    var secs  = Math.floor((diff % 60000)    / 1000);
    flip(daysEl,  u.pad2(days));
    flip(hoursEl, u.pad2(hours));
    flip(minsEl,  u.pad2(mins));
    flip(secsEl,  u.pad2(secs));
    setTimeout(tick, 1000);
  }
  tick();
};

/* =========================================================================
   HERO PARTICLES
   ========================================================================= */
WS.initParticles = function() {
  if (u.prefersReducedMotion()) return;
  var container = document.getElementById("hero-particles");
  if (!container) return;
  var count = Math.min(window.innerWidth < 600 ? 10 : 20, 20);
  for (var i = 0; i < count; i++) {
    (function(idx) {
      setTimeout(function() {
        var p = document.createElement("div");
        p.className = "hero-particle";
        var size = (Math.random() * 4 + 2) + "px";
        p.style.cssText = [
          "--size:" + size,
          "--dur:" + (Math.random() * 12 + 10) + "s",
          "--delay:" + (Math.random() * 8) + "s",
          "--drift:" + (Math.random() * 60 - 30) + "px",
          "--particle-opacity:" + (Math.random() * 0.4 + 0.3),
          "left:" + Math.random() * 100 + "%"
        ].join(";");
        container.appendChild(p);
      }, idx * 120);
    })(i);
  }
};

/* =========================================================================
   SCROLL INDICATOR
   ========================================================================= */
WS.initScrollIndicator = function() {
  var btn = document.getElementById("scroll-indicator");
  if (!btn) return;
  btn.addEventListener("click", function() {
    var cd = document.getElementById("countdown-section") || document.getElementById("story");
    if (cd) cd.scrollIntoView({ behavior:"smooth" });
  });
  window.addEventListener("scroll", function() {
    btn.style.opacity = window.scrollY > 80 ? "0" : "";
  }, { passive:true });
};

/* =========================================================================
   MUSIC PLAYER
   ========================================================================= */
WS.initMusic = function() {
  var player  = document.getElementById("music-player");
  var audio   = document.getElementById("bg-audio");
  var toggle  = document.getElementById("music-toggle");
  var panel   = document.getElementById("music-panel");
  var progress= document.getElementById("music-progress");
  var volCtrl = document.getElementById("music-volume");
  if (!player || !audio || !toggle) return;

  var cfg = WS.config;
  if (!cfg.musicEnabled || !cfg.backgroundMusic) {
    player.hidden = true;
    return;
  }

  audio.src = cfg.backgroundMusic;
  audio.volume = 0.45;

  var playing = false;

  toggle.addEventListener("click", function() {
    if (!panel) return;
    var expanded = player.classList.contains("is-expanded");
    if (!expanded) {
      player.classList.add("is-expanded");
      return;
    }
    if (playing) {
      audio.pause();
      playing = false;
      player.classList.remove("is-playing");
      toggle.setAttribute("aria-label", _t("music-toggle-play"));
    } else {
      var p = audio.play();
      if (p && p.catch) p.catch(function(){});
      playing = true;
      player.classList.add("is-playing");
      toggle.setAttribute("aria-label", _t("music-toggle-pause"));
    }
  });

  audio.addEventListener("timeupdate", function() {
    if (!progress || !audio.duration) return;
    progress.value = (audio.currentTime / audio.duration) * 100;
  });
  if (progress) {
    progress.addEventListener("input", function() {
      if (audio.duration) audio.currentTime = (progress.value / 100) * audio.duration;
    });
  }
  if (volCtrl) {
    volCtrl.addEventListener("input", function() { audio.volume = volCtrl.value / 100; });
  }
  audio.addEventListener("error", function() { player.hidden = true; });
};

/* =========================================================================
   RSVP FORM
   ========================================================================= */
WS.initRsvp = function() {
  var form    = document.getElementById("rsvp-form");
  var success = document.getElementById("rsvp-success");
  var submit  = document.getElementById("rsvp-submit");
  if (!form) return;

  // Attendance toggle
  var attendBtns = u.$$(".attend-btn");
  var chosen = null;
  attendBtns.forEach(function(btn) {
    btn.addEventListener("click", function() {
      chosen = btn.getAttribute("data-value");
      attendBtns.forEach(function(b) {
        b.classList.toggle("is-active", b === btn);
        b.setAttribute("aria-checked", b === btn ? "true" : "false");
      });
    });
  });

  function setErr(id, msg) {
    var row = document.getElementById("row-" + id.replace("rsvp-","").replace("err-",""));
    var errEl = document.getElementById("err-" + id.replace("rsvp-","").replace("row-",""));
    if (!errEl) errEl = document.getElementById("err-" + id);
    if (errEl) errEl.textContent = msg;
    if (row) row.classList.toggle("has-error", !!msg);
  }
  function clearErr(id) { setErr(id, ""); }

  form.addEventListener("submit", function(e) {
    e.preventDefault();
    var nameVal   = (document.getElementById("rsvp-name")  || {}).value || "";
    var phoneVal  = (document.getElementById("rsvp-phone") || {}).value || "";
    var guestsVal = (document.getElementById("rsvp-guests")|| {}).value || "";
    var msgVal    = (document.getElementById("rsvp-message")|| {}).value || "";

    var valid = true;
    clearErr("name"); clearErr("phone"); clearErr("guests"); clearErr("attendance");

    if (!nameVal.trim())  { setErr("name",   _t("err-name-required"));   valid = false; }
    if (!phoneVal.trim()) { setErr("phone",  _t("err-phone-required"));  valid = false; }
    if (!guestsVal)       { setErr("guests", _t("err-guests-required")); valid = false; }
    if (!chosen)          { setErr("attendance", _t("err-attend-required")); valid = false; }
    if (!valid) return;

    // Simulate submission
    if (submit) { submit.classList.add("is-loading"); submit.disabled = true; }
    setTimeout(function() {
      // Persist to localStorage
      var saved = JSON.parse(localStorage.getItem("guestMessages") || "[]");
      if (msgVal.trim()) {
        var lang = WS.lang.get();
        saved.push({
          name: nameVal.trim(),
          text: msgVal.trim(),
          date: new Date().toLocaleDateString(lang === "ar" ? "ar-EG" : "en-US")
        });
        localStorage.setItem("guestMessages", JSON.stringify(saved));
      }
      var guests = parseInt(guestsVal, 10) || 1;
      var total  = parseInt(localStorage.getItem("guestTotalCount") || "0", 10);
      localStorage.setItem("guestTotalCount", total + guests);

      form.hidden = true;
      var deadlineEl = document.getElementById("rsvp-deadline");
      if (deadlineEl) deadlineEl.hidden = true;
      if (success) {
        success.hidden = false;
        var msgEl = document.getElementById("rsvp-success-msg");
        if (msgEl) msgEl.textContent = _t("rsvp-success-" + chosen);
      }
    }, 1200);
  });
};

/* =========================================================================
   MESSAGES MODAL (on index.html)
   ========================================================================= */
WS.initMessages = function() {
  var modal   = document.getElementById("messages-modal");
  var openBtn = document.getElementById("view-messages-link");
  var closeBtn= document.getElementById("close-messages");
  var passIn  = document.getElementById("messages-pass-input");
  var passBtn = document.getElementById("messages-pass-submit");
  var passErr = document.getElementById("messages-pass-error");
  var passCtx = document.getElementById("messages-pass-container");
  var listCtx = document.getElementById("messages-list");
  if (!modal) return;

  // If openBtn is a link to message.html, keep it that way but also allow modal
  // We redirect to message.html on click — no modal on index
  // (The modal exists in the HTML for backward compat but we prefer the dedicated page)
  // So just ensure the link goes to message.html correctly:
  if (openBtn) {
    openBtn.href = "message.html";
  }

  // Password gate for the modal (if someone triggers it programmatically)
  function openModal() {
    modal.style.display = "flex";
    modal.setAttribute("aria-hidden","false");
    setTimeout(function() { modal.classList.add("is-visible"); }, 10);
    if (passIn) passIn.focus();
  }
  function closeModal() {
    modal.classList.remove("is-visible");
    setTimeout(function() { modal.style.display = "none"; modal.setAttribute("aria-hidden","true"); }, 350);
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", function(e) { if (e.target === modal) closeModal(); });
  document.addEventListener("keydown", function(e) {
    if (e.key === "Escape" && modal.classList.contains("is-visible")) closeModal();
  });

  var PASS = WS.config.rsvpPassword || "love";
  function tryPass() {
    var val = passIn ? passIn.value.trim().toLowerCase() : "";
    if (val === PASS || val === "حب") {
      if (passCtx) passCtx.style.display = "none";
      if (listCtx) {
        listCtx.style.display = "flex";
        renderMessagesList();
      }
    } else {
      if (passErr) { passErr.style.display = "block"; passErr.textContent = _t("modal-pass-error"); }
    }
  }
  if (passBtn) passBtn.addEventListener("click", tryPass);
  if (passIn)  passIn.addEventListener("keydown", function(e) { if (e.key === "Enter") tryPass(); });

  function renderMessagesList() {
    if (!listCtx) return;
    var msgs = JSON.parse(localStorage.getItem("guestMessages") || "[]");
    listCtx.innerHTML = msgs.length ? msgs.reverse().map(function(m) {
      return '<div class="message-card"><p class="message-text">' + u.escapeHTML(m.text) +
             '</p><span class="message-author">' + u.escapeHTML(m.name) + ' · ' + u.escapeHTML(m.date||"") + '</span></div>';
    }).join("") : "<p>No messages yet.</p>";
  }
};

/* =========================================================================
   SCROLL REVEAL
   ========================================================================= */
WS.initReveal = function() {
  if (u.prefersReducedMotion()) {
    u.$$("[data-reveal]").forEach(function(el) { el.classList.add("is-visible"); });
    return;
  }
  var obs = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        var el = entry.target;
        var delay = el.getAttribute("data-reveal-delay") || el.style.getPropertyValue("--reveal-delay") || "0ms";
        el.style.transitionDelay = delay;
        el.classList.add("is-visible");
        obs.unobserve(el);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

  u.$$("[data-reveal]").forEach(function(el) { obs.observe(el); });
  WS._revealObserver = obs;
};

/* =========================================================================
   BACK TO TOP
   ========================================================================= */
WS.initBackToTop = function() {
  var btn = document.getElementById("back-to-top");
  if (!btn) return;
  window.addEventListener("scroll", u.rafThrottle(function() {
    btn.classList.toggle("is-visible", window.scrollY > 400);
  }), { passive:true });
  btn.addEventListener("click", function() { window.scrollTo({ top:0, behavior:"smooth" }); });
};

/* =========================================================================
   GUEST MESSAGES — 30 UNIQUE MESSAGES SEEDED INTO LOCALSTORAGE
   (only seeds once per browser; never overwrites user-submitted messages)
   ========================================================================= */
WS.seedGuestMessages = function() {
  if (localStorage.getItem("ws_messages_seeded")) return;

  var MESSAGES = [
    { name: "أحمد ومنى سلامة",    text: "مبروك يا ياسمين ويا كريم! ربنا يكملكم على خير ويرزقكم بالسعادة دائماً.",                                                    date: "15/10/2026" },
    { name: "محمد وريم حسن",       text: "أجمل تهنئة لأجمل عروسين! كل سنة وأنتم بألف خير وعافية.",                                                                    date: "16/10/2026" },
    { name: "عمر وفاطمة علي",      text: "ربنا يبارك فيكم ويجعل حياتكم مليانة بالفرح والمحبة. مبروك!",                                                                  date: "17/10/2026" },
    { name: "يوسف وهنا إبراهيم",   text: "نتمنى لكم حياة مليانة بالحب والتفاهم والسعادة. ألف مبروك!",                                                                   date: "18/10/2026" },
    { name: "مصطفى وشيماء خالد",   text: "يا ياسمين ويا كريم، انتم أجمل زوجين عرفناهم. كل التوفيق والنجاح!",                                                            date: "19/10/2026" },
    { name: "خالد وأميرة أحمد",    text: "مبروك الزواج! ربنا يخليكم لبعض ويجعل بيتكم مليان حب وبركة.",                                                                  date: "20/10/2026" },
    { name: "طارق وداليا عبد الله", text: "أجمل الأماني لكم في بداية هذا الطريق الجميل. كل سنة وأنتم بألف خير.",                                                        date: "21/10/2026" },
    { name: "هاني وسامية حبيب",    text: "ألف مبروك! ربنا يجعل زواجكم سعيداً ومباركاً ويرزقكم بالذرية الصالحة.",                                                        date: "22/10/2026" },
    { name: "رامي ورانيا صادق",    text: "يا ياسمين، ربنا يسعدك كما أسعدتينا دائماً. مبروك لكما الاثنين!",                                                              date: "23/10/2026" },
    { name: "وائل ومنى فؤاد",      text: "تهانينا الحارة لأجمل عروسين! عقبال ما نفرح بأولادكم.",                                                                        date: "24/10/2026" },
    { name: "بشير ونهى عادل",      text: "أسعد الله أوقاتكم ووفقكم لما يحبه ويرضاه. مبروك الزواج!",                                                                    date: "25/10/2026" },
    { name: "زياد وروان مصطفى",    text: "ألف ألف مبروك! ربنا يكمل عليكم نعمته ويجعل حياتكم دائماً في سعادة.",                                                          date: "26/10/2026" },
    { name: "عصام وسهر عمر",       text: "يا كريم، أجمل إنسان يستاهل أجمل حياة. مبروك لكما الاثنين!",                                                                  date: "27/10/2026" },
    { name: "نبيل وهالة كمال",      text: "مبروك! يارب تعيشوا في هنا ومحبة وتربوا أولادكم في أحسن تربية.",                                                               date: "28/10/2026" },
    { name: "ماهر وعبير سليم",     text: "ربنا يجمعكم دائماً على خير ويديم المحبة بينكم. كل التهاني!",                                                                  date: "29/10/2026" },
    { name: "فادي وميار رضا",      text: "تهنئة قلبية لكما يا غاليَيْن. ربنا يسعدكم ويبارك في زواجكم.",                                                                 date: "30/10/2026" },
    { name: "سامي وغادة جميل",     text: "أجمل تهانينا وأحر تبريكاتنا. عقبال ما نفرح بأفراح أولادكم!",                                                                  date: "31/10/2026" },
    { name: "حسام وإسراء ناصر",    text: "ألف مبروك يا ياسمين ويا كريم. ربنا يجعلكم سند لبعض طول العمر.",                                                               date: "01/11/2026" },
    { name: "أشرف ونور الدين",      text: "مبروك الزواج! أتمنى لكما حياة مليانة بالمحبة والسعادة والبركة.",                                                               date: "02/11/2026" },
    { name: "معتز وشروق منير",     text: "يا ياسمين ويا كريم، انتم من أحلى الناس ومستاهلين أحلى حياة. مبروك!",                                                          date: "03/11/2026" },
    { name: "تامر وأسماء حجازي",   text: "ألف مبروك! عقبال ما نشوفكم مع أولادكم وتكونوا أسعد عيلة!",                                                                   date: "04/11/2026" },
    { name: "شريف ولمياء وهبة",    text: "ربنا يبارك في هذا الزواج ويجعله أساس حياة سعيدة وناجحة. مبروك!",                                                              date: "05/11/2026" },
    { name: "أمجد ودينا رشدي",     text: "تهانينا الحارة لكما. ربنا يجعل بيتكم مليان بالفرح والمحبة دائماً.",                                                            date: "06/11/2026" },
    { name: "جمال ومروة بدر",      text: "مبروك ألف مبروك! عقبال الأفراح الكبيرة وعقبال أولادكم.",                                                                       date: "07/11/2026" },
    { name: "عاطف وسحر طه",       text: "يارب يكملكم على خير ويجعل حياتكم المشتركة مليانة بالبركة والسعادة.",                                                            date: "08/11/2026" },
    { name: "صلاح ولبنى يوسف",    text: "ألف مبروك يا جماعة! ربنا يديم فرحكم ويبارك في زواجكم السعيد.",                                                                 date: "09/11/2026" },
    { name: "علاء وآية رمزي",      text: "مبروك الزواج! أتمنى من القلب أن تكون حياتكم أجمل من أحلامكم.",                                                                 date: "10/11/2026" },
    { name: "وليد ونادية عزيز",    text: "ألف مبروك وربنا يسعدكم ويديم المحبة والوفاء بينكم طول العمر.",                                                                  date: "11/11/2026" },
    { name: "إياد وإلهام زكي",     text: "تهانينا القلبية لكما. عقبال ما نفرح بأفراح بيتكم الجديد!",                                                                    date: "12/11/2026" },
    { name: "كمال وعزيزة منصور",   text: "ربنا يجعل هذا الزواج بداية حياة جميلة مليانة بالفرح والمحبة. مبروك!",                                                          date: "13/11/2026" }
  ];

  localStorage.setItem("guestMessages",    JSON.stringify(MESSAGES));
  localStorage.setItem("guestTotalCount",  "58");
  localStorage.setItem("ws_messages_seeded","1");
};

/* =========================================================================
   MESSAGE.HTML — dedicated guest messages page logic
   ========================================================================= */
WS.initMessagePage = function() {
  // Seed if needed
  WS.seedGuestMessages();

  // Apply current language to this page's static elements
  WS.lang.init();

  // Stats
  var msgs = JSON.parse(localStorage.getItem("guestMessages") || "[]");
  var totalGuests = parseInt(localStorage.getItem("guestTotalCount") || "0", 10);
  var statMsgs   = document.getElementById("stat-total-messages");
  var statGuests = document.getElementById("stat-total-guests");
  var statLatest = document.getElementById("stat-latest-message");
  if (statMsgs)   statMsgs.textContent   = msgs.length;
  if (statGuests) statGuests.textContent  = totalGuests;
  if (statLatest && msgs.length) {
    var latest = msgs[msgs.length - 1];
    statLatest.textContent = latest.name + " · " + (latest.date || "");
  }

  // Grid
  var searchInput = document.getElementById("msg-search");
  var sortSelect  = document.getElementById("msg-sort");
  var grid        = document.getElementById("messages-grid");
  if (!grid) return;

  function renderGrid() {
    var lang  = WS.lang.get();
    var query = searchInput ? searchInput.value.trim().toLowerCase() : "";
    var sort  = sortSelect ? sortSelect.value : "newest";
    var filtered = msgs.filter(function(m) {
      return !query || m.name.toLowerCase().indexOf(query) !== -1;
    });
    var ordered = filtered.slice();
    if (sort === "newest") ordered.reverse();

    var dir = lang === "ar" ? "rtl" : "ltr";
    grid.innerHTML = ordered.length ? ordered.map(function(m) {
      var initial = m.name ? m.name.charAt(0).toUpperCase() : "?";
      return '<div style="background:var(--bg-ivory,#FAF6EF);padding:2rem;border-radius:var(--radius-md,12px);border:1px solid rgba(173,138,78,0.1);box-shadow:0 10px 30px rgba(0,0,0,0.03);position:relative;direction:' + dir + ';">' +
        '<div style="display:flex;align-items:center;gap:1rem;margin-bottom:1.5rem;">' +
          '<div style="width:48px;height:48px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-family:var(--font-heading);font-size:1.25rem;flex-shrink:0;">' + u.escapeHTML(initial) + '</div>' +
          '<div>' +
            '<div style="font-family:var(--font-heading);font-weight:600;color:var(--text-main);font-size:1.2rem;">' + u.escapeHTML(m.name) + '</div>' +
            '<div style="font-size:0.85rem;color:var(--text-soft);">' + u.escapeHTML(m.date || "") + '</div>' +
          '</div>' +
        '</div>' +
        '<svg viewBox="0 0 24 24" width="20" height="20" style="position:absolute;top:2rem;' + (lang==="ar"?"left:2rem;":"right:2rem;") + 'color:var(--accent);opacity:0.4;" fill="currentColor"><path d="M12 21s-7.5-4.7-10.2-9.3C.3 8.8 1.6 5 5.3 4.1c2-.5 4 .3 5.2 2 1.2-1.7 3.2-2.5 5.2-2 3.7.9 5 4.7 3.5 7.6C19.5 16.3 12 21 12 21z"/></svg>' +
        '<p style="margin:0;font-family:var(--font-heading);font-style:italic;font-size:1.1rem;line-height:1.6;color:var(--text-main);">' + u.escapeHTML(m.text) + '</p>' +
      '</div>';
    }).join("") : '<p style="text-align:center;color:var(--text-soft);padding:3rem;">' + (lang==="ar" ? "لا توجد رسائل مطابقة." : "No messages found.") + '</p>';
  }

  if (searchInput) searchInput.addEventListener("input", u.debounce(renderGrid, 200));
  if (sortSelect)  sortSelect.addEventListener("change", renderGrid);

  window.addEventListener("wsLangChanged", function() {
    // Update placeholder
    if (searchInput) searchInput.placeholder = _t("msg-search-placeholder");
    // Update sort options text
    if (sortSelect) {
      var opts = sortSelect.querySelectorAll("option");
      if (opts[0]) opts[0].textContent = _t("msg-sort-newest");
      if (opts[1]) opts[1].textContent = _t("msg-sort-oldest");
    }
    renderGrid();
  });

  renderGrid();
};

/* =========================================================================
   BOOT
   ========================================================================= */
(function boot() {
  var isMessagePage = !!document.getElementById("messages-grid");

  if (isMessagePage) {
    // message.html initialisation
    document.addEventListener("DOMContentLoaded", function() {
      WS.applyTheme();
      WS.initMessagePage();
      WS.initBackToTop && WS.initBackToTop();
    });
    return;
  }

  // index.html initialisation
  document.addEventListener("DOMContentLoaded", function() {
    WS.applyTheme();
    WS.seedGuestMessages();

    // Apply saved language immediately (before envelope) so toggle label is right
    WS.lang.init();

    // Start with envelope
    WS.initEnvelope();
  });
})();
