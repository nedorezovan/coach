import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { ScrollToTop, NavBar, Footer } from "./components.jsx";
import { HomePage } from "./pages/HomePage.jsx";
import { AboutPage } from "./pages/AboutPage.jsx";
import { ContactPage } from "./pages/ContactPage.jsx";
import { ImpressumPage } from "./pages/ImpressumPage.jsx";

/* ─────────────────────────── Routes ─────────────────────────── */

// Each route is prerendered to <path>index.html by scripts/prerender.mjs.
// title / description feed <title>, meta description, og:* and canonical.
export const routes = [
  {
    path: "/",
    Page: HomePage,
    title: "Nadiia Nedorezova | Leadership Coaching",
    description: "1:1 leadership coaching in Munich and across Europe for leaders and senior experts who need clarity and sound decisions under pressure.",
  },
  {
    path: "/about/",
    Page: AboutPage,
    title: "About Nadiia Nedorezova | Leadership Coaching",
    description: "ICF & EMCC certified leadership coach (ACC) with 19 years in HR, recruitment and corporate training. Based in Munich, working across Europe, the UK and the CIS.",
  },
  {
    path: "/contact/",
    Page: ContactPage,
    title: "Contact | Nadiia Nedorezova",
    description: "Get in touch with leadership coach Nadiia Nedorezova. Communication is personal and confidential — by email or LinkedIn.",
  },
  {
    path: "/impressum/",
    Page: ImpressumPage,
    title: "Impressum | Nadiia Nedorezova",
    description: "Impressum — Angaben gemäß § 5 DDG for nedorezova.coach.",
  },
];

// React Router v7 behaviour opted into early (silences the v6 future-flag warnings).
export const future = { v7_startTransition: true, v7_relativeSplatPath: true };

// Keeps <title> in sync on client-side navigation (prerendered pages already carry it).
const DocumentTitle = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    const route = routes.find((r) => r.path === (pathname.endsWith("/") ? pathname : `${pathname}/`));
    if (route) document.title = route.title;
  }, [pathname]);
  return null;
};

/* ─────────────────────────── App ─────────────────────────── */

// Rendered inside a router supplied by the caller:
// BrowserRouter in src/client.jsx, StaticRouter in src/server.jsx.
export const App = () => (
  <>
    <ScrollToTop />
    <DocumentTitle />
    <NavBar />
    <main>
      <Routes>
        {routes.map(({ path, Page }) => (
          <Route key={path} path={path} element={<Page />} />
        ))}
      </Routes>
    </main>
    <Footer />
  </>
);
