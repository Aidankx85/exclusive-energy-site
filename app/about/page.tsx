'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function AboutPage() {
  const heroImages = [
    '/heroweb1.jpeg',
    '/heroweb2.jpeg',
    '/heroweb3.jpeg',
    '/heroweb4.jpeg',
    '/heroweb5.jpeg'
  ];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      {/* Hero Section */}
      <section className="relative w-full h-[100vh]">
        {/* Background Image */}
        <Image
          src={heroImages[currentImageIndex]}
          alt="Hero Background"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-1000 brightness-75"
          priority
        />

        {/* Navbar Overlay */}
        <div className="absolute top-0 left-0 w-full flex items-center justify-between px-6 sm:px-16 py-6 z-20">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Image src="/exclusive-logo.png" alt="Logo" width={80} height={80} className="cursor-pointer" />
            </Link>
            <span className="text-white text-3xl font-bold">Exclusive Energy & Electric</span>
          </div>
          <nav className="flex items-center space-x-10 text-white text-xl font-semibold">
            {[
              { href: '/', label: 'Home' },
              { href: '/about', label: 'About' },
              { href: '/services', label: 'Services' },
              { href: '/portfolio', label: 'Portfolio' },
              { href: '/contact', label: 'Contact' }
            ].map((item, i) => (
              <Link key={i} href={item.href} passHref>
                <span className="relative hover:text-blue-400 transition duration-300 cursor-pointer hover-underline-animation">
                  {item.label}
                </span>
              </Link>
            ))}
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <Image src="/facebook.png" alt="Facebook" width={30} height={30} className="cursor-pointer invert" />
            </a>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
              <Image src="/instagram.png" alt="Instagram" width={30} height={30} className="cursor-pointer invert" />
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <Image src="/linkedin.png" alt="LinkedIn" width={30} height={30} className="cursor-pointer invert" />
            </a>
          </nav>
        </div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center z-10">
          <div className="flex flex-col md:flex-row items-center backdrop-blur-md bg-white/20 p-10 rounded-lg">
            <Image src="/exclusive-logo.png" alt="Exclusive Energy Logo" width={200} height={200} className="mb-4 md:mb-0 md:mr-10" />
            <div className="border-l border-white/60 pl-10 text-left max-w-xl">
              <h2 className="text-white text-4xl font-bold mb-4">Who We Are</h2>
              <p className="text-white text-lg mb-4 font-semibold">Where Energy Meets Excellence.</p>
              <p className="text-white text-md mb-4">
                Founded as a partnership in 2007, Exclusive Energy & Electric has built a reputation for reliability and precision in commercial electrical contracting. We specialize in real estate developments, retail stores, warehouse infrastructure, government buildings, religious centers, and major clients such as Amazon, Chipotle, and Toyo Tires.
              </p>
              <p className="text-white text-md">
                Locally owned and operated in Southern California, we’ve served the region for over two decades with expertise in tenant improvements, ground-up builds, design-build projects, lighting retrofits, and energy-efficient applications. Whether powering a logistics center or retrofitting a modern retail chain, we deliver excellence at every stage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Extra styles for underline animation */}
      <style jsx>{`
        .hover-underline-animation {
          display: inline-block;
          position: relative;
        }
        .hover-underline-animation::after {
          content: '';
          position: absolute;
          width: 100%;
          transform: scaleX(0);
          height: 2px;
          top: -6px;
          left: 0;
          background-color: white;
          transform-origin: top right;
          transition: transform 0.25s ease-out;
        }
        .hover-underline-animation:hover::after {
          transform: scaleX(1);
          transform-origin: top left;
        }
      `}</style>
    </div>
  );
}
