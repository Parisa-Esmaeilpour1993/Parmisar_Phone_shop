"use client";

import { IoArrowBackOutline } from "react-icons/io5";

interface IRouter {
  className?: string;
}
export default function RouterBack({ className }: IRouter) {
  return (
    <div
      className={`absolute top-0 left-0 p-5 cursor-pointer ${className}`}
      onClick={() => window.history.back()}
    >
      <IoArrowBackOutline className={`text-[20px] ${className}`} />
    </div>
  );
}
