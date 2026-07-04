"use client";

import { motion } from "framer-motion";
import {
  ShieldCheck,
  Headphones,
  Zap,
  Banknote,
  Droplets,
  ShieldAlert,
  Wrench,
  MapPin,
} from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Verified Vehicles",
    description: "Every vehicle undergoes a 150-point quality inspection before every booking.",
    iconColor: "text-emerald-600",
    iconBg: "bg-emerald-100",
    lineColor: "bg-emerald-500"
  },
  {
    icon: Headphones,
    title: "24x7 Customer Support",
    description: "Dedicated support team available anytime during your journey.",
    iconColor: "text-blue-600",
    iconBg: "bg-blue-100",
    lineColor: "bg-blue-500"
  },
  {
    icon: Zap,
    title: "Instant Booking",
    description: "Reserve your favorite vehicle in under 2 minutes with ease.",
    iconColor: "text-amber-500",
    iconBg: "bg-amber-100",
    lineColor: "bg-amber-400"
  },
  {
    icon: Banknote,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges or surprise fees.",
    iconColor: "text-violet-600",
    iconBg: "bg-violet-100",
    lineColor: "bg-violet-500"
  },
  {
    icon: Droplets,
    title: "Sanitized Cars",
    description: "Every vehicle is cleaned and sanitized before delivery for your safety.",
    iconColor: "text-cyan-600",
    iconBg: "bg-cyan-100",
    lineColor: "bg-cyan-500"
  },
  {
    icon: ShieldAlert,
    title: "Insurance Included",
    description: "Drive confidently with comprehensive insurance coverage.",
    iconColor: "text-rose-600",
    iconBg: "bg-rose-100",
    lineColor: "bg-rose-500"
  },
  {
    icon: Wrench,
    title: "Roadside Assist",
    description: "Emergency roadside assistance available 24x7 across your trip.",
    iconColor: "text-orange-600",
    iconBg: "bg-orange-100",
    lineColor: "bg-orange-500"
  },
  {
    icon: MapPin,
    title: "Pickup Locations",
    description: "Pickup available at Nellore, Mypadu Gate, and Kotha Kaluva Centre.",
    iconColor: "text-pink-600",
    iconBg: "bg-pink-100",
    lineColor: "bg-pink-500"
  }
];

export default function Services() {
  return (
    <section 
      className="relative pt-16 pb-12 bg-cover bg-center"
      style={{ backgroundImage: "url('/whychooseus-bg.png')" }}
    >
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/20 to-white/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto">
          <p className="uppercase tracking-[4px] text-yellow-500 font-semibold">
            WHY CHOOSE US
          </p>
          <h2 className="mt-3 text-5xl font-black text-slate-900">
            Experience Premium Self Drive Like
            <span className="text-blue-600">
              {" "}Never Before
            </span>
          </h2>
          <p className="mt-6 text-lg text-slate-600">
            Thousands of customers trust us for safe, premium, and affordable self-drive rentals.
          </p>
        </div>
      </div>

      <style>{`
        @keyframes scroll-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .infinite-scroll {
          animation: scroll-left 40s linear infinite;
        }
        .infinite-scroll:hover {
          animation-play-state: paused;
        }
        .scroll-mask {
          mask-image: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
          -webkit-mask-image: linear-gradient(90deg, transparent 0%, black 5%, black 95%, transparent 100%);
        }
      `}</style>

      <div className="relative z-10 mt-16 w-full overflow-hidden">
        <div className="scroll-mask w-full">
          <div className="infinite-scroll flex gap-8 w-max pb-8 pt-4 px-8">
            {[...services, ...services].map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className="rounded-[30px] bg-[#F7F9FF] p-8 shadow-lg transition-all flex flex-col items-start w-[300px] md:w-[320px] shrink-0"
                >
                  <div className={`flex h-16 w-16 items-center justify-center rounded-full ${item.iconBg} shrink-0`}>
                    <Icon className={item.iconColor} size={24} />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-slate-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                  
                  {/* Decorative Accent Line */}
                  <div className="mt-auto pt-6">
                    <div className={`h-1.5 w-12 rounded-full ${item.lineColor}`}></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

    </section>
  );
}