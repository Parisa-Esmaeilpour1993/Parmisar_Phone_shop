import { storeBenefitsLocalization } from "@/constants/localization/Localization";
import { FaShippingFast, FaRedoAlt, FaHeadset, FaLock } from "react-icons/fa";

export default function StoreBenefits() {
  return (
    <section className="bg-gradient-to-b from-blue-100 to-gray-100 py-6 m-8 rounded-3xl">
      <div className=" mx-12 px-6 text-center">
        <h2 className="text-3xl font-bold text-cyan-700 mb-8">
          {storeBenefitsLocalization.whyUS}
        </h2>
        <div className="grid grid-cols-1 justify-items-center md:grid-cols-2 lg:grid-cols-4 ">
          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-full h-52 w-52 hover:scale-105 hover:rotate-6 transition-all">
            <FaShippingFast className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {storeBenefitsLocalization.freeDelivery}
            </h3>
            <p className="text-gray-600 text-sm">
              {storeBenefitsLocalization.freeDeliveryDescription}
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-full h-52 w-52 hover:scale-105 hover:rotate-6 transition-all">
            <FaRedoAlt className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {storeBenefitsLocalization.guarantee}
            </h3>
            <p className="text-gray-600 text-sm">
              {storeBenefitsLocalization.guaranteeDescription}
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-full h-52 w-52 hover:scale-105 hover:rotate-6 transition-all">
            <FaHeadset className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {storeBenefitsLocalization.support}
            </h3>
            <p className="text-gray-600 text-sm">
              {storeBenefitsLocalization.supportDescription}
            </p>
          </div>

          <div className="flex flex-col items-center p-6 bg-white shadow-lg rounded-full h-52 w-52 hover:scale-105 hover:rotate-6 transition-all">
            <FaLock className="text-4xl text-cyan-600 mb-4" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {storeBenefitsLocalization.safePay}
            </h3>
            <p className="text-gray-600 text-sm">
              {storeBenefitsLocalization.safePayDescription}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
