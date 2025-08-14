import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const loadState = () => {
  try {
    const s = localStorage.getItem('paradise_cart')
    return s ? JSON.parse(s) : undefined
  } catch {
    return undefined
  }
}

const saveState = (state) => {
  try {
    localStorage.setItem('paradise_cart', JSON.stringify(state.cart))
  } catch {}
}

const preloaded = { cart: loadState() ?? { items: [] } }

const store = configureStore({
  reducer: { cart: cartReducer },
  preloadedState: preloaded
})

store.subscribe(() => saveState(store.getState()))

export default store
