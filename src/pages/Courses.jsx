import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Clock, BadgeCheck, Wallet, GraduationCap } from 'lucide-react';
import builtin from '../data/courses.json';
import { COURSE_BADGE } from '../data/courseBadges';
import { waLink } from '../data/site';
import { Reveal, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

const pk = (n) => 'PKR ' + Number(n).toLocaleString('en-PK');

export default function Courses() {
  const [courses, setCourses] = useState(builtin.courses || []);

  // Live list: if a courses.json sits next to index.html (Hostinger), it wins.
  // Otherwise the built-in list is used. Edit courses.json to add/edit courses.
  useEffect(() => {
    fetch('/courses.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && Array.isArray(j.courses) && j.courses.length) setCourses(j.courses);
      })
      .catch(() => {});
  }, []);

  return (
    <>
      <header className="mx-phero solo">
        <div className="mx-phero-grid">
          <Reveal>
            <span className="mx-badge light"><i /> Courses</span>
            <h1>Learn the skill. <mark>Own the income.</mark></h1>
            <p className="lead">Step-by-step automation courses for YouTube, Facebook and TikTok — from niche selection and AI content production to monetization. Enroll over WhatsApp and start the same day.</p>
            <div className="mx-trustchips">
              <span className="mx-tchip"><BadgeCheck size={17} /> Complete roadmaps</span>
              <span className="mx-tchip"><Clock size={17} /> 1–1.5 months</span>
              <span className="mx-tchip"><Wallet size={17} /> Discount pricing</span>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <Reveal>
            <div className="mx-lms-strip" style={{ marginTop: 0 }}>
              <span><GraduationCap size={20} /> Already enrolled?</span>
              <a href="https://lms.digitalmax.pk" target="_blank" rel="noopener">Log in to the student LMS <ArrowRight size={16} /></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-sec">
        <div className="wrap">
          <div className="mx-course-grid">
            {courses.map((c, i) => {
              return (
                <Reveal key={c.slug} delay={(i % 3) * 0.07}>
                  <div className="mx-course-card">
                    {c.image && <img src={c.image} className="mx-course-cover" alt={c.name} loading="lazy" decoding="async" />}
                    <div className="mx-course-top">
                      <img src={COURSE_BADGE[c.slug]} className="mx-course-badge" alt={c.name} loading="lazy" />
                      <span className="mx-course-dur"><Clock size={15} /> {c.duration}</span>
                    </div>
                    <h3>{c.name}</h3>
                    <p className="mx-course-tag">{c.tagline}</p>
                    <p className="mx-course-short">{c.short}</p>
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
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not sure which platform fits you?"
        text="Message us on WhatsApp — we will help you pick the right course for your time, budget and goals."
        waText="Hi DigitalMax! Which automation course is right for me?"
      />
    </>
  );
}
