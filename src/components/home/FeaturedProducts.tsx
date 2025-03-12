"use client";
import featuredProducts from "@/assets/images/mobile.jpg";
import { featuredProductsLocalization } from "@/constants/localization/Localization";
import { settings } from "@/utils/sliderSetting";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const products = [
  {
    id: 1,
    name: "iPhone 16 Pro Max",
    price: "55,000,000 تومان",
    image: "/images/iphone-16-pro-max.png",
    description: "مناسب برای گیمرها و حرفه‌ای‌ها با پردازنده قدرتمند",
  },
  {
    id: 2,
    name: "Samsung Galaxy S24 Ultra",
    price: "47,500,000 تومان",
    image: "/images/galaxy-s24-ultra.png",
    description: "دوربین حرفه‌ای و نمایشگر عالی برای تماشای فیلم",
  },
  {
    id: 3,
    name: "Xiaomi 14 Ultra",
    price: "39,900,000 تومان",
    image: "/images/xiaomi-14-ultra.png",
    description: "طراحی مدرن و باتری با عمر طولانی",
  },
  {
    id: 4,
    name: "Google Pixel 8 Pro",
    price: "41,200,000 تومان",
    image: "/images/pixel-8-pro.png",
    description: "بهترین انتخاب برای علاقه‌مندان به اندروید خالص",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="p-4 mx-8 border-2 border-gray-400 rounded-2xl">
      <div className="flex gap-2 items-center justify-center mb-2">
        <Image
          src={featuredProducts}
          alt={"featuredProducts"}
          className="size-20"
        />
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 pt-6">
          {featuredProductsLocalization.specialProducts}
        </h2>
      </div>

      <Slider {...settings} className="px-4 my-4">
        {products.map((product) => (
          <div key={product.id} className="px-8 my-4">
            <div className="bg-white p-6 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative w-full h-48 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                  className="border-2 border-gray-200 rounded-xl"
                />
                <div className="absolute inset-0 flex justify-center items-center bg-white opacity-75">
                  <div className="loader"></div>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600  text-sm text-center mb-2">
                {product.description}
              </p>
              <p className="text-blue-600 font-semibold text-center mb-4">
                {product.price}
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/product/${product.id}`}
                  className="p-2 text-sm text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
                >
                  {featuredProductsLocalization.showProduct}
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
