const { createSlice } = require("@reduxjs/toolkit");

const initialState = {
  shopProducts: [],
};

const ShopProductSlice = createSlice({
  name: "ShopProduct",
  initialState,
  reducers: {
    increaseProduct: (state, action) => {
      const indexProduct = state.shopProducts.findIndex(
        (i) => i.id === action.payload.id
      );

      if (indexProduct === -1) {
        state.shopProducts.push({ ...action.payload });
      } else {
        state.shopProducts[indexProduct].number =
          state.shopProducts[indexProduct].number + action.payload.number;
      }
    },
    decreaseProduct: (state, action) => {
      const filterProduct = state.shopProducts.filter(
        (i) => i.id !== action.payload.id
      );
      console.log(filterProduct);
      state.shopProducts = filterProduct;
    },
  },
});

export default ShopProductSlice.reducer;
export const { increaseProduct, decreaseProduct } = ShopProductSlice.actions;
