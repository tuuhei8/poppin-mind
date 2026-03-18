import { Link } from 'react-router-dom'

export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Pricing</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Transparent, fair pricing
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            Investing in yourself is one of the most valuable things you can do.
            Our pricing is clear and straightforward.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="pricing-grid">
            <div className="pricing-card fade-in fade-in-delay-1">
              <h3 className="pricing-card__title">Online Session</h3>
              <p className="pricing-card__desc">
                Coaching or therapy from the comfort of your own space.
              </p>
              <div className="pricing-card__price">
                €50 <span>/ session</span>
              </div>
              <p className="pricing-card__duration">45 minutes</p>
              <ul className="pricing-card__features">
                <li>Video call via a secure platform</li>
                <li>Flexible scheduling</li>
                <li>Available for all service types</li>
                <li>Suitable for follow-up sessions</li>
              </ul>
              <Link to="/contact" className="btn btn--outline" style={{ width: '100%', textAlign: 'center' }}>
                Book Online Session
              </Link>
            </div>

            <div className="pricing-card pricing-card--featured fade-in fade-in-delay-2">
              <h3 className="pricing-card__title">In-Person Session</h3>
              <p className="pricing-card__desc">
                Face-to-face coaching in a calm, welcoming environment.
              </p>
              <div className="pricing-card__price">
                €60 <span>/ session</span>
              </div>
              <p className="pricing-card__duration">60 minutes</p>
              <ul className="pricing-card__features">
                <li>Private, comfortable setting</li>
                <li>Full hour of dedicated time</li>
                <li>Available for all service types</li>
                <li>Includes animal-assisted options</li>
              </ul>
              <Link to="/contact" className="btn btn--primary" style={{ width: '100%', textAlign: 'center' }}>
                Book In-Person Session
              </Link>
            </div>

            <div className="pricing-card fade-in fade-in-delay-3">
              <h3 className="pricing-card__title">Introductory Call</h3>
              <p className="pricing-card__desc">
                A free, no-obligation conversation to see if we're a good fit.
              </p>
              <div className="pricing-card__price">
                Free
              </div>
              <p className="pricing-card__duration">15–20 minutes</p>
              <ul className="pricing-card__features">
                <li>Get to know each other</li>
                <li>Discuss your needs and goals</li>
                <li>Ask any questions you have</li>
                <li>No commitment required</li>
              </ul>
              <Link to="/contact" className="btn btn--outline" style={{ width: '100%', textAlign: 'center' }}>
                Schedule Free Call
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">Good to Know</span>
            <h2 className="section-header__title">Frequently asked questions</h2>
          </div>

          <div className="values-grid">
            <div className="value-card fade-in fade-in-delay-1">
              <div className="value-card__icon">📅</div>
              <h3>How do I schedule?</h3>
              <p>
                Use our contact form or reach out by email. We'll find a time
                that works for both of us.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-2">
              <div className="value-card__icon">🔄</div>
              <h3>Can I cancel or reschedule?</h3>
              <p>
                Yes — we ask for at least 24 hours' notice for cancellations
                or rescheduling. Life happens, and we understand.
              </p>
            </div>
            <div className="value-card fade-in fade-in-delay-3">
              <div className="value-card__icon">💳</div>
              <h3>How do I pay?</h3>
              <p>
                Payment details are shared after booking. We accept bank
                transfer and common online payment methods.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Questions about pricing?</h2>
            <p>We're happy to discuss options. Reach out anytime.</p>
            <Link to="/contact" className="btn btn--primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
