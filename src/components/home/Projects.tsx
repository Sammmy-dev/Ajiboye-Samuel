import { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';
import { projects } from '../../data';

export default function Projects() {
  const cards = projects.slice(0, 3);
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [cursor, setCursor] = useState({ x: 0, y: 0 });

  const handleMove = (event: React.MouseEvent<HTMLElement>) => {
    if (!sectionRef.current) {
      return;
    }

    const rect = sectionRef.current.getBoundingClientRect();
    setCursor({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: { trigger: sectionRef.current, start: 'top 80%' },
    });
    tl.from('.projects-heading', { opacity: 0, y: 40, duration: 0.8, ease: 'power3.out' })
      .from('.project-row', { opacity: 0, y: 30, duration: 0.7, ease: 'power3.out', stagger: 0.12 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} id="projects" className="relative bg-surface py-32 px-4 sm:px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="projects-heading text-on-surface text-lg text-center mb-14"
          style={{
            fontFamily: 'var(--font-display)',
            fontStyle: 'italic',
            fontWeight: 400,
            fontSize: 'clamp(2.5rem, 4.2vw, 4.5rem)',
            letterSpacing: '-0.02em',
          }}
        >
          Core Projects
        </h2>

        <div className=" border- border-on-surface-variant/30">
          {cards.map((project, idx) => (
            <Link
              key={project.id}
              to={`/projects/${project.id}`}
              className="project-row grid grid-cols-[1fr_auto] md:grid-cols-[1.3fr_1fr_auto] items-center gap-4 md:gap-8 py-8 md:py-10 border-b border-on-surface-variant/20 last:border-b-0 hover:bg-on-surface/5 transition-colors duration-200"
              onMouseEnter={() => setActiveIndex(idx)}
              onMouseMove={handleMove}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <h3
                className="text-on-surface leading-none"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.2rem)',
                  letterSpacing: '-0.01em',
                }}
              >
                {project.title}
              </h3>

              <p
                className="hidden md:block text-on-surface-variant leading-none"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.35rem, 2vw, 2rem)',
                }}
              >
                {project.role}
              </p>

              <p
                className="text-on-surface-variant text-right"
                style={{
                  fontFamily: 'var(--font-label)',
                  fontWeight: 600,
                  fontSize: 'clamp(1.35rem, 2vw, 2rem)',
                }}
              >
                {project.year}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {activeIndex !== null && (
        <div
          className="pointer-events-none absolute z-30 hidden md:block"
          style={{
            left: cursor.x,
            top: cursor.y,
            transform: 'translate(-50%, -50%)',
          }}
        >
          <div className="w-[300px] h-[190px] overflow-hidden shadow-[0_18px_40px_rgba(0,0,0,0.32)]">
            <img
              src={`/project${activeIndex + 1}.png`}
              alt={cards[activeIndex].title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      )}
    </section>
  );
}
