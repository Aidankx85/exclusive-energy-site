"use client";

import Image from "next/image";
import RotatingHero from "../components/RotatingHero";
import EstimateForm from "../components/EstimateForm";
import SiteNav from "../components/SiteNav";
import { HERO_IMAGES } from "../lib/site";

export default function ContactPage() {

  return (
    <div className="flex flex-col min-h-screen bg-white text-white">
      <SiteNav />

      {/* Hero Section */}
      <RotatingHero images={HERO_IMAGES} className="h-[50vh] min-h-[360px]" overlayClassName="bg-black/55">
        <div className="flex flex-col justify-center items-center h-full px-4 sm:px-6 pt-20 md:pt-32">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white tracking-wide text-center drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-base sm:text-lg text-center text-white/90 font-medium max-w-xl px-2">
            Let&apos;s power your next project. Call, email, or use our form below.
          </p>
        </div>
      </RotatingHero>

      {/* Main Section */}
      <section className="bg-white py-12 md:py-20 px-4 sm:px-6 flex flex-col lg:flex-row gap-8 lg:gap-10 max-w-7xl mx-auto w-full text-gray-900">
        {/* Left: Map + Contact Info */}
        <div className="flex-1 flex flex-col gap-8">
          <div className="rounded-lg overflow-hidden shadow-lg w-full h-64 mb-4">
            <iframe
              title="Exclusive Energy & Electric Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5580402543136!2d-117.56695042365477!3d33.88388592549411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae088a650f3b%3A0x1f08774676c62688!2s102%20E%20Grand%20Blvd%2C%20Corona%2C%20CA%2092879!5e0!3m2!1sen!2sus!4v1719530958699!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 text-blue-700">Contact Details</h2>
<div className="flex flex-col gap-3">
  <div className="flex items-center gap-2">
    <Image src="/phone.png" alt="Phone" width={22} height={22} />
    <span className="font-semibold">951-299-7505</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/emaillogo.png" alt="Email" width={22} height={22} />
                <span className="font-semibold">estimating@exclusive-ca.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/locationlogo.png" alt="Location" width={22} height={22} />
                <span className="font-semibold">102 E Grand Blvd, Corona, CA 92879</span>
              </div>
              <div className="flex items-center gap-2">
                <Image src="/clocklogo.png" alt="Hours" width={22} height={22} />
                <span className="font-semibold">Mon–Fri 7AM–4PM | Sat–Sun Closed</span>
              </div>
            </div>
          </div>
        </div>
        {/* Right: Contact Form */}
        <div className="flex-1 flex flex-col justify-center bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Request an Estimate</h2>
          <EstimateForm variant="inline" />
        </div>
      </section>
    </div>
  );
}
