"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Fuel, Settings, Users, CheckCircle2 } from "lucide-react";

interface CarProps {
  car: {
    name: string;
    brand: string;
    type: string;
    image: string;
    fuel: string;
    transmission: string;
    seats: string;
    mileage: string;
    bootSpace: string;
    airbags: string;
    price12h: string;
    price24h: string;
    availability: string;
    features: string[];
  };
  onBookNow: () => void;
}

export default function CarCard({ car, onBookNow }: CarProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="group flex flex-col overflow-hidden rounded-[24px] bg-white shadow-xl transition-all duration-300 border border-gray-100 h-full"
    >
      <div className="relative h-56 w-full bg-slate-100 border-b border-slate-100">
        <Image
          src={car.image}
          alt={car.name}
          fill
          style={{ objectPosition: 'center 65%' }}
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        
        {/* Availability Badge */}
        {car.availability && (
          <div className="absolute right-4 top-4 rounded-full bg-emerald-100 px-4 py-1 text-xs font-semibold text-emerald-700 backdrop-blur-md">
            {car.availability}
          </div>
        )}
      </div>

      <div className="flex flex-col flex-1 p-5">
        <div className="mb-3">
          <h3 className="text-2xl font-bold text-slate-900">{car.name}</h3>
          <p className="text-gray-500 text-sm mt-1">{car.type}</p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-sm text-gray-600 mb-5 flex-1">
          <div className="flex items-center gap-2">
            <Fuel size={16} className="text-blue-600" />
            <span>{car.fuel}</span>
          </div>
          <div className="flex items-center gap-2">
            <Settings size={16} className="text-blue-600" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-blue-600" />
            <span>{car.seats}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 size={16} className="text-blue-600" />
            <span>{car.mileage}</span>
          </div>
        </div>

        <button
          onClick={onBookNow}
          className="mt-auto flex w-full items-center justify-center rounded-full bg-yellow-400 py-3 text-slate-900 font-bold transition hover:bg-yellow-500"
        >
          Book Now
        </button>
      </div>
    </motion.div>
  );
}