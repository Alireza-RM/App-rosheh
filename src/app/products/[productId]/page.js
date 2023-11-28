import productData from "@/data/ProductData";
import ProductDetailes from "@/template/ProductDetailes";

function DetailProduct({ params }) {
  const data = productData;
  const filterData = data.filter((i) => i.id === +params.productId)[0];
  return (
    <>
      <ProductDetailes data={filterData} />
    </>
  );
}

export default DetailProduct;
