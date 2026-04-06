export default function PageHero({ tag, title, subtitle }) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="section-header__tag fade-in">{tag}</span>
        <h1 className="page-hero__title fade-in fade-in-delay-1">{title}</h1>
        <p className="page-hero__subtitle fade-in fade-in-delay-2">{subtitle}</p>
      </div>
    </section>
  )
}