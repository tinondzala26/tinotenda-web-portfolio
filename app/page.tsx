"use client";

import { useEffect, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Bush Man",
    type: "E-commerce · Fashion",
    summary: "A conversion-focused safari fashion store with responsive product discovery, live variants, sizing, cart interactions, and a distinctive South African identity.",
    stack: ["TypeScript", "React", "Vinext", "Responsive UI"],
    live: "https://bushman.tinotendadzawi.com",
    appLive: "",
    appSource: "",
    source: "https://github.com/tinondzala26/bush-man-safari",
    className: "bush",
    metric: "31",
    metricLabel: "PRODUCT EXPERIENCES",
    challenge: "Turn a heritage-inspired safari clothing concept into a modern store that feels premium, practical, and distinctly Southern African.",
    solution: "A responsive commerce experience with strong product storytelling, clear collections, variant selection, and an editorial visual language.",
    outcome: "A complete, mobile-first storefront that gives the brand a credible platform for product discovery, customer trust, and future commerce growth.",
    engineering: "Reusable React components, responsive product states, accessible interactions, and a deployment setup designed for straightforward iteration.",
    role: "Product design · Frontend engineering · Deployment",
    proof: ["Responsive storefront", "Interactive variants and cart", "Live custom domain"],
  },
  {
    number: "02",
    title: "WhipKlean",
    type: "Service Business · Automotive",
    summary: "A polished lead-generation platform and Smart Intake app for mobile vehicle detailing, designed to communicate trust and turn vehicle details into a clear booking brief.",
    stack: ["TypeScript", "React", "Next.js", "Tesseract.js"],
    live: "https://whipklean.tinotendadzawi.com",
    appLive: "https://whipklean.tinotendadzawi.com/smart-scan/",
    appSource: "https://github.com/tinondzala26/whipklean-mobile-detailing/blob/main/app/smart-scan/page.tsx",
    source: "https://github.com/tinondzala26/whipklean-mobile-detailing",
    className: "whip",
    metric: "03",
    metricLabel: "PHOTOS TO START A QUOTE",
    challenge: "Vehicle-detailing customers often struggle to describe a vehicle’s condition clearly enough for an accurate mobile-service enquiry.",
    solution: "A guided three-photo intake combines vehicle, service, condition, and location details into a reviewable booking brief while keeping photos on the customer’s device.",
    outcome: "A clearer enquiry journey with useful preparation for the customer and better job context before WhipKlean follows up.",
    engineering: "Secure-context camera access, guided capture states, on-device OCR, editable extracted fields, consent handling, failure fallback, and static deployment.",
    role: "Product design · Frontend engineering · OCR integration",
    proof: ["Live camera capture", "On-device OCR", "Human review before submission"],
  },
  {
    number: "03",
    title: "Sa’int Lucid",
    type: "Artist Platform · Music",
    summary: "An immersive artist website for the Neptune EP, translating an R&B/Soul identity into an atmospheric, accessible digital experience.",
    stack: ["HTML", "TypeScript", "CSS", "Creative Direction"],
    live: "https://saintlucid.online",
    appLive: "",
    appSource: "",
    source: "https://github.com/tinondzala26/saint-lucid-neptune",
    className: "neptune",
    metric: "03",
    metricLabel: "CONNECTED RELEASE STORIES",
    challenge: "Translate the atmosphere of an R&B/Soul release into a digital home that feels immersive without becoming difficult to use.",
    solution: "A cinematic artist platform combining expressive art direction, release storytelling, and accessible navigation across devices.",
    outcome: "A focused release destination that gives the artist a distinctive identity while keeping music, story, and navigation easy to access on any screen.",
    engineering: "Responsive layout systems, performance-conscious visual effects, semantic content structure, and interaction design that respects reduced-motion preferences.",
    role: "Creative direction · Frontend engineering · Deployment",
    proof: ["Responsive artist platform", "Reduced-motion support", "Live custom domain"],
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
          <a className="navCta" href="#contact">Discuss a role ↗</a>
        </div>
        <button className="menuButton" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">{menuOpen ? "×" : "Menu"}</button>
      </nav>

      <section className="hero" id="top">
        <div className="availability"><i /> Open to software engineering opportunities</div>
        <h1>Software engineering<br />with <em>product</em><br />judgement.</h1>
        <div className="heroBottom">
          <p>I’m <b>Tinotenda Dzawi</b>, a software engineer and product designer in Cape Town. I build responsive web products, translate ambiguous requirements into usable interfaces, and integrate practical automation with clear human review.</p>
          <a href="#work" className="roundLink" aria-label="View selected work">↓<span>SELECTED<br />WORK</span></a>
        </div>
        <div className="heroCode" aria-hidden="true">
          <span>01</span><span>TYPESCRIPT</span><span>REACT</span><span>PRODUCT ENGINEERING</span><span>CAPE TOWN · ZA</span>
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
        <span>SOFTWARE ENGINEER · PRODUCT DESIGNER</span>
        <p>I combine engineering execution with design judgement—useful when a team needs someone who can understand the problem, build the interface, and ship the result.</p>
      </section>

      <section className="audiencePaths">
        <article>
          <span>FOR HIRING TEAMS</span>
          <h2>An engineer who understands the user.</h2>
          <p>My strongest fit is a frontend, product-engineering, or junior software-engineering role where typed interfaces, responsive UI, API integration, and thoughtful delivery matter.</p>
          <a href="mailto:tinondzala@gmail.com?subject=Software%20engineering%20opportunity">Discuss a role ↗</a>
        </article>
        <article>
          <span>FOR FOUNDERS & CLIENTS</span>
          <h2>A clear path from brief to launch.</h2>
          <p>From positioning and page structure to responsive design and deployment, I build websites that help serious businesses look established and convert attention.</p>
          <a href="mailto:tinondzala@gmail.com?subject=New%20web%20design%20project">Start a project ↗</a>
        </article>
      </section>

      <section className="recruiterSnapshot" aria-label="Recruiter snapshot">
        <div><span>CURRENT ROLE</span><b>Software Engineer & Web Designer</b><small>NumberBoost</small></div>
        <div><span>PREVIOUS</span><b>Junior Software Engineer</b><small>Commvault</small></div>
        <div><span>CORE STACK</span><b>TypeScript · React · Next.js</b><small>Responsive product interfaces</small></div>
        <div><span>LOCATION</span><b>Cape Town, South Africa</b><small>Open to remote and hybrid roles</small></div>
      </section>

      <section className="solutionMethod" id="method">
        <div className="sectionHead">
          <span>01 / AI SOLUTION METHOD</span>
          <h2>Start with the friction.<br />Then choose the technology.</h2>
          <p>I design AI features around an observable business problem, with clear inputs, reviewable outputs, and a fallback when automation is uncertain.</p>
        </div>
        <div className="methodGrid">
          <article><span>01</span><h3>Frame</h3><p>Define the user, the repetitive task, the cost of the problem, and what a useful result must contain.</p></article>
          <article><span>02</span><h3>Design</h3><p>Map consent, input quality, failure states, human review, and the shortest path to a trustworthy outcome.</p></article>
          <article><span>03</span><h3>Engineer</h3><p>Build typed interfaces, structured outputs, validation, API boundaries, and secure handling for sensitive data.</p></article>
          <article><span>04</span><h3>Evaluate</h3><p>Test realistic edge cases, inspect uncertain outputs, measure user friction, and improve the workflow—not just the prompt.</p></article>
        </div>
      </section>

      <section className="engineeringProof" id="engineering-proof">
        <div className="proofHeading">
          <span>02 / ENGINEERING PROOF</span>
          <h2>A live feature,<br />explained honestly.</h2>
          <p>WhipKlean’s Vehicle Scan is the clearest example of how I approach an applied automation problem: guide the input, process locally where possible, expose uncertainty, and keep the person in control.</p>
        </div>
        <div className="proofFlow" aria-label="WhipKlean vehicle scan architecture">
          <article><span>01 / INPUT</span><h3>Guided camera capture</h3><p>Three purpose-specific camera views for the vehicle, licence disc, and number plate, with retakes and file-upload fallback.</p></article>
          <article><span>02 / PROCESSING</span><h3>On-device text reading</h3><p>Tesseract.js processes disc and plate images in the browser so the prototype does not require a customer-photo upload service.</p></article>
          <article><span>03 / REVIEW</span><h3>Editable structured fields</h3><p>Registration, VIN, owner, make/model, and colour remain editable because OCR output can be incomplete or incorrect.</p></article>
          <article><span>04 / FAILURE PATH</span><h3>No silent guessing</h3><p>If extraction fails, the interface asks for a clearer photo or manual entry instead of presenting uncertain data as fact.</p></article>
        </div>
        <div className="proofHandoff">
          <div><span>WHAT IS LIVE</span><p>Camera access, guided captures, local OCR, consent, editable results, responsive states, HTTPS, and a public source repository.</p></div>
          <div><span>CURRENT LIMIT</span><p>This is a frontend prototype: it does not query an official owner database or persist bookings. A production version would add a secured backend, audit trail, tests, and lawful data-source integration.</p></div>
          <div className="proofLinks"><a href="https://whipklean.tinotendadzawi.com/smart-scan/" target="_blank" rel="noreferrer">Open live app ↗</a><a href="https://github.com/tinondzala26/whipklean-mobile-detailing/blob/main/app/smart-scan/page.tsx" target="_blank" rel="noreferrer">Review source ↗</a></div>
        </div>
      </section>

      <section className="work" id="work">
        <div className="sectionHead"><span>03 / SELECTED WORK</span><h2>Products you can open.</h2><p>Each project includes a live deployment, public source, my role, and the engineering decisions behind it.</p></div>
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
                <div><span className="eyebrow">{project.type}</span><h3>{project.title}</h3><p>{project.summary}</p><p className="projectRole"><b>MY ROLE</b>{project.role}</p>
                  <div className="tags">{project.stack.map(tag => <span key={tag}>{tag}</span>)}</div>
                  <div className="projectLinks">
                    <button type="button" onClick={() => setActiveProject(project)}>Read case study ↗</button>
                    <a href={project.live} target="_blank" rel="noreferrer">View project ↗</a>
                    {project.appLive && <a href={project.appLive} target="_blank" rel="noreferrer">Open app ↗</a>}
                    {project.appSource && <a href={project.appSource} target="_blank" rel="noreferrer">View app code ↗</a>}
                    <a href={project.source} target="_blank" rel="noreferrer">View code ↗</a>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="githubProof">
          <div><span>GITHUB PROFILE</span><b>04 public project repositories</b></div>
          <div><span>WORKING ACROSS</span><b>TypeScript · React · Next.js · HTML · CSS</b></div>
          <a href="https://github.com/tinondzala26" target="_blank" rel="noreferrer">Review the code ↗</a>
        </div>
      </section>

      <section className="experience" id="experience">
        <div className="sectionHead">
          <span>04 / EXPERIENCE</span>
          <h2>Built in real<br />product teams.</h2>
          <p>Engineering discipline and visual thinking, shaped across software and AI-focused environments.</p>
        </div>
        <div className="experienceList">
          <article>
            <span className="experienceDate">CURRENT</span>
            <div><h3>NumberBoost</h3><p>Web Designer & Software Engineer</p></div>
            <p>Designing and engineering web experiences for a team delivering custom AI systems, including work connected to automotive inspection, geospatial analytics, and customer intelligence.</p>
          </article>
          <article>
            <span className="experienceDate">PREVIOUS</span>
            <div><h3>Commvault</h3><p>Junior Software Engineer</p></div>
            <p>Developed an early-career foundation in production software, collaborative engineering, technical problem-solving, and reliable delivery.</p>
          </article>
        </div>
        <div className="numberboostWork">
          <div className="numberboostIntro">
            <span>SELECTED NUMBERBOOST CONTRIBUTIONS</span>
            <p>Team contributions presented alongside NumberBoost’s public project record. Client outcomes and awards are attributed to the company; contribution statements describe my role within that work.</p>
          </div>
          <div className="contributionGrid">
            <article>
              <span>01 / COMPUTER VISION</span>
              <h3>Mercedes-Benz</h3>
              <p>Contributed to project work connected to NumberBoost’s AI system for detecting vehicle dents and scratches from images. NumberBoost publicly records the project as a Mercedes-Benz innovation competition winner.</p>
              <a href="https://www.numberboost.com/" target="_blank" rel="noreferrer">Verify company record ↗</a>
            </article>
            <article>
              <span>02 / GEOSPATIAL ML</span>
              <h3>MultiChoice</h3>
              <p>Contributed to work around NumberBoost’s geospatial machine-learning analytics capability. NumberBoost publicly lists the system as the winner of a MultiChoice innovation challenge.</p>
              <a href="https://www.numberboost.com/" target="_blank" rel="noreferrer">Verify company record ↗</a>
            </article>
            <article>
              <span>03 / CUSTOMER INTELLIGENCE</span>
              <h3>Customer analytics</h3>
              <p>Contributed to customer-analytics work involving churn, lifetime-value, and deactivation modelling—capabilities included in NumberBoost’s published project portfolio.</p>
              <a href="https://za.linkedin.com/company/numberboost" target="_blank" rel="noreferrer">View public project list ↗</a>
            </article>
            <article className="hackathonCard">
              <span>04 / APPLIED PROBLEM-SOLVING</span>
              <h3>3 hackathons.<br />1 top placement.</h3>
              <p>Participated in three hackathons and earned a top placement in one, applying rapid prototyping, collaborative engineering, and product thinking under time constraints.</p>
              <b>PERSONAL COMPETITION RECORD</b>
            </article>
          </div>
        </div>
      </section>

      <section className="capabilities" id="services">
        <div className="sectionHead light"><span>05 / TECHNICAL CAPABILITIES</span><h2>Useful across<br />the product cycle.</h2></div>
        <div className="capGrid">
          <article><span>01</span><h3>Frontend engineering</h3><p>Responsive component systems, typed UI states, accessibility, browser APIs, and interfaces that remain understandable when something fails.</p><b>React · TypeScript · Next.js</b></article>
          <article><span>02</span><h3>Product design</h3><p>User flows, visual hierarchy, responsive behaviour, prototypes, and design decisions tied to a specific business or user problem.</p><b>UX/UI · Prototyping · Design systems</b></article>
          <article><span>03</span><h3>Integration</h3><p>Connecting browser capabilities and third-party libraries to real workflows, with validation and clear boundaries around uncertainty.</p><b>Browser APIs · OCR · Structured data</b></article>
          <article><span>04</span><h3>Delivery</h3><p>Turning scoped requirements into deployed products with source control, custom domains, HTTPS, responsive QA, and maintainable iteration.</p><b>GitHub · Deployment · Debugging</b></article>
        </div>
      </section>

      <section className="about" id="about">
        <div className="aboutLabel">06 / ABOUT</div>
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
          <div><b>04</b><span>PUBLIC REPOSITORIES</span></div>
          <div><b>03</b><span>HACKATHONS ENTERED</span></div>
          <div><b>01</b><span>TOP PLACEMENT</span></div>
          <div><b>ZA</b><span>BASED IN CAPE TOWN</span></div>
        </aside>
      </section>

      <section className="process">
        <span>HOW I WORK</span>
        <div><b>Discover</b><i>→</i><b>Shape</b><i>→</i><b>Build</b><i>→</i><b>Launch</b></div>
      </section>

      <section className="contact" id="contact">
        <span>HIRING FOR FRONTEND, PRODUCT, OR SOFTWARE ENGINEERING?</span>
        <h2>I’m ready for the<br /><em>technical conversation.</em></h2>
        <a href="mailto:tinondzala@gmail.com">tinondzala@gmail.com <b>↗</b></a>
      </section>

      <footer>
        <div><b>TD®</b><span>SOFTWARE ENGINEER & PRODUCT DESIGNER · CAPE TOWN</span></div>
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
            <p className="caseRole"><b>MY ROLE</b>{activeProject.role}</p>
            <div className="caseGrid">
              <div><span>THE CHALLENGE</span><p>{activeProject.challenge}</p></div>
              <div><span>THE RESPONSE</span><p>{activeProject.solution}</p></div>
              <div><span>THE OUTCOME</span><p>{activeProject.outcome}</p></div>
              <div><span>ENGINEERING DECISIONS</span><p>{activeProject.engineering}</p></div>
            </div>
            <div className="caseProof">{activeProject.proof.map((item) => <span key={item}>✓ {item}</span>)}</div>
            <div className="caseTags">{activeProject.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <div className="caseActions">
              <a href={activeProject.live} target="_blank" rel="noreferrer">Open project ↗</a>
              {activeProject.appLive && <a href={activeProject.appLive} target="_blank" rel="noreferrer">Open app ↗</a>}
              {activeProject.appSource && <a href={activeProject.appSource} target="_blank" rel="noreferrer">View app code ↗</a>}
              <a href={activeProject.source} target="_blank" rel="noreferrer">Explore code ↗</a>
            </div>
          </article>
        </div>
      )}
    </main>
  );
}
