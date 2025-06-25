// app/portfolio/page.tsx
"use client";

import Link from "next/link";
import Image from "next/image";

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10 pt-32">
      <div className="max-w-4xl mx-auto text-center">
        <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={100} height={100} className="mx-auto mb-6" />
        <h1 className="text-4xl font-bold text-blue-600 mb-4">Our Portfolio</h1>
        <p className="text-lg mb-6">
          We’re currently building this page. Please check back soon to see our featured projects and installations.
        </p>
        <Link href="/" className="text-blue-500 underline hover:text-blue-700">Back to Home</Link>
      </div>
    </div>
  );
}
