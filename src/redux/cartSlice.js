import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [], // {id, name, price, image, quantity}
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = action.payload
      const existing = state.items.find(i => i.id === item.id)
      if (existing) {
        existing.quantity += 1
      } else {
        state.items.push({ ...item, quantity: 1 })
      }
    },
    removeFromCart: (state, action) => {
      const id = action.payload
      state.items = state.items.filter(i => i.id !== id)
    },
    increaseQty: (state, action) => {
      const id = action.payload
      const found = state.items.find(i => i.id === id)
      if (found) found.quantity += 1
    },
    decreaseQty: (state, action) => {
      const id = action.payload
      const found = state.items.find(i => i.id === id)
      if (found) {
        found.quantity -= 1
        if (found.quantity <= 0) {
          state.items = state.items.filter(i => i.id !== id)
        }
      }
    },
    clearCart: (state) => {
      state.items = []
    }
  }
})

export const { addToCart, removeFromCart, increaseQty, decreaseQty, clearCart } = cartSlice.actions
export default cartSlice.reducer
