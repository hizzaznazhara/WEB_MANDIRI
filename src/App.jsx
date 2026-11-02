import { useEffect, useState } from 'react'
import Header from './components/Header.jsx'
import PageIntro from './components/PageIntro.jsx'
import SummaryCard from './components/SummaryCard.jsx'
import VillainForm from './components/VillainForm.jsx'
import VillainList from './components/VillainList.jsx'

const VILLAINS_API = 'https://6ae8aafa1a7b15aaa50f5d25.mockapi.io/api/v1/villains'

function extractVillains(payload) {
  if (Array.isArray(payload)) return payload
  if (Array.isArray(payload?.value)) return payload.value
  if (Array.isArray(payload?.data)) return payload.data
  return []
}

async function requestVillains(url = VILLAINS_API, options = {}) {
  const response = await fetch(url, {
    ...options,
    headers: {
      ...(options.body ? { 'Content-Type': 'application/json' } : {}),
      ...options.headers,
    },
  })

  if (!response.ok) {
    throw new Error(`Permintaan API gagal (${response.status}). Coba lagi sebentar.`)
  }

  if (response.status === 204) return null
  return response.json()
}

export default function App() {
  const [villains, setVillains] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  async function refreshVillains() {
    const payload = await requestVillains()
    setVillains(extractVillains(payload))
  }

  useEffect(() => {
    let isCurrent = true

    requestVillains()
      .then((payload) => {
        if (isCurrent) setVillains(extractVillains(payload))
      })
      .catch((requestError) => {
        if (isCurrent) setError(requestError.message)
      })
      .finally(() => {
        if (isCurrent) setLoading(false)
      })

    return () => { isCurrent = false }
  }, [])

  async function addVillain(villainDetails) {
    setError('')
    try {
      await requestVillains(VILLAINS_API, {
        method: 'POST',
        body: JSON.stringify(villainDetails),
      })
      await refreshVillains()
      return true
    } catch (requestError) {
      setError(requestError.message)
      return false
    }
  }

  async function deleteVillain(id) {
    setError('')
    try {
      await requestVillains(`${VILLAINS_API}/${encodeURIComponent(id)}`, { method: 'DELETE' })
      await refreshVillains()
    } catch (requestError) {
      setError(requestError.message)
    }
  }

  return (
    <div className="app-shell">
      <Header />
      <main className="main-content">
        <PageIntro />
        {error && <p className="api-error" role="alert">{error}</p>}
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
            <VillainList villains={villains} onDelete={deleteVillain} loading={loading} />
          </section>
        </div>
      </main>
      <footer className="site-footer">GrowSimulator <span>·</span> Growtopia practice hub</footer>
    </div>
  )
}
