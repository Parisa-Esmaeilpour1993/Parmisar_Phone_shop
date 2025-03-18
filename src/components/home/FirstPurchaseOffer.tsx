"use client";
import { offerLocalization } from "@/constants/localization/Localization";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FirstPurchaseOffer() {
  const [deadline, setDeadline] = useState<number | null>(null);
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  function calculateTimeLeft(targetTime: number) {
    const now = new Date().getTime();
    const timeLeft = targetTime - now;

    if (timeLeft <= 0) {
      return { hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      hours: Math.floor(timeLeft / (1000 * 60 * 60)),
      minutes: Math.floor((timeLeft / (1000 * 60)) % 60),
      seconds: Math.floor((timeLeft / 1000) % 60),
    };
  }

  useEffect(() => {
    let savedDeadline = localStorage.getItem("firstPurchaseDeadline");

    if (savedDeadline) {
      setDeadline(Number(savedDeadline));
    } else {
      const newDeadline = new Date().getTime() + 24 * 60 * 60 * 1000;
      localStorage.setItem("firstPurchaseDeadline", newDeadline.toString());
      setDeadline(newDeadline);
    }
  }, []);

  useEffect(() => {
    if (!deadline) return;

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(deadline));
    }, 1000);

    return () => clearInterval(timer);
  }, [deadline]);

  return (
    <section className=" bg-image relative text-white p-6 rounded-xl shadow-xl my-8 mx-10">
      <div className="flex-1 text-right">
        <h2 className="text-2xl font-bold mb-2 mx-5 animate-pulse">
          {offerLocalization.firstOffer}
        </h2>
        <p className="text-lg mb-4">{offerLocalization.description}</p>

        <div className="flex justify-center w-1/3 gap-4 text-xl font-bold bg-white text-gray-800 px-4 py-2 rounded-lg shadow-md mb-4">
          <span className="number">
            {String(timeLeft.seconds).padStart(2, "0")} :{" "}
            {String(timeLeft.minutes).padStart(2, "0")} :{" "}
            {String(timeLeft.hours).padStart(2, "0")}
          </span>
        </div>

        <Link href="/login">
          <button className="bg-yellow-400 text-gray-900 px-6 py-2 mx-32 rounded-lg font-bold shadow-md hover:bg-yellow-500 transition-all transform hover:scale-105">
            {offerLocalization.receiveOffer}
          </button>
        </Link>
      </div>
    </section>
  );
}
