import StarBullet from './StarBullet';

export default function Hero() {
  return (
    <section
      className="relative h-screen max-h-187.5 flex flex-col justify-end px-8 overflow-hidden"
      style={{
        background: 'radial-gradient(ellipse 80% 60% at 50% 0%, #242322 0%, #141313 70%)',
      }}
    >
      <div className="absolute top-20 left-0 right-0 px-8 pt-8 flex justify-between items-start max-w-screen-xl mx-auto w-full">
        <div
          style={{ fontFamily: 'var(--font-label)' }}
          className="text-on-surface-variant text-xs max-sm:text-[10px] tracking-widest uppercase"
        >
          Portfolio // 2026
        </div>
        <div
          style={{ fontFamily: 'var(--font-label)' }}
          className="text-on-surface-variant text-xs max-sm:text-[10px] tracking-widest uppercase text-right"
        >
          Lagos, Nigeria
          <br />
          Available for hire
        </div>
      </div>

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
        <p
          className="absolute top-15 left-0 right-0 px-8 pt-8 flex justify-between items-start max-w-screen-xl mx-auto w-full text-on-surface-variant max-sm:text-[10px] text-xs tracking-widest uppercase"
          style={{ fontFamily: 'var(--font-label)' }}
        >
          Software Developer
        </p>

        <div
          className="relative mb-2 -top-30 max-sm:-top-47"
          style={{ lineHeight: 1 }}
        >
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

        <div
          className="relative mb-12 -top-30 max-sm:-top-47 text-right"
          style={{ lineHeight: 1 }}
        >
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
            Samuel.
          </h1>
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
              style={{ fontFamily: 'var(--font-label)' }}
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
              style={{ fontFamily: 'var(--font-label)' }}
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
