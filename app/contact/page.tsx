"use client";

import Link from "next/link";
import Image from "next/image";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-black">
      <nav className="fixed top-0 w-full z-50 px-14 pt-6 pb-3 flex items-center justify-between bg-gradient-to-b from-black/60 to-transparent">
        <div className="flex items-center gap-6">
          <Link href="/">
            <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={128} height={128} className="mt-2 cursor-pointer" />
          </Link>
          <span className="text-4xl font-bold -mt-1 text-white">Exclusive Energy & Electric</span>
        </div>
        <div className="hidden md:flex items-center gap-12 text-xl font-semibold text-white">
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
        </div>
      </nav>

      <main className="pt-48 px-10">
        <h1 className="text-4xl font-bold text-center mb-10 text-blue-600">Contact Us</h1>
        <p className="text-center max-w-3xl mx-auto text-lg">
          Reach out to us via phone, email, or our social media platforms. We’re here to help with your commercial electrical needs.
        </p>
      </main>
    </div>
  );
}
