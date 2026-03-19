import { Link } from 'react-router-dom'

export default function SolutionFocusedBriefTherapy() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Service</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Solution-Focused Brief Therapy
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            Short-term, structured therapeutic support that helps you create
            meaningful change — efficiently and respectfully.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">💬</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>What is solution-focused brief therapy?</h2>
              <p>
                Solution-Focused Brief Therapy (SFBT) is an evidence-based
                therapeutic approach that concentrates on solutions rather than
                problems. Developed in the 1980s, it has become one of the
                most widely practised forms of brief therapy worldwide.
              </p>
              <p>
                SFBT is designed to be efficient: most courses of therapy
                involve just a few sessions. It respects your time and
                intelligence by trusting that you have the capacity to change
                — and that change can happen quickly when the right conditions
                are in place.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">🌈</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>How is it different from coaching?</h2>
              <p>
                While coaching focuses on personal development and goal
                achievement, brief therapy addresses situations where you may
                be experiencing more significant emotional distress or
                psychological challenges.
              </p>
              <p>
                SFBT provides a safe, professional therapeutic space while
                maintaining the forward-looking, strengths-based philosophy
                that characterises all our work at Popping Mind.
              </p>
              <ul>
                <li>Evidence-based therapeutic framework</li>
                <li>Focuses on what you want, not what went wrong</li>
                <li>Typically 3–8 sessions</li>
                <li>Suitable for a wide range of concerns</li>
                <li>Empowering and respectful of your autonomy</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">🛡️</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>Is it right for me?</h2>
              <p>
                SFBT can help with a broad range of concerns, including
                anxiety, low mood, relationship difficulties, life
                transitions, grief, work-related stress, and more. If you're
                looking for professional therapeutic support that doesn't
                require years of treatment, this might be the right fit.
              </p>
              <p>
                If you're unsure whether coaching or therapy is better suited
                to your situation, we can discuss this together during an
                introductory conversation. There's no pressure to decide in
                advance.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Change doesn't have to take forever</h2>
            <p>A few focused sessions can make a real difference. Let's explore what's possible.</p>
            <Link to="/contact" className="btn btn--primary">Book a Session</Link>
          </div>
        </div>
      </section>
    </>
  )
}
