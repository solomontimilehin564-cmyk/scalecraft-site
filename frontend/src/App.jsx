import { useEffect, useState } from 'react'

const API_URL = import.meta.env.VITE_API_URL

export default function App() {
  const [status, setStatus] = useState('Checking backend...')

  useEffect(() => {
    fetch(API_URL + '/')
      .then(res => res.json())
      .then(data => setStatus('Backend connected: ' + data.service))
      .catch(() => setStatus('Backend not reachable'))
  }, [])

  return (
    <main className="placeholder">
      <h1>SCALE CRAFT</h1>
      <p>Crafting Strategies. Scaling Growth.</p>
      <small>{status}</small>
    </main>
  )
}