import { Link } from 'react-router-dom'

export default function AnimalAssistedCoaching() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Service</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Animal-Assisted Coaching
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            Experience the unique power of working alongside animals to
            foster emotional awareness, presence, and personal growth.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">🐾</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>What is animal-assisted coaching?</h2>
              <p>
                Animal-assisted coaching integrates the presence of trained
                animals into the coaching process. Animals are naturally
                non-judgemental and attuned to emotion, making them powerful
                partners in creating a safe, grounding atmosphere.
              </p>
              <p>
                Working with animals can help lower stress, increase
                emotional awareness, and offer fresh perspectives on
                patterns in how you relate to others and yourself.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">🌿</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>How does it work?</h2>
              <p>
                During a session, you'll interact with animals in structured
                activities guided by your coach. These activities are designed
                to bring out insights that might not surface in a traditional
                conversation.
              </p>
              <ul>
                <li>Builds emotional regulation and awareness</li>
                <li>Encourages presence and mindfulness</li>
                <li>Reveals relational patterns through non-verbal interaction</li>
                <li>Reduces anxiety and creates a calming environment</li>
                <li>Accessible for all ages and backgrounds</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">❤️</div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>Who is it for?</h2>
              <p>
                Animal-assisted coaching is especially beneficial for people
                who find traditional talk-based approaches challenging,
                children and young people, or anyone who feels a natural
                connection with animals.
              </p>
              <p>
                It's also a wonderful complement to other coaching or
                therapeutic approaches. Sessions can be combined with mental
                coaching or solution-focused methods for a holistic
                experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-banner fade-in">
            <h2>Curious about animal-assisted coaching?</h2>
            <p>Let's talk about how this unique approach could work for you.</p>
            <Link to="/contact" className="btn btn--primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
