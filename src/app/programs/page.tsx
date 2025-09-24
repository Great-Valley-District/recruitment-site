import Link from "next/link";
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function Programs() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
            Scouting Programs
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Adventure, friendship, and character development through age-appropriate programs
            designed to help youth grow into confident, capable leaders
          </p>
        </div>

        {/* Program Comparison */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          <Link href="/programs/cub-scouts" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-sky-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2">
                      <Icon name="backpack" className="text-white" size="xl" />
                    </div>
                    <h2 className="text-2xl font-bold">Cub Scouts</h2>
                    <p className="text-blue-100">Ages 5-10</p>
                  </div>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-sky-800 mb-3">
                  Family Program Emphasis
                </h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Quality family time and adventure experiences
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Learning by doing with age-appropriate activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Building friendships and confidence
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Shared adventures create lasting memories
                  </li>
                </ul>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <p className="text-sky-800 font-medium text-sm">
                    &quot;Parent involvement isn&apos;t a burden—it&apos;s an opportunity for shared adventures!&quot;
                  </p>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/programs/scouts-bsa" className="block group">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="bg-emerald-600 text-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="mb-2">
                      <Icon name="mountain" className="text-white" size="xl" />
                    </div>
                    <h2 className="text-2xl font-bold">Scouts BSA</h2>
                    <p className="text-emerald-100">Ages 11-17</p>
                  </div>
                  <span className="text-white group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-emerald-800 mb-3">
                  Leadership Development Focus
                </h3>
                <ul className="space-y-2 text-gray-700 mb-4">
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Real leadership experience that colleges value
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    High-adventure opportunities unique to our region
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Skills for future success and problem-solving
                  </li>
                  <li className="flex items-start">
                    <span className="text-emerald-600 mr-2 mt-1">✓</span>
                    Eagle Scout achievement (only 6% earn it!)
                  </li>
                </ul>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <p className="text-emerald-800 font-medium text-sm">
                    &quot;Eagle Scouts are 3x more likely to receive college scholarships&quot;
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Age Progression Guide */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Age Progression in Scouting
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-8">
            <div className="text-center">
              <div className="bg-sky-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Icon name="backpack" className="text-sky-600" size="xl" />
              </div>
              <h3 className="font-semibold text-sky-800">Cub Scouts</h3>
              <p className="text-gray-600">Ages 5-10</p>
              <p className="text-sm text-gray-500">Family Adventures</p>
            </div>

            <div className="hidden md:block text-gray-400">
              <span className="text-2xl">→</span>
            </div>

            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Icon name="mountain" className="text-emerald-600" size="xl" />
              </div>
              <h3 className="font-semibold text-emerald-800">Scouts BSA</h3>
              <p className="text-gray-600">Ages 11-17</p>
              <p className="text-sm text-gray-500">Leadership & Eagle Scout</p>
            </div>

            <div className="hidden md:block text-gray-400">
              <span className="text-2xl">→</span>
            </div>

            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-4">
                <Icon name="graduation" className="text-purple-600" size="xl" />
              </div>
              <h3 className="font-semibold text-purple-800">Adult Leaders</h3>
              <p className="text-gray-600">18+</p>
              <p className="text-sm text-gray-500">Mentoring & Service</p>
            </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <div className="bg-gray-50 rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            What Your Family Gains
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="mountain" className="text-emerald-600" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Adventure & Outdoor Skills</h3>
              <p className="text-gray-600">
                Camping, hiking, and outdoor experiences in the Blue Ridge Mountains.
                Skills that last a lifetime in nature&apos;s classroom.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="text-sky-600" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Character & Values</h3>
              <p className="text-gray-600">
                Trustworthiness, loyalty, and kindness. Building character through
                real-world experiences and positive peer relationships.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="target" className="text-purple-600" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Leadership & Success</h3>
              <p className="text-gray-600">
                Real leadership experience that colleges and employers recognize.
                Problem-solving and teamwork skills for future success.
              </p>
            </div>
          </div>
        </div>

        {/* Cost Transparency */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
            Great Value Year-Round Program
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4 text-emerald-700">Annual Investment</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span>Annual membership</span>
                  <span className="font-semibold">$160</span>
                </div>
                <div className="flex justify-between">
                  <span>Handbook & materials</span>
                  <span className="font-semibold">$50-75</span>
                </div>
                <div className="flex justify-between">
                  <span>Uniform & equipment</span>
                  <span className="font-semibold">$100-150</span>
                </div>
                <div className="flex justify-between">
                  <span>Activities & camping</span>
                  <span className="font-semibold">$50-100</span>
                </div>
                <div className="border-t pt-2 flex justify-between font-bold text-lg">
                  <span>Total Annual Cost</span>
                  <span className="text-emerald-700">$275-400</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-sky-700">Financial Support Available</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Need-based scholarships available
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Payment plans for equipment and camps
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Fundraising opportunities offset costs
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  Equipment lending library for new families
                </li>
              </ul>
              <div className="bg-sky-50 p-4 rounded-lg mt-4">
                <p className="text-sky-800 font-semibold text-center">
                  &quot;No Scout is denied participation due to financial hardship&quot;
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-600">
              <strong>Value comparison:</strong> Year-round adventure program costs less than one season of many youth sports!
            </p>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Ready to Start the Adventure?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join 1,000+ Great Valley families who have discovered the joy of Scouting.
            Find your local troop and begin the journey today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/join-now"
              className="bg-emerald-700 text-white px-8 py-4 rounded-lg hover:bg-emerald-800 transition-colors text-lg font-semibold"
            >
              Find Your Local Troop
            </Link>
            <Link
              href="/join-now"
              className="border-2 border-emerald-700 text-emerald-700 px-8 py-4 rounded-lg hover:bg-emerald-700 hover:text-white transition-colors text-lg font-semibold"
            >
              Join Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4 mt-16">
        <div className="container mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Great Valley District. Part of Scouting America.
          </p>
        </div>
      </footer>
    </div>
  );
}