import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    tl.from('.about-heading', { opacity: 0, y: 60, duration: 0.9, ease: 'power3.out' })
      .from(['.about-para-1', '.about-para-2'], { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.15 }, '-=0.5')
      .from('.about-stat', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', stagger: 0.12 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="about" className="bg-surface-low py-32 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2
            className="about-heading text-on-surface leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Building scalable apps at the&nbsp;<br />
            <span className="text-primary">intersection</span>
            &nbsp;<br />of web, mobile, and&nbsp;AI.
          </h2>
        </div>

        <div className="">
          <p
            className="about-para-1 text-on-surface leading-relaxed mb-6 text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I'm a full-stack web and mobile app developer who helps startups and companies build scalable products — from MVP to production. I deliver high-performance web apps, cross-platform mobile apps, and AI-powered features that help businesses launch faster, operate efficiently, and grow confidently.
          </p>
          <p
            className="about-para-2 text-on-surface-variant leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            My stack spans React, Node.js, TypeScript, React Native, Flutter, and PostgreSQL. I care as much about secure backend architecture and API design as I do about clean, responsive UI — writing maintainable code that scales and communicating clearly every step of the way.
          </p>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { number: '6+', label: 'Years of Experience' },
              { number: '40+', label: 'Projects Shipped' },
              { number: '1', label: 'Happy Developer' },
            ].map(({ number, label }) => (
              <div key={label} className="about-stat">
                <p
                  className="text-primary text-4xl font-bold"
                  style={{ fontFamily: 'var(--font-body)', fontWeight: 700 }}
                >
                  {number}
                </p>
                <p
                  className="text-on-surface-variant text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
