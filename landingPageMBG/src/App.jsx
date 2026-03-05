import { useEffect, useState } from 'react'
import './App.css'

function App() {
  // State untuk mengelola apakah halaman sudah discroll atau belum
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Cek apakah sudah discroll lebih dari 50px
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
  window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])


  // Data statistik (bisa diubah angkanya di sini)
  const stats = [
    { label: "Jumlah Sekolah", value: "1.240", unit: "Sekolah" },
    { label: "Jumlah SPPG", value: "85", unit: "Satuan" },
    { label: "Jumlah Buruan Sae", value: "320", unit: "Titik" },
    { label: "Indeks Ketahanan Pangan", value: "82.5", unit: "Skor" },
  ]

  return (

    <div classname="main-layout">

      <header className={`navbar ${scrolled ? 'active' : ''}`}>
        <div className="navbar-content">
          <div className="logo">MBG</div>
          <ul className="nav-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#stats">Stats</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </header>

      <div className="container">
        {/* Bagian Header & Penjelasan */}
        <section className="hero">
          <h1>Program Makan Bergizi Gratis (MBG)</h1>
          <p className="description">
            Program MBG bertujuan untuk meningkatkan kualitas sumber daya manusia 
            melalui pemenuhan gizi seimbang bagi siswa di seluruh penjuru daerah. 
            Inisiatif ini mengintegrasikan potensi lokal untuk mendukung ketahanan pangan nasional.
          </p>
        </section>

        {/* Bagian Card Statistik */}
        <div className="stats-grid">
          {stats.map((item, index) => (
            <div key={index} className="stat-card">
              <h3>{item.label}</h3>
              <div className="value">{item.value}</div>
              <span className="unit">{item.unit}</span>
            </div>
          ))}
        </div>

        <footer className="footer">
          <p>© 2026 Monitoring Program MBG</p>
        </footer>
      </div>
    </div>
  )
}

export default App