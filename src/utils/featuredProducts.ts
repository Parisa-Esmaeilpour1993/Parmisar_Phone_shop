import { featuredProductsLocalization } from "@/constants/localization/Localization";
import iphone16promax from "@/assets/images/iphone-16-pro-max.png";
import xiaomi14ultra from "@/assets/images/Xiaomi-14-Ultra-5G.jpg";
import samsung24ultra from "@/assets/images/S24Ultra-Group.webp";
import googlePixel8pro from "@/assets/images/google-pixel-b.webp";

export const products = [
  {
    id: "447661940191391",
    name: "iPhone 16 Pro Max",
    price: `55,000,000 ${featuredProductsLocalization.currency}`,
    image: iphone16promax,
    description: featuredProductsLocalization.description1,
  },
  {
    id: "822192033905256",
    name: "Samsung Galaxy S24 Ultra",
    price: `47,500,000 ${featuredProductsLocalization.currency}`,
    image: samsung24ultra,
    description: featuredProductsLocalization.description2,
  },
  {
    id: "987675656376087",
    name: "Xiaomi 14 Ultra",
    price: `39,900,000 ${featuredProductsLocalization.currency}`,
    image: xiaomi14ultra,
    description: featuredProductsLocalization.description3,
  },
  {
    id: "1142705614150784",
    name: "Google Pixel 8 Pro",
    price: `41,200,000 ${featuredProductsLocalization.currency}`,
    image: googlePixel8pro,
    description: featuredProductsLocalization.description4,
  },
];
