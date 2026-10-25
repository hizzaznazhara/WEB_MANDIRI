export default function SummaryCard({ villains }) {
  const categoryCounts = villains.reduce((counts, villain) => {
    counts[villain.category] = (counts[villain.category] ?? 0) + 1
    return counts
  }, {})

  return (
    <section className="summary-card" aria-label="Ringkasan data Villain">
      <div className="summary-copy">
        <span className="summary-icon" aria-hidden="true">✦</span>
        <div>
          <p className="summary-label">TOTAL KARAKTER</p>
          <p className="summary-total">{villains.length}<span> karakter tersimpan</span></p>
        </div>
      </div>
      <div className="summary-breakdown">
        {Object.entries(categoryCounts).map(([category, count]) => (
          <span key={category}>
            <i className={`category-dot ${category.toLowerCase()}-dot`} /> {count} {category}
          </span>
        ))}
      </div>
    </section>
  )
}
