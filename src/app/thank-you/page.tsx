import Link from "next/link";
import Navigation from "@/components/Navigation";
import { gradients } from "@/config/colors";

export default function ThankYou() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <div className="mb-6">
              <svg
                className="w-20 h-20 mx-auto text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              Thank You!
            </h1>

            <p className="text-xl text-gray-700 mb-6">
              We&apos;ve received your application and are excited to help your family begin their Scouting journey!
            </p>

            <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700">
                A troop coordinator will contact you within <strong>24 hours</strong> to answer any questions and help you get started.
              </p>
            </div>

            <Link
              href="/"
              className="inline-block bg-scouts-bsa-olive text-white px-8 py-3 rounded-lg hover:bg-scouts-bsa-olive-dark transition-colors text-lg font-semibold"
            >
              Return to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
