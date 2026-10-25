export default function VillainCard({ villain, onDelete }) {
  return (
    <article className="villain-card">
      <div className="villain-card-topline">
        <span className={`type-pill ${villain.category.toLowerCase()}`}>{villain.category}</span>
        <button
          className="delete-button"
          type="button"
          onClick={() => onDelete(villain.id)}
          aria-label={`Hapus ${villain.name}`}
          title={`Hapus ${villain.name}`}
        >
          Hapus
        </button>
      </div>
      <div className="villain-name-row">
        <h3>{villain.name}</h3>
        <span className="hp-badge"><strong>{villain.hp}</strong> HP</span>
      </div>
      <div className="card-detail">
        <span className="detail-label">KARTU ANDALAN</span>
        <p>{villain.cards}</p>
      </div>
      <div className="strategy-detail">
        <span className="detail-label">STRATEGI</span>
        <p>{villain.strategy}</p>
      </div>
    </article>
  )
}
