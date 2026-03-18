import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import qualificationService from '../../services/qualifications'

export default function About() {
  const [qualifications, setQualifications] = useState([])

  useEffect(() => {
    qualificationService.getAll().then(qualifications =>
      setQualifications(qualifications)
    )
  }, [])

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">About</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            The person behind Popping Mind
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            A foundation of academic expertise, real-world experience, and
            genuine care for every individual.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block">
            <div className="content-block__visual fade-in">
              🌿
            </div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>A background rooted in understanding people</h2>
              <p>
                The founder of Popping Mind brings a rich academic and
                professional background in psychology and education. With
                experience teaching psychology and working in the field of
                special education, they have developed a deep understanding of
                how people think, learn, and grow.
              </p>
              <p>
                Holding two master's degrees, they combine scholarly knowledge
                with practical, empathetic coaching methods. This unique blend
                ensures that every session is both grounded in evidence and
                shaped by genuine human connection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <div className="section-header text-center fade-in">
            <span className="section-header__tag">Qualifications</span>
            <h2 className="section-header__title">Training & Expertise</h2>
          </div>

          <div className="qualifications-list">
            {[
              {
                icon: '🎓',
                title: 'Two Master\'s Degrees',
                desc: 'Advanced academic training providing a strong theoretical and practical foundation.',
              },
              {
                icon: '📚',
                title: 'Psychology Teaching',
                desc: 'Experience teaching psychology, deepening expertise in human behaviour and cognition.',
              },
              {
                icon: '🤲',
                title: 'Special Education',
                desc: 'Work in special education, building skills in adaptive, empathetic support.',
              },
              {
                icon: '🧠',
                title: 'Mental Coaching Certification',
                desc: 'Qualified mental coach with training in resilience, focus, and mindset development.',
              },
              {
                icon: '🎯',
                title: 'Solution-Focused Methods',
                desc: 'Trained in solution-focused coaching and brief therapy approaches.',
              },
              {
                icon: '🐾',
                title: 'Animal-Assisted Interventions',
                desc: 'Qualified to integrate animals into coaching sessions for deeper engagement.',
              },
            ].map((q) => (
              <div className="qualification-item fade-in" key={q.title}>
                <div className="qualification-item__icon">{q.icon}</div>
                <div>
                  <h4>{q.title}</h4>
                  <p>{q.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="content-block content-block--reverse">
            <div className="content-block__visual fade-in">
              ☀️
            </div>
            <div className="content-block__body fade-in fade-in-delay-1">
              <h2>My approach</h2>
              <p>
                I believe that every person already holds the resources they
                need. My role is to create a warm, safe space where you can
                access those resources and build on them.
              </p>
              <p>
                Whether you're navigating a life transition, seeking clarity on
                your goals, or working through challenges, I meet you where
                you are — without judgement, with full confidentiality, and
                with genuine care for your wellbeing.
              </p>
              <Link to="/contact" className="btn btn--primary" style={{ marginTop: '1rem' }}>
                Let's Talk
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
