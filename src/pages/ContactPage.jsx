import { Shell, Eyebrow } from "../components.jsx";

/* ─────────────────────────── ContactPage ─────────────────────────── */

export const ContactPage = () => (
  <div>
    {/* Hero */}
    <section className="pt-28 md:pt-40 pb-12 md:pb-20">
      <Shell>
        <div className="grid grid-cols-12 gap-8 md:gap-12 items-center">
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Contact</Eyebrow>
            <h1 className="font-serif t-display text-ink">Get in touch.</h1>
            <p className="t-body-lg text-ink-2 mt-8 max-w-xl">
              Communication is personal and confidential. Reach out through the channel that fits the moment.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-5">
            <div className="aspect-[4/5] overflow-hidden bg-paper-2">
              <img
                src="/images/PV6A3637_sm.jpg"
                alt="Nadiia Nedorezova — Leadership Coach"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </Shell>
    </section>

    {/* Channels */}
    <section className="border-t border-rule section">
      <Shell>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          {/* Primary */}
          <div className="col-span-12 lg:col-span-7">
            <Eyebrow>Primary channels</Eyebrow>
            <h2 className="t-title-2 text-ink font-medium mb-3">Direct and formal.</h2>
            <p className="t-body text-ink-2 mb-10 max-w-lg">
              For inquiries, introductions, and networking.
            </p>
            <div className="border-t border-rule">
              <a
                href="mailto:nadiia@nedorezova.coach"
                className="border-b border-rule py-6 md:py-7 flex items-center justify-between gap-6 group"
              >
                <div>
                  <span className="t-micro text-ink-3 block mb-2">Email</span>
                  <span className="t-title-3 text-ink group-hover:text-accent transition-colors">
                    nadiia@nedorezova.coach
                  </span>
                </div>
                <span className="material-symbols-outlined text-ink-3 group-hover:text-accent transition-colors">
                  arrow_forward
                </span>
              </a>
              <a
                href="https://www.linkedin.com/in/nadiia-nedorezova-64535728/"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-rule py-6 md:py-7 flex items-center justify-between gap-6 group"
              >
                <div>
                  <span className="t-micro text-ink-3 block mb-2">Executive networking</span>
                  <span className="t-title-3 text-ink group-hover:text-accent transition-colors">LinkedIn</span>
                </div>
                <span className="material-symbols-outlined text-ink-3 group-hover:text-accent transition-colors">
                  north_east
                </span>
              </a>
            </div>
          </div>

          {/* Secondary */}
          <div className="col-span-12 lg:col-span-5">
            <div className="bg-paper-2 border border-rule p-8 md:p-10 h-full">
              <Eyebrow>Secondary channels</Eyebrow>
              <h2 className="t-title-2 text-ink font-medium mb-3">Secure messaging.</h2>
              <p className="t-body-sm text-ink-2 mb-8 max-w-sm">
                Shared privately after initial contact via email.
              </p>
              <div className="border-t border-rule mb-8">
                {["WhatsApp", "Telegram"].map((app) => (
                  <div key={app} className="border-b border-rule py-4 flex items-center justify-between">
                    <div>
                      <span className="t-label text-ink">{app}</span>
                      <span className="t-micro text-ink-3 block mt-1">By request</span>
                    </div>
                    <span className="material-symbols-outlined text-ink-3" style={{ fontSize: 16 }}>lock</span>
                  </div>
                ))}
              </div>
              <div className="flex items-start gap-3 pt-5 border-rule">
                <span
                  className="material-symbols-outlined text-ink-3 shrink-0"
                  style={{ fontSize: 18 }}
                >
                  shield
                </span>
                <span className="t-micro text-ink-3">
                  All communications are strictly confidential
                </span>
              </div>
            </div>
          </div>
        </div>
      </Shell>
    </section>

    {/* Closing note */}
    <section className="border-t border-rule section-sm">
      <Shell>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-8">
            <p className="font-serif italic text-ink text-2xl md:text-3xl leading-snug">
              "The work begins with assessing the true scale of the current problem and its impact on your career — because the right solution follows from that."
            </p>
          </div>
        </div>
      </Shell>
    </section>
  </div>
);
