import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import MobileNavbarWrapper from "./components/MobileNavbarWrapper";
import { LocalBusinessJsonLd } from "./components/JsonLd";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  keywords: [
    "commercial electrical contractor",
    "industrial electrical contractor",
    "Southern California electrician",
    "Corona CA electrician",
    "tenant improvements",
    "EV charging installation",
    "warehouse power",
    "lighting retrofit",
    "ABC member",
  ],
  applicationName: SITE_NAME,
  authors: [{ name: SITE_NAME }],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      {
        url: "https://res.cloudinary.com/dtqxebti9/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1750887002/heroweb2_tryzvi.jpg",
        width: 1200,
        height: 630,
        alt: SITE_NAME,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} — ${SITE_TAGLINE}`,
    description: SITE_DESCRIPTION,
    images: [
      "https://res.cloudinary.com/dtqxebti9/image/upload/c_fill,g_auto,w_1200,h_630,f_auto,q_auto/v1750887002/heroweb2_tryzvi.jpg",
    ],
  },
  robots: { index: true, follow: true },
  icons: {
    icon: [
      { url: "/icon.png", type: "image/png" },
      { url: "/exclusive-logo.png", type: "image/png" },
    ],
    apple: "/exclusive-logo.png",
    shortcut: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-800">
        <LocalBusinessJsonLd />
        {/* ✅ Global Mobile/Desktop Navbar */}
        <MobileNavbarWrapper />

        {/* ✅ Page Content */}
        <main className="flex-grow pt-20 md:pt-0">{children}</main>

        {/* ✅ Footer */}
        <footer className="bg-white text-black">
          <div className="py-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 items-start">
            {/* Left Column - ABC Info */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-6 mb-4">
                <Image src="/abc-member.png" alt="ABC Member" width={96} height={96} />
                <Image src="/we-support-our-troops.png" alt="We Support Our Troops" width={96} height={96} />
              </div>
              <p className="text-sm leading-relaxed">
                We are proud members of the Associated Builders and Contractors, a national trade association
                representing over 23,000 members. Rooted in the merit shop philosophy, ABC helps members deliver
                safe, ethical, and profitable work that benefits our communities.
              </p>
              <p className="mt-4 text-xs text-gray-600">CSLB License #902374 · C-10 Electrical Contractor</p>
              <div className="mt-4 flex items-center gap-4">
                <a
                  href="https://www.facebook.com/exclusiveenergyinc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Image
                    src="/facebook.png"
                    alt="Facebook"
                    width={28}
                    height={28}
                    className="transition-transform hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.instagram.com/exclusive_energy_electric/reels/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <Image
                    src="/instagram.png"
                    alt="Instagram"
                    width={28}
                    height={28}
                    className="transition-transform hover:scale-110"
                  />
                </a>
                <a
                  href="https://www.linkedin.com/company/exclusive-energy-inc-"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Image
                    src="/linkedin.png"
                    alt="LinkedIn"
                    width={28}
                    height={28}
                    className="transition-transform hover:scale-110"
                  />
                </a>
              </div>
            </div>

            {/* Middle Column - Google Map */}
            <div className="w-full h-full">
              <iframe
                title="Exclusive Energy & Electric Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.5580402543136!2d-117.56695042365477!3d33.88388592549411!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80dcae088a650f3b%3A0x1f08774676c62688!2s102%20E%20Grand%20Blvd%2C%20Corona%2C%20CA%2092879!5e0!3m2!1sen!2sus!4v1719530958699!5m2!1sen!2sus"
                width="100%"
                height="250"
                className="rounded-md shadow-md"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>

            {/* Right Column - Quick Links and Contact */}
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li><Link href="/about" className="hover:text-blue-600">About</Link></li>
                  <li><Link href="/services" className="hover:text-blue-600">Services</Link></li>
                  <li><Link href="/portfolio" className="hover:text-blue-600">Portfolio</Link></li>
                  <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-4">Contact</h3>
  <div className="flex items-center mb-2">
    <Image src="/phone.png" alt="Phone" width={20} height={20} className="mr-2" />
    <p className="text-sm">951-299-7505</p>
                </div>
                <div className="flex items-center mb-2">
                  <Image src="/emaillogo.png" alt="Email" width={20} height={20} className="mr-2" />
                  <p className="text-sm">estimating@exclusive-ca.com</p>
                </div>
                <div className="flex items-center mb-2">
                  <Image src="/locationlogo.png" alt="Location" width={20} height={20} className="mr-2" />
                  <p className="text-sm">102 E Grand Blvd, Corona, CA 92879</p>
                </div>
                <div className="flex items-center mb-2">
                  <Image src="/clocklogo.png" alt="Hours" width={20} height={20} className="mr-2" />
                  <p className="text-sm">Mon–Fri 7AM–4PM<br />Sat–Sun Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Blue Bar */}
          <div className="bg-blue-600 text-white py-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Exclusive Energy & Electric. All rights reserved.</p>
            <p>We support our troops | ABC Certified | Licensed & Insured</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
