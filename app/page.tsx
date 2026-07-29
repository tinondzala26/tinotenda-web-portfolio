"use client";

import { useState } from "react";

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
  },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

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
        <div className="availability"><i /> Available for roles & select projects</div>
        <h1>Web designer<br />building <em>useful</em><br />digital experiences.</h1>
        <div className="heroBottom">
          <p>I’m <b>Tinotenda Dzawi</b>, a Cape Town–based web designer and developer creating responsive websites where clear thinking, memorable design, and production-ready code meet.</p>
          <a href="#work" className="roundLink" aria-label="View selected work">↓<span>SELECTED<br />WORK</span></a>
        </div>
        <div className="heroCode" aria-hidden="true">
          <span>01</span><span>STRATEGY</span><span>DESIGN</span><span>DEVELOPMENT</span><span>CAPE TOWN · ZA</span>
        </div>
      </section>

      <section className="introStrip">
        <span>FAST, RESPONSIVE, HUMAN-CENTRED</span>
        <p>I turn ideas into credible digital products that look sharp, work smoothly, and give people a reason to stay.</p>
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
                  <div className="projectLinks"><a href={project.live} target="_blank" rel="noreferrer">Live project ↗</a><a href={project.source} target="_blank" rel="noreferrer">View code ↗</a></div>
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

      <section className="capabilities" id="services">
        <div className="sectionHead light"><span>02 / CAPABILITIES</span><h2>From blank page<br />to live product.</h2></div>
        <div className="capGrid">
          <article><span>01</span><h3>Frontend development</h3><p>Responsive, accessible interfaces built with React, TypeScript, modern CSS, and a sharp eye for detail.</p><b>React · TypeScript · HTML · CSS</b></article>
          <article><span>02</span><h3>Website design</h3><p>Clear visual systems, intuitive layouts, and brand-led interactions that feel considered on every screen.</p><b>UX/UI · Responsive design · Prototyping</b></article>
          <article><span>03</span><h3>Digital strategy</h3><p>Turning business goals into focused site structures, useful customer journeys, and measurable calls to action.</p><b>Discovery · Content · Conversion</b></article>
          <article><span>04</span><h3>Launch & iteration</h3><p>Production-ready builds, deployment, performance checks, and practical improvements after launch.</p><b>GitHub · Cloud deployment · QA</b></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutLabel">03 / ABOUT</div>
        <div className="aboutCopy">
          <h2>A developer who cares how the whole thing feels.</h2>
          <p className="lead">I work across code, design, content, and product thinking—because the strongest websites are not assembled in separate rooms.</p>
          <div className="aboutColumns">
            <p>Based in Cape Town and working with clients anywhere, I help founders, artists, and growing businesses turn rough ideas into credible digital experiences.</p>
            <p>My approach is direct: understand the real goal, remove what gets in the way, build with care, and ship something people can actually use.</p>
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
    </main>
  );
}
