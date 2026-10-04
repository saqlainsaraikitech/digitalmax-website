import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ArrowUpRight, Code2, Clapperboard, GraduationCap, Wrench, HeartHandshake, Zap, Target, Globe } from 'lucide-react';
import { waLink } from '../data/site';
import { Reveal, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

const PILLARS = [
  { icon: Code2, t: 'Websites & Stores', d: 'Business websites and Shopify stores built to convert visitors into customers.' },
  { icon: Clapperboard, t: 'AI Content', d: 'Faceless video systems for YouTube, TikTok and Facebook — built on real workflows.' },
  { icon: Wrench, t: 'Premium Tools', d: '19 pro tools at honest prices, delivered fast with real human support.' },
  { icon: GraduationCap, t: 'Courses', d: 'Step-by-step automation courses in YouTube, Facebook and TikTok — no fluff.' },
];

const VALUES = [
  { icon: Target, t: 'Results over promises', d: 'We show you exactly what you get before you pay a single rupee.' },
  { icon: Zap, t: 'Fast and practical', d: 'No month-long timelines for simple work. We move quickly and communicate clearly.' },
  { icon: HeartHandshake, t: 'Honest guidance', d: 'If something is not right for you, we will tell you — even if it costs us the sale.' },
];

export default function About() {
  return (
    <>
      <header className="mx-phero">
        <div className="mx-phero-grid">
          <Reveal>
            <Link className="mx-crumb" to="/"><ArrowLeft size={15} /> Back to home</Link>
            <span className="mx-badge light"><i /> About us</span>
            <h1>The people behind <mark>DigitalMax.</mark></h1>
            <p className="lead">DigitalMax is a full-service digital agency — websites, online stores, AI content, automation tools and practical courses. One team for your entire digital growth.</p>
            <div className="mx-ctas">
              <a className="btn btn-coral" href={waLink('Hi DigitalMax! I want to work with you.')} target="_blank" rel="noopener">
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Work With Us <ArrowRight size={17} />
              </a>
              <Link className="btn btn-ghost" to="/courses">Our Courses <ArrowRight size={17} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-phero-fig">
              <div className="about-hero-card">
                <span className="about-hero-eyebrow">Founder</span>
                <span className="about-hero-name">Saqlain Abid</span>
                <span className="about-hero-role">Shopify & WordPress Developer · AI Content Creator</span>
                <p>Builds online stores, business websites and content automation systems — and teaches others to do the same.</p>
                <a className="about-site-link" href="https://saqlainabid.com" target="_blank" rel="noopener">
                  <Globe size={15} /> saqlainabid.com <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec">
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> Our story</span>
            <h2 className="mx-h2">Built by a maker, <mark>not a marketing agency.</mark></h2>
          </Reveal>
          <div className="mx-about-story">
            <Reveal>
              <p>DigitalMax started with one simple observation: most small businesses do not need a fancy agency — they need someone who can actually <b>build</b>. Someone who ships the website, sets up the store, creates the content system, and stays available when things break.</p>
              <p>That is what we do. Every service we sell is something we use ourselves first — the same tools we deliver to clients, the same automation systems we teach in our courses, the same content workflows we run every day.</p>
            </Reveal>
            <Reveal delay={0.1}>
              <p>No account managers. No jargon-filled proposals. You talk directly to the people doing the work, you see exactly what you are getting, and you only pay when you are happy with it.</p>
              <p>Whether you need a website that brings customers, a store that sells while you sleep, or the skills to build it all yourself — you are in the right place.</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> What we do</span>
            <h2 className="mx-h2">Four pillars, <mark>one team.</mark></h2>
          </Reveal>
          <div className="mx-grid-2">
            {PILLARS.map((p, i) => (
              <Reveal key={p.t} delay={(i % 2) * 0.08}>
                <div className="mx-svc-card">
                  <span className="mx-svc-ico"><p.icon size={24} /></span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> Also from us</span>
            <h2 className="mx-h2">Meet <mark>Saraiki Tech.</mark></h2>
            <p className="mx-sub">Our tech brand — practical tutorials and digital-skills content, made simple for everyone.</p>
          </Reveal>
          <Reveal>
            <div className="mx-saraiki-card">
              <div>
                <h3>Saraiki Tech</h3>
                <p>Saraiki Tech is Saqlain's tech platform — easy, practical tech tutorials and digital skills content. From website building to AI tools, everything is explained step by step in simple language, so anyone can learn and earn online.</p>
                <p>It shares the same mission as DigitalMax: real skills, honestly taught, with zero fluff.</p>
              </div>
              <div className="mx-saraiki-btns">
                <a className="btn btn-coral" href="https://saraikitech.com" target="_blank" rel="noopener">
                  <Globe size={17} /> saraikitech.com <ArrowUpRight size={15} />
                </a>
                <a className="btn mx-btn-ghost" href={waLink('Hi! I found you through Saraiki Tech.')} target="_blank" rel="noopener">
                  <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Say Hello <ArrowRight size={17} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> How we work</span>
            <h2 className="mx-h2">What you can <mark>expect from us.</mark></h2>
          </Reveal>
          <div className="mx-grid-3">
            {VALUES.map((v, i) => (
              <Reveal key={v.t} delay={(i % 3) * 0.08}>
                <div className="mx-svc-card">
                  <span className="mx-svc-ico"><v.icon size={24} /></span>
                  <h3>{v.t}</h3>
                  <p>{v.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let's build something <mark>great</mark> together."
        text="Message us on WhatsApp — tell us about your project and we will give you an honest plan."
        waText="Hi DigitalMax! I read your about page and I have a project in mind."
      />
    </>
  );
}
