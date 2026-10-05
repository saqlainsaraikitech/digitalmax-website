import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, animate, useInView } from 'framer-motion';
import { Plus, ArrowRight, Play, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { waLink } from '../data/site';
import pngWhatsapp from '../assets/png-whatsapp.png';

/* Animated number counter */
export function Counter({ to, suffix = '' }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 1.8, ease: [0.22, 1, 0.36, 1], onUpdate: (v) => setVal(Math.round(v)) });
    return () => c.stop();
  }, [inView, to]);
  return <b ref={ref}>{val}{suffix}</b>;
}

/* Scroll-reveal wrapper */
export function Reveal({ children, delay = 0, y = 28, className = '' }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* Section heading block */
export function SectionHead({ eyebrow, title, sub, center = false }) {
  return (
    <Reveal className={center ? 'center' : ''}>
      <span className="eyebrow"><span className="dot" />{eyebrow}</span>
      <h2 className="sec-title" dangerouslySetInnerHTML={{ __html: title }} />
      {sub && <p className="sec-sub" style={center ? { marginLeft: 'auto', marginRight: 'auto' } : {}}>{sub}</p>}
    </Reveal>
  );
}

/* FAQ accordion */
export function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map(([q, a], i) => (
        <Reveal key={i} delay={i * 0.05}>
          <div className={`faq-item${open === i ? ' open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
              {q}<Plus />
            </button>
            <AnimatePresence initial={false}>
              {open === i && (
                <motion.div
                  className="faq-a"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <p>{a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/* Big CTA banner — premium dark edition */
export function CtaBanner({ title, text, waText }) {
  return (
    <section className="mx-sec" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal>
          <div className="mx-cta2">
            <div className="mx-cta2-bg" aria-hidden="true" />
            <div className="mx-cta2-left">
              <span className="mx-cta2-eyebrow"><span className="dot" /> Get started</span>
              <h2 dangerouslySetInnerHTML={{ __html: title }} />
              <p>{text || 'Message us on WhatsApp — we reply personally, usually the same day.'}</p>
              <div className="mx-cta2-points">
                <span><CheckCircle2 size={16} /> Direct chat, no forms</span>
                <span><CheckCircle2 size={16} /> Honest plan &amp; pricing</span>
              </div>
            </div>
            <a className="mx-cta2-card" href={waLink(waText || 'Hi DigitalMax! I have a project in mind.')} target="_blank" rel="noopener">
              <span className="mx-cta2-wa"><img loading="lazy" decoding="async" src={pngWhatsapp} alt="WhatsApp" /></span>
              <span className="mx-cta2-info"><small>Chat on WhatsApp</small><b>+92 330 6563410</b></span>
              <span className="mx-cta2-arrow"><ArrowRight size={20} /></span>
              <span className="mx-cta2-online"><i /> online now</span>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* Click-to-play video card */
export function VideoCard({ src, thumb, title }) {
  const [play, setPlay] = useState(false);
  const sep = src.includes('?') ? '&' : '?';
  return (
    <div className="vid">
      {play ? (
        <div className="frame">
          <iframe src={`${src}${sep}autoplay=1`} title={title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
        </div>
      ) : (
        <div className="facade" onClick={() => setPlay(true)}>
          <img src={thumb} alt={title} loading="lazy" />
          <span className="play"><Play /></span>
        </div>
      )}
      <div className="cap">{title}</div>
    </div>
  );
}

/* Scrolling strip */
const MQ_ITEMS = ['Website Development', 'AI Content Creation', 'Shopify Stores', 'YouTube Automation', 'TikTok Automation', 'AI Tools', 'Consultancy'];
export function Marquee() {
  const row = [...MQ_ITEMS, ...MQ_ITEMS];
  return (
    <div className="marquee" aria-hidden>
      <div className="mq-track">
        <span>{row.map((t, i) => <span key={i}>{t} <b>✦</b></span>)}</span>
      </div>
    </div>
  );
}

/* Project / portfolio card */
export function ProjectCard({ p }) {
  return (
    <a className="pcard" href={p.url} target="_blank" rel="noopener">
      <span className="pframe">
        <span className="pbar"><i /><i /><i /><em>{p.url.replace('https://', '')}</em></span>
        <img src={p.img} alt={`${p.name} — live website screenshot`} loading="lazy" />
      </span>
      <span className="pbody">
        <span className="ptag">{p.tag}</span>
        <h3>{p.name}</h3>
        <p>{p.desc}</p>
        <span className="go">Visit live site <ArrowUpRight /></span>
      </span>
    </a>
  );
}

export function WorkGrid({ projects }) {
  return (
    <div className="work-cards">
      {projects.map((p, i) => (
        <Reveal key={p.name} delay={(i % 3) * 0.08}>
          <ProjectCard p={p} />
        </Reveal>
      ))}
    </div>
  );
}
