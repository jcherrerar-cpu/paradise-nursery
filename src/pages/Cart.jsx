import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import CartItem from '../components/CartItem'
import { clearCart } from '../redux/cartSlice'

const format = n => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

export default function Cart() {
  const items = useSelector(state => state.cart.items)
  const dispatch = useDispatch()
  const total = items.reduce((a,b) => a + b.price * b.quantity, 0)

  const handleCheckout = () => {
    alert('Simulación de pago: ¡Gracias por tu compra!')
    dispatch(clearCart())
  }

  return (
    <div className="container">
      <h2 className="section-title">Tu Carrito</h2>
      {items.length === 0 ? (
        <div style={{background:'white', border:'1px solid #e2e8f0', borderRadius:'.75rem', padding:'1rem'}}>
          <p>No hay productos en el carrito.</p>
          <Link className="btn primary" to="/productos">Continuar Comprando</Link>
        </div>
      ) : (
        <div className="cart">
          <div style={{display:'grid', gap:'.8rem'}}>
            {items.map(it => <CartItem key={it.id} item={it} />)}
          </div>
          <aside className="summary">
            <h3>Resumen</h3>
            <div style={{display:'flex', justifyContent:'space-between', margin:'.5rem 0'}}>
              <span>Artículos</span>
              <span>{items.reduce((a,b)=>a+b.quantity,0)}</span>
            </div>
            <div style={{display:'flex', justifyContent:'space-between', margin:'.5rem 0', fontWeight:700}}>
              <span>Total</span>
              <span>{format(total)}</span>
            </div>
            <div style={{display:'grid', gap:'.5rem', marginTop:'1rem'}}>
              <button className="btn primary" onClick={handleCheckout}>Pagar</button>
              <Link className="btn" to="/productos">Continuar Comprando</Link>
            </div>
          </aside>
        </div>
      )}
    </div>
  )
}
