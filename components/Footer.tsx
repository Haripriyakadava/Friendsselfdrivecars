"use client";

import Link from "next/link";
import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

const Facebook = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Instagram = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Linkedin = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#071739] text-white">

      {/* Top */}

      <div className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Company */}

          <div>

            <img
              src="/logo.png"
              alt="Friends Self Drive Cars"
              className="h-24 w-auto object-left brightness-0 invert"
            />

            <p className="mt-6 text-gray-300 leading-8">
              Premium self-drive car rental service providing
              safe, affordable and luxury vehicles for every trip.
            </p>

            <div className="mt-8 flex gap-4">

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <Facebook size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <Instagram size={18} />
              </a>

              <a
                href="#"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 hover:bg-yellow-400 hover:text-black transition"
              >
                <Linkedin size={18} />
              </a>

            </div>

          </div>

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="space-y-4">

              {[
                { name: "Home", href: "/#home" },
                { name: "Cars", href: "/#cars" },
                { name: "Why Choose Us", href: "/#why-choose-us" },
                { name: "About", href: "/#about" },
                { name: "Contact", href: "/#contact" },
              ].map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-gray-300 hover:text-yellow-400 transition"
                >
                  {item.name}
                </a>
              ))}

            </div>

          </div>

          {/* Services */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Our Services
            </h3>

            <div className="space-y-4 text-gray-300">

              <p>Self Drive Cars</p>

              <p>Luxury Cars</p>

              <p>SUV Rentals</p>

              <p>Airport Pickup</p>

              <p>Corporate Rentals</p>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-bold mb-6">
              Contact
            </h3>

            <div className="space-y-5">

              <a href="tel:+917396764478" className="flex gap-4 hover:text-yellow-400 transition">
                <Phone className="text-yellow-400" />
                <span>+91 73967 64478</span>
              </a>

              <a href="mailto:info@friendsselfdrivecars.com" className="flex gap-4 hover:text-yellow-400 transition">
                <Mail className="text-yellow-400" />
                <span>
                  info@friendsselfdrivecars.com
                </span>
              </a>

              <div className="flex gap-4">

                <MapPin className="text-yellow-400" />

                <span>
                  Nellore, Andhra Pradesh
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">

          <p className="text-gray-400">
            © {new Date().getFullYear()} Friends Self Drive Cars.
            All Rights Reserved.
          </p>

          <div className="flex gap-8">

            <Link
              href="/privacy-policy"
              className="text-gray-400 hover:text-yellow-400"
            >
              Privacy Policy
            </Link>

            <Link
              href="/terms"
              className="text-gray-400 hover:text-yellow-400"
            >
              Terms Of Service
            </Link>

            <a
              href="https://wa.me/917396764478?text=Hi,%20I%20am%20interested%20in%20booking%20a%20car."
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-yellow-400 flex items-center gap-2"
            >
              Book Now

              <ArrowUpRight size={16} />

            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}