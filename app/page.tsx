"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import EstimateForm from "./components/EstimateForm";
import SiteNav from "./components/SiteNav";
import { SECTORS } from "./portfolio/sectors";
import { cld } from "./lib/cloudinary";

const heroImages = [
  "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto,q_auto,w_1920/v1750887002/heroweb2_tryzvi.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto,q_auto,w_1920/v1750887034/heroweb3_b7oqrn.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto,q_auto,w_1920/v1750888911/heroweb4_hckujj.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto,q_auto,w_1920/v1750888772/webhero2_xpj64z.jpg",
  "https://res.cloudinary.com/dtqxebti9/image/upload/f_auto,q_auto,w_1920/v1750887046/heroweb5_jjw3vm.jpg",
];

export default function Home() {
  const [currentImage, setCurrentImage] = useState(0);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      <SiteNav />

      {/* Hero Section */}
      <section className="h-screen flex items-center justify-start px-4 sm:px-6 md:px-10 relative overflow-hidden">
        {heroImages.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt=""
            fill
            priority={i === 0}
            sizes="100vw"
            className={`object-cover transition-opacity duration-1000 ease-in-out ${i === currentImage ? "opacity-100" : "opacity-0"}`}
          />
        ))}
        <div className="absolute inset-0 bg-black/40 z-0" />
        <motion.div
          className="max-w-2xl relative z-10"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 leading-tight">
            Where Energy Meets Excellence.
          </h1>
          <p className="text-lg mb-3 font-normal text-white max-w-md">
            Proudly serving Southern California for over 20 years with unmatched efficiency and care.
          </p>
          <p className="text-sm text-white/80 mb-6 font-medium tracking-wide">
            License #902374 · ABC Member · Licensed &amp; Insured
          </p>
          <button
            className="bg-blue-600 text-white px-6 py-3 rounded font-semibold hover:bg-blue-700 transition"
            onClick={() => setShowModal(true)}
          >
            Get a Free Estimate
          </button>
        </motion.div>
      </section>

      {/* MODAL POP-UP FORM */}
      {showModal && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white rounded-lg shadow-xl p-6 w-full max-w-2xl relative my-auto">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-4 text-2xl text-gray-600 hover:text-red-600"
              aria-label="Close"
            >
              &times;
            </button>
            <div className="flex justify-center mb-2">
              <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={80} height={80} />
            </div>
            <EstimateForm variant="modal" />
          </div>
        </div>
      )}

      {/* Buildings We've Powered */}
      <section className="bg-zinc-50 py-12 border-y border-zinc-200 text-zinc-700">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.2em] text-zinc-500 font-semibold mb-6">
            Buildings We&apos;ve Powered
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-4 mb-4">
            <span className="text-2xl md:text-3xl font-bold">Amazon</span>
            <span className="text-2xl md:text-3xl font-bold">Chipotle</span>
            <span className="text-2xl md:text-3xl font-bold">Hyatt</span>
            <span className="text-2xl md:text-3xl font-bold">Toyo Tires</span>
          </div>
          <p className="text-sm text-zinc-500 mb-6 max-w-2xl mx-auto">
            As a trusted electrical subcontractor to leading general contractors across Southern California.
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm text-zinc-600">
            <span className="font-semibold">License #902374</span>
            <span aria-hidden>·</span>
            <span>ABC Member</span>
            <span aria-hidden>·</span>
            <span>Licensed &amp; Insured</span>
            <span aria-hidden>·</span>
            <span>Founded 2007</span>
          </div>
        </div>
      </section>

      {/* Sectors We Power */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-20 px-6 bg-white text-gray-800"
      >
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold mb-3 text-center">Sectors We Power</h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            Electrical infrastructure, lighting, and service for commercial buildings across Southern California.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SECTORS.map((sector, idx) => (
              <motion.div
                key={sector.slug}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/portfolio/${sector.slug}`}
                  className="group relative block overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
                >
                  <Image
                    src={cld(sector.coverImage, { width: 800 })}
                    alt={sector.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/0" />
                  <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                    <h3 className="text-xl font-bold tracking-wide">{sector.title}</h3>
                    <span className="mt-1 inline-flex items-center text-sm opacity-90 transition-all group-hover:translate-x-1 group-hover:opacity-100">
                      View work &rarr;
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/portfolio"
              className="inline-block bg-blue-600 text-white px-8 py-3 rounded font-semibold hover:bg-blue-700 transition"
            >
              See full portfolio
            </Link>
          </div>
        </div>
      </motion.section>

      {/* What We Do */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="py-20 px-6 bg-white text-gray-800"
>
  <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
  <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
    {/* Tenant Improvements card */}
<motion.div
  className="relative group overflow-hidden rounded-lg shadow-lg"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0 }}
  viewport={{ once: true }}
>
  <Image src="/what1.jpeg" alt="Tenant Improvements" width={400} height={320} className="w-full h-80 object-cover group-hover:scale-105 transition-transform" />
  <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
    <h3 className="text-lg font-bold">Tenant Improvements</h3>
    <p className="text-sm mb-3">
      Complete buildouts and upgrades for offices, warehouses, and retail—delivered on time and on budget.
    </p>
    <Link href="/service-details/wiring" className="bg-blue-500 px-4 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-fit">READ MORE</Link>
  </div>
</motion.div>

    {/* The rest of your service cards: (unchanged except for card 1’s update above) */}
    {[
      {
        href: "/service-details/efficiency",
        title: "Energy Efficient Solutions",
        desc: "Lighting and automation upgrades designed to save energy and reduce costs.",
        img: "/what2.jpeg"
      },
      {
        href: "/service-details/warehouse-power",
        title: "Warehouse Power Solutions",
        desc: "High-load electrical solutions customized for safe and efficient warehouse operations.",
        img: "/what3.jpg"
      },
      {
        href: "/service-details/maintenance",
        title: "Service & Maintenance",
        desc: "Scheduled inspections, maintenance, and emergency repairs for lasting system health.",
        img: "/what4.jpg"
      },
    ].map((item, idx) => (
      <motion.div
        key={item.title}
        className="relative group overflow-hidden rounded-lg shadow-lg"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: (idx + 1) * 0.1 }}
        viewport={{ once: true }}
      >
        <Image src={item.img} alt={item.title} width={400} height={320} className="w-full h-80 object-cover group-hover:scale-105 transition-transform" />
        <div className="absolute inset-0 bg-black/50 flex flex-col justify-end p-4 text-white">
          <h3 className="text-lg font-bold">{item.title}</h3>
          <p className="text-sm mb-3">{item.desc}</p>
          <Link href={item.href} className="bg-blue-500 px-4 py-2 text-sm font-semibold rounded hover:bg-blue-600 w-fit">READ MORE</Link>
        </div>
      </motion.div>
    ))}
  </div>
</motion.section>

      {/* Who We Are */}
      <motion.section
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-gray-100 text-gray-800 py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-10 items-center bg-white p-6 sm:p-8 md:p-10 rounded-xl shadow-lg">
          <Image src="/whoweare.jpeg" alt="Who We Are" width={600} height={400} className="w-full h-auto rounded-lg shadow-md" />
          <div>
            <h2 className="text-3xl font-bold text-blue-600 mb-4">Who We Are</h2>
            <p className="text-lg leading-relaxed">
              <strong>Where Energy Meets Excellence.</strong><br /><br />
              Founded as a partnership in 2007, Exclusive Energy & Electric has built a reputation for reliability and precision in commercial electrical contracting.
              We specialize in real estate developments, retail stores, warehouse infrastructure, government buildings, religious centers, and major clients such as Amazon, Chipotle, Hyatt, and Toyo Tires.<br /><br />
              Locally owned and operated in Southern California, we’ve served the region for over two decades with expertise in tenant improvements, ground-up builds, design-build projects, lighting retrofits, and energy-efficient applications.
              Whether powering a logistics center or retrofitting a modern retail chain, we deliver excellence at every stage.<br /><br />
              Our commitment to quality is matched by our dedication to innovation and sustainability — ensuring each project is future-ready and aligned with our clients’ evolving needs.
            </p>
          </div>
        </div>
      </motion.section>
    </div>
  );
}
