"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ArrowRight, Mail, Linkedin, Github, Menu, X } from 'lucide-react';

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50" style={{ backgroundColor: '#282828' }}>
        <div className="max-w-6xl mx-auto flex justify-between items-center" style={{ padding: '16px' }}>
          {/* a:9 Logo — 40x40 orange circle, Libre Baskerville Bold 20pt */}
          <a href="#" className="flex items-center justify-center rounded-full" style={{ width: '40px', height: '40px', backgroundColor: '#FF6700', fontFamily: 'var(--font-libre-baskerville)', fontSize: '20px', fontWeight: 700, color: '#171717' }}>
            a:9
          </a>

          {/* Desktop nav links — Manrope SemiBold 18pt, gap 40px */}
          <div className="hidden md:flex items-center text-neutral-300" style={{ gap: '40px' }}>
            <a href="#work" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>Work</a>
            <a href="#services" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>Services</a>
            <a href="#about" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }}>About</a>
          </div>

          {/* Hamburger (mobile) */}
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu — Manrope SemiBold 18pt */}
        {menuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-5 text-neutral-300" style={{ padding: '0 16px 24px' }}>
            <a href="#work" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>Work</a>
            <a href="#services" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>Services</a>
            <a href="#about" className="hover:text-white transition-colors" style={{ fontFamily: 'var(--font-manrope)', fontSize: '18px', fontWeight: 600 }} onClick={() => setMenuOpen(false)}>About</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between px-6 pt-28 pb-12" style={{ backgroundColor: '#282828' }}>
        <div className="max-w-6xl mx-auto w-full flex-1 flex flex-col items-center justify-center text-center">
          {/* Stacks wrapper — single coordinate system */}
          <div className="self-center inline-flex flex-col">
            {/* Stack 1 — left edge at photo center: 68px from Stack 2 left */}
            <div className="mb-3 text-left" style={{ paddingLeft: '68px' }}>
              {/* AI-Powered Designer tag */}
              <span className="inline-flex items-center gap-1.5 text-xs tracking-wide uppercase mb-4 px-3 py-1 rounded-full border" style={{ color: '#FF6700', borderColor: '#FF670040' }}>
                <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#FF6700' }} />
                AI-Powered Designer
              </span>
              <p className="mb-2" style={{ fontFamily: 'var(--font-libre-baskerville)', fontSize: '24px', fontWeight: 400, color: '#FFFFFF' }}>
                ¡Hola! I&apos;m{' '}
                <span style={{ color: '#FF6700' }}>
                  <span style={{ fontWeight: 700 }}>angels</span><span style={{ fontWeight: 400 }}>gutierrez</span>
                </span>
              </p>
              <span
                className="inline-flex items-center rounded-xl"
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '84px',
                  fontWeight: 500,
                  lineHeight: '140%',
                  color: '#171717',
                  backgroundColor: '#FF6700',
                  padding: '10px 20px',
                  height: '136px',
                }}
              >
                Freelance
              </span>
            </div>

            {/* Stack 2 — Photo + Product Designer */}
            <div className="flex items-center gap-3 mb-6">
              {/* Profile photo — 136x136, square with 8px radius */}
              <div className="overflow-hidden flex-shrink-0" style={{ width: '136px', height: '136px', borderRadius: '8px' }}>
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
                className="inline-flex items-center rounded-xl"
                style={{
                  fontFamily: 'var(--font-manrope)',
                  fontSize: '84px',
                  fontWeight: 500,
                  lineHeight: '140%',
                  color: '#171717',
                  backgroundColor: '#FF6700',
                  padding: '10px 20px',
                  height: '136px',
                }}
              >
                Product designer
              </span>
            </div>

            {/* Tagline + Subtitle — left-aligned to Product Designer (136px photo + 12px gap = 148px) */}
            <div className="text-left" style={{ paddingLeft: '148px' }}>
              <p className="mb-2" style={{ fontFamily: 'var(--font-manrope)', fontSize: '24px', color: '#FFFFFF' }}>
                <span style={{ fontWeight: 300 }}>I turn ideas into </span>
                <span style={{ fontWeight: 500 }}>digital products users love</span>
                <span style={{ fontWeight: 300 }}> (and pay for)</span>
              </p>

              <p style={{ fontFamily: 'var(--font-manrope)', fontSize: '20px', color: '#BCBCBC' }}>
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
            className="inline-flex items-center rounded-xl transition-colors hover:opacity-90"
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

      {/* Stats Banner */}
      <section className="border-y border-neutral-200 bg-white">
        <div className="max-w-6xl mx-auto px-6 py-4 overflow-hidden">
          <div className="flex gap-12 text-sm text-neutral-600 whitespace-nowrap animate-scroll">
            <span>✦ 1.4x faster transaction completion</span>
            <span>✦ Make existing data actionable</span>
            <span>✦ AI agent saving restaurateurs 30 hours/month</span>
            <span>✦ 1.4x faster transaction completion</span>
            <span>✦ Make existing data actionable</span>
          </div>
        </div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-12">Selected Work</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <WorkCard 
              title="Fina AI Agent"
              description="Financial AI assistant for restaurants"
              metric="30h/month saved"
              tags={["AI", "B2B", "SaaS"]}
            />
            <WorkCard 
              title="Stocktaking Platform"
              description="Multi-platform inventory management"
              metric="1.4x faster completion"
              tags={["Product Design", "Web + Mobile"]}
            />
            <WorkCard 
              title="POS System"
              description="Integrated point-of-sale for retail"
              metric="12.4% conversion increase"
              tags={["B2B", "Fintech"]}
            />
            <WorkCard 
              title="Data Dashboard"
              description="Making existing data actionable"
              metric="Improved decision-making"
              tags={["Analytics", "Enterprise"]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm uppercase tracking-wider text-neutral-500 mb-12">What clients say</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <Testimonial 
              quote="Angels adapted to our pace and delivered designs that directly impacted our revenue."
              author="Founder, Haddock"
            />
            <Testimonial 
              quote="Like having a senior designer embedded in the team. Reliable and result-driven."
              author="Product Lead, SaaS Startup"
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

function Testimonial({ quote, author }: { quote: string; author: string }) {
  return (
    <div className="p-8 border border-neutral-200 rounded-xl">
      <p className="text-lg mb-4 text-neutral-700">"{quote}"</p>
      <p className="text-sm text-neutral-500">— {author}</p>
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
