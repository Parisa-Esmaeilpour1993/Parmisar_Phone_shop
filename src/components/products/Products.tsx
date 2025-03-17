"use client";
import { useState } from "react";
import { FaApple, FaGoogle } from "react-icons/fa";
import { IoLogoMicrosoft } from "react-icons/io5";
import { SiHuawei, SiNokia, SiSamsung, SiXiaomi } from "react-icons/si";
import { TbCircleLetterNFilled } from "react-icons/tb";
import { MdDoneAll } from "react-icons/md";
import GetProducts from "@/services/GetProducts";
import { productslocalization } from "@/constants/localization/Localization";

export default function Products() {
  const [filter, setFilter] = useState("all");

  return (
    <div className="flex flex-col justify-center items-center gap-3 my-6">
      <h1 className="font-bold mb-5 text-2xl">
        {productslocalization["products"]}
      </h1>
      <div className="flex justify-center flex-row items-center gap-16 font-semibold ">
        <button
          onClick={() => setFilter("all")}
          className={`flex justify-center items-center gap-0.5 cursor-pointer p-1 ${
            filter === "all" ? "border-b-2 border-black" : ""
          }`}
        >
          <p>{productslocalization["all"]}</p>
          <MdDoneAll />
        </button>
        <button
          onClick={() => setFilter("apple")}
          className="p-1 focus:border-b-2 flex justify-center items-center gap-1 "
        >
          <p>{productslocalization["apple"]}</p>
          <FaApple />
        </button>
        <button
          onClick={() => setFilter("samsung")}
          className="p-1 focus:border-b-2 flex justify-center items-center gap-1"
        >
          <p>{productslocalization["samsung"]}</p>
          <SiSamsung className="text-white bg-black rounded-md h-5 w-8 mt-0.5" />
        </button>
        <button
          onClick={() => setFilter("xiaomi")}
          className="p-1 focus:border-b-2 flex justify-center items-center gap-1"
        >
          <p>{productslocalization["xiaomi"]}</p>
          <SiXiaomi />
        </button>
        <button
          onClick={() => setFilter("huawei")}
          className="p-1 focus:border-b-2 flex justify-center items-center gap-1"
        >
          <p>{productslocalization["huawei"]}</p>
          <SiHuawei />
        </button>
        <button
          onClick={() => setFilter("nokia")}
          className="p-1 focus:border-b-2 flex justify-center vazir items-center gap-1"
        >
          <p>{productslocalization["nokia"]}</p>
          <SiNokia className="text-2xl bg-black text-amber-50 h-4 w-5 rounded-sm" />
        </button>
        <button
          onClick={() => setFilter("microsoft")}
          className="p-1 focus:border-b-2 flex justify-center vazir items-center gap-1"
        >
          <p>{productslocalization["microsoft"]}</p>
          <IoLogoMicrosoft className="text-sm" />
        </button>
        <button
          onClick={() => setFilter("nothingPhone")}
          className="p-1 focus:border-b-2 flex justify-center vazir items-center gap-1"
        >
          <p>{productslocalization["nothingPhone"]}</p>
          <TbCircleLetterNFilled />
        </button>
        <button
          onClick={() => setFilter("google")}
          className="p-1 focus:border-b-2 flex justify-center vazir items-center gap-1"
        >
          <p>{productslocalization["google"]}</p>
          <FaGoogle className="text-sm" />
        </button>
      </div>

      <GetProducts filter={filter} />
    </div>
  );
}
