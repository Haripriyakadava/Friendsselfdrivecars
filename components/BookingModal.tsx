"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Calendar, Clock, MapPin, AlertCircle, Info } from "lucide-react";
import Image from "next/image";

interface Car {
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
}

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  car: Car;
}

export default function BookingModal({ isOpen, onClose, car }: BookingModalProps) {
  const [duration, setDuration] = useState<"12" | "24">("24");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const selectedPrice = duration === "12" ? car.price12h : car.price24h;

  const handleWhatsApp = () => {
    const formattedDate = date 
      ? new Date(date).toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })
      : 'Not specified';
      
    let formattedTime = 'Not specified';
    if (time) {
      const [h, m] = time.split(':');
      const hour = parseInt(h, 10);
      formattedTime = `${hour % 12 || 12}:${m} ${hour >= 12 ? 'PM' : 'AM'}`;
    }

    const text = `Hello Friends Self Drive Cars! 🚗

I would like to book the following car:

🚙 *${car.name}*
🎨 Brand: ${car.brand}
📋 Category: ${car.type}

📅 *Booking Details:*
   • Date: ${formattedDate}
   • Time: ${formattedTime}
   • Duration: ${duration} Hours

💰 *Total Amount: ${selectedPrice}*

Please confirm the availability and booking.

Thank you! 😊`;

    window.open(`https://wa.me/917396764478?text=${encodeURIComponent(text)}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative w-full max-w-5xl overflow-hidden rounded-[24px] bg-white shadow-2xl flex flex-col md:flex-row max-h-[95vh] overflow-y-auto"
          >
            {/* Left Side: Car Overview */}
            <div className="w-full md:w-1/2 bg-slate-50 p-5 md:p-6 border-r border-slate-200">
              <div className="mb-3">
                <h2 className="text-3xl font-bold text-slate-900 mb-1">Book {car.name}</h2>
                <p className="text-sm font-medium text-slate-500">{car.brand} • {car.type}</p>
              </div>

              <div className="relative h-48 md:h-56 w-full rounded-2xl overflow-hidden mb-4 shadow-sm bg-slate-100">
                <Image src={car.image} alt={car.name} fill style={{ objectPosition: 'center 65%' }} className="object-cover" />
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2">Car Specifications</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Fuel Type</p>
                  <p className="text-sm font-bold text-slate-800">{car.fuel}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Transmission</p>
                  <p className="text-sm font-bold text-slate-800">{car.transmission}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Seats</p>
                  <p className="text-sm font-bold text-slate-800">{car.seats}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Mileage</p>
                  <p className="text-sm font-bold text-slate-800">{car.mileage}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Boot Space</p>
                  <p className="text-sm font-bold text-slate-800">{car.bootSpace}</p>
                </div>
                <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-center shadow-sm flex flex-col justify-center">
                  <p className="text-[10px] uppercase font-bold text-blue-600 mb-1">Airbags</p>
                  <p className="text-sm font-bold text-slate-800">{car.airbags}</p>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-slate-900 mb-2">Key Features</h3>
              <div className="grid grid-cols-2 gap-y-2 gap-x-2 text-sm font-medium text-slate-600">
                {car.features?.map((feature, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </div>

            {/* Right Side: Booking Form */}
            <div className="w-full md:w-1/2 bg-white p-5 md:p-6 flex flex-col">
              <button 
                onClick={onClose}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-500 hover:bg-slate-200 hover:text-slate-700 transition"
              >
                <X size={16} />
              </button>

              <div className="grid grid-cols-2 gap-4 mb-4 mt-4 md:mt-0">
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Calendar size={16} className="text-yellow-500" /> Pickup Date
                  </label>
                  <input 
                    type="date" 
                    value={date}
                    onChange={(e) => setDate(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition" 
                  />
                </div>
                <div>
                  <label className="flex items-center gap-2 text-sm font-bold text-slate-700 mb-2">
                    <Clock size={16} className="text-yellow-500" /> Pickup Time
                  </label>
                  <input 
                    type="time" 
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm font-medium focus:outline-none focus:border-yellow-400 focus:ring-1 focus:ring-yellow-400 transition" 
                  />
                </div>
              </div>

              <h3 className="text-sm font-bold text-slate-700 mb-2">Rental Duration</h3>
              <div className="grid grid-cols-2 gap-4 mb-4">
                <button
                  onClick={() => setDuration("12")}
                  className={`rounded-2xl border-2 py-4 text-center transition-all ${duration === "12" ? "border-yellow-400 bg-yellow-50/50 shadow-sm" : "border-slate-100 bg-white hover:border-slate-200"}`}
                >
                  <p className={`text-xs font-bold mb-1 uppercase tracking-wider ${duration === "12" ? "text-yellow-600" : "text-slate-400"}`}>12 Hours</p>
                  <p className="text-2xl font-black text-slate-900">{car.price12h}</p>
                </button>
                <button
                  onClick={() => setDuration("24")}
                  className={`rounded-2xl border-2 py-4 text-center transition-all ${duration === "24" ? "border-yellow-400 bg-yellow-50/50 shadow-sm" : "border-slate-100 bg-white hover:border-slate-200"}`}
                >
                  <p className={`text-xs font-bold mb-1 uppercase tracking-wider ${duration === "24" ? "text-yellow-600" : "text-slate-400"}`}>24 Hours</p>
                  <p className="text-2xl font-black text-slate-900">{car.price24h}</p>
                </button>
              </div>

              <div className="flex items-center justify-between border-t border-b border-slate-100 py-3 mb-4">
                <p className="text-sm text-slate-500 font-bold uppercase tracking-wider">Total Amount</p>
                <p className="text-4xl font-black text-slate-900">{selectedPrice}</p>
              </div>

              <div className="space-y-2 mb-4">
                <div className="flex gap-3 items-start">
                  <MapPin size={18} className="text-rose-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">Pickup Points: Nellore, Mypadu Gate, Kotha Kaluva Centre</p>
                </div>
                <div className="flex gap-3 items-start">
                  <AlertCircle size={18} className="text-amber-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">Refundable security deposit of ₹3000 required.</p>
                </div>
                <div className="flex gap-3 items-start">
                  <Info size={18} className="text-blue-500 mt-0.5 shrink-0" />
                  <p className="text-sm font-medium text-slate-500 leading-relaxed">Fuel is not included in the rental price.</p>
                </div>
              </div>

              <button 
                onClick={handleWhatsApp}
                className="mt-auto flex w-full items-center justify-center gap-3 rounded-xl bg-[#25D366] py-3 text-base font-bold text-white transition hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-[#25D366]/30"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
                </svg>
                Book Your Car via WhatsApp
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
