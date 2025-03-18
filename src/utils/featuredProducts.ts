import { featuredProductsLocalization } from "@/constants/localization/Localization";
import iphone16promax from "@/assets/images/iphone-16-pro-max.png";
import xiaomi14ultra from "@/assets/images/Xiaomi-14-Ultra-5G.jpg";
import samsung24ultra from "@/assets/images/S24Ultra-Group.webp";
import googlePixel8pro from "@/assets/images/google-pixel-b.webp";

export const products = [
  {
    id: "756160232581278",
    name: "iPhone 16 Pro Max",
    price: `180,000,000 ${featuredProductsLocalization.currency}`,
    image: iphone16promax,
    description: featuredProductsLocalization.description1,
  },
  {
    id: "1007052193547984",
    name: "Samsung Galaxy S24 Ultra",
    price: `110,000,000 ${featuredProductsLocalization.currency}`,
    image: samsung24ultra,
    description: featuredProductsLocalization.description2,
  },
  {
    id: "338007154986146",
    name: "Xiaomi 14 Ultra",
    price: `85,000,000 ${featuredProductsLocalization.currency}`,
    image: xiaomi14ultra,
    description: featuredProductsLocalization.description3,
  },
  {
    id: "909483231625938",
    name: "Google Pixel 8 Pro",
    price: `84,000,000 ${featuredProductsLocalization.currency}`,
    image: googlePixel8pro,
    description: featuredProductsLocalization.description4,
  },
];
