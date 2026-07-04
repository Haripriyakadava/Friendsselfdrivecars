"use client";

import { motion } from "framer-motion";
import {
  Search,
  CalendarCheck,
  KeyRound,
  Route,
} from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Choose Your Car",
    description:
      "Browse our premium fleet and select the perfect car for your journey.",
  },
  {
    icon: CalendarCheck,
    title: "Book Online",
    description:
      "Select your pickup date, time, and location in just a few clicks.",
  },
  {
    icon: KeyRound,
    title: "Pickup Vehicle",
    description:
      "Verify your documents and collect the keys from our location.",
  },
  {
    icon: Route,
    title: "Enjoy Your Ride",
    description:
      "Drive with complete freedom and return the vehicle at your convenience.",
  },
];

export default function RentalProcess() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div className="text-center mb-20">

          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">
            HOW IT WORKS
          </p>

          <h2 className="mt-4 text-5xl font-black text-slate-900">
            Rent a Car in
            <span className="text-blue-600"> 4 Easy Steps</span>
          </h2>

          <p className="mt-6 text-slate-600 max-w-2xl mx-auto text-lg">
            Booking your self-drive car is quick, simple, and hassle-free.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15,
                }}
                whileHover={{
                  y: -12,
                }}
                className="relative rounded-[32px] bg-[#F8FAFF] p-8 shadow-lg border border-gray-100 group"
              >

                {/* Step Number */}

                <div className="absolute -top-5 left-8 h-10 w-10 rounded-full bg-yellow-400 flex items-center justify-center font-bold text-white shadow-lg">
                  {index + 1}
                </div>

                {/* Icon */}

                <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 transition">

                  <Icon
                    size={30}
                    className="text-blue-600 group-hover:text-white transition"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {step.title}
                </h3>

                {/* Description */}

                <p className="mt-4 text-slate-600 leading-7">
                  {step.description}
                </p>

              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
}