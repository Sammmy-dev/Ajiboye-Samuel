import { Link } from 'react-router-dom';
import { projects, experience, skills } from '../data';

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
  const links = ['About', 'Projects', 'Experience', 'Contact'];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(20,19,19,0.72)',
        backdropFilter: 'blur(24px)',
        WebkitBackdropFilter: 'blur(24px)',
        borderBottom: '1px solid rgba(248,246,241,0.06)',
      }}
    >
      <nav className="max-w-screen-xl mx-auto px-8 h-16 flex items-center justify-between">
        <span
          className="text-primary text-sm tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-label)', fontWeight: 600, letterSpacing: '0.18em' }}
        >
          A. Samuel
        </span>
        <ul className="flex gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-sm tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.14em' }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

/* ─── Hero ─────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end pb-24 px-8 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #242322 0%, #141313 70%)',
      }}
    >
      {/* Top metadata bar */}
      <div className="absolute top-20 left-0 right-0 px-8 pt-8 flex justify-between items-start max-w-screen-xl mx-auto w-full">
        <div style={{ fontFamily: 'var(--font-label)' }} className="text-on-surface-variant text-xs tracking-widest uppercase">
          Portfolio // 2026
        </div>
        <div style={{ fontFamily: 'var(--font-label)' }} className="text-on-surface-variant text-xs tracking-widest uppercase text-right">
          Lagos, Nigeria
          <br />
          Available for hire
        </div>
      </div>

      {/* Decorative star */}
      <div className="absolute top-1/3 right-12 opacity-20">
        <StarBullet size={64} color="#F1F27C" />
      </div>

      <img src="/my-picture-removebg-preview.png" alt="Ajiboye Samuel" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] object-cover" style={{ zIndex: 10 }} />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Large display heading */}
        <p
          className="text-on-surface-variant mb-4 tracking-widest uppercase text-sm"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          Software Developer
        </p>

        {/* Double-layer "Ajiboye" — solid behind image, stroke in front */}
        <div className="relative mb-2 ml-10" style={{ lineHeight: 1 }}>
          {/* Layer 1: solid fill — sits behind the image */}
          <h1
            className="leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              color: '#F1F27C',
              position: 'relative',
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
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              color: 'transparent',
              WebkitTextStroke: '1.5px #F1F27C',
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: 15,
            }}
          >
            Ajiboye
          </h1>
        </div>
        {/* Double-layer "Samuel." — solid behind image, stroke in front, right-aligned */}
        <div className="relative mb-12 text-right" style={{ lineHeight: 1 }}>
          {/* Layer 1: solid fill — sits behind the image */}
          <h1
            className="leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              color: '#E8E6E1',
              position: 'relative',
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
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              letterSpacing: '-0.02em',
              color: 'transparent',
              WebkitTextStroke: '1.5px #E8E6E1',
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              zIndex: 15,
            }}
          >
            Samuel.
          </h1>
        </div>

        <div className="flex items-end justify-between flex-wrap gap-8">
          <p
            className="text-on-surface-variant max-w-lg text-lg leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I craft precise, performant digital experiences — from design systems to distributed infrastructure. Six years building products people rely on every day.
          </p>

          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-primary text-on-primary px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-on-surface transition-colors duration-200"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="border border-on-surface-variant/30 text-on-surface px-8 py-3 text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-200"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Get in Touch
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
          <p
            className="text-primary text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; About
          </p>
          <h2
            className="text-on-surface leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Building at the&nbsp;
            <span className="text-primary">intersection</span>
            &nbsp;of craft and&nbsp;scale.
          </h2>
        </div>

        {/* Right – bio */}
        <div className="lg:pt-20">
          <p
            className="text-on-surface leading-relaxed mb-6 text-lg"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            I'm a software developer with six years of experience shipping products across fintech, SaaS, and developer tooling. I've worked at companies like Stripe, Intercom, and Vercel — each role deepening my conviction that the best software is both technically rigorous and quietly beautiful.
          </p>
          <p
            className="text-on-surface-variant leading-relaxed text-base"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            My approach sits at the intersection of engineering and design. I care about API ergonomics as much as pixel fidelity. I write code that other engineers enjoy reading, and I build interfaces that users trust without thinking about.
          </p>

          <div className="flex gap-6 mt-12">
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
    <section id="skills" className="bg-surface py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-baseline gap-8 mb-20">
          <p
            className="text-primary text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; Skills
          </p>
          <h2
            className="text-on-surface"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Tech Stack
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map(({ category, items }) => (
            <div key={category}>
              <p
                className="text-on-surface-variant text-xs tracking-widest uppercase mb-6"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {category}
              </p>
              <div className="flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="bg-surface-highest text-on-surface-variant text-xs px-3 py-1.5 tracking-wide"
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
  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="bg-surface-low py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-baseline justify-between mb-20 flex-wrap gap-4">
          <div className="flex items-baseline gap-8">
            <p
              className="text-primary text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              ✦ &nbsp; Projects
            </p>
            <h2
              className="text-on-surface"
              style={{
                fontFamily: 'var(--font-display)',
                fontStyle: 'italic',
                fontWeight: 700,
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                letterSpacing: '-0.02em',
              }}
            >
              Selected Work
            </h2>
          </div>
          <p
            className="text-on-surface-variant text-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {projects.length} projects total
          </p>
        </div>

        {/* Featured – large cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {featured.slice(0, 2).map((project) => (
            <ProjectCard key={project.id} project={project} large />
          ))}
        </div>

        {/* Third featured – full width */}
        {featured[2] && (
          <div className="mb-6">
            <ProjectCard project={featured[2]} wide />
          </div>
        )}

        {/* Rest – smaller cards */}
        {rest.length > 0 && (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  large,
  wide,
}: {
  project: (typeof projects)[0];
  large?: boolean;
  wide?: boolean;
}) {
  return (
    <Link
      to={`/projects/${project.id}`}
      className="group block bg-surface-high overflow-hidden relative"
      style={{ minHeight: wide ? 280 : large ? 420 : 320 }}
    >
      {/* Gradient background */}
      <div
        className="absolute inset-0"
        style={{ background: project.gradient }}
      />

      {/* Overlay on hover */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ backgroundColor: 'rgba(20,19,19,0.4)' }}
      />

      {/* Content */}
      <div className={`relative h-full flex flex-col justify-end p-8 ${wide ? 'lg:flex-row lg:items-end lg:justify-between' : ''}`}>
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span
              className="text-xs tracking-widest uppercase opacity-70"
              style={{ fontFamily: 'var(--font-label)', color: project.accentColor }}
            >
              {project.year} // {project.role}
            </span>
          </div>
          <h3
            className="text-on-surface leading-tight mb-2"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: large || wide ? 'clamp(1.8rem, 3vw, 2.8rem)' : '1.6rem',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h3>
          <p
            className="text-on-surface-variant text-sm leading-relaxed max-w-sm"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {project.tagline}
          </p>
        </div>

        {/* Arrow indicator */}
        <div
          className="mt-6 lg:mt-0 flex-shrink-0 w-10 h-10 flex items-center justify-center border border-on-surface-variant/30 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200"
          style={{ color: 'var(--color-on-surface)' }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        </div>
      </div>

      {/* Stack chips – bottom */}
      <div className="absolute top-6 right-6 flex flex-wrap gap-1 justify-end max-w-[40%]">
        {project.stack.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="text-xs px-2 py-0.5"
            style={{
              fontFamily: 'var(--font-label)',
              backgroundColor: 'rgba(20,19,19,0.6)',
              color: project.accentColor,
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </Link>
  );
}

/* ─── Experience ─────────────────────────────────────────────────── */
function Experience() {
  return (
    <section id="experience" className="bg-surface py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        <div className="flex items-baseline gap-8 mb-20">
          <p
            className="text-primary text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; Experience
          </p>
          <h2
            className="text-on-surface"
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(2rem, 4vw, 3.5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Work History
          </h2>
        </div>

        <div>
          {experience.map((job, i) => (
            <div
              key={job.company}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 ${i !== experience.length - 1 ? 'mb-24' : ''}`}
            >
              {/* Left – metadata */}
              <div className="lg:col-span-4">
                <p
                  className="text-primary text-xs tracking-widest uppercase mb-3"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {job.period}
                </p>
                <h3
                  className="text-on-surface text-2xl font-bold mb-1"
                  style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                >
                  {job.company}
                </h3>
                <p
                  className="text-on-surface-variant text-sm tracking-wide"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {job.role}
                </p>
                <p
                  className="text-on-surface-variant/50 text-xs tracking-widest uppercase mt-1"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  {job.location}
                </p>
              </div>

              {/* Right – details */}
              <div className="lg:col-span-8 lg:col-start-6">
                <p
                  className="text-on-surface leading-relaxed mb-8 text-base"
                  style={{ fontFamily: 'var(--font-body)' }}
                >
                  {job.description}
                </p>
                <ul className="flex flex-col gap-4">
                  {job.highlights.map((h) => (
                    <li key={h} className="flex items-start gap-3">
                      <StarBullet size={12} />
                      <span
                        className="text-on-surface-variant text-sm leading-relaxed"
                        style={{ fontFamily: 'var(--font-body)' }}
                      >
                        {h}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─── Contact ────────────────────────────────────────────────────── */
function Contact() {
  return (
    <section id="contact" className="bg-olive py-32 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left */}
        <div>
          <p
            className="text-primary text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; Contact
          </p>
          <h2
            className="text-on-surface leading-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(2.5rem, 5vw, 5rem)',
              letterSpacing: '-0.02em',
            }}
          >
            Let's build&nbsp;
            <span className="text-primary">something</span>
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
                  className="text-on-surface text-sm hover:text-primary transition-colors duration-200"
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

        {/* Right – form */}
        <div className="bg-surface-low p-8">
          <p
            className="text-on-surface-variant text-xs tracking-widest uppercase mb-8"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Send a Message
          </p>
          <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label
                className="block text-on-surface-variant text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="w-full bg-transparent text-on-surface text-sm pb-2 outline-none placeholder:text-on-surface-variant/40"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderBottom: '1px solid rgba(248,246,241,0.15)',
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = '#F1F27C')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(248,246,241,0.15)')}
              />
            </div>
            <div>
              <label
                className="block text-on-surface-variant text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Email
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full bg-transparent text-on-surface text-sm pb-2 outline-none placeholder:text-on-surface-variant/40"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderBottom: '1px solid rgba(248,246,241,0.15)',
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = '#F1F27C')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(248,246,241,0.15)')}
              />
            </div>
            <div>
              <label
                className="block text-on-surface-variant text-xs tracking-widest uppercase mb-2"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Message
              </label>
              <textarea
                rows={4}
                placeholder="Tell me about your project..."
                className="w-full bg-transparent text-on-surface text-sm pb-2 outline-none resize-none placeholder:text-on-surface-variant/40"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderBottom: '1px solid rgba(248,246,241,0.15)',
                }}
                onFocus={(e) => (e.target.style.borderBottomColor = '#F1F27C')}
                onBlur={(e) => (e.target.style.borderBottomColor = 'rgba(248,246,241,0.15)')}
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-on-primary px-8 py-3 text-sm tracking-widest uppercase font-semibold hover:bg-on-surface transition-colors duration-200 self-start"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Send Message
            </button>
          </form>
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
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
