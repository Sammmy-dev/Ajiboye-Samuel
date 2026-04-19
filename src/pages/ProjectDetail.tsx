import { useParams, Link, Navigate } from 'react-router-dom';
import { projects } from '../data';

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

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const otherProjects = projects.filter((p) => p.id !== project.id).slice(0, 2);

  return (
    <div className="bg-surface min-h-screen">
      {/* ── Nav bar ───────────────────────────────────────── */}
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
          <Link
            to="/"
            className="flex items-center gap-3 text-on-surface-variant hover:text-primary transition-colors duration-200"
            style={{ fontFamily: 'var(--font-label)', fontSize: '0.75rem', letterSpacing: '0.14em' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M13 8H3M3 8L8 3M3 8L8 13" stroke="currentColor" strokeWidth="1.5" />
            </svg>
            <span className="uppercase tracking-widest">Back to Work</span>
          </Link>
          <span
            className="text-primary text-sm tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)', fontWeight: 600, letterSpacing: '0.18em' }}
          >
            A. Samuel
          </span>
        </nav>
      </header>

      {/* ── Hero ──────────────────────────────────────────── */}
      <section
        className="pt-16 min-h-[70vh] flex flex-col justify-end pb-20 px-8 relative overflow-hidden"
        style={{ background: project.gradient }}
      >
        {/* Decorative star top-right */}
        <div className="absolute top-24 right-12 opacity-15">
          <StarBullet size={72} color={project.accentColor} />
        </div>

        <div className="max-w-screen-xl mx-auto w-full">
          <div className="flex items-center gap-4 mb-6">
            <span
              className="text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-label)', color: project.accentColor }}
            >
              {project.year}
            </span>
            <span className="text-on-surface-variant/30">—</span>
            <span
              className="text-on-surface-variant text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              {project.role}
            </span>
          </div>

          <h1
            className="text-on-surface leading-none mb-6"
            style={{
              fontFamily: 'var(--font-display)',
              fontStyle: 'italic',
              fontWeight: 700,
              fontSize: 'clamp(3.5rem, 10vw, 9rem)',
              letterSpacing: '-0.02em',
            }}
          >
            {project.title}
          </h1>

          <p
            className="text-on-surface-variant text-xl max-w-2xl leading-relaxed"
            style={{ fontFamily: 'var(--font-body)' }}
          >
            {project.tagline}
          </p>

          {/* CTA links */}
          <div className="flex gap-4 mt-10">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-6 py-2.5 text-on-primary text-sm tracking-widest uppercase font-semibold transition-colors duration-200"
              style={{
                fontFamily: 'var(--font-label)',
                backgroundColor: project.accentColor,
                color: '#141313',
              }}
            >
              Live Site
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path d="M2 10L10 2M10 2H4M10 2V8" stroke="currentColor" strokeWidth="1.5" />
              </svg>
            </a>
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 border border-on-surface-variant/30 text-on-surface px-6 py-2.5 text-sm tracking-widest uppercase hover:border-primary hover:text-primary transition-colors duration-200"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ── Tech Stack ────────────────────────────────────── */}
      <section className="bg-surface-low px-8 py-16">
        <div className="max-w-screen-xl mx-auto flex items-center gap-8 flex-wrap">
          <p
            className="text-on-surface-variant text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            Tech Stack
          </p>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="bg-surface-highest text-on-surface-variant text-xs px-4 py-2 tracking-wide"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Overview ──────────────────────────────────────── */}
      <section className="bg-surface px-8 py-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Label */}
          <div className="lg:col-span-3">
            <p
              className="text-primary text-xs tracking-widest uppercase sticky top-24"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              ✦ &nbsp; Overview
            </p>
          </div>

          {/* Body */}
          <div className="lg:col-span-7">
            <p
              className="text-on-surface text-xl leading-relaxed mb-12"
              style={{ fontFamily: 'var(--font-body)' }}
            >
              {project.description}
            </p>

            {/* Challenge */}
            <div className="mb-12">
              <h2
                className="text-on-surface mb-4 text-2xl font-bold"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontWeight: 700,
                  letterSpacing: '-0.01em',
                }}
              >
                The Challenge
              </h2>
              <p
                className="text-on-surface-variant text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {project.challenge}
              </p>
            </div>

            {/* Outcome */}
            <div
              className="p-8"
              style={{ backgroundColor: 'var(--color-surface-low)' }}
            >
              <p
                className="text-primary text-xs tracking-widest uppercase mb-4"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                ✦ &nbsp; Outcome
              </p>
              <p
                className="text-on-surface text-base leading-relaxed"
                style={{ fontFamily: 'var(--font-body)' }}
              >
                {project.outcome}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Visual showcase ───────────────────────────────── */}
      <section className="px-8 pb-32">
        <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-4">
          {/* Placeholder visual panels */}
          {[
            { label: 'Dashboard View', flex: 'lg:col-span-2', height: 360 },
            { label: 'Component Detail', flex: 'lg:col-span-1', height: 360 },
            { label: 'Mobile Responsive', flex: 'lg:col-span-1', height: 280 },
            { label: 'Dark Mode', flex: 'lg:col-span-2', height: 280 },
          ].map(({ label, flex, height }) => (
            <div
              key={label}
              className={`${flex} flex items-end p-6 relative overflow-hidden`}
              style={{
                height,
                background: project.gradient,
              }}
            >
              <div
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 40px,
                    rgba(248,246,241,0.03) 40px,
                    rgba(248,246,241,0.03) 41px
                  ), repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 40px,
                    rgba(248,246,241,0.03) 40px,
                    rgba(248,246,241,0.03) 41px
                  )`,
                }}
              />
              <span
                className="relative text-xs tracking-widest uppercase"
                style={{ fontFamily: 'var(--font-label)', color: project.accentColor }}
              >
                {label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* ── Next Projects ─────────────────────────────────── */}
      <section className="bg-surface-low px-8 py-32">
        <div className="max-w-screen-xl mx-auto">
          <p
            className="text-on-surface-variant text-xs tracking-widest uppercase mb-16"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ✦ &nbsp; More Work
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {otherProjects.map((p) => (
              <Link
                key={p.id}
                to={`/projects/${p.id}`}
                className="group block p-8 bg-surface-high relative overflow-hidden"
                style={{ minHeight: 240 }}
              >
                <div className="absolute inset-0 opacity-40" style={{ background: p.gradient }} />
                <div className="relative flex flex-col justify-between h-full" style={{ minHeight: 180 }}>
                  <div>
                    <p
                      className="text-xs tracking-widest uppercase mb-3 opacity-60"
                      style={{ fontFamily: 'var(--font-label)', color: p.accentColor }}
                    >
                      {p.year}
                    </p>
                    <h3
                      className="text-on-surface text-2xl font-bold"
                      style={{ fontFamily: 'var(--font-display)', fontWeight: 700 }}
                    >
                      {p.title}
                    </h3>
                    <p
                      className="text-on-surface-variant text-sm mt-2"
                      style={{ fontFamily: 'var(--font-body)' }}
                    >
                      {p.tagline}
                    </p>
                  </div>
                  <div
                    className="mt-6 w-8 h-8 flex items-center justify-center border border-on-surface-variant/30 group-hover:border-primary group-hover:bg-primary group-hover:text-on-primary transition-all duration-200"
                    style={{ color: 'var(--color-on-surface)' }}
                  >
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Footer ────────────────────────────────────────── */}
      <footer className="bg-surface py-12 px-8">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between flex-wrap gap-4">
          <Link
            to="/"
            className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs tracking-widest uppercase"
            style={{ fontFamily: 'var(--font-label)' }}
          >
            ← Back Home
          </Link>
          <div className="flex items-center gap-2">
            <StarBullet size={10} />
            <span
              className="text-on-surface-variant text-xs tracking-widest uppercase"
              style={{ fontFamily: 'var(--font-label)' }}
            >
              Ajiboye Samuel // 2026
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
