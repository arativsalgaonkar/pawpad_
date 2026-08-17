/* Auto-converted from JSX to plain JavaScript (React.createElement) so no
   build step is required to deploy this file — it runs as-is in the browser.
   Source of truth for future edits: the vendor-original/ or the original
   JSX authoring; edit this file directly going forward since JSX has been
   dropped from this project entirely. */
const { useState: useStateB, useEffect: useEffectB, useRef: useRefB } = React;
const BOOKING_SERVICES = [
  { key: "grooming", title: "Grooming", desc: "Dog or cat grooming session", icon: "\u2702", price: "From \u20B91,000" },
  { key: "courses", title: "Courses", desc: "Professional pet grooming course", icon: "\u2726", price: "Enquiry" },
  { key: "boarding", title: "Boarding", desc: "Comfort-led boarding enquiry", icon: "B", price: "Trial day" }
];
const PET_TYPES = ["Dog", "Cat"];
const COAT_TYPES = ["Short", "Medium", "Long"];
const SIZES = ["Small (<10kg)", "Medium (10\u201325kg)", "Large (25kg+)"];
const TEMPERAMENTS = ["Chill", "Excitable", "Anxious", "First time"];
function generateDates() {
  const days = [];
  const today = /* @__PURE__ */ new Date();
  for (let i = 1; i <= 14; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}
const TIMES = ["10:00", "11:30", "13:00", "14:30", "16:00", "17:30"];
function BookingModal({ open, onClose, initialService }) {
  const [step, setStep] = useStateB(0);
  const [data, setData] = useStateB({
    service: initialService || null,
    petType: null,
    petName: "",
    breed: "",
    age: "",
    coat: null,
    size: null,
    temperament: null,
    notes: "",
    date: null,
    time: null,
    dateFrom: "",
    dateTo: "",
    name: "",
    email: "",
    phone: ""
  });
  useEffectB(() => {
    if (open) {
      setStep(initialService === "courses" ? 10 : initialService === "boarding" ? 11 : 0);
      setData((d) => ({ ...d, service: initialService || d.service }));
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open, initialService]);
  if (!open) return null;
  const upd = (k, v) => setData((d) => ({ ...d, [k]: v }));
  const STEPS = [
    { label: "Service" },
    { label: "Pet" },
    { label: "When" },
    { label: "You" },
    { label: "Done" }
  ];
  const canNext = () => {
    if (step === 0) return !!data.service;
    if (step === 1) return data.petType && data.petName && data.size && data.temperament;
    if (step === 2) return data.date && data.time;
    if (step === 3) return data.name && data.phone && data.email;
    if (step === 10) return data.name && data.phone && data.email;
    if (step === 11) return data.name && data.phone && data.email && data.breed && data.dateFrom && data.dateTo;
    return true;
  };
  const next = () => {
    if (!canNext()) return;
    if (step === 10 || step === 11) return setStep(4);
    if (step < STEPS.length - 1) setStep((s) => s + 1);
  };
  const prev = () => {
    if (step === 10 || step === 11) return setStep(0);
    if (step > 0) setStep((s) => s - 1);
  };
  return /* @__PURE__ */ React.createElement("div", { className: "booking-modal", role: "dialog", "aria-modal": "true" }, /* @__PURE__ */ React.createElement("div", { className: "booking-backdrop", onClick: onClose }), /* @__PURE__ */ React.createElement("div", { className: "booking-panel" }, /* @__PURE__ */ React.createElement("button", { className: "booking-close", onClick: onClose, "aria-label": "Close booking" }, "\xD7"), step < 10 && /* @__PURE__ */ React.createElement("div", { className: "booking-stepper" }, STEPS.map((s, i) => /* @__PURE__ */ React.createElement("div", { key: s.label, className: "b-stepper-item " + (i === step ? "on" : i < step ? "done" : "") }, /* @__PURE__ */ React.createElement("span", { className: "b-step-no" }, i < step ? "\u2713" : i + 1), /* @__PURE__ */ React.createElement("span", { className: "b-step-label" }, s.label)))), /* @__PURE__ */ React.createElement("div", { className: "booking-body" }, step === 0 && /* @__PURE__ */ React.createElement(StepService, { data, upd, onPick: (v) => {
    upd("service", v);
    setTimeout(() => setStep(v === "courses" ? 10 : v === "boarding" ? 11 : 1), 200);
  } }), step === 1 && /* @__PURE__ */ React.createElement(StepPet, { data, upd }), step === 2 && /* @__PURE__ */ React.createElement(StepWhen, { data, upd }), step === 3 && /* @__PURE__ */ React.createElement(StepYou, { data, upd }), step === 10 && /* @__PURE__ */ React.createElement(StepCourseEnquiry, { data, upd }), step === 11 && /* @__PURE__ */ React.createElement(StepBoardingEnquiry, { data, upd }), step === 4 && /* @__PURE__ */ React.createElement(StepDone, { data, onClose })), step !== 4 && /* @__PURE__ */ React.createElement("div", { className: "booking-footer" }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-ghost", onClick: prev, disabled: step === 0, style: { opacity: step === 0 ? 0.3 : 1 } }, "\u2190 Back"), /* @__PURE__ */ React.createElement("div", { className: "booking-foot-spacer" }), step === 3 || step === 10 || step === 11 ? /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: () => {
    if (!canNext()) return;
    const type = step === 10 ? "courses" : step === 11 ? "boarding" : data.service || "grooming";
    window.hsSubmit && window.hsSubmit(type, data);
    setStep(4);
  }, disabled: !canNext(), style: { opacity: canNext() ? 1 : 0.4 } }, step === 3 ? "Confirm booking" : "Send enquiry", " ", /* @__PURE__ */ React.createElement(Arrow, null)) : /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: next, disabled: !canNext(), style: { opacity: canNext() ? 1 : 0.4 } }, "Continue ", /* @__PURE__ */ React.createElement(Arrow, null)))), /* @__PURE__ */ React.createElement("style", null, `
        .booking-modal {
          position: fixed; inset: 0; z-index: 100;
          display: flex; align-items: center; justify-content: center;
          padding: 16px;
          animation: bookingIn .25s var(--ease) both;
        }
        @keyframes bookingIn { from { opacity: 0; } to { opacity: 1; } }
        .booking-backdrop {
          position: absolute; inset: 0;
          background: color-mix(in oklab, var(--ink), transparent 25%);
          backdrop-filter: blur(8px);
        }
        .booking-panel {
          position: relative;
          width: 100%; max-width: 880px;
          max-height: 92vh;
          background: var(--cream-bg);
          border-radius: 28px;
          display: flex; flex-direction: column;
          overflow: hidden;
          box-shadow: 0 30px 80px -30px color-mix(in oklab, var(--ink), transparent 40%);
          animation: bookingPanel .4s var(--ease) both;
        }
        @keyframes bookingPanel { from { opacity: 0; transform: translateY(20px) scale(.98); } to { opacity: 1; transform: none; } }
        .booking-close {
          position: absolute; top: 18px; right: 22px;
          width: 40px; height: 40px; border-radius: 50%;
          background: var(--white);
          font-size: 26px; line-height: 1;
          z-index: 5;
        }
        body[data-palette="dark"] .booking-close { background: color-mix(in oklab, var(--champagne), black 8%); }
        .booking-close:hover { background: var(--ink); color: var(--cream-bg); }
        .booking-stepper {
          display: flex; align-items: center; gap: 8px;
          padding: 28px 32px 16px;
          flex-wrap: wrap;
        }
        .b-stepper-item {
          display: flex; align-items: center; gap: 8px;
          font-size: 12px; color: var(--ink-mute);
          flex: 1; min-width: 0; padding-right: 16px; position: relative;
        }
        .b-stepper-item:not(:last-child)::after {
          content: ""; height: 1px; flex: 1;
          background: color-mix(in oklab, var(--ink), transparent 85%);
          margin-left: 8px;
        }
        .b-step-no {
          display: inline-flex; align-items: center; justify-content: center;
          width: 26px; height: 26px; border-radius: 50%;
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 85%);
          font-weight: 600; font-size: 12px; flex-shrink: 0;
        }
        body[data-palette="dark"] .b-step-no { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-stepper-item.on { color: var(--ink); }
        .b-stepper-item.on .b-step-no { background: var(--ink); color: var(--cream-bg); border-color: var(--ink); }
        .b-stepper-item.done .b-step-no { background: var(--driftwood); color: var(--white); border-color: var(--driftwood); }
        .b-step-label { font-size: 12px; font-weight: 600; letter-spacing: .04em; white-space: nowrap; }
        .booking-body { flex: 1; overflow-y: auto; padding: 12px 32px 24px; }
        .booking-footer {
          display: flex; align-items: center;
          padding: 18px 32px;
          background: var(--white);
          border-top: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          gap: 14px;
        }
        body[data-palette="dark"] .booking-footer { background: color-mix(in oklab, var(--champagne), black 8%); }
        .booking-foot-spacer { flex: 1; }
        .b-step-title { font-family: var(--f-display); font-size: clamp(28px, 3vw, 38px); margin: 12px 0 6px; }
        .b-step-sub { color: var(--ink-mute); margin: 0 0 28px; font-size: 15px; }
        .b-grid-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
        .b-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
        .b-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px; }
        .b-choice {
          padding: 18px 20px; background: var(--white);
          border-radius: 16px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          text-align: left; display: flex; align-items: center; gap: 14px;
          transition: all var(--t-fast) var(--ease); cursor: pointer;
        }
        body[data-palette="dark"] .b-choice { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-choice:hover { border-color: var(--driftwood); transform: translateY(-2px); }
        .b-choice.on { border-color: var(--driftwood); background: var(--champagne-soft); }
        .b-choice-icon {
          width: 44px; height: 44px; background: var(--champagne); color: var(--driftwood-deep);
          border-radius: 12px; display: inline-flex; align-items: center; justify-content: center;
          font-size: 20px; flex-shrink: 0;
        }
        .b-choice-text { flex: 1; }
        .b-choice-text h4 { font-family: var(--f-display); font-size: 20px; margin: 0; }
        .b-choice-text p { margin: 2px 0 0; font-size: 13px; color: var(--ink-mute); }
        .b-choice-price { font-size: 13px; font-weight: 600; color: var(--driftwood); }
        .b-pill {
          padding: 12px 18px; border-radius: 999px;
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          font-size: 14px; font-weight: 500;
          transition: all var(--t-fast) var(--ease); cursor: pointer;
        }
        body[data-palette="dark"] .b-pill { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-pill:hover { border-color: var(--driftwood); }
        .b-pill.on { background: var(--ink); color: var(--cream-bg); border-color: var(--ink); }
        .b-pill-row { display: flex; flex-wrap: wrap; gap: 10px; }
        @media (max-width: 700px) {
          .booking-panel { max-height: 96vh; border-radius: 22px; }
          .booking-stepper { padding: 20px 20px 8px; gap: 4px; }
          .b-stepper-item { padding-right: 6px; }
          .b-step-label { display: none; }
          .b-stepper-item.on .b-step-label { display: inline; }
          .booking-body { padding: 8px 20px 20px; }
          .booking-footer { padding: 16px 20px; }
          .b-grid-2, .b-grid-3, .b-grid-4 { grid-template-columns: 1fr; }
        }
      `));
}
function StepCourseEnquiry({ data, upd }) {
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Course Enquiry"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "Tell us where to reach you"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "No grooming questions here. Share your details and the Pawpad team will help you with course dates, batch availability, and next steps."), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Your name"), /* @__PURE__ */ React.createElement("input", { value: data.name, onChange: (e) => upd("name", e.target.value), placeholder: "Your name" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Phone Number"), /* @__PURE__ */ React.createElement("input", { type: "tel", value: data.phone, onChange: (e) => upd("phone", e.target.value), placeholder: "96630 77496" }))), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Email id"), /* @__PURE__ */ React.createElement("input", { type: "email", value: data.email, onChange: (e) => upd("email", e.target.value), placeholder: "you@example.com" })));
}
function StepBoardingEnquiry({ data, upd }) {
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Boarding Enquiry"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "A few details for the trial day"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "Share your details and preferred stay dates. We'll get in touch with you shortly."), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Name"), /* @__PURE__ */ React.createElement("input", { value: data.name, onChange: (e) => upd("name", e.target.value), placeholder: "Your name" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Breed"), /* @__PURE__ */ React.createElement("input", { value: data.breed, onChange: (e) => upd("breed", e.target.value), placeholder: "e.g. Indie / Beagle" }))), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement("input", { type: "email", value: data.email, onChange: (e) => upd("email", e.target.value), placeholder: "you@example.com" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Phone Number"), /* @__PURE__ */ React.createElement("input", { type: "tel", value: data.phone, onChange: (e) => upd("phone", e.target.value), placeholder: "96630 77496" }))), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2" }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Date - From"), /* @__PURE__ */ React.createElement("input", { type: "date", value: data.dateFrom, onChange: (e) => upd("dateFrom", e.target.value) })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Date - To"), /* @__PURE__ */ React.createElement("input", { type: "date", value: data.dateTo, onChange: (e) => upd("dateTo", e.target.value) }))));
}
function StepService({ data, upd, onPick }) {
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Step 01 \xB7 Service"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "What can we do for your pet?"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "Pick the service you'd like to book. You can always change this later."), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2" }, BOOKING_SERVICES.map((s) => /* @__PURE__ */ React.createElement("button", { key: s.key, className: "b-choice " + (data.service === s.key ? "on" : ""), onClick: () => onPick(s.key) }, /* @__PURE__ */ React.createElement("span", { className: "b-choice-icon" }, s.icon), /* @__PURE__ */ React.createElement("div", { className: "b-choice-text" }, /* @__PURE__ */ React.createElement("h4", null, s.title), /* @__PURE__ */ React.createElement("p", null, s.desc)), /* @__PURE__ */ React.createElement("span", { className: "b-choice-price" }, s.price)))));
}
function StepPet({ data, upd }) {
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Step 02 \xB7 Your pet"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "Tell us about them"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "The more we know, the better we can plan their session."), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", null, "Pet type"), /* @__PURE__ */ React.createElement("div", { className: "b-pill-row" }, PET_TYPES.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, className: "b-pill " + (data.petType === t ? "on" : ""), onClick: () => upd("petType", t) }, t)))), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Name"), /* @__PURE__ */ React.createElement("input", { value: data.petName, onChange: (e) => upd("petName", e.target.value), placeholder: "e.g. Biscuit" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Breed (or 'indie')"), /* @__PURE__ */ React.createElement("input", { value: data.breed, onChange: (e) => upd("breed", e.target.value), placeholder: "e.g. Indie / Golden Retriever" }))), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Age"), /* @__PURE__ */ React.createElement("input", { value: data.age, onChange: (e) => upd("age", e.target.value), placeholder: "e.g. 3 years" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Coat"), /* @__PURE__ */ React.createElement("div", { className: "b-pill-row" }, COAT_TYPES.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, className: "b-pill " + (data.coat === t ? "on" : ""), onClick: () => upd("coat", t) }, t))))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", null, "Size"), /* @__PURE__ */ React.createElement("div", { className: "b-pill-row" }, SIZES.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, className: "b-pill " + (data.size === t ? "on" : ""), onClick: () => upd("size", t) }, t)))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginBottom: 20 } }, /* @__PURE__ */ React.createElement("label", null, "Temperament during grooming"), /* @__PURE__ */ React.createElement("div", { className: "b-pill-row" }, TEMPERAMENTS.map((t) => /* @__PURE__ */ React.createElement("button", { key: t, className: "b-pill " + (data.temperament === t ? "on" : ""), onClick: () => upd("temperament", t) }, t)))), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Anything we should know?"), /* @__PURE__ */ React.createElement("textarea", { rows: "3", value: data.notes, onChange: (e) => upd("notes", e.target.value), placeholder: "Past grooming trauma, ticklish spots, recent vet visits, allergies..." })));
}
function StepWhen({ data, upd }) {
  const dates = generateDates();
  const fmt = (d, opts) => d.toLocaleDateString("en-IN", opts);
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Step 03 \xB7 Date & time"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "When works for you?"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "We space appointments out. If your slot is full, the next available one is just a day away."), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginBottom: 24 } }, /* @__PURE__ */ React.createElement("label", null, "Pick a date"), /* @__PURE__ */ React.createElement("div", { className: "b-date-strip" }, dates.map((d, i) => {
    const iso = d.toISOString().slice(0, 10);
    const isOn = data.date === iso;
    const isFull = d.getDay() === 4;
    return /* @__PURE__ */ React.createElement("button", { key: iso, className: "b-date " + (isOn ? "on" : "") + (isFull ? " full" : ""), onClick: () => !isFull && upd("date", iso), disabled: isFull }, /* @__PURE__ */ React.createElement("span", { className: "b-date-dow" }, fmt(d, { weekday: "short" })), /* @__PURE__ */ React.createElement("span", { className: "b-date-day" }, d.getDate()), /* @__PURE__ */ React.createElement("span", { className: "b-date-mo" }, fmt(d, { month: "short" })), isFull && /* @__PURE__ */ React.createElement("span", { className: "b-date-full" }, "Closed"));
  }))), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Pick a time"), /* @__PURE__ */ React.createElement("div", { className: "b-time-grid" }, TIMES.map((t) => {
    const isOn = data.time === t;
    return /* @__PURE__ */ React.createElement("button", { key: t, className: "b-time " + (isOn ? "on" : ""), onClick: () => upd("time", t) }, t);
  }))), /* @__PURE__ */ React.createElement("style", null, `
        .b-date-strip {
          display: flex; gap: 10px; overflow-x: auto; padding: 4px 2px 14px;
          scroll-snap-type: x mandatory;
        }
        .b-date {
          flex: 0 0 80px; padding: 14px 0;
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          border-radius: 14px;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
          font-family: var(--f-body); color: var(--ink);
          transition: all var(--t-fast) var(--ease);
          scroll-snap-align: start; position: relative; cursor: pointer;
        }
        body[data-palette="dark"] .b-date { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-date:hover:not(:disabled) { border-color: var(--driftwood); transform: translateY(-2px); }
        .b-date.on { background: var(--ink); color: var(--cream-bg); border-color: var(--ink); }
        .b-date.full { opacity: .4; cursor: not-allowed; }
        .b-date-dow { font-size: 11px; letter-spacing: .12em; text-transform: uppercase; color: var(--ink-mute); }
        .b-date.on .b-date-dow { color: var(--champagne); }
        .b-date-day { font-family: var(--f-display); font-size: 26px; line-height: 1; }
        .b-date-mo { font-size: 11px; color: var(--ink-mute); }
        .b-date.on .b-date-mo { color: var(--champagne); }
        .b-date-full { font-size: 9px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-mute); margin-top: 2px; }
        .b-time-grid { display: grid; grid-template-columns: repeat(6, 1fr); gap: 10px; }
        .b-time {
          padding: 14px 0; background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          border-radius: 12px;
          font-family: var(--f-display); font-size: 18px;
          transition: all var(--t-fast) var(--ease); color: var(--ink); cursor: pointer;
          display: flex; flex-direction: column; align-items: center; gap: 2px;
        }
        body[data-palette="dark"] .b-time { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-time:hover:not(:disabled) { border-color: var(--driftwood); transform: translateY(-2px); }
        .b-time.on { background: var(--driftwood); color: var(--white); border-color: var(--driftwood); }
        .b-time.full { opacity: .35; cursor: not-allowed; }
        .b-time span { font-family: var(--f-body); font-size: 10px; letter-spacing: .1em; text-transform: uppercase; color: var(--ink-mute); }
        @media (max-width: 700px) {
          .b-time-grid { grid-template-columns: repeat(3, 1fr); }
          .b-date { flex: 0 0 72px; }
        }
      `));
}
function StepYou({ data, upd }) {
  var _a;
  return /* @__PURE__ */ React.createElement("div", { className: "step" }, /* @__PURE__ */ React.createElement("p", { className: "eyebrow" }, "Step 04 \xB7 Your details"), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title" }, "Last bit Promise"), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub" }, "We'll send confirmation by WhatsApp and email."), /* @__PURE__ */ React.createElement("div", { className: "b-grid-2", style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Your name"), /* @__PURE__ */ React.createElement("input", { value: data.name, onChange: (e) => upd("name", e.target.value), placeholder: "e.g. Anjali Rao" })), /* @__PURE__ */ React.createElement("div", { className: "field" }, /* @__PURE__ */ React.createElement("label", null, "Phone (WhatsApp)"), /* @__PURE__ */ React.createElement("input", { type: "tel", value: data.phone, onChange: (e) => upd("phone", e.target.value), placeholder: "+91 98765 43210" }))), /* @__PURE__ */ React.createElement("div", { className: "field", style: { marginBottom: 18 } }, /* @__PURE__ */ React.createElement("label", null, "Email"), /* @__PURE__ */ React.createElement("input", { type: "email", value: data.email, onChange: (e) => upd("email", e.target.value), placeholder: "you@example.com" })), /* @__PURE__ */ React.createElement("div", { className: "booking-summary" }, /* @__PURE__ */ React.createElement("h4", null, "Booking summary"), /* @__PURE__ */ React.createElement("dl", null, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Service"), /* @__PURE__ */ React.createElement("dd", null, ((_a = BOOKING_SERVICES.find((s) => s.key === data.service)) == null ? void 0 : _a.title) || "\u2014")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "Pet"), /* @__PURE__ */ React.createElement("dd", null, data.petName || "\u2014", " ", data.breed ? `\xB7 ${data.breed}` : "")), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("dt", null, "When"), /* @__PURE__ */ React.createElement("dd", null, data.date ? new Date(data.date).toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "short" }) : "\u2014", " ", data.time ? `\xB7 ${data.time}` : "")))), /* @__PURE__ */ React.createElement("style", null, `
        .booking-summary {
          margin-top: 16px; padding: 22px 24px;
          background: var(--champagne-soft); border-radius: 16px;
        }
        .booking-summary h4 { font-family: var(--f-body); font-size: 11px; font-weight: 700; letter-spacing: .2em; text-transform: uppercase; color: var(--ink-mute); margin: 0 0 12px; }
        .booking-summary dl { margin: 0; display: flex; flex-direction: column; gap: 6px; }
        .booking-summary dl > div { display: flex; gap: 16px; align-items: baseline; }
        .booking-summary dt { font-size: 12px; color: var(--ink-mute); width: 80px; flex-shrink: 0; }
        .booking-summary dd { margin: 0; font-family: var(--f-display); font-size: 18px; color: var(--ink); }
      `));
}
function StepDone({ data, onClose }) {
  return /* @__PURE__ */ React.createElement("div", { className: "step done-step" }, /* @__PURE__ */ React.createElement("div", { className: "done-paw-burst" }, /* @__PURE__ */ React.createElement(PawIcon, { size: 48, color: "var(--driftwood)" }), /* @__PURE__ */ React.createElement("span", { className: "ring r1" }), /* @__PURE__ */ React.createElement("span", { className: "ring r2" }), /* @__PURE__ */ React.createElement("span", { className: "ring r3" })), /* @__PURE__ */ React.createElement("h2", { className: "b-step-title", style: { textAlign: "center" } }, "Sent ", /* @__PURE__ */ React.createElement("em", { className: "italic", style: { color: "var(--driftwood)" } }, "We'll be in touch")), /* @__PURE__ */ React.createElement("p", { className: "b-step-sub", style: { textAlign: "center", maxWidth: "48ch", margin: "0 auto 32px" } }, "Your request is in. We'll confirm by WhatsApp within a few hours, usually faster. Anything urgent, give us a call."), /* @__PURE__ */ React.createElement("div", { className: "done-card" }, /* @__PURE__ */ React.createElement("div", { className: "done-paw" }, /* @__PURE__ */ React.createElement(PawIcon, { size: 20, color: "var(--driftwood)" })), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("div", { className: "eyebrow" }, "Reference"), /* @__PURE__ */ React.createElement("h3", { style: { fontFamily: "var(--f-display)", fontSize: 28, margin: "4px 0 0" } }, "PP-", Date.now().toString().slice(-6))), /* @__PURE__ */ React.createElement("div", { style: { textAlign: "right", borderLeft: "1px solid color-mix(in oklab, var(--ink), transparent 88%)", paddingLeft: 24 } }, /* @__PURE__ */ React.createElement("div", { className: "eyebrow", style: { justifyContent: "flex-end" } }, "Booked for"), /* @__PURE__ */ React.createElement("p", { style: { margin: "4px 0 0", fontFamily: "var(--f-display)", fontSize: 18 } }, data.date ? new Date(data.date).toLocaleDateString("en-IN", { weekday: "short", day: "numeric", month: "short" }) : "\u2014", /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("span", { style: { color: "var(--driftwood)" } }, data.time)))), /* @__PURE__ */ React.createElement("div", { style: { display: "flex", justifyContent: "center", gap: 12, marginTop: 36 } }, /* @__PURE__ */ React.createElement("button", { className: "btn btn-primary", onClick: onClose }, "Close ", /* @__PURE__ */ React.createElement(Arrow, null)), /* @__PURE__ */ React.createElement("a", { className: "btn btn-ghost", href: "https://wa.me/919663077496", target: "_blank", rel: "noopener" }, "Open WhatsApp ", /* @__PURE__ */ React.createElement(Arrow, null))), /* @__PURE__ */ React.createElement("style", null, `
        .done-step { padding: 32px 0; }
        .done-paw-burst {
          position: relative; width: 120px; height: 120px;
          margin: 0 auto 24px;
          display: flex; align-items: center; justify-content: center;
        }
        .done-paw-burst svg { position: relative; z-index: 2; animation: pawPop .7s var(--ease) both; }
        .ring {
          position: absolute; inset: 0;
          border: 1px solid var(--driftwood); border-radius: 50%;
          opacity: 0; animation: ringPulse 2.4s var(--ease) infinite;
        }
        .ring.r1 { animation-delay: 0s; }
        .ring.r2 { animation-delay: .6s; }
        .ring.r3 { animation-delay: 1.2s; }
        @keyframes pawPop {
          0% { transform: scale(.5); opacity: 0; }
          70% { transform: scale(1.1); opacity: 1; }
          100% { transform: scale(1); opacity: 1; }
        }
        @keyframes ringPulse {
          0% { transform: scale(.7); opacity: .7; }
          100% { transform: scale(2); opacity: 0; }
        }
        .done-card {
          display: grid; grid-template-columns: auto 1fr auto; gap: 24px;
          align-items: center; padding: 22px 28px;
          background: var(--white); border-radius: 18px;
          max-width: 560px; margin: 0 auto;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
        }
        body[data-palette="dark"] .done-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .done-paw {
          width: 48px; height: 48px; border-radius: 50%;
          background: var(--champagne); display: inline-flex; align-items: center; justify-content: center;
        }
        @media (max-width: 600px) {
          .done-card { grid-template-columns: 1fr; text-align: center; }
          .done-card > div:last-child { border-left: 0 !important; padding-left: 0 !important; text-align: center !important; }
        }
      `));
}
Object.assign(window, { BookingModal });
