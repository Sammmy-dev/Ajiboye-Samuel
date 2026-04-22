import StarBullet from './StarBullet';

export default function Footer() {
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
