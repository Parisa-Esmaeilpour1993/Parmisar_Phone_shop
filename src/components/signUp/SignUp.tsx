"use client";
import React, { useState } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../../services/Api";
import Image from "next/image";
import loginPage from "../../assets/images/Mobile-login.png";
import { signUpLocalization } from "@/constants/localization/Localization";
import { useRouter } from "next/navigation";

const SignUp = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await axios.post(
        `${BASE_URL}/signup`,
        { ...formData },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_KEY}`,
          },
        }
      );

      console.log("Signup successful:", response.data);
      router.push("/login"); //یه مدل دیگه از navigate
    } catch (err: any) {
      console.error("Signup error:", err);
      setError(
        err.response?.data?.message || "An error occurred. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-100">
      <div className="bg-indigo-300 p-8 rounded-2xl shadow-md w-full max-w-md md:max-w-2xl flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {signUpLocalization.Signup}
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            {signUpLocalization.AlreadyHaveAccount}{" "}
            <a href="#" className="text-blue-900 underline">
              {signUpLocalization.Login}
            </a>
          </p>

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="name"
              >
                {signUpLocalization.Name}
              </label>
              <input
                type="text"
                id="name"
                placeholder={signUpLocalization.EnterName}
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                {signUpLocalization.Email}
              </label>
              <input
                type="email"
                id="email"
                placeholder={signUpLocalization.EnterEmail}
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                {signUpLocalization.Password}
              </label>
              <input
                type="password"
                id="password"
                placeholder={signUpLocalization.EnterPassword}
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

            <div className="flex items-center mb-6">
              <input
                type="checkbox"
                id="updates"
                className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-0"
              />
              <label htmlFor="updates" className="ml-2 text-sm text-gray-600">
                {signUpLocalization.signUpDescription}
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>

        <div className="flex-1 flex items-center justify-center mt-8 md:mt-0">
          <Image src={loginPage} alt="loginPage" className="w-4/5 max-w-sm" />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
