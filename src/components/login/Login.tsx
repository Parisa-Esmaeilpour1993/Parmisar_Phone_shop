"use client";
import { loginLocalization } from "@/constants/localization/Localization";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import loginPage from "../../assets/images/Mobile-login.png";
import { API_KEY, BASE_URL } from "../../services/Api";
import RouterBack from "../singleProduct/router";

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("همه فیلدها باید پر باشند.");
      return;
    }

    try {
      const response = await axios.post(
        `${BASE_URL}/api/users/login`,
        { email, password },
        { headers: { api_key: API_KEY } }
      );

      const { token, user } = response.data;

      localStorage.setItem("authToken", token);
      localStorage.setItem("user", JSON.stringify(user));

      console.log("Login successful:", response.data);

      router.push("/");
    } catch (error) {
      setError("ورود موفقیت آمیز نبود.");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-indigo-100">
      <RouterBack />
      <div className="bg-indigo-300 p-8 rounded-2xl shadow-md w-full max-w-md md:max-w-2xl flex flex-col md:flex-row">
        <div className="flex-1">
          <h1 className="text-2xl font-bold text-gray-800 mb-4">
            {loginLocalization.Login}
          </h1>
          <p className="text-gray-600 text-sm mb-8">
            {loginLocalization.DontHaveAccount}{" "}
            <button
              onClick={() => router.push("/signup")}
              className="text-blue-900 underline"
            >
              {loginLocalization.SignupHere}
            </button>
          </p>

          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="email"
              >
                {loginLocalization.Email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={loginLocalization.EnterEmail}
                className="w-full px-4 py-2 border bg-white border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="password"
              >
                {loginLocalization.Password}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={loginLocalization.EnterPassword}
                className="w-full bg-white px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>

            {error && <div className="text-red-500 text-sm mb-4">{error}</div>}

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="remember"
                  className="w-4 h-4 text-blue-500 border-gray-300 rounded focus:ring-0"
                />
                <label
                  htmlFor="remember"
                  className="ml-2 text-sm text-gray-600"
                >
                  {loginLocalization.RememberMe}
                </label>
              </div>
              <a href="#" className="text-sm text-blue-900 underline">
                {loginLocalization.ForgotPassword}
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-200"
            >
              {loginLocalization.Login}
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

export default Login;
