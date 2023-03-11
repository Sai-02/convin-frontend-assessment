import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cardObj: {},
  activeCategory: "",
};

export const cardSlice = createSlice({
  name: "card",
  initialState,
  reducers: {
    addCard: (state, action) => {
      const newCard = { ...action.payload, id: Math.random() * 100000 };
      const newObj = { ...state.cardObj };
      if (!Object.keys(state.cardObj).includes(newCard.category)) {
        newObj[newCard.category] = [];
      }
      newObj[newCard.category].push(newCard);
      state.cardObj = { ...newObj };
    },
    updateActiveCategory: (state, action) => {
      state.activeCategory = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const cardActions = { ...cardSlice.actions };

export default cardSlice.reducer;
