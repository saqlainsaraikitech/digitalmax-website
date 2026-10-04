import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, BadgeCheck, Zap, MessagesSquare } from 'lucide-react';
import { TOOLS, toolPrice, toolWasPrice, toolSlug, waLink } from '../data/site';
import { Reveal, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

export default function Tools() {
  const [cat, setCat] = useState('All');
  const [tools, setTools] = useState(TOOLS);

  // Live list: if a tools.json sits next to index.html (Hostinger), it wins.
  // Otherwise the built-in list is used. Edit tools.json to add/edit items.
  useEffect(() => {
    fetch('/tools.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && Array.isArray(j.tools) && j.tools.length) setTools(j.tools);
      })
      .catch(() => {});
  }, []);

  const list = tools.filter((t) => cat === 'All' || t.cat === cat);
  const cats = ['All', ...new Set(tools.map((t) => t.cat).filter(Boolean))];
  const safeCat = cats.includes(cat) ? cat : 'All';
  const shown = safeCat === 'All' ? tools : tools.filter((t) => t.cat === safeCat);

  return (
    <>
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Premium Tools</span>
            <h1>Pro tools, <mark>friendly cost.</mark></h1>
            <p className="lead">Genuine premium subscriptions and credits — pick your tool, tap buy, and get access over WhatsApp. I deliver personally, usually under 10 minutes.</p>
            <div className="mx-trustchips">
              <span className="mx-tchip"><BadgeCheck size={17} /> Genuine products</span>
              <span className="mx-tchip"><Zap size={17} /> Under 10 minutes delivery</span>
              <span className="mx-tchip"><MessagesSquare size={17} /> Order on WhatsApp</span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec" style={{ paddingTop: 20 }}>
        <div className="wrap">
          <Reveal>
            <div className="mx-shop-filters">
              {cats.map((c) => (
                <button key={c} className={`mx-fchip${safeCat === c ? ' on' : ''}`} onClick={() => setCat(c)}>{c}</button>
              ))}
            </div>
          </Reveal>
          <div className="mx-tools-grid">
            {shown.map((t, i) => {
              const p = toolPrice(t);
              const was = t.deal ? toolWasPrice(t) : null;
              return (
                <Reveal key={t.name} delay={(i % 3) * 0.06}>
                  <div className="mx-tool">
                    <div className="mx-tool-top">
                      <span className="mx-tool-cat">{t.cat}</span>
                      {t.deal && <span className="mx-deal"><Flame size={13} /> Limited Deal</span>}
                    </div>
                    <h3>{t.name}</h3>
                    <div className="mx-tool-price">
                      <small>PKR</small>{p.toLocaleString('en-PK')}
                      {was && <s>PKR {was.toLocaleString('en-PK')}</s>}
                    </div>
                    <span className="mx-stock"><i />In Stock{t.stock ? ` (${t.stock})` : ''}</span>
                    <Link className="mx-tool-link" to={`/tool/${toolSlug(t)}`}>
                      View full details <ArrowRight size={14} />
                    </Link>
                    <a
                      className="mx-tool-buy"
                      href={waLink(`Hi DigitalMax! I want to buy: ${t.name} (PKR ${p})`)}
                      target="_blank" rel="noopener"
                    >
                      <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Buy Now
                    </a>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Need a tool <mark>not listed?</mark>"
        text="Message us — if it exists, we can probably arrange it for you."
        waText="Hi DigitalMax! I need a tool that is not listed on your site."
      />
    </>
  );
}
