import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function Home() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hiking-1.jpg"
            alt="Scouts hiking in the Blue Ridge Mountains"
            fill
            className="object-cover opacity-20"
            priority
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
            Adventure, Friendship, and Character Development
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-4xl mx-auto">
            In Virginia&apos;s outdoor recreation capital, where 16,000 acres of Blue Ridge Scout Reservation
            awaits your family&apos;s next adventure
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/join-now"
              className="bg-scouts-bsa-olive text-white px-8 py-4 rounded-lg hover:bg-scouts-bsa-olive-dark transition-colors text-lg font-semibold"
            >
              Find Your Troop
            </Link>
            <Link
              href="/programs"
              className="border-2 border-scouts-bsa-olive text-scouts-bsa-olive px-8 py-4 rounded-lg hover:bg-scouts-bsa-olive hover:text-white transition-colors text-lg font-semibold"
            >
              Explore Programs
            </Link>
          </div>
          <p className="text-sm text-gray-600 mt-4">
            Join 1,000+ Great Valley District Scout families
          </p>
        </div>
      </section>

      {/* Program Finder */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Find the Perfect Program for Your Child
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/programs/cub-scouts" className="block">
              <div className="bg-cub-scouts-50 border border-cub-scouts-200 rounded-lg p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/Cub Scouts.jpg"
                    alt="Cub Scouts adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <div className="bg-cub-scouts-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="backpack" className="text-cub-scouts-blue" size="xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-cub-scouts-blue mb-4">Cub Scouts</h3>
                  <p className="text-cub-scouts-blue font-semibold mb-2">Ages 5-10</p>
                  <p className="text-gray-700 mb-4">
                    Quality family time and adventure experiences through age-appropriate outdoor activities
                  </p>
                  <ul className="text-left text-gray-600 space-y-1 mb-6">
                    <li>• Learning by doing with family involvement</li>
                    <li>• Building friendships and confidence</li>
                    <li>• Shared adventures create lasting memories</li>
                  </ul>
                  <span className="inline-block bg-cub-scouts-blue text-white px-6 py-2 rounded-lg">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>

            <Link href="/programs/scouts-bsa" className="block">
              <div className="bg-scouts-bsa-50 border border-scouts-bsa-200 rounded-lg p-8 hover:shadow-lg transition-shadow relative overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-10">
                  <Image
                    src="/images/Scouts-BSA.jpg"
                    alt="Scouts BSA adventure"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <div className="bg-scouts-bsa-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                    <Icon name="mountain" className="text-scouts-bsa-olive" size="xl" />
                  </div>
                  <h3 className="text-2xl font-bold text-scouts-bsa-olive mb-4">Scouts BSA</h3>
                  <p className="text-scouts-bsa-olive font-semibold mb-2">Ages 11-17</p>
                  <p className="text-gray-700 mb-4">
                    Real leadership experience that colleges and employers value
                  </p>
                  <ul className="text-left text-gray-600 space-y-1 mb-6">
                    <li>• High-adventure opportunities unique to our region</li>
                    <li>• Skills for future success</li>
                    <li>• Eagle Scout achievement (only 6% earn it!)</li>
                  </ul>
                  <span className="inline-block bg-scouts-bsa-olive text-white px-6 py-2 rounded-lg">
                    Learn More
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Local Connection */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Serving Troops Throughout the Great Valley
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Link href="/troops/troop-123-downtown" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-scouts-bsa-olive mb-3">Troop 123 - Downtown</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <Icon name="mapPin" className="mr-2" size="sm" />
                    Downtown Community Center
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Icon name="clock" className="mr-2" size="sm" />
                    Thursdays, 7:00 PM
                  </p>
                  <p className="text-sm text-gray-500">Cub Scouts & Scouts BSA</p>
                </div>
              </div>
            </Link>
            <Link href="/troops/troop-456-westside" className="block">
              <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-semibold text-cub-scouts-blue mb-3">Troop 456 - Westside</h3>
                <div className="space-y-2">
                  <p className="text-gray-600 flex items-center">
                    <Icon name="mapPin" className="mr-2" size="sm" />
                    Westside Elementary School
                  </p>
                  <p className="text-gray-600 flex items-center">
                    <Icon name="clock" className="mr-2" size="sm" />
                    Tuesdays, 6:30 PM
                  </p>
                  <p className="text-sm text-gray-500">High Adventure Specialists</p>
                </div>
              </div>
            </Link>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/join-now"
              className="bg-gray-700 text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition-colors"
            >
              Find All Local Troops
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Building */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Safety and Trust - Our Highest Priorities
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-scouts-bsa-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="shield" className="text-scouts-bsa-olive" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Youth Protection Training</h3>
              <p className="text-gray-600">All adult leaders complete comprehensive training before any youth interaction</p>
            </div>
            <div className="text-center">
              <div className="bg-cub-scouts-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="text-cub-scouts-blue" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">Two-Deep Leadership</h3>
              <p className="text-gray-600">Multiple adult supervision at all activities ensures proper oversight</p>
            </div>
            <div className="text-center">
              <div className="bg-scouting-tan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="phone" className="text-scouting-red" size="lg" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">24/7 Support</h3>
              <p className="text-gray-600">Scouts First helpline (1-844-SCOUTS1) available for any concerns</p>
            </div>
          </div>
          <div className="text-center mt-8">
            <Link
              href="/safety-first"
              className="text-scouts-bsa-olive hover:text-scouts-bsa-olive-dark font-semibold underline"
            >
              Learn More About Our Safety Measures →
            </Link>
          </div>
        </div>
      </section>

      {/* Blue Ridge Advantage */}
      <section className="relative py-16 px-4 bg-gradient-to-r from-scouts-bsa-olive to-cub-scouts-blue text-white overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/camping.jpg"
            alt="Camping at Blue Ridge Scout Reservation"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">
            Experience Virginia&apos;s Outdoor Recreation Capital
          </h2>
          <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-8">
            <div>
              <Icon name="mountain" className="text-white mx-auto mb-2" size="xl" />
              <h3 className="font-semibold">16,000 Acres</h3>
              <p className="text-sm opacity-90">Blue Ridge Scout Reservation</p>
            </div>
            <div>
              <Icon name="hiking" className="text-white mx-auto mb-2" size="xl" />
              <h3 className="font-semibold">50+ Miles</h3>
              <p className="text-sm opacity-90">Hiking trails</p>
            </div>
            <div>
              <Icon name="tent" className="text-white mx-auto mb-2" size="xl" />
              <h3 className="font-semibold">Year-Round</h3>
              <p className="text-sm opacity-90">Camping opportunities</p>
            </div>
            <div>
              <Icon name="target" className="text-white mx-auto mb-2" size="xl" />
              <h3 className="font-semibold">High Adventure</h3>
              <p className="text-sm opacity-90">Unique to our region</p>
            </div>
          </div>
          <p className="text-xl mb-6">
            Adventures unavailable elsewhere - camping, hiking, and outdoor experiences
            in the largest council-owned Scout reservation in the nation
          </p>
          <Link
            href="/activities"
            className="bg-white text-scouts-bsa-olive px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
          >
            See Our Activities
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Programs</h3>
              <ul className="space-y-2">
                <li><Link href="/programs/cub-scouts" className="hover:text-cub-scouts-gold transition-colors">Cub Scouts (5-10)</Link></li>
                <li><Link href="/programs/scouts-bsa" className="hover:text-scouts-bsa-tan transition-colors">Scouts BSA (11-17)</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Get Started</h3>
              <ul className="space-y-2">
                <li><Link href="/join-now" className="hover:text-cub-scouts-gold transition-colors">Join Now</Link></li>
                <li><Link href="/faqs" className="hover:text-scouts-bsa-tan transition-colors">FAQs</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Safety & Support</h3>
              <ul className="space-y-2">
                <li><Link href="/safety-first" className="hover:text-scouts-bsa-tan transition-colors">Safety First</Link></li>
                <li><span className="text-scouting-red">24/7 Helpline: 1-844-SCOUTS1</span></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><Link href="/activities" className="hover:text-cub-scouts-gold transition-colors">Activities</Link></li>
                <li className="flex items-center">
                  <Icon name="mail" className="mr-2" size="sm" />
                  info@roanokevalleyscouts.org
                </li>
                <li className="flex items-center">
                  <Icon name="phone" className="mr-2" size="sm" />
                  (540) 555-SCOUT
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Great Valley District. Part of Scouting America.
              Serving families throughout the Great Valley with adventure, character development, and leadership opportunities.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}