import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, MessageCircle, Play, Globe2, Zap, Headset, MessagesSquare, Users,
  Trophy, Cpu, Timer, Earth, BadgeCheck, Search, Rocket, SlidersHorizontal, PartyPopper, Star, CheckCircle2, GraduationCap,
} from 'lucide-react';
import * as icons from 'lucide-react';
import { SERVICES, PROJECTS, waLink } from '../data/site';
import { Reveal, CtaBanner } from '../components/ui';
import builtinCourses from '../data/courses.json';
import { COURSE_BADGE } from '../data/courseBadges';
const svcWebsite = '/images/svc-png-website.png';
const svcAi = '/images/svc-png-ai.png';
const svcShopify = '/images/svc-png-shopify.png';
const svcYoutube = '/images/svc-png-youtube.png';
const svcTiktok = '/images/svc-png-tiktok.png';
const svcConsult = '/images/svc-png-consultancy.png';
import badgeWebsite from '../assets/badge-website.png';
import badgeAi from '../assets/badge-ai.png';
import badgeShopify from '../assets/badge-shopify.png';
import badgeYoutube from '../assets/badge-youtube.png';
import badgeTiktok from '../assets/badge-tiktok.png';
import badgeConsult from '../assets/badge-consultancy.png';
import pngWhatsapp from '../assets/png-whatsapp.png';

const SVC_IMG = {
  'website-development': svcWebsite,
  'ai-content-creation': svcAi,
  'shopify-store-design': svcShopify,
  'youtube-automation': svcYoutube,
  'tiktok-automation': svcTiktok,
  'consultancy': svcConsult,
};

/* official brand badge PNGs (assets folder) */
const SVC_BADGE = {
  'website-development': badgeWebsite,
  'ai-content-creation': badgeAi,
  'shopify-store-design': badgeShopify,
  'youtube-automation': badgeYoutube,
  'tiktok-automation': badgeTiktok,
  'consultancy': badgeConsult,
};
import aiT1 from '../assets/ai-thumb-1.jpg';
import aiT2 from '../assets/ai-thumb-2.jpg';
import aiT3 from '../assets/ai-thumb-3.jpg';
import aiT4 from '../assets/ai-thumb-4.jpg';

const svcIcon = (n, s = 26) => { const I = icons[n] || icons.Sparkles; return <I size={s} />; };

const BLURB = {
  'website-development': 'Fast, modern business websites that make an impact.',
  'ai-content-creation': 'Cinematic AI videos, reels and ads.',
  'shopify-store-design': 'Complete Shopify stores that sell.',
  'youtube-automation': 'Faceless YouTube channels with full content systems.',
  'tiktok-automation': 'Faceless TikTok growth systems (USA/UK accounts).',
};

const aiThumbs = [aiT1, aiT2, aiT3, aiT4];

const WHY = [
  { icon: Users, t: 'One dedicated team, zero middlemen', d: 'One point of contact from start to finish — the team designing and building your project stays in direct touch. Nothing gets lost in translation.' },
  { icon: MessageCircle, t: 'WhatsApp-first, always', d: 'No ticket queues, no contact forms. Message anytime and get a real reply — usually the same day.' },
  { icon: BadgeCheck, t: 'Pay after you approve', d: 'You see and approve the design before paying anything. Simple and fair.' },
  { icon: Timer, t: 'Honest timelines', d: 'A business website in 5–7 days, a Shopify store in 7–10. You know the date before we start.' },
  { icon: Earth, t: 'Pakistan-based, working worldwide', d: 'Clients in Pakistan, the UK, the US and the Gulf — WhatsApp makes time zones easy.' },
];

const STEPS = [
  { n: '01', icon: MessageCircle, t: 'Message us on WhatsApp', d: 'Describe your project in your own words — English or Urdu. We reply the same day.' },
  { n: '02', icon: Search, t: 'Get a plan & exact quote', d: 'You know the price and delivery date before we start. No hidden charges, ever.' },
  { n: '03', icon: Rocket, t: 'Approve, then we launch', d: 'We build, you review, we revise until you are happy. Payment comes after you approve the design.' },
];

function Hero() {
  const stats = [
    { b: '19', d: 'Premium AI tools, ready to use' },
    { b: '3', d: 'Automation crash courses' },
    { b: '<10 min', d: 'Average tool delivery time' },
  ];
  const marquee = ['Web Development', 'AI Content Creation', 'Shopify Stores', 'YouTube Automation', 'TikTok Automation', 'Facebook Automation', 'Premium AI Tools', 'Consultancy'];
  return (
    <header className="mx-hero2">
      <div className="mx-hero2-bg" aria-hidden="true" />
      <div className="wrap mx-hero2-grid">
        <motion.div initial={{ opacity: 0, y: 34 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }}>
          <span className="mx-hero2-eyebrow"><span className="dot" /> DigitalMax — Full-service digital agency</span>
          <h1>We build websites, stores &amp; videos <em>that bring you customers.</em></h1>
          <p className="mx-hero2-lead">One team for your entire digital presence — web development, AI content, Shopify stores, automation courses and premium AI tools. You talk directly to the people doing the work, on WhatsApp.</p>
          <div className="mx-hero2-ctas">
            <a className="btn btn-coral" href={waLink('Hi DigitalMax! I want to discuss a project.')} target="_blank" rel="noopener">
              <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Chat on WhatsApp <ArrowRight size={17} />
            </a>
            <Link className="btn mx-hero2-ghost" to="/courses">
              Explore courses <ArrowRight size={17} />
            </Link>
          </div>
          <div className="mx-hero2-stats">
            {stats.map((x) => (
              <div key={x.d}><b>{x.b}</b><span>{x.d}</span></div>
            ))}
          </div>
        </motion.div>
        <motion.div
          className="mx-hero2-visual"
          initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <div className="mx-browser">
            <div className="mx-browser-bar">
              <span className="bdots"><i /><i /><i /></span>
              <span className="burl"><Search size={12} /> digitalmax.pk</span>
            </div>
            <div className="mx-browser-body">
              <div className="bb-nav">
                <span className="bb-logo" />
                <span className="bb-links"><i /><i /><i /></span>
                <span className="bb-cta" />
              </div>
              <div className="bb-hero">
                <span className="bb-pill" />
                <div className="bb-h1"><i /><i /></div>
                <div className="bb-sub"><i /><i /><i /></div>
                <div className="bb-btns"><span /><span /></div>
              </div>
              <div className="bb-cards"><span /><span /><span /></div>
            </div>
          </div>
          <motion.div className="mx-fcard fc-chat" animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}>
            <img loading="lazy" decoding="async" src={pngWhatsapp} className="wava" alt="" />
            <div><b>Tool delivered <span className="tick">✓✓</span></b><span>CapCut Pro — in 8 minutes</span></div>
          </motion.div>
          <motion.div className="mx-fcard fc-course" animate={{ y: [0, 10, 0] }} transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 0.8 }}>
            <img loading="lazy" decoding="async" src="/images/course-tiktok.png" alt="TikTok Automation course" />
            <div><b>TikTok Automation</b><span>Crash course · 1 month</span></div>
          </motion.div>
          <motion.div className="mx-fcard fc-tools" animate={{ y: [0, -8, 0] }} transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.6 }}>
            <Zap size={20} />
            <div><b>19 premium tools</b><span>AI, SEO, editing &amp; more</span></div>
          </motion.div>
        </motion.div>
      </div>
      <div className="mx-hero2-marquee" aria-hidden="true">
        <div className="mq-track2">
          {[...marquee, ...marquee].map((m, i) => (<span key={i}>{m}</span>))}
        </div>
      </div>
    </header>
  );
}

function Founder() {
  return (
    <section className="mx-founder">
      <div className="wrap">
        <Reveal>
          <span className="mx-quote-mark">&ldquo;</span>
          <p>Most agencies hand you to an account manager and disappear. At DigitalMax, you get one dedicated point of contact — and a team that actually answers.</p>
          <div className="mx-founder-who">
            <b>DigitalMax</b><span>Full-service digital agency</span>
            <a href={waLink('Hi DigitalMax!')} target="_blank" rel="noopener">Chat with us on WhatsApp <ArrowRight size={15} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Portfolio() {
  return (
    <section className="mx-sec" id="work">
      <div className="wrap">
        <Reveal>
          <h2 className="mx-h2">Work you can actually visit</h2>
          <p className="mx-sub">Live websites, built by hand — click any project to open it.</p>
        </Reveal>
        <div className="mx-work-grid">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.07}>
              <a className="mx-work-card" href={p.url} target="_blank" rel="noopener">
                <div className="mx-laptop">
                  <div className="mx-laptop-bar"><i /><i /><i /></div>
                  <img src={p.img} alt={p.name} loading="lazy" />
                </div>
                <div className="mx-work-meta">
                  <div><b>{p.name}</b><span>{p.tag}</span></div>
                  <span className="mx-domain">{p.url.replace('https://', '').replace('/', '')} <ArrowUpRight size={14} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Services() {
  const all = [...SERVICES.map((s) => ({ ...s, to: `/services/${s.slug}`, blurb: BLURB[s.slug] || s.tag, points: (s.included || []).slice(0, 4).map((x) => x[1]) })),
    { slug: 'consultancy', name: 'Consultancy', icon: 'MessagesSquare', to: '/consultancy',
      blurb: '1-on-1 guidance on websites, AI content, Shopify, YouTube, TikTok or any digital growth strategy.',
      points: ['Personalized 1-on-1 sessions', 'Step-by-step action plan', 'Solutions for your specific needs', 'Ongoing support'] }];
  return (
    <section className="mx-sec mx-tint">
      <div className="wrap">
        <Reveal>
          <div className="mx-svc2-head">
            <span className="mx-eyebrow">Our Services</span>
            <h2 className="mx-h2">Services We Offer</h2>
            <p className="mx-sub">Six services, one agency, zero hassle. Message us on WhatsApp for an exact quote.</p>
          </div>
        </Reveal>
        <div className="mx-svc2-grid">
          {all.map((s, i) => (
            <Reveal key={s.slug} delay={(i % 3) * 0.06}>
              <div className="mx-svc2-card">
                <div className="mx-svc2-imgwrap">
                  <Link to={s.to}><img src={SVC_IMG[s.slug]} alt={s.name} loading="lazy" /></Link>
                </div>
                <div className="mx-svc2-body">
                  <span className="mx-svc2-badge">
                    <span className="bdg"><img loading="lazy" decoding="async" src={SVC_BADGE[s.slug]} alt="" /></span>
                    <em>{String(i + 1).padStart(2, '0')}</em>
                  </span>
                  <Link to={s.to} className="mx-svc2-title">{s.name}</Link>
                  <p>{s.blurb}</p>
                  <ul>
                    {s.points.map((pt) => (
                      <li key={pt}><CheckCircle2 size={16} />{pt}</li>
                    ))}
                  </ul>
                  <a className="mx-wa-quote" href={waLink(`Hi DigitalMax! I need a quote for ${s.name}.`)} target="_blank" rel="noopener">
                    <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Get Quote on WhatsApp <ArrowRight size={15} />
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const pk = (n) => 'PKR ' + Number(n).toLocaleString('en-PK');

function Courses() {
  const [courses, setCourses] = useState(builtinCourses.courses || []);

  useEffect(() => {
    fetch('/courses.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && Array.isArray(j.courses) && j.courses.length) setCourses(j.courses);
      })
      .catch(() => {});
  }, []);

  return (
    <section className="mx-sec">
      <div className="wrap">
        <Reveal>
          <span className="mx-eyebrow">Our Courses</span>
          <h2 className="mx-h2">Learn the skill. Own the income.</h2>
          <p className="mx-sub">Step-by-step automation courses for YouTube, Facebook and TikTok — from AI content production to monetization. Tap any course for the full roadmap.</p>
        </Reveal>
        <div className="mx-course-grid">
          {courses.map((c, i) => (
            <Reveal key={c.slug} delay={(i % 3) * 0.07}>
              <div className="mx-course-card">
                {c.image && <img src={c.image} className="mx-course-cover" alt={c.name} loading="lazy" decoding="async" />}
                <div className="mx-course-top">
                  <img src={COURSE_BADGE[c.slug]} className="mx-course-badge" alt={c.name} loading="lazy" />
                  <span className="mx-course-dur"><Timer size={15} /> {c.duration}</span>
                </div>
                <h3>{c.name}</h3>
                <p className="mx-course-tag">{c.tagline}</p>
                <div className="mx-course-price">
                  <span className="was">{pk(c.fee)}</span>
                  <span className="now">{pk(c.discountFee)}</span>
                </div>
                <div className="mx-course-btns">
                  <Link className="btn btn-coral" to={`/courses/${c.slug}`}>
                    View Roadmap <ArrowRight size={16} />
                  </Link>
                  <a
                    className="btn mx-btn-outline"
                    href={waLink(`Hi DigitalMax! I want to enroll in the ${c.name} (${pk(c.discountFee)}).`)}
                    target="_blank" rel="noopener"
                  >
                    <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Enroll
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="mx-lms-strip">
            <span><GraduationCap size={20} /> Already enrolled?</span>
            <a href="https://lms.digitalmax.pk" target="_blank" rel="noopener">Open the student LMS <ArrowRight size={16} /></a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AiContent() {
  return (
    <section className="mx-sec mx-dark">
      <div className="wrap mx-ai-grid">
        <Reveal>
          <span className="mx-eyebrow light">AI content</span>
          <h2 className="mx-h2 light">Turn Ideas Into Cinematic Videos</h2>
          <p className="mx-sub light">Faceless videos, kids&rsquo; content, ads and reels — scripted, voiced and animated for you.</p>
          <Link className="btn mx-btn-outline light" to="/services/ai-content-creation">
            See AI Content Examples <ArrowRight size={17} />
          </Link>
        </Reveal>
        <div className="mx-ai-thumbs">
          {aiThumbs.map((t, i) => (
            <Reveal key={i} delay={i * 0.06}>
              <Link className="mx-ai-thumb" to="/services/ai-content-creation">
                <img src={t} alt={`AI content example ${i + 1}`} loading="lazy" />
                <span className="mx-play"><Play size={20} /></span>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Why() {
  return (
    <section className="mx-sec mx-tint">
      <div className="wrap">
        <Reveal>
          <span className="mx-eyebrow">Why DigitalMax</span>
          <h2 className="mx-h2">One team. The whole job.</h2>
          <p className="mx-sub">Design, development and content — handled by one dedicated team that answers your messages.</p>
        </Reveal>
        <div className="mx-why-grid">
          {WHY.map((w, i) => (
            <Reveal key={w.t} delay={i * 0.05}>
              <div className="mx-why">
                <span><w.icon size={24} /></span>
                <b>{w.t}</b>
                <p>{w.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section className="mx-sec">
      <div className="wrap">
        <Reveal>
          <span className="mx-eyebrow">How it works</span>
          <h2 className="mx-h2">How we&rsquo;ll work together</h2>
          <p className="mx-sub">Three steps. No forms, no ticket queues.</p>
        </Reveal>
        <div className="mx-steps">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.07}>
              <div className="mx-step">
                <div className="mx-step-top">
                  <span className="mx-step-n">{s.n}</span>
                  <span className="mx-step-icon"><s.icon size={24} /></span>
                </div>
                <b>{s.t}</b>
                <p>{s.d}</p>
                {i < STEPS.length - 1 && <ArrowRight size={18} className="mx-step-arrow" />}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  { q: 'How much does a website cost?', a: 'It depends on what you need. Message us on WhatsApp with your requirements and we\u2019ll give you an exact quote \u2014 usually the same day.' },
  { q: 'How long does it take?', a: 'Once we have your content (text, photos, logo), most business websites are ready within days, not weeks. Shopify stores take a little longer because of product and payment setup.' },
  { q: 'Do I pay in advance?', a: 'We work in clear milestones, and you approve the design before we build it out \u2014 no surprises at any step.' },
  { q: 'Can you fix or redesign my current website?', a: 'Yes. Send us the link on WhatsApp and we\u2019ll honestly tell you what we\u2019d change.' },
  { q: 'Do you work with clients outside Pakistan?', a: 'Yes \u2014 we work across time zones, and WhatsApp makes communication easy wherever you are.' },
];

function Faq() {
  return (
    <section className="mx-sec">
      <div className="wrap mx-faq-wrap">
        <Reveal>
          <span className="mx-eyebrow">Good to know</span>
          <h2 className="mx-h2">Questions people actually ask</h2>
        </Reveal>
        <div className="mx-faq">
          {FAQS.map((f) => (
            <Reveal key={f.q}>
              <details>
                <summary>{f.q}<ArrowRight size={16} /></summary>
                <p>{f.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function BigCta() {
  return (
    <CtaBanner title="Tell us about <mark>your project.</mark>" />
  );
}

export default function Home() {
  return (
    <>
      <Hero />
      <Founder />
      <Portfolio />
      <Services />
      <Courses />
      <AiContent />
      <Why />
      <Process />
      <Faq />
      <BigCta />
    </>
  );
}
