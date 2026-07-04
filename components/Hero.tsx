"use client";

import StatsCard from "./StatsCard";
import SearchCard from "./SearchCard";
import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] pt-16 pb-16 flex flex-col justify-center">

      {/* Static Background */}
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="/hero-bg.png"
          alt="Hero"
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* Left Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-transparent" />
      </div>

      {/* Content */}

      <div className="relative z-10 flex h-full items-center -mt-24 lg:-mt-4">

        <div className="w-full px-4 lg:px-12">

          <div className="max-w-xl">

            {/* Badge */}

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: .6 }}
              className="inline-flex items-center gap-2.5 rounded-full bg-white/80 backdrop-blur-xl px-4 py-2 shadow-xl"
            >
              <Star
                className="fill-yellow-400 text-yellow-400"
                size={14}
              />

              <span className="text-sm font-medium text-slate-800">Premium Self Drive Experience</span>
            </motion.div>

            {/* Heading */}

            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="mt-4 font-black leading-[1.05]"
            >
              <span className="block text-5xl lg:text-[60px] text-slate-900">
                Drive Your
              </span>

              <span className="block text-6xl lg:text-[70px] bg-gradient-to-r from-yellow-400 via-orange-400 to-yellow-500 bg-clip-text text-transparent pb-1">
                Dreams
              </span>
            </motion.h1>

            {/* Paragraph */}

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-2 text-base leading-7 text-slate-700 font-light"
            >
              Premium self drive cars for every journey.<br />
              Luxury, comfort & freedom – all in your hands.
            </motion.p>

            {/* Buttons */}

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .7 }}
              className="mt-6 flex gap-4"
            >
              <a
                href="https://wa.me/917396764478"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-yellow-400 px-6 py-3 font-bold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 hover:bg-yellow-500 flex items-center gap-2"
              >
                Book Now
              </a>

              <button
                onClick={() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' })}
                className="rounded-full bg-white/90 backdrop-blur-xl px-6 py-3 font-semibold text-slate-900 shadow-xl transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                View Cars
                <ArrowRight size={16} />
              </button>
            </motion.div>

            <div className="mt-6">
              <StatsCard />
            </div>

          </div>

        </div>

      </div>
      
      <SearchCard />

    </section>
  );
}