import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, BadgeCheck } from 'lucide-react';
import * as icons from 'lucide-react';
import { SERVICES, PROJECTS, waLink } from '../data/site';
import { Reveal, Faq, CtaBanner, VideoCard, WorkGrid } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';
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

const SVC_IMG = {
  'website-development': svcWebsite,
  'ai-content-creation': svcAi,
  'shopify-store-design': svcShopify,
  'youtube-automation': svcYoutube,
  'tiktok-automation': svcTiktok,
  'consultancy': svcConsult,
};

const SVC_BADGE = {
  'website-development': badgeWebsite,
  'ai-content-creation': badgeAi,
  'shopify-store-design': badgeShopify,
  'youtube-automation': badgeYoutube,
  'tiktok-automation': badgeTiktok,
  'consultancy': badgeConsult,
};

export default function Service() {
  const { slug } = useParams();
  const s = SERVICES.find((x) => x.slug === slug);
  const related = PROJECTS.filter((p) => p.service === s?.slug);

  if (!s) {
    return (
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Not found</span>
            <h1>That page doesn&rsquo;t exist.</h1>
            <p className="lead">Let&rsquo;s get you back to the good stuff.</p>
            <Link className="btn btn-coral" to="/">Back home <ArrowRight size={17} /></Link>
          </Reveal>
        </div>
      </header>
    );
  }

  return (
    <>
      <header className="mx-phero">
        <div className="mx-phero-grid">
          <Reveal>
            <Link className="mx-crumb" to="/"><ArrowLeft size={15} /> All services</Link>
            <span className="mx-badge light"><i /> {s.tag}</span>
            <h1 dangerouslySetInnerHTML={{ __html: s.heroH }} />
            <p className="lead">{s.heroSub}</p>
            <div className="mx-ctas">
              <a className="btn btn-coral" href={waLink(`Hi DigitalMax! I want a quote for ${s.name}.`)} target="_blank" rel="noopener">
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Get a Quote <ArrowRight size={17} />
              </a>
              <Link className="btn mx-btn-outline" to="/contact">Ask a Question <ArrowRight size={17} /></Link>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-phero-fig">
              <img src={SVC_IMG[s.slug]} className="mx-hero-photo" alt={s.name} />
              {SVC_BADGE[s.slug] && (
                <span className="mx-phero-badge"><img loading="lazy" decoding="async" src={SVC_BADGE[s.slug]} alt="" /></span>
              )}
              <span className="mx-phero-chip"><BadgeCheck size={18} /> Pay after you approve</span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec">
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> What&rsquo;s included</span>
            <h2 className="mx-h2">Everything in <mark>{s.name}.</mark></h2>
            <p className="mx-sub">No vague promises — here is exactly what you get.</p>
          </Reveal>
          <div className="mx-inc-grid">
            {s.included.map(([ic, t, d], i) => {
              const I = icons[ic] || icons.CheckCircle2;
              return (
                <Reveal key={t} delay={(i % 2) * 0.08}>
                  <div className="mx-inc-card">
                    <span className="mx-inc-ic"><I size={24} /></span>
                    <div>
                      <h3>{t}</h3>
                      <p>{d}</p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {s.work && (
        <section className="mx-sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="mx-head">
              <span className="mx-badge light"><i /> Our work</span>
              <h2 className="mx-h2">Watch what <mark>I create.</mark></h2>
              <p className="mx-sub">Real AI videos produced by DigitalMax — press play.</p>
            </Reveal>
            <div className="work-grid" style={{ marginTop: 42 }}>
              {s.work.map(([src, thumb, title], i) => (
                <Reveal key={i} delay={(i % 2) * 0.08}>
                  <VideoCard src={src} thumb={thumb} title={title} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {related.length > 0 && (
        <section className="mx-sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="mx-head">
              <span className="mx-badge light"><i /> Recent work</span>
              <h2 className="mx-h2">I&rsquo;ve done <mark>this before.</mark></h2>
              <p className="mx-sub">Real projects, live right now — click through.</p>
            </Reveal>
            <div style={{ marginTop: 42 }}>
              <WorkGrid projects={related} />
            </div>
          </div>
        </section>
      )}

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> How it works</span>
            <h2 className="mx-h2">Simple from <mark>start</mark> to launch.</h2>
            <p className="mx-sub">Four steps. No confusion, no endless back-and-forth.</p>
          </Reveal>
          <div className="mx-tline">
            {s.steps.map(([t, d], i) => (
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
            <h2 className="mx-h2">Questions? <mark>Answered.</mark></h2>
          </Reveal>
          <div style={{ marginTop: 36 }}>
            <Faq items={s.faqs} />
          </div>
        </div>
      </section>

      <CtaBanner title={s.ctaH} waText={`Hi DigitalMax! I want a quote for ${s.name}.`} />
    </>
  );
}
