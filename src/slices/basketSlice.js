import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      state.items = [...state.items, action.payload];
    },
    removeFromBasket: (state, action) => {

      const { id } = action.payload;

      let itemIndex = state.items.findIndex(item => item.id === id);
      let newBasket = [...state.items];
      if (itemIndex >= 0) {
        newBasket.splice(itemIndex, 1);
      }

      state.items = newBasket;
    },
  },
});

export const { addToBasket, removeFromBasket } = basketSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectItems = (state) => state.basket.items;

export const selectTotal = (state) => state.basket.items.reduce((sum, item) => (
  sum + item.price
), 0)

export default basketSlice.reducer;
