import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__inner">
          <div className="footer__brand">
            <h3>Popping <span>Mind</span></h3>
            <p>
              Professional coaching and solution-focused brief therapy to help
              you discover your strengths, overcome obstacles, and create
              meaningful change in your life.
            </p>
          </div>

          <div className="footer__col">
            <h4>Services</h4>
            <ul>
              <li><Link to="/services/mental-coaching">Mental Coaching</Link></li>
              <li><Link to="/services/solution-focused-coaching">Solution-Focused Coaching</Link></li>
              <li><Link to="/services/solution-focused-brief-therapy">Brief Therapy</Link></li>
              <li><Link to="/services/animal-assisted-coaching">Animal-Assisted Coaching</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/pricing">Pricing</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          &copy; {new Date().getFullYear()} Popping Mind. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
