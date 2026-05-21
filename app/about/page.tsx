"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import RotatingHero from "../components/RotatingHero";
import SiteNav from "../components/SiteNav";
import { cld } from "../lib/cloudinary";
import { HERO_IMAGES } from "../lib/site";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <SiteNav />

      {/* Hero Section */}
      <RotatingHero
        images={HERO_IMAGES}
        className="min-h-[80vh] md:h-[100vh]"
        overlayClassName="bg-black/45"
      >
        {/* Who We Are Box Centered Over Hero */}
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="absolute inset-0 z-20 flex items-center justify-center px-4 sm:px-6 py-24 md:py-12"
        >
          <div className="flex flex-col md:flex-row items-center bg-white p-5 sm:p-8 md:p-16 rounded-xl shadow-2xl w-full max-w-7xl">
            {/* Picture with faded logo behind */}
            <div className="relative mb-6 md:mb-0 md:mr-14 flex-shrink-0 w-full max-w-[280px] sm:max-w-[320px] md:w-[350px] aspect-square md:h-[350px]">
              {/* Faded Logo Behind */}
              <Image
                src="/exclusive-logo.png"
                alt=""
                fill
                className="object-contain opacity-10 pointer-events-none select-none z-0"
                style={{ filter: "blur(2px)" }}
              />
              {/* Foreground About Team Picture */}
              <Image
                src={cld(
                  "https://res.cloudinary.com/dtqxebti9/image/upload/v1751326764/ChatGPT_Image_Jun_30_2025_04_38_52_PM_rraggs.png",
                  { width: 800 },
                )}
                alt="About Us Team"
                fill
                sizes="(max-width: 768px) 80vw, 350px"
                className="rounded-lg object-cover shadow-md z-10"
                priority
              />
            </div>
            <div className="md:border-l md:border-gray-200 md:pl-14 text-left max-w-3xl w-full">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-600 mb-4 md:mb-5">
                Who We Are
              </h2>
              <p className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">
                Where Energy Meets Excellence.
              </p>
              <p className="text-base sm:text-lg mb-4 text-gray-800">
                Founded as a partnership in 2007, Exclusive Energy & Electric
                has built a reputation for reliability and precision in
                commercial electrical contracting. We specialize in real estate
                developments, retail stores, warehouse infrastructure,
                government buildings, religious centers, and major clients such
                as Amazon, Chipotle, and Toyo Tires.
              </p>
              <p className="text-base sm:text-lg text-gray-800">
                Locally owned and operated in Southern California, we&apos;ve
                served the region for over two decades with expertise in tenant
                improvements, ground-up builds, design-build projects, lighting
                retrofits, and energy-efficient applications.
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
                  alt="Walter Jenkins, CEO"
                  fill
                  sizes="224px"
                  className="object-contain p-10 opacity-40"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Walter Jenkins</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                Chief Executive Officer
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Founding partner of Exclusive Energy & Electric, Walter helps building owners, tenants, and property managers source the most cost-effective, energy-efficient lighting and electrical solutions. He brings deep manufacturer relationships and up-to-date knowledge of energy rebates and tax incentives to every project.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Contact
                </span>
                <a
                  href="mailto:walterj@exclusive-ca.com"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  walterj@exclusive-ca.com
                </a>
              </div>
            </div>

            {/* President */}
            <div className="text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-lg">
                {/* TODO: swap to a real photo at /public/leadership/president.jpg */}
                <Image
                  src="/exclusive-logo.png"
                  alt="Kyle Hanenberg, President"
                  fill
                  sizes="224px"
                  className="object-contain p-10 opacity-40"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Kyle Hanenberg</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                President
              </p>
              <p className="text-gray-600 leading-relaxed max-w-md mx-auto">
                Bio coming soon.
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Contact
                </span>
                <a
                  href="mailto:kyleh@exclusive-ca.com"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  kyleh@exclusive-ca.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Sales */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-50 py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 font-semibold text-center mb-3">
            Sales
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Talk to Our Team
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
            Reach out directly for project quotes, walkthroughs, and estimates.
          </p>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-20">
            {/* Vincent Elefante */}
            <div className="text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-lg">
                <Image
                  src="/VincentProfile.png"
                  alt="Vincent Elefante, Sales"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Vincent Elefante</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                Sales
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Contact
                </span>
                <a
                  href="mailto:vincente@exclusive-ca.com"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  vincente@exclusive-ca.com
                </a>
              </div>
            </div>

            {/* Bryan Burns */}
            <div className="text-center">
              <div className="relative w-56 h-56 mx-auto mb-6 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-lg">
                <Image
                  src="/bryanb.jpg"
                  alt="Bryan Burns, Sales"
                  fill
                  sizes="224px"
                  className="object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-1">Bryan Burns</h3>
              <p className="text-blue-600 font-semibold uppercase tracking-wider text-sm mb-4">
                Sales
              </p>
              <div className="mt-4 flex items-center justify-center gap-2 flex-wrap">
                <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">
                  Contact
                </span>
                <a
                  href="mailto:bryanb@exclusive-ca.com"
                  className="text-blue-600 font-semibold hover:text-blue-800 hover:underline"
                >
                  bryanb@exclusive-ca.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Operations & Office */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-white py-24 px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.25em] text-blue-600 font-semibold text-center mb-3">
            Operations & Office
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            The Team Behind Every Project
          </h2>
          <p className="text-center text-gray-500 max-w-2xl mx-auto mb-16">
            From estimation to project management to back-office support — the people who keep every job on track.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { name: "Laurie Jenkins", title: "General Manager" },
              { name: "Maryanne Hanenberg", title: "HR Director" },
              { name: "Carlos Chavez", title: "Safety Manager" },
              { name: "Jorge Lagunas", title: "Project Manager" },
              { name: "Honorio De Luna", title: "Project Manager" },
              { name: "Aidan Steele", title: "Estimator" },
              { name: "Gaby Garcia", title: "Accountant" },
            ].map((person) => (
              <div key={person.name} className="text-center">
                <div className="relative w-40 h-40 mx-auto mb-4 rounded-full overflow-hidden bg-gray-100 ring-4 ring-blue-50 shadow-md">
                  <Image
                    src="/exclusive-logo.png"
                    alt={`${person.name}, ${person.title}`}
                    fill
                    sizes="160px"
                    className="object-contain p-8 opacity-40"
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{person.name}</h3>
                <p className="text-blue-600 font-semibold uppercase tracking-wider text-xs">
                  {person.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Want to work with our team?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Walter, Kyle, Vincent, Bryan, and the rest of the team are ready to
            scope your next project. Send us your plans or just give us a call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded font-semibold hover:bg-blue-50 transition shadow-lg w-full sm:w-auto"
            >
              Get a free estimate
            </Link>
            <a
              href="tel:9512997505"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-blue-600 transition w-full sm:w-auto"
            >
              Call 951-299-7505
            </a>
          </div>
        </div>
      </section>

      {/* Footer will automatically stay below */}
    </div>
  );
}
