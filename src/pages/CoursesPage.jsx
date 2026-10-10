import { useState, useEffect, useRef } from "react";
import { Shell, Eyebrow } from "../components.jsx";

/* ─────────────────────────── Courses content ─────────────────────────── */

const courseList = [
  {
    id: "initiation", n: "01", tag: "Entering the role",
    title: "The Leadership Initiation",
    sub: "Fears, entry scenarios, team expectations, practical tools",
    desc: "For managers who have just taken on a team, or who have never looked at what is behind their results. The fears depend on the route into the role: a promoted expert, a hire from a competitor, a move to another team or market.",
    who: "New and experienced managers; companies that promote experts or hire managers from outside.",
    file: "The_Leadership_Initiation", cover: "cover-initiation.png",
  },
  {
    id: "transformation", n: "02", tag: "Decisions from above",
    title: "The Manager's Transformation",
    sub: "Difficult decisions in hard times: reorganisation, redundancies, project closures",
    desc: "For managers who carry decisions they did not make. Choosing an approach to each type of difficult decision, defining your role towards the business and the team, planning the next transition.",
    who: "Managers facing reorganisation, redundancies or a project closure; companies that want managers prepared before the change lands.",
    file: "The_Managers_Transformation", cover: "cover-transformation.png",
  },
  {
    id: "managing", n: "03", tag: "Three states, three decisions",
    title: "Managing Burnout, Chronic Anxiety and Fatigue",
    sub: "Telling the three apart, and what a manager does about each: in yourself, your team and your candidates",
    desc: "The three states look alike and need different decisions. Managers learn to tell them apart, notice red flags and choose a response: support, change the workload, rethink a role or make a staffing decision. Professional development for managers, not therapy.",
    who: "Managers, and HR, L&D and People Partners who look after teams after reorganisation or redundancies.",
    file: "Managing_Burnout_Chronic_Anxiety_Fatigue", cover: "cover-managing.png",
  },
];

// [situation quote, index into courseList]
const picks = [
  ["I have just been given a team, and I do not know what they expect from me.", 0],
  ["A reorganisation is coming, and I am the one who tells the team.", 1],
  ["The team is fading, and I cannot tell whether it is tiredness, anxiety or burnout.", 2],
];

const stats = [
  { value: "1,000+", note: "managers trained over the last six years" },
  { value: "9.3", suffix: " / 10", note: "average participant satisfaction (CSI) across my training programmes" },
  { value: "19", note: "years in HR: recruitment, corporate training, coaching" },
  { value: "ACC", note: "certified coach, ICF and EMCC" },
];

const methodSteps = [
  "A conversation about the request behind the request. What was ordered is not always what the team needs.",
  "The programme is adapted to the context of your company: the situation, the group, the language.",
  "Delivery online or on site, in English, Russian or Ukrainian.",
];

const coursePath = (file) => "/courses/" + file;

// Click-handler only — never called during render.
const goTo = (id) => {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
};

/* ─────────────────────────── CoursesPage ─────────────────────────── */

export const CoursesPage = () => {
  const [open, setOpen] = useState(null);
  const triggerRef = useRef(null);

  const openDeck = (i, e) => {
    triggerRef.current = e.currentTarget;
    setOpen(i);
  };
  const close = () => setOpen(null);

  useEffect(() => {
    if (open === null) return;
    const trigger = triggerRef.current;
    const onKey = (e) => { if (e.key === "Escape") setOpen(null); };
    const onMsg = (e) => { if (e.data === "deck-close") setOpen(null); };
    window.addEventListener("keydown", onKey);
    window.addEventListener("message", onMsg);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("message", onMsg);
      document.body.style.overflow = prev;
      if (trigger && trigger.isConnected) trigger.focus();
    };
  }, [open]);

  const current = open === null ? null : courseList[open];

  return (
    <div>
      {/* Hero */}
      <section className="pt-28 md:pt-40 pb-16 md:pb-24">
        <Shell>
          <Eyebrow>Courses</Eyebrow>
          <h1 className="font-serif t-display text-ink mb-8">
            Training for <span className="italic">managers</span>
          </h1>
          <p className="t-body-lg text-ink-2 max-w-xl mb-10">
            Three programmes for managers who carry the team. Adapted to your company, in English, Russian or Ukrainian, online or on site.
          </p>
          <button type="button" onClick={() => goTo("order")} className="btn btn-primary">
            Order the course
          </button>
        </Shell>
      </section>

      {/* Which programme */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Where to start</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">Which programme fits your situation.</h2>
            </div>
            <div className="col-span-12 lg:col-span-8">
              <div className="border-t border-rule">
                {picks.map(([q, k], i) => (
                  <button key={i} type="button" className="cr-pick group" onClick={() => goTo(courseList[k].id)}>
                    <span className="t-micro text-accent">{"0" + (i + 1)}</span>
                    <span className="font-serif italic text-ink text-xl md:text-2xl leading-snug">"{q}"</span>
                    <span className="col-start-2 md:col-start-auto t-label text-ink-3 group-hover:text-accent transition-colors md:text-right">
                      {courseList[k].title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Shell>
      </section>

      {/* Programmes */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 mb-6 md:mb-10">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Programmes</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">Three programmes.</h2>
            </div>
          </div>
          <div className="border-t border-rule">
            {courseList.map((c, i) => (
              <article key={c.id} id={c.id} className="cr-row scroll-mt-24">
                <button
                  type="button"
                  className="cr-cover"
                  onClick={(e) => openDeck(i, e)}
                  aria-label={"View presentation: " + c.title}
                >
                  <img src={coursePath(c.cover)} alt="" loading="lazy" />
                </button>
                <div>
                  <span className="t-micro text-accent block mb-4">{c.n} · {c.tag}</span>
                  <h3 className="font-serif t-title-1 text-ink mb-4">{c.title}</h3>
                  <p className="t-body-lg text-ink-2 mb-5">{c.sub}</p>
                  <p className="t-body text-ink-2 max-w-xl">{c.desc}</p>
                </div>
                <div>
                  <span className="t-micro text-ink-3 block mb-3">For whom</span>
                  <p className="t-body-sm text-ink-2 mb-8">{c.who}</p>
                  <div className="flex flex-wrap gap-3">
                    <button type="button" onClick={(e) => openDeck(i, e)} className="btn btn-primary">
                      View presentation
                    </button>
                    <a href={coursePath(c.file + ".pdf")} download className="btn btn-ghost">Download PDF</a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Shell>
      </section>

      {/* Trust */}
      <section className="border-t border-rule section bg-paper-2">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12 md:mb-14">
            <div className="col-span-12 lg:col-span-4">
              <Eyebrow>Why you can trust this</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium">Track record.</h2>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 mb-12">
            {stats.map((s) => (
              <div key={s.value}>
                <div className="font-serif text-5xl tracking-[-0.02em] text-accent">
                  {s.value}
                  {s.suffix && <span className="text-ink-3 text-[1.5rem]">{s.suffix}</span>}
                </div>
                <p className="t-body-sm text-ink-2 mt-3">{s.note}</p>
              </div>
            ))}
          </div>
          <p className="t-body text-ink-2 max-w-3xl border-t border-rule pt-6">
            Certified Corporate Trainer, Büro Richter. Guest trainer for Accenture and NES Fircroft. Trainer and course author at LABA, an international business school, 2018 to 2023. LABA's IT Recruiter course is approved by the HR Certification Institute for recertification credit (20.5 credit hours).
          </p>
        </Shell>
      </section>

      {/* How a programme comes together */}
      <section className="border-t border-rule section">
        <Shell>
          <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
            <div className="col-span-12 lg:col-span-5">
              <Eyebrow>Method</Eyebrow>
              <h2 className="t-title-1 text-ink font-medium mb-6">From the request to the room.</h2>
              <p className="t-body-lg text-ink-2 max-w-md">
                Format and duration depend on the programme and the group, and are agreed with you.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-7">
              <ol className="border-t border-rule mb-10">
                {methodSteps.map((s, i) => (
                  <li key={i} className="border-b border-rule py-5 flex gap-8 items-baseline">
                    <span className="t-micro text-accent w-20 shrink-0 whitespace-nowrap">Step {["I", "II", "III"][i]}</span>
                    <span className="t-body text-ink">{s}</span>
                  </li>
                ))}
              </ol>
              <p className="t-body-sm text-ink-3 max-w-lg">
                The programmes are professional development for managers. They are not therapy or medical advice.
              </p>
            </div>
          </div>
        </Shell>
      </section>

      {/* Order */}
      <section id="order" className="bg-accent text-paper relative overflow-hidden scroll-mt-24 section-lg">
        <svg
          className="absolute right-[6%] top-1/2 -translate-y-1/2 w-[300px] h-[300px] hidden lg:block"
          viewBox="0 0 100 100"
          aria-hidden="true"
        >
          <path fill="#ffffff" d="M44 0H56C58 22 78 42 100 44V56C78 58 58 78 56 100H44C42 78 22 58 0 56V44C22 42 42 22 44 0Z" />
        </svg>
        <Shell>
          <div className="relative">
            <span className="t-label text-paper/75 block mb-4">Start</span>
            <h2 className="font-serif t-title-1 mb-10">Order the course</h2>
            <dl className="grid grid-cols-[110px_1fr] gap-y-4 items-baseline mb-10">
              <dt className="t-label text-paper/75">Email</dt>
              <dd className="t-title-3 min-w-0 break-words">
                <a href="mailto:nadiia@nedorezova.coach" className="border-b border-paper/50">nadiia@nedorezova.coach</a>
              </dd>
              <dt className="t-label text-paper/75">Telegram</dt>
              <dd className="t-title-3 min-w-0 break-words">
                <a href="https://t.me/Nadiia_Nedorezova" target="_blank" rel="noopener noreferrer" className="border-b border-paper/50">
                  @Nadiia_Nedorezova
                </a>
              </dd>
              <dt className="t-label text-paper/75">WhatsApp</dt>
              <dd className="t-title-3 min-w-0 break-words">@Nadiia_Nedorezova</dd>
            </dl>
            <p className="t-body max-w-[460px] opacity-90">
              Online or on site. In English, Russian and Ukrainian. Adapted to the context of your company.
            </p>
          </div>
        </Shell>
      </section>

      {/* Presentation viewer */}
      {current && (
        <div
          className="fixed inset-0 z-[60] bg-ink/[.72] flex items-center justify-center p-4"
          onClick={close}
          role="dialog"
          aria-modal="true"
          aria-label={current.title}
        >
          <div className="bg-paper w-full max-w-[1160px] flex flex-col" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center gap-4 px-4 py-2.5 border-b border-rule">
              <span className="t-label text-ink-3 min-w-0 truncate">{current.title}</span>
              <div className="flex items-center gap-6 shrink-0">
                <a href={coursePath(current.file + ".pdf")} download className="t-label text-accent">Download PDF</a>
                <button type="button" onClick={close} aria-label="Close presentation" className="text-ink">
                  <span className="material-symbols-outlined" aria-hidden="true">close</span>
                </button>
              </div>
            </div>
            <iframe
              key={current.file}
              title={current.title}
              src={coursePath(current.file + ".html")}
              className="cr-frame"
              onLoad={(e) => e.target.focus()}
            />
          </div>
        </div>
      )}
    </div>
  );
};
