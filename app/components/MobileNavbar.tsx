"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function MobileNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-gray-200 px-4 py-3 shadow md:hidden">
      <div className="flex justify-between items-center">
        <h1 className="text-xl font-bold">Exclusive Energy & Electric</h1>
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-gray-800"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isOpen && (
        <ul className="mt-4 space-y-2">
          <li>
            <Link href="/" className="block text-gray-800 hover:text-blue-600">Home</Link>
          </li>
          <li>
            <Link href="/about" className="block text-gray-800 hover:text-blue-600">About</Link>
          </li>
          <li>
            <Link href="/#services" className="block text-gray-800 hover:text-blue-600">Services</Link>
          </li>
          <li>
            <Link href="/#contact" className="block text-gray-800 hover:text-blue-600">Contact</Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
