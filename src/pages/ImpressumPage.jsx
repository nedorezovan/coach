import { Shell, Eyebrow } from "../components.jsx";

/* ─────────────────────────── ImpressumPage ─────────────────────────── */

const impressumDe = [
  { label: "Name",                     value: "Nadiia Nedorezova" },
  { label: "Adresse",                  value: ["Berner Straße 4B", "81476 München", "Deutschland"] },
  { label: "Telefon",                  value: "+49 162 266 6342" },
  { label: "E-Mail",                   value: "nadiia@nedorezova.coach", href: "mailto:nadiia@nedorezova.coach" },
  { label: "Steuernummer",             value: "145/144/41708" },
  { label: "Berufsbezeichnung",        value: "Selbstständige Leadership Coach" },
  { label: "Inhaltlich verantwortlich", value: "Nadiia Nedorezova (Adresse wie oben)" },
];

const impressumEn = [
  { label: "Name",                       value: "Nadiia Nedorezova" },
  { label: "Address",                    value: ["Berner Straße 4B", "81476 Munich", "Germany"] },
  { label: "Phone",                      value: "+49 162 266 6342" },
  { label: "E-Mail",                     value: "nadiia@nedorezova.coach", href: "mailto:nadiia@nedorezova.coach" },
  { label: "Tax number (Steuernummer)",  value: "145/144/41708" },
  { label: "Professional title",         value: "Freelance Leadership Coach (Germany)" },
  { label: "Responsible for content",    value: "Nadiia Nedorezova (address as above)" },
];

const ImpressumTable = ({ rows }) => (
  <div className="border-t border-rule">
    {rows.map((row, i) => (
      <div key={i} className="border-b border-rule py-5 grid grid-cols-12 gap-4 items-baseline">
        <div className="col-span-12 md:col-span-4">
          <span className="t-micro text-ink-3">{row.label}</span>
        </div>
        <div className="col-span-12 md:col-span-8">
          {Array.isArray(row.value)
            ? row.value.map((line, j) => (
                <p key={j} className="t-body text-ink">{line}</p>
              ))
            : row.href
              ? <a href={row.href} className="link-inline t-body">{row.value}</a>
              : <p className="t-body text-ink">{row.value}</p>
          }
        </div>
      </div>
    ))}
  </div>
);

export const ImpressumPage = () => (
  <div>
    {/* Hero */}
    <section className="pt-28 md:pt-40 pb-16 md:pb-24">
      <Shell>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-8">
            <Eyebrow>Legal</Eyebrow>
            <h1 className="font-serif t-display text-ink">Impressum</h1>
          </div>
        </div>
      </Shell>
    </section>

    {/* German */}
    <section className="border-t border-rule section">
      <Shell>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <Eyebrow tone="muted">Deutsch</Eyebrow>
            <h2 className="t-title-2 text-ink font-medium">Angaben gemäß § 5 DDG</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ImpressumTable rows={impressumDe} />
          </div>
        </div>
      </Shell>
    </section>

    {/* English */}
    <section className="border-t border-rule section bg-paper-2">
      <Shell>
        <div className="grid grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-12 lg:col-span-4">
            <Eyebrow tone="muted">English</Eyebrow>
            <h2 className="t-title-2 text-ink font-medium">Information in accordance with § 5 DDG</h2>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <ImpressumTable rows={impressumEn} />
          </div>
        </div>
      </Shell>
    </section>
  </div>
);
