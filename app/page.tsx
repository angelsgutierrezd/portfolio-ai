"use client";

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Mail, Linkedin, Github, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [navDark, setNavDark] = useState(true);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setNavDark(entry.isIntersecting);
      },
      { threshold: 0, rootMargin: '-72px 0px 0px 0px' }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <nav
        className={`nav-bar fixed top-0 w-full z-50 nav-transition ${navDark ? 'nav-dark' : 'nav-light'}`}
      >
        <div className="max-w-6xl mx-auto flex justify-between items-center" style={{ padding: '16px' }}>
          {/* a:9 Logo — 40x40 orange circle, Libre Baskerville Bold 20pt */}
          <a href="#" className="nav-logo flex items-center justify-center rounded-full nav-transition" style={{ width: '40px', height: '40px', backgroundColor: '#FF6700', fontFamily: 'var(--font-libre-baskerville)', fontSize: '20px', fontWeight: 700 }}>
            a:9
          </a>

          {/* Desktop nav links — Manrope SemiBold 18pt, gap 40px */}
          <div className="nav-links hidden md:flex items-center nav-transition" style={{ gap: '40px' }}>
            <a href="#work" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>Work</a>
            <a href="#services" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>Services</a>
            <a href="#about" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>About</a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="nav-hamburger md:hidden nav-transition"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu — Manrope SemiBold 18pt */}
        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-5" style={{ padding: '0 16px 24px' }}>
            <a href="#work" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#services" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="nav-link nav-transition" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>About</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="min-h-screen flex flex-col justify-between px-6 pt-28 pb-12" style={{ backgroundColor: '#282828' }}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center">
          {/* Stacks wrapper — single coordinate system */}
          <div className="self-center inline-flex flex-col">
            {/* Stack 1 — left edge at photo center: 68px from Stack 2 left */}
            <div className="hero-stack1 mb-3 text-left" style={{ paddingLeft: '68px' }}>
              {/* AI-Powered Designer tag */}
              <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase mb-4 px-3 py-1 rounded-full border" style={{ color: '#FF6700', borderColor: '#FF670040' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF6700' }} />
                AI-Powered Designer
              </span>
              <p className="hero-greeting mb-2" style={{ fontFamily: 'var(--font-libre-baskerville)', fontSize: '24px', fontWeight: 400, color: '#FFFFFF' }}>
                ¡Hola! I&apos;m{' '}
                <span style={{ color: '#FF6700' }}>
                  <span style={{ fontWeight: 700 }}>angels</span><span style={{ fontWeight: 400 }}>gutierrez</span>
                </span>
              </p>
              <span
                className="hero-block inline-flex items-center"
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '84px',
                  fontWeight: 500,
                  lineHeight: '140%',
                  color: '#171717',
                  backgroundColor: '#FF6700',
                  padding: '10px 20px',
                  height: '136px',
                  borderRadius: '10px',
                }}
              >
                Freelance
              </span>
            </div>

            {/* Stack 2 — Photo + Product Designer */}
            <div className="hero-stack2 flex items-center gap-3 mb-6">
              {/* Profile photo — 136x136, square with 8px radius */}
              <div className="hero-photo overflow-hidden flex-shrink-0" style={{ width: '136px', height: '136px', borderRadius: '8px' }}>
                <Image
                  src="/profile.jpg"
                  alt="Angels Gutierrez"
                  width={136}
                  height={136}
                  className="object-cover grayscale"
                  priority
                />
              </div>
              <span
                className="hero-block inline-flex items-center"
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '84px',
                  fontWeight: 500,
                  lineHeight: '140%',
                  color: '#171717',
                  backgroundColor: '#FF6700',
                  padding: '10px 20px',
                  height: '136px',
                  borderRadius: '10px',
                }}
              >
                Product designer
              </span>
            </div>

            {/* Tagline + Subtitle — left-aligned to Product Designer (136px photo + 12px gap = 148px) */}
            <div className="hero-tagline text-left" style={{ paddingLeft: '148px' }}>
              <p className="hero-tagline-text mb-2" style={{ fontFamily: 'var(--font-manrope)', fontSize: '24px', color: '#FFFFFF' }}>
                <span style={{ fontWeight: 300 }}>I turn ideas into </span>
                <span style={{ fontWeight: 500 }}>digital products users love</span>
                <br className="md:hidden" />
                <span style={{ fontWeight: 300 }}>(and pay for)</span>
              </p>

              <p className="hero-subtitle" style={{ fontFamily: 'var(--font-manrope)', fontSize: '20px', color: '#BCBCBC' }}>
                <span style={{ fontWeight: 300 }}>Flexible design partner — </span>
                <span style={{ fontWeight: 800 }}>focused on results.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA + text */}
        <div className="max-w-6xl mx-auto w-full flex flex-col items-center">
          <a
            href="#contact"
            className="hero-cta inline-flex items-center rounded-xl transition-colors hover:opacity-90"
            style={{
              fontFamily: 'var(--font-manrope)',
              fontSize: '18px',
              fontWeight: 500,
              color: '#171717',
              backgroundColor: '#FF6700',
              padding: '16px 24px',
              height: '48px',
              gap: '4px',
            }}
          >
            Get in touch
            <ArrowRight size={18} />
          </a>

          <p className="mt-4" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', color: '#FFFFFF' }}>
            <span style={{ fontWeight: 300 }}>Great ideas start with a conversation. </span>
            <span style={{ fontWeight: 500 }}>Shall we talk?</span>
          </p>
        </div>
      </section>

      {/* Marquee Ticker */}
      <section className="bg-white" style={{ borderTop: '1px solid #FEA060', borderBottom: '1px solid #FEA060' }}>
        <p className="text-center py-3" style={{ fontFamily: 'var(--font-manrope)', fontSize: '14px', fontWeight: 400, color: '#666666' }}>
          Why top companies invest in design
        </p>
        <div className="marquee-wrap overflow-hidden" style={{ borderTop: '1px solid #FEA060' }}>
          <div className="marquee-track flex whitespace-nowrap" style={{ fontFamily: 'var(--font-manrope)', fontSize: '14px', color: '#444444' }}>
            <TickerContent />
            <TickerContent aria-hidden="true" />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="work" className="py-24 px-6" style={{ backgroundColor: '#F5F5F5' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="featured-title text-center md:text-center mb-16" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, color: '#171717' }}>
            Featured projects
          </h2>

          <div className="flex flex-col gap-12 mx-auto" style={{ width: '90%' }}>
            <ProjectCard
              code="P01"
              label="Next-Gen POS"
              title="Optimization the point-of-sale experience for high-volume retail"
              tags={["Tablet & mobile", "2025", "SaaS"]}
              image="/projects/p01.png"
              href="#"
            />
            <ProjectCard
              code="P02"
              label="Analytics Dashboard"
              title="Transforming complex data structures into actionable business insights"
              tags={["Data Viz", "B2B SaaS", "Dashboard design"]}
              image="/projects/p02.png"
              href="#"
            />
            <ProjectCard
              code="P03"
              label="Frictionless User Acquisition"
              title="Streamlining the onboarding journey to drive platform adoption"
              tags={["Desktop", "Growth project", "Dashboard design"]}
              image="/projects/p03.png"
              href="#"
            />
          </div>
        </div>
      </section>

      {/* Currently Shaping */}
      <section className="py-20 px-6" style={{ backgroundColor: '#FFFFFF' }}>
        <div className="max-w-6xl mx-auto">
          <h2 className="currently-title text-center mb-16" style={{ fontFamily: 'var(--font-manrope)', fontWeight: 300, color: '#444444' }}>
            + currently shaping
          </h2>

          <div className="flex flex-col md:flex-row gap-6 mx-auto" style={{ width: '90%' }}>
            <ShapingCard
              tag="AI strategy"
              description={<>Designing autonomous <strong>AI agents</strong> to automate financial operations for restaurant groups</>}
              company="haddock"
              companyFont="'Roobert', var(--font-manrope), sans-serif"
            />
            <ShapingCard
              tag="Core experience"
              description={<>Reframing <strong>core functionalities</strong> to build a friction-free ecosystem for omnichannel retail</>}
              company="stockagile"
              companyFont="'Silka', var(--font-manrope), sans-serif"
            />
          </div>
        </div>
      </section>

      {/* Referrals */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 style={{ fontFamily: 'var(--font-inter)', fontStyle: 'italic', fontSize: '14px', fontWeight: 400, letterSpacing: '0.25em', textTransform: 'uppercase' as const, color: '#999999', marginBottom: '48px' }}>
            Trusted by the best teams
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            <ReferralCard
              quote={<>Angels handles <strong>complex UX challenges</strong> with <strong>leadership</strong> and <strong>adaptability</strong>, turning complexity into <strong>meaningful, user-centered products</strong></>}
              name="Val Y."
              role="EMEA Team Manager & transformation leader"
              company="Red Hat 2023"
              photo="/referrals/val.png"
            />
            <ReferralCard
              quote={<>She quickly understands client needs and translates them into <strong>developer-friendly designs</strong> that are <strong>structured, consistent, and user-centered</strong>.</>}
              name="Asier E."
              role="App Developer & Software Engineer"
              company="Stockagile 2025"
              photo="/referrals/asier.png"
            />
            <ReferralCard
              quote={<>Working with her was <strong>seamless</strong>—she is a <strong>reliable, expert, and genuinely collaborative</strong> designer who involves you in every step.</>}
              name="Silvia d. M."
              role="Psychologist"
              company="Website section 2025"
              photo="/referrals/silvia.png"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-4">Services</h2>
          <p className="text-neutral-600 mb-12">All services start with a free discovery call</p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              icon="🔍"
              title="UX Audit Express"
              duration="5 days"
              price="€X,XXX"
              description="Find issues, get wins"
              features={[
                "UX review",
                "Findings report",
                "Quick wins",
                "Feedback session"
              ]}
            />
            <ServiceCard 
              icon="✨"
              title="Feature Improvements"
              duration="1-2 weeks"
              price="€X,XXX"
              description="Polish & validate"
              features={[
                "In-depth review",
                "Design improvements",
                "Interactive prototype",
                "User validation"
              ]}
            />
            <ServiceCard 
              icon="🚀"
              title="Product Features"
              duration="1-3 months"
              price="€X,XXX/month"
              description="Build new capabilities"
              features={[
                "Full design process",
                "User research",
                "Dev collaboration",
                "Tested & validated"
              ]}
            />
            <ServiceCard 
              icon="🤝"
              title="Long-term Collaboration"
              duration="3+ months"
              price="Custom pricing"
              description="Embedded designer"
              features={[
                "Continuous design",
                "Multiple initiatives",
                "Design system care",
                "Strategic input"
              ]}
            />
          </div>
          
          <p className="text-sm text-neutral-500 mt-8 text-center">
            Design system maintenance included in all services
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 px-6 bg-neutral-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-medium mb-6">
            Let's build something great
          </h2>
          <p className="text-xl text-neutral-400 mb-12">
            Great ideas start with a conversation. Shall we talk?
          </p>
          
          <a 
            href="mailto:your@email.com" 
            className="inline-flex items-center gap-2 bg-white text-neutral-900 px-6 py-3 rounded-lg hover:bg-neutral-100 transition-colors mb-12"
          >
            <Mail size={18} />
            Get in touch
          </a>
          
          <div className="flex justify-center gap-6 pt-8 border-t border-neutral-800">
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="#" className="text-neutral-400 hover:text-white transition-colors">
              <Github size={20} />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-neutral-900 text-neutral-500 px-6 py-8 border-t border-neutral-800">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-sm">
          <p>© 2026 Angels Gutierrez</p>
          <p>Barcelona, ES</p>
        </div>
      </footer>
    </main>
  );
}

// ---------- Components ----------

function ProjectCard({ code, label, title, tags, image, href }: {
  code: string;
  label: string;
  title: string;
  tags: string[];
  image: string;
  href: string;
}) {
  return (
    <div className="flex flex-col md:flex-row overflow-hidden" style={{ borderRadius: '20px', boxShadow: '0px 4px 20px rgba(203, 203, 203, 0.5)' }}>
      {/* Left — Text */}
      <div className="md:w-1/2 bg-white p-8 md:p-12 flex flex-col justify-center">
        <p className="mb-3" style={{ fontFamily: 'var(--font-manrope)', fontSize: '14px', fontWeight: 400, color: '#999999' }}>
          {code} - {label}
        </p>
        <h3 className="mb-6" style={{ fontFamily: 'var(--font-manrope)', fontSize: '32px', fontWeight: 500, color: '#171717', lineHeight: '130%' }}>
          {title}
        </h3>
        <div className="flex flex-wrap gap-2 mb-8">
          {tags.map(tag => (
            <span
              key={tag}
              className="px-4 py-2"
              style={{
                fontFamily: 'var(--font-manrope)',
                fontSize: '14px',
                fontWeight: 400,
                color: '#444444',
                backgroundColor: '#F6F4F2',
                border: 'none',
                borderRadius: '100px',
              }}
            >
              {tag}
            </span>
          ))}
        </div>
        <a
          href={href}
          className="inline-flex items-center gap-2 md:mt-auto"
          style={{ fontFamily: 'var(--font-manrope)', fontSize: '16px', fontWeight: 500, color: '#FF6700' }}
        >
          View full project
          <ArrowRight size={18} />
        </a>
      </div>

      {/* Right — Image */}
      <div className="md:w-1/2 relative min-h-[300px] md:min-h-[500px]">
        <Image
          src={image}
          alt={`${code} - ${label}`}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}

function ShapingCard({ tag, description, company, companyFont }: {
  tag: string;
  description: React.ReactNode;
  company: string;
  companyFont: string;
}) {
  return (
    <div className="flex-1 flex flex-col justify-between p-6 md:p-8" style={{ backgroundColor: '#FF6700', borderRadius: '16px', minHeight: '260px', boxShadow: '0 0 20px rgba(115, 115, 115, 0.25)' }}>
      <div>
        <span className="inline-block px-4 py-1.5 mb-5" style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '100px', fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 300, color: '#444444' }}>
          {tag}
        </span>
        <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '20px', fontWeight: 500, color: '#000000', lineHeight: '150%' }}>
          {description}
        </p>
      </div>
      <p className="text-right mt-6" style={{ fontFamily: companyFont, fontSize: '24px', fontWeight: 600, color: '#FFFFFF' }}>
        {company}
      </p>
    </div>
  );
}

const SEP = <span style={{ color: '#BCBCBC' }}>✳</span>;

function TickerContent(props: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span className="marquee-content flex items-center gap-6 px-6 py-3" {...props}>
      <span><span style={{ fontWeight: 500 }}>+20% to +200% conversions</span> with optimized interfaces <a href="https://www.nngroup.com/articles/usability-roi-declining-but-still-strong/" target="_blank" rel="noopener noreferrer" className="underline">Forrester | Nielsen Norman Group</a></span>
      {SEP}
      <span><span style={{ fontWeight: 500 }}>-10% to -25% churn</span> through clear, user-friendly experiences <a href="https://arxiv.org/abs/2203.04374" target="_blank" rel="noopener noreferrer" className="underline">based on industry benchmarks for improved retention through clearer experiences</a></span>
      {SEP}
      <span><span style={{ fontWeight: 500 }}>30-50%</span> faster launches using design systems &amp; reusable components <a href="https://richardmbanfield.medium.com/design-systems-as-innovation-profit-drivers-creating-value-by-moving-beyond-adoption-metrics-e25dd689a534" target="_blank" rel="noopener noreferrer" className="underline">UX Collective</a></span>
      {SEP}
      <span><span style={{ fontWeight: 500 }}>-40% support tickets</span> thanks to improved UX <a href="https://medium.com/design-bootcamp/design-system-boosts-efficiency-up-to-7-times-c7a634f9f76b" target="_blank" rel="noopener noreferrer" className="underline">UX Planet</a></span>
      {SEP}
      <span><span style={{ fontWeight: 500 }}>+228% growth</span> for companies investing in UX <a href="https://www.dmi.org/page/DesignValue" target="_blank" rel="noopener noreferrer" className="underline">UX Planet</a></span>
      {SEP}
      <span><span style={{ fontWeight: 500 }}>+10 to +25 NPS points</span> from consistent, polished UX <a href="https://www.netpromotersystem.com/about/" target="_blank" rel="noopener noreferrer" className="underline">Bain &amp; Company</a></span>
      {SEP}
    </span>
  );
}

function WorkCard({ title, description, metric, tags }: { title: string; description: string; metric: string; tags: string[] }) {
  return (
    <a href="#" className="group block p-8 border border-neutral-200 rounded-xl bg-white hover:border-neutral-300 transition-all">
      <div className="mb-4">
        <h3 className="text-2xl font-medium mb-2 group-hover:text-neutral-600 transition-colors">
          {title}
        </h3>
        <p className="text-neutral-600">{description}</p>
      </div>
      
      <div className="mb-4">
        <span className="text-sm font-medium text-neutral-900">{metric}</span>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {tags.map(tag => (
          <span key={tag} className="text-xs px-3 py-1 bg-neutral-100 text-neutral-600 rounded-full">{tag}</span>
        ))}
      </div>
      
      <div className="mt-6 flex items-center gap-2 text-sm text-neutral-600 group-hover:text-neutral-900 transition-colors">
        View case study
        <ArrowUpRight size={16} />
      </div>
    </a>
  );
}

function ReferralCard({ quote, name, role, company, photo }: { quote: React.ReactNode; name: string; role: string; company: string; photo: string }) {
  return (
    <div className="rounded-2xl flex flex-col justify-between" style={{ backgroundColor: '#F5F5F5', padding: '40px 36px 36px' }}>
      <p style={{ fontFamily: 'var(--font-inter)', fontStyle: 'italic', fontSize: '18px', lineHeight: 1.6, color: '#333333' }}>
        {quote}
      </p>

      <div style={{ marginTop: '40px' }}>
        <div style={{ width: '32px', height: '3px', backgroundColor: '#FF6700', marginBottom: '20px' }} />
        <div className="flex items-center gap-3">
          <Image
            src={photo}
            alt={name}
            width={44}
            height={44}
            className="rounded-full object-cover"
            style={{ width: '44px', height: '44px', filter: 'grayscale(100%)' }}
          />
          <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '13px', color: '#888888', lineHeight: 1.4 }}>
            {name} | {role} | {company}
          </p>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ icon, title, duration, price, description, features }: { icon: string; title: string; duration: string; price: string; description: string; features: string[] }) {
  return (
    <div className="p-8 border border-neutral-200 rounded-xl bg-white">
      <div className="text-3xl mb-4">{icon}</div>
      <h3 className="text-2xl font-medium mb-2">{title}</h3>
      <p className="text-sm text-neutral-600 mb-1">{duration}</p>
      <p className="text-lg font-medium mb-4">{price}</p>
      <p className="text-neutral-600 mb-6">{description}</p>
      
      <ul className="space-y-2">
        {features.map(feature => (
          <li key={feature} className="flex items-start gap-2 text-sm text-neutral-600">
            <span className="text-neutral-400 mt-1">•</span>
            {feature}
          </li>
        ))}
      </ul>
    </div>
  );
}
