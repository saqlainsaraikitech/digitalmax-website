import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, Flame, Check, ShieldCheck, Truck, Clock3,
  Package, BadgePercent, ListChecks, CircleHelp, MousePointerClick,
} from 'lucide-react';
import { TOOLS, toolPrice, toolWasPrice, toolSlug, waLink } from '../data/site';
import { Reveal, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

function useCountdown(iso) {
  const [left, setLeft] = useState(null);
  useEffect(() => {
    if (!iso) return;
    const tick = () => {
      const ms = new Date(iso).getTime() - Date.now();
      setLeft(ms > 0 ? ms : 0);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, [iso]);
  return left;
}

function fmtLeft(ms) {
  const s = Math.floor(ms / 1000);
  const d = Math.floor(s / 86400), h = Math.floor((s % 86400) / 3600),
        m = Math.floor((s % 3600) / 60), ss = s % 60;
  const p2 = (n) => String(n).padStart(2, '0');
  return (d > 0 ? `${d}d ` : '') + `${p2(h)}h ${p2(m)}m ${p2(ss)}s`;
}

export default function ToolDetail() {
  const { slug } = useParams();
  // Same live list as the shop: tools.json next to index.html wins, built-in list is the fallback.
  const [tools, setTools] = useState(null);
  useEffect(() => {
    fetch('/tools.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => setTools(j && Array.isArray(j.tools) && j.tools.length ? j.tools : TOOLS))
      .catch(() => setTools(TOOLS));
  }, []);

  const t = tools ? tools.find((x) => toolSlug(x) === slug) : null;
  const left = useCountdown(t?.dealEndsAt);
  const dealActive = !!(t?.deal && left !== null && left > 0);

  if (!tools) {
    return (
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Loading</span>
            <h1>Fetching the <mark>tool…</mark></h1>
          </Reveal>
        </div>
      </header>
    );
  }

  if (!t) {
    return (
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Not found</span>
            <h1>Tool <mark>not found.</mark></h1>
            <p className="lead">This product may have been removed.</p>
            <Link className="btn btn-coral" to="/tools" style={{ marginTop: 8 }}>
              <ArrowLeft size={17} /> Back to Tools
            </Link>
          </Reveal>
        </div>
      </header>
    );
  }

  const d = t.details || {};
  const price = dealActive ? toolPrice(t) : t.deal ? toolWasPrice(t) : toolPrice(t);
  const was = dealActive ? toolWasPrice(t) : null;

  const meta = [
    d.duration && { icon: Clock3, k: 'Duration', v: d.duration },
    d.warranty && { icon: ShieldCheck, k: 'Warranty', v: d.warranty },
    d.delivery && { icon: Truck, k: 'Delivery', v: d.delivery },
    { icon: Package, k: 'Stock', v: t.stock ? `In Stock (${t.stock})` : 'In Stock' },
  ].filter(Boolean);

  const sections = [
    d.features?.length && {
      icon: ListChecks, title: 'Features',
      items: d.features, bullet: <Check size={17} />,
    },
    d.warrantyRules?.length && {
      icon: ShieldCheck, title: 'Warranty Rules',
      items: d.warrantyRules, bullet: <ShieldCheck size={17} />,
    },
    d.howTo?.length && {
      icon: MousePointerClick, title: 'How to Use',
      items: d.howTo, bullet: <CircleHelp size={17} />,
    },
  ].filter(Boolean);

  return (
    <>
      <header className="mx-phero solo" style={{ paddingBottom: 20 }}>
        <div className="mx-phero-grid">
          <Reveal>
            <Link className="mx-crumb" to="/tools"><ArrowLeft size={15} /> All tools</Link>
            <div className="mx-tool-top" style={{ marginBottom: 14 }}>
              <span className="mx-tool-cat">{t.cat}</span>
              {dealActive && (
                <span className="mx-deal"><Flame size={13} /> Limited Deal — save {t.savePct}%</span>
              )}
            </div>
            <h1>{t.name}</h1>
            {d.description && <p className="lead" style={{ marginBottom: 0 }}>{d.description}</p>}
          </Reveal>
        </div>
      </header>

      <section className="mx-sec" style={{ paddingTop: 30 }}>
        <div className="wrap mx-td-grid">
          <div>
            <Reveal>
              <div className="mx-buybox">
                <div className="mx-tool-price">
                  <small>PKR</small>{price.toLocaleString('en-PK')}
                  {was && <s>PKR {was.toLocaleString('en-PK')}</s>}
                </div>
                {dealActive && left !== null && (
                  <div className="mx-count"><Flame size={15} /> Deal ends in <b>{fmtLeft(left)}</b></div>
                )}
                {t.deal && !dealActive && (
                  <div className="mx-count ended">Deal ended — regular price applies</div>
                )}
                {d.bulk?.length > 0 && (
                  <div className="mx-bulk">
                    <span><BadgePercent size={15} /> Bulk discounts</span>
                    <div className="mx-bulk-chips">{d.bulk.map((b) => <span key={b}>{b}</span>)}</div>
                  </div>
                )}
                <a
                  className="mx-buy-big"
                  href={waLink(`Hi DigitalMax! I want to buy: ${t.name} (PKR ${price.toLocaleString('en-PK')})`)}
                  target="_blank" rel="noopener"
                >
                  <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico big" alt="" /> Buy Now on WhatsApp
                </a>
              </div>
            </Reveal>

            <div style={{ marginTop: 20 }}>
              {sections.map((s2) => (
                <Reveal key={s2.title}>
                  <div className="mx-spec">
                    <h3><s2.icon size={20} /> {s2.title}</h3>
                    <ul>
                      {s2.items.map((it) => (
                        <li key={it}><span className="tb">{s2.bullet}</span>{it}</li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          <aside>
            <Reveal delay={0.08}>
              <div className="mx-meta">
                {meta.map((m) => (
                  <div key={m.k} className="mx-meta-row">
                    <span><m.icon size={16} /> {m.k}</span>
                    <b>{m.v}</b>
                  </div>
                ))}
              </div>
              <div className="mx-note">
                <b>How ordering works</b>
                <p>Tap Buy Now — WhatsApp opens with your order ready. I confirm payment and deliver access, usually within minutes.</p>
              </div>
              <Link className="mx-tool-link" to="/tools" style={{ marginTop: 20 }}>
                <ArrowLeft size={15} /> Back to all tools
              </Link>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBanner
        title="Questions about <mark>this tool?</mark>"
        text="Ask me anything — compatibility, delivery time, or bulk orders."
        waText={`Hi DigitalMax! I have a question about: ${t.name}`}
      />
    </>
  );
}
