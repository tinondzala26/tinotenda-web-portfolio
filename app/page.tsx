"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Bush Man",
    type: "E-commerce · Fashion",
    summary: "A conversion-focused safari fashion store with responsive product discovery, live variants, sizing, cart interactions, and a distinctive South African identity.",
    stack: ["TypeScript", "React", "Vinext", "Responsive UI"],
    live: "https://bush-man-safari.tinondzala.chatgpt.site",
    source: "https://github.com/tinondzala26/bush-man-safari",
    className: "bush",
    metric: "31",
    metricLabel: "PRODUCT EXPERIENCES",
    challenge: "Turn a heritage-inspired safari clothing concept into a modern store that feels premium, practical, and distinctly Southern African.",
    solution: "A responsive commerce experience with strong product storytelling, clear collections, variant selection, and an editorial visual language.",
  },
  {
    number: "02",
    title: "WhipKlean",
    type: "Service Business · Automotive",
    summary: "A polished lead-generation platform for mobile vehicle detailing, designed to communicate trust, service depth, and corrosion-conscious expertise.",
    stack: ["TypeScript", "Python", "CSS", "UX Strategy"],
    live: "https://whipklean-detailing.tinondzala.chatgpt.site",
    source: "https://github.com/tinondzala26/whipklean-mobile-detailing",
    className: "whip",
    metric: "24/7",
    metricLabel: "MOBILE-FIRST DISCOVERY",
    challenge: "Give a mobile detailing business the credibility and clarity needed to turn local interest into qualified enquiries.",
    solution: "A focused service journey that communicates expertise quickly, makes the offer easy to scan, and keeps conversion actions close at hand.",
  },
  {
    number: "03",
    title: "Sa’int Lucid",
    type: "Artist Platform · Music",
    summary: "An immersive artist website for the Neptune EP, translating an R&B/Soul identity into an atmospheric, accessible digital experience.",
    stack: ["HTML", "TypeScript", "CSS", "Creative Direction"],
    live: "https://saint-lucid-neptune.tinondzala.chatgpt.site",
    source: "https://github.com/tinondzala26/saint-lucid-neptune",
    className: "neptune",
    metric: "03",
    metricLabel: "CONNECTED RELEASE STORIES",
    challenge: "Translate the atmosphere of an R&B/Soul release into a digital home that feels immersive without becoming difficult to use.",
    solution: "A cinematic artist platform combining expressive art direction, release storytelling, and accessible navigation across devices.",
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<(typeof projects)[number] | null>(null);

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveProject(null);
    };
    window.addEventListener("keydown", closeOnEscape);
    document.body.classList.toggle("modalOpen", Boolean(activeProject));
    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.body.classList.remove("modalOpen");
    };
  }, [activeProject]);

  return (
    <main>
      <nav className="topNav">
        <a className="wordmark" href="#top" aria-label="Tinotenda Dzawi home">TD<span>®</span></a>
        <div className={menuOpen ? "navLinks open" : "navLinks"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#services" onClick={() => setMenuOpen(false)}>Capabilities</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a className="navCta" href="#contact">Work with me ↗</a>
        </div>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "Menu"}</button>
      </nav>

      <section className="hero" id="top">
        <div className="availability"><i /> Available for startup & AI projects</div>
        <h1>Designing ideas<br />into <em>useful</em><br />digital products.</h1>
        <div className="heroBottom">
          <p>I’m <b>Tinotenda Dzawi</b>, a web and software designer helping startups move from early idea to credible product through strategy, standout design, production-ready code, and practical AI.</p>
          <a href="#work" className="roundLink" aria-label="View selected work">↓<span>SELECTED<br />WORK</span></a>
        </div>
        <div className="heroCode" aria-hidden="true">
          <span>01</span><span>STRATEGY</span><span>DESIGN</span><span>DEVELOPMENT</span><span>CAPE TOWN · ZA</span>
        </div>
      </section>

      <div className="marquee" aria-label="Services">
        <div className="marqueeTrack">
          {[0, 1].map((copy) => (
            <span key={copy} aria-hidden={copy === 1}>
              WEB DESIGN <i>✦</i> SOFTWARE ENGINEERING <i>✦</i> STARTUP LAUNCHES <i>✦</i> AI SOLUTIONS <i>✦</i>
            </span>
          ))}
        </div>
      </div>

      <section className="introStrip">
        <span>STRATEGY, DESIGN, SOFTWARE & AI</span>
        <p>One partner from first sketch to launch—built for ambitious startups that need momentum without sacrificing craft.</p>
      </section>

      <section className="audiencePaths">
        <article>
          <span>FOR HIRING TEAMS</span>
          <h2>A designer who can ship.</h2>
          <p>I bring visual judgement, frontend execution, and product thinking into one practical workflow—useful for teams that need ideas turned into finished experiences.</p>
          <a href="mailto:tinondzala@gmail.com?subject=Web%20design%20role">Discuss a role ↗</a>
        </article>
        <article>
          <span>FOR FOUNDERS & CLIENTS</span>
          <h2>A clear path from brief to launch.</h2>
          <p>From positioning and page structure to responsive design and deployment, I build websites that help serious businesses look established and convert attention.</p>
          <a href="mailto:tinondzala@gmail.com?subject=New%20web%20design%20project">Start a project ↗</a>
        </article>
      </section>

      <section className="work" id="work">
        <div className="sectionHead"><span>01 / SELECTED WORK</span><h2>Proof, not promises.</h2><p>Three different industries. One consistent focus: thoughtful experiences built to perform.</p></div>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`projectVisual ${project.className}`}>
                <div className="browserChrome"><i/><i/><i/><span>{project.title.toLowerCase().replace("’","").replace(" ","-")}.site</span></div>
                <div className="visualContent">
                  <span>{project.type}</span>
                  <strong>{project.title}</strong>
                  <div className="visualMetric"><b>{project.metric}</b><small>{project.metricLabel}</small></div>
                </div>
              </div>
              <div className="projectInfo">
                <span className="projectNo">{project.number}</span>
                <div><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p>
                  <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="projectLinks">
                    <button type="button" onClick={() => setActiveProject(project)}>Read case study ↗</button>
                    <a href={project.live} target="_blank" rel="noreferrer">View project ↗</a>
                    <a href={project.source} target="_blank" rel="noreferrer">View code ↗</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="githubProof">
          <div><span>GITHUB PROFILE</span><b>03 public case-study repositories</b></div>
          <div><span>WORKING ACROSS</span><b>TypeScript · React · Python · HTML · CSS</b></div>
          <a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer">Review the code ↗</a>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="sectionHead">
          <span>02 / EXPERIENCE</span>
          <h2>Built in real<br />product teams.</h2>
          <p>Engineering discipline and visual thinking, shaped across software and AI-focused environments.</p>
        </div>
        <div className="experienceList">
          <article>
            <span className="experienceDate">CURRENT</span>
            <div><h3>NumberBoost</h3><p>Web Designer & Software Engineer</p></div>
            <p>Designing and engineering high-quality web experiences within a team focused on custom AI systems and better business outcomes.</p>
          </article>
          <article>
            <span className="experienceDate">PREVIOUS</span>
            <div><h3>Commvault</h3><p>Junior Software Engineer</p></div>
            <p>Developed an early-career foundation in production software, collaborative engineering, technical problem-solving, and reliable delivery.</p>
          </article>
        </div>
      </section>

      <section className="capabilities" id="services">
        <div className="sectionHead light"><span>03 / STARTUP SERVICES</span><h2>From blank page<br />to live product.</h2></div>
        <div className="capGrid">
          <article><span>01</span><h3>Startup launch</h3><p>Positioning, product storytelling, landing pages, and fast MVPs that turn an early idea into something credible and testable.</p><b>Discovery · MVP · Go-to-market</b></article>
          <article><span>02</span><h3>Web design</h3><p>Distinctive visual systems and responsive, accessible experiences that make the product easy to understand and trust.</p><b>UX/UI · Prototyping · Design systems</b></article>
          <article><span>03</span><h3>Software engineering</h3><p>Production-ready frontend and full-stack builds with clean foundations that can grow beyond the first release.</p><b>React · TypeScript · Python · APIs</b></article>
          <article><span>04</span><h3>AI solutions</h3><p>Practical AI features and workflows designed around a real business problem—not technology for its own sake.</p><b>AI integration · Automation · Prototyping</b></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutLabel">04 / ABOUT</div>
        <div className="aboutCopy">
          <h2>A developer who cares how the whole thing feels.</h2>
          <p className="lead">I work across code, design, content, product thinking, and AI—because strong digital products are not assembled in separate rooms.</p>
          <div className="aboutColumns">
            <p>Working from South Africa with teams anywhere, I help founders and growing businesses turn rough ideas into focused, credible digital products.</p>
            <p>My approach is direct: understand the business goal, reduce the noise, design with intent, engineer with care, and ship something people can use.</p>
          </div>
          <a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer" className="textLink">Explore my GitHub ↗</a>
        </div>
        <aside className="facts">
          <div><b>03</b><span>LIVE PROJECTS</span></div>
          <div><b>04+</b><span>CORE TECHNOLOGIES</span></div>
          <div><b>ZA</b><span>BASED IN CAPE TOWN</span></div>
        </aside>
      </section>

      <section className="process">
        <span>HOW I WORK</span>
        <div><b>Discover</b><i>→</i><b>Shape</b><i>→</i><b>Build</b><i>→</i><b>Launch</b></div>
      </section>

      <section className="contact" id="contact">
        <span>HIRING, BUILDING, OR STARTING SOMETHING NEW?</span>
        <h2>Let’s build something<br /><em>worth opening.</em></h2>
        <a href="mailto:tinondzala@gmail.com">tinondzala@gmail.com <b>↗</b></a>
      </section>

      <footer>
        <div><b>TD®</b><span>WEB DESIGNER & DEVELOPER · CAPE TOWN</span></div>
        <div><a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer">GitHub ↗</a><a href="mailto:tinondzala@gmail.com">Email ↗</a></div>
        <span>© 2026 Tinotenda Dzawi</span>
      </footer>

      <a className="floatingCta" href="#contact"><span>Have an idea?</span><b>Let’s talk ↗</b></a>

      {activeProject && (
        <div className="caseOverlay" role="presentation" onMouseDown={() => setActiveProject(null)}>
          <article className="caseModal" role="dialog" aria-modal="true" aria-labelledby="caseTitle" onMouseDown={(event) => event.stopPropagation()}>
            <button className="caseClose" type="button" onClick={() => setActiveProject(null)} aria-label="Close case study">Close ×</button>
            <span className="caseIndex">{activeProject.number} / CASE STUDY</span>
            <h2 id="caseTitle">{activeProject.title}</h2>
            <p className="caseType">{activeProject.type}</p>
            <div className="caseGrid">
              <div><span>THE CHALLENGE</span><p>{activeProject.challenge}</p></div>
              <div><span>THE RESPONSE</span><p>{activeProject.solution}</p></div>
            </div>
            <div className="caseTags">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="caseActions">
              <a href={activeProject.live} target="_blank" rel="noreferrer">Open project ↗</a>
              <a href={activeProject.source} target="_blank" rel="noreferrer">Explore code ↗</a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
