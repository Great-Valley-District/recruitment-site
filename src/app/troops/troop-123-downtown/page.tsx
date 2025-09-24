import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import Link from "next/link";
import { gradients } from "@/config/colors";

export default function Troop123Downtown() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-scout-forest-800">
          Troop 123 - Downtown Great Valley
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-scout-forest-700">Meeting Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Icon name="mapPin" className="text-scout-forest-600 mr-3 mt-1" size="sm" />
                    <div>
                      <p className="font-semibold">Location:</p>
                      <p className="text-scout-stone-700">Downtown Community Center<br />123 Main Street, Great Valley, VA 24016</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="clock" className="text-scout-sky-600 mr-3 mt-1" size="sm" />
                    <div>
                      <p className="font-semibold">Meeting Time:</p>
                      <p className="text-scout-stone-700">Thursdays, 7:00 PM - 8:30 PM</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="users" className="text-scout-earth-600 mr-3 mt-1" size="sm" />
                    <div>
                      <p className="font-semibold">Age Groups:</p>
                      <p className="text-scout-stone-700">Cub Scouts (5-10) & Scouts BSA (11-17)</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-4 text-scout-sky-700">Leadership Team</h2>
                <div className="space-y-4">
                  <div className="bg-scout-stone-50 p-4 rounded-lg">
                    <p className="font-semibold">Scoutmaster: John Smith</p>
                    <p className="text-sm text-scout-stone-600">15 years experience, Eagle Scout, Youth Protection Trained</p>
                  </div>
                  <div className="bg-scout-stone-50 p-4 rounded-lg">
                    <p className="font-semibold">Cubmaster: Sarah Johnson</p>
                    <p className="text-sm text-scout-stone-600">8 years experience, Wood Badge trained, Background checked</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-scout-forest-700">Recent Activities & Achievements</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-scout-forest-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="tent" className="text-scout-forest-600" size="xl" />
                </div>
                <h3 className="font-semibold">Blue Ridge Camping</h3>
                <p className="text-sm text-scout-stone-600">Monthly camping trips to Scout reservation</p>
              </div>
              <div className="text-center">
                <div className="bg-scout-sky-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="star" className="text-scout-sky-600" size="xl" />
                </div>
                <h3 className="font-semibold">Eagle Scouts</h3>
                <p className="text-sm text-scout-stone-600">3 Eagle Scouts earned this year</p>
              </div>
              <div className="text-center">
                <div className="bg-scout-earth-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="users" className="text-scout-earth-600" size="xl" />
                </div>
                <h3 className="font-semibold">Community Service</h3>
                <p className="text-sm text-scout-stone-600">200+ hours of local service projects</p>
              </div>
            </div>
          </div>

          <div className="bg-scout-forest-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Ready to Join Troop 123?</h3>
            <p className="text-scout-stone-700 mb-4">
              Contact us to schedule a visit and see what adventure awaits your family!
            </p>
            <div className="space-y-2 mb-4">
              <p className="flex items-center justify-center">
                <Icon name="mail" className="mr-2" size="sm" />
                <strong>Email:</strong> troop123@greatvalleydistrict.org
              </p>
              <p className="flex items-center justify-center">
                <Icon name="phone" className="mr-2" size="sm" />
                <strong>Phone:</strong> (540) 555-0123
              </p>
            </div>
            <Link href="/join-now" className="inline-block bg-scout-forest-700 text-white py-3 px-8 rounded-lg hover:bg-scout-forest-800 transition-colors">
              Contact Troop 123
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}