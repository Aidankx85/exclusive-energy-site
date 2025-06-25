// app/service-details/wiring/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";

export default function WiringPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 p-10 pt-32 text-center">
      <Image src="/exclusive-logo.png" alt="Exclusive Logo" width={100} height={100} className="mx-auto mb-6" />
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Wiring & Control</h1>
      <p className="text-lg text-gray-700 mb-4">This page is currently under construction. Check back soon!</p>
      <Link href="/" className="text-blue-500 underline hover:text-blue-700">Back to Home</Link>
    </div>
  );
}
