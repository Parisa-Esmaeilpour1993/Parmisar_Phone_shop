"use client";
import { footerLocalization } from "@/constants/localization/Localization";
import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaRegCopyright,
  FaTwitter,
} from "react-icons/fa";
import { toast } from "react-toastify";

export default function Footer() {
  const [email, setEmail] = useState("");

  function validateEmail(email: string) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function handleEmailSubmit() {
    if (!email) {
      toast.error(footerLocalization.emailError);
      return;
    }
    if (!validateEmail(email)) {
      toast.error(footerLocalization.noValidatedError);
      return;
    }
    toast.success(footerLocalization.successEmail);
    setEmail("");
  }

  return (
    <footer className="bg-gray-900 text-white py-8 mt-12 px-12">
      <div className="flex flex-col lg:flex-row justify-between">
        <div>
          <h4 className="text-lg font-bold mb-4">
            {footerLocalization.aboutStore}
          </h4>
          <p className="text-sm max-w-96">
            {footerLocalization.aboutStoreDescription}
          </p>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">{footerLocalization.links}</h4>
          <ul className="text-sm">
            <li>
              <a href="/about" className="hover:text-blue-600">
                {footerLocalization.aboutUs}
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-blue-600">
                {footerLocalization.contactUs}
              </a>
            </li>
            <li>
              <a href="/terms" className="hover:text-blue-600">
                {footerLocalization.terms}
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-bold mb-4">
            {footerLocalization.contactUs}
          </h4>
          <p className="text-sm">{footerLocalization.address}</p>
          <p className="text-sm">{footerLocalization.phone}</p>
          <p className="text-sm">{footerLocalization.email}</p>
        </div>

        <div className="flex flex-col gap-12">
          <div>
            <h4 className="text-lg font-bold mb-4">
              {footerLocalization.withUs}
            </h4>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com"
                target="_blank"
                className="text-xl hover:text-blue-600"
              >
                <FaInstagram />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                className="text-xl hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                className="text-xl hover:text-blue-600"
              >
                <FaTwitter />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                className="text-xl hover:text-blue-600"
              >
                <FaLinkedin />
              </a>
            </div>
          </div>
          <div>
            <p>{footerLocalization.emailPropose}</p>
            <div className="flex items-center gap-2 py-2">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder={footerLocalization.emailPlaceholder}
                className="border-2 px-2 py-1 rounded-lg outline-none hover:border-blue-600"
              />
              <button
                className="border-2 rounded-xl px-2 py-1 active:scale-90 hover:bg-blue-600"
                onClick={handleEmailSubmit}
              >
                {footerLocalization.register}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="flex gap-1 items-center justify-center mt-12 border-t border-gray-700 pt-6 text-center">
        <FaRegCopyright />
        <p className="text-sm">{footerLocalization.copyRight}</p>
      </div>
    </footer>
  );
}
