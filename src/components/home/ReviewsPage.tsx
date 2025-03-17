"use client";
import searchReviews from "@/assets/images/reviews.png";
import { reviews } from "@/utils/reviews";
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
          src={searchReviews}
          alt={"featuredProducts"}
          className="size-10"
        />
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 pt-6">
          نقد و بررسی‌ها
        </h2>
      </div>

      <Slider {...settings} className="px-4 mb-4">
        {reviews.map((review) => (
          <div key={review.id} className="px-8 my-2">
            <div className="bg-white p-6 border-2 border-gray-300 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:scale-105">
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-xl">
                <Image
                  src={review.image}
                  alt={review.title}
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex flex-col gap-2">
                <h3
                  className="font-semibold text-center mb-2"
                  style={{ direction: "rtl" }}
                >
                  {review.title}
                </h3>
                <p className="text-gray-600  text-sm text-center mb-2">
                  {review.description}
                </p>
                <div className="flex justify-center">
                  <Link
                    href={review.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-sm text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 transition-all transform hover:scale-105 active:scale-95"
                  >
                    مطالعه بیشتر...
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
