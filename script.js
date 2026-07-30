/* =========================================================================
   WEDDING CONFIG
   This is the only file most people customizing the template need to
   touch. Every section of the site reads from window.WS.config — change
   a value here and it propagates everywhere automatically (text, the
   countdown target, the map, the theme colors, which sections even exist).

   Replace the demo content below with your own. See README.md for a
   field-by-field guide.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.config = {

    // ---- The couple -------------------------------------------------------
    groomName: "Karim",
    brideName: "Yasmine",
    nameOrder: "bride-groom",

    tagline: "The Wedding Of",
    subtitle: "Together with their families, request the pleasure of your company as they begin their forever.",
    heroImage: "",

    date: "2026-12-12T17:00:00",
    venue: "Marriott Mena House",
    address: "Pyramids Road, Giza, Cairo, Egypt",
    mapsLink: "https://maps.google.com/?q=Marriott+Mena+House+Giza+Egypt",
    mapEmbedSrc: "https://www.google.com/maps?q=Marriott+Mena+House+Giza+Egypt&output=embed",

    colors: {
      accent: "#AD8A4E",
      accentDeep: "#8A6A38",
      accentLight: "#DCC793"
    },

    backgroundMusic: "music.mp3",
    musicTitle: "A Thousand Years — Christina Perri",

    story: [
      {
        date: "August 2019",
        title: "How We Met",
        description: "At a rooftop dinner in Cairo's Garden City — Karim arrived late, took the only open seat beside Yasmine, and stayed long after the city lights came on.",
        icon: "sparkle",
        image: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "March 2021",
        title: "Our First Journey",
        description: "A Nile cruise from Cairo to Luxor and Aswan became ten unforgettable days of laughter, history, and falling deeper in love under an open sky.",
        icon: "plane",
        image: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "June 2023",
        title: "Moving In Together",
        description: "A warm apartment in Zamalek with a quiet balcony overlooking the Nile — it became the first place that felt entirely, perfectly theirs.",
        icon: "home",
        image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "February 2026",
        title: "The Proposal",
        description: "On the terrace of the Mena House with the Great Pyramids glowing at dusk — Karim asked before dinner was served; Yasmine said yes before he could finish.",
        icon: "rings",
        image: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?auto=format&fit=crop&w=600&q=80"
      },
      {
        date: "December 12, 2026",
        title: "Forever Begins",
        description: "And now, surrounded by those they love most, they begin the most beautiful chapter of all — with you there to witness every precious moment.",
        icon: "heart",
        image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=600&q=80"
      }
    ],

    guidelines: [
      { icon: "dress-code", title: "Dress Code", description: "Black tie optional. We'd love to see you in elegant romantic tones — champagne, ivory, dusty rose, or midnight navy." },
      { icon: "arrival", title: "Arrival Time", description: "Please arrive by 4:30 PM. The ceremony begins promptly at 5:00 PM. The Pyramids at dusk are not to be missed." },
      { icon: "parking", title: "Parking & Valet", description: "Complimentary valet is available at the Mena House main entrance from 4:00 PM onward." },
      { icon: "no-smoking", title: "No Smoking", description: "The gardens and terraces are smoke-free. A designated area is available near the west wing." },
      { icon: "gift", title: "Gifts", description: "Your presence is our greatest joy. For those who wish to give, a registry card is enclosed in your invitation." },
      { icon: "contact", title: "Questions?", description: "Reach our coordinator Maria at +20 100 012 3456 or maria@yasminekarim.com." }
    ],

    gallery: [
      { src: "https://picsum.photos/800/600?random=11", alt: "Gallery photo 1", caption: "Golden Hour" },
      { src: "https://picsum.photos/800/600?random=22", alt: "Gallery photo 2", caption: "The Proposal" },
      { src: "https://picsum.photos/800/600?random=33", alt: "Gallery photo 3", caption: "Where It Began" },
      { src: "https://picsum.photos/800/600?random=44", alt: "Gallery photo 4", caption: "Mena House" },
      { src: "https://picsum.photos/800/600?random=55", alt: "Gallery photo 5", caption: "The Nile, 2021" },
      { src: "https://picsum.photos/800/600?random=66", alt: "Gallery photo 6", caption: "Quiet Evenings" },
      { src: "https://picsum.photos/800/600?random=77", alt: "Gallery photo 7", caption: "The Details" },
      { src: "https://picsum.photos/800/600?random=88", alt: "Gallery photo 8", caption: "Forever Starts Here" }
    ],

    rsvpDeadline: "2026-11-01",
    socialLinks: {
      instagram: "",
      facebook: ""
    },

    // ---- Section toggles ---------------------------------------------------------
    // Mirrors the brief: disabling any of these removes the section (and its
    // nav link) entirely — the layout closes the gap automatically.
    countdown: true,
    storyEnabled: true,
    galleryEnabled: false,
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
    return new Intl.DateTimeFormat("en-US", { day: "numeric", month: "long", year: "numeric" }).format(d);
  };

  utils.formatShortDate = function (isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) { return ""; }
    return new Intl.DateTimeFormat("en-US", { day: "2-digit", month: "2-digit", year: "numeric" }).format(d).replace(/\//g, " . ");
  };

  utils.formatTime = function (isoString) {
    var d = new Date(isoString);
    if (isNaN(d.getTime())) { return ""; }
    return new Intl.DateTimeFormat("en-US", { hour: "numeric", minute: "2-digit" }).format(d);
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

  // Removes disabled sections entirely (hidden attribute), so the layout
  // closes the gap automatically instead of leaving empty shells.
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
    { id: "story", label: "Our Story", flag: "storyEnabled" },
    { id: "location", label: "The Celebration", flag: "locationEnabled" },
    { id: "guidelines", label: "Good To Know", flag: "guidelinesEnabled" },
    { id: "gallery", label: "Gallery", flag: "galleryEnabled" },
    { id: "rsvp", label: "RSVP", flag: "rsvpEnabled" }
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
    if (dtEl) { dtEl.textContent = utils.formatLongDate(config.date) + "  ·  " + utils.formatTime(config.date); }

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
    el.textContent = config.rsvpDeadline ? "Kindly respond by " + utils.formatLongDate(config.rsvpDeadline) : "";
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
  };
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
   Purely decorative — soft floating motes in the hero, and quiet radial
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

    // Previous values — only animate a digit when it actually changes.
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
   Floating bottom-left widget. The audio element never auto-plays —
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

    /* ---- Fade-in play -------------------------------------------------------- */
    function doPlayFaded() {
      if (isPlaying) { return; }
      firstGestureFired = true;
      audio.volume = 0;
      audio.play().then(function () {
        setPlaying(true);
        var target = 0.42;
        var step = 0;
        var steps = 60; /* 3s fade at 50ms intervals */
        var timer = setInterval(function () {
          step++;
          audio.volume = Math.min(target, (step / steps) * target);
          if (volume) { volume.value = Math.round(audio.volume * 100); }
          if (step >= steps) { clearInterval(timer); }
        }, 50);
      }).catch(function () {
        setPlaying(false);
        firstGestureFired = false; /* allow retry */
      });
    }

    /* ---- Expose hook so envelope can trigger music on its tap -------------- */
    /* The envelope will call WS._startMusic() after the user's first tap.
       This satisfies browser autoplay policy on all platforms. */
    window.WS._startMusic = function () {
      if (!isPlaying && !firstGestureFired) {
        doPlayFaded();
      }
    };

    /* ---- Fallback: if no envelope, start on any document interaction ------- */
    function onFirstGesture(e) {
      if (firstGestureFired || isPlaying) { return; }
      /* Only trigger on meaningful events, not passive scroll etc. */
      document.removeEventListener("click",      onFirstGesture);
      document.removeEventListener("touchend",   onFirstGesture);
      doPlayFaded();
    }
    document.addEventListener("click",    onFirstGesture);
    document.addEventListener("touchend", onFirstGesture, { passive: true });

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
   The full-screen lightbox supports keyboard navigation (←/→/Esc) and
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
      if (Math.abs(dy) > Math.abs(dx))   { return; }   // vertical — ignore
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
   RSVP — attendance toggle wiring + validation
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initRsvp = function () {
    var config = window.WS.config;
    if (!config || config.rsvpEnabled === false) { return; }
    var form      = document.getElementById("rsvp-form");
    var submitBtn = document.getElementById("rsvp-submit");
    var successBox= document.getElementById("rsvp-success");
    var successMsg= document.getElementById("rsvp-success-msg");
    if (!form) { return; }

    var selectedAttendance = null;

    /* ---- Attendance toggle ---- */
    var attendBtns = document.querySelectorAll(".attend-btn");
    attendBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        attendBtns.forEach(function (b) {
          b.classList.remove("is-active");
          b.setAttribute("aria-checked", "false");
        });
        btn.classList.add("is-active");
        btn.setAttribute("aria-checked", "true");
        selectedAttendance = btn.getAttribute("data-value");
        var errEl = document.getElementById("err-attendance");
        if (errEl) { errEl.textContent = ""; }
        form.querySelector(".form-row:has(#err-attendance)") &&
          form.querySelector(".form-row:has(#err-attendance)").classList.remove("has-error");
      });
    });

    /* ---- Validation helpers ---- */
    function setErr(id, msg) {
      var el = document.getElementById(id);
      if (!el) { return; }
      el.textContent = msg;
      var row = el.closest ? el.closest(".form-row") : null;
      if (row) { row.classList.add("has-error"); }
    }
    function clearErr(id) {
      var el = document.getElementById(id);
      if (!el) { return; }
      el.textContent = "";
      var row = el.closest ? el.closest(".form-row") : null;
      if (row) { row.classList.remove("has-error"); }
    }

    /* ---- Submit ---- */
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameVal  = (document.getElementById("rsvp-name")  || {}).value || "";
      var phoneVal = (document.getElementById("rsvp-phone") || {}).value || "";
      var msgVal   = (document.getElementById("rsvp-message")|| {}).value || "";
      var guests   = parseInt((document.getElementById("rsvp-guests")|| {}).value, 10) || 1;
      clearErr("err-name"); clearErr("err-phone"); clearErr("err-guests"); clearErr("err-attendance");
      var ok = true;
      if (!nameVal.trim()) { setErr("err-name", "Full name is required"); ok = false; }
      if (!phoneVal.trim()) { setErr("err-phone", "Phone number is required"); ok = false; }
      if (!selectedAttendance) { setErr("err-attendance", "Please select attendance"); ok = false; }
      if (!ok) { return; }

      submitBtn.classList.add("is-loading");
      submitBtn.disabled = true;

      // Save to localStorage
      var saved = JSON.parse(localStorage.getItem("guestMessages") || "[]");
      saved.push({ name: nameVal.trim(), text: msgVal.trim(), date: new Date().toLocaleDateString("en-GB", {day:"numeric",month:"long",year:"numeric"}), attendance: selectedAttendance, guests: guests });
      localStorage.setItem("guestMessages", JSON.stringify(saved));

      setTimeout(function () {
        submitBtn.classList.remove("is-loading");
        submitBtn.disabled = false;
        form.style.display = "none";
        var dl = document.getElementById("rsvp-deadline");
        if (dl) { dl.style.display = "none"; }
        if (successBox) { successBox.hidden = false; }
        if (successMsg) {
          successMsg.textContent = selectedAttendance === "attending"
            ? "We are overjoyed! Your seat is reserved. We cannot wait to celebrate with you."
            : "We will miss you dearly. Thank you for letting us know — your love means everything.";
        }
      }, 1500);
    });
  };
})();




/* =========================================================================
   ENVELOPE INTRO
   Attach a single click + touchend listener directly on the overlay
   screen itself. All children have pointer-events:none in CSS, so every
   tap/click on the overlay bubbles up to this one handler.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  window.WS.initEnvelope = function () {
    var screen  = document.getElementById('envelope-screen');
    var envCard = document.getElementById('env-body');
    var cta     = document.getElementById('env-cta');

    /* If envelope HTML was removed, mark done immediately */
    if (!screen) {
      window.WS._envelopeDone = true;
      return;
    }

    var opened = false;

    /* Detect device type for CTA label */
    if (cta) {
      var touch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
      cta.textContent = touch ? 'Tap to open your invitation' : 'Click to open your invitation';
    }

    /* Freeze scroll while envelope is visible */
    document.body.style.overflow = 'hidden';

    function openEnvelope() {
      if (opened) { return; }
      opened = true;

      /* Immediately remove listener so it cannot fire again */
      screen.removeEventListener('click', openEnvelope);

      /* Hide CTA */
      if (cta) { cta.classList.add('is-hidden'); }

      /* Trigger animations via CSS class */
      if (envCard) { envCard.classList.add('is-open'); }

      /* After animations complete, fade out the screen */
      setTimeout(function () {
        screen.classList.add('is-gone');

        /* After fade completes, fully hide + unfreeze */
        setTimeout(function () {
          screen.style.display = 'none';
          document.body.style.overflow = '';
          window.WS._envelopeDone = true;

          /* Start music — user gesture already happened */
          if (window.WS._startMusic) { window.WS._startMusic(); }
        }, 1100);
      }, 1750);
    }

    /* Single listener on the SCREEN (not the card) — bubbles up from any child.
       Using 'click' covers both desktop (mouse) and mobile (tap after 300ms delay).
       This is the most compatible approach across all browsers. */
    screen.addEventListener('click', openEnvelope);
  };
})();

/* =========================================================================
   MAIN — Orchestrator
   Calls every module's init function in dependency order once the DOM
   is ready. Each call is wrapped in utils.safeRun so a bug in one module
   can never crash the rest of the site.

   Load order (per <script defer> in the HTML):
     config → utils → icons → render → preloader → particles →
     scrollEffects → countdown → musicPlayer → gallery → rsvp →
     navigation → main  (this file, last)
   ========================================================================= */
(function () {
  var WS = window.WS;

  function init() {
    // 1. Apply config and populate DOM first (no visual side-effects)
    WS.utils.safeRun("render",         WS.initRender);

    // 2. Particles & ambient orbs (purely decorative, safe to run early)
    WS.utils.safeRun("particles",      WS.initParticles);

    // 3. Scroll effects, countdown, gallery, RSVP, navigation — all safe
    //    to init now; they won't be visible until envelope goes away anyway
    WS.utils.safeRun("scrollEffects",  WS.initScrollEffects);
    WS.utils.safeRun("countdown",      WS.initCountdown);
    WS.utils.safeRun("rsvp",           WS.initRsvp);
    WS.utils.safeRun("navigation",     WS.initNavigation);

    // 4. Music: wire the player but DON'T autoplay yet.
    //    The envelope JS will call WS._startMusic() after the first tap.
    WS.utils.safeRun("musicPlayer",    WS.initMusicPlayer);

    // 5. Envelope intro — shown on top of everything.
    //    It sets WS._envelopeDone = true when dismissed.
    WS.utils.safeRun("envelope",       WS.initEnvelope);

    // 6. Preloader runs AFTER envelope is gone (or immediately if no envelope).
    //    We poll every 100ms — envelope dismissal takes ~2.7s total so this
    //    adds negligible overhead while guaranteeing no z-index conflict.
    function waitForEnvelopeThenPreload() {
      if (window.WS._envelopeDone) {
        WS.utils.safeRun("preloader", WS.initPreloader);
      } else {
        setTimeout(waitForEnvelopeThenPreload, 100);
      }
    }
    waitForEnvelopeThenPreload();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

// Guest Messages — seed 30 entries + luxury modal logic
(function () {

  /* ---- 30 pre-filled Egyptian guest messages ---- */
  var SEED = [
    { name: "Ahmed Hassan & Mona Hassan", text: "Yasmine and Karim, you are two of the most beautiful souls we have ever had the joy of knowing. The way you look at each other tells a love story that no words could truly capture. Wishing you a lifetime of laughter, warmth, and adventures together.", date: "October 14, 2026", attendance: "attending", guests: 2 },
    { name: "Mariam Ashraf", text: "My dearest Yasmine! I have watched you grow into the most graceful, radiant woman, and today you have found a man worthy of every piece of your heart. Karim, take good care of her — she is a treasure beyond measure. Counting down the days!", date: "October 16, 2026", attendance: "attending", guests: 1 },
    { name: "Omar Khaled & Nour Khaled", text: "To the couple who has given us nothing but hope in love — thank you. Your story is the stuff of movies, and we know the wedding will be even more magical. We are honoured to witness your forever begin beneath the Pyramids.", date: "October 17, 2026", attendance: "attending", guests: 2 },
    { name: "Hany Ashraf", text: "Karim, you deserve every bit of happiness coming your way, brother. Yasmine, welcome to the family — you are already the best thing that has happened to all of us. December cannot come soon enough!", date: "October 18, 2026", attendance: "attending", guests: 1 },
    { name: "Sarah Adel", text: "My dearest Yasmine! I have been waiting for this day since you first mentioned his name with that smile on your face. You are going to be the most breathtaking bride, and Karim is the luckiest man alive. See you at the Mena House!", date: "October 19, 2026", attendance: "attending", guests: 1 },
    { name: "Youssef Amr & Dina Amr", text: "To Yasmine and Karim — two of our favourite people, building the life they deserve together. The Pyramids at sunset as the backdrop to your vows? That is pure magic. We would not miss it for the world.", date: "October 20, 2026", attendance: "attending", guests: 2 },
    { name: "Mohamed Hassan & Rana Hassan", text: "Congratulations to the most beautifully matched pair we know! Yasmine, your light has always been extraordinary, and Karim, you somehow shine even brighter when she is beside you. Wishing you a lifetime of that.", date: "October 21, 2026", attendance: "attending", guests: 2 },
    { name: "Samia Habib", text: "My darling Yasmine and dear Karim, it breaks my heart that I will not be able to make the journey this December. But know that my love and prayers are with you every single moment of your beautiful day. Please send all the photographs!", date: "October 22, 2026", attendance: "declining", guests: 1 },
    { name: "Tarek Abdullah & Dalia Abdullah", text: "When two remarkable people find each other in a city of a thousand stories, the world feels a little more beautiful. Yasmine and Karim, your love story is one for the ages. We are beyond excited to be there with you.", date: "October 23, 2026", attendance: "attending", guests: 2 },
    { name: "Nada El-Shamy", text: "Yasmine, from university halls to wedding halls — what a journey! I am so proud of the woman you have become and so happy you found your person. Karim, she talks about you with so much love. See you both very soon!", date: "October 24, 2026", attendance: "attending", guests: 1 },
    { name: "Karim Ibrahim", text: "Brother Karim, the day has finally come — and what a day it will be! The Mena House with the Pyramids in the background, only you could plan something this spectacular. Cannot wait to raise a glass with you.", date: "October 25, 2026", attendance: "attending", guests: 1 },
    { name: "Heba Nour", text: "Dearest Yasmine — you have always deserved a love that feels like home. And watching you with Karim, that is exactly what it is. Pure, warm, and completely real. I will be there with a heart full of joy and happy tears.", date: "October 26, 2026", attendance: "attending", guests: 1 },
    { name: "Sherif Wahba & Layla Wahba", text: "We have known both of you for years and have seen this love quietly grow into something extraordinary. Yasmine and Karim, your wedding is not just a celebration — it is the beginning of a beautiful legacy. With warmest wishes.", date: "October 27, 2026", attendance: "attending", guests: 2 },
    { name: "Amir Reda", text: "Karim, you have been talking about this woman since the night you met her. Now here we are — and she is everything you said and more. I am so honoured to celebrate with you both. December 12th cannot come fast enough.", date: "October 28, 2026", attendance: "attending", guests: 1 },
    { name: "Laila Fathi", text: "My beautiful Yasmine, watching you grow into this radiant, graceful woman has been one of the great joys of my life. And finding a man who sees your worth the way Karim does — that is a blessing beyond measure. All my love.", date: "October 29, 2026", attendance: "attending", guests: 1 },
    { name: "Hassan Kamal & Nadia Kamal", text: "To the happy couple: Nadia and I send you every ounce of our love and blessings on this beautiful occasion. May your union be filled with as much joy, laughter, and tenderness as you have brought into our lives.", date: "October 30, 2026", attendance: "attending", guests: 2 },
    { name: "Rania Mostafa", text: "Yasmine! The way you looked when you told me he proposed — I carry that image in my heart. You were glowing with such happiness. I cannot wait to see you glow even brighter on your wedding day. I will be there, tears and all!", date: "October 31, 2026", attendance: "attending", guests: 1 },
    { name: "Wael Fouad", text: "My dearest friends, I am devastated to miss your celebration due to circumstances beyond my control. Please know that I will be thinking of you every moment of December 12th. Here is to a lifetime of love, laughter, and happiness.", date: "November 1, 2026", attendance: "declining", guests: 1 },
    { name: "Nesrine Badawi", text: "Yasmine and Karim, the love you share is the kind that authors write about and painters try to capture. It is generous, graceful, and entirely beautiful. I am honoured to witness it. See you in Cairo!", date: "November 2, 2026", attendance: "attending", guests: 1 },
    { name: "Adel Mansour & Samira Mansour", text: "We have watched Karim grow from a wonderful young man into an extraordinary one, and meeting Yasmine, we understood everything. She is the missing piece. You are perfect together. God bless your union always.", date: "November 3, 2026", attendance: "attending", guests: 2 },
    { name: "Ghada Emad", text: "Yasmine, I always told you — when it is right, you will know. And from everything you have shared with me, this is right. This is everything. Karim is lucky. You are lucky. And we are all lucky to witness this love.", date: "November 4, 2026", attendance: "attending", guests: 1 },
    { name: "Khaled Ahmed & Amira Ahmed", text: "From the streets of Cairo to the grandeur of the Mena House — your love story has the most perfect setting for its next chapter. Yasmine and Karim, we raise a toast to your happiness and your forever together.", date: "November 5, 2026", attendance: "attending", guests: 2 },
    { name: "Bassem Nasser", text: "Karim, the best man I have ever had the privilege of calling a friend. And Yasmine — thank you for making him the happiest version of himself. December 12th is going to be unforgettable. So proud of you both.", date: "November 6, 2026", attendance: "attending", guests: 1 },
    { name: "Noha Adel", text: "My cousin, my Yasmine. You have always had the biggest heart, and now you have found someone whose heart matches yours in every way. I will be at the front, crying the happiest tears and cheering the loudest. Love you so much.", date: "November 7, 2026", attendance: "attending", guests: 1 },
    { name: "Walid Aziz & Yasmine Aziz", text: "Two of the warmest, most sincere people we know — finally celebrating the love they have quietly been building together. Yasmine and Karim, the world is a more romantic place because of you two. Cannot wait to celebrate!", date: "November 8, 2026", attendance: "attending", guests: 2 },
    { name: "Aya Ramzy", text: "Yasmine, you are my person and you always will be. Watching you find your other person — the one who truly sees you — has been one of the greatest gifts. Karim, you better know how lucky you are. She is everything. See you at the Mena House, my love!", date: "November 9, 2026", attendance: "attending", guests: 1 },
    { name: "Ibrahim Saad & Salma Saad", text: "The Pyramids have witnessed centuries of love stories, and on December 12th they will witness yours. Yasmine and Karim, what a beautiful way to begin your forever. We are beyond honoured to be part of this extraordinary day.", date: "November 10, 2026", attendance: "attending", guests: 2 },
    { name: "Manal Hassan", text: "Working alongside Yasmine these past years has been a genuine privilege. She brings light to every room she enters, and now she brings it to Karim's life every single day. Congratulations to you both — this is so well deserved.", date: "November 11, 2026", attendance: "attending", guests: 1 },
    { name: "Moustafa Nour & Hana Nour", text: "Karim and Yasmine — from the moment we heard the news, our hearts have been full. You bring out the very best in each other, and that is the truest mark of real love. We are counting the days to December. With all our love.", date: "November 12, 2026", attendance: "attending", guests: 2 },
    { name: "Diana Khalil", text: "Yasmine, I remember the afternoon you first described him to me — how you said his name quietly, like it was something precious. That was the moment I knew. This love is real and it is rare. I am so grateful to be here to celebrate it with you.", date: "November 13, 2026", attendance: "attending", guests: 1 }
  ];

  if (!localStorage.getItem("gm_seeded_v2")) {
    localStorage.setItem("guestMessages", JSON.stringify(SEED));
    localStorage.setItem("gm_seeded_v2", "1");
  }

  /* ---- Modal wiring ---- */
  var viewLink      = document.getElementById("view-messages-link");
  var modal         = document.getElementById("messages-modal");
  var closeBtn      = document.getElementById("close-messages");
  var passInput     = document.getElementById("messages-pass-input");
  var submitBtn     = document.getElementById("messages-pass-submit");
  var errorMsg      = document.getElementById("messages-pass-error");
  var passContainer = document.getElementById("messages-pass-container");
  var messagesList  = document.getElementById("messages-list");
  var unlockedView  = document.getElementById("gm-unlocked");

  var activeFilter = "all";

  function getInitials(name) {
    var w = name.trim().split(/\s+/);
    return (w[0] ? w[0][0] : "") + (w[1] ? w[1][0] : "");
  }

  function renderMessages(filter) {
    if (!messagesList) { return; }
    messagesList.innerHTML = "";
    var all  = JSON.parse(localStorage.getItem("guestMessages") || "[]");

    /* stats */
    var attending = all.filter(function (m) { return m.attendance === "attending"; }).length;
    var declining = all.filter(function (m) { return m.attendance === "declining"; }).length;
    var statsEl = document.getElementById("gm-stats");
    if (statsEl) {
      statsEl.innerHTML =
        "<div class='gm-stat'><span class='gm-stat-num'>" + all.length + "</span><span class='gm-stat-lbl'>Total</span></div>" +
        "<div class='gm-stat'><span class='gm-stat-num'>" + attending + "</span><span class='gm-stat-lbl'>Attending</span></div>" +
        "<div class='gm-stat'><span class='gm-stat-num'>" + declining + "</span><span class='gm-stat-lbl'>Regrets</span></div>";
    }

    /* filter */
    var list = all.slice().reverse();
    if (filter === "attending")    { list = list.filter(function (m) { return m.attendance === "attending"; }); }
    else if (filter === "declining") { list = list.filter(function (m) { return m.attendance === "declining"; }); }
    else if (filter === "has-message") { list = list.filter(function (m) { return m.text && m.text.trim(); }); }

    if (list.length === 0) {
      messagesList.innerHTML = "<p class='gm-empty'>No messages in this category yet.</p>";
      return;
    }

    list.forEach(function (m) {
      var isAtt   = m.attendance === "attending";
      var initials = getInitials(m.name);
      var badgeTxt = isAtt ? "Attending ✓" : "Regrets";
      var card = document.createElement("div");
      card.className = "gm-card" + (isAtt ? " gm-attending" : " gm-declining");
      var msgHtml = m.text ? "<p class='gm-msg-text'>\u201C" + m.text + "\u201D</p>" : "";
      var guestsHtml = m.guests ? "<span class='gm-meta-pill'>&#128101; " + m.guests + " guest" + (m.guests > 1 ? "s" : "") + "</span>" : "";
      card.innerHTML =
        "<div class='gm-card-top'>" +
          "<div class='gm-avatar'>" + initials + "</div>" +
          "<div class='gm-card-info'>" +
            "<strong class='gm-name'>" + m.name + "</strong>" +
            "<span class='gm-date'>" + (m.date || "") + "</span>" +
          "</div>" +
          "<span class='gm-badge " + (isAtt ? "gm-att" : "gm-dec") + "'>" + badgeTxt + "</span>" +
        "</div>" +
        (guestsHtml ? "<div class='gm-meta'>" + guestsHtml + "</div>" : "") +
        msgHtml;
      messagesList.appendChild(card);
    });
  }

  if (viewLink && modal) {
    viewLink.addEventListener("click", function (e) {
      e.preventDefault();
      modal.style.display = "flex";
    });

    closeBtn && closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
      if (passInput) { passInput.value = ""; }
      if (errorMsg)  { errorMsg.style.display = "none"; }
      if (passContainer) { passContainer.style.display = "block"; }
      if (unlockedView)  { unlockedView.style.display = "none"; }
    });

    modal.addEventListener("click", function (e) {
      if (e.target === modal) { closeBtn && closeBtn.click(); }
    });

    submitBtn && submitBtn.addEventListener("click", function () {
      var val = (passInput ? passInput.value.trim().toLowerCase() : "");
      if (val === "love") {
        if (passContainer) { passContainer.style.display = "none"; }
        if (unlockedView)  { unlockedView.style.display = "flex"; }
        renderMessages(activeFilter);

        /* wire filter tabs */
        var tabs = document.querySelectorAll(".gm-tab");
        tabs.forEach(function (tab) {
          tab.addEventListener("click", function () {
            tabs.forEach(function (t) { t.classList.remove("is-active"); });
            tab.classList.add("is-active");
            activeFilter = tab.getAttribute("data-filter");
            renderMessages(activeFilter);
          });
        });
      } else {
        if (errorMsg) { errorMsg.style.display = "block"; }
        if (passInput) { passInput.style.animation = "none"; void passInput.offsetWidth; passInput.style.animation = "shake 0.4s ease"; }
      }
    });

    passInput && passInput.addEventListener("keypress", function (e) {
      if (e.key === "Enter") { submitBtn && submitBtn.click(); }
    });
  }
})();
