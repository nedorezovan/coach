import { useNavigate } from "react-router-dom";
import { Shell, Eyebrow } from "../components.jsx";

/* ─────────────────────────── About content ─────────────────────────── */

const experience = [
  { years: "19", label: "HR Experience",          detail: "Across vertical and matrix structures — from startups to large holding companies." },
  { years: "12", label: "Recruitment",            detail: "Deep understanding of job responsibilities, role models, areas of responsibility, and influence across IT, digital, media, advertising, finance, and manufacturing." },
  { years: "6",  label: "Corporate Training",     detail: "More than 1,000 managers trained. Programmes on entering the leadership role, leading through reorganisation, and managing burnout, chronic anxiety and fatigue. Guest trainer for Accenture and NES Fircroft; trainer and course author at LABA. Certified trainer, Büro Richter." },
  { years: "10", label: "Psycholinguistics & NLP", detail: "Applied practice in language, cognition, and behavioural patterns in professional and organizational contexts." },
  { years: "6",  label: "Individual Coaching",    detail: "1:1 practice with a focus on neurobiology and neurophysiology. ICF & EMCC certified, ACC level." },
];

const clients = ["Amazon", "Google", "BMW", "Booking", "Vodafone", "Facebook", "Swedbank"];

/* ─────────────────────────── AboutPage ─────────────────────────── */

export const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-8">
              <Eyebrow>ICF &amp; EMCC certified · ACC level</Eyebrow>
              <h1 className="font-serif t-display italic text-ink mb-10">Nadiia Nedorezova</h1>
              <div className="max-w-2xl space-y-5">
                <p className="t-body-lg text-ink-2">
                  I work with leaders and decision-makers who are stacked. From the outside: growth, responsibility, results. Inside: constant pressure, decision fatigue, and reduced clarity.
                </p>
                <p className="t-body-lg text-ink">
                  Together we regain clarity in decision-making when pressure starts exceeding available capacity.
                </p>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 lg:pt-16">
              <div className="border-t border-rule pt-8 space-y-8">
                <div>
                  <span className="t-micro text-ink-3 block mb-3">Certified by</span>
                  <p className="t-body text-ink">ICF &amp; EMCC — ACC level</p>
                  <p className="t-body text-ink">Corporate Trainer · Büro Richter</p>
                </div>
                <div>
                  <span className="t-micro text-ink-3 block mb-3">Working across</span>
                  <p className="t-body text-ink-2">Europe · UK · CIS</p>
                  <p className="t-body text-ink-2">Based in Germany</p>
                </div>
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* Experience */}
      <section className="border-t border-rule section bg-paper-2">
        <Shell>
          <div className="grid grid-cols-12 gap-8 mb-10 md:mb-12">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow>Background</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">Grounded in real business constraints.</h2>
            </div>
            <div className="col-span-12 lg:col-span-7 lg:pt-2">
              <p className="t-body text-ink-2 max-w-xl">
                Nineteen years inside companies, observing how leadership actually breaks — and what it takes to put it back together.
              </p>
            </div>
          </div>
          <div className="border-t border-rule">
            {experience.map((item, i) => (
              <div key={i} className="border-b border-rule grid grid-cols-12 gap-4 md:gap-6 py-7 md:py-10 items-baseline">
                <div className="col-span-3 md:col-span-2 flex items-baseline gap-1">
                  <span className="font-serif text-4xl md:text-5xl text-ink leading-none">{item.years}</span>
                  <span className="t-micro text-ink-3">yrs</span>
                </div>
                <div className="col-span-9 md:col-span-3">
                  <h3 className="t-title-3 text-ink font-medium">{item.label}</h3>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <p className="t-body text-ink-2">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* Clients */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Clients</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">
                Leaders and experts from international organizations.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pt-3">
              <div className="flex flex-wrap gap-2">
                {clients.map((n) => (
                  <span key={n} className="tag">{n}</span>
                ))}
                <span className="tag tag-muted">and others</span>
              </div>
              <p className="t-body-sm text-ink-3 mt-8 max-w-lg">
                Past and current clients include leaders from international companies across Europe, the UK, and the CIS.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* CTA */}
      <section className="border-t border-rule section-lg">
        <Shell>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <Eyebrow>Start</Eyebrow>
              <h2 className="font-serif t-title-1 text-ink mb-6">Ready to change the way you work?</h2>
              <p className="t-body-lg text-ink-2 mb-10 max-w-xl">
                1:1 coaching only.
              </p>
              <button onClick={() => navigate("/contact/")} className="btn btn-primary">
                Discuss your situation
              </button>
            </div>
          </div>
        </Shell>
      </section>
    </div>
  );
};
