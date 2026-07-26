"use client";

import { memo, useEffect, useMemo, useRef, useState } from "react";

const ArrowIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M5 12h14M14 7l5 5-5 5" />
  </svg>
);

const PhoneIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M7.6 3.8 10 8.6 7.8 10a15.7 15.7 0 0 0 6.2 6.2l1.4-2.2 4.8 2.4v2.2c0 .9-.7 1.6-1.6 1.6A14.8 14.8 0 0 1 3.8 5.4c0-.9.7-1.6 1.6-1.6h2.2Z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20.5 11.8a8.5 8.5 0 0 1-12.6 7.4L3 20.5l1.3-4.7a8.5 8.5 0 1 1 16.2-4Z" />
    <path d="M8.1 7.7c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.8 1.9c.1.3 0 .5-.2.7l-.6.7c-.2.2-.2.4-.1.6.6 1.2 1.6 2.2 2.9 2.8.2.1.4.1.6-.1l.8-1c.2-.2.4-.3.7-.2l1.9.9c.3.1.4.3.4.5 0 .3-.1 1.4-.7 1.9-.5.5-1.3.8-2.2.7-1.1-.1-3.2-.7-5.2-2.5-1.6-1.5-2.7-3.4-3-4.6-.3-1.1 0-1.8.4-2.3Z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" className="icon-fill" />
  </svg>
);

const PinIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
    <circle cx="12" cy="10" r="2.5" />
  </svg>
);

const PeopleIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="9" cy="8" r="3" />
    <path d="M3 20v-2a6 6 0 0 1 12 0v2M16 4a3 3 0 0 1 0 6M18 14a5 5 0 0 1 3 4.6V20" />
  </svg>
);

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="M12 3 4.5 6v5.3c0 4.4 3 8.3 7.5 9.7 4.5-1.4 7.5-5.3 7.5-9.7V6L12 3Z" />
    <path d="m9 12 2 2 4-4" />
  </svg>
);

const MailIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);

const FirmFilmPlayer = memo(function FirmFilmPlayer() {
  const filmRef = useRef<HTMLVideoElement>(null);
  const [filmMuted, setFilmMuted] = useState(true);
  const [filmEnded, setFilmEnded] = useState(false);

  useEffect(() => {
    const film = filmRef.current;
    if (!film) return;

    film.defaultMuted = true;
    film.muted = true;
    film.volume = 1;
    void film.play().catch(() => {
      // Mobile browsers may wait for the first tap; native controls remain available.
    });
  }, []);

  const handleFilmAction = () => {
    const film = filmRef.current;
    if (!film) return;

    if (filmEnded) {
      film.currentTime = 0;
      film.muted = false;
      setFilmMuted(false);
      setFilmEnded(false);
      void film.play();
      return;
    }

    const nextMuted = !film.muted;
    film.muted = nextMuted;
    setFilmMuted(nextMuted);
    if (film.paused) void film.play();
  };

  return (
    <div className="firm-film-frame">
      <div className="firm-film-ornament" aria-hidden="true"><span>IM</span></div>
      <video
        ref={filmRef}
        className="firm-film-video"
        controls
        playsInline
        preload="auto"
        poster="/assets/im-attorneys-promo-poster.jpg"
        aria-label="IM Attorneys company promotional film"
        onEnded={() => setFilmEnded(true)}
        onPlay={() => setFilmEnded(false)}
        onVolumeChange={() => setFilmMuted(filmRef.current?.muted ?? true)}
      >
        <source src="/assets/im-attorneys-company-film.mp4" type="video/mp4" />
        Your browser does not support this video.
      </video>
      <div className="firm-film-caption" aria-hidden="true">
        <span>Company film</span><strong>01:44</strong>
      </div>
      <button
        className="firm-film-sound"
        type="button"
        onClick={handleFilmAction}
        aria-pressed={!filmMuted}
        aria-label={filmEnded ? "Replay company film with sound" : filmMuted ? "Play company film with sound" : "Mute company film"}
      >
        <span aria-hidden="true">{filmEnded ? "↻" : filmMuted ? "◖))" : "◖)))"}</span>
        {filmEnded ? "Replay film" : filmMuted ? "Tap for sound" : "Sound on"}
      </button>
    </div>
  );
});

const BriefcaseIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <rect x="3" y="7" width="18" height="13" rx="2" />
    <path d="M8 7V5.5A1.5 1.5 0 0 1 9.5 4h5A1.5 1.5 0 0 1 16 5.5V7M3 12h18" />
  </svg>
);

const PersonIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <circle cx="12" cy="8" r="3.5" />
    <path d="M5 21a7 7 0 0 1 14 0" />
  </svg>
);

const CheckIcon = () => (
  <svg viewBox="0 0 24 24" aria-hidden="true">
    <path d="m5 12 4 4L19 6" />
  </svg>
);

type Practice = {
  name: string;
  slug: string;
  heading: string;
  description: string;
  approach: string;
  matters: string[];
};

const practices: Practice[] = [
  {
    name: "Family",
    slug: "family-law",
    heading: "Family law, handled with clarity.",
    description:
      "Family disputes affect far more than paperwork. They can change where you live, how you parent and what financial security looks like. We provide calm, practical advice that protects your rights while keeping the human impact firmly in view.",
    approach:
      "We clarify your legal position, identify urgent risks, explain realistic options and help you choose a route that serves both your immediate needs and your longer-term wellbeing.",
    matters: ["Divorce", "Parental rights", "Child maintenance", "Protection orders"],
  },
  {
    name: "Estates",
    slug: "estates-and-wills",
    heading: "Protect what you have built.",
    description:
      "A considered estate plan can spare the people you love uncertainty and unnecessary conflict. We assist clients to document their wishes clearly and guide families through the legal responsibilities that follow a death.",
    approach:
      "Whether you are planning ahead or administering an estate, we translate the process into manageable steps, flag important decisions early and keep the matter moving with care.",
    matters: ["Wills", "Estate planning", "Deceased estates", "Family guidance"],
  },
  {
    name: "State Claims",
    slug: "state-claims",
    heading: "Accountability when the state causes harm.",
    description:
      "When unlawful conduct by the police or another public body causes harm, the path to accountability can be technical and time-sensitive. Early advice is important because special notice requirements and deadlines may apply.",
    approach:
      "We assess the facts and available evidence, explain the procedural requirements and develop a disciplined claim strategy suited to the circumstances.",
    matters: ["Unlawful arrest", "Police misconduct", "Public liability", "Damages claims"],
  },
  {
    name: "Criminal",
    slug: "criminal-law",
    heading: "Decisive help when liberty is at stake.",
    description:
      "An arrest or criminal charge can place your freedom, reputation and livelihood under immediate pressure. You need a lawyer who can respond quickly, explain what is happening and prepare the next step with care.",
    approach:
      "We offer focused criminal-law guidance, court representation and 24/7 assistance for urgent bail applications, with clear communication throughout the matter.",
    matters: ["Urgent bail", "Criminal defence", "Court representation", "Case strategy"],
  },
  {
    name: "Commercial",
    slug: "commercial-law",
    heading: "Legal structure for confident business.",
    description:
      "Strong businesses are built on clear agreements, responsible decisions and relationships that can withstand pressure. We help founders and companies understand risk before it becomes a costly dispute.",
    approach:
      "Our advice combines legal discipline with commercial perspective—helping you structure transactions, strengthen agreements and make decisions that support sustainable growth.",
    matters: ["Commercial contracts", "Governance", "Legal risk", "Business disputes"],
  },
  {
    name: "Litigation",
    slug: "litigation",
    heading: "A clear strategy for difficult disputes.",
    description:
      "Disputes can consume time, money and attention. The right strategy begins with understanding what success should look like—not simply rushing toward court.",
    approach:
      "We assess the strengths, risks and commercial realities of the matter, explore appropriate resolution options and litigate with focus when formal proceedings are necessary.",
    matters: ["Civil litigation", "Debt recovery", "Evictions", "Dispute resolution"],
  },
];

const serviceSteps = [
  {
    number: "01",
    phase: "Understand",
    title: "We listen before we advise.",
    copy:
      "Your consultation begins with the facts, the people affected and the outcome you need. We ask focused questions so the advice is shaped around your real circumstances.",
    outcome: "You feel heard, and we understand what is truly at stake.",
  },
  {
    number: "02",
    phase: "Clarify",
    title: "We make the law understandable.",
    copy:
      "You receive a clear explanation of the legal position, the available routes and the practical implications of each option—without unnecessary legal jargon.",
    outcome: "You understand your position, options and immediate risks.",
  },
  {
    number: "03",
    phase: "Strategise",
    title: "We agree on a strategy.",
    copy:
      "Before meaningful work begins, we align on priorities, documents, responsibilities and the next legal step. Urgent issues are identified and handled first.",
    outcome: "You know what happens next, why it matters and what is required.",
  },
  {
    number: "04",
    phase: "Represent",
    title: "We move with purpose.",
    copy:
      "We prepare carefully, communicate material developments and keep the matter focused on the agreed objective as circumstances evolve.",
    outcome: "Your matter moves forward with discipline and clear communication.",
  },
];

const concernGuides = [
  {
    label: "An arrest or urgent bail matter",
    urgency: "Immediate",
    signal: "Liberty at risk",
    title: "Call immediately. Time matters.",
    copy:
      "If someone has been arrested or requires urgent bail assistance, phone the firm directly. Early legal intervention can help protect rights, clarify the process and prepare the next court step without avoidable delay.",
    action: "Call the 24/7 bail line",
    href: "tel:+27812488048",
  },
  {
    label: "A family or protection concern",
    urgency: "As soon as possible",
    signal: "Safety or family stability",
    title: "Get advice before pressure becomes crisis.",
    copy:
      "Divorce, parental disputes, maintenance concerns and protection matters can escalate quickly. A confidential consultation can help you identify urgent safeguards, understand your rights and choose a considered way forward.",
    action: "Discuss a family matter",
    href: "#contact",
  },
  {
    label: "A contract or business dispute",
    urgency: "Before you act",
    signal: "Money, terms or reputation",
    title: "Protect the relationship—and your position.",
    copy:
      "Before signing, cancelling, responding or escalating, understand the legal and commercial consequences. We help businesses assess exposure, preserve evidence and select a strategy that supports the bigger objective.",
    action: "Discuss a business matter",
    href: "#contact",
  },
  {
    label: "A claim, summons or legal deadline",
    urgency: "Time-sensitive",
    signal: "A formal deadline applies",
    title: "Do not let a deadline decide the matter.",
    copy:
      "Court documents, claims against the state and formal notices may carry strict time periods. Share the documents with the firm as early as possible so the requirements and available response can be assessed.",
    action: "Request an assessment",
    href: "#contact",
  },
];

const heroMessages = [
  "life\u2019s defining moments.",
  "business in motion.",
  "families in transition.",
  "rights worth protecting.",
];

const tickerItems = [
  "24/7 urgent bail line active",
  "Family and matrimonial law",
  "Commercial contracts and disputes",
  "Wills and deceased estates",
  "Civil litigation and debt recovery",
  "Claims against organs of state",
  "Menlyn Maine \u00b7 Pretoria",
];

const team = [
  {
    name: "Ingrid Mtsweni",
    role: "Founder & Director",
    image: "/assets/ingrid-mtsweni.webp",
  },
  {
    name: "Katlego Seitisho",
    role: "Litigation Attorney",
    image: "/assets/katlego-seitisho.webp",
  },
  {
    name: "Mmabatho Moncha",
    role: "Candidate Attorney",
    image: "/assets/mmabatho-moncha.webp",
  },
];

const faqs = [
  {
    question: "What happens after I request a consultation?",
    answer:
      "The firm will review the information you provide, contact you to confirm the appropriate consultation format and explain what documents may be useful to prepare.",
  },
  {
    question: "Can IM Attorneys assist individuals and businesses?",
    answer:
      "Yes. The firm advises individuals and families on personal legal matters and supports entrepreneurs and companies with contracts, governance, commercial matters and disputes.",
  },
  {
    question: "Where is the firm based?",
    answer:
      "IM Attorneys is based at 210 Amarand Avenue, Pegasus Building, Menlyn Maine, Pretoria.",
  },
  {
    question: "How do urgent bail applications work?",
    answer:
      "For urgent bail assistance, call the firm directly on 081 248 8048. The 24/7 bail line is the fastest route for time-sensitive criminal matters.",
  },
  {
    question: "Who may apply for the Vacation Programme?",
    answer:
      "The two-week Vacation Programme is intended for second- and third-year LLB students. Enquire with the firm about the next available intake and application requirements.",
  },
];

export default function Home() {
  const [loadingPhase, setLoadingPhase] = useState<"entering" | "leaving" | "complete">("entering");
  const [activePractice, setActivePractice] = useState(0);
  const [journeyStep, setJourneyStep] = useState(1);
  const [matterNotes, setMatterNotes] = useState("");
  const [contactMethod, setContactMethod] = useState("WhatsApp");
  const [consultationType, setConsultationType] = useState("Personal matter");
  const [activeConcern, setActiveConcern] = useState(0);
  const [heroMessage, setHeroMessage] = useState(0);
  const [bailOpen, setBailOpen] = useState(true);

  const selectedPractice = practices[activePractice];
  const whatsappHref = useMemo(() => {
    const message = `Hello IM Attorneys. I would like help with a ${selectedPractice.name.toLowerCase()} matter. ${matterNotes ? `Briefly: ${matterNotes}. ` : ""}Preferred contact: ${contactMethod}.`;
    return `https://wa.me/27812488048?text=${encodeURIComponent(message)}`;
  }, [contactMethod, matterNotes, selectedPractice]);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const root = document.documentElement;
    root.classList.add("intro-active");

    const revealTimer = window.setTimeout(
      () => setLoadingPhase("leaving"),
      reducedMotion ? 120 : 1350,
    );
    const completeTimer = window.setTimeout(
      () => {
        setLoadingPhase("complete");
        root.classList.remove("intro-active");
      },
      reducedMotion ? 220 : 2250,
    );

    return () => {
      window.clearTimeout(revealTimer);
      window.clearTimeout(completeTimer);
      root.classList.remove("intro-active");
    };
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const timer = window.setInterval(() => {
      setHeroMessage((current) => (current + 1) % heroMessages.length);
    }, 3600);

    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reducedMotion.matches) return;

    const root = document.documentElement;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>(
        [
          "main > section:not(.hero-shell)",
          ".experience-heading",
          ".experience-grid article",
          ".experience-promise",
          ".concern-guidance",
          ".standard-rail article",
          ".team-profile",
          ".programme-section",
          ".faq-list details",
        ].join(","),
      ),
    );

    root.classList.add("motion-ready");

    revealTargets.forEach((target, index) => {
      target.style.setProperty("--reveal-order", String(index % 4));
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    revealTargets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      root.classList.remove("motion-ready");
    };
  }, []);

  return (
    <>
      {loadingPhase !== "complete" && (
        <div
          className={`site-intro ${loadingPhase === "leaving" ? "is-leaving" : ""}`}
          role="status"
          aria-live="polite"
          aria-label="IM Attorneys website loading"
        >
          <div className="intro-ambient intro-ambient-one" aria-hidden="true" />
          <div className="intro-ambient intro-ambient-two" aria-hidden="true" />
          <div className="intro-frame" aria-hidden="true">
            <span className="intro-corner intro-corner-tl" />
            <span className="intro-corner intro-corner-tr" />
            <span className="intro-corner intro-corner-bl" />
            <span className="intro-corner intro-corner-br" />
          </div>
          <div className="intro-lockup">
            <div className="intro-monogram" aria-hidden="true">
              <span>I</span><i /><span>M</span>
            </div>
            <div className="intro-rule" aria-hidden="true"><i /></div>
            <p>Ingrid Mtsweni Attorneys</p>
            <small>Clarity · Purpose · Representation</small>
          </div>
          <div className="intro-progress" aria-hidden="true"><i /></div>
        </div>
      )}

      <main id="top" className={loadingPhase === "complete" ? "site-ready" : ""}>
      <header className="floating-header">
        <a className="brand" href="#top" aria-label="IM Attorneys home">
          <span className="brand-monogram">IM</span>
          <span className="brand-divider" />
          <span className="brand-copy">
            <strong>IM Attorneys</strong>
            <small>Ingrid Mtsweni Attorneys</small>
          </span>
        </a>

        <details className="desktop-menu">
          <summary aria-label="Open IM Attorneys menu">
            <span className="nav-orbit" aria-hidden="true" />
            <span>Explore the firm</span>
            <i aria-hidden="true" />
          </summary>
          <div className="desktop-menu-panel">
            <div className="menu-panel-intro">
              <span>IM Attorneys</span>
              <strong>Legal counsel, clearly mapped.</strong>
              <p>Choose a practice area, explore the firm or begin a confidential conversation.</p>
              <a href="/contact">Book a consultation <ArrowIcon /></a>
            </div>
            <nav className="menu-practice-grid" aria-label="Practice areas">
              <span className="menu-group-label">Practice areas</span>
              {practices.map((practice, index) => (
                <a href={`/services/${practice.slug}`} key={practice.slug}>
                  <small>{String(index + 1).padStart(2, "0")}</small>
                  <span>{practice.name}</span>
                  <ArrowIcon />
                </a>
              ))}
            </nav>
            <nav className="menu-page-links" aria-label="Firm pages">
              <span className="menu-group-label">The firm</span>
              <a href="/about">Our approach <ArrowIcon /></a>
              <a href="/about#team">Meet the team <ArrowIcon /></a>
              <a href="#programme">Vacation Programme <ArrowIcon /></a>
              <a href="/insights">Insights & guidance <ArrowIcon /></a>
              <a href="/contact">Contact IM Attorneys <ArrowIcon /></a>
              <a className="menu-bail-link" href="tel:+27812488048"><ShieldIcon /> 24/7 urgent bail</a>
            </nav>
          </div>
        </details>

        <div className="header-actions">
          <a className="header-phone" href="tel:+27812488048">
            <PhoneIcon /> <span>081 248 8048</span>
          </a>
          <a className="button button-dark header-cta" href="/contact">
            Book a consultation <ArrowIcon />
          </a>
        </div>

        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <span />
            <span />
          </summary>
          <nav aria-label="Mobile navigation">
            <span className="mobile-menu-label">Practice areas</span>
            {practices.map((practice) => (
              <a href={`/services/${practice.slug}`} key={practice.slug} onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>{practice.name} <ArrowIcon /></a>
            ))}
            <span className="mobile-menu-label">The firm</span>
            <a href="/about" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>The firm</a>
            <a href="/about#team" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Our team</a>
            <a href="#programme" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Vacation Programme</a>
            <a href="/insights" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Insights</a>
            <a href="/contact" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>Book a consultation</a>
            <a className="mobile-call" href="tel:+27812488048" onClick={(event) => event.currentTarget.closest("details")?.removeAttribute("open")}>
              <PhoneIcon /> Call 081 248 8048
            </a>
          </nav>
        </details>
      </header>

      <section className="hero-shell">
        <div className="hero-copy">
          <div className="hero-kicker">Ingrid Mtsweni Attorneys <span /></div>
          <h1>
            <span className="hero-static">Legal clarity for</span>
            <span className="hero-loop-window" aria-live="off">
              <span className="hero-loop-text" key={heroMessages[heroMessage]}>
                {heroMessages[heroMessage]}
              </span>
            </span>
          </h1>
          <p>
            When the law touches your family, freedom, property or business,
            uncertainty can feel overwhelming. IM Attorneys turns complexity
            into clear choices, a purposeful strategy and representation that
            keeps you informed at every step.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#contact">
              Book a consultation <ArrowIcon />
            </a>
            <a className="button button-outline" href="tel:+27812488048">
              <ShieldIcon /> 24/7 Bail Applications
            </a>
          </div>
          <div className="trust-rail" aria-label="Firm information">
            <span><PinIcon /> Menlyn Maine, Pretoria</span>
            <span><PeopleIcon /> 100% female black-owned</span>
            <a href="tel:+27812488048"><PhoneIcon /> 081 248 8048</a>
          </div>
        </div>

        <div className="hero-photo">
          <img
            src="/assets/menlyn-maine-building.webp"
            alt="Pegasus Building in Menlyn Maine, Pretoria, where IM Attorneys is based"
            width={1200}
            height={800}
            fetchPriority="high"
          />
          <div className="building-caption">
            <span>Our Pretoria office</span>
            <strong>Pegasus Building</strong>
            <small>210 Amarand Avenue · Menlyn Maine</small>
          </div>
          <div className="building-index" aria-hidden="true">
            <span>25°47&apos;11.2&quot;S</span>
            <span>28°16&apos;39.1&quot;E</span>
          </div>
        </div>
      </section>

      <section className="live-ticker" aria-label="IM Attorneys services and availability">
        <div className="ticker-status">
          <i aria-hidden="true" />
          <span>Firm update</span>
        </div>
        <div className="ticker-window">
          <div className="ticker-track">
            {[...tickerItems, ...tickerItems].map((item, index) => (
              <span key={`${item}-${index}`}>
                {item}
                <i aria-hidden="true">◆</i>
              </span>
            ))}
          </div>
        </div>
        <a href="tel:+27812488048">
          <PhoneIcon />
          Call the firm
        </a>
      </section>

      <section className="expertise-preview" aria-label="Featured legal services">
        <div>
          <span>Legal clarity for</span>
          <h2>life and business</h2>
        </div>
        <div className="preview-links">
          {[
            ["Family law", "family-law"],
            ["Commercial law", "commercial-law"],
            ["Wills & estates", "estates-and-wills"],
            ["Litigation", "litigation"],
            ["Bail applications", "criminal-law"],
          ].map(
            ([item, slug], index) => (
              <a href={`/services/${slug}`} key={item}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {item}
              </a>
            ),
          )}
        </div>
        <div className="practice-imagery" aria-label="IM Attorneys in practice">
          <figure className="practice-image-large">
            <img
              src="/assets/attorney-in-practice.jpg"
              alt="An IM Attorneys legal professional reviewing a client brief"
              width={984}
              height={1475}
              loading="lazy"
              decoding="async"
            />
            <figcaption><span>01</span> Prepared counsel</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/im-case-binders.jpg"
              alt="Organised IM Attorneys case binders"
              width={984}
              height={1475}
              loading="lazy"
              decoding="async"
            />
            <figcaption><span>02</span> Detail, organised</figcaption>
          </figure>
          <figure>
            <img
              src="/assets/im-case-folder.jpg"
              alt="An IM Attorneys branded legal case folder"
              width={984}
              height={1475}
              loading="lazy"
              decoding="async"
            />
            <figcaption><span>03</span> Every brief, considered</figcaption>
          </figure>
        </div>
      </section>

      <section className="welcome-section" aria-labelledby="welcome-title">
        <div className="welcome-portrait">
          <img
            src="/assets/ingrid-mtsweni.webp"
            alt="Ingrid Mtsweni, founder and director of IM Attorneys"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
          />
          <div>
            <strong>Ingrid Mtsweni</strong>
            <span>Founder & Director</span>
          </div>
        </div>
        <div className="welcome-message">
          <span className="section-label">A personal welcome from Ingrid</span>
          <h2 id="welcome-title">
            Your matter deserves
            <br />
            to be understood.
          </h2>
          <p className="welcome-lead">
            “When you walk through our doors, you are not simply bringing us a
            file. You are trusting us with something that may shape what comes
            next.”
          </p>
          <div className="welcome-copy">
            <p>
              I founded IM Attorneys because exceptional legal work should
              never feel cold, confusing or out of reach. You deserve counsel
              that listens closely, explains honestly and treats the person
              behind the legal problem with dignity.
            </p>
            <p>
              Whether you are protecting your family, defending your freedom,
              securing your legacy or making an important business decision,
              our role is to help you see the road ahead and move forward with
              clarity, confidence and a strategy built around your reality.
            </p>
          </div>
          <div className="welcome-signature">
            <span>Ingrid Mtsweni</span>
            <small>Attorney · Founder · Director</small>
          </div>
          <a className="welcome-link" href="#contact">
            Tell us what you are facing <ArrowIcon />
          </a>
        </div>
        <div className="welcome-mark" aria-hidden="true">IM</div>
      </section>

      <section className="pathfinder" id="expertise">
        <div className="section-heading path-heading">
          <div>
            <span className="section-label">Legal Pathfinder</span>
            <h2>Find the right legal path.</h2>
          </div>
          <p>
            You do not need to know the legal name for your problem before
            asking for help. Start with the situation closest to yours and we
            will help identify the issues, explain the options and shape a
            practical way forward.
          </p>
        </div>

        <div className="practice-explorer">
          <div className="practice-tabs" role="tablist" aria-label="Practice areas">
            {practices.map((practice, index) => (
              <button
                className={activePractice === index ? "active" : ""}
                key={practice.name}
                onClick={() => setActivePractice(index)}
                role="tab"
                aria-selected={activePractice === index}
                aria-controls="practice-detail"
              >
                <span>{practice.name}</span>
                <ArrowIcon />
              </button>
            ))}
          </div>
          <article className="practice-detail" id="practice-detail" role="tabpanel">
            <span className="practice-number">
              {String(activePractice + 1).padStart(2, "0")}
            </span>
            <div className="practice-detail-copy" key={selectedPractice.name}>
              <h3>{selectedPractice.heading}</h3>
              <p>{selectedPractice.description}</p>
              <div className="practice-approach">
                <span>How we help</span>
                <p>{selectedPractice.approach}</p>
              </div>
              <div className="matter-tags">
                {selectedPractice.matters.map((matter) => (
                  <span key={matter}>{matter}</span>
                ))}
              </div>
              <div className="practice-detail-actions">
                <button className="button button-gold-outline" onClick={() => setJourneyStep(1)}>
                  Discuss your matter <ArrowIcon />
                </button>
                <a href={`/services/${selectedPractice.slug}`} className="practice-page-link">
                  Explore {selectedPractice.name} law <ArrowIcon />
                </a>
              </div>
            </div>
          </article>
        </div>

        <div className="journey-shell">
          <div className="journey-map">
            <h3>Your consultation, thoughtfully guided.</h3>
            <div className="journey-steps">
              {[
                ["Choose your legal path", "Your matter type"],
                ["Share the essentials", "A short, private summary"],
                ["Choose how to connect", "Your preferred next step"],
              ].map(([title, copy], index) => {
                const step = index + 1;
                return (
                  <button
                    className={`${journeyStep === step ? "active" : ""} ${journeyStep > step ? "complete" : ""}`}
                    key={title}
                    onClick={() => setJourneyStep(step)}
                  >
                    <span className="step-circle">
                      {journeyStep > step ? <CheckIcon /> : step}
                    </span>
                    <strong>Step {step}</strong>
                    <b>{title}</b>
                    <small>{copy}</small>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="journey-panel" aria-live="polite">
            <div className="journey-progress" aria-label={`Consultation step ${journeyStep} of 3`}>
              <span>Step {journeyStep} of 3</span>
              <div aria-hidden="true">
                <i style={{ width: `${(journeyStep / 3) * 100}%` }} />
              </div>
            </div>
            {journeyStep === 1 && (
              <div className="journey-state">
                <h4>What brings you here?</h4>
                <div className="choice-list compact">
                  {practices.slice(0, 6).map((practice, index) => (
                    <button
                      className={activePractice === index ? "selected" : ""}
                      onClick={() => setActivePractice(index)}
                      key={practice.name}
                    >
                      {practice.name}
                    </button>
                  ))}
                </div>
                <button className="journey-next" onClick={() => setJourneyStep(2)}>
                  Continue <ArrowIcon />
                </button>
              </div>
            )}
            {journeyStep === 2 && (
              <div className="journey-state">
                <h4>Share only the essentials.</h4>
                <label htmlFor="matter-notes">
                  Briefly describe what you need help with <small>(optional)</small>
                </label>
                <textarea
                  id="matter-notes"
                  value={matterNotes}
                  onChange={(event) => setMatterNotes(event.target.value)}
                  placeholder="A short summary is enough for now."
                  rows={4}
                  maxLength={600}
                />
                <small className="character-count">{matterNotes.length}/600 characters</small>
                <button className="journey-next" onClick={() => setJourneyStep(3)}>
                  Continue <ArrowIcon />
                </button>
              </div>
            )}
            {journeyStep === 3 && (
              <div className="journey-state">
                <h4>How would you like to connect?</h4>
                <div className="choice-list">
                  {["WhatsApp", "Phone", "In-person"].map((method) => (
                    <button
                      className={contactMethod === method ? "selected" : ""}
                      onClick={() => setContactMethod(method)}
                      key={method}
                    >
                      <span className="radio-dot" /> {method}
                    </button>
                  ))}
                </div>
                <a
                  className="journey-next"
                  href={contactMethod === "WhatsApp" ? whatsappHref : contactMethod === "Phone" ? "tel:+27812488048" : "mailto:attorneys@iminc.co.za?subject=In-person%20consultation"}
                  target={contactMethod === "WhatsApp" ? "_blank" : undefined}
                  rel={contactMethod === "WhatsApp" ? "noreferrer" : undefined}
                >
                  Start the conversation <ArrowIcon />
                </a>
              </div>
            )}
            <p className="privacy-note">
              <ShieldIcon /> Confidential, clear and no unnecessary back-and-forth.
            </p>
            <p className="response-note">
              General enquiries are acknowledged within one business day. Urgent bail assistance is available by phone 24/7.
            </p>
          </div>
        </div>
      </section>

      <section className="experience-journey" aria-labelledby="service-experience-title">
        <div className="experience-journey-head">
          <div>
            <span className="section-label">The client experience</span>
            <h2 id="service-experience-title">From uncertainty to a clear way forward.</h2>
          </div>
          <div className="journey-manifesto">
            <p>
              Your legal matter should not feel like a closed room. We open the
              process, explain the decisions and keep the strategy connected to
              what matters in your life or business.
            </p>
            <span><i /> Four stages. One continuous line of clarity.</span>
          </div>
        </div>

        <div className="journey-canvas">
          <div className="journey-line" aria-hidden="true">
            <i /><i /><i /><i />
          </div>
          {serviceSteps.map((step, index) => (
            <article className={`journey-moment moment-${index + 1}`} key={step.number}>
              <div className="journey-number">
                <span>{step.number}</span>
                <small>{step.phase}</small>
              </div>
              <div className="journey-card">
                <div className="journey-card-icon" aria-hidden="true">
                  {index === 0 ? <PeopleIcon /> : index === 1 ? <BriefcaseIcon /> : index === 2 ? <CheckIcon /> : <ArrowIcon />}
                </div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
                <footer>
                  <small>You leave this stage with</small>
                  <strong>{step.outcome}</strong>
                </footer>
              </div>
            </article>
          ))}
          <div className="journey-word" aria-hidden="true">CLARITY</div>
        </div>

        <div className="journey-closing">
          <blockquote>“You remain informed, involved and prepared for what comes next.”</blockquote>
          <div>
            <span><ShieldIcon /> Confidential by design</span>
            <a href="#contact">Begin the conversation <ArrowIcon /></a>
          </div>
        </div>

        <div className="experience-photo-ledger">
          <figure className="ledger-team">
            <img
              src="/assets/im-team-office.jpg"
              alt="The IM Attorneys team working together in the office"
              width={2480}
              height={1654}
              loading="lazy"
              decoding="async"
            />
            <figcaption>
              <span>Inside the firm</span>
              <strong>Strategy is built together.</strong>
            </figcaption>
          </figure>
          <figure className="ledger-detail">
            <img
              src="/assets/im-team-collaboration.jpg"
              alt="IM Attorneys team members collaborating around a table"
              width={984}
              height={734}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Different perspectives. One clear direction.</figcaption>
          </figure>
          <div className="ledger-note">
            <span aria-hidden="true">IM</span>
            <p>
              Every matter benefits from thoughtful preparation, considered
              discussion and a strategy the client can understand.
            </p>
          </div>
        </div>
      </section>

      <section className="legal-triage" aria-labelledby="concern-title">
        <div className="triage-frame">
          <header className="triage-header">
            <div>
              <span className="section-label">When to call a lawyer</span>
              <h2 id="concern-title">What is happening right now?</h2>
            </div>
            <p>
              Choose the closest situation. The response brief will show why
              timing matters and the most sensible first action to take.
            </p>
          </header>

          <div className="triage-workspace">
            <div className="triage-matrix" role="tablist" aria-label="Choose your legal situation">
              {concernGuides.map((concern, index) => (
                <button
                  className={activeConcern === index ? "active" : ""}
                  data-index={String(index + 1).padStart(2, "0")}
                  key={concern.label}
                  onClick={() => setActiveConcern(index)}
                  role="tab"
                  aria-selected={activeConcern === index}
                  aria-controls="triage-response"
                >
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <small>{concern.urgency}</small>
                  <strong>{concern.label}</strong>
                  <i><ArrowIcon /></i>
                </button>
              ))}
            </div>

            <article className="triage-response" id="triage-response" role="tabpanel">
              <div className="triage-response-top">
                <span><i /> Response brief</span>
                <small>{concernGuides[activeConcern].signal}</small>
              </div>
              <div className="triage-response-copy" key={concernGuides[activeConcern].title}>
                <div className="triage-response-code">
                  IM / {String(activeConcern + 1).padStart(2, "0")}
                </div>
                <h3>{concernGuides[activeConcern].title}</h3>
                <p>{concernGuides[activeConcern].copy}</p>
                <div className="triage-action-row">
                  <a href={concernGuides[activeConcern].href}>
                    {concernGuides[activeConcern].action} <ArrowIcon />
                  </a>
                  <span><ShieldIcon /> Confidential first contact</span>
                </div>
              </div>
              <div className="triage-stamp" aria-hidden="true">
                <span>IM</span><small>Legal response</small>
              </div>
            </article>
          </div>

          <footer className="triage-footer">
            <span>Urgent bail line · 24/7</span>
            <p>Not sure which situation fits? Start with a confidential general enquiry.</p>
            <a href="#contact">Ask the firm <ArrowIcon /></a>
          </footer>
        </div>
      </section>

      <section className="story-section" id="about">
        <div className="founder-portrait">
          <img
            src="/assets/ingrid-mtsweni.webp"
            alt="Ingrid Mtsweni, founder and director of IM Attorneys"
            width={1200}
            height={1200}
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="founder-story">
          <span className="section-label">Founder & Director</span>
          <h2>Ingrid Mtsweni</h2>
          <p>
            IM Attorneys is a proudly South African boutique practice for
            people and businesses who want legal advice that is both rigorous
            and understandable. The firm was built at the intersection of
            legal knowledge, empathy, strategy and entrepreneurial
            understanding.
          </p>
          <blockquote>
            “The law may be complex. The way your attorney communicates with
            you should not be.”
          </blockquote>
          <p className="founder-bio">
            Ingrid earned her LLB from the University of Johannesburg in 2018.
            After completing her articles and being admitted as an attorney,
            she gained valuable experience in the legal department of a leading
            South African banking institution before founding IM Attorneys in
            February 2023.
          </p>
          <p className="founder-bio">
            Her experience across private practice and the corporate
            environment shaped a firm that sees every matter from more than one
            angle: the legal principles, the human consequences and the
            practical decisions a client must make next.
          </p>
        </div>
        <div className="team-stack" id="team">
          <header className="team-intro">
            <span>Our legal team</span>
            <h3>Rigour, empathy &amp; resolve.</h3>
          </header>
          {team.slice(1).map((member, index) => (
            <article className={`team-profile profile-${index + 1}`} key={member.name}>
              <div>
                <img
                  src={member.image}
                  alt={member.name}
                  width={900}
                  height={index === 0 ? 1349 : 900}
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="team-nameplate">
                <span aria-hidden="true">0{index + 2}</span>
                <h3>{member.name}</h3>
                <p>{member.role}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="values-band">
        <span>Ethical integrity</span>
        <span>Ubuntu</span>
        <span>Excellence</span>
        <span>Representation</span>
      </section>

      <section className="im-charter" aria-labelledby="standard-title">
        <div className="charter-intro">
          <span className="section-label">The IM Standard</span>
          <h2 id="standard-title">The principles behind every brief.</h2>
          <p>
            Legal excellence is not only measured by what is argued. It is
            felt in how carefully a matter is understood, how clearly advice
            is given and how purposefully every next step is chosen.
          </p>
          <div className="charter-seal" aria-hidden="true">
            <span>IM</span>
            <small>EST. 2023 · PRETORIA</small>
          </div>
          <figure className="charter-image">
            <img
              src="/assets/im-case-folder.jpg"
              alt="IM Attorneys legal folder representing the firm's standard of preparation"
              width={984}
              height={1475}
              loading="lazy"
              decoding="async"
            />
            <figcaption>Prepared with care. Carried with purpose.</figcaption>
          </figure>
        </div>
        <div className="charter-principles">
          {[
            ["01", "Attention", "Direct, personal counsel", "Your facts, risks and priorities shape the advice. Every matter is treated as individual—not processed as a template."],
            ["02", "Perspective", "Commercially aware thinking", "We consider time, cost, relationships and reputation alongside the legal position, so the strategy works in the real world."],
            ["03", "Clarity", "Communication without distance", "You understand what matters, why it matters and what happens next—without unnecessary language or uncertainty."],
            ["04", "Purpose", "Representation with direction", "Every action must serve an objective. We prepare carefully, act ethically and remain focused on meaningful progress."],
          ].map(([number, label, title, copy]) => (
            <article key={number}>
              <div className="charter-number">{number}</div>
              <div>
                <span>{label}</span>
                <h3>{title}</h3>
                <p>{copy}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="charter-credentials">
          <span>Menlyn Maine · Pretoria</span>
          <span>100% female black-owned</span>
          <span>Personal + commercial counsel</span>
          <a href="#contact">Begin a conversation <ArrowIcon /></a>
        </div>
      </section>

      <section className="programme-section" id="programme">
        <div className="programme-statement">
          <span>Future legal minds</span>
          <h2>
            Begin where
            <br />
            legal careers
            <br />
            become <em>real.</em>
          </h2>
          <div className="programme-workspace" aria-hidden="true">
            <img
              src="/assets/im-workspace.jpg"
              alt=""
              width={984}
              height={1293}
              loading="lazy"
              decoding="async"
            />
          </div>
        </div>
        <div className="programme-content">
          <div className="programme-heading">
            <div className="programme-icon">LLB</div>
            <div>
              <h3>Vacation Programme</h3>
              <p>
                A focused two-week introduction to legal practice for
                second- and third-year LLB students who want to see how legal
                knowledge becomes responsible, client-centred work.
              </p>
            </div>
          </div>
          <div className="programme-steps">
            <div><span>01</span><strong>Apply with intention</strong><small>Submit your CV and motivation when the next intake opens.</small></div>
            <div><span>02</span><strong>Learn from the team</strong><small>Observe the standards, preparation and collaboration behind boutique legal practice.</small></div>
            <div><span>03</span><strong>Experience the work</strong><small>Gain guided exposure to research, drafting, court processes and professional client service.</small></div>
          </div>
          <a
            className="button button-gold"
            href="mailto:attorneys@iminc.co.za?subject=Vacation%20Programme%20Enquiry"
          >
            Enquire about the programme <ArrowIcon />
          </a>
        </div>
      </section>

      <section className="firm-film" aria-labelledby="firm-film-title">
        <div className="firm-film-intro">
          <span className="section-label">The IM perspective</span>
          <h2 id="firm-film-title">
            A closer look at the
            <em> practice behind the advice.</em>
          </h2>
          <p>
            Step inside IM Attorneys: a practice built on thoughtful preparation,
            clear counsel and a personal commitment to every client we represent.
          </p>
          <div className="firm-film-details" aria-label="Film details">
            <span>IM Attorneys</span>
            <i aria-hidden="true" />
            <span>Menlyn Maine · Pretoria</span>
            <i aria-hidden="true" />
            <span>Company film</span>
          </div>
        </div>
        <FirmFilmPlayer />
      </section>

      <section className="social-feature" aria-labelledby="social-feature-title">
        <div className="social-feature-copy">
          <div className="social-kicker">
            <InstagramIcon />
            <span>From our Instagram</span>
          </div>
          <h2 id="social-feature-title">
            See the people and purpose behind the practice.
          </h2>
          <p>
            Step inside the world of IM Attorneys through our featured reel.
            Follow the firm on Instagram for legal insight, practice updates
            and a closer view of the team behind every matter.
          </p>
          <div className="social-account">
            <span aria-hidden="true">IM</span>
            <div>
              <strong>@imattorneys</strong>
              <small>Pretoria · South Africa</small>
            </div>
          </div>
          <a
            className="social-instagram-cta"
            href="https://www.instagram.com/reel/C-UpU0aN1HccymJ38x5BUjme7qI-WSnqYAA4c00/?igsh=aGpiMG9ieHJmZmI2"
            target="_blank"
            rel="noreferrer"
          >
            Watch and follow on Instagram <InstagramIcon />
          </a>
          <small className="social-fallback">
            If the video does not play here, open it directly on Instagram.
          </small>
        </div>
        <div className="social-reel-shell">
          <div className="reel-corner reel-corner-top" aria-hidden="true">Featured reel</div>
          <iframe
            title="Featured IM Attorneys Instagram reel"
            src="https://www.instagram.com/reel/C-UpU0aN1HccymJ38x5BUjme7qI-WSnqYAA4c00/embed"
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            loading="lazy"
          />
          <div className="reel-corner reel-corner-bottom" aria-hidden="true">
            <InstagramIcon /> IM Attorneys
          </div>
        </div>
        <div className="social-feature-mark" aria-hidden="true">REEL / 01</div>
      </section>

      <section className="legal-faq">
        <aside className="faq-advisory">
          <span className="section-label">Before we begin</span>
          <h2>Good counsel begins with clarity.</h2>
          <p>
            A first conversation should make the path ahead feel more
            organised—not more complicated. These are the questions clients
            most often ask before instructing the firm.
          </p>
          <div className="faq-assurance">
            <ShieldIcon />
            <div>
              <strong>Confidential by design</strong>
              <span>Your first enquiry is handled with discretion.</span>
            </div>
          </div>
          <a href="#contact">Ask your own question <ArrowIcon /></a>
        </aside>
        <div className="faq-desk">
          <div className="faq-desk-head">
            <span>Client notes</span>
            <small>{String(faqs.length).padStart(2, "0")} essential answers</small>
          </div>
          <div className="faq-list-premium">
            {faqs.map((faq, index) => (
              <details key={faq.question}>
                <summary>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <strong>{faq.question}</strong>
                  <i aria-hidden="true"><span></span><span></span></i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
          <div className="faq-desk-foot">
            <span>Answers are general guidance only.</span>
            <a href="tel:+27812488048">Speak to an attorney <ArrowIcon /></a>
          </div>
        </div>
      </section>

      <section className="contact-shell" id="contact">
        <div className="contact-intro">
          <span>Let&apos;s talk</span>
          <h2>
            Let&apos;s make the
            <br />
            next step <em>clear.</em>
          </h2>
          <p>
            You do not need perfect words, every document or a complete
            timeline before contacting us. Tell us what has happened, what is
            worrying you and what you need to protect. We will help organise
            the legal questions and guide you toward the right next step.
            Urgent bail matters should always be handled by phone.
          </p>
        </div>

        <div className="contact-grid">
          <a href="tel:+27812488048">
            <PhoneIcon /><span><small>Call</small><strong>081 248 8048</strong></span><ArrowIcon />
          </a>
          <a href="mailto:attorneys@iminc.co.za">
            <MailIcon /><span><small>Email</small><strong>attorneys@iminc.co.za</strong></span><ArrowIcon />
          </a>
          <a href="https://maps.google.com/?q=210+Amarand+Avenue+Pegasus+Building+Menlyn+Maine+Pretoria" target="_blank" rel="noreferrer">
            <PinIcon /><span><small>Visit</small><strong>Menlyn Maine, Pretoria</strong></span><ArrowIcon />
          </a>
          <a href="tel:+27812488048">
            <ShieldIcon /><span><small>Urgent help</small><strong>24/7 Bail</strong></span><ArrowIcon />
          </a>
        </div>

        <div className="contact-converter">
          <span className="section-label">Start here</span>
          <h3>How can we help you today?</h3>
          <div className="consultation-types">
            {[
              ["Personal matter", <PersonIcon key="person" />],
              ["Business matter", <BriefcaseIcon key="briefcase" />],
              ["Urgent bail", <ShieldIcon key="shield" />],
            ].map(([label, icon]) => (
              <button
                className={consultationType === label ? "selected" : ""}
                onClick={() => setConsultationType(label as string)}
                key={label as string}
              >
                {icon}
                <span>{label}</span>
              </button>
            ))}
          </div>
          <a
            className="button button-gold"
            href={
              consultationType === "Urgent bail"
                ? "tel:+27812488048"
                : `https://wa.me/27812488048?text=${encodeURIComponent(`Hello IM Attorneys. I would like to request a consultation regarding a ${consultationType.toLowerCase()}.`)}`
            }
            target={consultationType === "Urgent bail" ? undefined : "_blank"}
            rel={consultationType === "Urgent bail" ? undefined : "noreferrer"}
          >
            {consultationType === "Urgent bail" ? "Call the 24/7 bail line" : "Start a consultation"}
            <ArrowIcon />
          </a>
          <p className="converter-assurance">
            <ShieldIcon /> Confidential first contact. No obligation and no unnecessary paperwork.
          </p>
        </div>
      </section>

      <section className="location-section" aria-labelledby="location-title">
        <div className="location-copy">
          <span className="section-label">Visit the firm</span>
          <h2 id="location-title">Legal counsel in the heart of Menlyn Maine.</h2>
          <p>
            Meet with the IM Attorneys team at Pegasus Building, a convenient
            and professional setting in Pretoria&apos;s Menlyn Maine precinct.
            Please arrange your consultation before visiting so the right
            attorney can prepare for your matter.
          </p>
          <div className="location-address">
            <PinIcon />
            <div>
              <small>Office address</small>
              <strong>210 Amarand Avenue</strong>
              <span>Pegasus Building · Menlyn Maine · Pretoria</span>
            </div>
          </div>
          <a
            className="location-directions"
            href="https://maps.google.com/?q=210+Amarand+Avenue+Pegasus+Building+Menlyn+Maine+Pretoria"
            target="_blank"
            rel="noreferrer"
          >
            Open directions in Google Maps <ArrowIcon />
          </a>
        </div>
        <div className="location-map">
          <div className="map-badge"><PinIcon /><span>IM Attorneys</span></div>
          <iframe
            title="Google Map showing IM Attorneys at Pegasus Building, Menlyn Maine, Pretoria"
            src="https://www.google.com/maps?q=210+Amarand+Avenue,+Pegasus+Building,+Menlyn+Maine,+Pretoria&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </section>

      <footer className="site-footer-premium">
        <div className="footer-watermark" aria-hidden="true">IM</div>
        <div className="footer-portrait">
          <span className="section-label">Ingrid Mtsweni Attorneys</span>
          <h2>Your next step can begin with one clear conversation.</h2>
          <a className="footer-primary-action" href="/contact">
            Book a consultation <ArrowIcon />
          </a>
        </div>
        <div className="footer-contact-rail">
          <a href="tel:+27812488048"><small>Call</small><strong>081 248 8048</strong></a>
          <a href="mailto:attorneys@iminc.co.za"><small>Email</small><strong>attorneys@iminc.co.za</strong></a>
          <a href="https://maps.google.com/?q=210+Amarand+Avenue+Pegasus+Building+Menlyn+Maine+Pretoria" target="_blank" rel="noreferrer"><small>Visit</small><strong>Menlyn Maine, Pretoria</strong></a>
        </div>
        <div className="footer-navigation">
          <div className="footer-signature">
            <img
              src="/assets/im-attorneys-logo.webp"
              alt="Ingrid Mtsweni Attorneys Incorporated"
              width={1800}
              height={634}
              loading="lazy"
              decoding="async"
            />
            <p>Boutique legal counsel.<br />Rigorous, human and purposeful.</p>
          </div>
          <nav aria-label="Footer navigation">
            <span>Explore</span>
            <a href="#expertise">Expertise</a>
            <a href="/about">The firm</a>
            <a href="/about#team">Our team</a>
            <a href="#programme">Vacation Programme</a>
            <a href="/insights">Insights</a>
          </nav>
          <nav aria-label="Social and contact links">
            <span>Connect</span>
            <a href="https://www.instagram.com/imattorneys/" target="_blank" rel="noreferrer">Instagram</a>
            <a href="mailto:attorneys@iminc.co.za">Email the firm</a>
            <a href="tel:+27812488048">24/7 Bail line</a>
          </nav>
        </div>
        <div className="footer-fineprint">
          <p>© 2026 IM Attorneys. All rights reserved.</p>
          <p>Information on this website is general and does not constitute legal advice.</p>
          <span>PRETORIA · SOUTH AFRICA</span>
        </div>
      </footer>

      <aside className={`floating-assistance ${bailOpen ? "open" : ""}`} aria-label="Quick contact options">
        <div className="bail-popover" aria-hidden={!bailOpen}>
          <button
            className="bail-close"
            type="button"
            onClick={() => setBailOpen(false)}
            aria-label="Close bail assistance message"
          >
            ×
          </button>
          <div className="bail-popover-head">
            <span><ShieldIcon /></span>
            <div>
              <small>Urgent legal assistance</small>
              <strong>Arrest or bail matter?</strong>
            </div>
          </div>
          <p>
            Time matters after an arrest. Call the firm&apos;s 24/7 bail line
            for immediate, confidential guidance on the next legal step.
          </p>
          <a href="tel:+27812488048">
            Call the 24/7 bail line <PhoneIcon />
          </a>
        </div>
        <div className="floating-actions">
          <button
            className="floating-action bail-trigger"
            type="button"
            onClick={() => setBailOpen((current) => !current)}
            aria-expanded={bailOpen}
            aria-label="Show urgent bail assistance"
          >
            <ShieldIcon />
            <span>Bail</span>
          </button>
          <a
            className="floating-action whatsapp"
            href="https://wa.me/27812488048?text=Hello%20IM%20Attorneys.%20I%20would%20like%20legal%20assistance."
            target="_blank"
            rel="noreferrer"
            aria-label="Contact IM Attorneys on WhatsApp"
          >
            <WhatsAppIcon />
            <span>WhatsApp</span>
          </a>
          <a
            className="floating-action phone"
            href="tel:+27812488048"
            aria-label="Call IM Attorneys"
          >
            <PhoneIcon />
            <span>Call</span>
          </a>
        </div>
      </aside>
      </main>
    </>
  );
}
