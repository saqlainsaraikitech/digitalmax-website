import { useState, useEffect, useLayoutEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowUpRight, MessageCircle } from 'lucide-react';
import * as icons from 'lucide-react';
import { SERVICES, waLink } from '../data/site';
import Logo from './Logo';
import waIcon from '../assets/wa.png';

function SvcIcon({ name, size = 20 }) {
  const I = icons[name] || icons.Sparkles;
  return <I size={size} />;
}

export function ScrollToTop() {
  const { pathname } = useLocation();
  useLayoutEffect(() => {
    // Instant jump: bypass the CSS smooth-scroll so the new page always
    // lands at the top before reveal animations are measured.
    const doc = document.documentElement;
    const prev = doc.style.scrollBehavior;
    doc.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    doc.style.scrollBehavior = prev;
  }, [pathname]);
  return null;
}

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="wrap nav-inner">
        <Link className="brand" to="/">
          <Logo />
        </Link>
        <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu">
          {open ? <X /> : <Menu />}
        </button>
        <div className={`nav-links${open ? ' open' : ''}`}>
          <NavLink className="nl" to="/" end>Home</NavLink>
          <div className="has-drop">
            <button className="nl-btn">Services <ChevronDown size={16} /></button>
            <div className="drop">
              {SERVICES.map((s) => (
                <Link key={s.slug} to={`/services/${s.slug}`}>
                  <SvcIcon name={s.icon} />{s.name}
                </Link>
              ))}
            </div>
          </div>
          <NavLink className="nl" to="/tools">Tools</NavLink>
          <NavLink className="nl" to="/courses">Courses</NavLink>
          <NavLink className="nl" to="/about">About</NavLink>
          <NavLink className="nl" to="/consultancy">Consultancy</NavLink>
          <NavLink className="nl" to="/contact">Contact</NavLink>
          <a
            className="btn btn-lime nav-cta"
            style={{ padding: '11px 22px', fontSize: 15 }}
            href={waLink('Hi DigitalMax! I want to book a call.')}
            target="_blank" rel="noopener"
          >
            <MessageCircle size={17} /> Book a Call
          </a>
        </div>
      </div>
    </nav>
  );
}

export function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-brand">
            <Logo />
            <p>Websites, AI content, Shopify stores and automation — one team for your entire digital growth.</p>
          </div>
          <div>
            <h4>Services</h4>
            {SERVICES.map((s) => (
              <Link key={s.slug} to={`/services/${s.slug}`}>{s.name}</Link>
            ))}
          </div>
          <div>
            <h4>Company</h4>
            <Link to="/about">About Us</Link>
            <Link to="/tools">AI Tools</Link>
            <Link to="/courses">Courses</Link>
            <Link to="/consultancy">Consultancy</Link>
            <Link to="/contact">Contact</Link>
            <a href={waLink('Hi DigitalMax!')} target="_blank" rel="noopener">
              WhatsApp <ArrowUpRight size={13} style={{ display: 'inline', verticalAlign: 'middle' }} />
            </a>
          </div>
        </div>
        <div className="foot-bottom">
          <span>© 2026 DigitalMax. All rights reserved.</span>
          <span>Built to grow.</span>
        </div>
      </div>
    </footer>
  );
}

export function WhatsFloat() {
  return (
    <a
      className="wa-float"
      href={waLink('Hi DigitalMax! I have a question about your services.')}
      target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
    >
      <img loading="lazy" decoding="async" src={waIcon} alt="WhatsApp" />
    </a>
  );
}
