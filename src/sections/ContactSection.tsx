import { FaLinkedin, FaWhatsapp, FaMedium, FaGithub, FaEnvelope } from 'react-icons/fa6';

const CONTACT_METHODS = [
  {
    title: 'LinkedIn',
    label: 'Connect Professionally',
    href: 'https://www.linkedin.com/in/bhadmus-mariam-6b7250277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
    icon: <FaLinkedin />,
    color: '#0077B5'
  },
  {
    title: 'GitHub',
    label: 'View My Codebase',
    href: 'https://github.com/bhadmusmariam-ds',
    icon: <FaGithub />,
    color: '#333'
  },
  {
    title: 'Medium',
    label: 'Read My Articles',
    href: 'https://medium.com/@bhadmusmariam590',
    icon: <FaMedium />,
    color: '#000'
  },
  {
    title: 'WhatsApp',
    label: 'Quick Chat',
    href: 'https://wa.me/2347045982641',
    icon: <FaWhatsapp />,
    color: '#25D366'
  },
  {
    title: 'Gmail',
    label: 'Send an Email',
    href: 'mailto:bhadmusmariam590@gmail.com',
    icon: <FaEnvelope />,
    color: '#D44638'
  }
];

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative mt-24 md:mt-48 mx-6 md:mx-0 py-20 pb-32"
      aria-labelledby="contact-heading"
    >
      <div
        className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
        style={{ letterSpacing: '0.6em' }}
      >
        <span className="w-12 h-px bg-faint" />
        <span>Connect / 04</span>
      </div>

      <div className="divider-dashed mb-12 opacity-50" />
      <p className="text-eyebrow mb-4">Availability</p>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-end">
        <div className="lg:col-span-7">
          <h2
            id="contact-heading"
            className="mb-8"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'var(--text-display)',
              fontWeight: 500,
              lineHeight: 1.15,
              letterSpacing: '-0.025em',
              color: 'var(--primary)',
            }}
          >
            Let's build something{' '}
            <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>Together</span>
          </h2>
          <p className="text-xl md:text-2xl text-muted font-body leading-relaxed max-w-2xl">
            I'm currently looking for new opportunities and collaborations. Whether you have a project in mind or just want to say hi, my inbox is always open.
          </p>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-4">
          <a
            href="mailto:bhadmusmariam590@gmail.com"
            className="group relative inline-flex items-center justify-center gap-4 px-8 py-5 bg-highlight text-primary rounded-full overflow-hidden transition-transform duration-500 hover:scale-105 active:scale-95"
          >
            <span className="relative z-10 font-bold tracking-widest uppercase text-sm">Start a Conversation</span>
            <FaEnvelope className="relative z-10 text-xl group-hover:rotate-12 transition-transform duration-500" />
            <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
          </a>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mt-20">
        {CONTACT_METHODS.map((method, idx) => (
          <a
            key={idx}
            href={method.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex flex-col gap-6 p-8 rounded-3xl border border-surface-subtle bg-surface/30 backdrop-blur-sm transition-all duration-500 hover:border-highlight/30 hover:-translate-y-2 overflow-hidden"
          >
            <div
              className="absolute -right-4 -bottom-4 w-24 h-24 rounded-full blur-3xl opacity-0 group-hover:opacity-20 transition-opacity duration-700"
              style={{ backgroundColor: 'var(--highlight)' }}
            />

            <div className="flex items-center justify-between">
              <div className="w-12 h-12 rounded-2xl bg-surface flex items-center justify-center text-highlight text-2xl transition-transform duration-500 group-hover:scale-110 group-hover:bg-highlight group-hover:text-primary">
                {method.icon}
              </div>
              <span className="text-[10px] font-bold tracking-widest text-faint uppercase group-hover:text-highlight transition-colors">Connect</span>
            </div>

            <div>
              <h3 className="text-lg font-bold text-primary mb-1 font-display tracking-wide">{method.title}</h3>
              <p className="text-xs text-muted font-medium font-body leading-snug">{method.label}</p>
            </div>

            <div className="absolute top-8 right-8 translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300">
              <span className="text-highlight">→</span>
            </div>
          </a>
        ))}
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 opacity-40">
        <div className="flex flex-col gap-2">
          <p className="text-xs font-bold tracking-widest uppercase">© 2024 Mariam Bhadmus — Portfolio</p>
          <p className="text-[10px] font-bold tracking-[0.2em] uppercase opacity-60">Handcrafted by <span className="text-highlight">@EmannCode</span></p>
        </div>
        <div className="flex items-center gap-10">
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Data Analyst</span>
          <span className="text-[10px] font-bold tracking-[0.4em] uppercase">Market Researcher</span>
        </div>
      </div>
    </section>
  );
}
