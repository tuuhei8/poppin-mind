import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="page-hero">
        <div className="container">
          <h1 className="page-hero__title">
            404
          </h1>
          <p className="page-hero__subtitle">
            The page you are trying to access isn't here, return to  <strong style={ { color: 'darkgreen' } }><Link to="/">homepage</Link></strong>?
          </p>
        </div>
      </section>
  )
}