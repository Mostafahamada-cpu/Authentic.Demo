/* =========================================================================
   TRANSLATIONS
   ========================================================================= */
(function() {
  window.WS = window.WS || {};
  window.WS.translations = {
    en: {
      "nav-story": "Our Story",
      "nav-location": "The Celebration",
      "nav-guidelines": "Good To Know",
      "nav-gallery": "Gallery",
      "nav-rsvp": "RSVP",
      "hero-eyebrow": "The Wedding Of",
      "hero-rsvp": "Reserve Your Seat",
      "cd-eyebrow": "Counting Down To Forever",
      "cd-days": "Days",
      "cd-hours": "Hours",
      "cd-mins": "Minutes",
      "cd-secs": "Seconds",
      "cd-arrived": "Today is the day — we're married!",
      "story-eyebrow": "Our Story",
      "story-title": "How It All Began",
      "loc-eyebrow": "The Celebration",
      "loc-btn": "Get Directions",
      "guide-eyebrow": "Good To Know",
      "guide-title": "A Few Details",
      "gal-eyebrow": "Moments",
      "gal-title": "Our Gallery",
      "couple-eyebrow": "The Couple",
      "couple-desc": "\"We can't wait to celebrate our special day with you. Thank you for being part of our story.\"",
      "couple-link": "View Guest Messages",
      "rsvp-eyebrow": "Join Us",
      "rsvp-title": "Kindly Respond",
      "rsvp-lbl-name": "Full Name",
      "rsvp-lbl-phone": "Phone Number",
      "rsvp-lbl-guests": "Number of Guests",
      "rsvp-lbl-attend": "Will You Attend?",
      "rsvp-btn-accept": "Joyfully Accepts",
      "rsvp-btn-decline": "Regretfully Declines",
      "rsvp-lbl-msg": "Message",
      "rsvp-lbl-opt": "(optional)",
      "rsvp-btn-submit": "Send RSVP",
      "rsvp-thanks-title": "Thank You",
      "footer-thanks": "With love and gratitude for being part of our story.",
      "footer-credit": "Crafted with love"
    },
    ar: {
      "nav-story": "قصتنا",
      "nav-location": "الاحتفال",
      "nav-guidelines": "معلومات تهمك",
      "nav-gallery": "معرض الصور",
      "nav-rsvp": "تأكيد الحضور",
      "hero-eyebrow": "حفل زفاف",
      "hero-rsvp": "تأكيد الحضور",
      "cd-eyebrow": "عد تنازلي ليومنا المنتظر",
      "cd-days": "أيام",
      "cd-hours": "ساعات",
      "cd-mins": "دقائق",
      "cd-secs": "ثواني",
      "cd-arrived": "اليوم هو يومنا — لقد تزوجنا!",
      "story-eyebrow": "قصتنا",
      "story-title": "كيف بدأت الحكاية",
      "loc-eyebrow": "الاحتفال",
      "loc-btn": "احصل على الاتجاهات",
      "guide-eyebrow": "معلومات تهمك",
      "guide-title": "بعض التفاصيل",
      "gal-eyebrow": "لحظات",
      "gal-title": "معرض الصور",
      "couple-eyebrow": "العروسان",
      "couple-desc": "\"لا نستطيع الانتظار حتى نحتفل بيومنا المميز مع أحبابنا. شكراً من القلب لأنكم جزء من حياتنا وقصتنا.\"",
      "couple-link": "عرض الرسائل",
      "rsvp-eyebrow": "شاركنا فرحتنا",
      "rsvp-title": "نرجو الرد",
      "rsvp-lbl-name": "الاسم بالكامل",
      "rsvp-lbl-phone": "رقم الهاتف",
      "rsvp-lbl-guests": "عدد الضيوف",
      "rsvp-lbl-attend": "هل ستحضر؟",
      "rsvp-btn-accept": "سأحضر بكل سرور",
      "rsvp-btn-decline": "نعتذر عن الحضور",
      "rsvp-lbl-msg": "رسالة",
      "rsvp-lbl-opt": "(اختياري)",
      "rsvp-btn-submit": "إرسال الرد",
      "rsvp-thanks-title": "شكراً لك",
      "footer-thanks": "بكل الحب والامتنان لكونكم جزءاً من قصتنا.",
      "footer-credit": "صُنع بحب"
    }
  };

  window.WS.setLanguage = function(lang) {
    localStorage.setItem('site_lang', lang);
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    var dict = window.WS.translations[lang] || window.WS.translations.en;
    document.querySelectorAll('[data-i18n]').forEach(function(el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key]) {
        el.textContent = dict[key];
      }
    });
    // For elements with mixed content
    var optSpan = document.querySelector('[data-i18n-opt]');
    if (optSpan) optSpan.textContent = dict["rsvp-lbl-opt"];
    
    // Dispatch event for other scripts to re-render dates or dynamic content
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: lang }));
  };

  window.WS.initLanguage = function() {
    var savedLang = localStorage.getItem('site_lang') || 'en';
    window.WS.setLanguage(savedLang);
    
    var toggleBtn = document.getElementById('lang-toggle');
    if (toggleBtn) {
      toggleBtn.textContent = savedLang === 'en' ? 'AR' : 'EN';
      toggleBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var newLang = document.documentElement.lang === 'en' ? 'ar' : 'en';
        window.WS.setLanguage(newLang);
        toggleBtn.textContent = newLang === 'en' ? 'AR' : 'EN';
      });
    }
  };
})();
/* =========================================================================
   WEDDING CONFIG
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.config = {
    // ---- The couple -------------------------------------------------------
    groomName: "Karim",
    brideName: "Yasmine",
    nameOrder: "bride-groom",   // "bride-groom" or "groom-bride"

    // ---- Hero copy ----------------------------------------------------------
    tagline: "The Wedding Of",
    subtitle: "Together with their families, invite you to celebrate their marriage and the beginning of their life together.",
    heroImage: "",

    // ---- Date & venue ---------------------------------------------------------
    date: "2026-12-12T17:00:00",
    venue: "Marriott Mena House",
    address: "Al Haram, Giza, Cairo Governorate, Egypt",
    mapsLink: "https://maps.google.com/?q=Marriott+Mena+House+Giza+Egypt",
    mapEmbedSrc: "https://www.google.com/maps?q=Marriott+Mena+House+Giza+Egypt&output=embed",

    // ---- Theme ---------------------------------------------------------------
    colors: {
      accent: "#AD8A4E",
      accentDeep: "#8A6A38",
      accentLight: "#DCC793"
    },

    // ---- Music -----------------------------------------------------------------
    backgroundMusic: "music.mp3",
    musicTitle: "Maak — Amr Diab",

    // ---- Love Story timeline --------------------------------------------------
    story: [
      {
        date: "August 2019",
        title: "First Meeting",
        description: "At a rooftop dinner in downtown Cairo, Karim arrived late and took the only open seat next to Yasmine. They talked until the lights went out.",
        icon: "sparkle",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "March 2021",
        title: "First Trip Together",
        description: "A trip to Luxor and Aswan turned into two weeks of laughter and beautiful memories along the banks of the Nile.",
        icon: "plane",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "June 2023",
        title: "Our First Home",
        description: "A cozy apartment in Zamalek with a view of the Nile became the first place they truly called home together.",
        icon: "home",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "February 2026",
        title: "The Proposal",
        description: "On the Nile Corniche under the stars, Karim proposed before dessert arrived, and Yasmine said yes before he could finish the sentence.",
        icon: "rings",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "December 12, 2026",
        title: "The Beginning",
        description: "Surrounded by loved ones, they begin a new chapter — and you are witnesses to this beautiful beginning.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
      }
    ],

    // ---- Guidelines cards -------------------------------------------------------
    guidelines: [
      { icon: "dress-code", title: "Dress Code", description: "Formal evening attire. We hope to see you looking your best — suggested colors: champagne, sage green, and light blue." },
      { icon: "arrival", title: "Arrival Time", description: "Please arrive no later than 4:30 PM. The wedding ceremony begins promptly at 5:00 PM." },
      { icon: "parking", title: "Parking", description: "Complimentary valet service is available at the main entrance starting at 4:00 PM." },
      { icon: "no-smoking", title: "Non-Smoking Area", description: "All gardens are non-smoking. There is a designated smoking area near the west courtyard." },
      { icon: "gift", title: "Gifts", description: "Your presence is the greatest gift. For those who wish to contribute, a gift registry is attached to the invitation." },
      { icon: "contact", title: "Inquiries", description: "To contact the wedding coordinator Maryam, please call: 01000123456." }
    ],

    // ---- Gallery ------------------------------------------------------------------
    gallery: [
      { src: "https://picsum.photos/800/600?random=1", alt: "Photo 1", caption: "Sunset glow" },
      { src: "https://picsum.photos/800/600?random=2", alt: "Photo 2", caption: "The Proposal" },
      { src: "https://picsum.photos/800/600?random=3", alt: "Photo 3", caption: "First Meeting" },
      { src: "https://picsum.photos/800/600?random=4", alt: "Photo 4", caption: "Marriott Mena House" },
      { src: "https://picsum.photos/800/600?random=5", alt: "Photo 5", caption: "Quiet evenings" },
      { src: "https://picsum.photos/800/600?random=6", alt: "Photo 6", caption: "Luxor, 2021" },
      { src: "https://picsum.photos/800/600?random=7", alt: "Photo 7", caption: "Details" },
      { src: "https://picsum.photos/800/600?random=8", alt: "Photo 8", caption: "Here begins the story" }
    ],

    // ---- RSVP -----------------------------------------------------------------------
    rsvpDeadline: "2026-11-01",
    socialLinks: {
      instagram: "",
      facebook: ""
    },

    countdown: true,
    storyEnabled: true,
    galleryEnabled: true,
    locationEnabled: true,
    guidelinesEnabled: true,
    musicEnabled: true,
    rsvpEnabled: true
  };
})();

/* =========================================================================
   UTILITIES
   Small shared helpers. Every module in this project hangs its public API
   off window.WS so nothing collides in the global scope, and every module
   file is a self-contained IIFE.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  var utils = {};

  utils.$ = function (selector, scope) {
    return (scope || document).querySelector(selector);
  };

  utils.$all = function (selector, scope) {
    return Array.prototype.slice.call((scope || document).querySelectorAll(selector));
  };

  utils.escapeHTML = function (str) {
    if (str === null || str === undefined) { return ""; }
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  };

  utils.clamp = function (num, min, max) {
    return Math.min(Math.max(num, min), max);
  };

  // First letter, uppercased, for monogram initials. Handles empty input.
  utils.initial = function (name) {
    if (!name) { return ""; }
    return name.trim().charAt(0).toUpperCase();
  };

  utils.debounce = function (fn, wait) {
    var t;
    return function () {
      var args = arguments, ctx = this;
      clearTimeout(t);
      t = setTimeout(function () { fn.apply(ctx, args); }, wait);
    };
  };

  // rAF-throttle: coalesces rapid events (scroll, resize) to once per frame.
  utils.rafThrottle = function (fn) {
    var scheduled = false;
    return function () {
      var args = arguments, ctx = this;
      if (!scheduled) {
        scheduled = true;
        requestAnimationFrame(function () {
          fn.apply(ctx, args);
          scheduled = false;
        });
      }
    };
  };

  utils.formatLongDate = function (isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) { return ""; }
    var lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
    return new Intl.DateTimeFormat(lang, { day: "numeric", month: "long", year: "numeric" }).format(d);
  };

  utils.formatShortDate = function (isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) { return ""; }
    var lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
    return new Intl.DateTimeFormat(lang, { day: "2-digit", month: "2-digit", year: "numeric" }).format(d).replace(/\//g, " . ");
  };

  utils.formatTime = function (isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) { return ""; }
    var lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
    return new Intl.DateTimeFormat(lang, { hour: "numeric", minute: "2-digit" }).format(d);
  };

  utils.pad2 = function (n) {
    return String(Math.max(0, n)).padStart(2, "0");
  };

  // Runs `fn` safely Ã¢â‚¬â€ one module misbehaving should never take the whole
  // page down. Logs to console so it's still easy to spot during development.
  utils.safeRun = function (label, fn) {
    try {
      fn();
    } catch (err) {
      console.error("[WeddingSite] " + label + " failed to initialize:", err);
    }
  };

  utils.prefersReducedMotion = function () {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  };

  window.WS.utils = utils;
})();

/* =========================================================================
   RENDER
   Reads window.WS.config and writes it into the DOM: theme, hero copy,
   monograms, nav, timeline, guidelines, location, footer. Nothing in this
   file contains wedding-specific text Ã¢â‚¬â€ it is all data-driven, which is
   what makes editing config.js enough to reskin the entire site.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};
  var utils = window.WS.utils;

  function icon(name) {
    return window.WS.icon ? window.WS.icon(name) : "";
  }

  function orderedNames(config) {
    return config.nameOrder === "groom-bride"
      ? { first: config.groomName, second: config.brideName }
      : { first: config.brideName, second: config.groomName };
  }

  function applyTheme(colors) {
    if (!colors) { return; }
    var root = document.documentElement.style;
    if (colors.accent) { root.setProperty("--accent", colors.accent); }
    if (colors.accentDeep) { root.setProperty("--accent-deep", colors.accentDeep); }
    if (colors.accentLight) { root.setProperty("--accent-light", colors.accentLight); }
  }

  function applyToggles(config) {
    var map = {
      "countdown-section": config.countdown,
      "story": config.storyEnabled,
      "location": config.locationEnabled,
      "guidelines": config.guidelinesEnabled,
      "gallery": config.galleryEnabled,
      "rsvp": config.rsvpEnabled
    };
    Object.keys(map).forEach(function (id) {
      if (map[id] === false) {
        var el = document.getElementById(id);
        if (el) { el.hidden = true; }
      }
    });
    if (config.musicEnabled === false) {
      var mp = document.getElementById("music-player");
      if (mp) { mp.hidden = true; }
    }
  }

  function renderMonograms(config) {
    var names = orderedNames(config);
    var mark = utils.initial(names.first) + " & " + utils.initial(names.second);
    var seal = document.getElementById("seal-initials");
    if (seal) { seal.textContent = utils.initial(names.first) + "&" + utils.initial(names.second); }
    var navM = document.getElementById("nav-monogram");
    if (navM) { navM.textContent = mark; }
    var footM = document.getElementById("footer-monogram");
    if (footM) { footM.textContent = mark; }
  }

  function renderHero(config) {
    var names = orderedNames(config);
    var nameA = document.getElementById("hero-name-a");
    var nameB = document.getElementById("hero-name-b");
    if (nameA) { nameA.textContent = names.first || ""; }
    if (nameB) { nameB.textContent = names.second || ""; }

    var dateEl = document.getElementById("hero-date");
    if (dateEl) { dateEl.textContent = utils.formatLongDate(config.date); }

    var subEl = document.getElementById("hero-subtitle");
    if (subEl) { subEl.textContent = config.subtitle || ""; }

    var eyebrowEl = utils.$(".hero-content .eyebrow");
    if (eyebrowEl && config.tagline) { eyebrowEl.textContent = config.tagline; }

    var heroBg = document.getElementById("hero-bg");
    if (heroBg && config.heroImage) {
      heroBg.style.setProperty("--hero-bg-image", "url(\"" + config.heroImage + "\")");
    }

    if (names.first && names.second) {
      document.title = names.first + " & " + names.second + " — Wedding Invitation";
      var metaDesc = utils.$("meta[name=""description""]");
      if (metaDesc) {
        metaDesc.setAttribute("content", "Join us as we celebrate the wedding of " + names.first + " & " + names.second +
          ", " + utils.formatLongDate(config.date) + " at " + (config.venue || "") + ".");
      }
    }
  }

  var NAV_ITEMS = [
    { id: "story", labelKey: "nav-story", flag: "storyEnabled" },
    { id: "location", labelKey: "nav-location", flag: "locationEnabled" },
    { id: "guidelines", labelKey: "nav-guidelines", flag: "guidelinesEnabled" },
    { id: "gallery", labelKey: "nav-gallery", flag: "galleryEnabled" },
    { id: "rsvp", labelKey: "nav-rsvp", flag: "rsvpEnabled" }
  ];

  function buildNav(config) {
    var navLinks = document.getElementById("nav-links");
    var drawerLinks = document.getElementById("drawer-links");
    if (!navLinks || !drawerLinks) { return; }
    navLinks.innerHTML = "";
    drawerLinks.innerHTML = "";

    NAV_ITEMS.filter(function (item) { return config[item.flag] !== false; })
      .forEach(function (item) {
        var a1 = document.createElement("a");
        a1.href = "#" + item.id;
        a1.setAttribute("data-i18n", item.labelKey);
        navLinks.appendChild(a1);

        var a2 = document.createElement("a");
        a2.href = "#" + item.id;
        a2.setAttribute("data-i18n", item.labelKey);
        drawerLinks.appendChild(a2);
      });
  }al(names.second);
    var seal = document.getElementById("seal-initials");
    if (seal) { seal.textContent = utils.initial(names.first) + "&" + utils.initial(names.second); }
    var navM = document.getElementById("nav-monogram");
    if (navM) { navM.textContent = mark; }
    var footM = document.getElementById("footer-monogram");
    if (footM) { footM.textContent = mark; }
  }

  function renderHero(config) {
    var names = orderedNames(config);
    var nameA = document.getElementById("hero-name-a");
    var nameB = document.getElementById("hero-name-b");
    if (nameA) { nameA.textContent = names.first || ""; }
    if (nameB) { nameB.textContent = names.second || ""; }

    var dateEl = document.getElementById("hero-date");
    if (dateEl) { dateEl.textContent = utils.formatLongDate(config.date); }

    var subEl = document.getElementById("hero-subtitle");
    if (subEl) { subEl.textContent = config.subtitle || ""; }

    var eyebrowEl = utils.$(".hero-content .eyebrow");
    if (eyebrowEl && config.tagline) { eyebrowEl.textContent = config.tagline; }

    var heroBg = document.getElementById("hero-bg");
    if (heroBg && config.heroImage) {
      heroBg.style.setProperty("--hero-bg-image", 'url("' + config.heroImage + '")');
    }

    if (names.first && names.second) {
      document.title = names.first + " & " + names.second + " Ã¢â‚¬â€ Wedding Invitation";
      var metaDesc = utils.$('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Join us as we celebrate the wedding of " + names.first + " & " + names.second +
          ", " + utils.formatLongDate(config.date) + " at " + (config.venue || "") + ".");
      }
    }
  }

  var NAV_ITEMS = [
    { id: "story", label: "Ã™â€šÃ˜ÂµÃ˜ÂªÃ™â€ Ã˜Â§", flag: "storyEnabled" },
    { id: "location", label: "Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â­Ã˜ÂªÃ™ÂÃ˜Â§Ã™â€ž", flag: "locationEnabled" },
    { id: "guidelines", label: "Ã™â€¦Ã˜Â¹Ã™â€žÃ™Ë†Ã™â€¦Ã˜Â§Ã˜Âª Ã˜ÂªÃ™â€¡Ã™â€¦Ã™Æ’", flag: "guidelinesEnabled" },
    { id: "gallery", label: "Ã™â€¦Ã˜Â¹Ã˜Â±Ã˜Â¶ Ã˜Â§Ã™â€žÃ˜ÂµÃ™Ë†Ã˜Â±", flag: "galleryEnabled" },
    { id: "rsvp", label: "Ã˜ÂªÃ˜Â£Ã™Æ’Ã™Å Ã˜Â¯ Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â¶Ã™Ë†Ã˜Â±", flag: "rsvpEnabled" }
  ];

  function buildNav(config) {
    var navLinks = document.getElementById("nav-links");
    var drawerLinks = document.getElementById("drawer-links");
    if (!navLinks || !drawerLinks) { return; }

    NAV_ITEMS.filter(function (item) { return config[item.flag] !== false; })
      .forEach(function (item) {
        var a1 = document.createElement("a");
        a1.href = "#" + item.id;
        a1.textContent = item.label;
        navLinks.appendChild(a1);

        var a2 = document.createElement("a");
        a2.href = "#" + item.id;
        a2.textContent = item.label;
        drawerLinks.appendChild(a2);
      });
  }

  function renderTimeline(config) {
    var container = document.getElementById("timeline");
    if (!container || !config.story || !config.story.length) { return; }

    config.story.forEach(function (item, i) {
      var el = document.createElement("article");
      el.className = "timeline-item";
      el.setAttribute("data-reveal", i % 2 === 0 ? "fade-right" : "fade-left");

      var dot = document.createElement("div");
      dot.className = "timeline-dot";
      dot.innerHTML = icon(item.icon || "heart");
      el.appendChild(dot);

      var dateEl = document.createElement("span");
      dateEl.className = "timeline-date";
      dateEl.textContent = item.date || "";
      el.appendChild(dateEl);

      var titleEl = document.createElement("h3");
      titleEl.className = "timeline-title";
      titleEl.textContent = item.title || "";
      el.appendChild(titleEl);

      var descEl = document.createElement("p");
      descEl.className = "timeline-desc";
      descEl.textContent = item.description || "";
      el.appendChild(descEl);

      if (item.image) {
        var wrap = document.createElement("div");
        wrap.className = "timeline-image";
        var img = document.createElement("img");
        img.src = item.image;
        img.alt = item.title ? item.title : "";
        img.loading = "lazy";
        wrap.appendChild(img);
        el.appendChild(wrap);
      }

      container.appendChild(el);
    });
  }

  function renderGuidelines(config) {
    var container = document.getElementById("guidelines-grid");
    if (!container || !config.guidelines || !config.guidelines.length) { return; }

    config.guidelines.forEach(function (item, i) {
      var card = document.createElement("div");
      card.className = "guideline-card";
      card.setAttribute("data-reveal", "fade-up");
      card.style.setProperty("--reveal-delay", (i % 3) * 90 + "ms");

      var iconWrap = document.createElement("div");
      iconWrap.className = "guideline-icon";
      iconWrap.innerHTML = icon(item.icon || "heart");
      card.appendChild(iconWrap);

      var h3 = document.createElement("h3");
      h3.textContent = item.title || "";
      card.appendChild(h3);

      var p = document.createElement("p");
      p.textContent = item.description || "";
      card.appendChild(p);

      container.appendChild(card);
    });
  }

  function renderLocation(config) {
    var nameEl = document.getElementById("venue-name");
    if (nameEl) { nameEl.textContent = config.venue || ""; }

    var addrEl = document.getElementById("venue-address");
    if (addrEl) { addrEl.textContent = config.address || ""; }

    var dtEl = document.getElementById("location-datetime");
    if (dtEl) { dtEl.textContent = utils.formatLongDate(config.date) + "  Ã‚Â·  " + utils.formatTime(config.date); }

    var mapsLinkEl = document.getElementById("maps-link");
    if (mapsLinkEl && config.mapsLink) { mapsLinkEl.href = config.mapsLink; }

    var iframe = document.getElementById("map-embed");
    if (iframe) {
      var embedSrc = config.mapEmbedSrc;
      if (!embedSrc) {
        var q = encodeURIComponent((config.venue || "") + ", " + (config.address || ""));
        embedSrc = "https://www.google.com/maps?q=" + q + "&output=embed";
      }
      iframe.src = embedSrc;
    }
  }

  function renderRsvpDeadline(config) {
    var el = document.getElementById("rsvp-deadline");
    if (!el) { return; }
    var prefix = document.documentElement.lang === 'ar' ? "Ù†Ø±Ø¬Ùˆ Ø§Ù„Ø±Ø¯ Ø¨Ø­Ù„ÙˆÙ„ " : "Kindly respond by ";
    el.textContent = config.rsvpDeadline ? prefix + utils.formatLongDate(config.rsvpDeadline) : "";
  }

  function renderFooter(config) {
    var names = orderedNames(config);
    var namesEl = document.getElementById("footer-names");
    if (namesEl) { namesEl.textContent = (names.first || "") + " & " + (names.second || ""); }

    var dateEl = document.getElementById("footer-date");
    if (dateEl) { dateEl.textContent = utils.formatLongDate(config.date); }

    var yearEl = document.getElementById("footer-year");
    if (yearEl) {
      var d = new Date(config.date);
      yearEl.textContent = isNaN(d.getTime()) ? new Date().getFullYear() : d.getFullYear();
    }

    var socialEl = document.getElementById("footer-social");
    if (socialEl && config.socialLinks) {
      Object.keys(config.socialLinks).forEach(function (key) {
        var url = config.socialLinks[key];
        if (!url) { return; }
        var a = document.createElement("a");
        a.href = url;
        a.target = "_blank";
        a.rel = "noopener noreferrer";
        a.setAttribute("aria-label", key.charAt(0).toUpperCase() + key.slice(1));
        a.innerHTML = icon(key);
        socialEl.appendChild(a);
      });
    }
  }

  window.WS.initRender = function () {
    var config = window.WS.config;
    if (!config) { return; }
    applyTheme(config.colors);
    applyToggles(config);
    renderMonograms(config);
    renderHero(config);
    buildNav(config);
    renderTimeline(config);
    renderGuidelines(config);
    renderLocation(config);
    renderRsvpDeadline(config);
    renderFooter(config);
    if(window.WS.translations && document.documentElement.lang) {
      window.WS.setLanguage(document.documentElement.lang);
    }
  };

  window.addEventListener('languageChanged', function() {
    var config = window.WS.config;
    if (!config) return;
    renderHero(config);
    renderLocation(config);
    renderRsvpDeadline(config);
    renderFooter(config);
  });
})();

/* =========================================================================
   PRELOADER
   Plays the seal-drawing sequence (see components.css), simulates a
   progress bar while real assets load in the background, then hands off
   into the hero's own staggered entrance animation once it's safe to
   reveal the page.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initPreloader = function () {
    var utils = window.WS.utils;
    var preloader = document.getElementById("preloader");
    var fill = document.getElementById("preloader-fill");
    if (!preloader) { return; }

    var reduceMotion = utils.prefersReducedMotion();
    var MIN_MS = reduceMotion ? 300 : 2400;
    var MAX_MS = 6000;
    var start = Date.now();
    var pct = 0;
    var settled = false;

    document.body.classList.add("is-loading");
    preloader.classList.add("is-drawing");

    var tick = setInterval(function () {
      pct += (90 - pct) * 0.06 + 0.3;
      if (pct > 90) { pct = 90; }
      if (fill) { fill.style.width = pct + "%"; }
    }, 90);

    function revealHero() {
      utils.$all(".hero [data-reveal]").forEach(function (el) {
        var delay = el.getAttribute("data-reveal-delay") || "0";
        el.style.setProperty("--reveal-delay", delay + "ms");
        requestAnimationFrame(function () { el.classList.add("is-visible"); });
      });
    }

    function finish() {
      if (settled) { return; }
      settled = true;
      clearInterval(tick);
      if (fill) { fill.style.width = "100%"; }

      var elapsed = Date.now() - start;
      var wait = Math.max(250, MIN_MS - elapsed);

      setTimeout(function () {
        preloader.classList.add("is-hidden");
        preloader.setAttribute("aria-hidden", "true");
        document.body.classList.remove("is-loading");
        revealHero();
      }, wait);
    }

    window.addEventListener("load", finish, { once: true });
    setTimeout(finish, MAX_MS);
  };
})();

/* =========================================================================
   PARTICLES & AMBIENT GLOW
   Purely decorative Ã¢â‚¬â€ soft floating motes in the hero, and quiet radial
   glows behind a couple of sections. Skips the moving particles (but
   keeps the static glows) when the visitor prefers reduced motion.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  function createParticles(container, count) {
    for (var i = 0; i < count; i++) {
      var p = document.createElement("span");
      p.className = "hero-particle";
      var size = 3 + Math.random() * 5;
      var left = Math.random() * 100;
      var dur = 10 + Math.random() * 10;
      var delay = Math.random() * dur;
      var drift = (Math.random() * 60 - 30).toFixed(0) + "px";
      var opacity = (0.3 + Math.random() * 0.4).toFixed(2);

      p.style.left = left + "%";
      p.style.setProperty("--size", size.toFixed(1) + "px");
      p.style.setProperty("--dur", dur.toFixed(1) + "s");
      p.style.setProperty("--delay", delay.toFixed(1) + "s");
      p.style.setProperty("--drift", drift);
      p.style.setProperty("--particle-opacity", opacity);
      container.appendChild(p);
    }
  }

  function addGlowOrb(container) {
    var orb = document.createElement("span");
    orb.className = "glow-orb";
    orb.setAttribute("aria-hidden", "true");
    container.appendChild(orb);
  }

  window.WS.initParticles = function () {
    var utils = window.WS.utils;
    var reduce = utils.prefersReducedMotion();

    var heroParticles = document.getElementById("hero-particles");
    if (heroParticles && !reduce) {
      createParticles(heroParticles, window.innerWidth < 700 ? 14 : 26);
    }

    var hero = utils.$(".hero");
    if (hero) { addGlowOrb(hero); addGlowOrb(hero); }

    var guidelines = document.getElementById("guidelines");
    if (guidelines) { addGlowOrb(guidelines); }

    var rsvp = document.getElementById("rsvp");
    if (rsvp) { addGlowOrb(rsvp); }
  };
})();

/* =========================================================================
   SCROLL EFFECTS
   Reveal-on-scroll (everything except the hero, which the preloader
   already animated in), a subtle hero parallax, and the back-to-top
   button. All scroll listeners are rAF-throttled to stay smooth.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initScrollEffects = function () {
    var utils = window.WS.utils;
    var reduce = utils.prefersReducedMotion();

    /* ---- Reveal on scroll ------------------------------------------------ */
    var targets = utils.$all("[data-reveal]").filter(function (el) {
      return !el.closest(".hero");
    });

    if ("IntersectionObserver" in window && !reduce) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var el = entry.target;
            var delay = el.getAttribute("data-reveal-delay");
            if (delay) { el.style.setProperty("--reveal-delay", delay + "ms"); }
            el.classList.add("is-visible");
            observer.unobserve(el);
          }
        });
      }, { threshold: 0.15, rootMargin: "0px 0px -8% 0px" });

      targets.forEach(function (el) { observer.observe(el); });
    } else {
      targets.forEach(function (el) { el.classList.add("is-visible"); });
    }

    /* ---- Hero parallax ----------------------------------------------------- */
    var heroBg = document.getElementById("hero-bg");
    var hero = utils.$(".hero");
    if (heroBg && hero && !reduce) {
      var onScroll = utils.rafThrottle(function () {
        var rect = hero.getBoundingClientRect();
        if (rect.bottom < 0 || rect.top > window.innerHeight) { return; }
        heroBg.style.transform = "translateY(" + window.scrollY * 0.35 + "px)";
      });
      window.addEventListener("scroll", onScroll, { passive: true });
    }

    /* ---- Back to top ------------------------------------------------------- */
    var backToTop = document.getElementById("back-to-top");
    if (backToTop) {
      var toggleBtt = utils.rafThrottle(function () {
        backToTop.classList.toggle("is-visible", window.scrollY > window.innerHeight * 0.8);
      });
      window.addEventListener("scroll", toggleBtt, { passive: true });
      backToTop.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
      });
    }
  };
})();

/* =========================================================================
   COUNTDOWN
   Reads the wedding date from config and ticks down. Each number flip
   uses a brief CSS class to trigger the rotateX animation in animations.css.
   Cleans itself up on the wedding day with a celebration message.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initCountdown = function () {
    var config = window.WS.config;
    if (!config || config.countdown === false) { return; }

    var target = new Date(config.date);
    if (isNaN(target.getTime())) { return; }

    var elDays  = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins  = document.getElementById("cd-mins");
    var elSecs  = document.getElementById("cd-secs");
    var arrived = document.getElementById("countdown-arrived");

    if (!elDays) { return; }

    // Previous values Ã¢â‚¬â€ only animate a digit when it actually changes.
    var prev = { days: null, hours: null, mins: null, secs: null };

    function flip(el, value) {
      var str = window.WS.utils.pad2(value);
      if (el.textContent === str) { return; }
      el.textContent = str;
      el.classList.remove("is-flipping");
      void el.offsetWidth; // force reflow so the animation re-triggers
      el.classList.add("is-flipping");
    }

    function tick() {
      var now  = Date.now();
      var diff = target.getTime() - now;

      if (diff <= 0) {
        // Wedding day has arrived
        clearInterval(intervalId);
        [elDays, elHours, elMins, elSecs].forEach(function (el) {
          if (el) { el.textContent = "00"; }
        });
        if (arrived) { arrived.hidden = false; }
        var section = document.getElementById("countdown-section");
        if (section) {
          var cd = section.querySelector(".countdown");
          if (cd) { cd.hidden = true; }
        }
        return;
      }

      var days  = Math.floor(diff / 86400000);
      var hours = Math.floor((diff % 86400000) / 3600000);
      var mins  = Math.floor((diff % 3600000)  / 60000);
      var secs  = Math.floor((diff % 60000)    / 1000);

      flip(elDays,  days);
      flip(elHours, hours);
      flip(elMins,  mins);
      flip(elSecs,  secs);
    }

    tick();
    var intervalId = setInterval(tick, 1000);
  };
})();

/* =========================================================================
   MUSIC PLAYER
   Floating bottom-left widget. The audio element never auto-plays Ã¢â‚¬â€
   browsers block it. Instead, on the first deliberate user gesture
   anywhere on the page we attempt to play, which passes the browser's
   "user activation" requirement without being annoying.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initMusicPlayer = function () {
    var config = window.WS.config;
    if (!config || config.musicEnabled === false) { return; }
    if (!config.backgroundMusic) { return; }

    var player   = document.getElementById("music-player");
    var audio    = document.getElementById("bg-audio");
    var toggle   = document.getElementById("music-toggle");
    var progress = document.getElementById("music-progress");
    var volume   = document.getElementById("music-volume");
    var titleEl  = document.getElementById("music-title");
    var panel    = document.getElementById("music-panel");

    if (!player || !audio || !toggle) { return; }

    audio.src = config.backgroundMusic;
    audio.loop = true;
    audio.volume = 0.45;
    if (titleEl) { titleEl.textContent = config.musicTitle || "Background Music"; }
    if (volume)  { volume.value = 45; }

    /* ---- State --------------------------------------------------------------- */
    var isPlaying = false;
    var isPanelOpen = false;
    var firstGestureFired = false;

    function setPlaying(playing) {
      isPlaying = playing;
      player.classList.toggle("is-playing", playing);
      toggle.setAttribute("aria-label", playing ? "Pause background music" : "Play background music");
    }

    /* ---- Play / pause ------------------------------------------------------- */
    function doPlay() {
      audio.play().then(function () {
        setPlaying(true);
      }).catch(function () {
        setPlaying(false);
      });
    }

    function doPause() {
      audio.pause();
      setPlaying(false);
    }

    toggle.addEventListener("click", function () {
      if (isPlaying) {
        doPause();
      } else {
        doPlay();
        openPanel();
      }
    });

    /* ---- Panel expand / collapse -------------------------------------------- */
    function openPanel() {
      if (isPanelOpen) { return; }
      isPanelOpen = true;
      player.classList.add("is-expanded");
    }

    function closePanel() {
      isPanelOpen = false;
      player.classList.remove("is-expanded");
    }

    var panelCloseTimer;
    toggle.addEventListener("mouseenter", function () {
      clearTimeout(panelCloseTimer);
      openPanel();
    });
    player.addEventListener("mouseleave", function () {
      if (isPlaying) { return; }
      panelCloseTimer = setTimeout(closePanel, 1200);
    });

    /* ---- Progress bar ------------------------------------------------------- */
    if (progress) {
      audio.addEventListener("timeupdate", function () {
        if (!audio.duration || isNaN(audio.duration)) { return; }
        progress.value = (audio.currentTime / audio.duration) * 100;
      });

      progress.addEventListener("input", function () {
        if (!audio.duration) { return; }
        audio.currentTime = (parseFloat(progress.value) / 100) * audio.duration;
      });
    }

    /* ---- Volume ------------------------------------------------------------- */
    if (volume) {
      volume.addEventListener("input", function () {
        audio.volume = parseFloat(volume.value) / 100;
      });
    }

    /* ---- Auto-play on first gesture (satisfies browser policy) -------------- */
    function onFirstGesture() {
      if (firstGestureFired) { return; }
      firstGestureFired = true;
      document.removeEventListener("click",     onFirstGesture);
      document.removeEventListener("touchstart", onFirstGesture);
      document.removeEventListener("keydown",   onFirstGesture);
      // Small delay so the click that just dismissed the preloader isn't
      // the one that fires (jarring to start music mid-preloader-fade).
      setTimeout(function () {
        if (!isPlaying) { doPlay(); }
      }, 900);
    }

    document.addEventListener("click",     onFirstGesture, { once: false });
    document.addEventListener("touchstart", onFirstGesture, { once: false, passive: true });
    document.addEventListener("keydown",   onFirstGesture, { once: false });

    /* ---- Keyboard: Space to toggle when player is focused ------------------- */
    toggle.addEventListener("keydown", function (e) {
      if (e.key === " " || e.key === "Enter") {
        e.preventDefault();
        toggle.click();
      }
    });

    audio.addEventListener("ended", function () { setPlaying(false); });
  };
})();

/* =========================================================================
   GALLERY
   Masonry grid populated from config.gallery. Each image lazy-loads via
   IntersectionObserver (falls back to eager for browsers without it).
   The full-screen lightbox supports keyboard navigation (Ã¢â€ Â/Ã¢â€ â€™/Esc) and
   a mobile swipe gesture recognizer (no library needed).
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initGallery = function () {
    var config = window.WS.config;
    var utils  = window.WS.utils;
    if (!config || config.galleryEnabled === false) { return; }
    if (!config.gallery || !config.gallery.length) { return; }

    var grid = document.getElementById("gallery-grid");
    if (!grid) { return; }

    var items = config.gallery;
    var current = 0;

    /* ---- Build grid --------------------------------------------------------- */
    items.forEach(function (item, i) {
      var wrap = document.createElement("div");
      wrap.className = "gallery-item";
      wrap.setAttribute("tabindex", "0");
      wrap.setAttribute("role", "button");
      wrap.setAttribute("aria-label", "View photo: " + (item.alt || item.caption || ""));
      wrap.setAttribute("data-reveal", "fade-up");
      wrap.style.setProperty("--reveal-delay", Math.floor(i % 3) * 80 + "ms");

      var img = document.createElement("img");
      img.alt = item.alt || item.caption || "";
      img.setAttribute("data-src", item.src);
      img.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1 1'/%3E";

      var overlay = document.createElement("div");
      overlay.className = "gallery-overlay";
      if (item.caption) {
        var cap = document.createElement("span");
        cap.textContent = item.caption;
        overlay.appendChild(cap);
      }

      wrap.appendChild(img);
      wrap.appendChild(overlay);
      grid.appendChild(wrap);

      wrap.addEventListener("click", function () { openLightbox(i); });
      wrap.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openLightbox(i); }
      });
    });

    /* ---- Lazy load ---------------------------------------------------------- */
    var images = utils.$all("img[data-src]", grid);

    function loadImage(img) {
      var src = img.getAttribute("data-src");
      if (!src) { return; }
      img.src = src;
      img.addEventListener("load",  function () { img.classList.add("is-loaded"); }, { once: true });
      img.addEventListener("error", function () { img.classList.add("is-loaded"); }, { once: true });
    }

    if ("IntersectionObserver" in window) {
      var io = new IntersectionObserver(function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) { loadImage(e.target); io.unobserve(e.target); }
        });
      }, { rootMargin: "200px 0px" });
      images.forEach(function (img) { io.observe(img); });
    } else {
      images.forEach(loadImage);
    }

    /* ---- Lightbox ----------------------------------------------------------- */
    var lightbox   = document.getElementById("lightbox");
    var lbImg      = document.getElementById("lightbox-img");
    var lbCaption  = document.getElementById("lightbox-caption");
    var lbClose    = document.getElementById("lightbox-close");
    var lbPrev     = document.getElementById("lightbox-prev");
    var lbNext     = document.getElementById("lightbox-next");
    var lbAnnounce = document.getElementById("sr-live");
    if (!lightbox || !lbImg) { return; }

    function openLightbox(index) {
      current = index;
      showSlide(current);
      lightbox.classList.add("is-open");
      lightbox.removeAttribute("aria-hidden");
      document.body.style.overflow = "hidden";
      if (lbClose) { lbClose.focus(); }
    }

    function closeLightbox() {
      lightbox.classList.remove("is-open");
      lightbox.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
      var focusBack = grid.querySelectorAll(".gallery-item")[current];
      if (focusBack) { focusBack.focus(); }
    }

    function showSlide(index) {
      current = (index + items.length) % items.length;
      var item = items[current];
      lbImg.style.opacity = "0";
      setTimeout(function () {
        lbImg.src = item.src;
        lbImg.alt = item.alt || item.caption || "";
        if (lbCaption) { lbCaption.textContent = item.caption || ""; }
        lbImg.onload = function () { lbImg.style.opacity = "1"; };
        if (lbAnnounce) {
          lbAnnounce.textContent = (item.caption || "Photo " + (current + 1)) +
            " (" + (current + 1) + " of " + items.length + ")";
        }
      }, 120);
    }

    if (lbClose) { lbClose.addEventListener("click", closeLightbox); }
    if (lbPrev)  { lbPrev.addEventListener("click",  function () { showSlide(current - 1); }); }
    if (lbNext)  { lbNext.addEventListener("click",  function () { showSlide(current + 1); }); }

    lightbox.addEventListener("click", function (e) {
      if (e.target === lightbox) { closeLightbox(); }
    });

    document.addEventListener("keydown", function (e) {
      if (!lightbox.classList.contains("is-open")) { return; }
      if (e.key === "Escape")      { closeLightbox(); }
      if (e.key === "ArrowLeft")   { showSlide(current - 1); }
      if (e.key === "ArrowRight")  { showSlide(current + 1); }
    });

    /* ---- Mobile swipe ------------------------------------------------------- */
    var touchStartX = 0;
    var touchStartY = 0;
    var swipeThreshold = 48;

    lightbox.addEventListener("touchstart", function (e) {
      touchStartX = e.changedTouches[0].clientX;
      touchStartY = e.changedTouches[0].clientY;
    }, { passive: true });

    lightbox.addEventListener("touchend", function (e) {
      var dx = e.changedTouches[0].clientX - touchStartX;
      var dy = e.changedTouches[0].clientY - touchStartY;
      if (Math.abs(dx) < swipeThreshold) { return; }
      if (Math.abs(dy) > Math.abs(dx))   { return; }   // vertical Ã¢â‚¬â€ ignore
      if (dx < 0) { showSlide(current + 1); } else { showSlide(current - 1); }
    }, { passive: true });
  };
})();

/* =========================================================================
   NAVIGATION
   Sticky header: transparent over the hero, glass/opaque after. Mobile
   drawer with backdrop scrim. Scroll-spy that highlights the current
   section in the desktop nav. Smooth anchor scrolling for older Safari.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initNavigation = function () {
    var utils   = window.WS.utils;
    var nav     = document.getElementById("site-nav");
    var toggle  = document.getElementById("nav-toggle");
    var drawer  = document.getElementById("nav-drawer");
    var scrim   = document.getElementById("nav-scrim");
    var scrollEl = document.getElementById("scroll-indicator");

    /* ---- Sticky header transition ------------------------------------------ */
    if (nav) {
      var onScroll = utils.rafThrottle(function () {
        nav.classList.toggle("is-scrolled", window.scrollY > 40);
      });
      window.addEventListener("scroll", onScroll, { passive: true });
      onScroll();
    }

    /* ---- Mobile drawer ----------------------------------------------------- */
    function openDrawer() {
      if (!drawer) { return; }
      drawer.classList.add("is-open");
      scrim.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      document.body.style.overflow = "hidden";
      var firstLink = utils.$("a", drawer);
      if (firstLink) { firstLink.focus(); }
    }

    function closeDrawer() {
      if (!drawer) { return; }
      drawer.classList.remove("is-open");
      scrim.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      document.body.style.overflow = "";
      if (toggle) { toggle.focus(); }
    }

    if (toggle) { toggle.addEventListener("click", function () {
      drawer.classList.contains("is-open") ? closeDrawer() : openDrawer();
    }); }
    if (scrim) { scrim.addEventListener("click", closeDrawer); }

    // Close drawer on any drawer link click
    utils.$all("a", drawer).forEach(function (a) {
      a.addEventListener("click", closeDrawer);
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && drawer && drawer.classList.contains("is-open")) {
        closeDrawer();
      }
    });

    /* ---- Smooth anchor scrolling (polyfills Safari < 15.4) ----------------- */
    var reduce = utils.prefersReducedMotion();
    document.addEventListener("click", function (e) {
      var anchor = e.target.closest("a[href^='#']");
      if (!anchor) { return; }
      var hash = anchor.getAttribute("href");
      if (hash === "#") { return; }
      var target = document.querySelector(hash);
      if (!target) { return; }
      e.preventDefault();
      closeDrawer();
      var top = target.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
      setTimeout(function () {
        history.replaceState(null, "", hash);
        target.focus({ preventScroll: true });
      }, reduce ? 0 : 700);
    });

    /* ---- Scroll-spy --------------------------------------------------------- */
    var sections = utils.$all("main > section[id]").filter(function (s) { return !s.hidden; });
    var navLinks = utils.$all("a[href^='#']", document.getElementById("nav-links") || document);

    var spyObserver;
    if ("IntersectionObserver" in window && navLinks.length) {
      spyObserver = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            var id = entry.target.id;
            navLinks.forEach(function (link) {
              link.classList.toggle("is-active", link.getAttribute("href") === "#" + id);
            });
          }
        });
      }, { rootMargin: "-30% 0px -60% 0px" });
      sections.forEach(function (s) { spyObserver.observe(s); });
    }

    /* ---- Hero scroll indicator --------------------------------------------- */
    if (scrollEl) {
      scrollEl.addEventListener("click", function () {
        var first = sections[1] || sections[0];
        if (first) {
          var top = first.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: top, behavior: reduce ? "auto" : "smooth" });
        }
      });
      // Fade it out once the user starts scrolling
      var hideSI = utils.rafThrottle(function () {
        scrollEl.style.opacity = Math.max(0, 1 - window.scrollY / 200).toString();
      });
      window.addEventListener("scroll", hideSI, { passive: true });
    }
  };
})();

/* =========================================================================
   MAIN Ã¢â‚¬â€ Orchestrator
   Calls every module's init function in dependency order once the DOM
   is ready. Each call is wrapped in utils.safeRun so a bug in one module
   can never crash the rest of the site.

   Load order (per <script defer> in the HTML):
     config Ã¢â€ â€™ utils Ã¢â€ â€™ icons Ã¢â€ â€™ render Ã¢â€ â€™ preloader Ã¢â€ â€™ particles Ã¢â€ â€™
     scrollEffects Ã¢â€ â€™ countdown Ã¢â€ â€™ musicPlayer Ã¢â€ â€™ gallery Ã¢â€ â€™ rsvp Ã¢â€ â€™
     navigation Ã¢â€ â€™ main  (this file, last)
   ========================================================================= */
(function () {
  var WS = window.WS;

  function init() {
    // 1. Apply config, populate DOM
    WS.utils.safeRun("render",         WS.initRender);

    // 2. Start preloader sequence (manages its own timing / handoff)
    WS.utils.safeRun("preloader",      WS.initPreloader);

    // 3. Decorative: particles & ambient glow orbs
    WS.utils.safeRun("particles",      WS.initParticles);

    // 4. Scroll-driven effects (reveal, parallax, back-to-top)
    WS.utils.safeRun("scrollEffects",  WS.initScrollEffects);

    // 5. Live countdown timer
    WS.utils.safeRun("countdown",      WS.initCountdown);

    // 6. Floating music player
    WS.utils.safeRun("musicPlayer",    WS.initMusicPlayer);

    // 7. Masonry gallery + lightbox
    WS.utils.safeRun("gallery",        WS.initGallery);

    // 8. RSVP form
    WS.utils.safeRun("rsvp",           WS.initRsvp);

    // 9. Navigation (last Ã¢â‚¬â€ relies on sections being fully rendered)
    WS.utils.safeRun("navigation",     WS.initNavigation);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// Dynamic Guest Messages Logic
(function() {

  // ---- Pre-fill 30 guest RSVP entries on first load -------------------------
  var PREFILLED_MESSAGES = [
    { name: "Ã˜Â£Ã˜Â­Ã™â€¦Ã˜Â¯ Ã™Ë†Ã™â€¦Ã™â€ Ã™â€° Ã˜Â³Ã™â€žÃ˜Â§Ã™â€¦Ã˜Â©",        text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™Å Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â³Ã™â€¦Ã™Å Ã™â€  Ã™Ë†Ã™Å Ã˜Â§ Ã™Æ’Ã˜Â±Ã™Å Ã™â€¦! Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã™Æ’Ã™â€¦Ã™â€žÃ™Æ’Ã™â€¦ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â®Ã™Å Ã˜Â± Ã™Ë†Ã™Å Ã˜Â±Ã˜Â²Ã™â€šÃ™Æ’Ã™â€¦ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹.", date: "15/10/2026" },
    { name: "Ã™â€¦Ã˜Â­Ã™â€¦Ã˜Â¯ Ã™Ë†Ã˜Â±Ã™Å Ã™â€¦ Ã˜Â­Ã˜Â³Ã™â€ ",           text: "Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜ÂªÃ™â€¡Ã™â€ Ã˜Â¦Ã˜Â© Ã™â€žÃ˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â¹Ã˜Â±Ã™Ë†Ã˜Â³Ã™Å Ã™â€ ! Ã™Æ’Ã™â€ž Ã˜Â³Ã™â€ Ã˜Â© Ã™Ë†Ã˜Â£Ã™â€ Ã˜ÂªÃ™â€¦ Ã˜Â¨Ã˜Â£Ã™â€žÃ™Â Ã˜Â®Ã™Å Ã˜Â± Ã™Ë†Ã˜Â¹Ã˜Â§Ã™ÂÃ™Å Ã˜Â©.", date: "16/10/2026" },
    { name: "Ã˜Â¹Ã™â€¦Ã˜Â± Ã™Ë†Ã™ÂÃ˜Â§Ã˜Â·Ã™â€¦Ã˜Â© Ã˜Â¹Ã™â€žÃ™Å ",          text: "Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Æ’ Ã™ÂÃ™Å Ã™Æ’Ã™â€¦ Ã™Ë†Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â­Ã™Å Ã˜Â§Ã˜ÂªÃ™Æ’Ã™â€¦ Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€ Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ™ÂÃ˜Â±Ã˜Â­ Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â©. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’!", date: "17/10/2026" },
    { name: "Ã™Å Ã™Ë†Ã˜Â³Ã™Â Ã™Ë†Ã™â€¡Ã™â€ Ã˜Â§ Ã˜Â¥Ã˜Â¨Ã˜Â±Ã˜Â§Ã™â€¡Ã™Å Ã™â€¦",       text: "Ã™â€ Ã˜ÂªÃ™â€¦Ã™â€ Ã™â€° Ã™â€žÃ™Æ’Ã™â€¦ Ã˜Â­Ã™Å Ã˜Â§Ã˜Â© Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€ Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â¨ Ã™Ë†Ã˜Â§Ã™â€žÃ˜ÂªÃ™ÂÃ˜Â§Ã™â€¡Ã™â€¦ Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â©. Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’!", date: "18/10/2026" },
    { name: "Ã™â€¦Ã˜ÂµÃ˜Â·Ã™ÂÃ™â€° Ã™Ë†Ã˜Â´Ã™Å Ã™â€¦Ã˜Â§Ã˜Â¡ Ã˜Â®Ã˜Â§Ã™â€žÃ˜Â¯",       text: "Ã™Å Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â³Ã™â€¦Ã™Å Ã™â€  Ã™Ë†Ã™Å Ã˜Â§ Ã™Æ’Ã˜Â±Ã™Å Ã™â€¦Ã˜Å’ Ã˜Â§Ã™â€ Ã˜ÂªÃ™â€¦ Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â²Ã™Ë†Ã˜Â¬Ã™Å Ã™â€  Ã˜Â¹Ã˜Â±Ã™ÂÃ™â€ Ã˜Â§Ã™â€¡Ã™â€¦. Ã™Æ’Ã™â€ž Ã˜Â§Ã™â€žÃ˜ÂªÃ™Ë†Ã™ÂÃ™Å Ã™â€š Ã™Ë†Ã˜Â§Ã™â€žÃ™â€ Ã˜Â¬Ã˜Â§Ã˜Â­!", date: "19/10/2026" },
    { name: "Ã˜Â®Ã˜Â§Ã™â€žÃ˜Â¯ Ã™Ë†Ã˜Â£Ã™â€¦Ã™Å Ã˜Â±Ã˜Â© Ã˜Â£Ã˜Â­Ã™â€¦Ã˜Â¯",        text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬! Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â®Ã™â€žÃ™Å Ã™Æ’Ã™â€¦ Ã™â€žÃ˜Â¨Ã˜Â¹Ã˜Â¶ Ã™Ë†Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â¨Ã™Å Ã˜ÂªÃ™Æ’Ã™â€¦ Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€  Ã˜Â­Ã˜Â¨ Ã™Ë†Ã˜Â¨Ã˜Â±Ã™Æ’Ã˜Â©.", date: "20/10/2026" },
    { name: "Ã˜Â·Ã˜Â§Ã˜Â±Ã™â€š Ã™Ë†Ã˜Â¯Ã˜Â§Ã™â€žÃ™Å Ã˜Â§ Ã˜Â¹Ã˜Â¨Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€žÃ™â€¡",    text: "Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã™â€¦Ã˜Â§Ã™â€ Ã™Å  Ã™â€žÃ™Æ’Ã™â€¦ Ã™ÂÃ™Å  Ã˜Â¨Ã˜Â¯Ã˜Â§Ã™Å Ã˜Â© Ã™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â·Ã˜Â±Ã™Å Ã™â€š Ã˜Â§Ã™â€žÃ˜Â¬Ã™â€¦Ã™Å Ã™â€ž. Ã™Æ’Ã™â€ž Ã˜Â³Ã™â€ Ã˜Â© Ã™Ë†Ã˜Â£Ã™â€ Ã˜ÂªÃ™â€¦ Ã˜Â¨Ã˜Â£Ã™â€žÃ™Â Ã˜Â®Ã™Å Ã˜Â±.", date: "21/10/2026" },
    { name: "Ã™â€¡Ã˜Â§Ã™â€ Ã™Å  Ã™Ë†Ã˜Â³Ã˜Â§Ã™â€¦Ã™Å Ã˜Â© Ã˜Â­Ã˜Â¨Ã™Å Ã˜Â¨",        text: "Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’! Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬Ã™Æ’Ã™â€¦ Ã˜Â³Ã˜Â¹Ã™Å Ã˜Â¯Ã˜Â§Ã™â€¹ Ã™Ë†Ã™â€¦Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Æ’Ã˜Â§Ã™â€¹ Ã™Ë†Ã™Å Ã˜Â±Ã˜Â²Ã™â€šÃ™Æ’Ã™â€¦ Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â°Ã˜Â±Ã™Å Ã˜Â© Ã˜Â§Ã™â€žÃ˜ÂµÃ˜Â§Ã™â€žÃ˜Â­Ã˜Â©.", date: "22/10/2026" },
    { name: "Ã˜Â±Ã˜Â§Ã™â€¦Ã™Å  Ã™Ë†Ã˜Â±Ã˜Â§Ã™â€ Ã™Å Ã˜Â§ Ã˜ÂµÃ˜Â§Ã˜Â¯Ã™â€š",        text: "Ã™Å Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â³Ã™â€¦Ã™Å Ã™â€ Ã˜Å’ Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â³Ã˜Â¹Ã˜Â¯Ã™Æ’ Ã™Æ’Ã™â€¦Ã˜Â§ Ã˜Â£Ã˜Â³Ã˜Â¹Ã˜Â¯Ã˜ÂªÃ™Å Ã™â€ Ã˜Â§ Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â«Ã™â€ Ã™Å Ã™â€ !", date: "23/10/2026" },
    { name: "Ã™Ë†Ã˜Â§Ã˜Â¦Ã™â€ž Ã™Ë†Ã™â€¦Ã™â€ Ã™â€° Ã™ÂÃ˜Â¤Ã˜Â§Ã˜Â¯",          text: "Ã˜ÂªÃ™â€¡Ã˜Â§Ã™â€ Ã™Å Ã™â€ Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã˜Â±Ã˜Â© Ã™â€žÃ˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â¹Ã˜Â±Ã™Ë†Ã˜Â³Ã™Å Ã™â€ ! Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã™â€¦Ã˜Â§ Ã™â€ Ã™ÂÃ˜Â±Ã˜Â­ Ã˜Â¨Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã˜Â¯Ã™Æ’Ã™â€¦.", date: "24/10/2026" },
    { name: "Ã˜Â¨Ã˜Â´Ã™Å Ã˜Â± Ã™Ë†Ã™â€ Ã™â€¡Ã™â€° Ã˜Â¹Ã˜Â§Ã˜Â¯Ã™â€ž",          text: "Ã˜Â£Ã˜Â³Ã˜Â¹Ã˜Â¯ Ã˜Â§Ã™â€žÃ™â€žÃ™â€¡ Ã˜Â£Ã™Ë†Ã™â€šÃ˜Â§Ã˜ÂªÃ™Æ’Ã™â€¦ Ã™Ë†Ã™Ë†Ã™ÂÃ™â€šÃ™Æ’Ã™â€¦ Ã™â€žÃ™â€¦Ã˜Â§ Ã™Å Ã˜Â­Ã˜Â¨Ã™â€¡ Ã™Ë†Ã™Å Ã˜Â±Ã˜Â¶Ã˜Â§Ã™â€¡. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬!", date: "25/10/2026" },
    { name: "Ã˜Â²Ã™Å Ã˜Â§Ã˜Â¯ Ã™Ë†Ã˜Â±Ã™Ë†Ã˜Â§Ã™â€  Ã™â€¦Ã˜ÂµÃ˜Â·Ã™ÂÃ™â€°",        text: "Ã˜Â£Ã™â€žÃ™Â Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’! Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã™Æ’Ã™â€¦Ã™â€ž Ã˜Â¹Ã™â€žÃ™Å Ã™Æ’Ã™â€¦ Ã™â€ Ã˜Â¹Ã™â€¦Ã˜ÂªÃ™â€¡ Ã™Ë†Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â­Ã™Å Ã˜Â§Ã˜ÂªÃ™Æ’Ã™â€¦ Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹ Ã™ÂÃ™Å  Ã˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â©.", date: "26/10/2026" },
    { name: "Ã˜Â¹Ã˜ÂµÃ˜Â§Ã™â€¦ Ã™Ë†Ã˜Â³Ã™â€¡Ã˜Â± Ã˜Â¹Ã™â€¦Ã˜Â±",           text: "Ã™Å Ã˜Â§ Ã™Æ’Ã˜Â±Ã™Å Ã™â€¦Ã˜Å’ Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â¥Ã™â€ Ã˜Â³Ã˜Â§Ã™â€  Ã™Å Ã˜Â³Ã˜ÂªÃ˜Â§Ã™â€¡Ã™â€ž Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜Â­Ã™Å Ã˜Â§Ã˜Â©. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â§Ã˜Â«Ã™â€ Ã™Å Ã™â€ !", date: "27/10/2026" },
    { name: "Ã™â€ Ã˜Â¨Ã™Å Ã™â€ž Ã™Ë†Ã™â€¡Ã˜Â§Ã™â€žÃ˜Â© Ã™Æ’Ã™â€¦Ã˜Â§Ã™â€ž",         text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’! Ã™Å Ã˜Â§Ã˜Â±Ã˜Â¨ Ã˜ÂªÃ˜Â¹Ã™Å Ã˜Â´Ã™Ë†Ã˜Â§ Ã™ÂÃ™Å  Ã™â€¡Ã™â€ Ã˜Â§ Ã™Ë†Ã™â€¦Ã˜Â­Ã˜Â¨Ã˜Â© Ã™Ë†Ã˜ÂªÃ˜Â±Ã˜Â¨Ã™Ë†Ã˜Â§ Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã˜Â¯Ã™Æ’Ã™â€¦ Ã™ÂÃ™Å  Ã˜Â£Ã˜Â­Ã˜Â³Ã™â€  Ã˜ÂªÃ˜Â±Ã˜Â¨Ã™Å Ã˜Â©.", date: "28/10/2026" },
    { name: "Ã™â€¦Ã˜Â§Ã™â€¡Ã˜Â± Ã™Ë†Ã˜Â¹Ã˜Â¨Ã™Å Ã˜Â± Ã˜Â³Ã™â€žÃ™Å Ã™â€¦",         text: "Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¬Ã™â€¦Ã˜Â¹Ã™Æ’Ã™â€¦ Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â®Ã™Å Ã˜Â± Ã™Ë†Ã™Å Ã˜Â¯Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â© Ã˜Â¨Ã™Å Ã™â€ Ã™Æ’Ã™â€¦. Ã™Æ’Ã™â€ž Ã˜Â§Ã™â€žÃ˜ÂªÃ™â€¡Ã˜Â§Ã™â€ Ã™Å !", date: "29/10/2026" },
    { name: "Ã™ÂÃ˜Â§Ã˜Â¯Ã™Å  Ã™Ë†Ã™â€¦Ã™Å Ã˜Â§Ã˜Â± Ã˜Â±Ã˜Â¶Ã˜Â§",          text: "Ã˜ÂªÃ™â€¡Ã™â€ Ã˜Â¦Ã˜Â© Ã™â€šÃ™â€žÃ˜Â¨Ã™Å Ã˜Â© Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§ Ã™Å Ã˜Â§ Ã˜ÂºÃ˜Â§Ã™â€žÃ™Å Ã™Å½Ã™Å Ã™â€™Ã™â€ . Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â³Ã˜Â¹Ã˜Â¯Ã™Æ’Ã™â€¦ Ã™Ë†Ã™Å Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Æ’ Ã™ÂÃ™Å  Ã˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬Ã™Æ’Ã™â€¦.", date: "30/10/2026" },
    { name: "Ã˜Â³Ã˜Â§Ã™â€¦Ã™Å  Ã™Ë†Ã˜ÂºÃ˜Â§Ã˜Â¯Ã˜Â© Ã˜Â¬Ã™â€¦Ã™Å Ã™â€ž",         text: "Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã˜ÂªÃ™â€¡Ã˜Â§Ã™â€ Ã™Å Ã™â€ Ã˜Â§ Ã™Ë†Ã˜Â£Ã˜Â­Ã˜Â± Ã˜ÂªÃ˜Â¨Ã˜Â±Ã™Å Ã™Æ’Ã˜Â§Ã˜ÂªÃ™â€ Ã˜Â§. Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã™â€¦Ã˜Â§ Ã™â€ Ã™ÂÃ˜Â±Ã˜Â­ Ã˜Â¨Ã˜Â£Ã™ÂÃ˜Â±Ã˜Â§Ã˜Â­ Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã˜Â¯Ã™Æ’Ã™â€¦!", date: "31/10/2026" },
    { name: "Ã˜Â­Ã˜Â³Ã˜Â§Ã™â€¦ Ã™Ë†Ã˜Â¥Ã˜Â³Ã˜Â±Ã˜Â§Ã˜Â¡ Ã™â€ Ã˜Â§Ã˜ÂµÃ˜Â±",        text: "Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™Å Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â³Ã™â€¦Ã™Å Ã™â€  Ã™Ë†Ã™Å Ã˜Â§ Ã™Æ’Ã˜Â±Ã™Å Ã™â€¦. Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€žÃ™Æ’Ã™â€¦ Ã˜Â³Ã™â€ Ã˜Â¯ Ã™â€žÃ˜Â¨Ã˜Â¹Ã˜Â¶ Ã˜Â·Ã™Ë†Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã˜Â±.", date: "01/11/2026" },
    { name: "Ã˜Â£Ã˜Â´Ã˜Â±Ã™Â Ã™Ë†Ã™â€ Ã™Ë†Ã˜Â± Ã˜Â§Ã™â€žÃ˜Â¯Ã™Å Ã™â€ ",         text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬! Ã˜Â£Ã˜ÂªÃ™â€¦Ã™â€ Ã™â€° Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§ Ã˜Â­Ã™Å Ã˜Â§Ã˜Â© Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€ Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã™Æ’Ã˜Â©.", date: "02/11/2026" },
    { name: "Ã™â€¦Ã˜Â¹Ã˜ÂªÃ˜Â² Ã™Ë†Ã˜Â´Ã˜Â±Ã™Ë†Ã™â€š Ã™â€¦Ã™â€ Ã™Å Ã˜Â±",         text: "Ã™Å Ã˜Â§ Ã™Å Ã˜Â§Ã˜Â³Ã™â€¦Ã™Å Ã™â€  Ã™Ë†Ã™Å Ã˜Â§ Ã™Æ’Ã˜Â±Ã™Å Ã™â€¦Ã˜Å’ Ã˜Â§Ã™â€ Ã˜ÂªÃ™â€¦ Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â­Ã™â€žÃ™â€° Ã˜Â§Ã™â€žÃ™â€ Ã˜Â§Ã˜Â³ Ã™Ë†Ã™â€¦Ã˜Â³Ã˜ÂªÃ˜Â§Ã™â€¡Ã™â€žÃ™Å Ã™â€  Ã˜Â£Ã˜Â­Ã™â€žÃ™â€° Ã˜Â­Ã™Å Ã˜Â§Ã˜Â©. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’!", date: "03/11/2026" },
    { name: "Ã˜ÂªÃ˜Â§Ã™â€¦Ã˜Â± Ã™Ë†Ã˜Â£Ã˜Â³Ã™â€¦Ã˜Â§Ã˜Â¡ Ã˜Â­Ã˜Â¬Ã˜Â§Ã˜Â²Ã™Å ",       text: "Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’! Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã™â€¦Ã˜Â§ Ã™â€ Ã˜Â´Ã™Ë†Ã™ÂÃ™Æ’Ã™â€¦ Ã™â€¦Ã˜Â¹ Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã˜Â¯Ã™Æ’Ã™â€¦ Ã™Ë†Ã˜ÂªÃ™Æ’Ã™Ë†Ã™â€ Ã™Ë†Ã˜Â§ Ã˜Â£Ã˜Â³Ã˜Â¹Ã˜Â¯ Ã˜Â¹Ã™Å Ã™â€žÃ˜Â©!", date: "04/11/2026" },
    { name: "Ã˜Â´Ã˜Â±Ã™Å Ã™Â Ã™Ë†Ã™â€žÃ™â€¦Ã™Å Ã˜Â§Ã˜Â¡ Ã™Ë†Ã™â€¡Ã˜Â¨Ã˜Â©",        text: "Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Æ’ Ã™ÂÃ™Å  Ã™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬ Ã™Ë†Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€žÃ™â€¡ Ã˜Â£Ã˜Â³Ã˜Â§Ã˜Â³ Ã˜Â­Ã™Å Ã˜Â§Ã˜Â© Ã˜Â³Ã˜Â¹Ã™Å Ã˜Â¯Ã˜Â© Ã™Ë†Ã™â€ Ã˜Â§Ã˜Â¬Ã˜Â­Ã˜Â©. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’!", date: "05/11/2026" },
    { name: "Ã˜Â£Ã™â€¦Ã˜Â¬Ã˜Â¯ Ã™Ë†Ã˜Â¯Ã™Å Ã™â€ Ã˜Â§ Ã˜Â±Ã˜Â´Ã˜Â¯Ã™Å ",         text: "Ã˜ÂªÃ™â€¡Ã˜Â§Ã™â€ Ã™Å Ã™â€ Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â­Ã˜Â§Ã˜Â±Ã˜Â© Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§. Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â¨Ã™Å Ã˜ÂªÃ™Æ’Ã™â€¦ Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€  Ã˜Â¨Ã˜Â§Ã™â€žÃ™ÂÃ˜Â±Ã˜Â­ Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â© Ã˜Â¯Ã˜Â§Ã˜Â¦Ã™â€¦Ã˜Â§Ã™â€¹.", date: "06/11/2026" },
    { name: "Ã˜Â¬Ã™â€¦Ã˜Â§Ã™â€ž Ã™Ë†Ã™â€¦Ã˜Â±Ã™Ë†Ã˜Â© Ã˜Â¨Ã˜Â¯Ã˜Â±",          text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’! Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â£Ã™ÂÃ˜Â±Ã˜Â§Ã˜Â­ Ã˜Â§Ã™â€žÃ™Æ’Ã˜Â¨Ã™Å Ã˜Â±Ã˜Â© Ã™Ë†Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã˜Â£Ã™Ë†Ã™â€žÃ˜Â§Ã˜Â¯Ã™Æ’Ã™â€¦.", date: "07/11/2026" },
    { name: "Ã˜Â¹Ã˜Â§Ã˜Â·Ã™Â Ã™Ë†Ã˜Â³Ã˜Â­Ã˜Â± Ã˜Â·Ã™â€¡",            text: "Ã™Å Ã˜Â§Ã˜Â±Ã˜Â¨ Ã™Å Ã™Æ’Ã™â€¦Ã™â€žÃ™Æ’Ã™â€¦ Ã˜Â¹Ã™â€žÃ™â€° Ã˜Â®Ã™Å Ã˜Â± Ã™Ë†Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã˜Â­Ã™Å Ã˜Â§Ã˜ÂªÃ™Æ’Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â´Ã˜ÂªÃ˜Â±Ã™Æ’Ã˜Â© Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€ Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ˜Â¨Ã˜Â±Ã™Æ’Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã˜Â§Ã˜Â¯Ã˜Â©.", date: "08/11/2026" },
    { name: "Ã˜ÂµÃ™â€žÃ˜Â§Ã˜Â­ Ã™Ë†Ã™â€žÃ˜Â¨Ã™â€ Ã™â€° Ã™Å Ã™Ë†Ã˜Â³Ã™Â",         text: "Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™Å Ã˜Â§ Ã˜Â¬Ã™â€¦Ã˜Â§Ã˜Â¹Ã˜Â©! Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¯Ã™Å Ã™â€¦ Ã™ÂÃ˜Â±Ã˜Â­Ã™Æ’Ã™â€¦ Ã™Ë†Ã™Å Ã˜Â¨Ã˜Â§Ã˜Â±Ã™Æ’ Ã™ÂÃ™Å  Ã˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬Ã™Æ’Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â³Ã˜Â¹Ã™Å Ã˜Â¯.", date: "09/11/2026" },
    { name: "Ã˜Â¹Ã™â€žÃ˜Â§Ã˜Â¡ Ã™Ë†Ã˜Â¢Ã™Å Ã˜Â© Ã˜Â±Ã™â€¦Ã˜Â²Ã™Å ",          text: "Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬! Ã˜Â£Ã˜ÂªÃ™â€¦Ã™â€ Ã™â€° Ã™â€¦Ã™â€  Ã˜Â§Ã™â€žÃ™â€šÃ™â€žÃ˜Â¨ Ã˜Â£Ã™â€  Ã˜ÂªÃ™Æ’Ã™Ë†Ã™â€  Ã˜Â­Ã™Å Ã˜Â§Ã˜ÂªÃ™Æ’Ã™â€¦ Ã˜Â£Ã˜Â¬Ã™â€¦Ã™â€ž Ã™â€¦Ã™â€  Ã˜Â£Ã˜Â­Ã™â€žÃ˜Â§Ã™â€¦Ã™Æ’Ã™â€¦.", date: "10/11/2026" },
    { name: "Ã™Ë†Ã™â€žÃ™Å Ã˜Â¯ Ã™Ë†Ã™â€ Ã˜Â§Ã˜Â¯Ã™Å Ã˜Â© Ã˜Â¹Ã˜Â²Ã™Å Ã˜Â²",        text: "Ã˜Â£Ã™â€žÃ™Â Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’ Ã™Ë†Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â³Ã˜Â¹Ã˜Â¯Ã™Æ’Ã™â€¦ Ã™Ë†Ã™Å Ã˜Â¯Ã™Å Ã™â€¦ Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â© Ã™Ë†Ã˜Â§Ã™â€žÃ™Ë†Ã™ÂÃ˜Â§Ã˜Â¡ Ã˜Â¨Ã™Å Ã™â€ Ã™Æ’Ã™â€¦ Ã˜Â·Ã™Ë†Ã™â€ž Ã˜Â§Ã™â€žÃ˜Â¹Ã™â€¦Ã˜Â±.", date: "11/11/2026" },
    { name: "Ã˜Â¥Ã™Å Ã˜Â§Ã˜Â¯ Ã™Ë†Ã˜Â¥Ã™â€žÃ™â€¡Ã˜Â§Ã™â€¦ Ã˜Â²Ã™Æ’Ã™Å ",         text: "Ã˜ÂªÃ™â€¡Ã˜Â§Ã™â€ Ã™Å Ã™â€ Ã˜Â§ Ã˜Â§Ã™â€žÃ™â€šÃ™â€žÃ˜Â¨Ã™Å Ã˜Â© Ã™â€žÃ™Æ’Ã™â€¦Ã˜Â§. Ã˜Â¹Ã™â€šÃ˜Â¨Ã˜Â§Ã™â€ž Ã™â€¦Ã˜Â§ Ã™â€ Ã™ÂÃ˜Â±Ã˜Â­ Ã˜Â¨Ã˜Â£Ã™ÂÃ˜Â±Ã˜Â§Ã˜Â­ Ã˜Â¨Ã™Å Ã˜ÂªÃ™Æ’Ã™â€¦ Ã˜Â§Ã™â€žÃ˜Â¬Ã˜Â¯Ã™Å Ã˜Â¯!", date: "12/11/2026" },
    { name: "Ã™Æ’Ã™â€¦Ã˜Â§Ã™â€ž Ã™Ë†Ã˜Â¹Ã˜Â²Ã™Å Ã˜Â²Ã˜Â© Ã™â€¦Ã™â€ Ã˜ÂµÃ™Ë†Ã˜Â±",       text: "Ã˜Â±Ã˜Â¨Ã™â€ Ã˜Â§ Ã™Å Ã˜Â¬Ã˜Â¹Ã™â€ž Ã™â€¡Ã˜Â°Ã˜Â§ Ã˜Â§Ã™â€žÃ˜Â²Ã™Ë†Ã˜Â§Ã˜Â¬ Ã˜Â¨Ã˜Â¯Ã˜Â§Ã™Å Ã˜Â© Ã˜Â­Ã™Å Ã˜Â§Ã˜Â© Ã˜Â¬Ã™â€¦Ã™Å Ã™â€žÃ˜Â© Ã™â€¦Ã™â€žÃ™Å Ã˜Â§Ã™â€ Ã˜Â© Ã˜Â¨Ã˜Â§Ã™â€žÃ™ÂÃ˜Â±Ã˜Â­ Ã™Ë†Ã˜Â§Ã™â€žÃ™â€¦Ã˜Â­Ã˜Â¨Ã˜Â©. Ã™â€¦Ã˜Â¨Ã˜Â±Ã™Ë†Ã™Æ’!", date: "13/11/2026" }
  ];

  // Seed localStorage only on first visit (don't overwrite real guest entries)
  if (!localStorage.getItem('guestMessagesSeeded')) {
    localStorage.setItem('guestMessages', JSON.stringify(PREFILLED_MESSAGES));
    localStorage.setItem('guestMessagesSeeded', '1');
  }

  // ---- Handle RSVP Form Submission ------------------------------------------
  var rsvpForm = document.getElementById('rsvp-form');
  var rsvpSuccess = document.getElementById('rsvp-success');
  var rsvpNameInput = document.getElementById('rsvp-name');
  var rsvpMessageInput = document.getElementById('rsvp-message');
  var rsvpGuestsInput = document.getElementById('rsvp-guests');
  var rsvpAcceptRadio = document.getElementById('rsvp-accept');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = rsvpNameInput && rsvpNameInput.value ? rsvpNameInput.value.trim() : 'Guest';
      var msg  = rsvpMessageInput && rsvpMessageInput.value ? rsvpMessageInput.value.trim() : '';
      var guestsCount = rsvpGuestsInput && rsvpGuestsInput.value ? parseInt(rsvpGuestsInput.value, 10) : 0;
      var isAttending = rsvpAcceptRadio && rsvpAcceptRadio.checked;

      if (msg) {
        var saved = JSON.parse(localStorage.getItem('guestMessages') || '[]');
        var lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
        saved.push({ name: name, text: msg, date: new Date().toLocaleDateString(lang) });
        localStorage.setItem('guestMessages', JSON.stringify(saved));
      }
      
      if (isAttending && !isNaN(guestsCount)) {
        var totalGuests = parseInt(localStorage.getItem('guestTotalCount') || '0', 10);
        localStorage.setItem('guestTotalCount', totalGuests + guestsCount);
      }

      rsvpForm.style.display = 'none';
      if (rsvpSuccess) rsvpSuccess.style.display = 'block';
      var dLine = document.getElementById('rsvp-deadline');
      if (dLine) dLine.style.display = 'none';
    });
  }
})();





