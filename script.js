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
      "couple-link": "عرض الرسائل (للعروسين فقط)",
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
    var optSpan = document.querySelector('[data-i18n-opt]');
    if (optSpan) optSpan.textContent = dict["rsvp-lbl-opt"];
    
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
    musicTitle: "Maak – Amr Diab",

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
        description: "Surrounded by loved ones, they begin a new chapter – and you are witnesses to this beautiful beginning.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
      }
    ],

    // ---- Guidelines cards -------------------------------------------------------
    guidelines: [
      { icon: "dress-code", title: "Dress Code", description: "Formal evening attire. We hope to see you looking your best – suggested colors: champagne, sage green, and light blue." },
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

  // Runs `fn` safely — one module misbehaving should never take the whole
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
   file contains wedding-specific text — it is all data-driven, which is
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
      heroBg.style.setProperty("--hero-bg-image", 'url("' + config.heroImage + '")');
    }

    if (names.first && names.second) {
      document.title = names.first + " & " + names.second + " — Wedding Invitation";
      var metaDesc = utils.$('meta[name="description"]');
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
      dot.innerHTML = window.WS.icon ? window.WS.icon(item.icon || "heart") : "";
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
      iconWrap.innerHTML = window.WS.icon ? window.WS.icon(item.icon || "heart") : "";
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
    if (dtEl) { dtEl.textContent = window.WS.utils.formatLongDate(config.date) + "  ·  " + window.WS.utils.formatTime(config.date); }

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
    var prefix = document.documentElement.lang === 'ar' ? "نرجو الرد بحلول " : "Kindly respond by ";
    el.textContent = config.rsvpDeadline ? prefix + window.WS.utils.formatLongDate(config.rsvpDeadline) : "";
  }

  function renderFooter(config) {
    var names = window.WS.config.nameOrder === "groom-bride"
      ? { first: window.WS.config.groomName, second: window.WS.config.brideName }
      : { first: window.WS.config.brideName, second: window.WS.config.groomName };
    var namesEl = document.getElementById("footer-names");
    if (namesEl) { namesEl.textContent = (names.first || "") + " & " + (names.second || ""); }

    var dateEl = document.getElementById("footer-date");
    if (dateEl) { dateEl.textContent = window.WS.utils.formatLongDate(window.WS.config.date); }

    var yearEl = document.getElementById("footer-year");
    if (yearEl) {
      var d = new Date(window.WS.config.date);
      yearEl.textContent = isNaN(d.getTime()) ? new Date().getFullYear() : d.getFullYear();
    }
  }

  window.WS.initRender = function () {
    var config = window.WS.config;
    if (!config) { return; }
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

// Dynamic Guest Messages Logic & 30 Egyptian RSVP Messages
(function() {
  var PREFILLED_MESSAGES = [
    { name: "أحمد ومنى سلامة", text: "مبروك يا ياسمين ويا كريم! ربنا يكملكم على خير ويرزقكم بالسعادة دائماً.", date: "15/10/2026" },
    { name: "محمد وريم حسن", text: "أجمل تهنئة لأجمل عروسين! كل سنة وأنتم بألف خير وعافية.", date: "16/10/2026" },
    { name: "عمر وفاطمة علي", text: "ربنا يبارك فيكم ويجعل حياتكم مليانة بالفرح والمحبة. مبروك!", date: "17/10/2026" },
    { name: "يوسف وهنا إبراهيم", text: "نتمنى لكم حياة مليانة بالحب والتفاهم والسعادة. ألف مبروك!", date: "18/10/2026" },
    { name: "مصطفى وشيماء خالد", text: "يا ياسمين ويا كريم، انتم أجمل زوجين عرفناهم. كل التوفيق والنجاح!", date: "19/10/2026" },
    { name: "خالد وأميرة أحمد", text: "مبروك الزواج! ربنا يخليكم لبعض ويجعل بيتكم مليان حب وبركة.", date: "20/10/2026" },
    { name: "طارق وداليا عبد الله", text: "أجمل الأماني لكم في بداية هذا الطريق الجميل. كل سنة وأنتم بألف خير.", date: "21/10/2026" },
    { name: "هاني وسامية حبيب", text: "ألف مبروك! ربنا يجعل زواجكم سعيداً ومباركاً ويرزقكم بالذرية الصالحة.", date: "22/10/2026" },
    { name: "رامي ورانيا صادق", text: "يا ياسمين، ربنا يسعدك كما أسعدتينا دائماً. مبروك لكما الاثنين!", date: "23/10/2026" },
    { name: "وائل ومنى فؤاد", text: "تهانينا الحارة لأجمل عروسين! عقبال ما نفرح بأولادكم.", date: "24/10/2026" },
    { name: "بشير ونهى عادل", text: "أسعد الله أوقاتكم ووفقكم لما يحبه ويرضاه. مبروك الزواج!", date: "25/10/2026" },
    { name: "زياد وروان مصطفى", text: "ألف ألف مبروك! ربنا يكمل عليكم نعمته ويجعل حياتكم دائماً في سعادة.", date: "26/10/2026" },
    { name: "عصام وسهر عمر", text: "يا كريم، أجمل إنسان يستاهل أجمل حياة. مبروك لكما الاثنين!", date: "27/10/2026" },
    { name: "نبيل وهالة كمال", text: "مبروك! يارب تعيشوا في هنا ومحبة وتربوا أولادكم في أحسن تربية.", date: "28/10/2026" },
    { name: "ماهر وعبير سليم", text: "ربنا يجمعكم دائماً على خير ويديم المحبة بينكم. كل التهاني!", date: "29/10/2026" },
    { name: "فادي وميار رضا", text: "تهنئة قلبية لكما يا غاليَيْن. ربنا يسعدكم ويبارك في زواجكم.", date: "30/10/2026" },
    { name: "سامي وغادة جميل", text: "أجمل تهانينا وأحر تبريكاتنا. عقبال ما نفرح بأفراح أولادكم!", date: "31/10/2026" },
    { name: "حسام وإسراء ناصر", text: "ألف مبروك يا ياسمين ويا كريم. ربنا يجعلكم سند لبعض طول العمر.", date: "01/11/2026" },
    { name: "أشرف ونور الدين", text: "مبروك الزواج! أتمنى لكما حياة مليانة بالمحبة والسعادة والبركة.", date: "02/11/2026" },
    { name: "معتز وشروق منير", text: "يا ياسمين ويا كريم، انتم من أحلى الناس ومستاهلين أحلى حياة. مبروك!", date: "03/11/2026" },
    { name: "تامر وأسماء حجازي", text: "ألف مبروك! عقبال ما نشوفكم مع أولادكم وتكونوا أسعد عيلة!", date: "04/11/2026" },
    { name: "شريف ولمياء وهبة", text: "ربنا يبارك في هذا الزواج ويجعله أساس حياة سعيدة وناجحة. مبروك!", date: "05/11/2026" },
    { name: "أمجد ودينا رشدي", text: "تهانينا الحارة لكما. ربنا يجعل بيتكم مليان بالفرح والمحبة دائماً.", date: "06/11/2026" },
    { name: "جمال ومروة بدر", text: "مبروك ألف مبروك! عقبال الأفراح الكبيرة وعقبال أولادكم.", date: "07/11/2026" },
    { name: "عاطف وسحر طه", text: "يارب يكملكم على خير ويجعل حياتكم المشتركة مليانة بالبركة والسعادة.", date: "08/11/2026" },
    { name: "صلاح ولبنى يوسف", text: "ألف مبروك يا جماعة! ربنا يديم فرحكم ويبارك في زواجكم السعيد.", date: "09/11/2026" },
    { name: "علاء وآية رمزي", text: "مبروك الزواج! أتمنى من القلب أن تكون حياتكم أجمل من أحلامكم.", date: "10/11/2026" },
    { name: "وليد ونادية عزيز", text: "ألف مبروك وربنا يسعدكم ويديم المحبة والوفاء بينكم طول العمر.", date: "11/11/2026" },
    { name: "إياد وإلهام زكي", text: "تهانينا القلبية لكما. عقبال ما نفرح بأفراح بيتكم الجديد!", date: "12/11/2026" },
    { name: "كمال وعزيزة منصور", text: "ربنا يجعل هذا الزواج بداية حياة جميلة مليانة بالفرح والمحبة. مبروك!", date: "13/11/2026" }
  ];

  // Seed localStorage with 30 messages and guest count
  localStorage.setItem('guestMessages', JSON.stringify(PREFILLED_MESSAGES));
  localStorage.setItem('guestTotalCount', '58');

  // Handle RSVP submission
  var rsvpForm = document.getElementById('rsvp-form');
  var rsvpSuccess = document.getElementById('rsvp-success');
  var rsvpNameInput = document.getElementById('rsvp-name');
  var rsvpMessageInput = document.getElementById('rsvp-message');
  var rsvpGuestsInput = document.getElementById('rsvp-guests');

  if (rsvpForm) {
    rsvpForm.addEventListener('submit', function(e) {
      e.preventDefault();

      var name = rsvpNameInput && rsvpNameInput.value ? rsvpNameInput.value.trim() : 'ضيف';
      var msg  = rsvpMessageInput && rsvpMessageInput.value ? rsvpMessageInput.value.trim() : '';
      var guestsCount = rsvpGuestsInput && rsvpGuestsInput.value ? parseInt(rsvpGuestsInput.value, 10) : 1;

      if (msg) {
        var saved = JSON.parse(localStorage.getItem('guestMessages') || '[]');
        var lang = document.documentElement.lang === 'ar' ? 'ar-EG' : 'en-US';
        saved.push({ name: name, text: msg, date: new Date().toLocaleDateString(lang) });
        localStorage.setItem('guestMessages', JSON.stringify(saved));
      }
      
      if (!isNaN(guestsCount)) {
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