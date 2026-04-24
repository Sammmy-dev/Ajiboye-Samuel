import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function Contact() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: '30min' });
      cal('ui', {
        cssVarsPerTheme: {
          light: {
            'cal-brand': '#F1F27C',
          },
          dark: {
            'cal-brand': '#F1F27C',
          },
        },
        hideEventTypeDetails: false,
        layout: 'month_view',
      });
    })();
  }, []);

  return (
    <section id="contact" className="bg-olive py-32 px-8">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        <div>
          <h2
            className="text-on-surface leading-tight"
            style={{
              fontFamily: "var(--font-display)",
              fontStyle: "italic",
              fontWeight: 400,
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              letterSpacing: "-0.02em",
            }}
          >
            Let's build&nbsp;
            <br />
            <span className="text-primary">something</span>
            <br />
            &nbsp;great.
          </h2>
          <p
            className="text-on-surface-variant mt-6 leading-relaxed text-base"
            style={{ fontFamily: "var(--font-body)" }}
          >
            Whether you have a role, a project, or just an idea — I'd love to
            hear it. My inbox is always open.
          </p>

          <div className="mt-12 flex flex-col gap-4">
            {[
              {
                label: "Email",
                value: "ajiboyeadebayo901@gmail.com",
                href: "mailto:ajiboyeadebayo901@gmail.com",
              },
              {
                label: "GitHub",
                value: "github.com/Sammmy-dev",
                href: "https://github.com/Sammmy-dev",
              },
              {
                label: "LinkedIn",
                value: "linkedin.com/in/ajiboye-samuel-adebayo",
                href: "https://www.linkedin.com/in/ajiboye-samuel-adebayo",
              },
              {
                label: "Twitter / X",
                value: "x.com/Ajiboye_sat",
                href: "https://x.com/Ajiboye_sat",
              },
            ].map(({ label, value, href }) => (
              <div key={label} className="flex items-center gap-6">
                <span
                  className="text-on-surface-variant/60 text-xs tracking-widest uppercase w-24 flex-shrink-0"
                  style={{ fontFamily: "var(--font-label)" }}
                >
                  {label}
                </span>
                <a
                  href={href}
                  className="text-on-surface text-sm hover:text-primary transition-colors duration-200 wrap-anywhere"
                  style={{
                    fontFamily: "var(--font-body)",
                    textDecoration: "none",
                    borderBottom: "1px solid rgba(248,246,241,0.15)",
                    paddingBottom: 2,
                  }}
                >
                  {value}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-surface-low p-8 md:p-10 border border-on-surface-variant/10">
          <div className="flex flex-col h-full">
            <h3
              className="text-on-surface mb-4"
              style={{
                fontFamily: "var(--font-display)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(2rem, 4vw, 3rem)",
                letterSpacing: "-0.02em",
              }}
            >
              Schedule a strategy call.
            </h3>

            <p
              className="text-on-surface-variant leading-relaxed text-base mb-8"
              style={{ fontFamily: "var(--font-body)" }}
            >
              Pick a time that works for you and we can talk through your
              product, timeline, and the best path to launch.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              {[
                "30-minute intro call",
                "Product and scope review",
                "Timezone-friendly scheduling",
                "Follow-up notes after the call",
              ].map((item) => (
                <div
                  key={item}
                  className="border border-on-surface-variant/12 px-4 py-4 text-sm text-on-surface"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-auto">
              <button
                type="button"
                data-cal-namespace="30min"
                data-cal-link="ajiboye-samuel/30min"
                data-cal-config='{"layout":"month_view","useSlotsViewOnSmallScreen":"true","theme":"auto"}'
                className="inline-flex items-center gap-3 text-primary text-sm tracking-widest uppercase font-semibold hover:text-on-surface transition-colors duration-200"
                style={{ fontFamily: 'var(--font-label)' }}
              >
                Book a call
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
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
