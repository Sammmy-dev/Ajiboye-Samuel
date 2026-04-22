export default function About() {
  return (
    <section id="about" className="bg-surface-low py-32 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2
            className="text-on-surface leading-tight"
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
            className="text-on-surface leading-relaxed mb-6 text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I'm a full-stack web and mobile app developer who helps startups and companies build scalable products — from MVP to production. I deliver high-performance web apps, cross-platform mobile apps, and AI-powered features that help businesses launch faster, operate efficiently, and grow confidently.
          </p>
          <p
            className="text-on-surface-variant leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            My stack spans React, Node.js, TypeScript, React Native, Flutter, and PostgreSQL. I care as much about secure backend architecture and API design as I do about clean, responsive UI — writing maintainable code that scales and communicating clearly every step of the way.
          </p>

          <div className="flex flex-wrap gap-6 mt-12">
            {[
              { number: '6+', label: 'Years of Experience' },
              { number: '40+', label: 'Projects Shipped' },
              { number: '3', label: 'FAANG-tier Companies' },
            ].map(({ number, label }) => (
              <div key={label}>
                <p
                  className="text-primary text-4xl font-bold"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
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
