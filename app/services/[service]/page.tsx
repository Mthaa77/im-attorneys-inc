import type { Metadata } from "next";
import { notFound } from "next/navigation";

type ServicePage = {
  title: string;
  eyebrow: string;
  lead: string;
  summary: string;
  urgent?: boolean;
  focus: string[];
  wayForward: string[];
  decisionTitle: string;
  decisionCopy: string;
  considerations: { title: string; copy: string }[];
  promise: string;
};

const services: Record<string, ServicePage> = {
  "family-law": {
    title: "Family law, handled with clarity.",
    eyebrow: "Family & matrimonial law",
    lead: "When the future of your family is changing, calm legal direction matters.",
    summary: "We guide clients through the legal and practical decisions surrounding divorce, parental responsibilities, maintenance and protection. The aim is not to add pressure; it is to give you a considered route forward.",
    focus: ["Divorce and settlement guidance", "Parental rights and responsibilities", "Child maintenance", "Protection order support"],
    wayForward: ["Tell us what has changed and what needs urgent attention.", "We clarify your legal position and the realistic options available.", "Together, we agree on a thoughtful next step."],
    decisionTitle: "The decisions are legal, but the impact is deeply personal.",
    decisionCopy: "Family-law matters often involve competing needs: stability for children, financial certainty, safety, housing and relationships that may need to continue long after the paperwork is signed. We help you separate the urgent from the important, so every step has a clear purpose.",
    considerations: [
      { title: "Protect the immediate position", copy: "Where safety, access to children, maintenance or a shared home is under pressure, early advice can help identify the protections and formal steps that may be needed." },
      { title: "Make informed agreements", copy: "A settlement or parenting arrangement should be understood before it is accepted. We help clients see the practical consequences as well as the legal wording." },
      { title: "Keep the long term in view", copy: "The best route is not always the loudest or fastest. We consider what will support workable family arrangements after the immediate conflict has passed." },
    ],
    promise: "You will never be treated as a file. Your circumstances, your children and the outcome you need will remain central to the advice we give.",
  },
  "estates-and-wills": {
    title: "Protect what you have built.",
    eyebrow: "Wills, estates & legacy",
    lead: "A clear plan today can give the people closest to you more certainty tomorrow.",
    summary: "From recording your wishes to guiding a family through estate administration, we help make an unfamiliar process more manageable. Every matter is handled with care, clear communication and attention to the responsibilities that matter.",
    focus: ["Wills and estate planning", "Deceased estate administration", "Estate-related family guidance", "Practical legacy planning"],
    wayForward: ["Start with the documents and family circumstances you already know.", "We identify the decisions, responsibilities and next formal steps.", "We help you put a clear plan in place or move the estate forward."],
    decisionTitle: "Legacy planning is an act of care, not merely a document.",
    decisionCopy: "The most useful estate plan is one your family can understand when they need it. Whether you are planning ahead or grieving a loss, we bring order to the questions, documents and responsibilities that can otherwise feel overwhelming.",
    considerations: [
      { title: "Make your wishes clear", copy: "A well-considered will can reduce uncertainty, help protect the people you love and record the decisions that should not be left to assumption." },
      { title: "Understand the administration process", copy: "When someone dies, there are formal responsibilities, timeframes and decisions. We explain these in plain language and help families work through them step by step." },
      { title: "Create space for the human side", copy: "Estate matters are often emotionally demanding. Clear information and a measured process can remove avoidable pressure at a difficult time." },
    ],
    promise: "We bring legal rigour to the process while keeping the people affected by it firmly in view.",
  },
  "state-claims": {
    title: "Accountability when the state causes harm.",
    eyebrow: "Claims against the state",
    lead: "When public authority causes harm, time-sensitive legal steps can protect your position.",
    summary: "Claims involving unlawful arrest, police conduct or public liability can have strict requirements. We assess the facts, evidence and timing so that you understand the process before a deadline or procedural issue closes down an option.",
    focus: ["Unlawful arrest and detention", "Police misconduct", "Public liability", "Damages claims and notices"],
    wayForward: ["Share the facts, documents and any deadlines as early as possible.", "We assess the legal route, evidence and procedural requirements.", "We develop a disciplined claim strategy suited to the circumstances."],
    decisionTitle: "In these matters, timing and preparation can shape every option that follows.",
    decisionCopy: "A claim against an organ of state can involve strict notices, evidence and procedural steps. We help clients move from a painful or confusing event to a properly assessed legal position, without making promises that the facts cannot support.",
    considerations: [
      { title: "Preserve the record", copy: "Documents, medical records, names of witnesses, dates and correspondence can matter. We help identify what should be retained and what information may need to be obtained." },
      { title: "Respect the time limits", copy: "Some claims require notice or action within specific periods. Early advice gives the firm the best opportunity to assess what must happen next." },
      { title: "Build a case with discipline", copy: "A sound claim is not only about what went wrong; it is about proving the legal basis, the harm suffered and the correct route for accountability." },
    ],
    promise: "We will explain the strengths, risks and procedural requirements honestly—so you can make decisions with your eyes open.",
  },
  "criminal-law": {
    title: "Decisive help when liberty is at stake.",
    eyebrow: "Criminal defence & bail",
    lead: "An arrest or criminal charge demands clear advice, practical urgency and a lawyer who can act.",
    summary: "We provide focused criminal-law guidance, court representation and urgent bail assistance. From the first conversation, we help you understand what is happening, protect your rights and prepare the next step with care.",
    urgent: true,
    focus: ["24/7 urgent bail applications", "Criminal defence", "Court representation", "Case strategy and guidance"],
    wayForward: ["Call immediately if an arrest or bail issue is urgent.", "We clarify the immediate position, court process and rights involved.", "We prepare the next legal step with focus and clear communication."],
    decisionTitle: "When freedom is at risk, the first hours deserve focused legal attention.",
    decisionCopy: "An arrest affects more than a court process. It can bring fear, uncertainty and urgent pressure on a family. IM Attorneys provides prompt, confidential guidance so that the person involved and their support network understand the immediate position and the next practical step.",
    considerations: [
      { title: "Act without avoidable delay", copy: "If someone has been arrested or needs bail assistance, call the firm directly. The earlier the facts and current position are understood, the sooner a proper next step can be prepared." },
      { title: "Know what is happening", copy: "We explain the process in clear terms—what the current stage means, what information is needed and what the next court appearance may involve." },
      { title: "Prepare beyond the emergency", copy: "Bail is often only one part of a larger matter. We help clients move from the immediate crisis toward a considered defence and case strategy." },
    ],
    promise: "Urgent does not have to mean chaotic. You will receive direct communication, focused preparation and guidance that respects the seriousness of the moment.",
  },
  "commercial-law": {
    title: "Legal structure for confident business.",
    eyebrow: "Commercial counsel",
    lead: "Good business decisions become stronger when the legal risk is clear before you act.",
    summary: "We support founders and companies with practical legal advice around contracts, governance, risk and disputes. Our role is to bring legal discipline and commercial perspective to decisions that affect your business and relationships.",
    focus: ["Commercial contracts", "Governance and legal risk", "Business disputes", "Transaction support"],
    wayForward: ["Tell us the commercial objective and the decision you are facing.", "We identify the key legal exposures, options and documents.", "You move forward with advice aligned to the bigger business goal."],
    decisionTitle: "Your legal advice should protect momentum, not slow it down.",
    decisionCopy: "Commercial decisions often need to be made while a business is moving: an opportunity is on the table, a contract needs attention or a relationship is under pressure. We help turn legal uncertainty into structured, commercially aware choices.",
    considerations: [
      { title: "See the risk before it becomes expensive", copy: "Clear agreements and early advice can reveal gaps, obligations and exposure before they grow into a dispute or a distraction from the business." },
      { title: "Keep the commercial objective visible", copy: "The right legal answer must also work in the real world. We consider time, relationships, reputation and the business outcome alongside the formal legal position." },
      { title: "Make the next move with confidence", copy: "Whether you are signing, responding, restructuring or negotiating, we help you understand what the decision commits you to and where you can protect your position." },
    ],
    promise: "Our role is to give you a clear legal framework for decisive, sustainable business decisions.",
  },
  litigation: {
    title: "A clear strategy for difficult disputes.",
    eyebrow: "Civil litigation & disputes",
    lead: "A dispute needs a strategy built around the outcome that matters—not simply the next court date.",
    summary: "We assess the strengths, risks and practical realities of a matter before deciding how to move forward. When formal proceedings are necessary, we litigate with focus while keeping the agreed objective and communication at the centre.",
    focus: ["Civil litigation", "Debt recovery", "Evictions", "Dispute resolution"],
    wayForward: ["Bring the correspondence, documents and the outcome you need.", "We assess the legal position, risks and viable resolution routes.", "We agree on a focused strategy for moving the matter forward."],
    decisionTitle: "A dispute deserves a strategy before it becomes a long, expensive fight.",
    decisionCopy: "Formal proceedings can affect time, cash flow, reputation and relationships. We begin by understanding what success should mean for you, then assess the legal position, evidence and the resolution routes that are genuinely available.",
    considerations: [
      { title: "Understand the real objective", copy: "Sometimes the priority is recovery, sometimes it is protection, certainty or a workable exit. Defining this early keeps the strategy disciplined." },
      { title: "Assess the strength and the exposure", copy: "We review the key facts, documents and procedural posture so you understand both the opportunities and the risks before committing to a route." },
      { title: "Choose a route with purpose", copy: "Negotiation, formal demand, alternative resolution or court action may each have a place. We help select the approach that best serves the matter at hand." },
    ],
    promise: "You will know the strategy, the reason for it and the next meaningful action—not simply that a matter is ‘in progress’.",
  },
};

export function generateStaticParams() {
  return Object.keys(services).map((service) => ({ service }));
}

export async function generateMetadata({ params }: { params: Promise<{ service: string }> }): Promise<Metadata> {
  const { service } = await params;
  const page = services[service];
  if (!page) return {};
  return {
    title: `${page.eyebrow} | IM Attorneys Pretoria`,
    description: page.summary,
    alternates: { canonical: `/services/${service}` },
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ service: string }> }) {
  const { service } = await params;
  const page = services[service];
  if (!page) notFound();

  return (
    <main className="service-page">
      <header className="service-page-header">
        <a className="service-brand" href="/" aria-label="IM Attorneys home"><span>IM</span><i /><strong>IM Attorneys</strong></a>
        <nav aria-label="Service navigation">
          <a href="/#expertise">All practice areas</a>
          <a href="/#contact">Contact</a>
          <a className="service-header-call" href="tel:+27812488048">081 248 8048</a>
        </nav>
      </header>

      <section className="service-hero">
        <a className="service-back" href="/#expertise">← Back to practice areas</a>
        <span className="service-eyebrow">{page.eyebrow}</span>
        <h1>{page.title}</h1>
        <p>{page.lead}</p>
        <div className="service-hero-actions">
          <a className="service-primary" href={page.urgent ? "tel:+27812488048" : "/#contact"}>{page.urgent ? "Call the 24/7 bail line" : "Discuss your matter"} <span>→</span></a>
          <a className="service-secondary" href="mailto:attorneys@iminc.co.za">Email the firm</a>
        </div>
        <div className="service-hero-mark" aria-hidden="true">IM</div>
      </section>

      <section className="service-overview">
        <div><span>01 / The matter</span><h2>Clear counsel begins with the real situation.</h2></div>
        <p>{page.summary}</p>
      </section>

      <section className="service-focus-section">
        <div className="service-section-title"><span>02 / Areas of focus</span><h2>How we can help</h2></div>
        <div className="service-focus-grid">
          {page.focus.map((item, index) => <article key={item}><small>{String(index + 1).padStart(2, "0")}</small><h3>{item}</h3><span>→</span></article>)}
        </div>
      </section>

      <section className="service-decision-section">
        <div className="service-decision-intro">
          <span>03 / The detail that matters</span>
          <h2>{page.decisionTitle}</h2>
          <p>{page.decisionCopy}</p>
        </div>
        <div className="service-considerations">
          {page.considerations.map((item, index) => (
            <article key={item.title}>
              <small>{String(index + 1).padStart(2, "0")}</small>
              <h3>{item.title}</h3>
              <p>{item.copy}</p>
            </article>
          ))}
        </div>
        <blockquote>“{page.promise}”</blockquote>
      </section>

      <section className="service-process">
        <div className="service-section-title"><span>04 / Your next step</span><h2>A purposeful way forward.</h2></div>
        <div className="service-process-list">
          {page.wayForward.map((item, index) => <div key={item}><strong>{String(index + 1).padStart(2, "0")}</strong><p>{item}</p></div>)}
        </div>
      </section>

      <section className="service-contact-card">
        <span>IM Attorneys · Menlyn Maine, Pretoria</span>
        <h2>Start with one clear conversation.</h2>
        <p>Share the essentials of your matter. We will help clarify the legal position and the most sensible next step.</p>
        <div><a href="/#contact">Book a consultation <span>→</span></a>{page.urgent && <a href="tel:+27812488048">Call 24/7: 081 248 8048</a>}</div>
      </section>

      <footer className="service-footer"><a href="/">IM Attorneys</a><span>Information on this page is general and does not constitute legal advice.</span><a href="https://www.instagram.com/imattorneys/" target="_blank" rel="noreferrer">Instagram</a></footer>
    </main>
  );
}
