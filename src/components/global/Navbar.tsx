import BubbleMenu from "../ui/BubbleMenu"
import PillNav from '../ui/PillNav';

const HIGHLIGHT = '#C96B5A';
const SURFACE = '#17171A';
const PRIMARY = '#F5F0E8';
const SURFACE_SUB = '#1E1E22';

const BG = SURFACE_SUB;
const PILL_BG = SURFACE;
const PILL_TEXT = PRIMARY;
const HOVER_TEXT = PRIMARY;

const items = [
  {
    label: 'home',
    href: '#home',
    ariaLabel: 'Home',
    rotation: -6,
    hoverStyles: { bgColor: HIGHLIGHT, textColor: PRIMARY }
  },
  {
    label: 'about',
    href: '#about',
    ariaLabel: 'About',
    rotation: 6,
    hoverStyles: { bgColor: '#7C8B78', textColor: PRIMARY }
  },
  {
    label: 'projects',
    href: '#projects',
    ariaLabel: 'Projects',
    rotation: 6,
    hoverStyles: { bgColor: '#6B7FA6', textColor: PRIMARY }
  },
  {
    label: 'skills',
    href: '#skills',
    ariaLabel: 'Skills',
    rotation: 6,
    hoverStyles: { bgColor: '#A67C52', textColor: PRIMARY }
  },
  {
    label: 'contact',
    href: '#contact',
    ariaLabel: 'Contact',
    rotation: -6,
    hoverStyles: { bgColor: HIGHLIGHT, textColor: PRIMARY }
  },
];

export default function Navbar() {
  return (
    <div className="sticky top-3 z-1001">
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

      <PillNav
        logo='/mariam.png'
        logoAlt="Mariam Bhadmus"
        items={items}
        activeHref="#home"
        className="md:flex hidden items-center justify-center gap-6"
        ease="power2.easeOut"
        baseColor={BG}
        pillColor={PILL_BG}
        hoveredPillTextColor={HOVER_TEXT}
        pillTextColor={PILL_TEXT}
        initialLoadAnimation
      />
    </div>
  );
}