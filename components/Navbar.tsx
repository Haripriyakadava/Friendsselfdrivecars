"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navItems = [
  "Home",
  "Cars",
  "Why Choose Us",
  "About",
  "Contact",
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 40);

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    // Scroll Spy for Navbar Active State & URL Hash
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const item = navItems.find(
              (navItem) => navItem.toLowerCase().replace(/ /g, "-") === id
            );
            if (item) {
              setActive(item);
              window.history.replaceState(null, "", "#" + id);
            }
          }
        });
      },
      { rootMargin: "-40% 0px -60% 0px" }
    );

    // Observe all sections
    navItems.forEach((item) => {
      const id = item.toLowerCase().replace(/ /g, "-");
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isHidden ? -100 : 0 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-500 ${
          scrolled
            ? "bg-white/70 backdrop-blur-xl shadow-xl border-b border-white/30"
            : "bg-transparent"
        }`}
      >
        <div className="w-full px-4 lg:px-12 h-20 flex items-center justify-between">
          {/* Logo */}

          <Link href="/" className="flex items-center gap-3 cursor-pointer">
            <Image
              src="/logo.png"
              alt="Friends Self Drive Cars"
              width={180}
              height={60}
              priority
              style={{ width: 'auto', height: 'auto' }}
              className="w-[130px] lg:w-[180px] h-auto"
            />
          </Link>

          {/* Desktop Menu */}

          <nav className="hidden lg:flex items-center gap-10">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActive(item);
                  const id = item.toLowerCase().replace(/ /g, '-');
                  const element = document.getElementById(id);
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                    window.history.pushState(null, '', '#' + id);
                  } else if (item === "About") {
                     if (window.location.pathname === '/') {
                       window.scrollTo({ top: 0, behavior: 'smooth' });
                       window.history.pushState(null, '', '#about');
                     } else {
                       window.location.href = '/#about';
                     }
                  } else {
                     window.location.href = '/#' + id;
                  }
                }}
                className="relative text-[16px] font-semibold text-slate-800 hover:text-amber-500 transition"
              >
                {item}

                {active === item && (
                  <motion.div
                    layoutId="underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] rounded-full bg-amber-400"
                  />
                )}
              </button>
            ))}

            {/* Book Now Button */}
            <a
              href="https://wa.me/917396764478"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center rounded-full bg-yellow-400 px-6 py-2.5 font-bold text-slate-900 shadow-md transition-all duration-300 hover:scale-105 hover:bg-yellow-500"
            >
              Book Now
            </a>
          </nav>

          {/* Right Side */}

          <div className="flex items-center gap-4">



            {/* Mobile Menu */}

            <motion.button
              whileHover={{ rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setMobileOpen(true)}
              className="w-12 h-12 rounded-full bg-yellow-400 text-slate-900 shadow-xl flex items-center justify-center lg:hidden"
            >
              <Menu />
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
            />

            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{
                duration: 0.4,
                type: "spring",
                bounce: 0
              }}
              className="fixed left-0 right-0 top-0 w-full bg-white z-50 shadow-2xl p-8 pb-12 rounded-b-3xl"
            >
              <div className="flex justify-end">
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-900"
                >
                  <X />
                </button>
              </div>

              <div className="mt-8 flex flex-col items-center gap-7">
                {navItems.map((item) => (
                  <button
                    key={item}
                    className="text-center font-semibold text-xl text-slate-800 hover:text-amber-500 transition"
                    onClick={() => {
                      setActive(item);
                      setMobileOpen(false);
                      const id = item.toLowerCase().replace(/ /g, '-');
                      const element = document.getElementById(id);
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                        window.history.pushState(null, '', '#' + id);
                      } else if (item === "About") {
                        if (window.location.pathname === '/') {
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          window.history.pushState(null, '', '#about');
                        } else {
                          window.location.href = '/#about';
                        }
                      } else {
                        window.location.href = '/#' + id;
                      }
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div className="mt-10 mx-auto w-full max-w-[250px]">
                <a 
                  href="https://wa.me/917396764478" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center bg-yellow-400 hover:bg-yellow-500 rounded-full py-4 px-8 font-bold text-slate-900 shadow-xl transition-all"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}