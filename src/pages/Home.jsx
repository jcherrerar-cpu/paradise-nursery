import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="container">
      <section style={{display:'grid', gridTemplateColumns:'1.2fr 1fr', gap:'2rem', alignItems:'center'}}>
        <div>
          <h1 style={{fontSize:'2.2rem', marginBottom:'.5rem'}}>Bienvenido a Paradise Nursery</h1>
          <p style={{fontSize:'1.1rem'}}>Tu tienda de plantas de interior: aromáticas, medicinales y más. Explora nuestra colección y arma tu carrito.</p>
          <div style={{display:'flex', gap:'.5rem', marginTop:'1rem'}}>
            <Link className="btn primary" to="/productos">Ver Productos</Link>
            <Link className="btn ghost" to="/carrito">Ir al Carrito</Link>
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?q=80&w=1400&auto=format&fit=crop" alt="plantas" style={{width:'100%', borderRadius:'1rem'}} />
      </section>
    </div>
  )
}
