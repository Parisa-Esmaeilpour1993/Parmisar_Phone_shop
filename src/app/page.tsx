import FeaturedProducts from "@/components/home/FeaturedProducts";
import Footer from "@/components/home/Footer";
import Header from "@/components/home/Header";
import Hero from "@/components/home/Hero";
import ProductCategories from "@/components/home/ProductCategories";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <ProductCategories />
      <FeaturedProducts />
      <Footer />
    </div>
  );
}
