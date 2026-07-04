import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-20 bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-black text-slate-900 mb-8">Privacy Policy</h1>
          <div className="prose prose-slate max-w-none text-slate-600 space-y-6">
            <p>
              At Friends Self Drive Cars, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">1. Information We Collect</h2>
            <p>
              We may collect personal information that you provide to us, such as your name, email address, phone number, driving license details, and payment information when you make a booking or contact us.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">2. How We Use Your Information</h2>
            <p>
              We use the information we collect to process your bookings, communicate with you, provide customer support, and improve our services. We may also use your information to send you promotional offers and updates, with your consent.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">3. Data Security</h2>
            <p>
              We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, alteration, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure.
            </p>
            <h2 className="text-2xl font-bold text-slate-800 mt-8 mb-4">4. Contact Us</h2>
            <p>
              If you have any questions or concerns about our Privacy Policy or our data practices, please contact us at friends@selfdrive.com or via WhatsApp.
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
