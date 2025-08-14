import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

export default function Navbar() {
  const count = useSelector(state => state.cart.items.reduce((a,b) => a + b.quantity, 0))

  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <img src="/leaf.svg" alt="leaf" width="28" height="28" />
          <span>Paradise Nursery</span>
        </Link>
        <nav className="nav-links">
          <NavLink to="/" className={({isActive}) => isActive ? 'badge' : undefined}>Inicio</NavLink>
          <NavLink to="/productos">Productos</NavLink>
          <NavLink to="/carrito">Carrito <span className="badge">{count}</span></NavLink>
        </nav>
      </div>
    </header>
  )
}
