/* services-pages.jsx — Courses, Boarding, Myotherapy */

const { useState: useStateP } = React;

/* ============ COURSES ============ */
const COURSE_LIST = [
  {
    key: "professional-pet-4week",
    title: "4-Week Professional Pet Grooming Certificate (Dogs & Cats)",
    duration: "4 weeks · Monday–Friday",
    summary: "Professional hands-on training in both dog and cat grooming",
    spots: "Small batches · Hands-on training",
    price: "Enquire",
    img: "assets/img/pawpad/courses-cover-new.png",
    for: "Aspiring professional pet groomers who want comprehensive training in both dog and cat grooming, with the confidence to work in salons or establish their own grooming studio.",
    learn: "Professional grooming techniques, pet handling, breed and coat assessment, grooming equipment and hygiene, pet first aid, studio operations, customer communication, branding, and business fundamentals.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and guidance on setting up your own grooming studio.",
  },
  {
    key: "professional-dog-3week",
    title: "3-Week Professional Dog Grooming Certificate",
    duration: "3 weeks · Monday–Friday",
    summary: "Professional hands-on training focused on dog grooming",
    spots: "Small batches · Hands-on training",
    price: "Enquire",
    img: "assets/img/pawpad/course-dog-grooming.png",
    for: "Beginners and aspiring professional dog groomers looking to build industry-ready practical skills and begin a career in dog grooming.",
    learn: "Breed-specific grooming, bathing, drying, de-shedding, coat care, scissoring techniques, nail trimming, pet handling, equipment maintenance, first aid, and professional salon practices.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and business guidance for those looking to establish their own grooming studio.",
  },
  {
    key: "professional-cat-3week",
    title: "3-Week Professional Cat Grooming Certificate",
    duration: "3 weeks · Monday–Friday",
    summary: "Professional hands-on training focused on cat grooming",
    spots: "Small batches · Hands-on training",
    price: "Enquire",
    img: "assets/img/pawpad/course-cat-grooming.png",
    for: "Beginners and aspiring professional cat groomers who want specialised feline grooming skills in a practical studio environment.",
    learn: "Cat handling, coat assessment, bathing, drying, de-matting, hygiene grooming, nail trimming, equipment care, feline first aid awareness, and professional grooming practices.",
    includes: "Professional Certificate upon successful practical assessment, placement facilitation, and business guidance for setting up your own grooming studio.",
  },
  {
    key: "weekend-professional-pet",
    title: "Weekend Professional Pet Grooming Certificate (Dogs & Cats)",
    duration: "8 weekends (16 sessions) · Saturdays & Sundays · 9:30 AM–5:30 PM",
    summary: "Professional hands-on training covering both dog and cat grooming",
    spots: "Flexible weekend learning",
    price: "Enquire",
    img: "assets/img/pawpad/courses-cover-new.png",
    for: "Working professionals, students, or career changers who want to become professional pet groomers without stepping away from their weekday commitments. This course follows the same curriculum, practical training, and professional certification as the weekday intensive programme, delivered over weekends.",
  },
  {
    key: "weekend-professional-dog",
    title: "Weekend Professional Dog Grooming Certificate",
    duration: "6 weekends (12 sessions) · Saturdays & Sundays · 9:30 AM–5:30 PM",
    summary: "Professional hands-on training focused on dog grooming",
    spots: "Flexible weekend learning",
    price: "Enquire",
    img: "assets/img/pawpad/course-dog-grooming.png",
    for: "Beginners, pet parents, and aspiring dog groomers who need the flexibility of weekend learning while developing practical, industry-ready dog grooming skills. The course mirrors the weekday programme but is spread across weekend sessions for greater convenience.",
  },
  {
    key: "weekend-professional-cat",
    title: "Weekend Professional Cat Grooming Certificate",
    duration: "6 weekends (12 sessions) · Saturdays & Sundays · 9:30 AM–5:30 PM",
    summary: "Professional hands-on training focused on cat grooming",
    spots: "Flexible weekend learning",
    price: "Enquire",
    img: "assets/img/pawpad/course-cat-grooming.png",
    for: "Beginners, pet parents, and aspiring cat groomers looking to build professional feline grooming skills while balancing work, studies, or other commitments. This flexible weekend programme delivers the same hands-on learning and professional certification as the weekday course.",
  },
  {
    key: "dog-1week",
    title: "1-Week Dog Grooming – Foundation Certificate",
    duration: "5 days · Monday–Friday",
    spots: "Maximum of two students at a time",
    price: "Rs. 35,000",
    deposit: "Non-refundable deposit: Rs. 14,000",
    balance: "Balance Rs. 21,000 payable on Day 1",
    img: "assets/img/pawpad/course-dog-grooming.png",
    for: "Beginners who want hands-on, practical grooming skills in a shorter, intensive format. Practical sessions use dogs already accustomed to grooming and handling. This is a narrower-scope certificate than our 3-week Professional Certificate — it does not include the studio-setup/business module or placement facilitation.",
    curriculum: [
      { day: "Day 1 — Equipment, Safety & Assessment", items: ["Use, clean and sterilise grooming equipment", "Canine anatomy basics", "Breed and coat type identification", "Handling techniques for calm dogs"] },
      { day: "Day 2 — Bathing & Coat Care", items: ["Bathing technique", "Drying techniques", "Deshedding", "Ear and eye cleaning"] },
      { day: "Day 3 — Maintenance Skills", items: ["Nail clipping", "Brush and comb technique", "Dematting and knot removal", "Hygiene clip"] },
      { day: "Day 4 — Scissoring Fundamentals", items: ["Scissoring technique for light shaping and finishing touches — taught and practiced on a training model, not a live dog. Does not cover a complete haircut or face trimming."] },
      { day: "Day 5 — First Aid & Assessment", items: ["First aid essentials — preparing for emergencies, recognising signs of distress", "Practical skills assessment covering bathing, drying, brushing, nail trim and hygiene clip on live dogs", "Scissoring is assessed as a finishing touch on the training model — light shaping and blending, not a complete haircut or face trimming, which require more time than this format allows", "Foundation Certificate awarded"] },
    ],
    certificate: "On successful completion, students receive a Foundation Certificate in Dog Grooming. Please note: this reflects course attendance and practical skill-building, and is distinct from our 3-week Professional Certificate.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. A missed day within the 5-day course cannot be made up within that batch, as the format is sequential and each day builds on the last. At Pawpad's discretion, a student may repeat the missed day(s) in a later batch at an additional fee, or repeat the full course at a reduced re-enrolment rate. No refund is made for days not attended.",
  },
  {
    key: "cat-1week",
    title: "1-Week Cat Grooming – Foundation Certificate",
    duration: "5 days · Monday–Friday",
    spots: "Maximum of two students at a time",
    price: "Rs. 35,000",
    deposit: "Non-refundable deposit: Rs. 14,000",
    balance: "Balance Rs. 21,000 payable on Day 1",
    img: "assets/img/pawpad/course-cat-grooming.png",
    for: "Beginners who want hands-on, practical cat grooming skills in a shorter, intensive format. This is a narrower-scope certificate than our 3-week Professional Certificate — it does not include the studio-setup/business module or placement facilitation.",
    curriculum: [
      { day: "Day 1 — Feline Handling & Assessment", items: ["Feline anatomy basics", "Reading feline stress signals", "Low-stress restraint and handling", "Grooming equipment"] },
      { day: "Day 2 — Bathing & Coat Care", items: ["Bathing technique", "Ear and eye cleaning", "Nail trimming"] },
      { day: "Day 3 — Maintenance Skills", items: ["Brushing technique", "Dematting", "Deshedding"] },
      { day: "Day 4 — Clip Demonstration, Skills Review & First Aid", items: ["Sanitary clip and basic lion-clip technique — demonstrated by the facilitator only", "Supervised review and practice of bathing, brushing, dematting and nail trim technique", "First aid essentials — preparing for emergencies, recognising signs of distress"] },
      { day: "Day 5 — Assessment", items: ["Practical skills assessment", "Foundation Certificate awarded"] },
    ],
    certificate: "On successful completion, students receive a Foundation Certificate in Cat Grooming. Please note: this reflects course attendance and practical skill-building, and is distinct from our 3-week Professional Certificate.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. A missed day within the 5-day course cannot be made up within that batch, as the format is sequential and each day builds on the last. At Pawpad's discretion, a student may repeat the missed day(s) in a later batch at an additional fee, or repeat the full course at a reduced re-enrolment rate. No refund is made for days not attended.",
  },
  {
    key: "anxious-pets",
    title: "At-Home Grooming & Handling Course for Anxious Pets",
    duration: "2 weekends · 4 days · Saturdays & Sundays",
    spots: "Tailored to your dog's pace",
    price: "Rs. 30,000",
    deposit: "Non-refundable deposit: Rs. 15,000",
    balance: "Balance Rs. 15,000 payable on Day 1",
    img: "assets/img/pawpad/course-at-home.png",
    for: "Pet parents of anxious, fearful or reactive dogs who want to build home grooming and handling skills at their pet's own pace — no restraint, no cage, dog-paced, behaviour-led. This is not a professional grooming qualification.",
    curriculum: [
      { day: "Weekend 1, Day 1 — Reading the Dog", items: ["Recognising fear, stress and anxiety body language", "Consent-based handling — pause points and reading readiness", "Tool desensitisation (brush, clippers, dryer, nail trimmer — introduced without use)", "A brief, procedure-free studio visit with your own dog to build early comfort with the space"] },
      { day: "Weekend 1, Day 2 — Core Maintenance Technique", items: ["Brushing and dematting technique", "Nail trim technique — locating the quick, recognising a bad trim early", "Ear cleaning technique and spotting infection", "Full bathing and drying sequence", "Technique practiced hands-on", "Take-home tool desensitisation exercises for the week ahead"] },
      { day: "Weekend 2, Day 3 — Your Dog's Second Visit", items: ["A guided, pace-matched session applying Weekend 1's brushing, nail and ear technique with your own dog — timed to your dog's individual readiness, not the clock"] },
      { day: "Weekend 2, Day 4 — Haircut Fundamentals & Home Plan", items: ["Scissoring and clipping fundamentals, tool safety near skin, and sanitary-area clipping — practiced on a training model", "A guided session applying what's realistic for your dog that day", "An individual consult covering your dog's specific triggers, a written home-care plan, and honest guidance on which grooming tasks to continue at home versus when to book a professional groomer"] },
    ],
    certificate: "Participants receive a Certificate of Participation, along with a written home-care plan specific to their pet. This certificate reflects course attendance and is not a professional grooming qualification.",
    cancellation: "The booking deposit is non-refundable. Once the course begins, the balance fee is non-refundable and non-transferable to another person. This course is structured around each dog's individual pace — Day 3 and Day 4 content is adapted to what the dog is ready for on that day, at the facilitator's discretion, and may mean a modified session rather than the full activity described in the curriculum. Course fee covers instruction, guidance and the written home-care plan; it does not guarantee a specific behavioural outcome or that a given dog will be ready for hands-on grooming work by Day 4. No refund is issued if a dog's pace requires a modified Day 3 or Day 4 session.",
  },
];

function CoursesHero() {
  return (
    <section className="c-hero">
      <div className="container c-hero-grid">
        <div>
        <p className="eyebrow reveal in">Pawpad courses</p>
        <h1 className="h-display reveal in c-course-title" style={{marginTop:24, maxWidth:"18ch"}}>
          Become a Professional <em className="italic" style={{color:"var(--driftwood)", whiteSpace:"nowrap"}}>Pet Groomer</em>
        </h1>
        <p className="lead reveal in" style={{marginTop:28, maxWidth:"58ch"}}>
          A hands-on grooming course designed for animal lovers looking to build the skills, confidence, and practical experience needed to start a career in pet grooming.
        </p>
        <p className="reveal in" style={{marginTop:18, maxWidth:"62ch"}}>
          Learn dog grooming, cat grooming, handling techniques, coat care, hygiene, safety, and business fundamentals through personalised training with experienced professionals.
        </p>
        </div>
        <div className="c-hero-image reveal in"><img src="assets/img/pawpad/courses-cover-new.png" alt="Pawpad grooming course" /></div>
      </div>
      <style>{`
        .c-hero { padding: 180px 0 60px; }
        .c-hero-grid { display: grid; grid-template-columns: 1.05fr .9fr; gap: 64px; align-items: center; }
        .c-hero-image { background: transparent; }
        .c-hero-image img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .c-hero-grid { grid-template-columns: 1fr; gap: 34px; } .c-course-title em { white-space: normal !important; } }
      `}</style>
    </section>
  );
}

function CourseCards({ onBook }) {
  const [open, setOpen] = useStateP(null);
  return (
    <section className="course-cards">
      <div className="container">
        <div className="cc-head reveal">
          <p className="eyebrow">Course Overview</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"22ch"}}>
            Hands-on training in <em className="italic" style={{color:"var(--driftwood)"}}>conscious grooming</em>
          </h2>
        </div>
        <div className="cc-grid">
          {COURSE_LIST.map((c, i) => {
            const isOpen = open === c.key;
            return (
              <article key={c.key} className={"cc-card reveal " + (isOpen ? "open" : "")}>
                <div className="cc-img"><img src={c.img} alt={c.title} /></div>
                <div className="cc-body">
                  <h3 className="h-3">{c.title}</h3>
                  <div className="cc-meta">
                    <span>{c.duration}</span>
                    <span>{c.spots}</span>
                  </div>
                  {c.summary && <p className="cc-summary">{c.summary}</p>}
                  {(c.deposit || c.balance) && <div className="cc-fees">
                    {c.deposit && <span className="cc-deposit">{c.deposit}</span>}
                    {c.balance && <span className="cc-balance">{c.balance}</span>}
                  </div>}
                  <p className="cc-for"><strong>Who this is for:</strong> {c.for}</p>
                  {isOpen && <div className="cc-detail">
                    {c.learn && <p className="cc-for"><strong>You'll learn:</strong> {c.learn}</p>}
                    {c.includes && <p className="cc-for"><strong>Includes:</strong> {c.includes}</p>}
                    {c.curriculum && <h5>Curriculum</h5>}
                    {c.curriculum?.map((day) => (
                      <div key={day.day} className="cc-day">
                        <p className="cc-day-title">{day.day}</p>
                        <ul>
                          {day.items.map((item, idx) => (
                            <li key={idx}><PawIcon size={10} color="var(--driftwood)"/> {item}</li>
                          ))}
                        </ul>
                      </div>
                    ))}
                    {(c.certificate || c.cancellation) && <div className="cc-cert-block">
                      {c.certificate && <p className="cc-for"><strong>Certificate:</strong> {c.certificate}</p>}
                      {c.cancellation && <p className="cc-for"><strong>Cancellation & Withdrawal:</strong> {c.cancellation}</p>}
                    </div>}
                  </div>}
                  <div className="cc-foot">
                    <span className="cc-price">{c.price}</span>
                    <div style={{display:"flex", gap:10, flexWrap:"wrap"}}>
                      <button className="g-pkg-toggle" aria-expanded={isOpen} onClick={() => setOpen(current => current === c.key ? null : c.key)}>
                        {isOpen ? "Show less" : "Course details"} <span className="g-pkg-arrow">{isOpen ? "−" : "+"}</span>
                      </button>
                      <button className="btn btn-primary" onClick={() => onBook("courses")}>Enquire <Arrow size={12}/></button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <style>{`
        .course-cards { background: var(--cream-bg); padding-top: 0; }
        .cc-head { margin-bottom: 48px; max-width: 720px; }
        .cc-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .cc-card {
          background: var(--white); border-radius: 26px; overflow: hidden;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          display: grid; grid-template-columns: minmax(280px, 420px) 1fr;
          transition: all var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .cc-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .cc-card:hover { transform: translateY(-4px); box-shadow: 0 30px 60px -40px color-mix(in oklab, var(--ink), transparent 60%); }
        .cc-img { aspect-ratio: auto; min-height: 100%; overflow: hidden; }
        .cc-img img { width: 100%; height: 100%; object-fit: cover; transition: transform .8s var(--ease); }
        .cc-card:hover .cc-img img { transform: scale(1.04); }
        .cc-body { padding: 28px; display: flex; flex-direction: column; gap: 14px; flex: 1; }
        .cc-meta { display: flex; flex-direction: column; gap: 4px; font-size: 13px; color: var(--ink-mute); }
        .cc-fees { display: flex; flex-direction: column; gap: 2px; }
        .cc-summary { margin: 0; color: var(--ink); font-size: 14px; font-weight: 600; line-height: 1.5; }
        .cc-deposit, .cc-balance { font-size: 12.5px; color: var(--driftwood); font-weight: 600; }
        .cc-for { font-size: 13.5px; margin: 0; color: var(--ink-soft); line-height: 1.55; }
        .cc-for strong { color: var(--driftwood); }
        .cc-detail { display: flex; flex-direction: column; gap: 12px; }
        .cc-detail h5 {
          font-family: var(--f-body); font-size: 11px; font-weight: 700;
          letter-spacing: .2em; text-transform: uppercase; color: var(--ink-mute); margin: 12px 0 16px;
        }
        .cc-day { margin-bottom: 18px; }
        .cc-day-title {
          font-size: 12px; font-weight: 700; letter-spacing: .06em;
          color: var(--ink); margin: 0 0 8px; text-transform: uppercase;
        }
        .cc-day ul { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 6px; font-size: 13px; }
        .cc-day li { display: flex; align-items: flex-start; gap: 8px; color: var(--ink-soft); line-height: 1.5; }
        .cc-cert-block {
          margin-top: 18px; padding-top: 18px;
          border-top: 1px dashed color-mix(in oklab, var(--ink), transparent 80%);
          display: flex; flex-direction: column; gap: 10px;
        }
        .cc-foot {
          margin-top: auto; padding-top: 18px;
          border-top: 1px dashed color-mix(in oklab, var(--ink), transparent 80%);
          display: flex; justify-content: space-between; align-items: center;
          gap: 14px; flex-wrap: wrap;
        }
        .cc-price { font-family: var(--f-display); font-size: 26px; color: var(--driftwood); }
        .g-pkg-toggle {
          font-size: 13px; font-weight: 600;
          display: inline-flex; align-items: center; gap: 8px; color: var(--ink);
        }
        .g-pkg-arrow {
          font-family: var(--f-display); font-size: 22px;
          width: 26px; height: 26px; background: var(--champagne);
          border-radius: 50%; display: inline-flex; align-items: center; justify-content: center; line-height: 1;
        }
        @media (max-width: 860px) { .cc-card { grid-template-columns: 1fr; } .cc-img { aspect-ratio: 4/3; } }
      `}</style>
    </section>
  );
}

function CredibilityStrip() {
  return (
    <section className="cred">
      <div className="container">
        <div className="cred-grid">
          <div className="cred-text reveal">
            <p className="eyebrow">Why Learn With Pawpad?</p>
            <h2 className="h-1" style={{marginTop:18, maxWidth:"16ch"}}>
              Learn directly <em className="italic" style={{color:"var(--driftwood)"}}>from Leena</em>
            </h2>
            <p style={{marginTop:28, maxWidth:"56ch"}}>Learn directly from Leena Munikempanna, founder of Pawpad and a professional groomer with over a decade of industry experience. Students benefit not only from technical grooming knowledge, but also from Pawpad's philosophy of behaviour-led, compassionate animal care.</p>
            <ul className="cred-bullets">
              <li><strong>Learn through real-world experience.</strong> Training combines theory with practical, hands-on grooming experience alongside professional groomers.</li>
              <li><strong>Small batches, personalised attention.</strong> A maximum of two students at a time allows for focused guidance and personalised feedback.</li>
              <li><strong>Train in both dogs and cats.</strong> Pawpad offers the opportunity to learn both canine and feline grooming for a broader professional skill set.</li>
              <li><strong>Leena's qualifications.</strong> Certified Master Cat Groomer (PCGAA), PetCPR+ Certified, Certified Canine Esthetician, and Certified Coat Expert.</li>
            </ul>
          </div>
          <div className="cred-images reveal">
            <div className="cred-portrait blob-1"><img src="assets/img/pawpad/courses-learn-from-leena.png" alt="Leena Munikempanna, founder of Pawpad"/></div>
          </div>
        </div>
      </div>
      <style>{`
        .cred { background: var(--champagne-soft); }
        .cred-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .cred-bullets { list-style: none; padding: 0; margin: 28px 0 0; display: flex; flex-direction: column; gap: 14px; }
        .cred-bullets li { padding-left: 24px; position: relative; font-size: 15px; line-height: 1.65; }
        .cred-bullets li::before { content: ""; position: absolute; left: 0; top: 11px; width: 12px; height: 1px; background: var(--driftwood); }
        .cred-bullets strong { color: var(--ink); font-weight: 600; }
        .cred-images { position: relative; display: flex; align-items: center; }
        .cred-portrait { width: 100%; }
        .cred-portrait img { width: 100%; height: auto; display: block; object-fit: contain; }
        @media (max-width: 900px) { .cred-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function CoursesPage({ onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <CoursesHero />
      <CourseCards onBook={onBook} />
      <CredibilityStrip />
      <StudentTestimonials />
      <CourseCTA onBook={onBook} />
    </div>
  );
}

function StudentTestimonials() {
  const testimonials = [
    {
      name: "Bhavya Srinivas",
      studio: "Woof Magic Spa",
      quote: "Thank you so much Leena for the great experience you gave me on my new journey. I feel very confident in the fundamental work and I learned so much about handling pets with different temperaments, especially cats.",
    },
    {
      name: "Clare Pachuau",
      studio: "A Tiny Groomer",
      quote: "I highly recommend the Pawpad Grooming Studio Academy to all prospective groomers. The instructor's knowledge, skills, experience, and expertise gave me a curriculum that exceeded my expectations.",
    },
    {
      name: "Deeksha Shetty",
      studio: "The Purple Pawlor",
      quote: "Leena's approach to pet grooming is always comfort and well-being first. Working with Pawpad helped me understand animal body language and shaped the way I care for every pet in my own business.",
    },
    {
      name: "Sanchari Mukherjee",
      studio: "The Bubble Bath",
      quote: "Training under Leena was a transformative experience. She taught grooming techniques while always stressing the comfort and well-being of the pets under our care.",
    },
    {
      name: "Renjitha",
      studio: "Earthy Paws",
      quote: "Magic happened here and my life changed forever. Pawpad is highly recommended for anyone interested in starting their career as a groomer.",
    },
  ];
  return (
    <section className="student-testimonials">
      <div className="container">
        <div className="st-head reveal">
          <p className="eyebrow">Student Testimonials</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"18ch"}}>What students carry forward</h2>
        </div>
        <div className="st-grid">
          {testimonials.map((item, i) => (
            <article key={item.name} className="st-card reveal" style={{transitionDelay:`${i * 60}ms`}}>
              <p>{item.quote}</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.studio}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
      <style>{`
        .student-testimonials { background: var(--cream-bg); }
        .st-head { margin-bottom: 44px; }
        .st-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .st-card {
          background: var(--white);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          border-radius: 18px;
          padding: 28px;
          display: flex;
          flex-direction: column;
          gap: 22px;
          min-height: 280px;
        }
        .st-card p { margin: 0; font-size: 16px; line-height: 1.7; color: var(--ink-soft); }
        .st-card strong { display: block; color: var(--ink); }
        .st-card span { display: block; margin-top: 4px; color: var(--driftwood); font-size: 14px; }
        @media (max-width: 1000px) { .st-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 680px) { .st-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function CourseCTA({ onBook }) {
  const [form, setForm] = useStateP({ name: '', email: '', phone: '' });
  const [sent, setSent] = useStateP(false);
  const upd = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.email && !form.phone) return;
    window.hsSubmit && window.hsSubmit('courses', form);
    setSent(true);
  };

  return (
    <section className="course-cta">
      <div className="container">
        <div className="course-cta-inner reveal">
          <div>
            <p className="eyebrow">Course Enquiry</p>
            <h2 className="h-1" style={{marginTop:18, maxWidth:"18ch"}}>Ready to Start Your Grooming Journey?</h2>
            <p className="lead" style={{marginTop:24, maxWidth:"58ch"}}>
              Courses run on a rolling basis throughout the year. Leave your details and we'll help you find the right start date for your training.
            </p>
          </div>
          {sent ? (
            <div className="course-form-sent">
              <PawIcon size={44} color="var(--driftwood)" />
              <h3 className="h-2" style={{margin:'16px 0 8px'}}>We'll be in touch soon</h3>
              <p style={{margin:0, color:'var(--ink-mute)', fontSize:15, lineHeight:1.6}}>The Pawpad team will reach out with course dates and batch availability.</p>
            </div>
          ) : (
            <form className="course-form" onSubmit={handleSubmit}>
              <div className="field"><label>Name</label><input value={form.name} onChange={upd('name')} placeholder="Your name" /></div>
              <div className="field"><label>Email</label><input type="email" value={form.email} onChange={upd('email')} placeholder="you@example.com" /></div>
              <div className="field"><label>Phone</label><input type="tel" value={form.phone} onChange={upd('phone')} placeholder="96630 77496" /></div>
              <button className="btn btn-primary" type="submit">Register interest <Arrow /></button>
            </form>
          )}
        </div>
      </div>
      <style>{`
        .course-cta { background: var(--cream-bg); }
        .course-cta-inner {
          padding: 48px;
          border-radius: 24px;
          background: var(--champagne-soft);
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          display: grid;
          grid-template-columns: 1fr minmax(280px, 420px);
          gap: 42px;
          align-items: center;
        }
        .course-form { display: grid; gap: 16px; }
        .course-form .btn { margin-top: 8px; justify-content: center; }
        .course-form-sent { display: flex; flex-direction: column; }
        @media (max-width: 860px) { .course-cta-inner { grid-template-columns: 1fr; padding: 30px; } }
      `}</style>
    </section>
  );
}

function ComingSoonPage({ eyebrow, title, body, serviceKey, onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <section className="soon-page">
        <div className="container soon-grid">
          <div>
            <p className="eyebrow reveal in">{eyebrow}</p>
            <h1 className="h-display reveal in" style={{marginTop:24, maxWidth:"14ch"}}>
              Coming <em className="italic" style={{color:"var(--driftwood)"}}>Soon</em>
            </h1>
            <p className="lead reveal in" style={{marginTop:28, maxWidth:"54ch"}}>{body}</p>
            <button className="btn btn-primary reveal in" style={{marginTop:32}} onClick={() => onBook(serviceKey)}>Enquire <Arrow /></button>
          </div>
          <div className="soon-img reveal in">
            <div className="blob-2"><img src="assets/img/8.jpg" alt={title} /></div>
          </div>
        </div>
        <style>{`
          .soon-page { padding: 180px 0 80px; }
          .soon-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
          .soon-img .blob-2 { aspect-ratio: 1/1; overflow: hidden; background: var(--eagle); animation: morph2 16s ease-in-out infinite alternate; }
          body[data-motion="still"] .soon-img .blob-2 { animation: none; }
          .soon-img img { width: 100%; height: 100%; object-fit: cover; }
          @media (max-width: 900px) { .soon-grid { grid-template-columns: 1fr; gap: 36px; } }
        `}</style>
      </section>
    </div>
  );
}

/* ============ BOARDING ============ */
const BOARDING_FEATURES = [
  { t: "Small group, max 4 dogs", d: "We host a tiny number of guests at a time. Quieter spaces, more attention." },
  { t: "Photo updates twice daily", d: "Morning and evening — you'll always see how they're settling." },
  { t: "Trial day before stays", d: "A short day-stay first to make sure your pet is happy here." },
  { t: "Vet on call 24/7", d: "Partnered with a local vet for anything urgent, day or night." },
  { t: "Daily enrichment", d: "Walks, sniffaris, gentle play — not just kennel time." },
  { t: "Calm-only policy", d: "We won't board dogs who clash with our resident guests. Their comfort comes first." },
];

function BoardingHero({ onBook }) {
  return (
    <section className="b-hero">
      <div className="container b-hero-grid">
        <div>
          <p className="eyebrow reveal in">Boarding</p>
          <h1 className="h-display reveal in" style={{marginTop:24, maxWidth:"15ch"}}>
            A second home, when ours <em className="italic" style={{color:"var(--driftwood)"}}>can't be</em>
          </h1>
          <p className="lead reveal in" style={{marginTop:28, maxWidth:"54ch"}}>
            Thoughtful pet boarding designed to help dogs feel secure, relaxed, and cared for while you're away. Tiny groups. Familiar smells. Same humans every day.
          </p>
          <div style={{display:"flex", gap:14, flexWrap:"wrap", marginTop:32}}>
            <button className="btn btn-primary" onClick={() => onBook("boarding")}>Enquire about boarding <Arrow /></button>
            <a className="btn btn-ghost" href="#b-experience" onClick={(e) => {e.preventDefault(); document.getElementById("b-experience")?.scrollIntoView({behavior:"smooth"});}}>Stay experience <Arrow /></a>
          </div>
        </div>
        <div className="b-hero-img reveal in">
          <div className="blob-2"><img src="assets/img/8.jpg" alt="A relaxed pet at Pawpad boarding"/></div>
          <div className="b-hero-card">
            <span className="eyebrow" style={{color:"var(--driftwood)"}}>From</span>
            <h3 style={{fontFamily:"var(--f-display)", fontSize:38, color:"var(--driftwood)", marginTop:4}}>₹1,200<span style={{fontSize:14, color:"var(--ink-mute)"}}>/night</span></h3>
            <p style={{margin:"6px 0 0", fontSize:13, color:"var(--ink-mute)"}}>Discounts for week+ stays. Multi-dog families get a single calmer rate.</p>
          </div>
        </div>
      </div>
      <style>{`
        .b-hero { padding: 180px 0 60px; }
        .b-hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
        .b-hero-img { position: relative; aspect-ratio: 1/1; }
        .b-hero-img .blob-2 { width: 100%; height: 100%; overflow: hidden; background: var(--eagle); animation: morph2 16s ease-in-out infinite alternate; }
        body[data-motion="still"] .b-hero-img .blob-2 { animation: none; }
        .b-hero-img img { width: 100%; height: 100%; object-fit: cover; }
        .b-hero-card {
          position: absolute; left: -20px; bottom: 40px;
          background: var(--cream-bg); padding: 22px 28px; border-radius: 18px;
          max-width: 280px;
          box-shadow: 0 24px 50px -25px color-mix(in oklab, var(--ink), transparent 55%);
        }
        @keyframes morph2 {
          0% { border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%; }
          100% { border-radius: 60% 40% 30% 70% / 30% 70% 30% 70%; }
        }
        @media (max-width: 900px) { .b-hero-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function BoardingExperience() {
  return (
    <section className="b-experience" id="b-experience">
      <div className="container">
        <div className="b-exp-head reveal">
          <p className="eyebrow">The stay</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"22ch"}}>
            What a day at <em className="italic" style={{color:"var(--driftwood)"}}>Pawpad boarding</em> looks like
          </h2>
        </div>
        <div className="b-timeline">
          {[
            ["07:30", "Morning walk", "A 30-minute sniff-led walk in the neighbourhood — when your dog gets to choose the route."],
            ["09:00", "Breakfast & meds", "Your pet's own food, served at their usual time. We follow your routine to the letter."],
            ["11:00", "Quiet time", "Most dogs nap. We put on soft classical music — the kind that lowers cortisol."],
            ["13:30", "Lunch & enrichment", "Lick mats, snuffle mats, puzzle feeders. Brains as tired as legs."],
            ["16:30", "Garden session", "A second outdoor stretch, small play group, lots of treats."],
            ["19:00", "Dinner & wind-down", "A second meal, calming chews, photo update sent to you."],
            ["22:00", "Bedtime", "Lights down, soft blankets, our team within earshot all night."],
          ].map(([time, title, body], i) => (
            <div key={time} className="b-step reveal" style={{transitionDelay:`${i*60}ms`}}>
              <span className="b-time">{time}</span>
              <div className="b-step-dot"><PawIcon size={12} color="var(--white)"/></div>
              <div className="b-step-body">
                <h4 className="h-3">{title}</h4>
                <p>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .b-experience { background: var(--champagne-soft); }
        .b-exp-head { max-width: 720px; margin-bottom: 56px; }
        .b-timeline { display: flex; flex-direction: column; gap: 0; position: relative; padding-left: 14px; }
        .b-timeline::before {
          content: ""; position: absolute; top: 12px; bottom: 12px; left: 92px;
          width: 1px; background: color-mix(in oklab, var(--ink), transparent 82%);
        }
        .b-step {
          display: grid; grid-template-columns: 80px 32px 1fr; gap: 16px;
          padding: 22px 0; align-items: start;
        }
        .b-time { font-family: var(--f-display); font-size: 22px; color: var(--driftwood); padding-top: 2px; }
        .b-step-dot {
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--driftwood);
          display: inline-flex; align-items: center; justify-content: center; z-index: 2;
        }
        .b-step-body p { margin: 6px 0 0; max-width: 56ch; font-size: 15px; line-height: 1.65; }
        @media (max-width: 700px) {
          .b-timeline::before { left: 78px; }
          .b-step { grid-template-columns: 60px 28px 1fr; gap: 12px; }
          .b-time { font-size: 18px; }
        }
      `}</style>
    </section>
  );
}

function BoardingFeatures() {
  return (
    <section className="b-features">
      <div className="container">
        <div className="b-feat-head reveal">
          <p className="eyebrow">Safety & care</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"18ch"}}>
            The standards we <em className="italic" style={{color:"var(--driftwood)"}}>won't move on</em>
          </h2>
        </div>
        <div className="b-feat-grid">
          {BOARDING_FEATURES.map((f, i) => (
            <div key={f.t} className="b-feat-card reveal" style={{transitionDelay:`${i*70}ms`}}>
              <PawIcon size={26} color="var(--driftwood)"/>
              <h4 className="h-3">{f.t}</h4>
              <p>{f.d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .b-features { background: var(--cream-bg); }
        .b-feat-head { max-width: 720px; margin-bottom: 56px; }
        .b-feat-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 18px; }
        .b-feat-card {
          background: var(--white); border-radius: 22px; padding: 32px 28px;
          display: flex; flex-direction: column; gap: 12px;
          border: 1px solid color-mix(in oklab, var(--ink), transparent 92%);
          transition: transform var(--t-fast) var(--ease);
        }
        body[data-palette="dark"] .b-feat-card { background: color-mix(in oklab, var(--champagne), black 5%); }
        .b-feat-card:hover { transform: translateY(-4px); }
        .b-feat-card p { margin: 0; font-size: 14.5px; line-height: 1.6; color: var(--ink-mute); }
        @media (max-width: 800px) { .b-feat-grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 540px) { .b-feat-grid { grid-template-columns: 1fr; } }
      `}</style>
    </section>
  );
}

function BoardingPage({ onBook }) {
  useReveal();
  const features = [
    ["Four Dogs Never More", "By limiting boarding to just four dogs, we're able to give every guest the attention they deserve and understand their personality, habits, comfort levels, and needs."],
    ["Someone Is Always There", "Your dog is never alone overnight. A member of the Pawpad team stays with the dogs throughout the night for reassurance and immediate attention."],
    ["Familiar Routines Matter", "We follow your dog's usual routine as closely as possible, from feeding times and walks to rest periods and bedtime habits."],
    ["Calm, Controlled Environment", "No noisy kennels, overwhelming smells, or constant foot traffic. Just a clean, quiet space designed to minimise stress."],
  ];
  const requirements = ["Core vaccinations up to date", "Kennel cough vaccination minimum 72 hours before boarding", "Current flea and tick prevention", "Female dogs must not be in heat during their stay"];
  const day = ["Personalised feeding schedule", "Rest and quiet time", "Supervised social interaction", "Individual attention", "Gentle enrichment", "Plenty of cuddles and companionship", "Evening wind-down before bedtime"];
  const bring = ["Vaccination records", "Food if on a specific diet", "Any medications with instructions", "A favourite blanket or toy", "Something that smells like home"];
  return (
    <div className="page-enter">
      <section className="boarding-hero">
        <div className="container boarding-hero-grid">
          <div>
            <p className="eyebrow reveal in">Pet Boarding</p>
            <h1 className="h-display reveal in" style={{marginTop:24, maxWidth:"14ch"}}>Boarding, Reimagined</h1>
            <p className="lead reveal in" style={{marginTop:28}}>A calm, conscious boarding experience where your dog is cared for like family — not just accommodated.</p>
            <p className="reveal in" style={{marginTop:18, maxWidth:"58ch"}}>At Pawpad, boarding isn't about filling kennels. It's about creating a peaceful environment where every dog feels safe, understood, and genuinely cared for. With only four dogs accepted at a time, overnight human supervision, personalised routines, and a space designed to reduce stress, we offer a boarding experience built around your dog's wellbeing.</p>
            <button className="btn btn-primary" onClick={() => onBook("boarding")} style={{marginTop:32}}>Book a Trial Day <Arrow /></button>
          </div>
          <div className="boarding-hero-img reveal in"><img src="assets/img/pawpad/boarding-snapshot.webp" alt="Pawpad boarding" /></div>
        </div>
      </section>
      <section className="boarding-diff">
        <div className="container split-copy">
          <div className="reveal"><p className="eyebrow">Why it feels different</p><h2 className="h-1" style={{marginTop:18}}>Small by design Personal by nature</h2></div>
          <div className="reveal"><p>Leaving your dog behind is never easy. Unlike traditional boarding facilities, Pawpad was created for dogs who thrive in calm, intimate environments. Every decision — from the number of dogs we accept to the way we manage their day — is made with one goal: to make your dog feel as comfortable, secure, and loved as possible while you're away.</p></div>
        </div>
      </section>
      <section className="boarding-features-new">
        <div className="container feature-grid">
          {features.map(([title, body], i) => <article className="feature-card reveal" key={title} style={{transitionDelay:`${i*60}ms`}}><h3 className="h-3">{title}</h3><p>{body}</p></article>)}
        </div>
      </section>
      <section className="boarding-lists">
        <div className="container boarding-list-grid">
          <InfoList title="Before Your Dog's First Stay" intro="Every first-time guest completes a trial day so we can understand their personality and make sure Pawpad is the right fit." items={["A gentle day visit before overnight boarding", "Time to observe how your dog settles", "Honest guidance if another arrangement would suit them better"]} />
          <InfoList title="Health & Safety Requirements" intro="To protect every dog in our care, all boarding guests need:" items={requirements} />
          <InfoList title="A Typical Day at Pawpad" intro="No two dogs are the same, so neither are their days. Your dog's stay may include:" items={day} />
          <InfoList title="What to Bring" intro="Familiar scents can make a huge difference in helping dogs feel relaxed during their stay." items={bring} />
        </div>
      </section>
      <section className="boarding-cta">
        <div className="container"><div className="boarding-cta-inner reveal"><p className="eyebrow">More Than Boarding</p><h2 className="h-1" style={{marginTop:18}}>A place they'll feel safe returning to</h2><p className="lead" style={{marginTop:24}}>At Pawpad, we don't just look after dogs. We build trust — with them and with you. Because when your dog feels calm, secure, and genuinely cared for, you can enjoy your time away with complete peace of mind.</p><button className="btn btn-primary" onClick={() => onBook("boarding")} style={{marginTop:28}}>Book a Trial Day <Arrow /></button></div></div>
      </section>
      <style>{`
        .boarding-hero { padding: 180px 0 80px; }
        .boarding-hero-grid { display: grid; grid-template-columns: 1.05fr 1fr; gap: 64px; align-items: center; }
        .boarding-hero-img { border-radius: 28px; overflow: hidden; background: var(--eagle-soft); }
        .boarding-hero-img img { width: 100%; height: 100%; object-fit: cover; }
        .split-copy { display: grid; grid-template-columns: 1fr 1.25fr; gap: 72px; align-items: start; }
        .split-copy p { font-size: 17px; line-height: 1.75; margin: 0; }
        .boarding-diff, .boarding-lists { background: var(--champagne-soft); }
        .feature-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 18px; }
        .feature-card, .info-list { background: var(--white); border: 1px solid color-mix(in oklab, var(--ink), transparent 92%); border-radius: 18px; padding: 28px; }
        .feature-card p, .info-list p, .info-list li { font-size: 16px; line-height: 1.65; color: var(--ink-mute); }
        .boarding-list-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 18px; }
        .info-list ul { margin: 18px 0 0; padding: 0; list-style: none; display: grid; gap: 10px; }
        .info-list li { display: flex; gap: 10px; align-items: flex-start; }
        .info-list li::before { content: ""; width: 9px; height: 9px; border-radius: 50%; background: var(--driftwood); margin-top: 9px; flex: 0 0 auto; }
        .boarding-cta-inner { padding: 48px; background: var(--ink); color: var(--white); border-radius: 24px; }
        .boarding-cta-inner h2 { color: var(--white); }
        .boarding-cta-inner p { color: color-mix(in oklab, var(--white), transparent 18%); }
        @media (max-width: 1000px) { .feature-grid { grid-template-columns: repeat(2, 1fr); } .boarding-hero-grid, .split-copy { grid-template-columns: 1fr; } }
        @media (max-width: 680px) { .feature-grid, .boarding-list-grid { grid-template-columns: 1fr; } .boarding-cta-inner { padding: 30px; } }
      `}</style>
    </div>
  );
}

function InfoList({ title, intro, items }) {
  return <article className="info-list reveal"><h3 className="h-3">{title}</h3><p>{intro}</p><ul>{items.map(item => <li key={item}>{item}</li>)}</ul></article>;
}

/* ============ MYOTHERAPY ============ */
function MyotherapyHero({ onBook }) {
  return (
    <section className="m-hero">
      <div className="container m-hero-grid">
        <div>
          <p className="eyebrow reveal in">Canine myotherapy & wellness</p>
          <h1 className="h-display reveal in" style={{marginTop:24, maxWidth:"15ch"}}>
            The body <em className="italic" style={{color:"var(--driftwood)"}}>remembers</em><br/>
            We help it heal
          </h1>
          <p className="lead reveal in" style={{marginTop:28, maxWidth:"56ch"}}>
            Gentle, hands-on bodywork for dogs — easing muscular tension, supporting recovery, and helping seniors stay mobile for longer. Designed especially for the dog who's a little stiff, a little slower, or just due for a reset.
          </p>
          <div style={{display:"flex", gap:14, flexWrap:"wrap", marginTop:32}}>
            <button className="btn btn-primary" onClick={() => onBook("myotherapy")}>Book a session <Arrow /></button>
            <a href="#m-benefits" className="btn btn-ghost" onClick={(e)=>{e.preventDefault(); document.getElementById("m-benefits")?.scrollIntoView({behavior:"smooth"});}}>The benefits <Arrow /></a>
          </div>
        </div>
        <div className="m-hero-img reveal in">
          <div className="blob-3"><img src="assets/img/3.jpg" alt="A dog being gently held"/></div>
        </div>
      </div>
      <style>{`
        .m-hero { padding: 180px 0 60px; }
        .m-hero-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
        .m-hero-img .blob-3 { aspect-ratio: 4/4.5; overflow: hidden; background: var(--driftwood); animation: morph 14s ease-in-out infinite alternate; }
        body[data-motion="still"] .m-hero-img .blob-3 { animation: none; }
        .m-hero-img img { width: 100%; height: 100%; object-fit: cover; }
        @keyframes morph {
          0% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
          50% { border-radius: 30% 70% 70% 30% / 50% 60% 40% 50%; }
          100% { border-radius: 40% 60% 30% 70% / 40% 50% 60% 50%; }
        }
        @media (max-width: 900px) { .m-hero-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function MyotherapyExplainer() {
  return (
    <section className="m-explain">
      <div className="container m-ex-grid">
        <div className="reveal">
          <p className="eyebrow">What is myotherapy</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"16ch"}}>
            Bodywork <em className="italic" style={{color:"var(--driftwood)"}}>Slowed down</em>
          </h2>
        </div>
        <div className="m-ex-text reveal">
          <p>Myotherapy is the assessment and treatment of soft-tissue pain and tension — the kind that builds up quietly in working dogs, recovering dogs, anxious dogs, and dogs growing older. It's not massage as a luxury. It's targeted, science-led, and entirely consent-based.</p>
          <p>At Pawpad, sessions begin with a slow conversation. We watch how your dog moves, where they're guarding, what they're avoiding. We then use trigger-point release, fascial work, and gentle range-of-motion techniques to help the body let go of what it's been holding.</p>
          <p>Most dogs visibly soften within the first session. Recovery cases — post-surgery, post-injury, or chronic compensation patterns — often see meaningful change over 3–5 sessions.</p>
        </div>
      </div>
      <style>{`
        .m-explain { background: var(--champagne-soft); }
        .m-ex-grid { display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: start; }
        .m-ex-text p { margin: 0 0 18px; font-size: 16px; line-height: 1.75; max-width: 60ch; }
        @media (max-width: 900px) { .m-ex-grid { grid-template-columns: 1fr; gap: 36px; } }
      `}</style>
    </section>
  );
}

function MyotherapyBenefits() {
  const benefits = [
    ["Senior dogs", "Maintain mobility, ease arthritic stiffness, support quality-of-life late in life."],
    ["Post-surgery", "Faster, calmer recovery from orthopaedic procedures. Always cleared by your vet first."],
    ["Anxious dogs", "Bodywork helps regulate the nervous system. Many anxious dogs fall asleep mid-session."],
    ["Active dogs", "Sport, agility, and high-drive working dogs benefit from regular release of compensation patterns."],
    ["Indies & rescues", "Past injuries often go undiagnosed. Myotherapy uncovers and releases what scans don't show."],
    ["Just-because", "Sometimes a dog is just tight. Sometimes it's just a beautiful thing to give them."],
  ];
  return (
    <section className="m-benefits" id="m-benefits">
      <div className="container">
        <div className="m-ben-head reveal">
          <p className="eyebrow">Who it's for</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"20ch"}}>
            Most dogs benefit <em className="italic" style={{color:"var(--driftwood)"}}>Some, profoundly</em>
          </h2>
        </div>
        <div className="m-ben-grid">
          {benefits.map(([t, d], i) => (
            <div key={t} className="m-ben-card reveal" style={{transitionDelay:`${i*60}ms`}}>
              <span className="m-ben-no">0{i+1}</span>
              <h3 className="h-3">{t}</h3>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .m-benefits { background: var(--cream-bg); }
        .m-ben-head { max-width: 720px; margin-bottom: 56px; }
        .m-ben-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0; border-top: 1px solid color-mix(in oklab, var(--ink), transparent 88%); }
        .m-ben-card {
          padding: 36px 28px;
          border-right: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          border-bottom: 1px solid color-mix(in oklab, var(--ink), transparent 88%);
          display: flex; flex-direction: column; gap: 12px;
          transition: background var(--t-fast) var(--ease);
        }
        .m-ben-card:nth-child(3n) { border-right: 0; }
        .m-ben-card:hover { background: var(--champagne-soft); }
        .m-ben-no { font-family: var(--f-display); font-size: 16px; color: var(--driftwood); letter-spacing: .1em; }
        .m-ben-card p { margin: 0; font-size: 14.5px; line-height: 1.65; color: var(--ink-mute); }
        @media (max-width: 800px) {
          .m-ben-grid { grid-template-columns: 1fr 1fr; }
          .m-ben-card:nth-child(3n) { border-right: 1px solid color-mix(in oklab, var(--ink), transparent 88%); }
          .m-ben-card:nth-child(2n) { border-right: 0; }
        }
        @media (max-width: 540px) {
          .m-ben-grid { grid-template-columns: 1fr; }
          .m-ben-card { border-right: 0 !important; }
        }
      `}</style>
    </section>
  );
}

function MyotherapyExpect() {
  return (
    <section className="m-expect">
      <div className="container m-expect-grid">
        <div className="reveal">
          <p className="eyebrow">What to expect</p>
          <h2 className="h-1" style={{marginTop:18, maxWidth:"14ch"}}>
            Your dog's <em className="italic" style={{color:"var(--driftwood)"}}>first session</em>
          </h2>
        </div>
        <div className="m-expect-list reveal">
          {[
            ["60–75 minutes", "Long enough to do real work. Short enough that your dog stays engaged."],
            ["You stay in the room", "Always. We want your dog regulated, and you regulate them."],
            ["No equipment", "Just hands, a comfortable mat, and a quiet room. Dogs choose how they want to lie."],
            ["A note to take home", "Stretching, rest, things to watch for. We'll always loop your vet in if needed."],
            ["Availability", "Coming soon. Register interest and we'll share details when this service opens."],
          ].map(([t, d], i) => (
            <div key={t} className="m-expect-row" style={{transitionDelay:`${i*60}ms`}}>
              <h4>{t}</h4>
              <p>{d}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .m-expect { background: var(--ink); color: var(--cream-bg); }
        .m-expect .eyebrow { color: var(--champagne); }
        .m-expect .eyebrow::before { background: var(--champagne); }
        .m-expect h2 { color: var(--cream-bg); }
        .m-expect-grid { display: grid; grid-template-columns: 1fr 1.4fr; gap: 80px; align-items: start; }
        .m-expect-list { display: flex; flex-direction: column; }
        .m-expect-row {
          display: grid; grid-template-columns: 280px 1fr; gap: 32px;
          padding: 22px 0;
          border-bottom: 1px solid color-mix(in oklab, var(--cream-bg), transparent 86%);
          align-items: start;
        }
        .m-expect-row:first-child { border-top: 1px solid color-mix(in oklab, var(--cream-bg), transparent 86%); }
        .m-expect-row h4 { font-family: var(--f-display); font-size: 24px; color: var(--driftwood); margin: 0; }
        .m-expect-row p { color: color-mix(in oklab, var(--cream-bg), transparent 25%); margin: 0; line-height: 1.65; }
        @media (max-width: 900px) {
          .m-expect-grid { grid-template-columns: 1fr; gap: 36px; }
          .m-expect-row { grid-template-columns: 1fr; gap: 8px; }
        }
      `}</style>
    </section>
  );
}

function MyotherapyPage({ onBook }) {
  useReveal();
  return (
    <div className="page-enter">
      <section className="soon-page">
        <div className="container soon-grid">
          <div>
            <p className="eyebrow reveal in">Canine Myotherapy & Wellness</p>
            <h1 className="h-display reveal in" style={{marginTop:24, maxWidth:"14ch"}}>Coming <em className="italic" style={{color:"var(--driftwood)"}}>Soon</em></h1>
            <p className="lead reveal in" style={{marginTop:28, maxWidth:"54ch"}}>Support for your dog's mobility, recovery, and overall wellbeing through gentle bodywork therapy is coming soon.</p>
            <span className="btn btn-primary disabled-cta reveal in" style={{marginTop:32}}>Coming Soon <Arrow /></span>
          </div>
          <div className="soon-img reveal in"><div className="blob-2"><img src="assets/img/pawpad/myotherapy-page.png" alt="Canine myotherapy at Pawpad" /></div></div>
        </div>
        <style>{`
          .soon-page { padding: 180px 0 80px; }
          .soon-grid { display: grid; grid-template-columns: 1.1fr 1fr; gap: 64px; align-items: center; }
          .soon-img .blob-2 { aspect-ratio: 1/1; overflow: hidden; background: transparent; }
          .soon-img img { width: 100%; height: 100%; object-fit: cover; }
            @media (max-width: 900px) { .soon-grid { grid-template-columns: 1fr; gap: 36px; } }
        `}</style>
      </section>
    </div>
  );
}

Object.assign(window, { CoursesPage, BoardingPage, MyotherapyPage });
