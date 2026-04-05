import { FaTag, FaCircleCheck, FaChartLine } from 'react-icons/fa6';
import carImage from '../assets/img/first-project.png';
import furnitureImage from '../assets/img/second-project.png';
import customerImage from '../assets/img/third-project.png';
import healthImage from '../assets/img/forth-project.png';

interface Project {
  id: string;
  title: string;
  banner: string;
  overview: string;
  points: string[];
  metrics: { label: string; value: string }[];
}

const PROJECTS: Project[] = [
  {
    id: '01',
    title: 'Nigerian Car Market Analysis Dashboard',
    banner: carImage,
    overview: 'This data analytics project transforms raw vehicle listing data from Car45.com into clear, actionable market insights. It helps car buyers, dealers, and researchers understand the Nigerian automotive landscape at a glance.',
    points: [
      'Toyota dominates as Nigeria\'s most popular car brand by a significant margin',
      '94% of Nigerian drivers prefer automatic transmission over manual',
      'Black and White are the most preferred car colors nationally',
      'Detailed filters by Brand New, Foreign Used, or Nigerian Used vehicles'
    ],
    metrics: [
      { label: 'Avg Price', value: '₦4.0M' },
      { label: 'Mileage', value: '28.6K km' },
      { label: 'Power', value: '209 HP' },
      { label: 'Engine', value: '3.1K cc' },
    ]
  },
  {
    id: '02',
    title: 'Furniture Sales Overview Dashboard',
    banner: furnitureImage,
    overview: 'The Furniture Sales Overview Dashboard is a data analytics project summarizing sales performance, shipping trends, and regional distribution across the United States. It gives businesses and stakeholders a clear picture of how furniture sales are performing broken down by customer segment, product category, shipping behavior, and geography.',
    points: [
      'Chairs are the highest-selling category at $328.4K, followed by Tables ($207K), Bookcases ($114.9K), and Furnishings ($91.7K)',
      'December is the peak sales month at $121,818 — with a clear upward sales trend in the second half of the year',
      '59% of orders ship via Standard Class, with 28% of orders delivered within 4 days',
      'New York City leads regional sales at $75.7K, followed by Los Angeles and Philadelphia'
    ],
    metrics: [
      { label: 'Total Sales', value: '$742K' },
      { label: 'Profit', value: '$18.5K' },
      { label: 'Quantity', value: '8K units' },
      { label: 'Growth', value: '+11% YOY' },
    ]
  },
  {
    id: '03',
    title: 'Customer Demographics Dashboard',
    banner: customerImage,
    overview: 'The "Who Are Our Customers?" dashboard is a data analytics project built for Sending, designed to help the business understand its customer base through demographic profiling and tenure analysis—uncovering who their customers truly are across generations, professions, and worth segments.',
    points: [
      '40% of customers are Loyal, the largest segment, followed by Emerging, Legacy, and New customers',
      'Professional profile shows that Doctors and Teachers make up the largest customer professions',
      'Customer Growth Timeline (2015–2025) reveals a notable growth peak followed by a decline toward 2025',
      'Comprehensive representation across Boomers, Gen X, Gen Z, and Millennials by gender'
    ],
    metrics: [
      { label: 'Customers', value: '500' },
      { label: 'Avg Age', value: '46' },
      { label: 'Avg Income', value: '$114.4K' },
      { label: 'Avg Tenure', value: '5 Years' },
    ]
  },
  {
    id: '04',
    title: 'Viro Health Medical Center — Re-admission Analysis',
    banner: healthImage,
    overview: 'The Viro Health Medical Center Dashboard focuses on understanding patient re-admission patterns through a root cause analysis of post-discharge trends. It helps identify which departments, diagnoses, and demographics carry the highest re-admission risk.',
    points: [
      'Medication department carries the highest re-admission risk (over 35%), followed by Physiotherapy and Surgery',
      '41% of re-admissions involve Female patients, revealing a specific gender-skewed pattern',
      'The 48–57 age group has the highest re-admission concentration across both genders',
      'General Care leads re-admission by diagnosis, followed by Heart Disease and Asthma'
    ],
    metrics: [
      { label: 'Records', value: '1,000' },
      { label: 'Billing', value: '$6.05M' },
      { label: 'Re-admission', value: '30.1%' },
      { label: 'Stay', value: '5 Days' },
    ]
  }
];

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative mt-24 md:mt-48 mx-6 md:mx-0 py-20"
      aria-labelledby="projects-heading"
    >
      <div
        className="hidden xl:flex absolute -left-20 top-24 transform -rotate-90 origin-bottom-left items-center gap-4 text-xs font-bold tracking-[0.4em] text-faint uppercase"
        style={{ letterSpacing: '0.6em' }}
      >
        <span className="w-12 h-px bg-faint" />
        <span>Case Studies / 03</span>
      </div>

      <div className="divider-dashed mb-12 opacity-50" />
      <p className="text-eyebrow mb-4">Curated Work</p>
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
        Selected <span style={{ fontStyle: 'italic', color: 'var(--highlight)' }}>Projects</span>
      </h2>

      <div className="flex flex-col gap-32">
        {PROJECTS.map((project, idx) => (
          <div
            key={project.id}
            className="group flex flex-col gap-12 lg:gap-20 transition-opacity duration-700"
          >
            <div className="relative overflow-hidden rounded-[2.5rem] border border-surface-subtle bg-surface shadow-2xl group-hover:border-highlight/30 transition-colors duration-500">
              <img
                src={project.banner}
                alt={project.title}
                className="w-full h-75 md:h-125 object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-linear-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />

              <div className="absolute top-8 left-8 flex items-center gap-3">
                <span className="bg-highlight text-primary text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-2">
                  <FaTag className="w-2.5 h-2.5" /> {project.id}
                </span>
                <span className="bg-surface/80 backdrop-blur-md border border-white/10 text-primary/80 text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest group-hover:bg-highlight group-hover:text-primary transition-colors duration-300">
                  Case Study
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col gap-8">
                <h3 className="text-3xl md:text-5xl font-semibold leading-tight font-display text-primary tracking-tight">
                  <span className="text-highlight font-display opacity-40 mr-4 italic text-2xl md:text-4xl">{project.id}.</span>
                  {project.title}
                </h3>
                <p className="text-lg md:text-xl text-muted leading-relaxed font-body">
                  {project.overview}
                </p>

                <div className="grid grid-cols-2 gap-4 mt-4">
                  {project.metrics.map((m, i) => (
                    <div key={i} className="p-4 rounded-2xl bg-surface/40 border border-white/5 group-hover:border-highlight/10 transition-colors duration-300">
                      <p className="text-xs uppercase tracking-widest text-faint font-bold mb-1">{m.label}</p>
                      <p className="text-lg font-bold text-primary font-display">{m.value}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                  <h4 className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-highlight">
                    <FaChartLine /> Essential Insights
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
                    {project.points.map((p, i) => (
                      <li key={i} className="flex items-start gap-4 text-primary/80 font-body leading-snug lg:text-lg">
                        <FaCircleCheck className="shrink-0 mt-1.5 text-highlight text-sm opacity-50" />
                        <span>{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4">
                  <span className="inline-flex items-center gap-4 text-sm font-bold uppercase tracking-widest text-primary/20 group-hover:text-highlight transition-colors duration-500 cursor-default select-none">
                    <span className="w-12 h-px bg-white/10 group-hover:bg-highlight/50 transition-colors duration-500" />
                    Interactive Dashboard Available on Request
                  </span>
                </div>
              </div>
            </div>

            {idx < PROJECTS.length - 1 && (
              <div className="divider-dashed opacity-20 mt-12" />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
