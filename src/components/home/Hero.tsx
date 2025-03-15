import { heroLocalization } from "@/constants/localization/Localization";
import Link from "next/link";

export default function Hero() {
  return (
    <div className=" flex flex-col md:flex-row items-center justify-between px-6 pt-6 mx-40">
      <div className="text-center md:text-right px-8">
        <h1 className="text-3xl font-extrabold text-gray-800">
          {heroLocalization.bestPhones}
          <span className="text-blue-600">{heroLocalization.year}</span>{" "}
          {heroLocalization.withOffers}
        </h1>
        <p className="mt-4 text-gray-600 w-3/4 text-lg">
          {heroLocalization.heroDescription}
        </p>
        <Link
          href="/products"
          className="mt-6 inline-block px-4 py-2 text-white bg-blue-600 rounded-xl shadow-md hover:bg-blue-700 active:scale-95"
        >
          {heroLocalization.callToAction}
        </Link>
      </div>

      <div className="w-96 h-80 m-8">
        <video
          src="/videos/large.mp4"
          autoPlay
          loop
          muted
          className="w-full h-full object-cover rounded-xl shadow-lg "
        />
      </div>
    </div>
  );
}
