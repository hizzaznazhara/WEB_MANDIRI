import VillainCard from './VillainCard.jsx'

export default function VillainList({ villains, onDelete }) {
  if (villains.length === 0) {
    return (
      <div className="empty-state" role="status">
        <span className="empty-icon" aria-hidden="true">⌕</span>
        <h3>Belum ada data Villain</h3>
        <p>Tambahkan karakter pertama lewat form di samping.</p>
      </div>
    )
  }

  return (
    <div className="villain-list">
      {villains.map((villain) => (
        <VillainCard key={villain.id} villain={villain} onDelete={onDelete} />
      ))}
    </div>
  )
}
