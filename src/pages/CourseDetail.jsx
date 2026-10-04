import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, CheckCircle2, Clock, BadgeCheck, Wallet } from 'lucide-react';
import builtin from '../data/courses.json';
import { COURSE_BADGE } from '../data/courseBadges';
import { waLink } from '../data/site';
import { Reveal, Faq, CtaBanner } from '../components/ui';
import pngWhatsapp from '../assets/png-whatsapp.png';

const pk = (n) => 'PKR ' + Number(n).toLocaleString('en-PK');

const STEPS = [
  ['Message Us', 'Tap enroll and send the pre-filled WhatsApp message.'],
  ['Get Payment Details', 'We share the easy payment options and confirm your seat.'],
  ['Start Learning', 'You get the full roadmap and start the same day.'],
];

export default function CourseDetail() {
  const { slug } = useParams();
  const [courses, setCourses] = useState(builtin.courses || []);
  const course = courses.find((c) => c.slug === slug) || builtin.courses.find((c) => c.slug === slug);

  useEffect(() => {
    fetch('/courses.json', { cache: 'no-store' })
      .then((r) => (r.ok ? r.json() : null))
      .then((j) => {
        if (j && Array.isArray(j.courses) && j.courses.length) setCourses(j.courses);
      })
      .catch(() => {});
  }, []);

  if (!course) {
    return (
      <section className="mx-sec"><div className="wrap">
        <h1 className="mx-h2">Course not found.</h1>
        <Link className="mx-crumb" to="/courses"><ArrowLeft size={15} /> All courses</Link>
      </div></section>
    );
  }

  const off = Math.round((1 - course.discountFee / course.fee) * 100);
  const totalLessons = (course.parts || []).reduce((n, p) => n + ((p.modules || []).length), 0);

  return (
    <>
      <header className="mx-phero">
        <div className="mx-phero-grid">
          <Reveal>
            <Link className="mx-crumb" to="/courses"><ArrowLeft size={15} /> All courses</Link>
            <span className="mx-badge light"><i /> {course.duration} course</span>
            <h1>{course.name.split(' ').slice(0, -2).join(' ')} <mark>{course.name.split(' ').slice(-2).join(' ')}</mark></h1>
            <p className="lead">{course.short}</p>
            <div className="mx-course-price big">
              <span className="was">{pk(course.fee)}</span>
              <span className="now">{pk(course.discountFee)}</span>
              <span className="off">{off}% off</span>
            </div>
            <div className="mx-ctas">
              <a
                className="btn btn-coral"
                href={waLink(`Hi DigitalMax! I want to enroll in the ${course.name} (${pk(course.discountFee)}).`)}
                target="_blank" rel="noopener"
              >
                <img loading="lazy" decoding="async" src={pngWhatsapp} className="mx-wa-ico" alt="" /> Enroll Now <ArrowRight size={17} />
              </a>
            </div>
          </Reveal>
          <Reveal delay={0.12}>
            <div className="mx-course-hero-card" style={{ '--cc': course.color }}>
              {course.image && <img loading="lazy" decoding="async" src={course.image} className="mx-course-hero-img" alt={course.name} />}
              <img loading="lazy" decoding="async" src={COURSE_BADGE[course.slug]} className="mx-course-badge big" alt={course.name} />
              <b>{course.tagline}</b>
              <div className="mx-course-meta">
                <span><Clock size={16} /> {course.duration}</span>
                <span><Wallet size={16} /> {pk(course.discountFee)}</span>
                <span><BadgeCheck size={16} /> Certificate mindset, skills first</span>
              </div>
            </div>
          </Reveal>
        </div>
      </header>

      <section className="mx-sec">
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> What you will learn</span>
            <h2 className="mx-h2">Skills that <mark>pay you back.</mark></h2>
          </Reveal>
          <div className="mx-point-grid">
            {(course.outcomes || []).map((o, i) => (
              <Reveal key={o} delay={(i % 2) * 0.06}>
                <div className="mx-point"><CheckCircle2 size={22} /><span>{o}</span></div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> Course roadmap</span>
            <h2 className="mx-h2">Your <mark>step-by-step plan.</mark></h2>
            <p className="mx-sub">{totalLessons} lessons · {(course.parts || []).length} phases · {course.duration} program</p>
          </Reveal>
          <div className="mx-roadmap" style={{ '--cc': course.color }}>
            {(course.parts || []).map((part, pi) => (
              <Reveal key={part.title}>
                <div className="mx-phase">
                  <div className="mx-phase-head">
                    <span className="mx-phase-n">{String(pi + 1).padStart(2, '0')}</span>
                    <span className="mx-phase-t"><b>{part.title}</b><i>{(part.modules || []).length} lessons</i></span>
                  </div>
                  <div className="mx-phase-body">
                    {(part.modules || []).map((m) => (
                      <div className="mx-phase-item" key={m.t}>
                        <CheckCircle2 size={20} />
                        <span><b>{m.t}</b>{m.d ? <i>{m.d}</i> : null}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <Reveal className="mx-head">
            <span className="mx-badge light"><i /> How enrollment works</span>
            <h2 className="mx-h2">Enrolled in <mark>3 steps.</mark></h2>
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

      {(course.faqs || []).length > 0 && (
        <section className="mx-sec" style={{ paddingTop: 0 }}>
          <div className="wrap">
            <Reveal className="mx-head">
              <span className="mx-badge light"><i /> FAQs</span>
              <h2 className="mx-h2">Questions, <mark>answered.</mark></h2>
            </Reveal>
            <Faq items={course.faqs.map((f) => [f.q, f.a])} />
          </div>
        </section>
      )}

      <CtaBanner
        title="Ready to start earning from automation?"
        text={`Enroll in the ${course.name} today at the discount fee of ${pk(course.discountFee)} — seats are limited.`}
        waText={`Hi DigitalMax! I want to enroll in the ${course.name} (${pk(course.discountFee)}).`}
      />
    </>
  );
}
