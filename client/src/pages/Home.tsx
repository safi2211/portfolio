/**
 * Signal & Structure design: a recruiter-friendly report narrative with evidence-led content,
 * deep ink hero fields, warm report surfaces, and rare Signal Cyan data accents.
 */
import { useEffect, useState } from "react";
import {
  Activity,
  ArrowRight,
  Award,
  BarChart3,
  BookOpen,
  Braces,
  BriefcaseBusiness,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  CircleDotDashed,
  ClipboardCheck,
  Code2,
  Database,
  ExternalLink,
  FileSpreadsheet,
  Github,
  GraduationCap,
  LineChart,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  Network,
  Presentation,
  Table2,
  X,
} from "lucide-react";
import { toast } from "sonner";

const links = {
  linkedin: "https://www.linkedin.com/in/md-suffiullah-3b8652353",
  github: "https://github.com/safi2211",
  email: "mailto:suffiullah2233@gmail.com",
};

const navItems = [
  ["Home", "home"],
  ["About", "about"],
  ["Education", "education"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Experience", "experience"],
  ["Achievements", "achievements"],
  ["Contact", "contact"],
] as const;

const skillGroups = [
  {
    label: "Data Analysis",
    icon: BarChart3,
    skills: ["Microsoft Excel", "Data Cleaning", "Data Transformation", "Data Analysis", "Data Visualization"],
  },
  {
    label: "Business Intelligence",
    icon: Presentation,
    skills: ["Microsoft Power BI", "Power Query", "Dashboard Development", "KPI Analysis", "Interactive Reports"],
  },
  {
    label: "Programming & Database",
    icon: Braces,
    skills: ["SQL", "Python", "Pandas", "NumPy", "Matplotlib"],
  },
  {
    label: "Analytical Practice",
    icon: ClipboardCheck,
    skills: ["Statistics", "Analytical Thinking", "Problem Solving", "Business Intelligence", "Data Storytelling"],
  },
];

/**
 * PROJECT DATA
 */
const projects = [
  {
    number: "01",
    title: "Sales Performance Analysis Dashboard",
    description:
      "My First Power BI Dashboard 📊 Excited to share my first Power BI dashboard as I begin my journey into Data Analytics and Business Intelligence. In this project, I transformed sales data into interactive visualizations and explored performance across countries, regions, segments, and products.",
    tools: ["Power BI", "Excel", "DAX"],
    insight: "Combines regional trends, category breakdown, and profitability across customer segments into a unified interactive canvas.",
    cue: "REVENUE · REGION · MARGIN",
    image: "./Dashboard-demo.gif",
    githubUrl: "https://github.com/safi2211/power-bi-sales-dashboard",
    liveUrl: null,
  },
  {
    number: "02",
    title: "Customer & Sales Data Analysis",
    description:
      "A developing analysis practice focused on customer behavior, sales performance, product performance, and broader business trends.",
    tools: ["Excel", "Power BI", "SQL"],
    insight: "The published case study will focus on one practical pattern across customers, products, or sales.",
    cue: "SEGMENTS · PATTERNS · SALES",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/BCYRowZcFnqKtFoU.png",
    githubUrl: null,
    liveUrl: null,
  },
  {
    number: "03",
    title: "Business Data Analysis Project",
    description:
      "A developing Python workflow involving data cleaning, exploratory data analysis, visualization, and insight extraction.",
    tools: ["Python", "Pandas", "Matplotlib"],
    insight: "The final write-up will name the analytical question and the most useful observation from the dataset.",
    cue: "CLEAN · EXPLORE · EXPLAIN",
    image: "https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/ITuLfJgwlhKGmHiR.png",
    githubUrl: null,
    liveUrl: null,
  },
];

/** DEVELOPMENT RECORD */
const credentials = [
  ["Power BI dashboard practice", "Current learning focus", "In progress", "Hands-on work with dashboards, KPIs, and clear visual reporting—building toward a verified milestone."],
  ["SQL & data querying practice", "Current learning focus", "In progress", "Developing a reliable approach to retrieving, organizing, and interpreting structured data."],
  ["Python analysis practice", "Current learning focus", "In progress", "Strengthening the workflow from data preparation through exploratory analysis and visual explanation."],
] as const;

const toolbox = [
  ["Power BI", BarChart3],
  ["Microsoft Excel", FileSpreadsheet],
  ["SQL", Database],
  ["Python", Code2],
  ["Pandas", Table2],
  ["NumPy", Network],
  ["Matplotlib", LineChart],
  ["GitHub", Github],
] as const;

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

function SocialLinks({ light = false }: { light?: boolean }) {
  return (
    <div className={`social-links ${light ? "social-links--light" : ""}`} aria-label="Professional links">
      <a href={links.linkedin} target="_blank" rel="noreferrer" aria-label="Connect on LinkedIn"><Linkedin size={18} /></a>
      <a href={links.github} target="_blank" rel="noreferrer" aria-label="Visit GitHub"><Github size={18} /></a>
      <a href={links.email} aria-label="Send an email"><Mail size={18} /></a>
    </div>
  );
}

function SectionHeading({ number, eyebrow, title, text }: { number: string; eyebrow: string; title: string; text?: string }) {
  return (
    <div className="section-heading">
      <div className="section-heading__rail"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/tywVFcDXopNSwfLL.png" alt="" /><span>{number}</span><i /></div>
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2>{title}</h2>
        {text && <p className="section-intro">{text}</p>}
      </div>
    </div>
  );
}

function PlaceholderAction({ children }: { children: string }) {
  return (
    <button
      type="button"
      className="placeholder-action"
      onClick={() => toast.info("Case study in progress", { description: "This analytical brief will link to its GitHub repository or live dashboard once the published project is ready." })}
    >
      {children}<ExternalLink size={14} />
    </button>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navigate = (id: string) => {
    setMenuOpen(false);
    window.setTimeout(() => scrollTo(id), 30);
  };

  return (
    <div className="site-shell">
      <header className={`topbar ${scrolled ? "topbar--scrolled" : ""}`}>
        <button className="brand" type="button" onClick={() => navigate("home")} aria-label="Back to home">
          <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/tywVFcDXopNSwfLL.png" alt="MS data signal monogram" />
          <span><b>MD.</b> Suffiullah</span>
        </button>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}</button>)}
        </nav>
        <a className="topbar-cta" href={links.email}>Let&apos;s talk <ArrowRight size={15} /></a>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {navItems.map(([label, id]) => <button key={id} onClick={() => navigate(id)}>{label}<ChevronRight size={17} /></button>)}
        <div className="mobile-menu__social"><span>Find me on</span><SocialLinks /></div>
      </div>

      <main>
        <section className="hero" id="home">
          <img className="hero__visual" src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/PBnKiecyZrbyLgWF.png" alt="Abstract data signal visualization" />
          <div className="hero__shade" />
          <div className="hero__grid" />
          <div className="hero__content">
            <div className="hero__identity"><span className="hero__eyebrow"><CircleDotDashed size={14} /> Available for data analytics opportunities</span></div>
            <h1><span>MD.</span> Suffiullah</h1>
            <div className="hero__statement"><i /> <p>Turning data into insights,<br /><em>insights into decisions.</em></p></div>
            <p className="hero__copy">I am an MIS student at the University of Dhaka and an aspiring Data Analyst focused on data visualization, business intelligence, and turning complex information into clear, actionable insights.</p>
            <div className="hero__actions">
              <button className="button button--signal" onClick={() => navigate("projects")}>View my projects <ArrowRight size={17} /></button>
              <button className="button button--ghost" onClick={() => navigate("contact")}>Contact me</button>
            </div>
            <div className="hero__meta">
              <div className="hero__badges"><span>Power BI</span><span>Excel</span><span>SQL</span><span>Python</span><span>Data Visualization</span></div>
              <SocialLinks light />
            </div>
          </div>
          <div className="hero__dash" aria-hidden="true">
            <div className="hero__dash-top"><span>LIVE LEARNING SIGNAL</span><span className="pulse-dot" /></div>
            <div className="spark-chart"><svg viewBox="0 0 350 112" preserveAspectRatio="none"><path d="M0,89 C35,74 48,84 76,65 C104,46 113,67 141,50 C168,34 187,52 214,31 C244,8 268,33 290,20 C315,6 328,20 350,4" fill="none" stroke="currentColor" strokeWidth="2" /><path d="M0,89 C35,74 48,84 76,65 C104,46 113,67 141,50 C168,34 187,52 214,31 C244,8 268,33 290,20 C315,6 328,20 350,4 L350,112 L0,112 Z" fill="url(#fill)" opacity=".33" /><defs><linearGradient id="fill" x1="0" x2="0" y1="0" y2="1"><stop stopColor="currentColor" /><stop offset="1" stopColor="currentColor" stopOpacity="0" /></linearGradient></defs></svg></div>
            <div className="hero__dash-bottom"><span>Focused learning</span><strong>2026</strong></div>
          </div>
          <button className="hero__scroll" onClick={() => navigate("about")} aria-label="Scroll to About Me"><span>SCROLL TO EXPLORE</span><i /></button>
        </section>

        <section className="report-section about" id="about">
          <div className="report-layout">
            <SectionHeading number="01" eyebrow="Profile" title="About me" text="A structured path into data analytics—grounded in MIS study, practical tools, and an analytical mindset." />
            <div className="about__body">
              <div className="about__quote"><span>“</span><p>I am building the practice of asking better questions of data—then expressing the answer clearly enough to support a decision.</p></div>
              <div className="about__copy"><p>I am a Management Information Systems student at the <strong>University of Dhaka</strong>, developing a career in data analytics and business intelligence. I am especially interested in dashboard development, data visualization, and the way well-organized information can improve business decision-making.</p><p>As a fresher, I am developing my skills through coursework, practical projects, self-learning, and regular hands-on work with analytical tools. I value clarity, curiosity, and a willingness to investigate before making assumptions.</p></div>
              <dl className="profile-grid">
                <div><dt>Role</dt><dd>Aspiring Data Analyst</dd></div><div><dt>Education</dt><dd>Management Information Systems</dd></div>
                <div><dt>University</dt><dd>University of Dhaka</dd></div><div><dt>Location</dt><dd>Bangladesh</dd></div>
                <div><dt>Focus</dt><dd>Analytics & Business Intelligence</dd></div><div><dt>Experience</dt><dd>Stock & Inventory Operations</dd></div>
              </dl>
            </div>
          </div>
        </section>

        <section className="report-section education-section" id="education">
          <div className="report-layout">
            <SectionHeading number="02" eyebrow="Academic base" title="Education" text="The academic context behind my technical and business perspective." />
            <div className="education-card">
              <div className="education-card__stamp"><GraduationCap size={27} /><span>DU</span></div>
              <div className="education-card__content"><p className="card-label">University of Dhaka</p><h3>Bachelor&apos;s Degree in Management Information Systems <span>(MIS)</span></h3><div className="education-card__details"><span><CalendarDays size={15} /> Currently studying</span><span><MapPin size={15} /> Bangladesh</span></div></div>
              <div className="focus-areas"><p>Focus areas</p><div>{["Management Information Systems", "Data Analytics", "Business Intelligence", "Database Management", "Information Technology", "Business & Management"].map((area) => <span key={area}>{area}</span>)}</div></div>
            </div>
          </div>
        </section>

        {/* SECTION 03: PROJECTS */}
        <section className="report-section projects-section" id="projects">
          <div className="report-layout" style={{ display: "block" }}>
            <SectionHeading number="03" eyebrow="Selected work" title="Featured projects" text="Turning real-world datasets into meaningful insights. Each brief tracks a developing analytical practice and will grow into a published case study with a repository or live dashboard." />
            <div className="projects-list" style={{ marginTop: "32px", display: "flex", flexDirection: "column", gap: "40px" }}>
              {projects.map((project) => (
                <article className="project-card" key={project.number} style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", width: "100%", gap: "0" }}>
                  <div className="project-card__image" style={{ flex: "1.6", minWidth: "320px", minHeight: "380px" }}>
                    <img src={project.image} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "contain", backgroundColor: "#0b1329" }} />
                    <div className="project-card__number">{project.number}</div>
                    <div className="project-card__data-overlay"><span>{project.cue}</span><i /><span>MS SIGNAL BRIEF</span></div>
                    <span className="project-card__status">DEVELOPING CASE STUDY</span>
                  </div>
                  <div className="project-card__content" style={{ flex: "1", minWidth: "280px", padding: "28px" }}>
                    <div className="project-card__label">Project {project.number}<ArrowRight size={15} /></div>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                    <div className="project-card__tools">{project.tools.map((tool) => <span key={tool}>{tool}</span>)}</div>
                    <div className="project-card__insight"><span>CURRENT ANALYTICAL ANGLE</span><p>{project.insight}</p></div>
                    <div className="project-card__actions">
                      {project.githubUrl ? (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="placeholder-action"
                          style={{ textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "6px" }}
                        >
                          GitHub repository <ExternalLink size={14} />
                        </a>
                      ) : (
                        <PlaceholderAction>GitHub repository</PlaceholderAction>
                      )}
                      <PlaceholderAction>{project.number === "03" ? "Project brief" : "Dashboard brief"}</PlaceholderAction>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SECTION 04: SKILLS */}
        <section className="report-section skills-section" id="skills">
          <div className="report-layout">
            <SectionHeading number="04" eyebrow="Capabilities" title="Skills that support the analysis" text="Tools and habits I am actively applying and strengthening; no inflated proficiency scores, just a clear view of my current toolkit." />
            <div className="skills-grid">{skillGroups.map(({ label, icon: Icon, skills }, index) => <article className="skill-card" key={label} style={{ "--order": index } as React.CSSProperties}><div className="skill-card__head"><span className="skill-card__icon"><Icon size={19} /></span><span>{label}</span></div><ul>{skills.map((skill) => <li key={skill}><CheckCircle2 size={14} />{skill}</li>)}</ul></article>)}</div>
          </div>
        </section>

        {/* SECTION 05: EXPERIENCE */}
        <section className="report-section experience-section" id="experience">
          <div className="report-layout">
            <SectionHeading number="05" eyebrow="Applied learning" title="Experience" text="Practical operational work and continuous analytical skill building." />
            <div className="experience-track">
              <div className="experience-track__line" />
              
              <article className="experience-card experience-card--current">
                <div className="experience-card__marker"><BriefcaseBusiness size={17} /></div>
                <div className="experience-card__top">
                  <span>MARCH 2019 – JUNE 2020</span>
                  <span>HAZIPARA, CHATTAGRAM</span>
                </div>
                <p className="card-label">M.H Enterprise (A Distributor of PepsiCo Ltd)</p>
                <h3>Stock In-charge</h3>
                <p>Managed inventory operations and product distribution tracking for a major beverage distributor.</p>
                <ul style={{ margin: "12px 0", paddingLeft: "18px", color: "rgba(255, 255, 255, 0.8)", fontSize: "0.95rem" }}>
                  <li>Maintained accurate inventory levels and stock records.</li>
                  <li>Managed order processing and fulfillment lists efficiently.</li>
                  <li>Handled discount claim reconciliation and operational reporting.</li>
                </ul>
                <div className="experience-card__skills">
                  <span>Excel</span>
                  <span>PowerPoint</span>
                  <span>Basic Accounting</span>
                </div>
              </article>

              <article className="experience-template">
                <div className="experience-card__marker"><Activity size={17} /></div>
                <div>
                  <p className="card-label">Add an experience when available</p>
                  <h3>Future internship, academic, freelance, volunteer, or part-time role</h3>
                  <p>This structured card is ready for a role, organization, location, dates, description, responsibilities, skills used, and results—without changing the surrounding design.</p>
                </div>
                <div className="template-fields">
                  <span>Position / Role</span>
                  <span>Organization</span>
                  <span>Date range</span>
                  <span>Key result</span>
                </div>
              </article>
            </div>
          </div>
        </section>

        <section className="toolbox-section" aria-labelledby="toolbox-heading">
          <div className="toolbox-section__inner"><div><p className="eyebrow">Technology stack</p><h2 id="toolbox-heading">My analytics<br /><em>toolbox.</em></h2></div><div className="toolbox-grid">{toolbox.map(([name, Icon]) => <div className="toolbox-item" key={name}><Icon size={23} /><span>{name}</span></div>)}</div></div>
        </section>

        <section className="report-section process-section" id="process">
          <div className="report-layout">
            <SectionHeading number="06" eyebrow="Working method" title="My data analytics process" text="A practical sequence for moving from raw information to a meaningful business conversation." />
            <div className="process-flow">{[["01", "Collect", "Gather relevant data from available sources."], ["02", "Clean", "Remove errors, duplicates, missing values, and inconsistencies."], ["03", "Analyze", "Explore the data and identify trends and patterns."], ["04", "Visualize", "Create dashboards and visualizations to communicate insights."], ["05", "Insights", "Turn analytical findings into meaningful business insights."]].map(([number, title, text], index) => <article key={number} className="process-step"><div className="process-step__top"><span>{number}</span>{index < 4 && <i />}</div><h3>{title}</h3><p>{text}</p></article>)}</div>
          </div>
        </section>

        <section className="report-section credentials-section" id="achievements">
          <div className="report-layout">
            <SectionHeading number="07" eyebrow="Development record" title="Achievements & certifications" text="A considered record of active learning now, reserved for verified certificates, academic results, competitions, and professional milestones as they are earned." />
            <div className="credentials-grid">{credentials.map(([name, provider, year, text], index) => <article className="credential-card" key={`${name}-${index}`}><div className="credential-card__top"><Award size={20} /><span>{String(index + 1).padStart(2, "0")}</span></div><p className="card-label">{provider} · {year}</p><h3>{name}</h3><p>{text}</p><button type="button" onClick={() => toast.info("Development record", { description: "This learning focus will be replaced by a verified certificate or achievement link when the milestone is earned." })}>Roadmap note <ExternalLink size={14} /></button></article>)}</div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="contact-section__inner"><div className="contact-section__lead"><p className="eyebrow eyebrow--light">Open to conversation</p><h2>Let&apos;s connect<br />around <em>data.</em></h2><p>I&apos;m always interested in learning, collaborating, and connecting with people in the data and technology community.</p></div><div className="contact-links"><a href={links.linkedin} target="_blank" rel="noreferrer"><span><Linkedin size={19} /> LinkedIn</span><strong>Connect on LinkedIn</strong><ArrowRight size={18} /></a><a href={links.github} target="_blank" rel="noreferrer"><span><Github size={19} /> GitHub</span><strong>Visit my GitHub</strong><ArrowRight size={18} /></a><a href={links.email}><span><Mail size={19} /> Email</span><strong>suffiullah2233@gmail.com</strong><ArrowRight size={18} /></a></div></div>
        </section>
      </main>

      <footer className="footer"><div className="footer__identity"><img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663908287859/tywVFcDXopNSwfLL.png" alt="" /><div><strong>MD. Suffiullah</strong><span>Aspiring Data Analyst · MIS Student at University of Dhaka</span></div></div><SocialLinks /><p>© 2026 MD. Suffiullah. All Rights Reserved.</p></footer>
    </div>
  );
}
