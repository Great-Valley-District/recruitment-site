import Link from "next/link";
import Navigation from "@/components/Navigation";
import { gradients } from "@/config/colors";

export default function ScoutsBSA() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-emerald-800">
          Scouts BSA (Ages 11-17)
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-emerald-700">
              Real Leadership Experience That Colleges and Employers Value
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">Leadership Development Focus:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    High-adventure opportunities unique to our region
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Skills for future success: problem-solving, teamwork, communication
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Real leadership experience through youth-led activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2">✓</span>
                    Blue Ridge Scout Reservation adventures (16,000 acres!)
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Eagle Scout Achievement:</h3>
                <p className="text-gray-700 mb-4">
                  Only 6% of Scouts earn the prestigious Eagle Scout rank. This achievement demonstrates
                  leadership, service, and character that colleges and employers actively seek.
                </p>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-800 font-semibold">
                    &quot;Eagle Scouts are 3x more likely to receive college scholarships and demonstrate
                    proven leadership abilities&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-2xl font-semibold mb-4 text-center">Virginia&apos;s Outdoor Recreation Capital</h3>
            <p className="text-gray-700 text-center">
              Experience camping, hiking, and high adventure opportunities unavailable elsewhere in the region.
              Our location in the Blue Ridge Mountains provides unparalleled outdoor experiences.
            </p>
          </div>

          <div className="text-center">
            <Link
              href="/join-now"
              className="bg-emerald-700 text-white py-3 px-8 rounded-lg hover:bg-emerald-800 transition-colors text-lg inline-block"
            >
              Find Scouts BSA Troops Near You
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}