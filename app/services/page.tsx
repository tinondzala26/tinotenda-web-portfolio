export default function ServicesPage() {
  return (
    <main className="servicesPage">
      <nav className="topNav">
        <a className="wordmark" href="/" aria-label="Tinotenda Dzawi home">TD<span>®</span></a>
        <div className="navLinks serviceNav">
          <a href="/#work">Portfolio</a>
          <a href="/Tinotenda_Dzawi_CV.pdf" download>Download CV</a>
          <a className="navCta" href="mailto:tinondzala@gmail.com?subject=New%20client%20project">Start a project ↗</a>
        </div>
      </nav>

      <section className="serviceHero">
        <span>WEB PRODUCTS FOR FOUNDERS AND GROWING BUSINESSES</span>
        <h1>A clear path<br />from brief<br /><em>to launch.</em></h1>
        <p>
          I design and build focused websites, customer-facing interfaces and practical business
          automation for teams that need to look established and move quickly.
        </p>
      </section>

      <section className="serviceOffers">
        <article><span>01</span><h2>Business websites</h2><p>Positioning, responsive design, clear enquiries, custom domains and a credible launch-ready presence.</p></article>
        <article><span>02</span><h2>Startup prototypes</h2><p>Focused product flows and working front-end prototypes that make an idea easier to test, explain and improve.</p></article>
        <article><span>03</span><h2>Customer workflows</h2><p>Booking, intake, quotation and service interfaces designed around the information a business genuinely needs.</p></article>
        <article><span>04</span><h2>Practical automation</h2><p>Small, reviewable automations that reduce repetitive work without hiding uncertainty from the people using them.</p></article>
      </section>

      <section className="serviceProcess">
        <span>HOW PROJECTS MOVE</span>
        <div>
          <article><b>Discover</b><p>Clarify the customer, business goal, scope and success criteria.</p></article>
          <article><b>Shape</b><p>Turn the brief into content structure, user flow and visual direction.</p></article>
          <article><b>Build</b><p>Engineer the responsive experience and test the important states.</p></article>
          <article><b>Launch</b><p>Deploy to a custom domain and provide a clear handover.</p></article>
        </div>
      </section>

      <section className="contact serviceContact">
        <span>HAVE A REAL PROJECT TO DISCUSS?</span>
        <h2>Send the brief.<br /><em>I’ll ask the right questions.</em></h2>
        <div className="contactRoutes">
          <a href="mailto:tinondzala@gmail.com?subject=New%20client%20project">tinondzala@gmail.com <b>↗</b></a>
          <a href="tel:+27646589920">064 658 9920 <b>↗</b></a>
          <a href="/#work">Review selected work <b>↗</b></a>
        </div>
      </section>
    </main>
  );
}
