"use client";

import { Car, MapPin, Users, ShieldCheck } from "lucide-react";
import CountUp from "react-countup";

const stats = [
  {
    icon: Car,
    value: 150,
    suffix: "+",
    title: "Premium Cars",
  },
  {
    icon: MapPin,
    value: 50,
    suffix: "+",
    title: "Locations",
  },
  {
    icon: Users,
    value: 1000,
    suffix: "+",
    title: "Happy Customers",
  },
  {
    icon: ShieldCheck,
    value: 24,
    suffix: "/7",
    title: "Support",
  },
];

export default function StatsCard() {
  return (
    <div className="z-30 w-full lg:w-fit">
      <div className="rounded-[20px] bg-white/30 backdrop-blur-2xl shadow-xl border border-white/40 px-4 py-5 md:px-6">

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <div key={index} className="text-center">

                <div className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-blue-50">

                  <Icon className="text-blue-700 w-5 h-5" />

                </div>

                <h3 className="text-xl font-bold text-slate-900">

                  <CountUp
                    end={item.value}
                    duration={2}
                  />

                  {item.suffix}

                </h3>

                <p className="mt-0.5 text-xs text-slate-500">
                  {item.title}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </div>
  );
}