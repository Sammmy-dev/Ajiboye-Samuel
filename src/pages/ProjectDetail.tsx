import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useParams, Link, Navigate } from 'react-router-dom';
import Footer from '../components/home/Footer';
import Nav from '../components/home/Nav';
import { projects } from '../data';

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return <Navigate to="/" replace />;
  }

  const projectIndex = projects.findIndex((p) => p.id === project.id);
  const imagePool = ['/project1.png', '/project2.png', '/project3.png'];
  const heroImage = imagePool[projectIndex % imagePool.length];
  const showcaseImageOne = imagePool[(projectIndex + 1) % imagePool.length];
  const showcaseImageTwo = imagePool[(projectIndex + 2) % imagePool.length];
  const nextProject = projects[(projectIndex + 1) % projects.length];

  const pageRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Above-fold entrance
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.from('.pd-title', { opacity: 0, y: 80, duration: 1 })
      .from('.pd-title-role', { opacity: 0, y: 20, duration: 0.7 }, '-=0.6')
      .from('.pd-hero-img', { opacity: 0, duration: 0.9, ease: 'power2.out' }, '-=0.4');
    // Scroll-triggered sections
    gsap.from(['.pd-summary-label', '.pd-summary-text'], {
      opacity: 0, y: 40, duration: 0.8, ease: 'power3.out', stagger: 0.15,
      scrollTrigger: { trigger: '.pd-summary-label', start: 'top 85%' },
    });
    gsap.from('.pd-meta-row', {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out', stagger: 0.1,
      scrollTrigger: { trigger: '.pd-meta-row', start: 'top 85%' },
    });
    gsap.from('.pd-links', {
      opacity: 0, y: 15, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: '.pd-links', start: 'top 90%' },
    });
    gsap.from('.pd-showcase-img', {
      opacity: 0, y: 40, duration: 0.9, ease: 'power3.out', stagger: 0.2,
      scrollTrigger: { trigger: '.pd-showcase-img', start: 'top 85%' },
    });
    gsap.from('.pd-next', {
      opacity: 0, y: 30, duration: 0.7, ease: 'power3.out',
      scrollTrigger: { trigger: '.pd-next', start: 'top 90%' },
    });
  }, { scope: pageRef });

  return (
    <div ref={pageRef} className="bg-surface-low min-h-screen">
      <Nav />

      <main className="pt-24 pb-24 px-4 sm:px-8">
        <div className="max-w-screen-xl mx-auto">
          <section className="pb-6 border-b border-on-surface-variant/15">
            <div className="grid grid-cols-1 md:grid-cols-[1fr_auto] gap-4 items-end">
              <h1
                className="pd-title text-on-surface leading-none"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 700,
                  fontSize: 'clamp(3.5rem, 12vw, 8.5rem)',
                  letterSpacing: '-0.03em',
                }}
              >
                {project.title}
              </h1>
              <p
                className="pd-title-role text-on-surface-variant text-sm md:text-base uppercase tracking-wide md:text-right"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                {project.role}
              </p>
            </div>
          </section>

          <section className="pt-6">
            <div className="relative bg-surface-high overflow-hidden">
              <img
                src={heroImage}
                alt={project.title}
                className="pd-hero-img w-full h-[340px] sm:h-[460px] lg:h-[640px] object-cover"
              />
            </div>
          </section>

          <section className="py-16 border-b border-on-surface-variant/15">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-2">
                <p
                  className="pd-summary-label text-on-surface text-xs tracking-widest uppercase"
                  style={{ fontFamily: 'var(--font-label)' }}
                >
                  • Summary
                </p>
              </div>

              <div className="lg:col-span-6">
                <p
                  className="pd-summary-text text-on-surface leading-tight"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontWeight: 700,
                    fontSize: 'clamp(1.4rem, 2.8vw, 2.3rem)',
                  }}
                >
                  {project.description}
                </p>
              </div>

              <div className="lg:col-span-4">
                <div className="border-t border-on-surface-variant/20">
                  {[
                    { label: 'Stack', value: project.stack.join(', ') },
                    { label: 'Service', value: project.role },
                    { label: 'Date', value: `Apr ${project.year}` },
                  ].map((meta) => (
                    <div key={meta.label} className="pd-meta-row grid grid-cols-2 gap-6 py-4 border-b border-on-surface-variant/20">
                      <p
                        className="text-on-surface-variant text-xs uppercase tracking-widest"
                        style={{ fontFamily: 'var(--font-label)' }}
                      >
                        {meta.label}
                      </p>
                      <p
                        className="text-on-surface text-sm"
                        style={{ fontFamily: 'var(--font-body)', fontWeight: 600 }}
                      >
                        {meta.value}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pd-links pt-6 flex flex-wrap gap-6">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex uppercase items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}
                  >
                    Live
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>

                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex uppercase items-center gap-2 text-sm text-on-surface hover:text-primary transition-colors duration-200"
                    style={{ fontFamily: 'var(--font-label)', letterSpacing: '0.08em' }}
                  >
                    GitHub
                    <svg width="12" height="12" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                      <path d="M3 13L13 3M13 3H6M13 3V10" stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="pt-10 space-y-4">
            <img
              src={showcaseImageOne}
              alt={`${project.title} showcase`}
              className="pd-showcase-img w-full h-[360px] sm:h-[500px] lg:h-[620px] object-cover"
            />
            <img
              src={showcaseImageTwo}
              alt={`${project.title} detail`}
              className="pd-showcase-img w-full h-[360px] sm:h-[500px] lg:h-[620px] object-cover"
            />
          </section>

          <section className="pt-16">
            <Link
              to={`/projects/${nextProject.id}`}
              className="pd-next inline-block text-on-surface hover:text-primary transition-colors duration-200"
            >
              <p
                className="text-xs tracking-widest uppercase text-on-surface-variant"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Next work →
              </p>
              <p
                className="text-3xl"
                style={{ fontFamily: 'var(--font-body)', fontWeight: 700, letterSpacing: '-0.02em' }}
              >
                {nextProject.title}
              </p>
            </Link>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
