"use client";

import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { ArrowLeft, ArrowRight } from "lucide-react";

import CarCard from "./CarCard";
import BookingModal from "./BookingModal";
import { cars } from "@/data/cars";
import type { Swiper as SwiperType } from "swiper";

export default function Fleet() {
  const [selectedCar, setSelectedCar] = useState<typeof cars[0] | null>(null);
  const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);

  return (
    <section id="cars" className="pt-28 pb-8 relative bg-cover bg-center" style={{ backgroundImage: "url('/ourfleet-bg.png')" }}>
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-white/50 backdrop-blur-[2px]"></div>

      <div className="w-full px-4 lg:px-12 relative z-10">

        <div className="mb-14 flex items-center justify-between">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-0.5 bg-yellow-500 rounded-full"></div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-yellow-500">
                OUR PREMIUM FLEET
              </p>
            </div>

            <h2 className="text-5xl md:text-6xl font-black text-slate-900 leading-[1.1]">
              Choose Your <br />
              <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent drop-shadow-sm">
                Perfect
              </span>{" "}
              Ride
            </h2>
          </div>

        </div>

        <div className="relative pb-12 group md:px-16">
          <button 
            onClick={() => swiperInstance?.slidePrev()}
            className="absolute left-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:bg-slate-50 transition-all hover:scale-105 border border-slate-100 hidden md:flex"
          >
            <ArrowLeft className="text-slate-900" size={24} />
          </button>

          <button 
            onClick={() => swiperInstance?.slideNext()}
            className="absolute right-0 top-1/2 z-20 -translate-y-1/2 w-14 h-14 rounded-full bg-yellow-400 shadow-xl flex items-center justify-center hover:bg-yellow-500 transition-all hover:scale-105 hidden md:flex"
          >
            <ArrowRight className="text-slate-900" size={24} />
          </button>

          <Swiper
            className="pb-14"
            modules={[Pagination]}
            spaceBetween={25}
            slidesPerView={1}
            pagination={{ clickable: true }}
            onSwiper={setSwiperInstance}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
              1280: {
                slidesPerView: 4,
              }
            }}
          >
          {cars.map((car) => (
            <SwiperSlide key={car.id} className="!h-auto">
              <CarCard car={car} onBookNow={() => setSelectedCar(car)} />
            </SwiperSlide>
          ))}
        </Swiper>
        </div>

      </div>
      
      {selectedCar && (
        <BookingModal 
          isOpen={!!selectedCar} 
          onClose={() => setSelectedCar(null)} 
          car={selectedCar} 
        />
      )}

    </section>
  );
}