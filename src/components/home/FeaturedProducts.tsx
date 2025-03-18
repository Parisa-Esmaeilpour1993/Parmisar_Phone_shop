"use client";
import featuredProducts from "@/assets/images/mobile.jpg";
import { featuredProductsLocalization } from "@/constants/localization/Localization";
import { products } from "@/utils/featuredProducts";
import { settings } from "@/utils/sliderSetting";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

export default function FeaturedProducts() {
  return (
    <section className="p-4 mx-10">
      <div className="flex gap-2 items-center justify-center">
        <Image
          src={featuredProducts}
          alt={"featuredProducts"}
          className="size-16"
        />
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 pt-6">
          {featuredProductsLocalization.specialProducts}
        </h2>
      </div>

      <Slider {...settings} className="px-4 mb-4">
        {products.map((product) => (
          <div key={product.id} className="px-8 my-2">
            <div className="bg-white p-6 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={product.image}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <h3 className="text-lg font-semibold text-center mb-2">
                {product.name}
              </h3>
              <p className="text-gray-600  text-sm text-center mb-2">
                {product.description}
              </p>
              <p className="text-blue-600 font-semibold text-center mb-4 number">
                {product.price}
              </p>
              <div className="flex justify-center">
                <Link
                  href={`/singleProduct/${product.id}`}
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
