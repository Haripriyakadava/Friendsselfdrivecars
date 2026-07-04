"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MessageCircle, Mail, MapPin, Send } from "lucide-react";

export default function CTA() {
  return (
    <section className="relative pt-12 pb-28 overflow-hidden">

      {/* Background */}

      <img
        src="/hero-bg.png"
        alt="CTA Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-[#081A4B]/75" />

      {/* Decorative Glow */}

      <div className="absolute -top-20 left-20 h-72 w-72 rounded-full bg-yellow-400/20 blur-[120px]" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-400/20 blur-[150px]" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="uppercase tracking-[5px] text-yellow-400 font-semibold"
        >
          READY TO DRIVE?
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-5xl md:text-6xl font-black text-white leading-tight"
        >
          Book Your Dream Car
          <br />
          <span className="text-yellow-400">Today</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
        >
          Choose from our premium fleet of self-drive cars and enjoy a
          hassle-free travel experience with flexible booking and transparent
          pricing.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-6"
        >
          {/* Primary Button */}

          <button
            onClick={() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center gap-3 rounded-full bg-yellow-400 px-8 py-5 font-semibold text-slate-900 shadow-2xl transition hover:scale-105 hover:bg-yellow-500"
          >
            Explore Cars
            <ArrowRight size={18} />
          </button>

          {/* Secondary Button */}

          <a
            href="tel:+917396764478"
            className="flex items-center gap-3 rounded-full border border-white/40 bg-white/10 px-8 py-5 font-semibold text-white backdrop-blur-lg transition hover:scale-105 hover:bg-white/20"
          >
            <Phone size={18} />
            Call Us
          </a>
        </motion.div>

        {/* Contact Form Grid */}
        <motion.div
          id="contact-form"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8 }}
          className="mt-20 max-w-7xl mx-auto scroll-mt-32"
        >
          <div className="grid gap-8 lg:grid-cols-2 text-left mt-8">
            
            {/* Left: Contact Info Cards (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Phone */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col items-start transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Phone className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                <p className="text-gray-300 text-sm">+91 73967 64478</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col items-start transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <MessageCircle className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
                <p className="text-gray-300 text-sm">+91 73967 64478</p>
              </div>

              {/* Email */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col items-start transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <Mail className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                <p className="text-gray-300 text-sm break-all">info@friendsselfdrivecars.com</p>
              </div>

              {/* Location */}
              <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-2xl border border-white/20 flex flex-col items-start transition-transform hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mb-6">
                  <MapPin className="text-yellow-400" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                <p className="text-gray-300 text-sm leading-relaxed">Kodurupadu, Nellore</p>
              </div>

            </div>

            {/* Right: Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-white/20 h-full">
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>

              <form className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <input type="text" placeholder="First Name" className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                  <input type="text" placeholder="Last Name" className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                </div>
                <input type="email" placeholder="Email Address" className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition" />
                <textarea placeholder="Your message..." rows={4} className="w-full bg-white/5 border border-white/20 text-white placeholder:text-gray-400 text-sm rounded-xl px-5 py-4 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:border-transparent transition resize-none"></textarea>
                <button type="button" className="w-full mt-2 bg-yellow-400 hover:bg-yellow-500 text-slate-900 font-bold text-[15px] py-4 rounded-xl shadow-lg shadow-yellow-400/20 transition-all hover:scale-[1.02] flex items-center justify-center gap-2">
                  <Send size={18} />
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}