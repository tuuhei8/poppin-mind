import ContentList from './ContentList'

export default function ContentBlock({ content }) {
  return (
    <section className="section">
      <div className="container">
        <div className="content-block">
          <div className="content-block__visual fade-in">
            {content.icon}
          </div>
          <div className="content-block__body fade-in fade-in-delay-1">
            <h2>{content.title}</h2>
            <p>{content.p1}</p>
            <p>{content.p2}</p>
            <ContentList content={content} />
          </div>
        </div>
      </div>
    </section>
  )
}