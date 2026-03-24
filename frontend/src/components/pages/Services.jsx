import { Link } from 'react-router-dom'

export default function Services({ services }) {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Our Services</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            How we can support you
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            We offer a range of professional coaching and therapy services, each
            tailored to meet your unique needs and goals.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {services.map((s, i) => (
              <Link
                to={s.link}
                key={s.title}
                className={`service-card fade-in fade-in-delay-${(i % 4) + 1}`}
              >
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__text">{s.desc}</p>
                <span className="service-card__link">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">Our Approach</span>
            <h2 className="section-header__title">What to expect</h2>
          </div>

          <div className="values-grid">
            <div className="value-card fade-in fade-in-delay-1">
              <div className="value-card__icon">📞</div>
              <h3>1. Initial Conversation</h3>
              <p>
                We start with a brief, informal chat to understand your needs
                and see if we're a good fit. No pressure, no obligations.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-2">
              <div className="value-card__icon">🗺️</div>
              <h3>2. Personalised Plan</h3>
              <p>
                Together, we create a plan tailored to your goals. Every
                session is shaped around what matters most to you.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-3">
              <div className="value-card__icon">🌟</div>
              <h3>3. Growth & Progress</h3>
              <p>
                Step by step, you'll build new insights and skills. Most
                clients notice meaningful shifts within just a few sessions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Not sure which service is right for you?</h2>
            <p>
              That's perfectly okay. Reach out and we'll help you find the best
              fit during a free introductory conversation.
            </p>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
