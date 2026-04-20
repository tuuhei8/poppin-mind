export default function ContentList({ content }) {
  if (!content.list || content.list.length === 0) {
    return null
  }

  return (
    <ul>
      {content.list.map((item) => <li key={item}>{item}</li>)}
    </ul>
  )
}