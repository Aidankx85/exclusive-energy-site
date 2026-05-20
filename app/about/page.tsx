"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RotatingHero from "../components/RotatingHero";
import { cld } from "../lib/cloudinary";
import { HERO_IMAGES } from "../lib/site";

export default function AboutPage() {

  const navLinks = [
    { text: "Home", href: "/" },
    { text: "About Us", href: "/about" },
    { text: "Services", href: "/services" },
    { text: "Portfolio", href: "/portfolio" },
    { text: "Contact", href: "/contact" }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Navigation */}
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/70 to-transparent"
      >
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1 text-white">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold">
          {navLinks.map(({ text, href }) => (
            <Link key={text} href={href}>
              <span className="hover:text-blue-400 relative group cursor-pointer text-white">
                {text}
                <span className="absolute -top-2 left-0 w-full h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
              </span>
            </Link>
          ))}
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
      </motion.nav>

      {/* Hero Section */}
      <RotatingHero images={HERO_IMAGES} className="h-[100vh]" overlayClassName="bg-black/30">
        {/* Who We Are Box Centered Over Hero */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-[98vw] max-w-7xl"
        >
          <div className="flex flex-col md:flex-row items-center bg-white p-10 md:p-16 rounded-xl shadow-2xl min-h-[410px] md:min-h-[350px]">
            {/* Picture with faded logo behind */}
            <div className="relative mb-8 md:mb-0 md:mr-14 flex-shrink-0 w-[350px] h-[350px]">
              {/* Faded Logo Behind */}
              <Image
                src="/exclusive-logo.png"
                alt="Logo Watermark"
                fill
                className="object-contain opacity-10 pointer-events-none select-none z-0"
                style={{ filter: 'blur(2px)' }}
              />
              {/* Foreground About Team Picture */}
              <Image
                src={cld("https://res.cloudinary.com/dtqxebti9/image/upload/v1751326764/ChatGPT_Image_Jun_30_2025_04_38_52_PM_rraggs.png", { width: 800 })}
                alt="About Us Team"
                fill
                sizes="(max-width: 768px) 350px, 350px"
                className="rounded-lg object-cover shadow-md z-10"
                priority
              />
            </div>
            <div className="border-l border-gray-200 pl-0 md:pl-14 text-left max-w-3xl w-full">
              <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-5">Who We Are</h2>
              <p className="text-xl font-semibold mb-3 text-gray-900">Where Energy Meets Excellence.</p>
              <p className="text-lg mb-4 text-gray-800">
                Founded as a partnership in 2007, Exclusive Energy & Electric has built a reputation for reliability and precision in commercial electrical contracting. We specialize in real estate developments, retail stores, warehouse infrastructure, government buildings, religious centers, and major clients such as Amazon, Chipotle, and Toyo Tires.
              </p>
              <p className="text-lg text-gray-800">
                Locally owned and operated in Southern California, we’ve served the region for over two decades with expertise in tenant improvements, ground-up builds, design-build projects, lighting retrofits, and energy-efficient applications. Whether powering a logistics center or retrofitting a modern retail chain, we deliver excellence at every stage.
              </p>
            </div>
          </div>
        </motion.section>
      </RotatingHero>

      {/* Leadership */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 font-semibold text-center mb-3">
            Leadership
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            The People Behind the Power
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
            Nearly two decades of building Southern California — led by partners who started in the field.
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* CEO */}
            <div className="text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-lg">
                {/* TODO: swap to a real photo at /public/leadership/ceo.jpg (or wherever you put it) */}
                <Image
                  src="/exclusive-logo.png"
                  alt="CEO"
                  fill
                  sizes="224px"
                  className="object-contain p-10 opacity-40"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">[CEO Name]</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                Chief Executive Officer
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                [Short bio — 2 to 3 sentences. Background, role at the company,
                and what clients can expect from working with him.]
              </p>
            </div>

            {/* President */}
            <div className="text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-lg">
                {/* TODO: swap to a real photo at /public/leadership/president.jpg */}
                <Image
                  src="/exclusive-logo.png"
                  alt="President"
                  fill
                  sizes="224px"
                  className="object-contain p-10 opacity-40"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">[President Name]</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                President
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                [Short bio — 2 to 3 sentences. Same template.]
              </p>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Footer will automatically stay below */}
    </div>
  );
}
