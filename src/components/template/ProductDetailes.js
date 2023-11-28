import ProductDetaile from "@/module/ProductDetaile";
import SwiperSliderProduct from "@/module/SwiperSliderProduct";
import React from "react";

function ProductDetailes({ data }) {
  return (
    <>
      <ProductDetaile data={data} />
      <SwiperSliderProduct />
    </>
  );
}

export default ProductDetailes;
