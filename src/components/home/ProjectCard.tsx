import { Link } from 'react-router-dom';
import { projects } from '../../data';

type ProjectCardProps = {
  project: (typeof projects)[number];
  tone: number;
};

export default function ProjectCard({ project, tone }: ProjectCardProps) {
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
