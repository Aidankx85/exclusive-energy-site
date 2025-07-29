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

export default function ContactPage() {
  const [currentImage, setCurrentImage] = useState(0);
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

    // Add your webhook here if needed
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
          {[
            { text: "Home", href: "/" },
            { text: "About Us", href: "/about" },
            { text: "Services", href: "/services" },
            { text: "Portfolio", href: "/portfolio" },
            { text: "Contact", href: "/contact" },
          ].map(({ text, href }) => (
            <Link key={text} href={href}>
              <span className="hover:text-blue-400 relative group cursor-pointer">
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
      </nav>

      {/* Hero Section */}
      <section
        className="h-[50vh] bg-cover bg-center flex flex-col justify-center items-center px-10 transition-all duration-1000 ease-in-out relative pt-32"
        style={{ backgroundImage: `url('${heroImages[currentImage]}')` }}
      >
        <div className="absolute inset-0 bg-black/40 z-0" />
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="text-5xl font-extrabold mb-4 text-white tracking-wider text-center drop-shadow-lg">
            Contact Us
          </h1>
          <p className="text-lg text-center text-white/90 font-medium">
            Let’s power your next project. Call, email, or use our form below.
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-white py-20 px-4 flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto w-full text-gray-900">
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
          <h2 className="text-2xl font-bold mb-4 text-blue-700">Send a Message</h2>
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center h-full">
              <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={80} height={80} className="mb-4" />
              <h3 className="text-xl font-semibold text-green-700 mb-2">Thank you!</h3>
              <p className="text-gray-700 text-center">We received your message and will get back to you soon.</p>
            </div>
          ) : (
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                name="fullName"
                type="text"
                placeholder="Full Name"
                className="border rounded px-4 py-2 text-black"
                required
              />
              <input
                name="email"
                type="email"
                placeholder="Email Address"
                className="border rounded px-4 py-2 text-black"
                required
              />
              <input
                name="phone"
                type="tel"
                placeholder="Phone Number"
                className="border rounded px-4 py-2 text-black"
              />
              <textarea
                name="message"
                placeholder="How can we help you?"
                className="border rounded px-4 py-2 text-black min-h-[120px]"
                required
              />
              <button
                type="submit"
                className="bg-blue-600 text-white font-semibold px-6 py-3 rounded hover:bg-blue-700 transition"
              >
                Send Message
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
