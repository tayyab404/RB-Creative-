import { useState } from 'react'
import './App.css'

const services = [
  { number: '01', title: 'Complete Construction', text: 'From the first groundworks to the final handover, we manage every stage with care.' },
  { number: '02', title: 'Grey Structure', text: 'Reliable foundations, masonry, slabs and structural work built for the long term.' },
  { number: '03', title: 'Interior & Finishing', text: 'Thoughtful interior details and quality finishes that make a house feel like home.' },
  { number: '04', title: 'Renovation & Design', text: 'Refresh, rework and reimagine existing spaces around the way you want to live.' },
]

const roseHeightsGallery = [
  { file: 'rose-heights-overview.jpg.jpeg', title: 'Project overview', type: 'Project profile' },
  { file: 'rose-heights-elevation-views.jpg.jpeg', title: 'Building elevation views', type: 'Exterior design' },
  { file: 'rose-heights-key-features.jpg.jpeg', title: 'Key features', type: 'Project features' },
  { file: 'rose-heights-prime-location.jpg.jpeg', title: 'Prime location', type: 'Location' },
  { file: 'rose-heights-ground-floor-plan.jpg.jpeg', title: 'Ground floor plan', type: 'Floor plan' },
  { file: 'rose-heights-first-floor-plan.jpg.jpeg', title: 'First floor plan', type: 'Floor plan' },
  { file: 'rose-heights-second-floor-plan.jpg.jpeg', title: 'Second floor plan', type: 'Floor plan' },
  { file: 'rose-heights-third-floor-plan.jpg.jpeg', title: 'Third floor plan', type: 'Floor plan' },
  { file: 'rose-heights-fourth-floor-plan.jpg.jpeg', title: 'Fourth floor plan', type: 'Floor plan' },
  { file: 'rose-heights-fifth-floor-plan.jpg.jpeg', title: 'Fifth floor plan', type: 'Floor plan' },
  { file: 'rose-heights-apartments-render.jpg.jpeg', title: 'Rose Heights apartments', type: 'Architectural render' },
]

const projects = [
  {
    name: 'Grand Entrance Hall',
    location: 'Lahore, Pakistan',
    type: 'Completed · Residential interior',
    status: 'Completed',
    image: '/projects/residence-completed-01.jpg.jpeg',
    alt: 'Completed grand entrance hall with chandelier, marble flooring and gold detailing',
    className: 'project-card--wide',
  },
  {
    name: 'Rose Heights',
    location: 'Rose Town, Lahore',
    type: 'Multi-storey residential apartments',
    status: 'In progress',
    image: '/projects/rose-heights/rose-heights-elevation-views.jpg.jpeg',
    alt: 'Rose Heights apartment building elevation design',
    className: '',
  },
  {
    name: 'Grand Staircase',
    location: 'Lahore, Pakistan',
    type: 'Completed · Residential interior',
    status: 'Completed',
    image: '/projects/residence-completed-02.jpg.jpeg',
    alt: 'Completed double-height entrance with ornate staircase, chandelier and decorative railings',
    className: '',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [projectFilter, setProjectFilter] = useState('All')
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(null)
  const visibleProjects = projectFilter === 'All'
    ? projects
    : projects.filter((project) => project.status === projectFilter)

  const closeMenu = () => setMenuOpen(false)

  const sendEnquiry = (event) => {
    event.preventDefault()
    const data = new FormData(event.currentTarget)
    const message = [
      'Assalam-o-Alaikum RB Creative, I would like to discuss a project.',
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Service: ${data.get('service')}`,
      `Project details: ${data.get('details')}`,
    ].join('\n')
    window.open(`https://wa.me/923218893371?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer')
  }

  return (
    <main>
      <div className="topline">
        <div className="container topline__inner">
          <span>Construction &amp; Builders · Lahore, Pakistan</span>
          <a href="tel:+923218893371">Call us <span>+92 321 8893371</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="container header__inner">
          <a className="brand" href="#home" onClick={closeMenu} aria-label="RB Creative home">
            <img className="brand__logo" src="/rb-creative-logo.svg" alt="" />
            <span className="brand__wordmark">RB <b>CREATIVE</b><small>CONSTRUCTION &amp; BUILDERS</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span /><span />
          </button>
          <nav className={`main-nav${menuOpen ? ' main-nav--open' : ''}`} aria-label="Main navigation">
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#services" onClick={closeMenu}>Services</a>
            <a href="#projects" onClick={closeMenu}>Projects</a>
            <a className="nav-contact" href="#contact" onClick={closeMenu}>Let's talk <span>↗</span></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="hero__image" role="img" aria-label="Beautifully finished luxury home interior" />
        <div className="hero__shade" />
        <div className="container hero__content">
          <p className="eyebrow eyebrow--light"><span /> Building with trust &amp; quality</p>
          <h1>Spaces made<br />for <em>living well.</em></h1>
          <p className="hero__description">From your first idea to the final finishing touch, RB Creative brings quality construction and considered design together.</p>
          <div className="hero__actions">
            <a className="button button--gold" href="#projects">Explore our work <span>↗</span></a>
            <a className="hero__link" href="#contact">Discuss your project <span>→</span></a>
          </div>
        </div>
        <div className="hero__caption"><span>01 / 03</span><span>Considered design. Lasting quality.</span></div>
        <a className="scroll-cue" href="#about" aria-label="Scroll to learn about us">↓</a>
      </section>

      <section className="intro" id="about">
        <div className="container intro__grid">
          <p className="eyebrow"><span /> Who we are</p>
          <div className="intro__copy">
            <h2>Built on care.<br />Made to <em>last.</em></h2>
            <div className="intro__details">
              <p>At RB Creative, we believe a great project is more than bricks and plans. It is clear communication, skilled work and the confidence that every detail is in good hands.</p>
              <p>Based in Lahore, we bring residential construction, renovation and finishing together under one committed team.</p>
              <a className="text-link" href="#services">What we do <span>↗</span></a>
            </div>
          </div>
        </div>
      </section>

      <section className="projects section-dark" id="projects">
        <div className="container">
          <div className="section-heading section-heading--light">
            <div>
              <p className="eyebrow eyebrow--light"><span /> Selected work</p>
              <h2>Made with purpose.<br /><em>Built with pride.</em></h2>
            </div>
            <p className="section-heading__note">A look at the spaces we have brought to life—and the work currently taking shape.</p>
          </div>
          <div className="project-filters" aria-label="Filter projects">
            {['All', 'Completed', 'In progress'].map((filter) => (
              <button
                className={projectFilter === filter ? 'project-filter project-filter--active' : 'project-filter'}
                key={filter}
                type="button"
                aria-pressed={projectFilter === filter}
                onClick={() => setProjectFilter(filter)}
              >
                {filter}<span>{filter === 'All' ? projects.length : projects.filter((project) => project.status === filter).length}</span>
              </button>
            ))}
          </div>
          <div className="project-grid">
            {visibleProjects.map((project, index) => (
              <article className={`project-card ${project.className}`} key={project.name}>
                <div className="project-card__image-wrap">
                  <img
                    src={project.image}
                    alt={project.alt}
                    loading={index === 0 ? 'eager' : 'lazy'}
                    onError={(event) => {
                      if (project.fallbackImage) {
                        event.currentTarget.onerror = null
                        event.currentTarget.src = project.fallbackImage
                      } else {
                        event.currentTarget.hidden = true
                        event.currentTarget.nextElementSibling.hidden = false
                      }
                    }}
                  />
                  <span className="project-card__missing" hidden>{project.name}<br />Add its photo to frontend/public{project.image}</span>
                  <span className={`project-status${project.status === 'In progress' ? ' project-status--active' : ''}`}>
                    <i />{project.status}
                  </span>
                  <span className="project-card__index">0{index + 1}</span>
                </div>
                <div className="project-card__info">
                  <div><p>{project.type}</p><h3>{project.name}</h3></div>
                  <span className="project-card__location">{project.location}</span>
                </div>
              </article>
            ))}
          </div>
          {projectFilter !== 'Completed' && (
            <section className="project-gallery" id="rose-heights-gallery" aria-labelledby="rose-gallery-title">
              <div className="project-gallery__heading">
                <div>
                  <p className="eyebrow eyebrow--light"><span /> In-progress project · Rose Town, Lahore</p>
                  <h3 id="rose-gallery-title">Rose Heights <em>project gallery</em></h3>
                </div>
                <p>Building elevations, project features and apartment floor plans.</p>
              </div>
              <div className="project-gallery__grid">
                {roseHeightsGallery.map((image) => (
                  <button
                    className="project-gallery__item"
                    key={image.file}
                    type="button"
                    onClick={() => setSelectedGalleryImage(image)}
                    aria-label={`View ${image.title}`}
                  >
                    <img
                      src={`/projects/rose-heights/${image.file}`}
                      alt={image.title}
                      loading="lazy"
                      onError={(event) => {
                        event.currentTarget.hidden = true
                        event.currentTarget.nextElementSibling.hidden = false
                      }}
                    />
                    <span className="project-gallery__missing" hidden>Image file not added yet</span>
                    <span className="project-gallery__caption"><small>{image.type}</small>{image.title}<b>↗</b></span>
                  </button>
                ))}
              </div>
            </section>
          )}
          <div className="projects__footnote"><span /> Currently on site <b>Rose Heights · Lahore</b><span className="projects__line" /></div>
        </div>
      </section>

      {selectedGalleryImage && (
        <div className="image-viewer" role="presentation" onClick={() => setSelectedGalleryImage(null)}>
          <div className="image-viewer__panel" role="dialog" aria-modal="true" aria-label={selectedGalleryImage.title} onClick={(event) => event.stopPropagation()}>
            <button className="image-viewer__close" type="button" onClick={() => setSelectedGalleryImage(null)} aria-label="Close image viewer">×</button>
            <img src={`/projects/rose-heights/${selectedGalleryImage.file}`} alt={selectedGalleryImage.title} />
            <p>{selectedGalleryImage.type} <b>{selectedGalleryImage.title}</b></p>
          </div>
        </div>
      )}

      <section className="services" id="services">
        <div className="container">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> What we do</p>
              <h2>One team, from<br />plan to <em>finish.</em></h2>
            </div>
            <p className="section-heading__note">Whether you are building new or improving what you have, we make the process feel clear, considered and dependable.</p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.number}>
                <span className="service-row__number">{service.number}</span>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
                <a href="#contact" aria-label={`Enquire about ${service.title}`}>↗</a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="quote-band">
        <div className="container quote-band__inner">
          <p className="eyebrow eyebrow--light"><span /> Your next chapter starts here</p>
          <h2>Have a place in mind?<br /><em>Let's build it together.</em></h2>
          <a className="button button--outline" href="#contact">Start a conversation <span>↗</span></a>
        </div>
      </section>

      <section className="contact" id="contact">
        <div className="container contact__grid">
          <div className="contact__intro">
            <p className="eyebrow"><span /> Get in touch</p>
            <h2>Let's talk about<br /><em>your project.</em></h2>
            <p className="contact__blurb">Tell us what you are planning. We will get back to you to talk through the next steps.</p>
            <div className="contact__details">
              <a href="tel:+923218893371"><span>Phone</span>+92 321 8893371 <b>↗</b></a>
              <a href="mailto:ramzan.babar@icloud.com"><span>Email</span>ramzan.babar@icloud.com <b>↗</b></a>
              <p><span>Based in</span>Lahore, Pakistan</p>
            </div>
          </div>
          <form className="contact-form" onSubmit={sendEnquiry}>
            <h3>Request a consultation</h3>
            <p>Share a few details and we will continue the conversation on WhatsApp.</p>
            <label>Your name<input name="name" placeholder="e.g. Ali Khan" autoComplete="name" required /></label>
            <label>Phone number<input name="phone" type="tel" placeholder="03XX XXXXXXX" autoComplete="tel" required /></label>
            <label>Service required
              <select name="service" defaultValue="" required>
                <option value="" disabled>Select a service</option>
                {services.map((service) => <option key={service.number}>{service.title}</option>)}
              </select>
            </label>
            <label>Tell us about your project<textarea name="details" placeholder="Location, size, goals, or anything helpful..." rows="3" required /></label>
            <button className="button button--gold contact-form__submit" type="submit">Send enquiry on WhatsApp <span>↗</span></button>
          </form>
        </div>
      </section>

      <footer className="site-footer">
        <div className="container footer__top">
          <a className="brand brand--footer" href="#home" aria-label="RB Creative home">
            <img className="brand__logo" src="/rb-creative-logo.svg" alt="" />
            <span className="brand__wordmark">RB <b>CREATIVE</b><small>CONSTRUCTION &amp; BUILDERS</small></span>
          </a>
          <p>Thoughtful spaces. Quality construction.<br />Lahore, Pakistan.</p>
          <a className="footer__top-link" href="#home">Back to top ↑</a>
        </div>
        <div className="container footer__bottom">
          <span>© {new Date().getFullYear()} RB Creative. All rights reserved.</span>
          <span>Built on trust. Built to last.</span>
        </div>
      </footer>
    </main>
  )
}

export default App