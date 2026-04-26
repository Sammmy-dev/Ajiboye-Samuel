import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  const links = ['About', 'Projects', 'Contact'];
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 50) {
        setIsNavVisible(true);
      } else if (currentScrollY > lastScrollY) {
        setIsNavVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsNavVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-transform px-4 sm:px-8 duration-300"
      style={{
        backgroundColor: "rgba(20,19,19,0.72)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(248,246,241,0.06)",
        transform: isNavVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav className="max-w-screen-xl mx-auto min-h-16 flex items-center justify-between relative">
        <Link
          to="/"
          className="text-whitetext-sm tracking-widest uppercase hover:text-primary transition-colors duration-200"
          style={{
            fontFamily: "var(--font-label)",
            fontWeight: 100,
            fontStyle: "",
            letterSpacing: "0.0em",
          }}
        >
          Ajiboye Samuel.
        </Link>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center w-10 h-10 text-on-surface hover:text-primary transition-colors duration-200"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav-menu"
          aria-label={
            isMenuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            aria-hidden="true"
          >
            {isMenuOpen ? (
              <path
                d="M5 5L15 15M15 5L5 15"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 5H17M3 10H17M3 15H17"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>

        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l}>
              <a
                href={`#${l.toLowerCase()}`}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-xs tracking-widest uppercase"
                style={{
                  fontFamily: "var(--font-label)",
                  letterSpacing: "0.14em",
                }}
              >
                {l}
              </a>
            </li>
          ))}
        </ul>

        <div
          id="mobile-nav-menu"
          className={`md:hidden absolute top-full left-0 right-0 bg-surface/95 backdrop-blur-xl border-b border-on-surface-variant/15 transition-all duration-200 overflow-hidden ${isMenuOpen ? "max-h-80 opacity-100 py-4" : "max-h-0 opacity-0 py-0 pointer-events-none"}`}
          aria-hidden={!isMenuOpen}
        >
          <ul className="px-4 sm:px-8 flex flex-col gap-4">
            {links.map((l) => (
              <li key={l}>
                <a
                  href={`#${l.toLowerCase()}`}
                  className="block text-on-surface-variant hover:text-primary transition-colors duration-200 text-sm tracking-widest uppercase py-2"
                  style={{
                    fontFamily: "var(--font-label)",
                    letterSpacing: "0.14em",
                  }}
                  onClick={closeMenu}
                >
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
