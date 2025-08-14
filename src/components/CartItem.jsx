import { useDispatch } from 'react-redux'
import { increaseQty, decreaseQty, removeFromCart } from '../redux/cartSlice'

const format = n => n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN' })

export default function CartItem({ item }) {
  const dispatch = useDispatch()
  const total = item.price * item.quantity

  return (
    <div className="cart-item">
      <img src={item.image} alt={item.name} width="100" height="100" style={{borderRadius:'.5rem', objectFit:'cover', height:'100px'}} />
      <div>
        <h4 style={{margin:'0 0 .25rem 0'}}>{item.name}</h4>
        <div style={{display:'flex', gap:'1rem', alignItems:'center', flexWrap:'wrap'}}>
          <span>Unitario: <strong>{format(item.price)}</strong></span>
          <span>Total: <strong>{format(total)}</strong></span>
        </div>
        <div style={{marginTop:'.5rem', display:'flex', gap:'.5rem', alignItems:'center'}}>
          <div className="qty">
            <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
          </div>
          <button className="btn" onClick={() => dispatch(removeFromCart(item.id))}>Eliminar</button>
        </div>
      </div>
      <div style={{justifySelf:'end', fontWeight:700}}>{format(total)}</div>
    </div>
  )
}
