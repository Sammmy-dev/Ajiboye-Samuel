import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import StarBullet from './StarBullet';

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const starRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLParagraphElement>(null);
  const ajiboyeSolidRef = useRef<HTMLHeadingElement>(null);
  const ajiboyeStrokeRef = useRef<HTMLHeadingElement>(null);
  const samuelSolidRef = useRef<HTMLHeadingElement>(null);
  const samuelStrokeRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const ctasRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.to(starRef.current, { rotation: 360, duration: 20, ease: 'none', repeat: -1 });

    gsap.set([metaRef.current, labelRef.current], { opacity: 0, y: -14 });
    gsap.set(
      [ajiboyeSolidRef.current, ajiboyeStrokeRef.current, samuelSolidRef.current, samuelStrokeRef.current],
      { opacity: 0, y: 80 }
    );
    gsap.set(imageRef.current, { opacity: 0, y: 40 });
    gsap.set(ctasRef.current, { opacity: 0, y: 16 });

    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    tl.to([metaRef.current, labelRef.current], {
        opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
      })
      .to(
        [ajiboyeSolidRef.current, ajiboyeStrokeRef.current, samuelSolidRef.current, samuelStrokeRef.current],
        { opacity: 1, y: 0, duration: 1, stagger: 0.1 },
        '-=0.3'
      )
      .to(imageRef.current, { opacity: 1, y: 0, duration: 0.9 }, '-=0.7')
      .to(ctasRef.current, { opacity: 1, y: 0, duration: 0.6 }, '-=0.4');
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen max-h-187.5 px-4 sm:px-8 min-h-160 flex flex-col justify-end overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse 80% 60% at 50% 0%, #242322 0%, #141313 70%)",
      }}
    >
      <div
        ref={metaRef}
        className="absolute top-20 left-0 right-0 max-w-screen-xl mx-auto pt-8 px-4 sm:px-8 flex justify-between items-start"
      >
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

      <div ref={starRef} className="absolute top-1/3 right-12 opacity-20">
        <StarBullet size={64} color="#F1F27C" />
      </div>

      <img
        ref={imageRef}
        src="/my-picture-removebg-preview.png"
        alt="Ajiboye Samuel"
        className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[500px] h-[500px] max-md:w-[300px] max-md:h-[300px] object-cover"
        style={{ zIndex: 10 }}
      />

      <div className="max-w-screen-xl mx-auto w-full">
        <p
          ref={labelRef}
          className="absolute top-15 left-0 right-0 pt-8 px-4 sm:px-8 flex justify-between items-start max-w-screen-xl mx-auto w-full text-on-surface-variant max-sm:text-[10px] text-xs tracking-widest uppercase"
          style={{ fontFamily: "var(--font-label)" }}
        >
          Software Developer
        </p>

        <div
          className="relative mb-2 -top-30 max-sm:-top-47"
          style={{ lineHeight: 1 }}
        >
          <h1
            ref={ajiboyeSolidRef}
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
          <h1
            ref={ajiboyeStrokeRef}
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

        <div
          className="relative mb-12 -top-30 max-sm:-top-47 text-right"
          style={{ lineHeight: 1 }}
        >
          <h1
            ref={samuelSolidRef}
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
          <h1
            ref={samuelStrokeRef}
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

        <div className="flex items-end w-full  max-md:bottom-[400px] relative z-20">
          <div
            ref={ctasRef}
            className="flex w-full justify-between absolute max-md:bottom-0"
          >
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
