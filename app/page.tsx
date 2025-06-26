"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const heroImages = [
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887002/heroweb2_tryzvi.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887034/heroweb3_b7oqrn.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888911/heroweb4_hckujj.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750888772/webhero2_xpj64z.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/v1750887046/heroweb5_jjw3vm.jpg"
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    await fetch("https://hook.us2.make.com/mhxzxo778kyo46myicrssh541sbs5tvt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    setFormSubmitted(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      {/* Navigation Bar */}
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {["Home", "About Us", "Services", "Portfolio", "Contact"].map((text, index) => {
            const hrefs = ["/", "/about", "/services", "/portfolio", "/contact"];
            return (
              <Link href={hrefs[index]} key={index}>
                <span className="hover:text-blue-400 relative group cursor-pointer">
                  {text}
                  <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </span>
              </Link>
            );
          })}
          <div className="flex items-center gap-5 ml-10">
            <a href="https://www.facebook.com/exclusiveenergyinc/" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Image src="/facebook.png" alt="Facebook" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.instagram.com/exclusive_energy_electric/reels/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Image src="/instagram.png" alt="Instagram" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
            <a href="https://www.linkedin.com/company/exclusive-energy-inc-" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Image src="/linkedin.png" alt="LinkedIn" width={40} height={40} className="filter invert transition-transform hover:scale-110 hover:brightness-200" />
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-start px-10 transition-all duration-1000 ease-in-out relative"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="max-w-2xl relative z-10 animate-fadeInUp">
          <h1 className="text-5xl font-bold mb-4 leading-tight">
            Where Energy Meets Excellence.<br />
            Exclusive Energy & Electric.
          </h1>
          <p className="text-lg mb-6">
            Proudly serving Southern California for over 20 years with unmatched efficiency and care.
          </p>
          <button
            onClick={() => setShowModal(true)}
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
          >
            Get Estimate
          </button>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-20 px-6 bg-white text-gray-800">
        <h2 className="text-3xl font-bold mb-12 text-center">What We Do</h2>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 justify-center">
          {["/what1.jpeg", "/what2.jpeg", "/what3.jpg", "/what4.jpg"].map((src, idx) => (
            <div key={idx} className="relative group overflow-hidden rounded-lg shadow-lg">
              <Image src={src} alt="Service" width={400} height={320} className="w-full h-80 object-cover group-hover:scale-105 transition-transform" />
              <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
                <h3 className="text-lg font-bold">{["Electrical Wiring & Control", "Energy Efficient Solutions", "Warehouse Power Solutions", "Service & Maintenance"][idx]}</h3>
                <p className="text-sm mb-3">{["Expertly installed electrical infrastructure to support safe and reliable systems.", "Lighting and automation upgrades designed to save energy and reduce costs.", "High-load electrical solutions customized for safe and efficient warehouse operations.", "Scheduled inspections, maintenance, and emergency repairs for lasting system health."][idx]}</p>
                <Link href="/services" className="bg-blue-500 px-4 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-fit">READ MORE</Link>
              </div>
            </div>
          ))}
          <div className="relative group overflow-hidden rounded-lg shadow-lg">
            <video autoPlay muted loop playsInline className="w-full h-80 object-cover">
              <source src="/warehouse-robot-.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
              <h3 className="text-lg font-bold">Warehouse Automation</h3>
              <p className="text-sm mb-3">Turnkey automation systems including autonomous forklifts and smart controls — engineered to streamline operations.</p>
              <Link href="/service-details/warehouse-automation" className="bg-blue-500 px-4 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-fit">READ MORE</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="bg-gray-100 text-gray-800 py-20 px-6 animate-fadeIn">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 items-center bg-white p-10 rounded-xl shadow-lg">
          <div>
            <Image src="/whoweare.jpeg" alt="Who We Are" width={600} height={400} className="rounded-lg shadow-md" />
          </div>
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              <strong>Where Energy Meets Excellence.</strong><br /><br />
              Founded as a partnership in 2007, Exclusive Energy & Electric has built a reputation for reliability and precision in commercial electrical contracting.
              We specialize in real estate developments, retail stores, warehouse infrastructure, government buildings, religious centers, and major clients such as Amazon, Chipotle, and Toyo Tires.<br /><br />
              Locally owned and operated in Southern California, we’ve served the region for over two decades with expertise in tenant improvements, ground-up builds, design-build projects, lighting retrofits, and energy-efficient applications.
              Whether powering a logistics center or retrofitting a modern retail chain, we deliver excellence at every stage.<br /><br />
              Our commitment to quality is matched by our dedication to innovation and sustainability — ensuring each project is future-ready and aligned with our clients’ evolving needs.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
