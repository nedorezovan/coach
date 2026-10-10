import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Shell, Eyebrow } from "../components.jsx";

/* ─────────────────────────── Home content ─────────────────────────── */

const recognitionItems = [
  "You carry more than you should",
  "Decisions feel heavier than before",
  "You can't afford mistakes anymore",
  "Too much depends on you",
  "Slowing down is not an option",
  "Continuing like this is no longer sustainable",
];

const outcomes = [
  { title: "Clarity and precision", detail: "You start seeing your situation with clarity. Decisions become faster and more precise." },
  { title: "Control",               detail: "You regain a sense of control even when complexity has increased." },
  { title: "Sustainable growth",    detail: "The constant internal pressure decreases. You move forward without burning out." },
];

const steps = [
  "Diagnostic of current situation",
  "Evaluation of risks and stakes",
  "Building a realistic strategy of growth",
];

const cases = [
  {
    id: "01",
    role: "Senior leader after internal promotion, facing loss of control",
    happening: "New responsibilities without prior expertise. Pressure from top management with unrealistic expectations.",
    clear: "The situation was structurally flawed, not a personal failure.",
    outcome: "The client made a strategic decision, avoided burnout, and repositioned themselves on the market with stronger value.",
  },
  {
    id: "02",
    role: "Senior specialist aiming to transition into a leadership CPO role",
    happening: "There was a clear ambition to grow into a C-level position. At the same time, the client was convinced that their current manager would not support this transition. This led to considering opportunities outside the company as the primary path forward.",
    clear: "The perception of limited internal opportunities was shaped by a set of assumptions and untested interpretations. We identified the factors influencing confidence in leadership positioning and negotiation. The focus shifted to building strong vertical relationships and redefining internal positioning.",
    outcome: "The client secured a CPO role within the current company. This was followed by an expansion of responsibility — growing the team and increasing strategic influence.",
  },
  {
    id: "03",
    role: "Chief Operating Officer at the crossroads between two fundamentally different paths",
    happening: "One option was a major career step — leading an international branch of the company, requiring full relocation with the family. The alternative was to take a severance package and rebuild their position on the local market.",
    clear: "Within the first 15 minutes, the focus shifted. The question was not about compensation. It was about the reality of the future role — working dynamics with business owners, and the way business is actually run in that specific region. We unpacked the real risks and examined both options through the lens of long-term sustainability and life impact.",
    outcome: "With full clarity on the underlying risks, the client chose not to trade family stability for a professionally uncertain environment. The decision reduced internal tension, restored clarity, and allowed them to move forward with confidence.",
  },
  {
    id: "04",
    role: "Head of Project Office who rejoined the company from a competitor and promoted to Operations Director",
    happening: "Shortly after the promotion, the client was assigned a high-stakes task — to develop a three-year strategy for the division. Without prior strategic experience and under significant time pressure, the responsibility quickly turned into overwhelming pressure. The situation escalated, leading to burnout and eventual exit from the company.",
    clear: "In the very first session, the core issue became evident: the challenge was not a lack of capability, but a mismatch between the role and the expectations placed on it. Strategic planning at this level requires a different scope of responsibility, experience, and support than what was available. We also identified the exact points where pressure intensified without corresponding support from leadership.",
    outcome: "The client reframed the experience, moving away from a sense of personal failure towards a clear understanding of the systemic misalignment. We restored a sense of professional confidence and expertise, and defined concrete steps for recovery and re-entry into the market from a stronger position.",
  },
  {
    id: "05",
    role: "Chief Product Officer who realized they no longer wanted anything from life",
    happening: "Work became mechanical — attending meetings without engagement, declining new challenges, and avoiding responsibility. At home, life continued on autopilot — fulfilling roles without any sense of presence or connection.",
    clear: "We explored when this state began and what had broken underneath. The core pattern came from a professional sports background — the belief that if something doesn't work, you simply need to push harder. Over time, this approach led to chronic depletion and a loss of access to pleasure, interest, and intrinsic motivation. We separated genuine desire from imposed expectations and began rebuilding the ability to recognize what the client actually wants.",
    outcome: "The client started to regain access to their own motivation and internal direction. We introduced daily actions focused on restoring energy and engagement, and built a structured path out of burnout — towards a more stable, self-directed way of living and working.",
  },
];

/* ─────────────────────────── HomePage ─────────────────────────── */

export const HomePage = () => {
  const navigate = useNavigate();
  const [openCase, setOpenCase] = useState(null);

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
            <div className="col-span-12 lg:col-span-7">
              <Eyebrow>Leadership Coaching</Eyebrow>
              <h1 className="font-serif t-display text-ink mb-8">
                Grow <span className="italic">without burnout</span>
              </h1>
              <p className="t-body-lg text-ink-2 max-w-xl mb-10">
                I work with leaders who are still performing — but already paying too high a price for it.
              </p>
              <button onClick={() => navigate("/contact/")} className="btn btn-primary">
                Discuss your situation
              </button>
            </div>
            <div className="col-span-12 lg:col-span-5">
              <div className="aspect-[4/5] overflow-hidden bg-paper-2">
                <img
                  alt="Nadiia Nedorezova — Leadership Coach"
                  src="/images/PV6A3633_sm.jpg"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* Recognition */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Reality check</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">You might recognize this.</h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <p className="t-body-lg text-ink-2 max-w-2xl mb-10 md:mb-14">
                You are capable of more — but the cost of your decisions is getting higher.
              </p>
              <ul className="border-t border-rule">
                {recognitionItems.map((text, i) => (
                  <li key={i} className="border-b border-rule py-5 md:py-6 flex items-baseline gap-6 md:gap-10">
                    <span className="t-micro text-accent w-8 shrink-0">{String(i + 1).padStart(2, "0")}</span>
                    <span className="t-body md:t-body-lg text-ink">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Shell>
      </section>

      {/* Reframe — single statement */}
      <section className="border-t border-rule section-lg bg-paper-2">
        <Shell>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-10">
              <Eyebrow>Reframe</Eyebrow>
              <p className="font-serif t-title-1 text-ink">
                This is not about weakness. It's about the{" "}
                <span className="italic">level of responsibility</span>{" "}
                you're operating at.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* Outcomes */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 mb-12 md:mb-16">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Outcomes</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">What changes.</h2>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pt-2">
              <p className="t-body-lg text-ink-2 max-w-xl">
                The work delivers a specific shift — in how decisions are made, and in what they cost you.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-rule">
            {outcomes.map((o, i) => (
              <div
                key={i}
                className={`py-8 md:py-10 md:px-8 ${i !== 0 ? "border-t md:border-t-0 md:border-l border-rule" : ""}`}
              >
                <span className="t-micro text-ink-3 block mb-5">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="t-title-3 text-ink font-medium mb-3">{o.title}</h3>
                <p className="t-body text-ink-2">{o.detail}</p>
              </div>
            ))}
          </div>
        </Shell>
      </section>

      {/* How we work */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow>Method</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium mb-6">How we work.</h2>
              <p className="t-body-lg text-ink-2 mb-10 max-w-md">
                This is not about advice. It's a space where you start seeing things more clearly and making decisions you can rely on.
              </p>
              <ol className="border-t border-rule">
                {steps.map((s, i) => (
                  <li key={i} className="border-b border-rule py-5 flex gap-8 items-baseline">
                    <span className="t-micro text-accent w-12 shrink-0">Step {["I", "II", "III"][i]}</span>
                    <span className="t-body text-ink">{s}</span>
                  </li>
                ))}
              </ol>
            </div>
            <div className="col-span-12 lg:col-span-7 bg-paper-2 border border-rule p-8 md:p-12">
              <Eyebrow tone="muted">Format</Eyebrow>
              <h3 className="t-title-2 text-ink font-medium mb-6">
                1:1 coaching — focused, structured, tailored to your situation.
              </h3>
              <p className="t-body text-ink-2">
                Between sessions, you have direct decision support from me. When the pressure spikes, you have a thinking partner who understands the nuances of your world but remains unattached to the office politics.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* Cases */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 mb-10 md:mb-14">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Cases</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">Selected situations.</h2>
            </div>
            <div className="col-span-12 lg:col-span-8 lg:pt-2">
              <p className="t-body text-ink-2 max-w-xl">
                A short selection of situations worked through in recent practice. Names and identifying details are withheld.
              </p>
            </div>
          </div>
          <div className="border-t border-rule">
            {cases.map((c) => {
              const isOpen = openCase === c.id;
              return (
                <div key={c.id} className="border-b border-rule">
                  <button
                    onClick={() => setOpenCase(isOpen ? null : c.id)}
                    className="w-full flex items-center justify-between gap-6 py-6 md:py-8 text-left group"
                  >
                    <div className="flex items-baseline gap-6 md:gap-10 min-w-0">
                      <span className="t-micro text-accent w-8 shrink-0">{c.id}</span>
                      <span className="t-body md:t-body-lg text-ink group-hover:text-accent transition-colors">
                        {c.role}
                      </span>
                    </div>
                    <span
                      className={`material-symbols-outlined text-ink-3 group-hover:text-accent transition-all shrink-0 ${isOpen ? "rotate-45" : ""}`}
                    >
                      add
                    </span>
                  </button>
                  {isOpen && (
                    <div className="pb-10 md:pl-14 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
                      <div>
                        <span className="t-micro text-ink-3 block mb-3">What was happening</span>
                        <p className="t-body text-ink-2">{c.happening}</p>
                      </div>
                      <div>
                        <span className="t-micro text-ink-3 block mb-3">What became clear</span>
                        <p className="t-body text-ink-2">{c.clear}</p>
                      </div>
                      <div>
                        <span className="t-micro text-accent block mb-3">Outcome</span>
                        <p className="t-body text-ink-2">{c.outcome}</p>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </Shell>
      </section>

      {/* Closing CTA */}
      <section className="border-t border-rule section-lg">
        <Shell>
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 lg:col-span-9">
              <Eyebrow>Start</Eyebrow>
              <h2 className="font-serif t-title-1 text-ink mb-10">
                Ready to change{" "}
                <span className="italic">the way you work?</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <button onClick={() => navigate("/contact/")} className="btn btn-primary">
                  Discuss your situation
                </button>
                <button onClick={() => navigate("/about/")} className="btn btn-ghost">
                  About Nadiia
                </button>
              </div>
            </div>
          </div>
        </Shell>
      </section>
    </div>
  );
};
