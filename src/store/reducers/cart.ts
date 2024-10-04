import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Game } from '../../pages/Home'

type CartState = {
  items: Game[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<Game>) => {
      const game = state.items.find((i) => i.id === action.payload.id)

      if (!game) {
        state.items.push(action.payload)
      } else {
        alert('Jogo já adicionado!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((i) => i.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer
