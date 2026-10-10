import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

/* ─────────────────────────── Primitives ─────────────────────────── */

export const Shell = ({ children, className = "" }) => (
  <div className={`shell ${className}`}>{children}</div>
);

export const Eyebrow = ({ children, tone = "accent", className = "" }) => (
  <span className={`t-label block mb-4 ${tone === "accent" ? "text-accent" : "text-ink-3"} ${className}`}>
    {children}
  </span>
);

export const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

/* ─────────────────────────── Navigation ─────────────────────────── */

// Pages are served as /about/, /contact/ … — compare paths in trailing-slash form
const withSlash = (p) => (p.endsWith("/") ? p : `${p}/`);

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isActive = (p) => withSlash(location.pathname) === p;
  const links = [
    { to: "/", label: "Home" },
    { to: "/about/", label: "About" },
    { to: "/contact/", label: "Contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-paper/90 backdrop-blur-md border-b border-rule" : "bg-paper/0"
      }`}
    >
      <div className="shell h-16 md:h-20 flex items-center justify-between">
        <Link to="/" className="font-serif italic text-xl text-ink">
          Nadiia Nedorezova
        </Link>
        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={`t-label transition-colors ${isActive(l.to) ? "text-ink" : "text-ink-3 hover:text-ink"}`}
            >
              <span className="relative inline-block">
                {l.label}
                {isActive(l.to) && (
                  <span className="absolute -bottom-2 left-0 right-0 h-px bg-ink"></span>
                )}
              </span>
            </Link>
          ))}
          <button onClick={() => navigate("/contact/")} className="btn btn-primary">
            Discuss your situation
          </button>
        </div>
        <button
          className="md:hidden p-2 text-ink"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
        </button>
      </div>
      {open && (
        <div className="md:hidden bg-paper border-t border-rule">
          <div className="shell py-6 flex flex-col gap-5">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className={`t-label ${isActive(l.to) ? "text-ink" : "text-ink-3"}`}
              >
                {l.label}
              </Link>
            ))}
            <button
              onClick={() => { navigate("/contact/"); setOpen(false); }}
              className="btn btn-primary mt-2 self-start"
            >
              Discuss your situation
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

/* ─────────────────────────── Footer ─────────────────────────── */

export const Footer = () => (
  <footer className="border-t border-rule">
    <Shell className="py-10 md:py-12 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
      <div>
        <span className="font-serif italic text-lg text-ink block">Nadiia Nedorezova</span>
        <span className="t-micro text-ink-3 mt-2 block">Leadership coaching · 1:1 only</span>
      </div>
      <div className="flex flex-wrap items-center gap-6 md:gap-8">
        <Link to="/impressum/" className="t-micro text-ink-3 hover:text-ink transition-colors">Impressum</Link>
        <span className="t-micro text-ink-3">© 2026 Nadiia Nedorezova</span>
      </div>
    </Shell>
  </footer>
);
