import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BadgeCheck, CheckCircle2 } from 'lucide-react';
import * as icons from 'lucide-react';
import { CONSULTANCY_POINTS, CONSULTANCY_FAQS, waLink } from '../data/site';
import { Reveal, Faq, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';
const svcConsult = '/images/svc-png-consultancy.png';
import badgeConsult from '../assets/badge-consultancy.png';

const STEPS = [
  ['Book Your Session', 'Message us on WhatsApp and pick a time that suits you.'],
  ['We Go Deep', 'A focused 1-on-1 session on your idea, business or bottleneck.'],
  ['Get Your Roadmap', 'You leave with a written, step-by-step action plan.'],
  ['Execute With Confidence', 'Follow the plan — or hire us to build it for you.'],
];

export default function Consultancy() {
  return (
    <>
      <header className="mx-phero">
        <div className="mx-phero-grid">
          <Reveal>
            <Link className="mx-crumb" to="/"><ArrowLeft size={15} /> Back to home</Link>
            <span className="mx-badge light"><i /> Consultancy</span>
            <h1>Stop guessing. <mark>Get a plan.</mark></h1>
            <p className="lead">A focused 1-on-1 session where we turn your idea into a clear, step-by-step roadmap — what to build, what it costs, and what to avoid.</p>
            <div className="mx-ctas">
              <a className="btn btn-coral" href={waLink('Hi DigitalMax! I want to book a consultancy session.')} target="_blank" rel="noopener">
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Book a Session <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-phero-fig">
              <img src={svcConsult} className="mx-hero-photo" alt="Consultancy session" />
              <span className="mx-phero-badge"><img loading="lazy" decoding="async" src={badgeConsult} alt="" /></span>
              <span className="mx-phero-chip"><BadgeCheck size={18} /> 1-on-1, no fluff</span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec">
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> What you get</span>
            <h2 className="mx-h2">One session. <mark>Total clarity.</mark></h2>
            <p className="mx-sub">This is not motivational talk — it is practical, specific advice for your situation.</p>
          </Reveal>
          <div className="mx-point-grid">
            {CONSULTANCY_POINTS.map(([ic, t, d], i) => {
              const I = icons[ic] || CheckCircle2;
              return (
                <Reveal key={t} delay={(i % 2) * 0.06}>
                  <div className="mx-point">
                    <I size={22} />
                    <span><b>{t}:</b> {d}</span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> How it works</span>
            <h2 className="mx-h2">From confused to <mark>clear</mark> in 4 steps.</h2>
          </Reveal>
          <div className="mx-tline">
            {STEPS.map(([t, d], i) => (
              <Reveal key={t} delay={i * 0.07}>
                <div className="mx-tstep">
                  <div className="mx-tstep-n">{i + 1}</div>
                  <h4>{t}</h4>
                  <p>{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> FAQ</span>
            <h2 className="mx-h2">Before you <mark>book.</mark></h2>
          </Reveal>
          <div style={{ marginTop: 36 }}>
            <Faq items={CONSULTANCY_FAQS} />
          </div>
        </div>
      </section>

      <CtaBanner
        title="Your idea deserves a <mark>real plan.</mark>"
        text="One focused session with me — you leave with a written roadmap, not vague advice."
        waText="Hi DigitalMax! I want to book a consultancy session."
      />
    </>
  );
}
