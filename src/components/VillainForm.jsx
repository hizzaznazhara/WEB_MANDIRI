import { useState } from 'react'

const emptyForm = {
  name: '',
  category: 'Villain',
  hp: '',
  cards: '',
  strategy: '',
}

export default function VillainForm({ onAdd }) {
  const [form, setForm] = useState(emptyForm)

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({ ...currentForm, [name]: value }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    onAdd({ ...form, hp: Number(form.hp) })
    setForm(emptyForm)
  }

  return (
    <form className="villain-form" onSubmit={handleSubmit}>
      <label className="field-label" htmlFor="villain-name">Nama karakter</label>
      <input
        id="villain-name"
        name="name"
        type="text"
        placeholder="Contoh: Ms. Terry"
        value={form.name}
        onChange={handleChange}
        maxLength={50}
        required
      />

      <div className="field-row">
        <div>
          <label className="field-label" htmlFor="villain-category">Kategori</label>
          <select id="villain-category" name="category" value={form.category} onChange={handleChange}>
            <option>Villain</option>
            <option>Mastermind</option>
            <option>Supervillain</option>
          </select>
        </div>
        <div>
          <label className="field-label" htmlFor="villain-hp">Health (HP)</label>
          <input
            id="villain-hp"
            name="hp"
            type="number"
            min="1"
            max="999"
            placeholder="8"
            value={form.hp}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <label className="field-label" htmlFor="villain-cards">Kartu andalan</label>
      <input
        id="villain-cards"
        name="cards"
        type="text"
        placeholder="Contoh: Frozen Mirror, Ice Shards"
        value={form.cards}
        onChange={handleChange}
        maxLength={100}
        required
      />

      <label className="field-label" htmlFor="villain-strategy">Strategi singkat</label>
      <textarea
        id="villain-strategy"
        name="strategy"
        rows="3"
        placeholder="Tulis urutan kartu atau tips untuk menghadapinya..."
        value={form.strategy}
        onChange={handleChange}
        maxLength={220}
        required
      />

      <button className="add-button" type="submit"><span aria-hidden="true">+</span> Tambah ke direktori</button>
      <p className="form-note">Data baru langsung masuk ke daftar di halaman ini.</p>
    </form>
  )
}
