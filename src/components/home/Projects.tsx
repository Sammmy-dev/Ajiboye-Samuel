import { projects } from '../../data';
import ProjectCard from './ProjectCard';

export default function Projects() {
  const cards = projects.slice(0, 3);

  return (
    <section id="projects" className="bg-primary py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
        <h2
          className="text-on-primary text-lg text-center mb-14"
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

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {cards.map((project, idx) => (
            <ProjectCard key={project.id} project={project} tone={idx % 3} />
          ))}
        </div>
      </div>
    </section>
  );
}
