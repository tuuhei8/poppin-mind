import { Link } from 'react-router-dom'

export default function MentalCoaching() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Service</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Mental Coaching
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            Strengthen your mindset, sharpen your focus, and build the mental
            resilience to thrive in any area of life.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">🧠</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>What is mental coaching?</h2>
              <p>
                Mental coaching is a structured, goal-oriented process that
                helps you understand and optimise your thinking patterns. It's
                about learning to work with your mind rather than against it —
                building clarity, confidence, and focus.
              </p>
              <p>
                Whether you're preparing for a challenge, managing stress, or
                simply wanting to feel more in control of your thoughts, mental
                coaching provides practical tools and strategies.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">💡</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>Who is it for?</h2>
              <p>
                Mental coaching is suitable for anyone who wants to:
              </p>
              <ul>
                <li>Develop stronger focus and concentration</li>
                <li>Build resilience in the face of challenges</li>
                <li>Manage stress and overthinking</li>
                <li>Increase self-confidence and self-belief</li>
                <li>Prepare mentally for important events or transitions</li>
                <li>Break free from limiting thought patterns</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">What You'll Experience</span>
            <h2 className="section-header__title">A typical session</h2>
          </div>
          <div className="values-grid">
            <div className="value-card fade-in fade-in-delay-1">
              <div className="value-card__icon">🔍</div>
              <h3>Explore</h3>
              <p>We examine your current mindset, identify patterns, and understand what's holding you back.</p>
            </div>
            <div className="value-card fade-in fade-in-delay-2">
              <div className="value-card__icon">🛠️</div>
              <h3>Equip</h3>
              <p>You receive practical mental tools and techniques you can apply immediately in your daily life.</p>
            </div>
            <div className="value-card fade-in fade-in-delay-3">
              <div className="value-card__icon">🚀</div>
              <h3>Empower</h3>
              <p>With each session, you grow more confident, focused, and capable of managing your mental landscape.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Ready to strengthen your mindset?</h2>
            <p>Let's start with a conversation. No commitment required.</p>
            <Link to="/contact" className="btn btn--primary">Book a Session</Link>
          </div>
        </div>
      </section>
    </>
  )
}
