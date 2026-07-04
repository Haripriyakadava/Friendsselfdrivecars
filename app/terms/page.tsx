import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Terms() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-8">Terms of Service</h1>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              Welcome to Friends Self Drive Cars. By accessing or using our website and services, you agree to be bound by these Terms of Service. Please read them carefully before making a booking.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Eligibility and Booking</h2>
            <p>
              To rent a vehicle, you must be at least 21 years old and possess a valid driver's license. All bookings are subject to vehicle availability and approval by Friends Self Drive Cars.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. Rental Period and Return</h2>
            <p>
              The rental period begins and ends at the times specified in your booking agreement. Vehicles must be returned on time, in the same condition as when rented, and with the required fuel level. Late returns may incur additional charges.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Security Deposit</h2>
            <p>
              A refundable security deposit of ₹3000 is required for all rentals. This deposit will be refunded upon the safe return of the vehicle, provided there are no damages or outstanding charges.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Liability and Insurance</h2>
            <p>
              The renter is responsible for any damage, loss, or theft of the vehicle during the rental period. You must immediately report any accidents or issues to our support team and the local authorities if necessary.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">5. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Service at any time. Your continued use of our services constitutes acceptance of the updated terms.
            </p>
            <p className="mt-8 text-sm text-slate-500">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
