"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "/heroweb1.jpeg",
  "/heroweb2.jpeg",
  "/heroweb3.jpeg",
  "/heroweb4.jpeg",
  "/heroweb5.jpeg",
];

export default function ComingSoonPage() {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image
              src="/exclusive-logo.png"
              alt="Exclusive Logo"
              width={128}
              height={128}
              className="mt-2 cursor-pointer"
            />
          </Link>
          <span className="text-4xl font-bold -mt-1">
            Exclusive Energy & Electric
          </span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {[
            ["Home", "/"],
            ["About Us", "/about"],
            ["Services", "/services"],
            ["Portfolio", "/portfolio"],
            ["Contact", "/contact"],
          ].map(([text, href]) => (
            <Link key={text} href={href}>
              <span className="hover:text-blue-400 relative group cursor-pointer">
                {text}
                <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </Link>
          ))}
          <div className="flex items-center gap-5 ml-10">
            <a
              href="https://www.facebook.com/exclusiveenergyinc/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/facebook.png"
                alt="Facebook"
                width={40}
                height={40}
                className="filter invert transition-transform hover:scale-110 hover:brightness-200"
              />
            </a>
            <a
              href="https://www.instagram.com/exclusive_energy_electric/reels/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/instagram.png"
                alt="Instagram"
                width={40}
                height={40}
                className="filter invert transition-transform hover:scale-110 hover:brightness-200"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/exclusive-energy-inc-"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/linkedin.png"
                alt="LinkedIn"
                width={40}
                height={40}
                className="filter invert transition-transform hover:scale-110 hover:brightness-200"
              />
            </a>
          </div>
        </div>
      </nav>
      {/* Hero Section */}
      <section
        className="min-h-screen bg-cover bg-center flex flex-col justify-center items-center px-4 md:px-10 transition-all duration-1000 ease-in-out relative pt-48"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex justify-center w-full">
          <div className="bg-white text-gray-800 rounded-xl shadow-xl flex flex-col items-center max-w-3xl w-full p-10 gap-6">
            <Image
              src="/exclusive-logo.png"
              alt="Exclusive Logo"
              width={120}
              height={120}
              className="mb-3"
              priority
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-blue-700 mb-2 text-center">
              Coming Soon
            </h1>
            <p className="text-lg max-w-xl text-center text-gray-700">
              We’re powering up a new online experience to showcase our commercial, warehouse, and industrial electrical expertise—including LED retrofits, automation, and more.
              <br />
              <span className="font-semibold text-blue-600">
                Check back soon for project highlights and easy ways to contact our team!
              </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
