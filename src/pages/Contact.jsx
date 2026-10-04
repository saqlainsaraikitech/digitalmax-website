import { Mail, Clock3, Send, BadgeCheck } from 'lucide-react';
import { CONTACT_EMAIL, waLink } from '../data/site';
import { Reveal } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

const SERVICES_LIST = [
  'Website Development',
  'AI Content Creation',
  'Shopify Store Design',
  'YouTube Automation',
  'TikTok Automation',
  'AI Tools',
  'Consultancy',
  'Something else',
];

export default function Contact() {
  return (
    <>
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Contact</span>
            <h1>Tell us about <mark>your project.</mark></h1>
            <p className="lead">Message us directly — we reply personally, usually the same day. WhatsApp is the quickest way to reach us.</p>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec" style={{ paddingTop: 24 }}>
        <div className="wrap mx-cgrid">
          <Reveal>
            <form className="mx-form" action={`https://formsubmit.co/${CONTACT_EMAIL}`} method="POST">
              <input type="hidden" name="_subject" value="New DigitalMax inquiry" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <div className="mx-field">
                <label>Your name</label>
                <input name="name" required placeholder="e.g. Ahmed Khan" />
              </div>
              <div className="mx-field">
                <label>Email</label>
                <input name="email" type="email" required placeholder="you@email.com" />
              </div>
              <div className="mx-field">
                <label>What do you need?</label>
                <select name="service" required defaultValue="">
                  <option value="" disabled>Select a service…</option>
                  {SERVICES_LIST.map((s) => (
                    <option key={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div className="mx-field">
                <label>Message</label>
                <textarea name="message" required placeholder="Tell us about your project…" />
              </div>
              <button className="btn btn-coral" type="submit" style={{ width: '100%', justifyContent: 'center' }}>
                <Send size={18} /> Send Message
              </button>
            </form>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="mx-cinfo">
              <h3>Prefer instant chat?</h3>
              <p>Skip the form — message us straight on WhatsApp and let&rsquo;s talk.</p>
              <div className="mx-crow">
                <span className="mx-cic"><img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /></span>
                <div>
                  <b>WhatsApp</b>
                  <a href={waLink('Hi DigitalMax!')} target="_blank" rel="noopener">+92 330 6563410 — chat now</a>
                </div>
              </div>
              <div className="mx-crow">
                <span className="mx-cic"><Mail size={19} /></span>
                <div>
                  <b>Email</b>
                  <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
                </div>
              </div>
              <div className="mx-crow">
                <span className="mx-cic"><Clock3 size={19} /></span>
                <div>
                  <b>Response time</b>
                  <span>Usually the same day — often within hours.</span>
                </div>
              </div>
              <div className="mx-crow">
                <span className="mx-cic"><BadgeCheck size={19} /></span>
                <div>
                  <b>No pressure</b>
                  <span>Ask anything. Clear quote, no spam, no pushy sales.</span>
                </div>
              </div>
              <a
                className="mx-cwa"
                href={waLink('Hi DigitalMax! I want to discuss a project.')}
                target="_blank" rel="noopener"
              >
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico big" alt="" /> WhatsApp Me Now
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
