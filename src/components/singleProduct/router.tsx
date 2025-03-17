"use client";

import { IoArrowBackOutline } from "react-icons/io5";

export default function RouterBack() {
  return (
    <div
      className="absolute top-0 left-0 p-5 cursor-pointer "
      onClick={() => window.history.back()}
    >
      <IoArrowBackOutline className="text-[20px]" />
    </div>
  );
}
