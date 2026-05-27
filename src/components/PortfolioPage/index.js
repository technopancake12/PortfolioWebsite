import React, { useState, useEffect, useRef, useCallback } from 'react';
import './index.scss';

import screenshot1 from '../../assets/images/screenshot1.png';
import screenshot2 from '../../assets/images/screenshot2.png';
import financeGif from '../../assets/images/financeGIF.gif';

// ---------- Data ----------
const PROJECTS = [
  {
    id: '01',
    name: 'Genius Hub',
    role: 'Lead Engineer · Full-stack',
    year: '2025',
    tags: ['Flask', 'AWS DynamoDB', 'AWS S3', 'App Runner', 'Unity'],
    status: 'In Review',
    statusColor: '#e08a3c',
    color: 'linear-gradient(135deg, #1a1a2e, #16213e 55%, #0f3460)',
    blurb: 'Internal platform letting Hidden Genius students deploy and showcase Unity games.',
    description:
      'A full-stack platform I built end-to-end — Flask backend on AWS App Runner, DynamoDB for metadata, S3 for game builds. Students upload Unity WebGL projects through a guided flow and get a shareable link, instructor review queue included. Fully shipped and running; awaiting org legal review before public launch.',
    youtubeId: null,
    github: null,
  },
  {
    id: '02',
    name: 'YE Maps',
    role: 'Full-stack · React + AWS',
    year: '2024',
    tags: ['React', 'TypeScript', 'AWS', 'Node.js'],
    status: 'In Development',
    statusColor: '#3d8bfd',
    color: 'linear-gradient(135deg, #0f2027, #203a43 55%, #2c5364)',
    blurb: 'Tooling for youth educators to find open positions and track program impact.',
    description:
      'React + TypeScript front end with an AWS-backed Node service. Two views: educator-facing search for open teaching positions, and a staff dashboard tracking educator hours, sites covered, and skills delivered across the program. Replaces a spreadsheet that was the single source of truth for ~30 people.',
    youtubeId: null,
    github: null,
  },
  {
    id: '03',
    name: 'Tailor Made',
    role: 'Capstone · iOS Lead',
    year: '2024',
    tags: ['Swift', 'Firebase', 'iOS', 'Xcode', 'Cloud Storage'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #2d1b3d, #4a2c5e 55%, #6b3d8a)',
    blurb: 'Social e-commerce for fashion. Senior capstone shipped with a team of four.',
    description:
      'An iOS app for fashion enthusiasts to share, buy, and sell clothing — think Depop crossed with a feed. Senior capstone with a four-person team; I led iOS architecture and Firebase integration (auth, Firestore, cloud storage). Demo on YouTube below.',
    youtubeId: 'dwGcGqwuPfo',
    github: 'https://github.com/technopancake12',
  },
  {
    id: '04',
    name: 'Bonus Tracker',
    role: 'Solo · Desktop Tool',
    year: '2023',
    tags: ['Python', 'Tkinter', 'Firestore', 'openpyxl'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #1a2e1a, #16453e 55%, #0f6048)',
    blurb: 'Multi-cohort scoring app used to run logistics for 150+ HGP students.',
    description:
      'Python + Tkinter desktop app with a Firestore backend for tracking student bonuses and deductions across multiple cohorts, locations, and seasons. Login/signup, role-aware views, and exports to .txt and .xlsx. Built solo to replace a fragile spreadsheet workflow.',
    youtubeId: 'I9sJmIZxLg0',
    github: 'https://github.com/technopancake12',
  },
  {
    id: '05',
    name: 'Truck Track',
    role: 'Team · Web',
    year: '2023',
    tags: ['React', 'JavaScript', 'Cloud', 'Agile'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #1a0533, #2d0a4e 55%, #4a0e7a)',
    blurb: 'Discover and locate food trucks near you — built mobile-first.',
    description:
      'React web app for finding food trucks in your area, with cloud data retrieval and a mobile-first UX. Built in agile sprints with a small team — my focus was the map view and the truck detail surface.',
    youtubeId: null,
    github: 'https://github.com/technopancake12',
  },
];

const DESIGNS = [
  {
    id: 'D1',
    name: 'Subscription App',
    role: 'UI/UX Designer',
    year: '2024',
    tags: ['Figma', 'Multi-page', 'Dynamic', 'Prototype'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #1a0533, #3a1060 55%, #5b1a8a)',
    blurb: '13-page dynamic prototype for managing and discovering streaming subscriptions.',
    description:
      'A 13-page dynamic prototype for managing, discovering, and organizing streaming subscriptions. Tracks current shows, suggests new content, and surfaces subscription costs in one centralized view. Designed with a focus on clarity and minimal tap depth.',
    image: screenshot1,
    figmaUrl: null,
  },
  {
    id: 'D2',
    name: 'Real Estate Landing Page',
    role: 'UI/UX Designer',
    year: '2024',
    tags: ['Figma', 'Single Page', 'Static', 'Web'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #0a2a1a, #1a4a2a 55%, #2a6a3a)',
    blurb: 'Clean, high-conversion landing page for a real estate agency.',
    description:
      'A clean, high-conversion static landing page for a real estate agency. Emphasizes property listings, agent credibility, and a simple inquiry flow with a modern property-showcase layout. Designed to maximize trust signals above the fold.',
    image: screenshot2,
    figmaUrl: null,
  },
  {
    id: 'D3',
    name: 'Finance Dashboard',
    role: 'UI/UX Designer',
    year: '2024',
    tags: ['Figma', 'Dashboard', 'Dark Mode', 'Data Viz'],
    status: 'Completed',
    statusColor: '#d6b14a',
    color: 'linear-gradient(135deg, #0a0a2a, #1a1a4a 55%, #2a2a6a)',
    blurb: 'Multi-view personal finance dashboard with dark-mode-first UI.',
    description:
      'A multi-view personal finance dashboard designed in Figma with dark-mode-first UI. Features spending analytics, budget tracking, and portfolio overview in a clean, scannable layout. Animated transitions connect states across the full prototype flow.',
    image: financeGif,
    figmaUrl: null,
  },
];

const SKILLS = [
  { cat: 'Frontend', items: ['React', 'TypeScript', 'JavaScript', 'HTML5', 'SCSS'] },
  { cat: 'Backend', items: ['Python', 'Flask', 'Django', 'Node.js', 'Java', 'C++'] },
  { cat: 'Mobile', items: ['Swift', 'iOS', 'Xcode', 'Firebase'] },
  { cat: 'Cloud + Data', items: ['AWS DynamoDB', 'AWS S3', 'App Runner', 'SQL', 'Firestore'] },
  { cat: 'Design', items: ['Figma', 'InVision Studio', 'Unity', 'Prototyping'] },
];

const EXPERIENCE = [
  {
    date: '2024 — Now',
    role: 'Innovation Educator I',
    org: 'The Hidden Genius Project · Oakland, CA',
    blurb:
      'Design transformative learning experiences in tech, entrepreneurship, and personal development for young Black males. 75+ hours of original curriculum, 150+ students reached. Lead full-stack on internal tools (Genius Hub, YE Maps).',
    active: true,
  },
  {
    date: 'May 2024',
    role: 'B.E. Computer Science',
    org: 'California State University, Long Beach',
    blurb:
      'Capstone: Tailor Made — iOS social e-commerce platform shipped with a four-person team.',
    active: false,
  },
  {
    date: 'Ongoing',
    role: 'Freelance · Full-stack & UI/UX',
    org: 'Independent',
    blurb:
      'Open to product, mission-driven, and design-forward orgs. Especially love work at the intersection of tech and education.',
    active: false,
  },
];

// ---------- Hooks ----------
function useReveal(threshold = 0.12) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('in');
          obs.disconnect();
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return ref;
}

function useScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const scrolled = el.scrollTop || document.body.scrollTop;
      const total = el.scrollHeight - el.clientHeight;
      setProgress(total > 0 ? scrolled / total : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return progress;
}

// ---------- Reveal wrapper ----------
function Reveal({ as: Tag = 'div', className = '', stagger = false, children, ...rest }) {
  const ref = useReveal();
  const cls = [stagger ? 'reveal-stagger' : 'reveal', className].filter(Boolean).join(' ');
  return (
    <Tag ref={ref} className={cls} {...rest}>
      {children}
    </Tag>
  );
}

// ---------- HeroTitle ----------
function HeroTitle() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const words = [
    { text: 'Ian', italic: false },
    { text: 'Bundy-Weiss', italic: false },
    { text: '—', italic: false },
    { text: 'engineer', italic: true },
    { text: '&', italic: false },
    { text: 'educator.', italic: true },
  ];

  return (
    <h1 className="hero-title">
      {words.map((w, i) => (
        <span
          key={i}
          className="word"
          style={{
            display: 'inline-block',
            verticalAlign: 'bottom',
            marginRight: '0.18em',
          }}
        >
          <span
            style={{
              display: 'inline-block',
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(60%)',
              transition: `opacity 0.9s cubic-bezier(0.2,0.7,0.2,1) ${i * 0.08}s, transform 0.9s cubic-bezier(0.2,0.7,0.2,1) ${i * 0.08}s`,
              fontStyle: w.italic ? 'italic' : 'normal',
              color: w.italic ? 'var(--accent)' : 'inherit',
            }}
          >
            {w.text}
          </span>
        </span>
      ))}
    </h1>
  );
}

// ---------- Nav ----------
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-brand">
        <span className="dot" />
        <span>Ian Bundy-Weiss</span>
        <span className="nav-brand-sub">/ SWE + Educator</span>
      </a>
      <div className="nav-links">
        <a href="#about">About</a>
        <a href="#work">Work</a>
        <a href="#designs">Designs</a>
        <a href="#skills">Skills</a>
        <a href="#experience">Experience</a>
      </div>
      <a href="#contact" className="nav-cta">Get in touch</a>
    </nav>
  );
}

// ---------- HeroAccent ----------
function HeroAccent() {
  return (
    <div className="hero-accent" aria-hidden="true">
      <div className="ring" />
      <div className="ring2" />
      <div className="label">Available · 2026</div>
    </div>
  );
}

// ---------- Hero ----------
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid">
        <div className="hero-meta reveal in">
          <div>Based<b>Los Angeles, CA</b></div>
          <div>Currently<b>The Hidden Genius Project</b></div>
          <div>Role<b>Innovation Educator I</b></div>
          <div>Open to<b>Full-stack · Freelance</b></div>
        </div>
        <HeroTitle />
        <div className="hero-sub">
          <p className="hero-tagline">
            Full-stack software engineer & innovation educator. I ship product at the
            intersection of <em>technology, design,</em> and <em>social impact</em>.
          </p>
          <div className="hero-scroll">
            <span>Scroll</span>
            <span className="scroll-arrow" />
          </div>
        </div>
      </div>
      <HeroAccent />
    </section>
  );
}

// ---------- Marquee ----------
function MarqueeStrip() {
  const words = ['Full-Stack', '·', 'UI/UX', '·', 'Educator', '·', 'React', '·', 'Python', '·', 'AWS', '·', 'Swift', '·', 'Unity', '·'];
  const renderWords = (prefix) =>
    words.map((w, i) => (
      <span
        key={`${prefix}${i}`}
        style={{
          fontStyle: w !== '·' ? 'italic' : 'normal',
          color: w === '·' ? 'var(--accent)' : 'inherit',
        }}
      >
        {w}
      </span>
    ));
  return (
    <div className="marquee">
      <div className="marquee-track" aria-hidden="true">
        <span>{renderWords('a')}</span>
        <span>{renderWords('b')}</span>
      </div>
    </div>
  );
}

// ---------- About ----------
function About() {
  return (
    <section id="about">
      <div className="wrap">
        <div className="about">
          <div className="about-side">
            <Reveal className="eyebrow">01 · About</Reveal>
          </div>
          <div className="about-prose">
            <Reveal>
              <p>
                I build <em>practical, beautiful</em> software — full-stack apps,
                internal tools, and learning experiences for the next generation of engineers.
              </p>
            </Reveal>
            <Reveal>
              <p className="muted">
                CSULB grad. Currently designing curriculum and shipping product for The Hidden
                Genius Project in Oakland, where I lead engineering on Genius Hub and YE Maps —
                tools that extend our reach across 150+ students and the staff who teach them.
              </p>
            </Reveal>
          </div>
        </div>
        <Reveal stagger className="about-stats">
          <div>
            <div className="stat-num">150+</div>
            <div className="stat-label">Students taught across four tech tracks</div>
          </div>
          <div>
            <div className="stat-num">75h</div>
            <div className="stat-label">Of original curriculum designed & delivered</div>
          </div>
          <div>
            <div className="stat-num">2</div>
            <div className="stat-label">Production tools shipped at the org</div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- YouTube Facade ----------
function YouTubeFacade({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  const [thumbError, setThumbError] = useState(false);
  const thumbUrl = thumbError
    ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`
    : `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;

  if (playing) {
    return (
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ width: '100%', height: '100%', border: 0, display: 'block' }}
      />
    );
  }

  return (
    <div
      className="yt-facade"
      onClick={(e) => { e.stopPropagation(); setPlaying(true); }}
    >
      <img
        src={thumbUrl}
        alt={title}
        className="yt-thumb"
        onError={() => !thumbError && setThumbError(true)}
      />
      <div className="yt-play" aria-label="Play video">
        <svg viewBox="0 0 68 48" width="68" height="48">
          <path d="M66.52 7.74c-.78-2.93-2.49-5.41-5.42-6.19C55.79.13 34 0 34 0S12.21.13 6.9 1.55c-2.93.78-4.63 3.26-5.42 6.19C0 13.05 0 24 0 24s0 10.95 1.48 16.26c.78 2.93 2.49 5.41 5.42 6.19C12.21 47.87 34 48 34 48s21.79-.13 27.1-1.55c2.93-.78 4.64-3.26 5.42-6.19C68 34.95 68 24 68 24s0-10.95-1.48-16.26z" fill="#ff0000"/>
          <path d="M45 24 27 14v20" fill="#fff"/>
        </svg>
      </div>
    </div>
  );
}

// ---------- ProjectRow ----------
function ProjectRow({ p, expanded, onToggle }) {
  const innerRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    setMaxH(expanded ? innerRef.current.scrollHeight : 0);
  }, [expanded]);

  return (
    <div className={`project-row ${expanded ? 'expanded' : ''}`} onClick={onToggle}>
      <div className="project-row-top">
        <div className="project-num">{p.id}</div>
        <div className="project-name">
          <span className="pn-inner">{p.name}</span>
        </div>
        <div className="project-tags">
          {p.tags.slice(0, 3).map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <div className="project-status">
          <span className="dot" style={{ background: p.statusColor }} />
          {p.status}
        </div>
        <div className="project-toggle" aria-hidden="true">
          <span className="t-v" />
          <span className="t-h" />
        </div>
      </div>
      <div
        className="project-expand"
        style={{ height: `${maxH}px`, overflow: 'hidden', transition: 'height 0.55s cubic-bezier(0.2,0.7,0.2,1)' }}
        aria-hidden={!expanded}
      >
        <div
          className="project-expand-inner"
          ref={innerRef}
          style={{
            opacity: expanded ? 1 : 0,
            transition: 'opacity 0.45s cubic-bezier(0.2,0.7,0.2,1) 0.12s',
          }}
        >
          <div className="pe-media" style={{ background: p.color }}>
            {p.youtubeId ? (
              <YouTubeFacade videoId={p.youtubeId} title={p.name} />
            ) : (
              <div className="pe-media-placeholder">
                <div className="pe-media-meta">{p.id} / {p.year}</div>
                <div className="pe-media-name">{p.name}</div>
                <div className="pe-media-foot">No demo video — see description</div>
              </div>
            )}
          </div>
          <div className="pe-body">
            <div className="pe-row">
              <div className="pe-row-label">Role</div>
              <div className="pe-row-value">{p.role}</div>
            </div>
            <div className="pe-row">
              <div className="pe-row-label">Year</div>
              <div className="pe-row-value">{p.year}</div>
            </div>
            <div className="pe-description">{p.description}</div>
            <div className="pe-tags">
              {p.tags.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="pe-links">
              {p.github ? (
                <a href={p.github} target="_blank" rel="noreferrer" className="pe-link" onClick={(e) => e.stopPropagation()}>
                  <span>GitHub</span><span className="arrow-mini">↗</span>
                </a>
              ) : (
                <span className="pe-link disabled">Private Repo</span>
              )}
              {p.youtubeId && (
                <a href={`https://www.youtube.com/watch?v=${p.youtubeId}`} target="_blank" rel="noreferrer" className="pe-link" onClick={(e) => e.stopPropagation()}>
                  <span>Watch Demo</span><span className="arrow-mini">↗</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- Work ----------
function Work() {
  const [expandedId, setExpandedId] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: -300, y: -300 });

  return (
    <section id="work">
      <div className="wrap">
        <div className="work-head">
          <div>
            <Reveal className="eyebrow">02 · Selected Work</Reveal>
            <Reveal as="h2" className="section-title">
              Things I've <em>shipped</em>.
            </Reveal>
          </div>
          <Reveal className="work-count">{String(PROJECTS.length).padStart(2, '0')} projects · 2023—2026</Reveal>
        </div>
        <Reveal
          className="project-list"
          onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHovered(null)}
        >
          {PROJECTS.map((p) => (
            <div key={p.id} onMouseEnter={() => setHovered(expandedId === null ? p.id : null)}>
              <ProjectRow
                p={p}
                expanded={expandedId === p.id}
                onToggle={() => setExpandedId((cur) => (cur === p.id ? null : p.id))}
              />
            </div>
          ))}
        </Reveal>
        {hovered && expandedId === null && (
          <div
            className="project-preview show"
            style={{
              left: mouse.x,
              top: mouse.y,
              background: PROJECTS.find((p) => p.id === hovered)?.color,
            }}
          >
            <div className="project-preview-inner">
              <div>
                <div className="preview-meta">{hovered} / {PROJECTS.find((p) => p.id === hovered)?.year}</div>
                {PROJECTS.find((p) => p.id === hovered)?.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- DesignRow ----------
function DesignRow({ d, expanded, onToggle }) {
  const innerRef = useRef(null);
  const [maxH, setMaxH] = useState(0);

  useEffect(() => {
    if (!innerRef.current) return;
    setMaxH(expanded ? innerRef.current.scrollHeight : 0);
  }, [expanded]);

  return (
    <div className={`project-row ${expanded ? 'expanded' : ''}`} onClick={onToggle}>
      <div className="project-row-top">
        <div className="project-num">{d.id}</div>
        <div className="project-name">
          <span className="pn-inner">{d.name}</span>
        </div>
        <div className="project-tags">
          {d.tags.slice(0, 3).map((t, i) => <span key={i}>{t}</span>)}
        </div>
        <div className="project-status">
          <span className="dot" style={{ background: d.statusColor }} />
          {d.status}
        </div>
        <div className="project-toggle" aria-hidden="true">
          <span className="t-v" />
          <span className="t-h" />
        </div>
      </div>
      <div
        className="project-expand"
        style={{ height: `${maxH}px`, overflow: 'hidden', transition: 'height 0.55s cubic-bezier(0.2,0.7,0.2,1)' }}
        aria-hidden={!expanded}
      >
        <div
          className="project-expand-inner"
          ref={innerRef}
          style={{
            opacity: expanded ? 1 : 0,
            transition: 'opacity 0.45s cubic-bezier(0.2,0.7,0.2,1) 0.12s',
          }}
        >
          <div className="pe-media design-media-panel" style={{ background: d.color }}>
            {d.image ? (
              <img src={d.image} alt={d.name} className="design-preview-img" />
            ) : (
              <div className="pe-media-placeholder">
                <div className="pe-media-meta">{d.id} / {d.year}</div>
                <div className="pe-media-name">{d.name}</div>
                <div className="pe-media-foot">Figma prototype</div>
              </div>
            )}
          </div>
          <div className="pe-body">
            <div className="pe-row">
              <div className="pe-row-label">Role</div>
              <div className="pe-row-value">{d.role}</div>
            </div>
            <div className="pe-row">
              <div className="pe-row-label">Year</div>
              <div className="pe-row-value">{d.year}</div>
            </div>
            <div className="pe-description">{d.description}</div>
            <div className="pe-tags">
              {d.tags.map((t, i) => <span key={i}>{t}</span>)}
            </div>
            <div className="pe-links">
              {d.figmaUrl ? (
                <a href={d.figmaUrl} target="_blank" rel="noreferrer" className="pe-link" onClick={(e) => e.stopPropagation()}>
                  <span>View in Figma</span><span className="arrow-mini">↗</span>
                </a>
              ) : (
                <span className="pe-link disabled">Figma — On request</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ---------- DesignsSection ----------
function DesignsSection() {
  const [expandedId, setExpandedId] = useState(null);
  const [hovered, setHovered] = useState(null);
  const [mouse, setMouse] = useState({ x: -300, y: -300 });

  return (
    <section id="designs" className="designs-section">
      <div className="wrap">
        <div className="work-head">
          <div>
            <Reveal className="eyebrow">03 · Design Work</Reveal>
            <Reveal as="h2" className="section-title">
              Things I've <em>crafted</em>.
            </Reveal>
          </div>
          <Reveal className="work-count">{String(DESIGNS.length).padStart(2, '0')} designs · 2024</Reveal>
        </div>
        <Reveal
          className="project-list"
          onMouseMove={(e) => setMouse({ x: e.clientX, y: e.clientY })}
          onMouseLeave={() => setHovered(null)}
        >
          {DESIGNS.map((d) => (
            <div key={d.id} onMouseEnter={() => setHovered(expandedId === null ? d.id : null)}>
              <DesignRow
                d={d}
                expanded={expandedId === d.id}
                onToggle={() => setExpandedId((cur) => (cur === d.id ? null : d.id))}
              />
            </div>
          ))}
        </Reveal>
        {hovered && expandedId === null && (
          <div
            className="project-preview show"
            style={{
              left: mouse.x,
              top: mouse.y,
              background: DESIGNS.find((d) => d.id === hovered)?.color,
            }}
          >
            <div className="project-preview-inner">
              <div>
                <div className="preview-meta">{hovered} / {DESIGNS.find((d) => d.id === hovered)?.year}</div>
                {DESIGNS.find((d) => d.id === hovered)?.name}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

// ---------- Skills ----------
function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="wrap">
        <Reveal className="eyebrow">04 · Stack</Reveal>
        <Reveal as="h2" className="section-title">Tools of the <em>trade</em>.</Reveal>
        <Reveal stagger className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill-cat" key={s.cat}>
              <h4>{s.cat}</h4>
              <ul>
                {s.items.map((it) => <li key={it}>{it}</li>)}
              </ul>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Experience ----------
function Experience() {
  return (
    <section id="experience">
      <div className="wrap">
        <Reveal className="eyebrow">05 · Trajectory</Reveal>
        <Reveal as="h2" className="section-title">Where I've <em>been</em>.</Reveal>
        <Reveal stagger className="timeline">
          {EXPERIENCE.map((e, i) => (
            <div className={`timeline-item ${e.active ? 'active' : ''}`} key={i}>
              <div className="timeline-date">{e.date}</div>
              <div className="timeline-content">
                <h4>{e.role}</h4>
                <h5>{e.org}</h5>
                <p>{e.blurb}</p>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}

// ---------- MagneticButton ----------
function MagneticButton({ children, href }) {
  const ref = useRef(null);
  const onMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - (r.left + r.width / 2);
    const y = e.clientY - (r.top + r.height / 2);
    el.style.setProperty('--m-x', `${x * 0.18}px`);
    el.style.setProperty('--m-y', `${y * 0.18}px`);
  }, []);
  const onLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty('--m-x', '0px');
    el.style.setProperty('--m-y', '0px');
  }, []);
  return (
    <a ref={ref} href={href} className="cta-btn" onMouseMove={onMove} onMouseLeave={onLeave}>
      {children}
      <span className="cta-arrow" aria-hidden="true" />
    </a>
  );
}

// ---------- Contact ----------
function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="wrap">
        <Reveal className="contact-eyebrow">06 · Get in touch</Reveal>
        <Reveal as="h2" className="contact-title">
          Let's build <em>something</em><br />that matters.
        </Reveal>
        <Reveal>
          <MagneticButton href="mailto:ianbundyweiss@gmail.com">
            Start a conversation
          </MagneticButton>
        </Reveal>
        <Reveal className="contact-secondary">
          <a href="mailto:ianbundyweiss@gmail.com">ianbundyweiss@gmail.com</a>
          <a href="https://www.linkedin.com/in/ian-bundy-weiss-82386b201/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a href="https://github.com/technopancake12" target="_blank" rel="noreferrer">GitHub ↗</a>
        </Reveal>
      </div>
    </section>
  );
}

// ---------- Footer ----------
function Footer() {
  const [time, setTime] = useState('');
  useEffect(() => {
    const update = () => {
      const fmt = new Intl.DateTimeFormat('en-US', {
        timeZone: 'America/Los_Angeles',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
      });
      setTime(fmt.format(new Date()) + ' PT');
    };
    update();
    const id = setInterval(update, 30000);
    return () => clearInterval(id);
  }, []);
  return (
    <footer className="footer">
      <div>© 2026 Ian Bundy-Weiss</div>
      <div className="footer-center">
        <span className="live-dot" />Los Angeles, CA · {time}
      </div>
      <div className="footer-right">Designed & built with care</div>
    </footer>
  );
}

// ---------- CustomCursor ----------
function CustomCursor() {
  const dotRef = useRef(null);
  useEffect(() => {
    document.body.classList.add('has-custom-cursor');
    let tx = -100, ty = -100, x = -100, y = -100;
    let raf = 0;
    const move = (e) => { tx = e.clientX; ty = e.clientY; };
    const loop = () => {
      x += (tx - x) * 0.22;
      y += (ty - y) * 0.22;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(loop);
    };
    const onOver = (e) => {
      if (e.target.closest?.('a, button, [data-hover]')) {
        dotRef.current?.classList.add('hover');
      }
    };
    const onOut = (e) => {
      if (e.target.closest?.('a, button, [data-hover]')) {
        dotRef.current?.classList.remove('hover');
      }
    };
    window.addEventListener('mousemove', move);
    document.addEventListener('mouseover', onOver);
    document.addEventListener('mouseout', onOut);
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', move);
      document.removeEventListener('mouseover', onOver);
      document.removeEventListener('mouseout', onOut);
      document.body.classList.remove('has-custom-cursor');
    };
  }, []);
  return <div className="cursor-dot" ref={dotRef} />;
}

// ---------- App ----------
export default function PortfolioPage() {
  const progress = useScrollProgress();
  return (
    <>
      <CustomCursor />
      <div className="scroll-progress">
        <span style={{ width: `${progress * 100}%` }} />
      </div>
      <Nav />
      <Hero />
      <MarqueeStrip />
      <About />
      <Work />
      <DesignsSection />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </>
  );
}
