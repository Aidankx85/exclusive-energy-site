import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Exclusive Energy & Electric",
  description: "Southern California Electrical & Lighting Experts",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen bg-white text-gray-800">
        <main className="flex-grow">{children}</main>

        {/* Full Footer */}
        <footer className="bg-white text-black">
          <div className="py-10 max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
            {/* ABC Info + Troops */}
            <div className="flex flex-col items-start">
              <div className="flex items-center gap-6 mb-4">
                <Image src="/abc-member.png" alt="ABC Member" width={48} height={48} />
                <Image src="/we-support-our-troops.png" alt="We Support Our Troops" width={96} height={96} />
              </div>
              <p className="text-sm leading-relaxed">
                We are proud members of the Associated Builders and Contractors, a national trade association
                representing over 23,000 members. Rooted in the merit shop philosophy, ABC helps members deliver
                safe, ethical, and profitable work that benefits our communities.
              </p>
              <p className="mt-4 text-xs text-gray-600">License #902374</p>
            </div>

            {/* Quick Links */}
            <div className="flex flex-col items-center">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="mb-6 space-y-1 text-sm text-center">
                <li>
                  <Link href="/about" className="hover:text-blue-600">+ About</Link>
                </li>
                <li>
                  <Link href="/#services" className="hover:text-blue-600">+ Services</Link>
                </li>
                <li>
                  <Link href="/#contact" className="hover:text-blue-600">+ Contact</Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="flex items-center mb-2">
                <Image src="/phonelogo.png" alt="Phone" width={20} height={20} className="mr-2" />
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

          {/* Blue Bar at the BOTTOM of the footer */}
          <div className="bg-blue-600 text-white py-4 text-center text-sm">
            <p>© {new Date().getFullYear()} Exclusive Energy & Electric. All rights reserved.</p>
            <p>We support our troops | ABC Certified | Licensed & Insured</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
