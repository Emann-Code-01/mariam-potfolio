import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -5 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 1.2,
        ease: [0.21, 0.47, 0.32, 0.98],
      },
    },
  };

  return (
    <motion.div
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="relative mt-8 md:mt-32 flex flex-col items-center gap-6 justify-center mx-6 md:mx-0"
    >
      {/* Designer Signature Watermark */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: 20 },
          visible: { opacity: 0.2, x: 0 },
        }}
        className="hidden lg:block absolute -right-12 top-0 pointer-events-none select-none overflow-hidden h-full"
      >
        <span className="text-[9px] font-bold tracking-[1em] text-faint uppercase vertical-text">
          Handcrafted by @EmannCode — 2024
        </span>
      </motion.div>

      {/* Decorative Grid Detail (Marginalia) */}
      <motion.div
        variants={{
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 },
        }}
        className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
        style={{ letterSpacing: '0.6em' }}
      >
        <span className="w-12 h-px bg-faint" />
        <span>Welcome / 00</span>
      </motion.div>

      {/* ── Mobile layout ─────────────────────────────────────────────────── */}
      <div className="flex flex-col justify-center items-center md:hidden space-y-8 text-center">
        {/* Portrait with Badge */}
        <motion.div variants={imageVariants} className="relative">
          <div
            className="rounded-full p-0.75 inline-block"
            style={{
              background: 'linear-gradient(160deg, var(--surface-subtle) 0%, var(--highlight) 100%)',
              boxShadow: '0 0 48px rgba(201, 107, 90, 0.25)',
            }}
          >
            <div className="bg-surface rounded-full p-0.5 inline-block">
              <img
                src="mariam.png"
                alt="Mariam Bhadmus portrait"
                className="object-cover w-52 aspect-square block rounded-full"
              />
            </div>
          </div>

          {/* Smaller mobile badge */}
          <motion.div
            initial={{ scale: 0, rotate: -30 }}
            animate={{ scale: 1, rotate: -12 }}
            transition={{ delay: 1, duration: 0.6, type: "spring" }}
            className="absolute -right-3 -bottom-3 w-20 h-20 rounded-full flex items-center justify-center p-2 border border-surface-subtle bg-background/80 backdrop-blur-md -rotate-12"
            style={{ borderStyle: 'dashed' }}
          >
            <p className="text-center text-[7px] font-bold leading-tight tracking-[0.2em] font-body text-highlight uppercase">
              Insights <br />
              <span className="text-[12px] font-display italic font-semibold text-primary lowercase tracking-tight">driven</span>
              <br />
              by data
            </p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div className="flex flex-col space-y-3 max-w-xs">
          <motion.p
            variants={itemVariants}
            className="text-eyebrow"
            style={{ letterSpacing: '0.14em' }}
          >
            Hey there, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
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
          </motion.h1>
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'var(--text-lead)',
              fontWeight: 400,
              lineHeight: 1.5,
              color: 'var(--muted)',
              marginTop: '0.5rem',
            }}
          >
            An analyst that turns raw data
            <br />
            into insights that{' '}
            <em style={{ color: 'var(--primary)', fontStyle: 'italic', fontFamily: 'var(--font-display)', fontSize: '1.35rem' }}>
              drive decisions.
            </em>
          </motion.p>
        </div>
      </div>

      {/* ── Desktop layout ─────────────────────────────────────────────────── */}
      <div className="hidden md:flex items-center gap-16 lg:gap-24">
        {/* Text block */}
        <div className="flex flex-col space-y-5 max-w-xl">
          <motion.p variants={itemVariants} className="text-eyebrow">
            Hey there, I'm
          </motion.p>
          <motion.h1
            variants={itemVariants}
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
          </motion.h1>
          <motion.p
            variants={itemVariants}
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
          </motion.p>
        </div>

        {/* Portrait with Badge */}
        <motion.div variants={imageVariants} className="relative shrink-0 pr-6">
          <div
            className="rounded-full p-0.75 inline-block"
            style={{
              background: 'linear-gradient(160deg, var(--surface-subtle) 0%, var(--highlight) 100%)',
              boxShadow: '0 0 80px rgba(201, 107, 90, 0.2), 0 0 24px rgba(201, 107, 90, 0.12)',
            }}
          >
            <div className="bg-surface rounded-full p-1 inline-block">
              <img
                src="mariam.png"
                alt="Mariam Bhadmus portrait"
                className="object-cover w-80 lg:w-92 aspect-square block rounded-full"
              />
            </div>
          </div>

          {/* Hand-crafted floating badge */}
          <motion.div
            initial={{ scale: 0, rotate: 30 }}
            animate={{ scale: 1, rotate: 12 }}
            transition={{ delay: 1.2, duration: 0.6, type: "spring" }}
            whileHover={{ scale: 1.05, rotate: 0 }}
            className="absolute -right-4 -bottom-4 lg:-right-8 lg:-bottom-6 w-28 h-28 lg:w-36 lg:h-36 rounded-full flex items-center justify-center p-4 border border-surface-subtle bg-background/80 backdrop-blur-md rotate-12 transition-transform duration-500 shadow-xl"
            style={{ borderStyle: 'dashed' }}
          >
            <p className="text-center text-[10px] lg:text-[13px] font-bold leading-tight tracking-[0.2em] font-body text-highlight uppercase">
              Insights <br />
              <span className="text-[18px] lg:text-[24px] font-display italic font-semibold text-primary lowercase tracking-tight">driven</span>
              <br />
              by data
            </p>
          </motion.div>

          {/* Decorative ring */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 0.5, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="absolute -inset-4 rounded-full pointer-events-none"
            style={{
              border: '1px solid var(--surface-subtle)',
            }}
          />
        </motion.div>
      </div>
    </motion.div>
  );
}