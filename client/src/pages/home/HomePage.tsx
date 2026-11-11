import BestSellers from "../../components/home/BestSellers";
import CategoryGrid from "../../components/home/CategoryGrid";
import FeaturedProductss from "../../components/home/FeaturedProductss";
import FlashSale from "../../components/home/FlashSale";
import HeroSection from "../../components/home/HeroSection";
import NewArrivals from "../../components/home/NewArrivals";
import NewsletterBanner from "../../components/home/NewsletterBanner";
import PromoBanner from "../../components/home/PromoBanner";
import RecommendedForYou from "../../components/home/RecommendedForYou";
import Testimonials from "../../components/home/Testimonials";
import TodaysDeal from "../../components/home/TodaysDeal";
import TrustBar from "../../components/home/TrustBar";

const HomePage = () => {
  return (
    <div className="mx-auto flex max-w-360 flex-col gap-10 px-4 pt-10 ">
      <HeroSection />
      <TrustBar />
      <CategoryGrid />
      <FlashSale />
      <FeaturedProductss />
      <TodaysDeal />
      <BestSellers />
      <PromoBanner />
      <NewArrivals />
      <RecommendedForYou />
      <Testimonials />
      <NewsletterBanner />
    </div>
  );
};

export default HomePage;
