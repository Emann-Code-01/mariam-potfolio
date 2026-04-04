
export default function AboutSection() {
  return (
    <section
      className="relative mt-16 md:mt-32 mx-6 md:mx-0"
      aria-labelledby="about-heading"
    >
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
            customer behaviour, and data trends relevant to Nigeria. I believe
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
        </div>
      </div>
    </section>
  );
}
