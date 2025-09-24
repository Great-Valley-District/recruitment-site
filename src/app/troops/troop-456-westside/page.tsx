import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import Link from "next/link";
import { gradients } from "@/config/colors";

export default function Troop456Westside() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-scout-sky-800">
          Troop 456 - Westside Great Valley
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold mb-4 text-scout-sky-700">Meeting Information</h2>
                <div className="space-y-3">
                  <div className="flex items-start">
                    <Icon name="mapPin" className="text-scout-sky-600 mr-3 mt-1" size="sm" />
                    <div>
                      <p className="font-semibold">Location:</p>
                      <p className="text-scout-stone-700">Westside Elementary School<br />456 Oak Avenue, Great Valley, VA 24018</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Icon name="clock" className="text-scout-forest-600 mr-3 mt-1" size="sm" />
                    <div>
                      <p className="font-semibold">Meeting Time:</p>
                      <p className="text-scout-stone-700">Tuesdays, 6:30 PM - 8:00 PM</p>
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
                <h2 className="text-2xl font-semibold mb-4 text-scout-forest-700">Leadership Team</h2>
                <div className="space-y-4">
                  <div className="bg-scout-stone-50 p-4 rounded-lg">
                    <p className="font-semibold">Scoutmaster: Mike Davis</p>
                    <p className="text-sm text-scout-stone-600">12 years experience, Eagle Scout, Wilderness First Aid certified</p>
                  </div>
                  <div className="bg-scout-stone-50 p-4 rounded-lg">
                    <p className="font-semibold">Cubmaster: Lisa Williams</p>
                    <p className="text-sm text-scout-stone-600">6 years experience, Outdoor activity specialist, Youth Protection Trained</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold mb-6 text-scout-sky-700">Troop Specialties & Recent Adventures</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-scout-sky-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="mountain" className="text-scout-sky-600" size="xl" />
                </div>
                <h3 className="font-semibold">High Adventure Focus</h3>
                <p className="text-sm text-scout-stone-600">Specialized in backpacking and mountain adventures</p>
              </div>
              <div className="text-center">
                <div className="bg-scout-forest-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="tree" className="text-scout-forest-600" size="xl" />
                </div>
                <h3 className="font-semibold">Outdoor Skills</h3>
                <p className="text-sm text-scout-stone-600">Expert training in wilderness survival and camping</p>
              </div>
              <div className="text-center">
                <div className="bg-scout-earth-100 rounded-lg p-4 mb-2 flex items-center justify-center">
                  <Icon name="badge" className="text-scout-earth-600" size="xl" />
                </div>
                <h3 className="font-semibold">Award-Winning</h3>
                <p className="text-sm text-scout-stone-600">Best Outdoor Program 2023 - Blue Ridge Council</p>
              </div>
            </div>
          </div>

          <div className="bg-scout-sky-50 rounded-lg p-6 mb-8">
            <h3 className="text-xl font-semibold mb-4 text-center">Upcoming Adventures</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white rounded p-4">
                <h4 className="font-semibold text-scout-sky-700">October Camping Trip</h4>
                <p className="text-sm text-scout-stone-600">Blue Ridge Scout Reservation - Fall colors hike</p>
              </div>
              <div className="bg-white rounded p-4">
                <h4 className="font-semibold text-scout-forest-700">Merit Badge Workshop</h4>
                <p className="text-sm text-scout-stone-600">Wilderness Survival & First Aid certifications</p>
              </div>
            </div>
          </div>

          <div className="bg-scout-sky-50 rounded-lg p-6 text-center">
            <h3 className="text-xl font-semibold mb-4">Join Our Adventure-Focused Troop!</h3>
            <p className="text-scout-stone-700 mb-4">
              Perfect for families who love the outdoors and want their youth to develop real wilderness skills.
            </p>
            <div className="space-y-2 mb-4">
              <p className="flex items-center justify-center">
                <Icon name="mail" className="mr-2" size="sm" />
                <strong>Email:</strong> troop456@greatvalleydistrict.org
              </p>
              <p className="flex items-center justify-center">
                <Icon name="phone" className="mr-2" size="sm" />
                <strong>Phone:</strong> (540) 555-0456
              </p>
            </div>
            <Link href="/join-now" className="inline-block bg-scout-sky-700 text-white py-3 px-8 rounded-lg hover:bg-scout-sky-800 transition-colors">
              Contact Troop 456
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}