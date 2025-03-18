import { aboutUsLocalization } from "@/constants/localization/Localization";
import Image from "next/image";
import { FaRegSmile } from "react-icons/fa";
import { LuStar } from "react-icons/lu";
import { PiFireBold, PiGraduationCap } from "react-icons/pi";
import group3 from "../../assets/images/group3.jpg";
import group4 from "../../assets/images/group4.jpg";

import monitor from "../../assets/images/monitor.jpg";
import team1 from "../../assets/images/team1.png";
import team2 from "../../assets/images/team2.png";
import team3 from "../../assets/images/team3.png";

const AboutUs = () => {
  return (
    <div className="font-sans">
      <header className="relative bg-white h-[50vh] w-full ">
        <div className="absolute inset-0">
          <svg
            className="w-full h-auto"
            id="visual"
            viewBox="0 0 900 600"
            width="900"
            height="400"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
          >
            <path
              d="M0 332L50 340.3C100 348.7 200 365.3 300 329.7C400 294 500 206 600 186.3C700 166.7 800 215.3 850 239.7L900 264L900 0L850 0C800 0 700 0 600 0C500 0 400 0 300 0C200 0 100 0 50 0L0 0Z"
              fill="#181b1f"
              strokeLinecap="round"
              strokeLinejoin="miter"
            ></path>
            <text
              x="90%"
              y="20%"
              textAnchor="middle"
              fill="white"
              fontSize="30"
              fontFamily="Arial, sans-serif"
            >
              {aboutUsLocalization.aboutUs}
            </text>
          </svg>
        </div>
        <div className="absolute -left-[100px] z-10">
          <Image
            src={monitor}
            alt="About Us"
            className="object-contain h-[330px] pt-3 rounded-bl-2xl rounded-br-2xl"
          />
        </div>
      </header>

      <main className="px-8">
        <section className="mb-12 flex items-center justify-between">
          <div className="relative px-10 right-[100px] -top-[30px] ">
            <Image
              src={group3}
              alt="group"
              className="w-[300px] h-[200px] shadow-md rounded-lg mb-4"
            />
            <Image
              src={group4}
              alt="group2"
              className="absolute -left-15 top-40 w-[200px] h-[100px] shadow-lg rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-end items-end relative z-20 pt-16">
            <h2 className="text-3xl font-bold text-gray-800 text-right  ml-97 mb-6">
              {aboutUsLocalization.whoWeAre}
            </h2>
            <p className="w-[500px] ml-20">{aboutUsLocalization.paragraph}</p>
          </div>
        </section>

        <h2 className="text-3xl mt-24 font-bold text-gray-800  text-center">
          {aboutUsLocalization.ourValue}
        </h2>

        <section className="grid grid-cols-1 p-20  bg-gray-100 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 mb-12">
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex justify-center mb-4">
              <LuStar />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {aboutUsLocalization.adventure}
            </h3>
            {/* <p className="text-gray-600">Description of feature 1.</p> */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex justify-center mb-4">
              <PiFireBold />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {aboutUsLocalization.hardWorking}
            </h3>
            {/* <p className="text-gray-600">Description of feature 2.</p> */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex justify-center mb-4">
              <PiGraduationCap />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {" "}
              {aboutUsLocalization.progress}
            </h3>
            {/* <p className="text-gray-600">Description of feature 3.</p> */}
          </div>
          <div className="bg-white shadow-md rounded-lg p-4 text-center">
            <div className="flex justify-center mb-4">
              <FaRegSmile />
            </div>
            <h3 className="text-xl font-bold mb-2">
              {" "}
              {aboutUsLocalization.empathy}
            </h3>
            {/* <p className="text-gray-600">Description of feature 4.</p> */}
          </div>
        </section>

        <h2 className="text-3xl mt-24 mb-10 font-bold text-gray-800  text-center">
          {aboutUsLocalization.ourTeam}
        </h2>

        <section className="flex flex-col sm:flex-row justify-around items-center mb-12">
          <Image src={team1} alt="team1" className="rounded-md shadow-md" />
          <Image src={team2} alt="team2" className="rounded-md shadow-md" />
          <Image src={team3} alt="team2" className="rounded-md shadow-md" />
        </section>
      </main>

      <footer className="bg-gray-800 text-gray-300 py-4 px-4 text-center">
        <p>&copy; 2025 Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default AboutUs;
