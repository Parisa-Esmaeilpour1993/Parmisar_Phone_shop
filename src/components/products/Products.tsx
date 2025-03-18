"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FaApple, FaGoogle } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";
import { SiHuawei, SiNokia, SiSamsung, SiXiaomi } from "react-icons/si";
import { TbCircleLetterNFilled } from "react-icons/tb";
import { MdDoneAll } from "react-icons/md";
import GetProducts from "./../../services/GetProducts";
import { productslocalization } from "@/constants/localization/Localization";
import RouterBack from "../singleProduct/router";

export default function Products() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentFilter = searchParams.get("brand") || "all";

  const setFilter = (brand: string) => {
    router.push(`?brand=${brand}`, { scroll: false });
  };
  return (
    <div className="flex flex-col justify-center items-center gap-3 my-6">
      <h1 className="font-bold mb-5 text-2xl">
        {productslocalization["products"]}
      </h1>
      <RouterBack />
      <div className="flex justify-center flex-row items-center gap-16 font-semibold ">
        <button
          onClick={() => setFilter("all")}
          className={`flex justify-center items-center gap-0.5 cursor-pointer p-1 ${
            currentFilter === "all" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["all"]}</p>
          <MdDoneAll />
        </button>
        <button
          onClick={() => setFilter("apple")}
          className={`p-1 focus:border-b-2 flex justify-center items-center gap-1${
            currentFilter === "apple" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["apple"]}</p>
          <FaApple className="text-xl" />
        </button>
        <button
          onClick={() => setFilter("samsung")}
          className={`p-1 focus:border-b-2 flex justify-center items-center gap-1 ${
            currentFilter === "samsung" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["samsung"]}</p>
          <div className="bg-black h-5 w-11 rounded-xl">.</div>
          <SiSamsung className="text-3xl text-white absolute mr-[71px]" />
        </button>
        <button
          onClick={() => setFilter("xiaomi")}
          className={`p-1 focus:border-b-2 flex justify-center items-center gap-1 ${
            currentFilter === "xiaomi" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["xiaomi"]}</p>
          <SiXiaomi className="text-xl" />
        </button>
        <button
          onClick={() => setFilter("huawei")}
          className={`p-1 focus:border-b-2 flex justify-center items-center gap-1 ${
            currentFilter === "huawei" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["huawei"]}</p>
          <SiHuawei className="text-xl" />
        </button>
        <button
          onClick={() => setFilter("nokia")}
          className={`p-1 focus:border-b-2 flex justify-center vazir items-center gap-1 ${
            currentFilter === "nokia" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["nokia"]}</p>
          <div className="bg-black h-4 w-9 rounded-md mb-1">.</div>
          <SiNokia className="text-2xl text-white absolute mb-1 mr-[33px]" />
        </button>
        <button
          onClick={() => setFilter("microsoft")}
          className={`p-1 focus:border-b-2 flex justify-center vazir items-center gap-1 ${
            currentFilter === "microsoft" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["microsoft"]}</p>
          <IoLogoMicrosoft className="text-lg mb-2" />
        </button>
        <button
          onClick={() => setFilter("nothingPhone")}
          className={`p-1 focus:border-b-2 flex justify-center vazir items-center gap-1 ${
            currentFilter === "nothingPhone" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["nothingPhone"]}</p>
          <TbCircleLetterNFilled className="text-2xl mb-1.5" />
        </button>
        <button
          onClick={() => setFilter("google")}
          className={`p-1 focus:border-b-2 flex justify-center vazir items-center gap-1 ${
            currentFilter === "google" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["google"]}</p>
          <FaGoogle className="text-lg mb-2" />
        </button>
      </div>
      <GetProducts />
    </div>
  );
}
