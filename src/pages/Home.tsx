import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { projects, skills } from '../data';

/* ─── Star SVG bullet ──────────────────────────────────────────── */
function StarBullet({ size = 14, color = '#F1F27C' }: { size?: number; color?: string }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
      style={{ flexShrink: 0, marginTop: 2 }}
    >
      <path
        d="M7 0 L7.8 6.2 L14 7 L7.8 7.8 L7 14 L6.2 7.8 L0 7 L6.2 6.2 Z"
        fill={color}
      />
    </svg>
  );
}

/* ─── Nav ──────────────────────────────────────────────────────── */
function Nav() {
  const links = ['About', 'Projects', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show nav if scrolled to top
      if (currentScrollY < 50) {
        setIsNavVisible(true);
      }
      // Hide nav when scrolling down
      else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      }
      // Show nav when scrolling up
      else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform duration-300"
      style={{
        backgroundColor: 'rgba(20,19,19,0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(248,246,241,0.06)',
        transform: isNavVisible ? 'translateY(0)' : 'translateY(-100%)',
      }}
    >
      <nav className="max-w-screen-xl mx-auto px-8 min-h-16 flex items-center justify-between relative">
        <span
          className="text-whitetext-sm tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-label)', fontWeight: 100, fontStyle: '', letterSpacing: '0.0em' }}
        >
          Ajiboye Samuel.
        </span>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-on-surface hover:text-primary transition-colors duration-200"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
            {isMenuOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.14em' }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div
          id="mobile-nav-menu"
          className={`md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-on-surface-variant/15 transition-all duration-200 overflow-hidden ${isMenuOpen ? 'max-h-80 opacity-100 py-4' : 'max-h-0 opacity-0 py-0 pointer-events-none'}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="px-8 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="block text-on-surface-variant hover:text-primary transition-colors duration-200 text-sm tracking-widest uppercase py-2"
                  style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.14em' }}
                  onClick={closeMenu}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative h-screen max-h-187.5 flex flex-col justify-end px-8 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #242322 0%, #141313 70%)",
      }}
    >
      {/* Top metadata bar */}
      <div className="absolute top-20 left-0 right-0 px-8 pt-8 flex justify-between items-start max-w-screen-xl mx-auto w-full">
        <div
          style={{ fontFamily: "var(--font-label)" }}
          className="text-on-surface-variant text-xs max-sm:text-[10px] tracking-widest uppercase"
        >
          Portfolio // 2026
        </div>
        <div
          style={{ fontFamily: "var(--font-label)" }}
          className="text-on-surface-variant text-xs max-sm:text-[10px] tracking-widest uppercase text-right"
        >
          Lagos, Nigeria
          <br />
          Available for hire
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute top-1/3 right-12 opacity-20">
        <StarBullet size={64} color="#F1F27C" />
      </div>

      <img
        src="/my-picture-removebg-preview.png"
        alt="Ajiboye Samuel"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px] object-cover"
        style={{ zIndex: 10 }}
      />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Large display heading */}
        <p
          className="absolute top-15 left-0 right-0 px-8 pt-8 flex justify-between items-start max-w-screen-xl mx-auto w-full text-on-surface-variant max-sm:text-[10px] text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-label)" }}
        >
          Software Developer
        </p>

        {/* Double-layer "Ajiboye" — solid behind image, stroke in front */}
        <div
          className="relative mb-2 -top-30 max-sm:-top-47"
          style={{ lineHeight: 1 }}
        >
          {/* Layer 1: solid fill — sits behind the image */}
          <h1
            className="leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "#F1F27C",
              position: "relative",
              zIndex: 5,
            }}
          >
            Ajiboye
          </h1>
          {/* Layer 2: stroke only — sits in front of the image */}
          <h1
            aria-hidden="true"
            className="leading-none pointer-events-none"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1.5px #F1F27C",
              position: "absolute",
              top: 0,
              left: 0,
              zIndex: 15,
            }}
          >
            Ajiboye
          </h1>
        </div>
        {/* Double-layer "Samuel." — solid behind image, stroke in front, right-aligned */}
        <div
          className="relative mb-12 -top-30 max-sm:-top-47 text-right"
          style={{ lineHeight: 1 }}
        >
          {/* Layer 1: solid fill — sits behind the image */}
          <h1
            className="leading-none"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "#F1F27C",
              position: "relative",
              zIndex: 5,
            }}
          >
            Samuel.
          </h1>
          {/* Layer 2: stroke only — sits in front of the image */}
          <h1
            aria-hidden="true"
            className="leading-none pointer-events-none"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 700,
              fontSize: "clamp(4rem, 12vw, 10rem)",
              letterSpacing: "-0.02em",
              color: "transparent",
              WebkitTextStroke: "1.5px #F1F27C",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 15,
            }}
          >
            Samuel.
          </h1>
        </div>

        <div className="flex items-end w-full max-md:bottom-[400px] relative z-20">
          <div className="flex w-full justify-between absolute max-md:bottom-0">
            <a
              href="#projects"
              className="inline-flex items-center gap-3 text-primary py-3 max-sm:text-xs text-sm tracking-widest uppercase font-semibold hover:text-on-surface transition-colors duration-200"
              style={{ fontFamily: "var(--font-label)" }}
            >
              View Work
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-3 text-on-surface py-3 max-md:top-[15px] relative  max-sm:text-xs text-sm tracking-widest uppercase hover:text-primary transition-colors duration-200"
              style={{ fontFamily: "var(--font-label)" }}
            >
              Get in Touch
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M3 13L13 3M13 3H6M13 3V10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── About ─────────────────────────────────────────────────────── */
function About() {
  return (
    <section id="about" className="bg-surface-low py-32 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left – label + headline */}
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

        {/* Right – bio */}
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

/* ─── Skills ─────────────────────────────────────────────────────── */
function Skills() {
  return (
    <section id="skills" className="bg-primary py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        {/* <div className="flex items-baseline gap-8 mb-20">
          <p
            className="text-on-primary text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; Skills
          </p>
          <h2
            className="text-on-primary"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Tech Stack
          </h2>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-12">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p
                className="text-on-primary text-xs tracking-widest uppercase mb-6"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-on-primary text-primary text-xs px-3 py-1.5 tracking-wide"
                    style={{ fontFamily: 'var(--font-label)' }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Projects ───────────────────────────────────────────────────── */
function Projects() {
  const cards = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-primary py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-on-primary text-lg text-center mb-14"
          style={{
            fontFamily: "var(--font-display)",
            fontStyle: "italic",
            fontWeight: 400,
            fontSize: "clamp(2.5rem, 4.2vw, 4.5rem)",
            letterSpacing: "-0.02em",
          }}
        >
          Core Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((project, idx) => (
            <ProjectCard key={project.id} project={project} tone={idx % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  tone,
}: {
  project: (typeof projects)[0];
  tone: number;
}) {
  const cardTheme = [
    {
      background: '#11170C',
      titleColor: '#DCE67A',
      bodyColor: '#DCE67A',
      chipBg: 'rgba(220,230,122,0.14)',
    },
    {
      background: '#E7E3DF',
      titleColor: '#181818',
      bodyColor: '#3A3A3A',
      chipBg: 'rgba(24,24,24,0.08)',
    },
    {
      background: '#050505',
      titleColor: '#DCE67A',
      bodyColor: '#DCE67A',
      chipBg: 'rgba(220,230,122,0.14)',
    },
  ][tone];
  const imageSrc = `/project${tone + 1}.png`;

  return (
    <Link
      to={`/projects/${project.id}`}
      className="group flex flex-col transition-transform duration-300"
      style={{ minHeight: 520, backgroundColor: cardTheme.background }}
    >
      <div
        className="w-full mb-10 overflow-hidden shrink-0"
        style={{
          height: '40%',
          minHeight: 170,
          boxShadow: '0 12px 30px rgba(0,0,0,0.22)',
        }}
      >
        <img
          src={imageSrc}
          alt={project.title}
          className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
        />
      </div>

      <h3
        className="text-center mb-8"
        style={{
          fontFamily: 'var(--font-display)',
          fontStyle: 'italic',
          fontWeight: 700,
          fontSize: 'clamp(2rem, 4vw, 3rem)',
          color: cardTheme.titleColor,
        }}
      >
        {project.title}
      </h3>

      <p
        className="text-center leading-tight uppercase"
        style={{
          fontFamily: 'var(--font-label)',
          letterSpacing: '0.04em',
          fontSize: 'clamp(1rem, 1.6vw, 1.9rem)',
          color: cardTheme.bodyColor,
        }}
      >
        {project.tagline}
      </p>

      <div className="mt-10 flex flex-wrap justify-center gap-2">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-1 uppercase"
            style={{
              fontFamily: 'var(--font-label)',
              letterSpacing: '0.05em',
              color: cardTheme.bodyColor,
              backgroundColor: cardTheme.chipBg,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}

/* ─── Contact ────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="bg-olive py-32 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <h2
            className="text-on-surface leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 400,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Let's build&nbsp;
            <br />
            <span className="text-primary">something</span><br />
            &nbsp;great.
          </h2>
          <p
            className="text-on-surface-variant mt-6 leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            Whether you have a role, a project, or just an idea — I'd love to hear it. My inbox is always open.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            {[
              { label: 'Email', value: 'samuel@ajiboye.dev', href: 'mailto:samuel@ajiboye.dev' },
              { label: 'GitHub', value: 'github.com/ajsammy', href: '#' },
              { label: 'LinkedIn', value: 'linkedin.com/in/ajsammy', href: '#' },
              { label: 'Twitter / X', value: '@ajsammy', href: '#' },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-center gap-6">
                <span
                  className="text-on-surface-variant/60 text-xs tracking-widest uppercase w-24 flex-shrink-0"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  className="text-on-surface text-sm hover:text-primary transition-colors duration-200 wrap-anywhere"
                  style={{
                    fontFamily: 'var(--font-body)',
                    textDecoration: 'none',
                    borderBottom: '1px solid rgba(248,246,241,0.15)',
                    paddingBottom: 2,
                  }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Right – booking card */}
        <div className="bg-surface-low p-8 md:p-10 border border-on-surface-variant/10">
          <div className="flex flex-col h-full">
            <h3
              className="text-on-surface mb-4"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 400,
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Schedule a strategy call.
            </h3>

            <p
              className="text-on-surface-variant leading-relaxed text-base mb-8"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              Pick a time that works for you and we can talk through your product, timeline, and the best path to launch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                '30-minute intro call',
                'Product and scope review',
                'Timezone-friendly scheduling',
                'Follow-up notes after the call',
              ].map((item) => (
                <div
                  key={item}
                  className="border border-on-surface-variant/12 px-4 py-4 text-sm text-on-surface"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
              <a
                href="https://calendly.com/ajsammy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 text-primary text-sm tracking-widest uppercase font-semibold hover:text-on-surface transition-colors duration-200"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Book a call
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─── Footer ─────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="bg-surface py-12 px-8">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <span
          className="text-on-surface-variant text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          © 2026 Ajiboye Samuel
        </span>
        <div className="flex items-center gap-2">
          <StarBullet size={10} />
          <span
            className="text-on-surface-variant text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Designed & built with intention
          </span>
        </div>
        <span
          className="text-on-surface-variant/40 text-xs"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          React · TypeScript · Tailwind
        </span>
      </div>
    </footer>
  );
}

/* ─── Page ───────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
