import Link from "next/link";
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function FAQs() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-yellow-800">
          Frequently Asked Questions
        </h1>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 text-center mb-8">
            Get answers to common questions about joining Scouting in the Great Valley
          </p>

          <div className="space-y-6">
            {/* Cost Questions */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-emerald-700 flex items-center">
                <Icon name="target" className="mr-2" size="md" />
                Cost & Value
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How much does Scouting cost?</h3>
                  <p className="text-gray-700">
                    <strong>Total annual cost: $275-400</strong> (varies by program)
                    <br />• Annual membership: $85 youth + local council fees (~$75)
                    <br />• Handbook and materials: $50-75
                    <br />• Uniform and equipment: $100-150
                    <br />• Activities and camping: $50-100
                    <br /><br />
                    <em>Value comparison: Year-round adventure program costs less than one season of many youth sports!</em>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Are scholarships available?</h3>
                  <p className="text-gray-700">
                    <strong>Yes!</strong> No Scout is denied participation due to financial hardship. We offer:
                    <br />• Need-based scholarships for membership and activities
                    <br />• Payment plans for equipment and camp fees
                    <br />• Fundraising opportunities that offset family costs
                    <br />• Equipment lending library for new families
                  </p>
                </div>
              </div>
            </div>

            {/* Time Commitment */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-sky-700 flex items-center">
                <Icon name="clock" className="mr-2" size="md" />
                Time Commitment
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How much time does Scouting require?</h3>
                  <p className="text-gray-700">
                    <strong>Flexible family involvement options:</strong>
                    <br />• Weekly meetings: 1.5 hours (Cub Scouts often include families)
                    <br />• Monthly camping trips: Optional but highly recommended
                    <br />• Parent involvement: As much or as little as your schedule allows
                    <br />• Special events: 4-6 times per year
                    <br /><br />
                    <em>Many families find Scouting helps them spend more quality time together through shared adventures!</em>
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Do parents have to volunteer?</h3>
                  <p className="text-gray-700">
                    Parent involvement enhances the experience but is flexible. You can help as:
                    <br />• Assistant leader (with training)
                    <br />• Activity helper for events you can attend
                    <br />• Merit badge counselor in your area of expertise
                    <br />• Supportive family participating in appropriate activities
                  </p>
                </div>
              </div>
            </div>

            {/* Safety & Program */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-red-700 flex items-center">
                <Icon name="shield" className="mr-2" size="md" />
                Safety & Program Quality
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How safe is Scouting?</h3>
                  <p className="text-gray-700">
                    <strong>Safety is our highest priority:</strong>
                    <br />• All leaders complete Youth Protection Training before interacting with youth
                    <br />• Enhanced background checks for all volunteers
                    <br />• Two-deep leadership: multiple adult supervision at all activities
                    <br />• 24/7 Scouts First helpline: 1-844-SCOUTS1
                    <br />• Comprehensive insurance and emergency procedures
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What makes Great Valley Scouting special?</h3>
                  <p className="text-gray-700">
                    <strong>Virginia&apos;s outdoor recreation capital advantage:</strong>
                    <br />• Blue Ridge Scout Reservation: 16,000 acres (largest council-owned nationally)
                    <br />• 50+ miles of hiking trails through Blue Ridge Mountains
                    <br />• High-adventure opportunities unavailable elsewhere in the region
                    <br />• Professional outdoor programming with certified instructors
                  </p>
                </div>
              </div>
            </div>

            {/* Getting Started */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-purple-700 flex items-center">
                <Icon name="compass" className="mr-2" size="md" />
                Getting Started
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">How do we join?</h3>
                  <p className="text-gray-700">
                    <strong>Simple 3-step process:</strong>
                    <br />1. <strong>Find your troop:</strong> Enter your zip code to find nearby troops
                    <br />2. <strong>Visit a meeting:</strong> No commitment - just come see what we do
                    <br />3. <strong>Join when ready:</strong> Complete application and begin adventures
                    <br /><br />
                    Most families know within one visit if Scouting is right for them!
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What age groups participate?</h3>
                  <p className="text-gray-700">
                    <br />• <strong>Cub Scouts (ages 5-10):</strong> Family program with age-appropriate adventures
                    <br />• <strong>Scouts BSA (ages 11-17):</strong> Youth-led program focusing on leadership development
                    <br />• <strong>All genders welcome!</strong> Scouting America serves all youth regardless of gender
                  </p>
                </div>
              </div>
            </div>

            {/* Eagle Scout */}
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4 text-amber-700 flex items-center">
                <Icon name="star" className="mr-2" size="md" />
                Eagle Scout Achievement
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">What is Eagle Scout?</h3>
                  <p className="text-gray-700">
                    <strong>The most prestigious youth achievement in America:</strong>
                    <br />• Only 6% of Scouts earn Eagle Scout rank
                    <br />• Requires leadership of a community service project
                    <br />• Demonstrates character, fitness, and citizenship
                    <br />• Recognized by colleges and employers nationwide
                    <br />• Eagle Scouts are 3x more likely to receive college scholarships
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 bg-emerald-50 border border-emerald-200 rounded-lg p-8 text-center">
            <h3 className="text-2xl font-semibold mb-4 text-emerald-800">Still Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              We&apos;re here to help! Contact us directly or visit a local troop meeting to get all your questions answered.
            </p>
            <div className="space-y-2 mb-6">
              <p><strong>General Information:</strong> info@roanokevalleyscouts.org</p>
              <p><strong>Phone:</strong> (540) 555-SCOUT</p>
              <p><strong>24/7 Support:</strong> 1-844-SCOUTS1</p>
            </div>
            <Link href="/join-now" className="bg-emerald-700 text-white py-3 px-8 rounded-lg hover:bg-emerald-800 transition-colors text-lg inline-block">
              Find Your Local Troop
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}