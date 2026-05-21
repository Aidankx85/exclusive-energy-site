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

export default function TenantImprovementsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      <SiteNav />
      {/* Hero Section */}
      <RotatingHero images={heroImages} className="min-h-screen" overlayClassName="bg-black/40">
        <div className="h-full flex flex-col justify-center items-center px-4 md:px-10 pt-48">
        <div className="flex justify-center w-full">
          <div className="bg-white text-gray-800 rounded-xl shadow-xl flex flex-col md:flex-row items-center max-w-5xl w-full p-6 sm:p-10 gap-6 md:gap-10">
            <Image src="/what1.jpeg" alt="Tenant Improvements" width={420} height={340} className="rounded-lg shadow-md object-cover w-full md:w-[420px] h-auto md:h-[340px] aspect-[4/3] md:aspect-auto" />
            {/* Divider line for desktop */}
            <div className="hidden md:block h-full w-px bg-gray-300 mx-6" />
            <div className="flex flex-col justify-center max-w-xl">
              <h1 className="text-3xl font-bold text-blue-600 mb-4">Tenant Improvements</h1>
              <p className="text-lg mb-2">
                Our tenant improvement solutions deliver expertly installed electrical infrastructure for retail, commercial, and industrial spaces. We work closely with clients to design and implement electrical systems that are safe, reliable, and tailored to project needs—whether you’re reconfiguring office layouts, adding lighting, or upgrading power distribution.
              </p>
              <p className="text-base">From new construction to modernizations and quick-turn remodels, trust our team to deliver results on time and within budget.</p>
            </div>
          </div>
        </div>
        </div>
      </RotatingHero>
    </div>
  );
}
