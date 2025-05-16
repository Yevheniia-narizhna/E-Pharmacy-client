import Banner from "./Banner/Banner";
import PharmPromo from "./PharmPromo/PharmPromo";
import PromoBanners from "./PromoBanners/PromoBanners";
import Reviews from "./Reviews/Reviews";
import Stores from "./Stores/Stores";

const Home = () => {
  return (
    <>
      <Banner />
      <PromoBanners />
      <Stores />
      <PharmPromo />
      <Reviews />
    </>
  );
};

export default Home;
