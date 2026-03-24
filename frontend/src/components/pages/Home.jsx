import { Link } from 'react-router-dom'

export default function Home({ services }) {
  return (
    <>
      {/* Hero */}
      <section className="hero">
        <div className="container">
          <div className="hero__content">
            <span className="hero__tag fade-in">Coaching & Brief Therapy</span>
            <h1 className="hero__title fade-in fade-in-delay-1">
              A gentle space for growth, clarity, and change
            </h1>
            <p className="hero__subtitle fade-in fade-in-delay-2">
              Popping Mind offers professional coaching and solution-focused
              brief therapy. Together, we explore your strengths and build
              pathways toward the life you want — at your own pace.
            </p>
            <div className="hero__actions fade-in fade-in-delay-3">
              <Link to="/contact" className="btn btn--primary">Book a Session</Link>
              <Link to="/services" className="btn btn--outline">Explore Services</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">Why Popping Mind</span>
            <h2 className="section-header__title">A safe foundation for your journey</h2>
            <p className="section-header__desc" style={{ margin: '0 auto' }}>
              Every person carries unique strengths. Our role is to help you rediscover them.
            </p>
          </div>

          <div className="values-grid">
            <div className="value-card fade-in fade-in-delay-1">
              <div className="value-card__icon">🤝</div>
              <h3>Trust & Confidentiality</h3>
              <p>
                Everything shared in our sessions remains strictly confidential.
                Your privacy and sense of safety are our highest priority.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-2">
              <div className="value-card__icon">🌱</div>
              <h3>Strengths-Based</h3>
              <p>
                Rather than focusing on problems, we build on what already
                works in your life to create positive, lasting change.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-3">
              <div className="value-card__icon">💛</div>
              <h3>Warm & Professional</h3>
              <p>
                A combination of academic expertise and genuine warmth creates
                a space where you can feel both supported and empowered.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">What We Offer</span>
            <h2 className="section-header__title">Our Services</h2>
            <p className="section-header__desc" style={{ margin: '0 auto' }}>
              Tailored approaches to meet you where you are.
            </p>
          </div>

          <div className="services-grid">
            {services.map((s) => (
              <Link to={s.link} key={s.title} className="service-card fade-in">
                <div className="service-card__icon">{s.icon}</div>
                <h3 className="service-card__title">{s.title}</h3>
                <p className="service-card__text">{s.desc}</p>
                <span className="service-card__link">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Ready to take the first step?</h2>
            <p>
              Reaching out is the hardest part. We're here to make it easy and
              comfortable. Let's have a conversation.
            </p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
