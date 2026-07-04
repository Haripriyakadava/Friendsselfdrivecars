"use client";

import {
  Search,
  CalendarCheck,
  KeyRound,
  Route,
} from "lucide-react";

export default function SearchCard() {
  return (
    <div className="absolute right-4 lg:right-12 bottom-0 z-40 w-[95%] lg:w-[90%] max-w-4xl translate-y-1/2">

      <div className="rounded-3xl lg:rounded-full bg-white shadow-2xl border border-gray-100 p-6 lg:px-6 lg:py-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-center">

          {/* Step 1 */}
          <div className="flex items-center gap-3">
            <Search className="text-blue-600 w-5 h-5 shrink-0" />
            <div>
              <p className="font-medium text-sm text-slate-800">
                Choose Your Car
              </p>
              <p className="text-gray-500 text-xs">
                Browse our premium fleet
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex items-center gap-3">
            <CalendarCheck className="text-blue-600 w-5 h-5 shrink-0" />
            <div>
              <p className="font-medium text-sm text-slate-800">
                Book Online
              </p>
              <p className="text-gray-500 text-xs">
                Select your pickup date
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex items-center gap-3">
            <KeyRound className="text-blue-600 w-5 h-5 shrink-0" />
            <div>
              <p className="font-medium text-sm text-slate-800">
                Pickup Vehicle
              </p>
              <p className="text-gray-500 text-xs">
                Verify your documents
              </p>
            </div>
          </div>

          {/* Step 4 (Button) */}
          <button
            onClick={() => document.getElementById('cars')?.scrollIntoView({ behavior: 'smooth' })}
            className="flex items-center justify-center gap-2 rounded-full bg-[#081A4B] py-3 text-white font-medium hover:bg-[#10286e] transition text-sm"
          >
            <Route size={16} />
            Enjoy Your Ride
          </button>

        </div>

      </div>

    </div>
  );
}