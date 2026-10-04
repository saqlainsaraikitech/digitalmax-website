import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight, ArrowUpRight, MessageCircle, Play, Globe2, Zap, Headset, MessagesSquare, Users,
  Trophy, Cpu, Timer, Earth, BadgeCheck, Search, Rocket, SlidersHorizontal, PartyPopper, Star, CheckCircle2,
} from 'lucide-react';
import * as icons from 'lucide-react';
import { SERVICES, PROJECTS, waLink } from '../data/site';
import { Reveal } from '../components/ui';
import builtinCourses from '../data/courses.json';
import { COURSE_BADGE } from '../data/courseBadges';
import heroImg from '../assets/home-hero-light.jpg';
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
import pngRocket from '../assets/png-rocket.png';

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
  const trust = [
    { icon: MessageCircle, t: 'Same-day', d: 'replies' },
    { icon: Users, t: 'Dedicated team', d: 'one point of contact' },
    { icon: Globe2, t: 'PK · UK · US', d: 'clients worldwide' },
    { icon: BadgeCheck, t: 'Pay after', d: 'design approval' },
  ];
  const scrollToWork = () => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' });
  return (
    <header className="mx-hero light">
      <div className="wrap mx-hero-grid">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <span className="mx-badge light"><i /> Full-service digital agency</span>
          <h1>We build websites, stores &amp; videos that <mark>bring you customers.</mark></h1>
          <p className="mx-lead">One agency for your entire digital presence — websites, AI content, Shopify stores and automation. Message us on WhatsApp and talk directly to the team doing the work. Based in Pakistan, working with clients worldwide.</p>
          <div className="mx-ctas">
            <a className="btn btn-coral" href={waLink('Hi DigitalMax! I want to discuss a project.')} target="_blank" rel="noopener">
              <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Chat on WhatsApp <ArrowRight size={17} />
            </a>
            <button className="btn mx-btn-outline" onClick={scrollToWork}>
              See live websites <ArrowRight size={17} />
            </button>
          </div>
          <div className="mx-trust">
            {trust.map((x) => (
              <div key={x.d}><x.icon size={26} /><span><b>{x.t}</b>{x.d}</span></div>
            ))}
          </div>
          <div className="mx-stats light">
            <div><b>100+</b><span>Projects delivered</span></div>
            <div><b>5–7 days</b><span>Typical website delivery</span></div>
            <div><b>4+ countries</b><span>Clients served</span></div>
            <div><b>Direct</b><span>WhatsApp access</span></div>
          </div>
        </motion.div>
        <motion.div
          className="mx-hero-visual big"
          initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
        >
          <img src={heroImg} className="mx-hero-photo" alt="DigitalMax digital workspace" />
          <img loading="lazy" decoding="async" src={pngRocket} className="mx-rocket" alt="" />
          <div className="mx-chat">
            <div className="mx-chat-head">
              <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-chat-ava" alt="DigitalMax" />
              <span><b>DigitalMax</b><i>online</i></span>
            </div>
            <div className="mx-chat-body">
              <p className="in">Hi! I need a website for my clothing brand. What will it cost, and how long?</p>
              <p className="out">Hello! Send us your products and logo — we&rsquo;ll share a design plan and exact quote today.</p>
              <p className="in">And how soon can we launch?</p>
              <p className="out">5–7 days after we get your content. You approve the design before paying anything.</p>
            </div>
            <div className="mx-chat-foot">This is what working together looks like.</div>
          </div>
        </motion.div>
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
  { q: 'How long does it take?', a: 'A business website takes 5\u20137 days once we have your content (text, photos, logo). A Shopify store takes 7\u201310 days.' },
  { q: 'Do I pay in advance?', a: 'No. You approve the design first \u2014 then we finalize and launch.' },
  { q: 'Can you fix or redesign my current website?', a: 'Yes. Send us the link on WhatsApp and we\u2019ll honestly tell you what we\u2019d change.' },
  { q: 'Do you work with clients outside Pakistan?', a: 'Yes \u2014 we work with clients in the UK, the US and the Gulf. WhatsApp makes the time difference easy.' },
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
    <section className="mx-sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="mx-cta">
            <div>
              <h2>Tell us about your project.</h2>
              <p>Message us on WhatsApp — we reply personally, usually the same day.</p>
            </div>
            <a className="btn btn-lime mx-cta-btn" href={waLink('Hi DigitalMax! I have a project in mind.')} target="_blank" rel="noopener">
              <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico big" alt="" />
              <span><small>Start a Conversation</small><b>+92 330 6563410</b></span>
              <ArrowRight size={18} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
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
