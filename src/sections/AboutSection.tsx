import React from 'react';
import { FaLinkedin, FaWhatsapp, FaRegFileLines } from "react-icons/fa6";
import { GiMailbox } from "react-icons/gi";

const SOCIAL_LINKS = [
  {
    title: 'Linkedin',
    href: 'https://www.linkedin.com/in/bhadmus-mariam-6b7250277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    logo: <FaLinkedin />,
  },
  {
    title: 'Whatsapp',
    href: 'https://wa.me/2347045982641',
    logo: <FaWhatsapp />,
  },
  {
    title: 'Gmail',
    href: 'mailto:bhadmusmariam590@gmail.com',
    logo: <GiMailbox />,
  },
]

export default function AboutSection() {
  return (
    <section
      className="relative mt-16 md:mt-32 mx-6 md:mx-0"
      aria-labelledby="about-section"
    >
      {/* Decorative Grid Detail (Marginalia) */}
      <div
        className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
        style={{ letterSpacing: '0.6em' }}
      >
        <span className="w-12 h-px bg-faint" />
        <span>Portfolio 2024 / 01</span>
      </div>

      {/* Section divider */}
      <div className="divider mb-12" />

      {/* Eyebrow label */}
      <p className="text-eyebrow mb-4">Get to know me</p>

      {/* Section heading */}
      <h2
        id="about-heading"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-display)',
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: 'var(--primary)',
          marginBottom: '2.5rem',
        }}
      >
        About{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>Me</span>
      </h2>

      {/* Content grid */}
      <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* Pull quote */}
        <div className="md:w-80 shrink-0">
          <blockquote
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-title)',
              fontWeight: 400,
              fontStyle: 'italic',
              lineHeight: 1.3,
              color: 'var(--primary)',
            }}
          >
            Hello,
            <br />
            I'm{' '}
            <span style={{ color: 'var(--highlight)', fontWeight: 600 }}>
              Mariam!
            </span>
          </blockquote>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-2 mt-8">
            {['SQL', 'Python', 'Power BI', 'Tableau', 'Excel'].map(skill => (
              <span
                key={skill}
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'var(--text-xs)',
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: 'var(--highlight)',
                  background: 'var(--highlight-dim)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '999px',
                  border: '1px solid rgba(201,107,90,0.25)',
                }}
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Bio text */}
        <div className="flex-1 max-w-2xl">
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.8,
              color: 'var(--muted)',
            }}
          >
            A Data Analyst passionate about turning raw data into meaningful
            insights that drive better decisions. Proficient in SQL, Python,
            Power BI, Tableau, PowerPoint, Google Sheets, Microsoft Excel, and
            Statistics for comprehensive data analysis and visualization.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.8,
              color: 'var(--muted)',
              marginTop: '1.25rem',
            }}
          >
            Comfortable with end-to-end data analysis, data processing,
            dashboard and daily reporting creation, and presenting actionable
            insights with effective communication and engaging story-telling
            skills.
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-body)',
              lineHeight: 1.8,
              color: 'var(--muted)',
              marginTop: '1.25rem',
            }}
          >
            My projects focus on real-world problems — business performance,
            customer behaviour, and data trends across diverse datasets. I believe
            that{' '}
            <em
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.15rem',
                fontStyle: 'italic',
                color: 'var(--primary)',
              }}
            >
              data is not just numbers — it tells a story
            </em>{' '}
            that can influence strategy and growth.
          </p>
          {/* Links and Actions */}
          <div className="flex flex-wrap items-center gap-6 mt-12">
            {/* Social Circle Icons */}
            <div className="flex items-center gap-4">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative flex items-center justify-center w-12 h-12 rounded-full border border-surface-subtle bg-surface transition-all duration-500 hover:border-highlight hover:bg-highlight-dim hover:-translate-y-1"
                  aria-label={item.title}
                >
                  <span className="text-muted group-hover:text-highlight transition-colors duration-300">
                    {React.isValidElement(item.logo)
                      ? React.cloneElement(item.logo as React.ReactElement<{ size?: number }>, { size: 20 })
                      : item.logo}
                  </span>
                </a>
              ))}
            </div>

            {/* Visual Divider on Desktop */}
            <div className="hidden sm:block h-8 w-px bg-surface-subtle mx-2" />

            {/* Direct Actions */}
            <div className="flex flex-wrap items-center gap-8">
              <a
                href="#projects"
                className="group relative inline-block text-sm font-semibold tracking-widest uppercase text-muted hover:text-primary transition-colors duration-300"
              >
                View Projects
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-highlight transition-all duration-300 group-hover:w-full" />
              </a>

              <a
                href="https://drive.google.com/file/d/1-oJD9nn3_I7LUtYqrV7lfpL051uLKTJD/view?usp=drivesdk"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 px-8 py-3 rounded-full border border-highlight bg-highlight-dim text-highlight hover:bg-highlight hover:text-primary transition-all duration-500 shadow-[0_0_25px_rgba(201,107,90,0.1)] hover:shadow-[0_0_35px_rgba(201,107,90,0.25)]"
              >
                <FaRegFileLines className="w-4 h-4 transition-transform group-hover:scale-110" />
                <span className="text-sm font-bold tracking-wide">View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
