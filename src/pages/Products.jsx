import ProductCard from '../components/ProductCard'
import { PLANTS, SECTIONS } from '../data/plants'
import { useState } from 'react'

export default function Products() {
  const [section, setSection] = useState('all')
  const filtered = section === 'all' ? PLANTS : PLANTS.filter(p => p.section === section)

  return (
    <div className="container">
      <h2 className="section-title">Productos</h2>
      <div style={{display:'flex', gap:'.5rem', margin:'0 0 1rem 0', flexWrap:'wrap'}}>
        <button className={`btn ${section==='all' ? 'primary':''}`} onClick={() => setSection('all')}>Todas</button>
        {SECTIONS.map(s => (
          <button key={s.id} className={`btn ${section===s.id ? 'primary':''}`} onClick={() => setSection(s.id)}>{s.title}</button>
        ))}
      </div>

      {SECTIONS.map(s => (
        <section key={s.id} style={{marginBottom:'1rem'}}>
          <h3>{s.title}</h3>
          <p style={{marginTop:'.25rem', color:'#475569'}}>{s.description}</p>
          <div className="grid">
            {(section === 'all' ? PLANTS.filter(p=>p.section===s.id) : filtered.filter(p=>p.section===s.id))
              .map(p => <ProductCard key={p.id} plant={p} />)}
          </div>
        </section>
      ))}
    </div>
  )
}
