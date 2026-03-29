import { Link } from "react-router-dom"

export default function ContactBanner({ title, text, button }) {
  return (
    <section className="section">
      <div className="container">
        <div className="cta-banner fade-in">
          <h2>{title}</h2>
          <p>{text}</p>
          <Link to="/contact" className="btn btn--primary">{button}</Link>
        </div>
      </div>
    </section>
  )
}