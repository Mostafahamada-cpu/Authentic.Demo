/* =========================================================================
   ENVELOPE OPENING EXPERIENCE — envelope.js
   A one-time, cinematic "open the invitation" moment shown between the
   preloader and the hero. Self-mounting: it builds its own markup and
   injects it into the page, so a theme only needs to link this file +
   envelope.css and call one function — no hand-authored HTML required.

   INTEGRATION CONTRACT (what this file expects from the host theme):
     - window.WS.config with: brideName, groomName, nameOrder, date,
       envelopeEnabled, envelopeSounds { seal, flap, unfold }
     - window.WS.utils with: prefersReducedMotion(), formatLongDate(), $all
     - The CSS custom properties listed at the top of envelope.css
     - Something (the preloader, typically) calling:
         window.WS.initEnvelope(onComplete)
       once, right as the site would otherwise reveal its hero. Returns
       true if it took over — onComplete() will be called once the
       sequence finishes, and the caller should NOT reveal the hero
       itself. Returns false if it skipped (missing config, disabled,
       reduced motion, already played this session) — the caller should
       reveal the hero immediately, exactly as if this file didn't exist.
     - Dispatches a "envelope:opened" event on `document` once the
       sequence completes, so other modules (e.g. background music) can
       hook the same real user gesture instead of waiting on their own.

   Every phase below is driven by a handful of class names added to the
   overlay in sequence (is-visible → is-opening → is-lifting →
   is-unfolding → is-unfolded → is-done); envelope.css owns all the actual
   motion. Retiming the whole sequence only requires editing TIMING below.
   ========================================================================= */
(function () {
  window.WS = window.WS || {};

  var SESSION_KEY = "envelopeOpened";

  // Every phase change is its own independent timer (not chained), so one
  // failing callback can never strand a later phase from firing.
  var TIMING = {
    LIFT: 1900,      // envelope fades, card lifts clear, camera eases in
    UNFOLD: 2900,     // fold panels begin opening
    UNFOLDED: 3900,   // fully flat card, content settled
    DONE: 4700,       // hero reveal fires, overlay begins its final fade
    REMOVE: 5600      // overlay fully removed from the DOM
  };

  var MARKUP =
    '<div class="envelope-overlay" id="envelope-overlay">' +
      '<div class="envelope-light-rays" aria-hidden="true"></div>' +
      '<div class="envelope-glow envelope-glow-a" aria-hidden="true"></div>' +
      '<div class="envelope-glow envelope-glow-b" aria-hidden="true"></div>' +
      '<div class="envelope-particles" id="envelope-particles" aria-hidden="true"></div>' +
      '<div class="envelope-scene">' +
        '<div class="envelope-copy" aria-hidden="true">' +
          '<p class="envelope-line envelope-line-1">You have received a wedding invitation</p>' +
          '<p class="envelope-line envelope-line-2">Click to Open</p>' +
        '</div>' +
        '<div class="envelope-scale">' +
          '<button type="button" class="envelope" id="envelope-trigger">' +
            '<span class="envelope-shadow" aria-hidden="true"></span>' +
            '<span class="envelope-back" aria-hidden="true"></span>' +
            '<span class="envelope-card" id="envelope-card" aria-hidden="true">' +
              '<span class="envelope-fold-base">' +
                '<span class="envelope-fold-face">' +
                  '<span class="envelope-fold-monogram" id="envelope-fold-monogram"></span>' +
                '</span>' +
                '<span class="envelope-fold-mid">' +
                  '<span class="envelope-fold-face">' +
                    '<span class="envelope-fold-date" id="envelope-card-date"></span>' +
                  '</span>' +
                  '<span class="envelope-fold-face envelope-fold-face-back"></span>' +
                  '<span class="envelope-fold-top">' +
                    '<span class="envelope-fold-face">' +
                      '<span class="envelope-fold-eyebrow">The Wedding Of</span>' +
                      '<span class="envelope-fold-names"><span id="envelope-card-name-a"></span><span class="envelope-fold-amp">&amp;</span><span id="envelope-card-name-b"></span></span>' +
                    '</span>' +
                    '<span class="envelope-fold-face envelope-fold-face-back"></span>' +
                  '</span>' +
                '</span>' +
              '</span>' +
            '</span>' +
            '<span class="envelope-front" aria-hidden="true"></span>' +
            '<span class="envelope-flap" aria-hidden="true">' +
              '<span class="envelope-seal" id="envelope-seal">' +
                '<span class="envelope-seal-half envelope-seal-left"></span>' +
                '<span class="envelope-seal-half envelope-seal-right"></span>' +
                '<span class="envelope-seal-initials" id="envelope-seal-initials"></span>' +
              '</span>' +
            '</span>' +
          '</button>' +
        '</div>' +
      '</div>' +
    '</div>';

  function orderedNames(config) {
    return config.nameOrder === "groom-bride"
      ? { first: config.groomName, second: config.brideName }
      : { first: config.brideName, second: config.groomName };
  }

  function initial(name) {
    return name ? String(name).trim().charAt(0).toUpperCase() : "";
  }

  window.WS.initEnvelope = function (onComplete) {
    var utils = window.WS.utils || {};
    var config = window.WS.config || {};

    if (config.envelopeEnabled === false) { return false; }

    var reduce = utils.prefersReducedMotion ? utils.prefersReducedMotion() : false;
    var alreadySeen = false;
    try { alreadySeen = sessionStorage.getItem(SESSION_KEY) === "1"; } catch (e) { alreadySeen = false; }

    // Nothing meaningful to "reduce" in a click-gated intro with no motion —
    // skip it outright for reduced-motion visitors rather than showing an
    // instant-but-still-present gate. Same for repeat page loads this
    // session: the whole point is a first-impression moment, once.
    if (reduce || alreadySeen) { return false; }

    var holder = document.createElement("div");
    holder.innerHTML = MARKUP;
    var overlay = holder.firstElementChild;
    document.body.insertBefore(overlay, document.body.firstChild);

    // ---- Populate dynamic content from config ------------------------------
    var names = orderedNames(config);
    var trigger = document.getElementById("envelope-trigger");
    if (names.first && names.second) {
      trigger.setAttribute("aria-label", "Open the wedding invitation from " + names.first + " & " + names.second);
    } else {
      trigger.setAttribute("aria-label", "Open your wedding invitation");
    }

    var sealInitials = document.getElementById("envelope-seal-initials");
    if (sealInitials) { sealInitials.textContent = initial(names.first) + "&" + initial(names.second); }

    var foldMonogram = document.getElementById("envelope-fold-monogram");
    if (foldMonogram) { foldMonogram.textContent = initial(names.first) + " & " + initial(names.second); }

    var nameA = document.getElementById("envelope-card-name-a");
    var nameB = document.getElementById("envelope-card-name-b");
    if (nameA) { nameA.textContent = names.first || ""; }
    if (nameB) { nameB.textContent = names.second || ""; }

    var dateEl = document.getElementById("envelope-card-date");
    if (dateEl && utils.formatLongDate) { dateEl.textContent = utils.formatLongDate(config.date); }

    // ---- Ambient drifting particles ----------------------------------------
    var particleWrap = document.getElementById("envelope-particles");
    if (particleWrap) {
      var count = window.innerWidth < 700 ? 9 : 16;
      for (var i = 0; i < count; i++) {
        var p = document.createElement("span");
        p.className = "envelope-particle";
        p.style.left = (Math.random() * 100).toFixed(1) + "%";
        p.style.setProperty("--size", (2 + Math.random() * 4).toFixed(1) + "px");
        p.style.setProperty("--dur", (9 + Math.random() * 8).toFixed(1) + "s");
        p.style.setProperty("--delay", (Math.random() * 6).toFixed(1) + "s");
        p.style.setProperty("--drift", (Math.random() * 50 - 25).toFixed(0) + "px");
        particleWrap.appendChild(p);
      }
    }

    // ---- Make the page behind the gate inert while it's up -----------------
    var inertTargets = ["site-nav", "main", "music-player", "back-to-top", "site-footer"]
      .map(function (id) { return document.getElementById(id); })
      .filter(Boolean);
    inertTargets.forEach(function (el) { el.setAttribute("inert", ""); });

    // ---- Optional sound hooks (silently do nothing without a config URL) --
    var sounds = config.envelopeSounds || {};
    function playSound(key) {
      var src = sounds[key];
      if (!src) { return; }
      try {
        var a = new Audio(src);
        a.volume = 0.55;
        a.play().catch(function () {});
      } catch (e) {}
    }

    // ---- Small gold spark burst, used at the seal-break and card-emerge ---
    function burst(container, sparkCount) {
      if (!container) { return; }
      for (var i = 0; i < sparkCount; i++) {
        var g = document.createElement("span");
        g.className = "envelope-spark";
        var angle = Math.random() * Math.PI * 2;
        var dist = 26 + Math.random() * 48;
        g.style.setProperty("--tx", (Math.cos(angle) * dist).toFixed(0) + "px");
        g.style.setProperty("--ty", (Math.sin(angle) * dist).toFixed(0) + "px");
        g.style.setProperty("--sdelay", (Math.random() * 0.25).toFixed(2) + "s");
        container.appendChild(g);
        setTimeout((function (el) { return function () { if (el.parentNode) { el.parentNode.removeChild(el); } }; })(g), 1700);
      }
    }

    var opened = false;

    function finalize() {
      overlay.classList.add("is-done");
      try { sessionStorage.setItem(SESSION_KEY, "1"); } catch (e) {}

      inertTargets.forEach(function (el) { el.removeAttribute("inert"); });

      var srLive = document.getElementById("sr-live");
      if (srLive) { srLive.textContent = "Invitation opened."; }

      try { document.dispatchEvent(new CustomEvent("envelope:opened")); } catch (e) {}
      try {
        if (typeof onComplete === "function") { onComplete(); }
      } catch (err) {
        console.error("[WeddingSite] envelope onComplete failed:", err);
      }

      var main = document.getElementById("main");
      if (main) {
        if (!main.hasAttribute("tabindex")) { main.setAttribute("tabindex", "-1"); }
        main.focus({ preventScroll: true });
      }
    }

    function open() {
      if (opened) { return; }
      opened = true;
      overlay.classList.add("is-opening");
      trigger.disabled = true;

      playSound("seal");
      burst(document.getElementById("envelope-seal"), 10);
      setTimeout(function () { playSound("flap"); }, 250);

      setTimeout(function () {
        overlay.classList.add("is-lifting");
        burst(document.getElementById("envelope-card"), 16);
      }, TIMING.LIFT);

      setTimeout(function () {
        overlay.classList.add("is-unfolding");
        playSound("unfold");
      }, TIMING.UNFOLD);

      setTimeout(function () { overlay.classList.add("is-unfolded"); }, TIMING.UNFOLDED);

      setTimeout(finalize, TIMING.DONE);

      setTimeout(function () {
        if (overlay.parentNode) { overlay.parentNode.removeChild(overlay); }
      }, TIMING.REMOVE);
    }

    trigger.addEventListener("click", open);
    trigger.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " " || e.key === "Spacebar") {
        e.preventDefault();
        open();
      }
    });

    requestAnimationFrame(function () {
      requestAnimationFrame(function () { overlay.classList.add("is-visible"); });
    });

    return true;
  };
})();
