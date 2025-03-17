"use client";

import { productCategoryLocalization } from "@/constants/localization/Localization";
import { brands } from "@/utils/brands";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function ProductCategories() {
  const router = useRouter();

  const handleBrandClick = (brand: string) => {
    router.push(`/products?brand=${brand.toLowerCase()}`);
  };

  return (
    <section className="flex gap-4 items-center px-4 mb-8 mx-12 border-[1px] border-gray-400 rounded-2xl shadow-xl">
      <h2 className="text-xl font-bold text-gray-800 text-center relative animate-bounce">
        {productCategoryLocalization.setCategory}
        <span className="block w-72 h-[1px] bg-blue-500 rounded-full mx-auto mt-2"></span>
      </h2>

      <div className="flex justify-center overflow-x-auto gap-6 p-4">
        {brands.map((brand) => (
          <button
            key={brand.name}
            onClick={() => handleBrandClick(brand.slug)}
            className="relative flex flex-col items-center justify-center rounded-lg hover:scale-105 active:scale-95 hover:-translate-y-1"
          >
            <div className="w-16 h-16">
              <Image
                src={brand.image}
                alt={brand.name}
                width={64}
                height={64}
                className="cursor-pointer transition-transform duration-300 hover:rotate-[360deg] hover:scale-110"
              />
            </div>
            <span className="text-sm">{brand.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
