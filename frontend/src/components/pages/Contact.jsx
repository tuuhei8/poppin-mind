import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Front-end demo — no actual submission
    setSubmitted(true)
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="section-header__tag fade-in">Contact</span>
          <h1 className="page-hero__title fade-in fade-in-delay-1">
            Get in touch
          </h1>
          <p className="page-hero__subtitle fade-in fade-in-delay-2">
            Whether you have a question or you're ready to book a session,
            we'd love to hear from you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="fade-in">
              {submitted ? (
                <div className="submitted-message">
                  <div className="submitted-message__icon">✉️</div>
                  <h3>Thank you for reaching out</h3>
                  <p>
                    Your message has been received (demo). In a live
                    environment, you would receive a confirmation and a reply
                    within 24–48 hours.
                  </p>
                </div>
              ) : (
                <div className="contact-form" role="form">
                  <div className="form-group">
                    <label htmlFor="name">Your Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="e.g. Alex Jansen"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="alex@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone (optional)</label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+31 6 1234 5678"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Interested In</label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                    >
                      <option value="">Select a service (optional)</option>
                      <option value="mental-coaching">Mental Coaching</option>
                      <option value="solution-focused-coaching">Solution-Focused Coaching</option>
                      <option value="brief-therapy">Solution-Focused Brief Therapy</option>
                      <option value="animal-assisted">Animal-Assisted Coaching</option>
                      <option value="not-sure">I'm not sure yet</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Your Message</label>
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell us a little about what you're looking for, or ask any questions you have..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="button"
                    className="btn btn--primary"
                    onClick={handleSubmit}
                    style={{ alignSelf: 'flex-start' }}
                  >
                    Send Message
                  </button>
                </div>
              )}
            </div>

            {/* Info */}
            <div className="contact-info fade-in fade-in-delay-2">
              <div className="trust-badge">
                <div className="trust-badge__icon">🔒</div>
                <h3>Your Privacy Matters</h3>
                <p>
                  Everything you share with us — in this form and in our
                  sessions — is treated with the highest level of
                  confidentiality. We adhere to strict professional ethical
                  guidelines. You can speak freely and feel safe.
                </p>
              </div>

              <div className="contact-info__card">
                <h3>📧 Email</h3>
                <p>info@poppingmind.com</p>
              </div>

              <div className="contact-info__card">
                <h3>📍 Location</h3>
                <p>
                  Sessions available online (worldwide) and in person.
                  Contact us for details on our practice location.
                </p>
              </div>

              <div className="contact-info__card">
                <h3>⏰ Response Time</h3>
                <p>
                  We aim to reply within 24–48 hours. If your inquiry is
                  urgent, please indicate this in your message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
