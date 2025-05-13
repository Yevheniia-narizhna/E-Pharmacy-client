import Banner from "./Banner/Banner";
import PharmPromo from "./PharmPromo/PharmPromo";
import PromoBanners from "./PromoBanners/PromoBanners";
import Stores from "./Stores/Stores";

const Home = () => {
  return (
    <>
      <Banner />
      <PromoBanners />
      <Stores />
      <PharmPromo />
    </>
  );
};

export default Home;
