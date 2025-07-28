"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

export default function MobileNavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-white shadow-md">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image src="/exclusive-logo.png" alt="Logo" width={40} height={40} />
          <span className="text-lg font-semibold">Exclusive Energy & Electric</span>
        </div>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
          className="text-black z-[60]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 h-full bg-white shadow-lg z-50 p-6"
          >
            <ul className="space-y-6 text-lg">
              <li><Link href="/about" onClick={() => setIsOpen(false)}>About</Link></li>
              <li><Link href="/#services" onClick={() => setIsOpen(false)}>Services</Link></li>
              <li><Link href="/#portfolio" onClick={() => setIsOpen(false)}>Portfolio</Link></li>
              <li><Link href="/#contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
