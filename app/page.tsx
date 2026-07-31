"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "WhipKlean",
    type: "Applied automation · Automotive",
    summary:
      "A guided vehicle intake prototype that combines browser camera capture, on-device OCR, editable results and clear failure recovery.",
    stack: ["TypeScript", "React", "Next.js", "Tesseract.js"],
    live: "https://whipklean.tinotendadzawi.com/smart-scan/",
    source: "https://github.com/tinondzala26/whipklean-mobile-detailing",
    className: "whip",
    metric: "03",
    metricLabel: "GUIDED CAPTURES",
    challenge:
      "Vehicle-detailing customers need a clear way to provide useful vehicle information without describing every detail in a long message.",
    solution:
      "A guided flow captures a vehicle, licence disc and number plate, performs text reading locally, and presents editable structured fields before the user continues.",
    outcome:
      "The working prototype demonstrates the complete front-end intake journey, including consent, retakes, uncertain OCR results and manual recovery.",
    engineering:
      "Secure-context camera access, purpose-specific capture states, local OCR, typed UI state, editable output, responsive behaviour and explicit failure handling.",
    role: "Product design · Frontend engineering · OCR integration",
    proof: ["Live camera workflow", "On-device OCR", "Human review before use"],
    limitation:
      "Prototype boundary: it does not query an official owner database or persist bookings. Production use would require a secured backend, audit trail, tests and lawful data integration.",
  },
  {
    number: "02",
    title: "Bush Man",
    type: "E-commerce · Fashion",
    summary:
      "A responsive safari-fashion storefront focused on product discovery, variant selection, sizing and a distinctive Southern African identity.",
    stack: ["TypeScript", "React", "Vinext", "Responsive UI"],
    live: "https://bushman.tinotendadzawi.com",
    source: "https://github.com/tinondzala26/bush-man-safari",
    className: "bush",
    metric: "31",
    metricLabel: "PRODUCT EXPERIENCES",
    challenge:
      "Turn a heritage-inspired clothing concept into a contemporary storefront that feels premium, practical and recognisably Southern African.",
    solution:
      "A mobile-first product experience with clear collections, interactive variants, sizing guidance, cart interactions and reusable interface components.",
    outcome:
      "A deployed storefront that establishes the brand’s visual language and provides a credible foundation for future commerce integration.",
    engineering:
      "Reusable React components, responsive product states, accessible interactions and a deployment setup designed for maintainable iteration.",
    role: "Product design · Frontend engineering · Deployment",
    proof: ["Responsive product catalogue", "Interactive variants and cart", "Live custom domain"],
    limitation:
      "Current boundary: the storefront demonstrates the customer experience but does not yet process production payments.",
  },
  {
    number: "03",
    title: "Sa’int Lucid",
    type: "Artist platform · Music",
    summary:
      "An atmospheric, responsive digital home for the Neptune EP that balances expressive art direction with accessible navigation.",
    stack: ["HTML", "TypeScript", "CSS", "Creative Direction"],
    live: "https://saintlucid.online",
    source: "https://github.com/tinondzala26/saint-lucid-neptune",
    className: "neptune",
    metric: "03",
    metricLabel: "RELEASE STORIES",
    challenge:
      "Translate the mood of an R&B and soul release into an immersive experience without making the site difficult to navigate.",
    solution:
      "A cinematic release platform combining visual storytelling, semantic structure and responsive behaviour across screen sizes.",
    outcome:
      "A focused destination that gives the artist a distinctive digital identity while keeping the release story and navigation easy to access.",
    engineering:
      "Responsive layout systems, performance-conscious effects, semantic content and interaction design that respects reduced-motion preferences.",
    role: "Creative direction · Frontend engineering · Deployment",
    proof: ["Responsive artist platform", "Reduced-motion support", "Live custom domain"],
    limitation:
      "Current boundary: the experience is a promotional release platform rather than a streaming or commerce application.",
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
        <a className="wordmark" href="#top" aria-label="Tinotenda Dzawi home">
          TD<span>®</span>
        </a>
        <div className={menuOpen ? "navLinks open" : "navLinks"}>
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setMenuOpen(false)}>Experience</a>
          <a href="/services" onClick={() => setMenuOpen(false)}>Client services</a>
          <a className="navCta" href="/Tinotenda_Dzawi_CV.pdf" download>Download CV ↓</a>
        </div>
        <button
          className="menuButton"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "Menu"}
        </button>
      </nav>

      <section className="hero recruiterHero" id="top">
        <div className="availability"><i /> Open to frontend and software engineering opportunities</div>
        <h1>Product-focused<br /><em>frontend</em><br />engineer.</h1>
        <div className="heroBottom">
          <p>
            I’m <b>Tinotenda Dzawi</b>, a Cape Town software engineer and product designer.
            I build typed, responsive interfaces and practical automation with clear human review.
          </p>
          <div className="heroActions">
            <a href="#work" className="primaryAction">View projects ↘</a>
            <a href="/Tinotenda_Dzawi_CV.pdf" download className="secondaryAction">Download CV ↓</a>
            <a href="mailto:tinondzala@gmail.com?subject=Software%20engineering%20opportunity" className="secondaryAction">Contact me ↗</a>
          </div>
        </div>
        <div className="heroCode" aria-hidden="true">
          <span>CURRENT · NUMBERBOOST</span>
          <span>PREVIOUS · COMMVAULT</span>
          <span>TYPESCRIPT · REACT · NEXT.JS</span>
          <span>CAPE TOWN · ZA</span>
        </div>
      </section>

      <section className="recruiterSnapshot" aria-label="Recruiter snapshot">
        <div><span>CURRENT ROLE</span><b>Software Engineer & Web Designer</b><small>NumberBoost</small></div>
        <div><span>PREVIOUS</span><b>Junior Software Engineer</b><small>Commvault</small></div>
        <div><span>CORE STACK</span><b>TypeScript · React · Next.js</b><small>Responsive product interfaces</small></div>
        <div><span>LOCATION</span><b>Cape Town, South Africa</b><small>Open to remote and hybrid roles</small></div>
      </section>

      <section className="work focusedWork" id="work">
        <div className="sectionHead">
          <span>01 / SELECTED WORK</span>
          <h2>Three products.<br />Clear decisions.</h2>
          <p>
            Each project separates what is live from what is still a prototype, and explains my role,
            engineering choices and current limitations.
          </p>
        </div>
        <div className="projectList">
          {projects.map((project) => (
            <article className="project" key={project.title}>
              <div className={`projectVisual ${project.className}`}>
                <div className="browserChrome"><i/><i/><i/><span>{project.title.toLowerCase().replace("’", "").replace(" ", "-")}.site</span></div>
                <div className="visualContent">
                  <span>{project.type}</span>
                  <strong>{project.title}</strong>
                  <div className="visualMetric"><b>{project.metric}</b><small>{project.metricLabel}</small></div>
                </div>
              </div>
              <div className="projectInfo">
                <span className="projectNo">{project.number}</span>
                <div>
                  <span className="eyebrow">{project.type}</span>
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <p className="projectRole"><b>MY ROLE</b>{project.role}</p>
                  <div className="caseProof">{project.proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
                  <div className="tags">{project.stack.map((tag) => <span key={tag}>{tag}</span>)}</div>
                  <div className="projectLinks">
                    <button type="button" onClick={() => setActiveProject(project)}>Read case study ↗</button>
                    <a href={project.live} target="_blank" rel="noreferrer">View live ↗</a>
                    <a href={project.source} target="_blank" rel="noreferrer">Repository ↗</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="experience compactExperience" id="experience">
        <div className="sectionHead">
          <span>02 / EXPERIENCE</span>
          <h2>Built in real<br />product teams.</h2>
          <p>Engineering discipline and product judgement shaped across software and AI-focused environments.</p>
        </div>
        <div className="experienceList">
          <article>
            <span className="experienceDate">CURRENT</span>
            <div><h3>NumberBoost</h3><p>Software Engineer & Web Designer</p></div>
            <p>Designing and engineering web experiences for a team delivering custom AI systems across automotive inspection, geospatial analytics and customer intelligence.</p>
          </article>
          <article>
            <span className="experienceDate">PREVIOUS</span>
            <div><h3>Commvault</h3><p>Junior Software Engineer</p></div>
            <p>Built an early-career foundation in production software, collaborative engineering, technical problem solving and reliable delivery.</p>
          </article>
        </div>
        <div className="attributionPanel">
          <span>SELECTED NUMBERBOOST TEAM CONTRIBUTIONS</span>
          <h3>Automotive inspection · Geospatial analytics · Customer intelligence</h3>
          <p>
            I contributed as a member of the NumberBoost team to work connected to these capabilities.
            Mercedes-Benz and MultiChoice outcomes belong to NumberBoost’s published company record;
            this statement does not present those company achievements as individual awards.
          </p>
          <a href="https://www.numberboost.com/" target="_blank" rel="noreferrer">View NumberBoost’s public record ↗</a>
        </div>
      </section>

      <section className="capabilities conciseCapabilities" id="capabilities">
        <div className="sectionHead light">
          <span>03 / CAPABILITIES</span>
          <h2>Useful across<br />the product cycle.</h2>
        </div>
        <div className="capGrid">
          <article><span>01</span><h3>Frontend engineering</h3><p>Typed UI states, responsive components, accessibility and interfaces that remain understandable when something fails.</p><b>React · TypeScript · Next.js</b></article>
          <article><span>02</span><h3>Product design</h3><p>User flows, visual hierarchy, responsive behaviour and design decisions tied to a concrete user problem.</p><b>UX/UI · Prototyping · Design systems</b></article>
          <article><span>03</span><h3>Integration</h3><p>Browser capabilities and third-party libraries connected to real workflows with validation and clear uncertainty boundaries.</p><b>Browser APIs · OCR · Structured data</b></article>
          <article><span>04</span><h3>Delivery</h3><p>Scoped requirements turned into deployed products with source control, custom domains and responsive quality assurance.</p><b>GitHub · Deployment · Debugging</b></article>
        </div>
      </section>

      <section className="evidence">
        <span>04 / VERIFIABLE EVIDENCE</span>
        <div>
          <h2>Live work before claims.</h2>
          <p>
            Three deployed products, public repositories, one documented prototype boundary and a downloadable CV.
            Hackathon details will be added when the event record is ready to verify.
          </p>
          <div className="evidenceActions">
            <a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer">Review GitHub ↗</a>
            <a href="/Tinotenda_Dzawi_CV.pdf" download>Download CV ↓</a>
          </div>
        </div>
      </section>

      <section className="contact" id="contact">
        <span>HIRING FOR FRONTEND, PRODUCT, OR SOFTWARE ENGINEERING?</span>
        <h2>Let’s have the<br /><em>technical conversation.</em></h2>
        <div className="contactRoutes">
          <a href="mailto:tinondzala@gmail.com?subject=Software%20engineering%20opportunity">tinondzala@gmail.com <b>↗</b></a>
          <a href="tel:+27646589920">064 658 9920 <b>↗</b></a>
          <a href="/Tinotenda_Dzawi_CV.pdf" download>Download my CV <b>↓</b></a>
        </div>
      </section>

      <footer>
        <div><b>TD®</b><span>SOFTWARE ENGINEER & PRODUCT DESIGNER · CAPE TOWN</span></div>
        <div>
          <a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer">GitHub ↗</a>
          <a href="/services">Client services ↗</a>
          <a href="mailto:tinondzala@gmail.com">Email ↗</a>
        </div>
        <span>© 2026 Tinotenda Dzawi</span>
      </footer>

      {activeProject && (
        <div className="caseOverlay" role="presentation" onMouseDown={() => setActiveProject(null)}>
          <article className="caseModal" role="dialog" aria-modal="true" aria-labelledby="caseTitle" onMouseDown={(event) => event.stopPropagation()}>
            <button className="caseClose" type="button" onClick={() => setActiveProject(null)} aria-label="Close case study">Close ×</button>
            <span className="caseIndex">{activeProject.number} / CASE STUDY</span>
            <h2 id="caseTitle">{activeProject.title}</h2>
            <p className="caseType">{activeProject.type}</p>
            <p className="caseRole"><b>MY ROLE</b>{activeProject.role}</p>
            <div className="caseGrid">
              <div><span>THE PROBLEM</span><p>{activeProject.challenge}</p></div>
              <div><span>THE RESPONSE</span><p>{activeProject.solution}</p></div>
              <div><span>THE EVIDENCE</span><p>{activeProject.outcome}</p></div>
              <div><span>ENGINEERING DECISIONS</span><p>{activeProject.engineering}</p></div>
            </div>
            <div className="caseLimit"><b>CURRENT LIMIT</b><p>{activeProject.limitation}</p></div>
            <div className="caseProof">{activeProject.proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
            <div className="caseTags">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="caseActions">
              <a href={activeProject.live} target="_blank" rel="noreferrer">View live ↗</a>
              <a href={activeProject.source} target="_blank" rel="noreferrer">Repository ↗</a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
