import {
  SiPython,
  SiPostgresql,
  SiGooglesheets,
  SiLooker,
  SiGooglebigquery
} from "react-icons/si";
import {
  FaFileExcel,
  FaFileCode,
  FaChartPie
} from "react-icons/fa6";

const GROUPS = [
  {
    title: 'Programming\nLanguages',
    items: [
      { name: 'SQL', icon: <SiPostgresql /> },
      { name: 'Python', icon: <SiPython /> },
    ]
  },
  {
    title: 'Data Analytic\nTools',
    items: [
      { name: 'Microsoft Excel', icon: <FaFileExcel /> },
      { name: 'Google Sheets', icon: <SiGooglesheets /> },
      { name: 'Google BigQuery', icon: <SiGooglebigquery /> },
      { name: 'Visual Code Studio', icon: <FaFileCode /> },
    ]
  },
  {
    title: 'Data Visualization\nTools',
    items: [
      { name: 'Tableau', icon: <FaChartPie /> },
      { name: 'Looker Studio', icon: <SiLooker /> },
    ]
  },
];

const METHODS = [
  'EDA',
  'Segmentation / Clustering',
  'Cohort',
  'Linear Regression',
  'Logistic Regression',
  'Statistic',
  'A/B Testing',
  'ANOVA',
  '(Post-Hoc) T-Test'
];

export default function SkillsSection() {
  return (
    <section
      id="skills-section"
      className="relative mt-16 md:mt-32 mx-6 md:mx-0"
      aria-labelledby="skills-heading"
    >
      {/* Decorative Grid Detail (Marginalia) - Matching AboutSection */}
      <div
        className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
        style={{ letterSpacing: '0.6em' }}
      >
        <span className="w-12 h-px bg-faint" />
        <span>Technical Stack / 02</span>
      </div>

      {/* Section Divider with custom dashed style */}
      <div className="divider-dashed mb-12" />

      {/* Eyebrow Label - Matching AboutSection */}
      <p className="text-eyebrow mb-4">Technical Proficiency</p>

      {/* Section Heading - Matching AboutSection */}
      <h2
        className="mb-16 md:mb-24"
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'var(--text-display)',
          fontWeight: 500,
          lineHeight: 1.15,
          letterSpacing: '-0.025em',
          color: 'var(--primary)',
        }}
      >
        Tools of the{' '}
        <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>Trade</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-16 lg:gap-y-0 relative">
        {/* Background Gradient Detail */}
        <div className="absolute inset-0 bg-linear-to-b from-white/2 to-transparent pointer-events-none -m-8 rounded-[3rem]" />

        {GROUPS.map((group, idx) => (
          <div key={idx} className="flex flex-col gap-10 lg:px-10 first:pl-0 last:pr-0 lg:not-last:border-r border-white/5">
            <h3 className="text-xl md:text-2xl font-bold leading-tight text-highlight whitespace-pre-line tracking-tight font-display">
              {group.title}
            </h3>

            <div className="flex flex-col gap-8">
              {group.items.map((skill, i) => (
                <div key={i} className="flex items-center gap-5 group">
                  <div className="shrink-0 w-11 h-11 md:w-12 md:h-12 rounded-full border border-highlight-dim bg-surface flex items-center justify-center text-highlight text-xl md:text-2xl transition-all duration-500 group-hover:scale-110 group-hover:bg-highlight group-hover:text-primary">
                    {skill.icon}
                  </div>
                  <span className="font-semibold text-sm md:text-base text-primary/80 group-hover:text-primary transition-colors duration-300 font-body tracking-wider uppercase">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Methods Column */}
        <div className="flex flex-col gap-10 lg:px-10 border-white/5">
          <h3 className="text-xl md:text-2xl font-bold leading-tight text-highlight whitespace-pre-line tracking-tight font-display">
            Data Analytic {'\n'} Methods
          </h3>
          <ul className="flex flex-col gap-4 list-none p-0 m-0">
            {METHODS.map((method, i) => (
              <li key={i} className="flex items-start gap-4 text-sm md:text-base text-muted font-medium font-body leading-tight group hover:text-primary transition-colors duration-300">
                <span className="text-highlight mt-1.5 opacity-50 group-hover:opacity-100 transition-opacity">•</span>
                <span className="tracking-wide">{method}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}