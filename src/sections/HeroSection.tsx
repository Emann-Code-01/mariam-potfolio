export default function HeroSection() {
  return (
    <div className="relative mt-8 md:mt-32 flex flex-col items-center gap-6 justify-center mx-6 md:mx-0">

      {/* ── Mobile layout ─────────────────────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center md:hidden space-y-8 text-center">
        {/* Portrait */}
        <div className="relative">
          <div
            className="rounded-full p-0.75 inline-block"
            style={{
              background: 'linear-gradient(160deg, var(--surface-subtle) 0%, var(--highlight) 100%)',
              boxShadow: '0 0 48px rgba(201, 107, 90, 0.25)',
            }}
          >
            <div className="bg-surface rounded-full p-0.5 inline-block">
              <img
                src="/mariam.png"
                alt="Mariam Bhadmus portrait"
                className="object-cover w-52 aspect-square block rounded-full"
              />
            </div>
          </div>
        </div>

        {/* Text */}
        <div className="flex flex-col space-y-3 max-w-xs">
          <p
            className="text-eyebrow"
            style={{ letterSpacing: '0.14em' }}
          >
            Hey there, I'm
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 14vw, 5rem)',
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: '-0.025em',
              color: 'var(--primary)',
            }}
          >
            Mariam{' '}
            <span
              style={{
                fontStyle: 'italic',
                color: 'var(--highlight)',
              }}
            >
              Bhadmus
            </span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lead)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'var(--muted)',
              marginTop: '0.5rem',
            }}
          >
            A analyst that turns raw data
            <br />
            into insights that{' '}
            <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontSize: '1.35rem' }}>
              drive decisions.
            </em>
          </p>
        </div>
      </div>

      {/* ── Desktop layout ─────────────────────────────────────────────────── */}
      <div className="hidden md:flex items-center gap-16 lg:gap-24">
        {/* Text block */}
        <div className="flex flex-col space-y-5 max-w-xl">
          <p className="text-eyebrow">
            Hey there, I'm
          </p>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-hero)',
              fontWeight: 600,
              lineHeight: 1.0,
              letterSpacing: '-0.03em',
              color: 'var(--primary)',
            }}
          >
            Mariam
            <br />
            <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>
              Bhadmus
            </span>
          </h1>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lead)',
              fontWeight: 400,
              lineHeight: 1.6,
              color: 'var(--muted)',
              maxWidth: '34ch',
              marginTop: '0.5rem',
            }}
          >
            A data analyst who helps organisations find clarity in complexity —
            turning raw numbers into{' '}
            <em
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.4rem',
                fontStyle: 'italic',
                color: 'var(--primary)',
                fontWeight: 500,
              }}
            >
              meaningful decisions.
            </em>
          </p>
        </div>

        {/* Portrait with Badge */}
        <div className="relative shrink-0 pr-6">
          <div
            className="rounded-full p-0.75 inline-block"
            style={{
              background: 'linear-gradient(160deg, var(--surface-subtle) 0%, var(--highlight) 100%)',
              boxShadow: '0 0 80px rgba(201, 107, 90, 0.2), 0 0 24px rgba(201, 107, 90, 0.12)',
            }}
          >
            <div className="bg-surface rounded-full p-1 inline-block">
              <img
                src="/mariam.png"
                alt="Mariam Bhadmus portrait"
                className="object-cover w-80 lg:w-92 aspect-square block rounded-full"
              />
            </div>
          </div>

          {/* Hand-crafted floating badge */}
          <div 
            className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-6 w-28 h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center p-4 border border-surface-subtle bg-background/80 backdrop-blur-md rotate-12 group hover:rotate-0 transition-transform duration-500 shadow-xl"
            style={{ borderStyle: 'dashed' }}
          >
            <p className="text-center text-[10px] lg:text-[13px] font-bold leading-tight tracking-[0.2em] font-body text-highlight uppercase">
              Insights <br />
              <span className="text-[18px] lg:text-[24px] font-display italic font-semibold text-primary lowercase tracking-tight">driven</span>
              <br />
              by data
            </p>
          </div>

          {/* Decorative ring */}
          <div
            className="absolute -inset-4 rounded-full pointer-events-none"
            style={{
              border: '1px solid var(--surface-subtle)',
              opacity: 0.5
            }}
          />
        </div>
      </div>
    </div>
  );
}