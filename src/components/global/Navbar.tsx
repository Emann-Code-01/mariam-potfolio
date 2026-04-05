import BubbleMenu from "../ui/BubbleMenu"
import PillNav from '../ui/PillNav';

// Palette tokens (keeping in sync with CSS variables)
const HIGHLIGHT   = '#C96B5A';   // terracotta accent
const SURFACE     = '#17171A';   // dark surface  (pill bg on desktop)
const PRIMARY     = '#F5F0E8';   // warm ivory    (text / pill text)
const SURFACE_SUB = '#1E1E22';   // slightly lifted (nav track)

const BG = SURFACE_SUB;          // nav bar background
const PILL_BG = SURFACE;         // each pill
const PILL_TEXT = PRIMARY;       // resting pill label
const HOVER_TEXT = PRIMARY;      // label colour when circle fills

const items = [
  {
    label: 'home',
    href: '#',
    ariaLabel: 'Home',
    rotation: -6,
    hoverStyles: { bgColor: HIGHLIGHT, textColor: PRIMARY }
  },
  {
    label: 'about',
    href: '#',
    ariaLabel: 'About',
    rotation: 6,
    hoverStyles: { bgColor: '#7C8B78', textColor: PRIMARY }  // muted sage
  },
  {
    label: 'projects',
    href: '#',
    ariaLabel: 'Projects',
    rotation: 6,
    hoverStyles: { bgColor: '#6B7FA6', textColor: PRIMARY }  // muted slate-blue
  },
  {
    label: 'blog',
    href: '#',
    ariaLabel: 'Blog',
    rotation: 6,
    hoverStyles: { bgColor: '#A67C52', textColor: PRIMARY }  // warm amber-brown
  },
  {
    label: 'contact',
    href: '#',
    ariaLabel: 'Contact',
    rotation: -6,
    hoverStyles: { bgColor: HIGHLIGHT, textColor: PRIMARY }
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-0 z-1001">
      {/* ── Mobile: BubbleMenu ─────────────────────────────────────────────── */}
      <BubbleMenu
        className="md:hidden flex items-center justify-between"
        logo={
          <span
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontWeight: 700,
              fontStyle: 'italic',
              fontSize: '1.1rem',
              color: PRIMARY,
              letterSpacing: '0.01em',
            }}
          >
            MB
          </span>
        }
        items={items}
        menuAriaLabel="Toggle navigation"
        menuBg={SURFACE}
        menuContentColor={PRIMARY}
        animationEase="back.out(1.5)"
        animationDuration={0.5}
        staggerDelay={0.1}
      />

      {/* ── Desktop: PillNav ──────────────────────────────────────────────── */}
      <PillNav
        logo='/mariam.png'
        logoAlt="Mariam Bhadmus"
        items={[
          { label: 'Home',    href: '/' },
          { label: 'About',   href: '/about' },
          { label: 'Projects', href: '/projects' },
          { label: 'Contact', href: '/contact' },
        ]}
        activeHref="/"
        className="md:flex hidden items-center justify-center gap-6"
        ease="power2.easeOut"
        baseColor={BG}
        pillColor={PILL_BG}
        hoveredPillTextColor={HOVER_TEXT}
        pillTextColor={PILL_TEXT}
        initialLoadAnimation
      />
    </div>
  )
}