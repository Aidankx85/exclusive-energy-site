"use client";
import Image from "next/image";
import RotatingHero from "../../components/RotatingHero";
import SiteNav from "../../components/SiteNav";

const heroImages = [
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887034/heroweb3_b7oqrn.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888911/heroweb4_hckujj.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888772/webhero2_xpj64z.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887046/heroweb5_jjw3vm.jpg",
];

export default function EnergyEfficiencyPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      <SiteNav />
      {/* Hero Section */}
      <RotatingHero images={heroImages} className="min-h-screen" overlayClassName="bg-black/40">
        <div className="h-full flex flex-col justify-center items-center px-4 md:px-10 pt-48">
        <div className="flex justify-center w-full">
          <div className="bg-white text-gray-800 rounded-xl shadow-xl flex flex-col md:flex-row items-center max-w-5xl w-full p-6 sm:p-10 gap-6 md:gap-10">
            <Image src="/what2.jpeg" alt="Energy Efficient Solutions" width={420} height={340} className="rounded-lg shadow-md object-cover w-full md:w-[420px] h-auto md:h-[340px] aspect-[4/3] md:aspect-auto" />
            <div className="hidden md:block h-full w-px bg-gray-300 mx-6" />
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">Energy Efficient Solutions</h1>
              <p className="text-lg mb-2">
                Save money and energy with LED retrofits, advanced controls, and sustainable design. We engineer and install solutions that lower your utility bills and environmental footprint.
              </p>
              <p className="text-base">Get rebates, longer-lasting lighting, and future-ready systems with Exclusive Energy & Electric.</p>
            </div>
          </div>
        </div>
        </div>
      </RotatingHero>
    </div>
  );
}
