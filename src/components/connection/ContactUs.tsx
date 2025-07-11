"use client";
import {
  contactUsLocalization,
  headerLocalization,
} from "@/constants/localization/Localization";

import brand from "@/assets/images/logo.png";
import Image from "next/image";
import { toast, ToastContainer } from "react-toastify";
import RouterBack from "../singleProduct/router";

export default function ContactUs() {
  return (
    <div className="bg-blue-50 min-h-screen flex flex-col items-center pb-6">
      <RouterBack />
      <main className="flex flex-col md:flex-row w-full gap-26 max-w-6xl mt-10">
        <div className="flex-1 px-2">
          <header className="flex gap-4 items-center pb-10 bg-blue-50 ">
            <Image src={brand} alt="Parmisar_Logo" className="size-11" />
            <div className="text-3xl font-bold">
              {headerLocalization.parmisar}
            </div>
          </header>
          <h1 className="text-2xl font-bold mb-4">
            {contactUsLocalization.contactUs}
          </h1>
          <p className="text-gray-700 mb-2">
            {contactUsLocalization.description}
          </p>
          <p className="text-gray-700 mb-2">info@parmisar.ir</p>
          <p className="text-gray-700 mb-2">
            {contactUsLocalization.phoneNumber}
          </p>
          <a href="#" className="text-blue-600 underline">
            {contactUsLocalization.customerSupport}
          </a>

          <div className="mt-8 space-y-4">
            <div>
              <h2 className="text-lg font-bold">
                {contactUsLocalization.customerSupport}
              </h2>
              <p className="text-gray-700">
                {contactUsLocalization.supportDescription}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {contactUsLocalization.reactionAndQuestions}
              </h2>
              <p className="text-gray-700">
                {contactUsLocalization.description2}
              </p>
            </div>
            <div>
              <h2 className="text-lg font-bold">
                {contactUsLocalization.frequentlyQuestions}
              </h2>
              <p className="text-gray-700">
                {contactUsLocalization.questionLink}
                <a href="#" className="text-blue-600 underline">
                  questions@parmisar.ir
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="flex-1 px-6 mt-10 md:mt-2">
          <ToastContainer />
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">
              {contactUsLocalization.stayInCall}
            </h2>
            <p className="text-gray-600 mb-6">
              {contactUsLocalization.callAnyTime}
            </p>
            <form>
              <div className="flex space-x-4 mb-4">
                <input
                  type="text"
                  placeholder={contactUsLocalization.name}
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="text"
                  placeholder={contactUsLocalization.lastName}
                  className="w-1/2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <input
                type="email"
                placeholder={contactUsLocalization.email}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex items-center mb-4 gap-2">
                <select className="w-1/5 p-3 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option value="+62">+98</option>
                </select>
                <input
                  type="text"
                  placeholder={contactUsLocalization.phone}
                  className="w-4/5 p-3 border-t border-r border-b border-gray-300 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <textarea
                placeholder={contactUsLocalization.howHelp}
                className="w-full p-3 mb-4 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={4}
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700"
                onClick={() => {
                  toast.success(contactUsLocalization.successMessage, {
                    autoClose: 5000,
                  });
                }}
              >
                {contactUsLocalization.send}
              </button>
              <p className="text-gray-600 text-xs mt-4">
                {contactUsLocalization.privacy}
                <a href="#" className="text-blue-600 underline">
                  {contactUsLocalization.privacyLink}
                </a>{" "}
                {contactUsLocalization.privacy2}
              </p>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
