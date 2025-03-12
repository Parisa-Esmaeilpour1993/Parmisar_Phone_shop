import logo from "@/assets/images/logo.png";
import { headerLocalization } from "@/constants/localization/Localization";
import Image from "next/image";
import { FaRegUser } from "react-icons/fa";
import { RiSearch2Line } from "react-icons/ri";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="flex justify-between items-center py-6 px-20 shadow-sm">
      <div className="flex gap-2">
        <Image src={logo} alt="Parmisar_Logo" className="size-11" />
        <p className="text-4xl font-extrabold">{headerLocalization.parmisar}</p>
      </div>
      <Navbar />
      <div className="flex items-center justify-center gap-2">
        <div className="border-[1px] rounded-xl border-gray-500 p-2 w-10 h-10 flex items-center justify-center active:scale-95 hover:border-gray-700 hover:border-[2px]">
          <RiSearch2Line className="size-5" />
        </div>
        <div className="border-[1px] rounded-xl border-gray-500 p-2 w-10 h-10 flex items-center justify-center active:scale-95 hover:border-gray-700 hover:border-[2px]">
          <FaRegUser className="size-5" />
        </div>
      </div>
    </header>
  );
}
