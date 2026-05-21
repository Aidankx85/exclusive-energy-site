"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const NAV_LINKS: Array<{ label: string; href: string }> = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

export default function MobileNavbarWrapper() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 md:hidden bg-zinc-900 text-white shadow-lg">
      <div className="flex items-center justify-between px-4 py-3">
        {/* Logo and Title */}
        <Link href="/" className="flex items-center space-x-3" onClick={() => setIsOpen(false)}>
          <Image src="/exclusive-logo.png" alt="Exclusive Energy & Electric" width={40} height={40} />
          <span className="text-base font-semibold tracking-wide">
            Exclusive Energy &amp; Electric
          </span>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="text-white z-[60] p-1"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Slide-in Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-[60px] bg-black/50 z-40"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.3 }}
              className="fixed top-[60px] bottom-0 right-0 w-3/4 max-w-xs bg-zinc-900 text-white shadow-2xl z-50 p-6 overflow-y-auto"
            >
              <ul className="space-y-1">
                {NAV_LINKS.map(({ label, href }) => (
                  <li key={href}>
                    <Link
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 text-lg font-semibold text-white hover:text-blue-400 border-b border-white/10"
                    >
                      {label}
                    </Link>
                  </li>
                ))}
              </ul>

              <div className="mt-8 pt-6 border-t border-white/10">
                <p className="text-xs uppercase tracking-wider text-zinc-400 font-semibold mb-3">
                  Contact
                </p>
                <a
                  href="tel:9512997505"
                  className="block text-white font-semibold mb-2 hover:text-blue-400"
                >
                  951-299-7505
                </a>
                <a
                  href="mailto:estimating@exclusive-ca.com"
                  className="block text-sm text-zinc-300 hover:text-blue-400 break-all"
                >
                  estimating@exclusive-ca.com
                </a>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
