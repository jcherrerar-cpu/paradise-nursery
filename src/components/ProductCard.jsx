import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/cartSlice'

export default function ProductCard({ plant }) {
  const dispatch = useDispatch()
  const handleAdd = () => {
    dispatch(addToCart({
      id: plant.id,
      name: plant.name,
      price: plant.price,
      image: plant.image
    }))
  }

  return (
    <article className="card">
      <img src={plant.image} alt={plant.name} loading="lazy" />
      <div className="content">
        <h3>{plant.name}</h3>
        <p>{plant.description}</p>
        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between'}}>
          <span className="price">${'{'}plant.price{'}'}</span>
          <button className="btn primary" onClick={handleAdd}>Agregar al carrito</button>
        </div>
      </div>
    </article>
  )
}
