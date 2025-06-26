"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-50">
      <div className="flex justify-between items-center bg-white px-4 py-3 shadow-md">
        <div className="text-lg font-bold">Exclusive Energy</div>
        <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out z-40 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-6 space-y-6 mt-16">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link>
          <Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      </div>
    </div>
  );
}
