import { useState } from 'react'
import Header from './components/Header.jsx'
import PageIntro from './components/PageIntro.jsx'
import SummaryCard from './components/SummaryCard.jsx'
import VillainForm from './components/VillainForm.jsx'
import VillainList from './components/VillainList.jsx'
import { initialVillains } from './data/villains.js'

export default function App() {
  const [villains, setVillains] = useState(initialVillains)

  function addVillain(villainDetails) {
    setVillains((currentVillains) => [
      { ...villainDetails, id: crypto.randomUUID() },
      ...currentVillains,
    ])
  }

  function deleteVillain(id) {
    setVillains((currentVillains) => currentVillains.filter((villain) => villain.id !== id))
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <PageIntro />
        <SummaryCard villains={villains} />

        <div className="workspace-grid">
          <section className="panel form-panel" aria-labelledby="form-heading">
            <div className="section-heading">
              <div>
                <p className="section-kicker">TAMBAHKAN CATATAN</p>
                <h2 id="form-heading">Villain baru</h2>
              </div>
              <span className="heading-icon" aria-hidden="true">+</span>
            </div>
            <VillainForm onAdd={addVillain} />
          </section>

          <section className="list-section" aria-labelledby="list-heading">
            <div className="section-heading list-heading">
              <div>
                <p className="section-kicker">DATABASE KARAKTER</p>
                <h2 id="list-heading">Daftar Villain</h2>
              </div>
              <span className="list-count">{villains.length} DATA</span>
            </div>
            <VillainList villains={villains} onDelete={deleteVillain} />
          </section>
        </div>
      </main>
      <footer className="site-footer">GrowSimulator <span>·</span> Growtopia practice hub</footer>
    </div>
  )
}
