import FeaturedProducts from "@/components/home/FeaturedProducts";
import FirstPurchaseOffer from "@/components/home/FirstPurchaseOffer";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";
import ReviewsPage from "@/components/home/ReviewsPage";
import StoreBenefits from "@/components/home/StoreBenefits";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <div className="vazir">
      <Header />
      <FirstPurchaseOffer />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <ReviewsPage />
      <StoreBenefits />
      <Footer />
      <ToastContainer />
    </div>
  );
}
