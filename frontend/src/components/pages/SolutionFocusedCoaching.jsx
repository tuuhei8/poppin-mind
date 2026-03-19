import { Link } from 'react-router-dom'

export default function SolutionFocusedCoaching() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Service</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Solution-Focused Coaching
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            A forward-looking approach that helps you identify what you want
            and find the most direct path to get there.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">🎯</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>What is solution-focused coaching?</h2>
              <p>
                Solution-focused coaching is built on a simple but powerful
                idea: instead of analysing problems in depth, we direct our
                energy toward envisioning and building the future you want.
              </p>
              <p>
                This approach recognises that you are the expert on your own
                life. Through carefully crafted questions and reflections, we
                uncover the strengths and resources you already have — and
                put them to work.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">🗝️</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>How does it work?</h2>
              <p>
                Sessions are structured around your goals. We begin by
                exploring your preferred future — what life looks like when
                things are going well. From there, we identify small,
                achievable steps that move you closer to that vision.
              </p>
              <ul>
                <li>Define clear, meaningful goals</li>
                <li>Recognise what's already working</li>
                <li>Scale your progress and celebrate small wins</li>
                <li>Build momentum through practical action steps</li>
                <li>Develop self-reliance and inner confidence</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">🌟</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>Who benefits from this approach?</h2>
              <p>
                Solution-focused coaching is ideal for people who feel stuck
                but want to move forward, who are navigating transitions, or
                who want support in reaching a specific goal. It works
                particularly well when you already sense that you have the
                answers — you just need the right space to find them.
              </p>
              <p>
                It's also well-suited for anyone who prefers a positive,
                practical approach rather than spending a long time exploring
                past difficulties.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Start focusing on solutions</h2>
            <p>Your next chapter begins with a single conversation.</p>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
