"use client";

import { useState } from "react";
import { singleProductLoclization } from "@/constants/localization/Localization";

export default function ColorSelector() {
  const [selectColor, setSelectColor] = useState<string>("white");

  return (
    <div className="flex gap-2 py-10 items-center">
      <p className="font-bold text-xl">{singleProductLoclization.color} :</p>
      <div className="flex gap-3">
        <label
          htmlFor="white"
          className={`cursor-pointer p-2 rounded ${
            selectColor === "white" ? "bg-blue-200" : "bg-white"
          }`}
          onClick={() => setSelectColor("white")}
        >
          {singleProductLoclization.white}
        </label>
        <input name="color" type="radio" id="white" hidden />

        <label
          htmlFor="black"
          className={`cursor-pointer p-2 rounded ${
            selectColor === "black" ? "bg-blue-200" : "bg-white"
          }`}
          onClick={() => setSelectColor("black")}
        >
          {singleProductLoclization.black}
        </label>
        <input name="color" type="radio" id="black" hidden />
      </div>
    </div>
  );
}
