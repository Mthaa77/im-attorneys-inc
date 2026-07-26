import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About IM Attorneys | Purposeful Legal Counsel in Pretoria",
  description: "Meet the people, principles and perspective behind IM Attorneys in Menlyn Maine, Pretoria.",
};

const principles = [
  ["01", "Direct, personal counsel", "Every matter begins with the facts, risks and priorities that are unique to you—not a template."],
  ["02", "Clarity without distance", "The law can be complex. The way your attorney communicates with you should never leave you in the dark."],
  ["03", "Commercially aware thinking", "We consider time, cost, relationships and reputation alongside the legal position, so advice works in the real world."],
  ["04", "Representation with direction", "Every action should serve an objective. We prepare carefully, act ethically and remain focused on meaningful progress."],
];

const counselPath = [
  ["Listen before advising", "We begin by understanding the people, commercial realities and immediate pressure behind the legal question."],
  ["Define the real objective", "A technically correct answer is not enough. We identify what a useful outcome should look like for you."],
  ["Build a proportionate strategy", "The next step is matched to the risk, urgency and value of the matter—from careful negotiation to decisive litigation."],
  ["Keep you oriented", "You receive practical explanations, honest expectations and a clear view of what is happening next."],
];

export default function AboutPage() {
  return (
    <main className="editorial-page about-page">
      <header className="editorial-header">
        <a href="/" className="editorial-brand"><span>IM</span><i /><strong>IM Attorneys</strong></a>
        <nav><a href="/#expertise">Practice areas</a><a href="/insights">Insights</a><a className="editorial-header-cta" href="/contact">Contact the firm</a></nav>
      </header>

      <section className="editorial-hero about-hero">
        <div><span className="editorial-kicker">About IM Attorneys</span><h1>Rigorous legal thinking.<br /><em>Human</em> counsel.</h1><p>IM Attorneys is a boutique Pretoria law firm for people and businesses who need legal advice that feels clear, considered and connected to real life.</p><a className="editorial-primary" href="/contact">Begin a conversation <b>→</b></a></div>
        <figure><img src="/assets/ingrid-mtsweni.webp" alt="Ingrid Mtsweni, founder and director of IM Attorneys" width={1200} height={1200} /><figcaption><span>Founder & Director</span><strong>Ingrid Mtsweni</strong></figcaption></figure>
        <div className="editorial-hero-mark" aria-hidden="true">IM</div>
      </section>

      <section className="about-statement">
        <span>Our point of view</span><h2>Good counsel should make the road ahead feel more organised—not more intimidating.</h2><p>Whether a matter concerns your family, freedom, legacy or business, you deserve an attorney who listens closely, communicates honestly and helps you make decisions with a clear sense of what comes next.</p>
      </section>

      <section className="about-profile">
        <div className="about-profile-intro"><span className="editorial-kicker">Boutique by design</span><h2>Close attention. Senior thinking. Advice shaped around the matter in front of us.</h2></div>
        <div className="about-profile-grid">
          <article><strong>2023</strong><span>Firm established</span><p>A modern Pretoria practice founded to deliver purposeful, personal legal counsel.</p></article>
          <article><strong>Pretoria</strong><span>Rooted in Menlyn Maine</span><p>Accessible to individuals, families and businesses across Gauteng and beyond.</p></article>
          <article><strong>100%</strong><span>Female black-owned</span><p>A proudly South African firm grounded in excellence, representation and Ubuntu.</p></article>
          <article><strong>One firm</strong><span>Connected advice</span><p>Dispute, family, criminal, commercial and legacy considerations are viewed together.</p></article>
        </div>
      </section>

      <section className="about-founder">
        <figure><img src="/assets/im-team-office.jpg" alt="IM Attorneys team working together in the office" width={1200} height={900} /></figure>
        <div><span className="editorial-kicker">A firm built with purpose</span><h2>Built at the intersection of law, empathy and strategy.</h2><p>Ingrid Mtsweni founded IM Attorneys in 2023 after building experience across private practice and the corporate environment. Her approach is shaped by a simple belief: excellent legal work must account for both the legal principles and the human consequences of a decision.</p><p>That perspective runs through the firm—from the first enquiry to the preparation of a brief, the explanation of a strategy and representation when the stakes are high.</p><div className="about-signature"><strong>Ingrid Mtsweni</strong><span>Attorney · Founder · Director</span></div></div>
      </section>

      <section className="about-principles"><div className="editorial-section-heading"><span>The IM Standard</span><h2>The principles behind every brief.</h2><p>Legal excellence is not only measured by what is argued. It is felt in how carefully a matter is understood and how purposefully every next step is chosen.</p></div><div className="about-principle-grid">{principles.map(([number, title, copy]) => <article key={number}><small>{number}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></section>

      <section className="about-counsel">
        <div className="about-counsel-copy"><span className="editorial-kicker">How we work</span><h2>Legal strategy that stays connected to your life and business.</h2><p>We do not rush to the loudest remedy. We examine the position, the evidence, the relationships involved and the consequences of each available route. That creates advice you can understand—and a strategy you can stand behind.</p><a href="/contact">Discuss your matter <b>→</b></a></div>
        <div className="about-counsel-steps">{counselPath.map(([title, copy], index) => <article key={title}><small>0{index + 1}</small><div><h3>{title}</h3><p>{copy}</p></div></article>)}</div>
      </section>

      <section id="team" className="about-team"><div className="editorial-section-heading"><span>Our legal team</span><h2>Rigour, empathy & resolve.</h2></div><div className="about-team-grid"><article><img src="/assets/katlego-seitisho.webp" alt="Katlego Seitisho, Litigation Attorney" width={1000} height={1000} /><span>Litigation Attorney</span><h3>Katlego Seitisho</h3></article><article><img src="/assets/mmabatho-moncha.webp" alt="Mmabatho Moncha, Candidate Attorney" width={1000} height={1000} /><span>Candidate Attorney</span><h3>Mmabatho Moncha</h3></article><div className="about-team-note"><strong>100% female black-owned</strong><p>Grounded in ethical integrity, Ubuntu, excellence and representation.</p><a href="/contact">Meet the firm in Menlyn Maine <b>→</b></a></div></div></section>

      <section className="editorial-closing"><span>IM Attorneys · Menlyn Maine, Pretoria</span><h2>One clear conversation can change what happens next.</h2><p>Tell us what you are facing. We will help organise the legal questions and guide you toward the right next step.</p><a href="/contact">Book a consultation <b>→</b></a></section>
      <footer className="editorial-footer"><a href="/">IM Attorneys</a><span>Information on this website is general and does not constitute legal advice.</span><a href="/insights">Read our insights</a></footer>
    </main>
  );
}
