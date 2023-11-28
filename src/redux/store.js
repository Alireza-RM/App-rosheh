const { configureStore } = require("@reduxjs/toolkit");
const { default: ShopProductSlice } = require("./features/ShopProductSlice");

const store = configureStore({
  reducer: {
    ShopProduct: ShopProductSlice,
  },
});

export default store
