/* Auto-converted from JSX to plain JavaScript (React.createElement) so no
   build step is required to deploy this file — it runs as-is in the browser.
   Source of truth for future edits: the vendor-original/ or the original
   JSX authoring; edit this file directly going forward since JSX has been
   dropped from this project entirely. */
const { useState, useEffect, useRef, useCallback, useLayoutEffect } = React;
const ROUTE_HREF = {
  home: "index.html",
  about: "about.html",
  experience: "experience.html",
  grooming: "grooming.html",
  courses: "courses.html",
  boarding: "boarding.html",
  myotherapy: "myotherapy.html"
};
function hrefFor(key) {
  return ROUTE_HREF[key] || ROUTE_HREF.home;
}
const PawIcon = ({ size = 18, color = "currentColor", style }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 64 64", width: size, height: size, style, "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("ellipse", { cx: "32", cy: "16", rx: "5.5", ry: "7.5", fill: color }), /* @__PURE__ */ React.createElement("ellipse", { cx: "20", cy: "24", rx: "6", ry: "8", fill: color }), /* @__PURE__ */ React.createElement("ellipse", { cx: "44", cy: "24", rx: "6", ry: "8", fill: color }), /* @__PURE__ */ React.createElement("ellipse", { cx: "11", cy: "38", rx: "5", ry: "6.5", fill: color }), /* @__PURE__ */ React.createElement("ellipse", { cx: "53", cy: "38", rx: "5", ry: "6.5", fill: color }), /* @__PURE__ */ React.createElement("ellipse", { cx: "32", cy: "46", rx: "13", ry: "11", fill: color }));
const Arrow = ({ size = 14 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 24 24", width: size, height: size, fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "arr" }, /* @__PURE__ */ React.createElement("line", { x1: "5", y1: "12", x2: "19", y2: "12" }), /* @__PURE__ */ React.createElement("polyline", { points: "13 6 19 12 13 18" }));
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal:not(.in)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("in"));
      return void 0;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("in");
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}
function CursorTrail() {
  const dotRef = useRef(null);
  const trailRef = useRef(null);
  const stateRef = useRef({ lastX: -100, lastY: -100, lastStamp: 0, alt: 0 });
  useEffect(() => {
    const dot = dotRef.current;
    const trail = trailRef.current;
    if (!dot || !trail) return;
    let raf;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let dx = mx, dy = my;
    function onMove(e) {
      mx = e.clientX;
      my = e.clientY;
      const t = e.target;
      if (t.closest && t.closest("a, button, .hover-zone")) dot.classList.add("hover");
      else dot.classList.remove("hover");
      const s = stateRef.current;
      const dist = Math.hypot(mx - s.lastX, my - s.lastY);
      const now = performance.now();
      if (dist > 70 && now - s.lastStamp > 60) {
        s.lastX = mx;
        s.lastY = my;
        s.lastStamp = now;
        const paw = document.createElement("div");
        const angle = Math.atan2(my - dy, mx - dx) * 180 / Math.PI + 90;
        const side = s.alt ? -10 : 10;
        s.alt = 1 - s.alt;
        const offX = Math.cos((angle - 90) * Math.PI / 180 + Math.PI / 2) * side;
        const offY = Math.sin((angle - 90) * Math.PI / 180 + Math.PI / 2) * side;
        paw.className = "paw-print";
        paw.style.cssText = `
          position:absolute; left:${mx + offX}px; top:${my + offY}px;
          width:22px; height:22px; transform:translate(-50%,-50%) rotate(${angle}deg);
          opacity:.42; transition:opacity 1.4s ease, transform 1.4s ease;
          pointer-events:none;
        `;
        paw.innerHTML = `<svg viewBox="0 0 64 64" width="22" height="22">
          <ellipse cx="32" cy="16" rx="5.5" ry="7.5" fill="#B18D4E"/>
          <ellipse cx="20" cy="24" rx="6" ry="8" fill="#B18D4E"/>
          <ellipse cx="44" cy="24" rx="6" ry="8" fill="#B18D4E"/>
          <ellipse cx="11" cy="38" rx="5" ry="6.5" fill="#B18D4E"/>
          <ellipse cx="53" cy="38" rx="5" ry="6.5" fill="#B18D4E"/>
          <ellipse cx="32" cy="46" rx="13" ry="11" fill="#B18D4E"/>
        </svg>`;
        trail.appendChild(paw);
        requestAnimationFrame(() => {
          paw.style.opacity = "0";
          paw.style.transform += " scale(1.2)";
        });
        setTimeout(() => paw.remove(), 1500);
      }
    }
    function tick() {
      dx += (mx - dx) * 0.22;
      dy += (my - dy) * 0.22;
      dot.style.transform = `translate(${dx}px, ${dy}px) translate(-50%,-50%)`;
      raf = requestAnimationFrame(tick);
    }
    tick();
    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("div", { className: "paw-trail", ref: trailRef }), /* @__PURE__ */ React.createElement("div", { className: "cursor-dot", ref: dotRef }));
}
const NAV_ITEMS = [
  { key: "home", label: "Home" },
  { key: "about", label: "About" },
  { key: "experience", label: "Experience" },
  { key: "grooming", label: "Grooming" },
  { key: "courses", label: "Courses" },
  { key: "boarding", label: "Boarding" },
  { key: "myotherapy", label: "Myotherapy" }
];
function TopNav({ route, onBook }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("header", { className: "nav " + (scrolled ? "scrolled" : "") }, /* @__PURE__ */ React.createElement("div", { className: "container nav-inner" }, /* @__PURE__ */ React.createElement("a", { href: hrefFor("home"), className: "nav-brand", "aria-label": "Pawpad home" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/logo-sage.png", alt: "Pawpad" })), /* @__PURE__ */ React.createElement("nav", { className: "nav-links desktop-only", "aria-label": "Primary" }, NAV_ITEMS.map((item) => /* @__PURE__ */ React.createElement("a", { key: item.key, href: hrefFor(item.key), className: "nav-link " + (route === item.key ? "active" : "") }, item.label))), /* @__PURE__ */ React.createElement("div", { className: "nav-cta desktop-only" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: onBook }, "Book a session ", /* @__PURE__ */ React.createElement(Arrow, null))), /* @__PURE__ */ React.createElement("button", { className: "hamburger mobile-only", onClick: () => setOpen(true), "aria-label": "Open menu" }, /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null), /* @__PURE__ */ React.createElement("span", null)))), open && /* @__PURE__ */ React.createElement("div", { className: "mobile-menu", onClick: () => setOpen(false) }, /* @__PURE__ */ React.createElement("div", { className: "mobile-menu-inner", onClick: (e) => e.stopPropagation() }, /* @__PURE__ */ React.createElement("button", { className: "close", onClick: () => setOpen(false), "aria-label": "Close menu" }, "\xD7"), /* @__PURE__ */ React.createElement("div", { className: "mobile-links" }, NAV_ITEMS.map((item) => /* @__PURE__ */ React.createElement(
    "a",
    {
      key: item.key,
      href: hrefFor(item.key),
      onClick: () => setOpen(false),
      className: "m-link " + (route === item.key ? "active" : "")
    },
    /* @__PURE__ */ React.createElement("span", null, item.label),
    /* @__PURE__ */ React.createElement(Arrow, { size: 20 })
  ))), /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
    setOpen(false);
    onBook();
  } }, "Book a session"))), /* @__PURE__ */ React.createElement("style", null, `
        .nav {
          position: fixed; top: 0; left: 0; right: 0; z-index: 50;
          transition: background var(--t-med) var(--ease), backdrop-filter var(--t-med) var(--ease), padding var(--t-fast) var(--ease);
          padding: 18px 0;
        }
        .nav.scrolled {
          background: color-mix(in oklab, var(--cream-bg), transparent 12%);
          backdrop-filter: blur(14px);
          -webkit-backdrop-filter: blur(14px);
          padding: 10px 0;
          border-bottom: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
        }
        .nav-inner { display: flex; align-items: center; justify-content: space-between; gap: 24px; }
        .nav-brand img {
          height: 84px;
          width: auto;
          max-width: min(42vw, 320px);
          object-fit: contain;
          transition: height var(--t-fast) var(--ease);
        }
        .nav.scrolled .nav-brand img { height: 64px; }
        .nav-links { display: flex; gap: 6px; align-items: center; }
        .nav-link {
          padding: 10px 16px;
          border-radius: 999px;
          font-size: 14px;
          font-weight: 500;
          color: var(--ink);
          opacity: .78;
          transition: all var(--t-fast) var(--ease);
          position: relative;
        }
        .nav-link:hover { opacity: 1; background: color-mix(in oklab, var(--champagne), transparent 30%); }
        .nav-link.active { opacity: 1; color: var(--driftwood-deep); }
        .nav-link.active::after {
          content: ""; position: absolute; bottom: 4px; left: 50%; transform: translateX(-50%);
          width: 4px; height: 4px; background: var(--driftwood); border-radius: 50%;
        }
        .hamburger {
          display: flex; flex-direction: column; gap: 5px; padding: 10px;
        }
        .hamburger span {
          display: block; width: 22px; height: 1.5px; background: var(--ink); border-radius: 2px;
        }
        .mobile-menu {
          position: fixed; inset: 0; z-index: 90;
          background: color-mix(in oklab, var(--ink), transparent 40%);
          backdrop-filter: blur(8px);
          animation: fadeIn .25s var(--ease) both;
        }
        .mobile-menu-inner {
          position: absolute; top: 0; right: 0; bottom: 0; width: min(360px, 86%);
          background: var(--cream-bg);
          padding: 80px 32px 32px;
          display: flex; flex-direction: column; gap: 24px;
          animation: slideIn .35s var(--ease) both;
        }
        .mobile-menu-inner .close {
          position: absolute; top: 20px; right: 24px;
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--champagne); font-size: 24px; line-height: 1;
        }
        .mobile-links { display: flex; flex-direction: column; gap: 2px; }
        .m-link {
          display: flex; justify-content: space-between; align-items: center;
          padding: 18px 0; border-bottom: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          font-family: var(--f-display); font-size: 28px;
        }
        .m-link.active { color: var(--driftwood); }
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }
      `));
}
function Footer({ onBook }) {
  return /* @__PURE__ */ React.createElement("footer", { className: "site-footer" }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "footer-top" }, /* @__PURE__ */ React.createElement("div", { className: "footer-cta-block" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Ready when you are"), /* @__PURE__ */ React.createElement("h2", { className: "h-1" }, "Soft hands", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--white)" } }, "Calm pets")), /* @__PURE__ */ React.createElement("p", { className: "lead", style: { marginTop: 24 } }, "Walk in with anxiety, leave with a wagging tail. Sessions are spaced, never rushed \u2014 and we plan around your pet's temperament, not our calendar."), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", gap: 14, flexWrap: "wrap", marginTop: 32 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: onBook }, "Book a session ", /* @__PURE__ */ React.createElement(Arrow, null)), /* @__PURE__ */ React.createElement("a", { href: hrefFor("about"), className: "btn btn-ghost" }, "Read our story ", /* @__PURE__ */ React.createElement(Arrow, null)))), /* @__PURE__ */ React.createElement("div", { className: "footer-grid" }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "f-h" }, "Hours"), /* @__PURE__ */ React.createElement("p", null, "Weekdays: 11 AM - 8 PM", /* @__PURE__ */ React.createElement("br", null), "Weekends: 10 AM - 8 PM", /* @__PURE__ */ React.createElement("br", null), "Thursdays: Closed")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "f-h" }, "Address"), /* @__PURE__ */ React.createElement("p", null, "#426, 5th Main Road,", /* @__PURE__ */ React.createElement("br", null), "HRBR 2nd Block, Kalyan Nagar", /* @__PURE__ */ React.createElement("br", null), "Bangalore - 560043 India"), /* @__PURE__ */ React.createElement("p", { style: { marginTop: 14 } }, "Ph: ", /* @__PURE__ */ React.createElement("a", { href: "tel:+919663077496" }, "9663077496")), /* @__PURE__ */ React.createElement("div", { className: "socials" }, /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Instagram" }, "IG"), /* @__PURE__ */ React.createElement("a", { href: "#", "aria-label": "Facebook" }, "FB"), /* @__PURE__ */ React.createElement("a", { href: "https://wa.me/919663077496", "aria-label": "WhatsApp", target: "_blank", rel: "noopener" }, "WA"))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("h4", { className: "f-h" }, "Explore"), /* @__PURE__ */ React.createElement("ul", null, NAV_ITEMS.filter((i) => i.key !== "home").map((i) => /* @__PURE__ */ React.createElement("li", { key: i.key }, /* @__PURE__ */ React.createElement("a", { href: hrefFor(i.key) }, i.label))))))), /* @__PURE__ */ React.createElement("div", { className: "footer-bottom" }, /* @__PURE__ */ React.createElement("div", { className: "brand-mark" }, /* @__PURE__ */ React.createElement("img", { src: "assets/img/logo-pawpad-03.png", alt: "Pawpad" })), /* @__PURE__ */ React.createElement("p", { className: "micro" }, "\xA9 2015 \u2013 ", (/* @__PURE__ */ new Date()).getFullYear(), " Pawpad \xB7 Made in Bengaluru with care for streeties everywhere"))), /* @__PURE__ */ React.createElement("style", null, `
        .site-footer {
          background: #2e2e2e; color: var(--white);
          padding: 100px 0 36px; margin-top: 80px;
          position: relative; overflow: hidden;
        }
        .site-footer .eyebrow { color: var(--white); }
        .site-footer .eyebrow::before { background: var(--white); }
        .site-footer h2 { color: var(--white); }
        .site-footer p { color: color-mix(in oklab, var(--white), transparent 20%); }
        .site-footer a { color: var(--white); transition: color var(--t-fast) var(--ease); }
        .site-footer a:hover { color: var(--driftwood); }
        .footer-top { display: grid; grid-template-columns: 1.2fr 1fr; gap: 80px; align-items: start; padding-bottom: 80px; }
        .footer-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; padding-top: 12px; }
        .f-h { font-family: var(--f-body); font-size: 12px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--white); margin: 0 0 14px; }
        .footer-grid ul { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 8px; }
        .footer-grid p { margin: 0; line-height: 1.6; }
        .socials { display: flex; gap: 8px; margin-top: 16px; }
        .socials a {
          display: inline-flex; align-items: center; justify-content: center;
          width: 36px; height: 36px; border-radius: 50%;
          background: color-mix(in oklab, var(--cream-bg), transparent 88%);
          font-size: 11px; font-weight: 700; letter-spacing: .05em;
        }
        .socials a:hover { background: var(--driftwood); color: var(--white); }
        .footer-bottom {
          padding-top: 36px; border-top: 1px solid color-mix(in oklab, var(--cream-bg), transparent 88%);
          display: flex; align-items: center; justify-content: space-between; gap: 24px; flex-wrap: wrap;
        }
        .brand-mark img { height: 88px; width: auto; max-width: 360px; object-fit: contain; opacity: .98; }
        .micro { font-size: 12px; letter-spacing: .04em; }
        @media (max-width: 900px) {
          .footer-top { grid-template-columns: 1fr; gap: 48px; padding-bottom: 48px; }
          .footer-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 700px) {
          .nav-brand img { height: 52px; max-width: 190px; }
          .nav.scrolled .nav-brand img { height: 44px; }
          .brand-mark img { height: 64px; max-width: 240px; }
        }
      `));
}
const TESTIMONIALS = [
  {
    quote: "Thank you so much to you Leena and your incredible team for taking such good care of Maggie during her grooming session. Maggie is generally anxious during grooming and after trying several large chain groomers, Pawpad has been a saviour.",
    name: "Rithika Narayan",
    pet: "Maggie",
    img: "assets/img/8.jpg"
  },
  {
    quote: "Leena is a very patient and considerate groomer who really cares for your pets. Talks to them soothingly and is very gentle with them. Small touches like covering pets ears with a small towel while blow drying make a world of difference. Highly recommend!",
    name: "Nisha Viswanathan",
    pet: "Cat grooming client",
    img: "assets/img/6.jpg"
  },
  {
    quote: "We take care of an abandoned 13-year-old Indie\u2013Poodle mix named Pepsi who lives near our apartment. When we first started looking after her, her coat was in a terrible condition with severe matting, cuts, and rashes. We began taking her to Pawpad, run by Leena Munikempanna, and the experience has been incredible. Leena and her team handled Pepsi with so much patience and care, and over a few grooming sessions they completely brought her coat back to life. What touched us even more was Leena's kindness \u2014 she generously offered us a discount on grooming sessions so we could continue bringing Pepsi in regularly. It's rare to find businesses that care this deeply not just for pets, but also for community animals. Highly recommend Pawpad to anyone looking for thoughtful, skilled, and compassionate grooming for their pets. \u{1F43E}",
    name: "Koganti Jahnavi",
    pet: "Pepsi \xB7 Community dog"
  },
  {
    quote: "We have been taking my pet to Pawpad for over two years, and we have always been so happy with the care and service they provide. The team is consistently kind, welcoming, and genuinely caring, which makes every visit a positive experience. Their service level is excellent, and they always treat my pet with patience, gentleness, and professionalism. It is clear that they truly love animals and take pride in their work. Our dog always comes back looking great and well cared for.",
    name: "Cidella",
    pet: "Long-time grooming client"
  },
  {
    quote: "Theishing and Tamang did an excellent job during my large-breed Golden Retriever's grooming session. I've never seen my dog this comfortable with both the environment and the people. I highly recommend this place \u2014 they cared for my pet as if it were their own. The service exceeded my expectations and was worth every penny. Most importantly, my dog clearly enjoyed the experience.",
    name: "Karen Wilma",
    pet: "Golden Retriever"
  }
];
function Testimonials() {
  const [i, setI] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((v) => (v + 1) % TESTIMONIALS.length), 6500);
    return () => clearInterval(t);
  }, [paused]);
  return /* @__PURE__ */ React.createElement("section", { className: "testi-section", onMouseEnter: () => setPaused(true), onMouseLeave: () => setPaused(false) }, /* @__PURE__ */ React.createElement("div", { className: "container" }, /* @__PURE__ */ React.createElement("div", { className: "testi-head reveal" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Word of paw"), /* @__PURE__ */ React.createElement("h2", { className: "h-1" }, "Trusted by humans ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "and their pets"))), /* @__PURE__ */ React.createElement("div", { className: "testi-stage reveal" }, TESTIMONIALS.map((t, idx) => /* @__PURE__ */ React.createElement("div", { key: idx, className: "testi-card " + (idx === i ? "active" : idx === (i + TESTIMONIALS.length - 1) % TESTIMONIALS.length ? "prev" : "next") }, /* @__PURE__ */ React.createElement("div", { className: "testi-body" }, /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 32 24", width: "38", className: "testi-quote-mark", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { fill: "currentColor", d: "M0 24V14C0 6 4 1 12 0v6c-4 1-6 4-6 8h6v10H0zm20 0V14c0-8 4-13 12-14v6c-4 1-6 4-6 8h6v10H20z" })), /* @__PURE__ */ React.createElement("p", { className: "testi-quote" }, t.quote), /* @__PURE__ */ React.createElement("div", { className: "testi-who" }, /* @__PURE__ */ React.createElement("strong", null, t.name), /* @__PURE__ */ React.createElement("span", null, t.pet)))))), /* @__PURE__ */ React.createElement("div", { className: "testi-controls" }, /* @__PURE__ */ React.createElement("button", { onClick: () => setI((i + TESTIMONIALS.length - 1) % TESTIMONIALS.length), "aria-label": "Previous testimonial" }, "\u2190"), /* @__PURE__ */ React.createElement("div", { className: "dots" }, TESTIMONIALS.map((_, idx) => /* @__PURE__ */ React.createElement("button", { key: idx, className: "dot " + (idx === i ? "on" : ""), onClick: () => setI(idx), "aria-label": `Testimonial ${idx + 1}` }))), /* @__PURE__ */ React.createElement("button", { onClick: () => setI((i + 1) % TESTIMONIALS.length), "aria-label": "Next testimonial" }, "\u2192"))), /* @__PURE__ */ React.createElement("style", null, `
        .testi-section { background: var(--champagne-soft); }
        .testi-head { margin-bottom: 64px; max-width: 720px; }
        .testi-stage { display: grid; }
        .testi-card {
          grid-area: 1 / 1;
          display: block;
          align-items: center;
          opacity: 0; transform: translateY(20px) scale(.98);
          transition: opacity .7s var(--ease), transform .7s var(--ease);
          pointer-events: none;
        }
        .testi-card.active { opacity: 1; transform: none; pointer-events: auto; }
        .testi-body { display: flex; flex-direction: column; gap: 24px; }
        .testi-quote-mark { color: var(--driftwood); opacity: .35; }
        .testi-quote {
          font-family: var(--f-display);
          font-size: clamp(24px, 2.4vw, 36px);
          line-height: 1.25;
          color: var(--ink);
          margin: 0;
        }
        .testi-who { display: flex; flex-direction: column; gap: 4px; margin-top: 8px; font-size: 14px; }
        .testi-who strong { font-weight: 700; }
        .testi-who span { color: var(--ink-mute); }
        .testi-controls {
          display: flex; align-items: center; justify-content: center; gap: 16px;
          margin-top: 40px;
        }
        .testi-controls button {
          width: 44px; height: 44px; border-radius: 50%;
          background: var(--white); display: inline-flex; align-items: center; justify-content: center;
          transition: all var(--t-fast) var(--ease);
          font-size: 18px;
        }
        .testi-controls button:hover { background: #2e2e2e; color: var(--white); }
        .dots { display: flex; gap: 8px; }
        .dot {
          width: 8px; height: 8px; border-radius: 50%; background: var(--ink); opacity: .2;
          transition: all var(--t-fast) var(--ease);
        }
        .dot.on { width: 28px; border-radius: 999px; opacity: 1; background: var(--driftwood); }
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          100% { border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%; }
        }
        @media (max-width: 800px) {
          .testi-stage { min-height: 560px; }
        }
      `));
}
function Marquee({ items }) {
  return /* @__PURE__ */ React.createElement("div", { className: "marquee", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("div", { className: "m-track" }, [...items, ...items, ...items].map((it, i) => /* @__PURE__ */ React.createElement("span", { key: i, className: "m-item" }, /* @__PURE__ */ React.createElement("span", null, it), /* @__PURE__ */ React.createElement(PawIcon, { size: 14, color: "currentColor" })))), /* @__PURE__ */ React.createElement("style", null, `
        .marquee { overflow: hidden; padding: 28px 0; background: #2e2e2e; color: var(--white); border-top: 1px solid color-mix(in oklab, var(--cream-bg), transparent 88%); border-bottom: 1px solid color-mix(in oklab, var(--cream-bg), transparent 88%); }
        .m-track { display: flex; gap: 56px; white-space: nowrap; animation: scroll 38s linear infinite; }
        body[data-motion="still"] .m-track { animation: none; }
        .m-item { display: inline-flex; align-items: center; gap: 24px; font-family: var(--f-display); font-size: clamp(28px, 3vw, 44px); }
        @keyframes scroll { from { transform: translateX(0); } to { transform: translateX(-33.333%); } }
      `));
}
const WA_NUMBER = "919663077496";
const WhatsAppIcon = ({ size = 26 }) => /* @__PURE__ */ React.createElement("svg", { viewBox: "0 0 32 32", width: size, height: size, fill: "currentColor", "aria-hidden": "true" }, /* @__PURE__ */ React.createElement("path", { d: "M16.02 3C9.4 3 4 8.4 4 15.02c0 2.65.87 5.1 2.35 7.09L4.9 29l7.09-1.84a11.9 11.9 0 0 0 4.03.7h.01c6.62 0 12.02-5.4 12.02-12.03C28.05 8.4 22.65 3 16.02 3zm0 21.86h-.01a9.85 9.85 0 0 1-5.02-1.37l-.36-.21-4.2 1.09 1.12-4.09-.24-.42a9.86 9.86 0 0 1-1.5-5.23c0-5.45 4.44-9.89 9.9-9.89 2.65 0 5.13 1.03 7.01 2.9a9.83 9.83 0 0 1 2.9 7.01c0 5.45-4.45 9.89-9.9 9.89h-.01zm5.42-7.41c-.3-.15-1.75-.87-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.94 1.16-.17.2-.35.22-.65.07-.3-.15-1.24-.46-2.36-1.47a8.86 8.86 0 0 1-1.63-2.03c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.87 1.22 3.07c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.75-.72 2-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35z" }));
function WhatsAppFloat() {
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement(
    "a",
    {
      href: `https://wa.me/${WA_NUMBER}`,
      target: "_blank",
      rel: "noopener noreferrer",
      className: "wa-float hover-zone",
      "aria-label": "Chat with Pawpad on WhatsApp"
    },
    /* @__PURE__ */ React.createElement("span", { className: "wa-ring", "aria-hidden": "true" }),
    /* @__PURE__ */ React.createElement(WhatsAppIcon, { size: 26 }),
    /* @__PURE__ */ React.createElement("span", { className: "wa-tip desktop-only" }, "Chat on WhatsApp")
  ), /* @__PURE__ */ React.createElement("style", null, `
        .wa-float {
          position: fixed;
          right: clamp(16px, 3vw, 28px);
          bottom: calc(clamp(16px, 3vw, 28px) + env(safe-area-inset-bottom, 0px));
          z-index: 40;
          width: 58px; height: 58px;
          border-radius: 50%;
          display: inline-flex; align-items: center; justify-content: center;
          background: var(--driftwood);
          color: var(--white);
          box-shadow: 0 14px 30px -12px color-mix(in oklab, var(--ink), transparent 45%);
          transition: transform var(--t-fast) var(--ease), background var(--t-fast) var(--ease), box-shadow var(--t-fast) var(--ease);
        }
        .wa-float:hover { background: var(--driftwood-deep); transform: translateY(-3px); }
        .wa-ring {
          position: absolute; inset: 0; border-radius: 50%;
          border: 1px solid var(--driftwood);
          opacity: 0;
          animation: waPulse 2.6s var(--ease) infinite;
          pointer-events: none;
        }
        body[data-motion="still"] .wa-ring { display: none; }
        @keyframes waPulse {
          0% { transform: scale(1); opacity: .55; }
          100% { transform: scale(1.55); opacity: 0; }
        }
        .wa-tip {
          position: absolute; right: calc(100% + 12px); top: 50%;
          transform: translateY(-50%) translateX(6px);
          background: var(--ink); color: var(--cream-bg);
          padding: 8px 14px; border-radius: 999px;
          font-family: var(--f-body); font-size: 13px; font-weight: 600; white-space: nowrap;
          opacity: 0; pointer-events: none;
          transition: opacity var(--t-fast) var(--ease), transform var(--t-fast) var(--ease);
        }
        .wa-float:hover .wa-tip { opacity: 1; transform: translateY(-50%) translateX(0); }
        @media (max-width: 700px) {
          .wa-float { width: 52px; height: 52px; }
        }
      `));
}
Object.assign(window, {
  PawIcon,
  Arrow,
  useReveal,
  hrefFor,
  ROUTE_HREF,
  CursorTrail,
  TopNav,
  Footer,
  Testimonials,
  Marquee,
  NAV_ITEMS,
  WhatsAppFloat
});