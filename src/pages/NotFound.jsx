import { Link } from 'react-router-dom';
import { ArrowRight, Home, GraduationCap, Wrench } from 'lucide-react';
import { waLink } from '../data/site';
import { Reveal } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

export default function NotFound() {
  return (
    <section className="mx-nf">
      <div className="wrap">
        <Reveal>
          <div className="mx-nf-card">
            <span className="mx-badge light"><i /> Error 404</span>
            <div className="mx-nf-code">4<mark>0</mark>4</div>
            <h1>This page took a wrong turn.</h1>
            <p className="mx-sub">The link you followed does not exist — or the page was moved. Let's get you back on track.</p>
            <div className="mx-ctas mx-nf-ctas">
              <Link className="btn btn-coral" to="/"><Home size={17} /> Back to Home</Link>
              <Link className="btn btn-ghost" to="/courses"><GraduationCap size={17} /> Browse Courses</Link>
              <a className="btn btn-ghost" href={waLink('Hi DigitalMax! I was looking for a page on your website.')} target="_blank" rel="noopener">
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Ask on WhatsApp <ArrowRight size={17} />
              </a>
            </div>
            <div className="mx-nf-links">
              <span>Popular:</span>
              <Link to="/tools"><Wrench size={14} /> AI Tools</Link>
              <Link to="/consultancy">Consultancy</Link>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
