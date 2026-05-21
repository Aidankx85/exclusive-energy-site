"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import SiteNav from "./SiteNav";

export type ServiceDetailProps = {
  number: string;
  title: string;
  subtitle: string;
  intro: string;
  heroImage: string;
  scope: string[];
  whenThisFits: string[];
  whyUs: string[];
  faqs: { q: string; a: string }[];
};

export default function ServiceDetail(props: ServiceDetailProps) {
  const {
    number,
    title,
    subtitle,
    intro,
    heroImage,
    scope,
    whenThisFits,
    whyUs,
    faqs,
  } = props;

  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <SiteNav />

      {/* Hero */}
      <section className="relative w-full h-[60vh] min-h-[420px] overflow-hidden">
        <Image
          src={heroImage}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/65" />
        <div className="relative h-full max-w-6xl mx-auto px-4 sm:px-6 flex flex-col justify-end pb-12 md:pb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-300 font-semibold mb-4">
            Capability {number}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-[1.05] max-w-4xl">
            {title}
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white/85 max-w-2xl">
            {subtitle}
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6 border-b border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
            {intro}
          </p>
        </div>
      </section>

      {/* What's included */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.6 }}
        className="bg-gray-50 py-16 md:py-20 px-4 sm:px-6"
      >
        <div className="max-w-6xl mx-auto">
          <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
            What&apos;s Included
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-10">
            The Scope
          </h2>
          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4">
            {scope.map((item) => (
              <li
                key={item}
                className="flex gap-3 text-gray-800 text-base md:text-lg"
              >
                <span className="text-blue-600 font-bold mt-1">→</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </motion.section>

      {/* When this fits + Why us */}
      <section className="bg-white py-16 md:py-20 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
              When This Fits
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              Typical Projects
            </h2>
            <ul className="space-y-4">
              {whenThisFits.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-blue-600 font-semibold mb-3">
              Why Us
            </p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
              What You Get
            </h2>
            <ul className="space-y-4">
              {whyUs.map((item) => (
                <li key={item} className="flex gap-3 text-gray-700">
                  <span className="text-blue-600 font-bold mt-1">·</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* FAQ */}
      {faqs.length > 0 && (
        <section className="bg-zinc-900 text-white py-16 md:py-20 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-blue-400 font-semibold mb-3">
              FAQ
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Common Questions
            </h2>
            <div className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.q}>
                  <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                    {faq.q}
                  </h3>
                  <p className="text-zinc-300 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="bg-blue-600 text-white py-20 md:py-24 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-5 leading-tight">
            Ready to scope your project?
          </h2>
          <p className="text-lg text-blue-100 mb-10 max-w-2xl mx-auto">
            Send us your plans, timeline, or just a sketch. You&apos;ll hear
            back from a real estimator within one business day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-600 px-8 py-4 rounded font-semibold hover:bg-blue-50 transition shadow-lg w-full sm:w-auto"
            >
              Get a free estimate
            </Link>
            <a
              href="tel:9512997505"
              className="inline-block border-2 border-white text-white px-8 py-4 rounded font-semibold hover:bg-white hover:text-blue-600 transition w-full sm:w-auto"
            >
              Call 951-299-7505
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
