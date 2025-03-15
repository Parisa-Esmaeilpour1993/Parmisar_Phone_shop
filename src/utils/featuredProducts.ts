import { featuredProductsLocalization } from "@/constants/localization/Localization";

export const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: `55,000,000 ${featuredProductsLocalization.currency}`,
    image: "/images/iphone-16-pro-max.png",
    description: featuredProductsLocalization.description1,
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: `47,500,000 ${featuredProductsLocalization.currency}`,
    image: "/images/galaxy-s24-ultra.png",
    description: featuredProductsLocalization.description2,
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra",
    price: `39,900,000 ${featuredProductsLocalization.currency}`,
    image: "/images/xiaomi-14-ultra.png",
    description: featuredProductsLocalization.description3,
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: `41,200,000 ${featuredProductsLocalization.currency}`,
    image: "/images/pixel-8-pro.png",
    description: featuredProductsLocalization.description4,
  },
];
