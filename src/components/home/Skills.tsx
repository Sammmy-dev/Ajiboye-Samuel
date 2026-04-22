import { skills } from '../../data';

export default function Skills() {
  return (
    <section id="skills" className="bg-primary py-32 px-8">
      <div className="max-w-screen-xl mx-auto">
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
