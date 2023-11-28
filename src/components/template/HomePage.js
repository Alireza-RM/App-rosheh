import Banner from "@/module/Banner";
import ImageHomePage from "@/module/ImageHomePage";
import SliderProduct from "@/module/SliderProduct";
import Swiiper from "@/module/Swiiper";

function HomePage() {
  return (
    <div>
      <Swiiper />
      <Banner />
      <SliderProduct />
      <ImageHomePage />
    </div>
  );
}

export default HomePage;
