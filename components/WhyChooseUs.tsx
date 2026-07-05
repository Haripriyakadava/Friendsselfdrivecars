"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  ShieldCheck,
  Star,
  Car,
  Target,
  Eye,
  Headset,
  Tag,
  CalendarCheck,
} from "lucide-react";
import { CircularImageCarousel } from "@/components/ui/circular-image-carousel";

const carouselImages = [
  "/ertiga.jpeg",
  "/swiftdzire.png",
  "/thar.png",
  "/hyundaicreta.png",
  "/baleno.png",
];

export default function WhyChooseUs() {
  return (
    <section 
      className="relative pt-12 pb-28 overflow-hidden bg-cover bg-center"
      style={{ backgroundImage: "url('/about-bg.png')" }}
    >
      {/* Fog Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F8FAFF]/90 via-[#F8FAFF]/40 to-[#F8FAFF]/90"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Mobile Heading */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:hidden mb-10"
        >
          <div className="inline-block bg-yellow-100/50 border border-yellow-200 text-yellow-600 font-bold px-4 py-1.5 rounded-full text-[11px] tracking-[2px] w-max mb-5 uppercase">
            About Friends Self Drive Cars
          </div>
          
          <div>
            <h2 className="text-4xl font-black text-slate-900 leading-[1.15]">
              Driven by Freedom.<br/>
              Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Every<br/>Journey.</span>
            </h2>
            <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-violet-100 rounded-full mt-5"></div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Left: Image Carousel with Floating Badges */}
          <div className="relative w-full max-w-[520px] mx-auto lg:mx-0">
            <div className="relative w-full">
              <CircularImageCarousel images={carouselImages} />
              
              {/* Floating Badges */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="absolute top-12 -left-4 md:-left-6 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2.5 border border-slate-100 z-10"
            >
              <Star className="text-yellow-500 w-4 h-4 fill-yellow-500" />
              <span className="font-bold text-slate-800 text-xs">Premium Fleet</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute bottom-20 -left-4 md:-left-6 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2.5 border border-slate-100 z-10"
            >
              <Car className="text-yellow-500 w-4 h-4" />
              <span className="font-bold text-slate-800 text-xs">Self Drive</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 bg-white shadow-lg rounded-full px-4 py-2 flex items-center gap-2.5 border border-slate-100 z-10"
            >
              <ShieldCheck className="text-green-500 w-4 h-4" />
              <span className="font-bold text-slate-800 text-xs">Verified Vehicles</span>
            </motion.div>
            </div>
          
          {/* Feature Card Below Image */}
          <div className="w-full bg-white rounded-[1.5rem] py-5 px-4 shadow-xl border border-slate-100 mt-16 flex items-center justify-between divide-x divide-slate-100 hidden lg:flex">
            {/* Safe & Secure */}
            <div className="flex items-center gap-2.5 px-3 w-1/4">
              <div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-[18px] h-[18px] text-purple-600" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Safe &amp; Secure</h4>
                <p className="text-[9px] text-slate-500 mt-0.5 leading-[1.3]">Your safety is our priority</p>
              </div>
            </div>
            {/* 24x7 Support */}
            <div className="flex items-center gap-2.5 px-3 w-1/4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                <Headset className="w-[18px] h-[18px] text-blue-600" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-800 leading-tight">24x7 Support</h4>
                <p className="text-[9px] text-slate-500 mt-0.5 leading-[1.3]">We're here anytime, anywhere</p>
              </div>
            </div>
            {/* Best Prices */}
            <div className="flex items-center gap-2.5 px-3 w-1/4">
              <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                <Tag className="w-[18px] h-[18px] text-orange-500" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Best Prices</h4>
                <p className="text-[9px] text-slate-500 mt-0.5 leading-[1.3]">Affordable rates guaranteed</p>
              </div>
            </div>
            {/* Easy Booking */}
            <div className="flex items-center gap-2.5 px-3 w-1/4">
              <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center shrink-0">
                <CalendarCheck className="w-[18px] h-[18px] text-green-600" />
              </div>
              <div>
                <h4 className="text-[11px] font-bold text-slate-800 leading-tight">Easy Booking</h4>
                <p className="text-[9px] text-slate-500 mt-0.5 leading-[1.3]">Book in minutes and hit the road</p>
              </div>
            </div>
          </div>
          </div>

          {/* Right: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center"
          >
            <div className="hidden lg:block">
              <div className="inline-block bg-yellow-100/50 border border-yellow-200 text-yellow-600 font-bold px-4 py-1.5 rounded-full text-xs tracking-[2px] w-max mb-6 uppercase">
                About Friends Self Drive Cars
              </div>
              
              <div className="mb-8">
                <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-[1.15]">
                  Driven by Freedom.<br/>
                  Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">Every<br/>Journey.</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-blue-600 to-violet-100 rounded-full mt-5"></div>
              </div>
            </div>
            
            <div className="space-y-5 text-slate-500 font-medium leading-[1.8] text-[16px] mb-10">
              <p>
                At Friends Self Drive Cars, we believe every road trip should be unforgettable.
              </p>
              <p>
                Our premium fleet of self-drive vehicles combines luxury, comfort, safety, and performance to give you complete freedom wherever you travel.
              </p>
              <p>
                Whether you're planning a weekend getaway, business trip, family vacation, or long drive, we provide clean, well-maintained vehicles backed by exceptional customer support.
              </p>
            </div>
            
            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Mission Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-md border border-slate-100 transition-transform hover:-translate-y-1 overflow-hidden">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-orange-50 flex items-center justify-center shrink-0">
                    <Target className="text-orange-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-black text-orange-500 uppercase tracking-[1px]">Our Mission</h3>
                    <div className="h-0.5 w-6 bg-orange-500 rounded-full mt-1.5"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                  Deliver premium driving experiences with transparent pricing, reliable service, and maximum convenience for every customer.
                </p>
                {/* Dot Pattern */}
                <div className="absolute bottom-2 right-2 opacity-30">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots-m" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#cbd5e1"/>
                    </pattern>
                    <rect width="40" height="40" fill="url(#dots-m)"/>
                  </svg>
                </div>
              </div>
              
              {/* Vision Card */}
              <div className="relative bg-white rounded-2xl p-6 shadow-md border border-slate-100 transition-transform hover:-translate-y-1 overflow-hidden">
                <div className="flex items-center gap-4 mb-5">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center shrink-0">
                    <Eye className="text-blue-600 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-[13px] font-black text-blue-600 uppercase tracking-[1px]">Our Vision</h3>
                    <div className="h-0.5 w-6 bg-blue-600 rounded-full mt-1.5"></div>
                  </div>
                </div>
                <p className="text-sm text-slate-500 leading-relaxed relative z-10 font-medium">
                  To become the most trusted and preferred self-drive rental platform, setting new standards for quality and customer satisfaction.
                </p>
                {/* Dot Pattern */}
                <div className="absolute bottom-2 right-2 opacity-30">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <pattern id="dots-v" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="#cbd5e1"/>
                    </pattern>
                    <rect width="40" height="40" fill="url(#dots-v)"/>
                  </svg>
                </div>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}