import React, { useState, useEffect } from "react";
import {
  Check,
  ArrowRight,
  Leaf,
  LineChart,
  Shield,
  Brain,
  Users,
  PlayCircle,
  Phone,
  Mail,
  MapPin,
  BookOpen,
  Hammer,
  Layers,
  Gauge,
  Compass,
  Cog,
} from "lucide-react";

// Guild & Grove — Single-file React site
// Sections: Nav, Hero (+ Calculator), Social Proof, Services, Approach, Outcomes, Programs, Resources, About, Contact, Footer

const nav = [
  { label: "Services", href: "#services" },
  { label: "Approach", href: "#approach" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Programs", href: "#programs" },
  { label: "Resources", href: "#resources" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Stat = ({ value, label }) => (
  <div className="rounded-2xl bg-white/70 shadow-sm ring-1 ring-black/5 p-6 text-center">
    <div className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900">
      {value}
    </div>
    <div className="mt-1 text-sm text-emerald-800/80">{label}</div>
  </div>
);

const Pill = ({ children }) => (
  <span className="inline-flex items-center gap-2 rounded-full border border-emerald-700/20 bg-white/60 px-3 py-1 text-xs font-medium text-emerald-900 shadow-sm">
    {children}
  </span>
);

const ListItem = ({ icon: Icon, title, children }) => (
  <div className="group rounded-2xl border border-emerald-900/10 bg-white/60 p-6 shadow-sm transition hover:shadow-md">
    <div className="flex items-start gap-3">
      <div className="mt-1 rounded-xl bg-emerald-50 p-2 ring-1 ring-emerald-700/10">
        <Icon className="h-5 w-5 text-emerald-700" />
      </div>
      <div>
        <h4 className="text-emerald-950 font-semibold tracking-tight">{title}</h4>
        <p className="mt-1 text-sm leading-6 text-emerald-900/80">{children}</p>
      </div>
    </div>
  </div>
);

const CheckRow = ({ children }) => (
  <li className="flex items-start gap-3 text-emerald-950">
    <Check className="mt-1 h-5 w-5 shrink-0 text-emerald-600" />
    <span className="text-sm leading-6">{children}</span>
  </li>
);

const CTA = ({ href = "#contact", children = "Book a Free Recruitment Audit" }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-5 py-3 text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
  >
    {children}
    <ArrowRight className="h-5 w-5" />
  </a>
);

const Secondary = ({ href = "#services", children = "Explore Our Operating Model" }) => (
  <a
    href={href}
    className="inline-flex items-center justify-center gap-2 rounded-2xl border border-emerald-900/20 bg-white/70 px-5 py-3 text-emerald-900 shadow-sm transition hover:bg-white"
  >
    {children}
  </a>
);

const Badge = ({ children }) => (
  <span className="inline-block rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold text-emerald-800 ring-1 ring-emerald-700/20">
    {children}
  </span>
);

const GradientBG = () => (
  <div aria-hidden className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[40rem] w-[40rem] rounded-full bg-emerald-200/40 blur-3xl" />
    <div className="absolute -bottom-40 left-10 h-[28rem] w-[28rem] rounded-full bg-emerald-300/30 blur-3xl" />
    <div className="absolute -right-20 top-40 h-[24rem] w-[24rem] rounded-full bg-emerald-100 blur-3xl" />
  </div>
);

const FooterLink = ({ href = "#", children }) => (
  <a href={href} className="text-sm text-emerald-100/80 hover:text-white">
    {children}
  </a>
);

// --- Agency Fees Savings Calculator (Hero card replacement)
const AgencySavingsCalculator = () => {
  const [hires, setHires] = useState(20);
  const [salary, setSalary] = useState(60000);
  const [percent, setPercent] = useState(20);

  const safeNum = (v, def = 0) => {
    const n = Number(v);
    return Number.isFinite(n) ? n : def;
  };

  const fees =
    Math.max(0, safeNum(hires)) *
    Math.max(0, safeNum(salary)) *
    (Math.max(0, safeNum(percent)) / 100);

  const savingsLow = fees * 0.4; // 40% reduction
  const savingsHigh = fees * 0.7; // 70% reduction
  const perHire = hires > 0 ? fees / hires : 0;

  const fmt = (n) =>
    new Intl.NumberFormat("en-GB", {
      style: "currency",
      currency: "GBP",
      maximumFractionDigits: 0,
    }).format(isFinite(n) ? n : 0);

  return (
    <div
      id="agency-calc"
      className="relative mx-auto w-full max-w-md overflow-hidden rounded-3xl border border-emerald-900/10 bg-white shadow-xl"
    >
      <div className="grid gap-4 p-6">
        <div className="flex items-center justify-between">
          <h3 className="text-base font-semibold text-emerald-900">Agency fees savings</h3>
          <Badge>Estimator</Badge>
        </div>

        <div className="grid grid-cols-3 gap-3">
          <label className="text-xs text-emerald-900/80">
            Hires / year
            <input
              type="number"
              min={0}
              step={1}
              value={hires}
              onChange={(e) => setHires(parseInt(e.target.value || "0", 10))}
              className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-2 py-1 text-sm outline-none ring-emerald-600 focus:ring"
            />
          </label>
          <label className="text-xs text-emerald-900/80">
            Avg salary (£)
            <input
              type="number"
              min={0}
              step={1000}
              value={salary}
              onChange={(e) => setSalary(parseInt(e.target.value || "0", 10))}
              className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-2 py-1 text-sm outline-none ring-emerald-600 focus:ring"
            />
          </label>
          <label className="text-xs text-emerald-900/80">
            Agency %
            <input
              type="number"
              min={0}
              max={100}
              step={1}
              value={percent}
              onChange={(e) => setPercent(parseInt(e.target.value || "0", 10))}
              className="mt-1 w-full rounded-lg border border-emerald-900/20 bg-white px-2 py-1 text-sm outline-none ring-emerald-600 focus:ring"
            />
          </label>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-700/10">
            <div className="text-xs text-emerald-900/70">Estimated annual fees</div>
            <div className="mt-1 text-xl font-semibold text-emerald-900">{fmt(fees)}</div>
            <div className="mt-1 text-[11px] text-emerald-900/60">≈ {fmt(perHire)} per hire</div>
          </div>
          <div className="rounded-xl bg-emerald-50 p-4 ring-1 ring-emerald-700/10">
            <div className="text-xs text-emerald-900/70">Potential savings</div>
            <div className="mt-1 text-sm text-emerald-900">
              <div><span className="text-emerald-700 font-semibold">40%</span> → {fmt(savingsLow)}</div>
              <div className="mt-1"><span className="text-emerald-700 font-semibold">70%</span> → {fmt(savingsHigh)}</div>
            </div>
          </div>
        </div>

        <a
          href="#contact"
          className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-700 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-600"
        >
          Claim your free audit <ArrowRight className="h-4 w-4" />
        </a>

        <p className="text-[11px] text-emerald-900/60">
          This estimator multiplies hires × salary × agency%. Savings bands reflect typical reductions after in-house uplift.
        </p>
      </div>
    </div>
  );
};

const Logo = () => (
  <div className="flex items-center gap-2">
    <div className="grid h-9 w-9 place-content-center rounded-2xl bg-emerald-700 text-white shadow-sm">
      <Leaf className="h-5 w-5" />
    </div>
    <div className="leading-tight">
      <div className="font-serif text-xl font-semibold text-emerald-950">
        Guild &amp; Grove
      </div>
      <div className="text-[11px] uppercase tracking-wider text-emerald-800/70">
        Grow in-house hiring mastery
      </div>
    </div>
  </div>
);

function useScroll() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

// Self-tests (non-blocking) to catch missing sections in dev
function runSelfTests() {
  const requiredIds = ["services","approach","outcomes","programs","resources","about","contact"];
  requiredIds.forEach((id) => {
    // eslint-disable-next-line no-console
    console.assert(document.getElementById(id), `Missing section #${id} (self-test)`);
  });
  // eslint-disable-next-line no-console
  console.assert(document.querySelector("form"), "Contact form not found (self-test)");
  // eslint-disable-next-line no-console
  console.assert(document.getElementById("agency-calc"), "Agency calculator missing (self-test)");
}

// Lightweight SEO component without external deps
function Seo() {
  useEffect(() => {
    const setMeta = (selector, attr, value) => {
      let el = document.head.querySelector(selector);
      if (!el) {
        el = document.createElement("meta");
        document.head.appendChild(el);
      }
      el.setAttribute(attr, value);
    };

    const origin = window.location.origin || "https://www.guildandgrove.com";
    const canonicalHref = origin.endsWith("/") ? origin : origin + "/";

    document.title = "Guild & Grove | Grow in-house hiring mastery";

    // Viewport
    setMeta('meta[name="viewport"]', "name", "viewport");
    setMeta('meta[name="viewport"]', "content", "width=device-width, initial-scale=1");

    // Description
    setMeta('meta[name="description"]', "name", "description");
    setMeta(
      'meta[name="description"]',
      "content",
      "Guild & Grove is a people-strategy advisory that designs, builds, and upskills in-house recruitment so companies hire better—without agencies."
    );

    // Canonical
    let linkCanonical = document.head.querySelector('link[rel="canonical"]');
    if (!linkCanonical) {
      linkCanonical = document.createElement("link");
      linkCanonical.setAttribute("rel", "canonical");
      document.head.appendChild(linkCanonical);
    }
    linkCanonical.setAttribute("href", canonicalHref);

    // Open Graph
    [
      ["og:title", "Guild & Grove | Grow in-house hiring mastery"],
      ["og:description", "We build self-sustaining recruitment capability: operating model, training, and governance."],
      ["og:type", "website"],
      ["og:url", canonicalHref],
    ].forEach(([property, content]) => {
      let el = document.head.querySelector(`meta[property="${property}"]`);
      if (!el) { el = document.createElement("meta"); document.head.appendChild(el); }
      el.setAttribute("property", property);
      el.setAttribute("content", content);
    });

    // Twitter
    [
      ["twitter:card", "summary_large_image"],
      ["twitter:title", "Guild & Grove | Grow in-house hiring mastery"],
      ["twitter:description", "Design the system. Train the people. Govern the outcomes."],
    ].forEach(([name, content]) => {
      let el = document.head.querySelector(`meta[name="${name}"]`);
      if (!el) { el = document.createElement("meta"); document.head.appendChild(el); }
      el.setAttribute("name", name);
      el.setAttribute("content", content);
    });

    // Sitemap link (optional)
    let linkSitemap = document.head.querySelector('link[rel="sitemap"]');
    if (!linkSitemap) {
      linkSitemap = document.createElement("link");
      linkSitemap.setAttribute("rel", "sitemap");
      document.head.appendChild(linkSitemap);
    }
    linkSitemap.setAttribute("type", "application/xml");
    linkSitemap.setAttribute("href", canonicalHref + "sitemap.xml");

    // JSON-LD
    const jsonLd = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "Guild & Grove",
          url: canonicalHref,
          email: "hello@guildandgrove.com",
          address: { "@type": "PostalAddress", addressLocality: "London", addressCountry: "GB" },
          sameAs: [],
          slogan: "Grow in-house hiring mastery",
        },
        {
          "@type": "WebSite",
          name: "Guild & Grove",
          url: canonicalHref,
          potentialAction: {
            "@type": "SearchAction",
            target: canonicalHref + "?q={search_term_string}",
            "query-input": "required name=search_term_string",
          },
        },
      ],
    };
    let ldScript = document.getElementById("gg-jsonld");
    if (!ldScript) {
      ldScript = document.createElement("script");
      ldScript.type = "application/ld+json";
      ldScript.id = "gg-jsonld";
      document.head.appendChild(ldScript);
    }
    ldScript.textContent = JSON.stringify(jsonLd);

    // Robots
    setMeta('meta[name="robots"]', "name", "robots");
    setMeta('meta[name="robots"]', "content", "index,follow");
  }, []);
  return null;
}

export default function Website() {
  const scrolled = useScroll();
  useEffect(() => { runSelfTests(); }, []);

  return (
    <div className="min-h-screen bg-[#E6DECF] text-emerald-950">
      <Seo />
      {/* NAV */}
      <header
        className={`sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 ${
          scrolled ? "bg-white/70 shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex items-center justify-between py-3">
            <a href="#top" className="hover:opacity-90">
              <Logo />
            </a>
            <nav className="hidden gap-6 md:flex" aria-label="Primary">
              {nav.map((n) => (
                <a key={n.href} href={n.href} className="text-sm font-medium text-emerald-900/90 hover:text-emerald-900">
                  {n.label}
                </a>
              ))}
            </nav>
            <div className="hidden md:block">
              <CTA />
            </div>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative isolate">
        <GradientBG />
        <div className="mx-auto max-w-7xl px-4 pb-16 pt-10 sm:pt-16 lg:pt-20">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Pill><Shield className="h-4 w-4" /> Governed &amp; fair</Pill>
                <Pill><Gauge className="h-4 w-4" /> Measured improvement</Pill>
                <Pill><Users className="h-4 w-4" /> Capability &gt; dependency</Pill>
              </div>
              <h1 className="font-serif text-4xl leading-tight sm:text-5xl md:text-6xl">
                Build a self-sustaining recruitment engine.
              </h1>
              <p className="mt-4 max-w-xl text-emerald-900/80">
                We help you design the system, train the people, and govern the
                outcomes—so hiring becomes a strategic advantage.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <CTA />
                <Secondary />
                <a href="#video" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-900/80 hover:text-emerald-900">
                  <PlayCircle className="h-5 w-5" /> See a 90-second overview
                </a>
              </div>
              <div className="mt-10 grid max-w-2xl grid-cols-3 gap-4 sm:gap-6">
                <Stat value="30–50%" label="Faster time-to-hire in 2 quarters" />
                <Stat value="40–70%" label="Agency spend reduction (Yr 1)" />
                <Stat value="15–25pts" label="↑ Hiring Manager NPS" />
              </div>
            </div>

            {/* Replace hero card with calculator */}
            <div className="relative">
              <AgencySavingsCalculator />
            </div>
          </div>
        </div>
      </section>

      {/* Hidden anchor to satisfy #video link */}
      <section id="video" className="sr-only" aria-hidden>
        Overview video placeholder
      </section>

      {/* SOCIAL PROOF */}
      <section className="border-y border-emerald-900/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-sm text-emerald-900/70">Trusted by people-first teams to hire 3× faster</p>
            <div className="flex flex-wrap items-center gap-4 opacity-70">
              {["Northbridge Capital","Atlas Health","Keystone Tech","Stratum FinOps","Vector Labs"].map((n) => (
                <span key={n} className="rounded-xl border border-emerald-900/10 bg-white px-3 py-1 text-xs">{n}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Services</h2>
            <p className="mt-3 text-emerald-900/80">Strategy-first, non-agency support. We build capability, not dependency.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <ListItem icon={Layers} title="Operating Model &amp; Process Design">
              Role charters, RACI, structured intake, interviewing discipline, decision rights, offer stages, SLAs—codified and adopted.
            </ListItem>
            <ListItem icon={Hammer} title="Recruitment-in-a-Box (90 days)">
              Stand up an in-house function fast: ATS setup, templates, playbooks, interview kits, and hiring-manager training.
            </ListItem>
            <ListItem icon={BookOpen} title="Capability Uplift">
              Recruiter academies and hiring-manager certification—sourcing, assessment, and employer brand in modern practice.
            </ListItem>
            <ListItem icon={Shield} title="Data &amp; Governance">
              Metrics pack (TTH, quality-of-hire, funnel diagnostics), DEI safeguards, and compliance aligned to your regions.
            </ListItem>
            <ListItem icon={LineChart} title="Continuous Optimization">
              Quarterly audits, retros, experiments, and coach-alongside support to keep outcomes improving.
            </ListItem>
            <ListItem icon={Brain} title="Advisory on Change &amp; Adoption">
              Human-centered change so new ways of working actually stick—playbooks to practice to performance.
            </ListItem>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <CTA />
            <Secondary href="#programs">See programs</Secondary>
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section id="approach" className="relative border-y border-emerald-900/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Approach</h2>
            <p className="mt-3 text-emerald-900/80">Diagnose → Design → Enable → Govern. We leave you with skills, not dependencies.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            <ListItem icon={Compass} title="Diagnose">Baseline metrics, process map, pain points, and benchmarks.</ListItem>
            <ListItem icon={Layers} title="Design">Operating model, governance, toolchain, interview architecture.</ListItem>
            <ListItem icon={Users} title="Enable">Training, coaching, and change management for adoption.</ListItem>
            <ListItem icon={Cog} title="Govern">SLAs, dashboards, reviews, and iteration cadence.</ListItem>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section id="outcomes" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Outcomes</h2>
            <p className="mt-3 text-emerald-900/80">What we measure and improve—then hand over for you to own.</p>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-emerald-900/10 bg-white/60 p-6">
              <h4 className="font-semibold">Speed &amp; Quality</h4>
              <ul className="mt-3 space-y-2">
                <CheckRow>30–50% cut in time-to-hire in 2 quarters</CheckRow>
                <CheckRow>Higher offer-acceptance and 1st-year retention</CheckRow>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-white/60 p-6">
              <h4 className="font-semibold">Spend</h4>
              <ul className="mt-3 space-y-2">
                <CheckRow>40–70% reduction in agency costs (Yr 1)</CheckRow>
                <CheckRow>Right-size internal team with governance</CheckRow>
              </ul>
            </div>
            <div className="rounded-2xl border border-emerald-900/10 bg-white/60 p-6">
              <h4 className="font-semibold">Experience &amp; Trust</h4>
              <ul className="mt-3 space-y-2">
                <CheckRow>+15–25 pt Hiring Manager NPS</CheckRow>
                <CheckRow>Bias-aware, compliant, consistent decisions</CheckRow>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section id="programs" className="relative border-y border-emerald-900/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Programs</h2>
            <p className="mt-3 text-emerald-900/80">Choose the engagement that fits your stage and scale.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {/* Free Audit */}
            <div className="relative rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
              <Badge>Lead-in</Badge>
              <h4 className="mt-2 font-semibold">Free Recruitment Audit</h4>
              <p className="mt-2 text-sm text-emerald-900/80">
                60-minute review + 1-page findings: bottlenecks, quick wins, and a prioritized roadmap.
              </p>
              <ul className="mt-4 space-y-2">
                <CheckRow>Process map &amp; funnel snapshot</CheckRow>
                <CheckRow>Top 5 interventions</CheckRow>
                <CheckRow>Baseline KPI pack template</CheckRow>
              </ul>
              <div className="mt-6">
                <CTA href="#contact">Claim your audit</CTA>
              </div>
            </div>

            {/* Core Project */}
            <div className="relative rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
              <Badge>Project</Badge>
              <h4 className="mt-2 font-semibold">Core Transformation (6–12 weeks)</h4>
              <p className="mt-2 text-sm text-emerald-900/80">
                Diagnose, Design, Enable. Stand-up or overhaul your in-house function with measurable SLAs.
              </p>
              <ul className="mt-4 space-y-2">
                <CheckRow>Operating model &amp; governance</CheckRow>
                <CheckRow>ATS configuration &amp; templates</CheckRow>
                <CheckRow>Training &amp; adoption sprint</CheckRow>
              </ul>
              <div className="mt-6">
                <CTA href="#contact">Start a project</CTA>
              </div>
            </div>

            {/* Stewardship */}
            <div className="relative rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
              <Badge>Retainer</Badge>
              <h4 className="mt-2 font-semibold">Quarterly Stewardship</h4>
              <p className="mt-2 text-sm text-emerald-900/80">
                Ongoing metrics reviews, experiments, and coaching to sustain and extend gains.
              </p>
              <ul className="mt-4 space-y-2">
                <CheckRow>Quarterly audits &amp; roadmap</CheckRow>
                <CheckRow>Experiment cycles</CheckRow>
                <CheckRow>Coach-alongside sessions</CheckRow>
              </ul>
              <div className="mt-6">
                <CTA href="#contact">Talk retainers</CTA>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RESOURCES */}
      <section id="resources" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Resources</h2>
            <p className="mt-3 text-emerald-900/80">Playbooks, templates, and case notes to put mastery into practice.</p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[
              { title: "Structured Interview Kit", desc: "Role scorecards, questions, rubrics, and decision logs." },
              { title: "Recruitment Metrics Pack", desc: "Dashboards for TTH, funnel, quality-of-hire, and NPS." },
              { title: "Operating Model Blueprint", desc: "RACI, SLAs, intake flow, and governance cadence." },
            ].map((r) => (
              <div key={r.title} className="rounded-2xl border border-emerald-900/10 bg-white/60 p-6">
                <h4 className="font-semibold">{r.title}</h4>
                <p className="mt-2 text-sm text-emerald-900/80">{r.desc}</p>
                <div className="mt-4">
                  <a href="#contact" className="inline-flex items-center gap-2 text-sm font-medium text-emerald-900/90 hover:text-emerald-900">
                    Request access <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="relative border-y border-emerald-900/10 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="grid gap-10 md:grid-cols-2">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl">About Guild &amp; Grove</h2>
              <p className="mt-4 text-emerald-900/80">
                We’re a people-strategy advisory focused on building in-house recruitment capability. We bring operating
                discipline, practical training, and governance so teams hire faster, fairer, and more cost-effectively—sustainably.
              </p>
              <ul className="mt-6 space-y-3">
                <CheckRow>Capability over dependency</CheckRow>
                <CheckRow>Governed &amp; fair hiring</CheckRow>
                <CheckRow>Measured improvement with dashboards &amp; SLAs</CheckRow>
                <CheckRow>Human-centered change and adoption</CheckRow>
              </ul>
            </div>
            <div>
              <div className="relative overflow-hidden rounded-3xl border border-emerald-900/10 bg-gradient-to-br from-emerald-50 to-white p-8 shadow">
                <h4 className="font-semibold">Our Promise</h4>
                <p className="mt-2 text-sm text-emerald-900/80">
                  We work transparently and leave behind capability: playbooks, trained people, and dashboards you own.
                </p>
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <Stat value="90 days" label="Stand-up window" />
                  <Stat value="100%" label="Structured interviews" />
                  <Stat value="48 hrs" label="Feedback SLA" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl sm:text-4xl">Book a Free Recruitment Audit</h2>
            <p className="mt-3 text-emerald-900/80">
              Tell us about your hiring goals. We’ll review your process, surface quick wins, and map a path to in-house mastery.
            </p>
          </div>

          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <form onSubmit={(e) => e.preventDefault()} className="rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium">First name</label>
                  <input className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" placeholder="Alex" />
                </div>
                <div>
                  <label className="text-sm font-medium">Last name</label>
                  <input className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" placeholder="Morgan" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Work email</label>
                  <input type="email" className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" placeholder="alex@company.com" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">Company</label>
                  <input className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" placeholder="Company Name" />
                </div>
                <div className="sm:col-span-2">
                  <label className="text-sm font-medium">What would you like to improve?</label>
                  <textarea rows={4} className="mt-1 w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" placeholder="Time-to-hire, agency spend, manager experience, DEI safeguards, etc." />
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-emerald-900/70">By submitting, you agree to our privacy policy.</div>
                <button className="inline-flex items-center gap-2 rounded-2xl bg-emerald-700 px-5 py-2.5 text-white shadow-sm transition hover:bg-emerald-800">
                  Send request <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </form>

            <div className="rounded-2xl border border-emerald-900/10 bg-white/70 p-6 shadow-sm">
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-medium">Talk to a partner</div>
                  <div className="text-sm text-emerald-900/70">+44 XX XXXX XXXX</div>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <Mail className="h-5 w-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-medium">Email</div>
                  <a className="text-sm text-emerald-900/70" href="mailto:hello@guildandgrove.com">hello@guildandgrove.com</a>
                </div>
              </div>
              <div className="mt-4 flex items-center gap-3">
                <MapPin className="h-5 w-5 text-emerald-700" />
                <div>
                  <div className="text-sm font-medium">Location</div>
                  <div className="text-sm text-emerald-900/70">London, United Kingdom</div>
                </div>
              </div>

              <div className="mt-8 rounded-xl bg-emerald-50 p-5 ring-1 ring-emerald-700/10">
                <div className="text-sm font-semibold">Newsletter</div>
                <p className="mt-1 text-sm text-emerald-900/80">Insights on strategic hiring—monthly. No spam.</p>
                <form onSubmit={(e) => e.preventDefault()} className="mt-3 flex gap-2">
                  <input type="email" placeholder="you@company.com" className="w-full rounded-xl border border-emerald-900/20 bg-white px-3 py-2 outline-none ring-emerald-600 focus:ring" />
                  <button className="rounded-xl bg-emerald-700 px-4 py-2 text-white hover:bg-emerald-800">Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative mt-8 bg-emerald-900 text-white">
        <div className="mx-auto max-w-7xl px-4 py-12">
          <div className="grid gap-10 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-3">
                <div className="grid h-10 w-10 place-content-center rounded-2xl bg-white/10">
                  <Leaf className="h-5 w-5" />
                </div>
                <div>
                  <div className="font-serif text-xl font-semibold">Guild &amp; Grove</div>
                  <div className="text-xs text-white/70">Grow in-house hiring mastery</div>
                </div>
              </div>
              <p className="mt-3 text-sm text-white/80 max-w-xs">
                People-strategy advisory that designs, builds, and upskills in-house recruitment so you hire better—without agencies.
              </p>
            </div>
            <div>
              <div className="text-sm font-semibold">Company</div>
              <div className="mt-3 grid gap-2">
                <FooterLink href="#services">Services</FooterLink>
                <FooterLink href="#approach">Approach</FooterLink>
                <FooterLink href="#outcomes">Outcomes</FooterLink>
                <FooterLink href="#programs">Programs</FooterLink>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Resources</div>
              <div className="mt-3 grid gap-2">
                <FooterLink href="#resources">Playbooks</FooterLink>
                <FooterLink href="#resources">Templates</FooterLink>
                <FooterLink href="#resources">Case notes</FooterLink>
              </div>
            </div>
            <div>
              <div className="text-sm font-semibold">Contact</div>
              <div className="mt-3 grid gap-2">
                <FooterLink href="mailto:hello@guildandgrove.com">hello@guildandgrove.com</FooterLink>
                <FooterLink href="#contact">Book a free audit</FooterLink>
                <FooterLink href="#contact">Newsletter</FooterLink>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-white/10 pt-6 text-xs text-white/70">
            © {new Date().getFullYear()} Guild &amp; Grove. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
