import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import StarBullet from './StarBullet';

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);

  useGSAP(() => {
    gsap.from(footerRef.current, {
      opacity: 0, y: 20, duration: 0.6, ease: 'power2.out',
      scrollTrigger: { trigger: footerRef.current, start: 'top 95%' },
    });
  }, { scope: footerRef });

  return (
    <footer ref={footerRef} className="bg-surface py-12 px-4 sm:px-8">
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
