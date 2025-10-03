import Link from "next/link";
import Image from "next/image";
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function Activities() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Scout Activities: Real Adventures in the Real World
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
            From local hiking trails to national jamborees, Great Valley District Scouts experience hands-on adventures
            that build character, leadership, and memories that last a lifetime.
          </p>
        </div>

        {/* Section 1: Events at Different Levels - Creating Many Opportunities */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Adventure at Every Level
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Great Valley District offers a rich calendar of events at multiple levels—troop, district, council, and national.
            This creates countless opportunities for scouts to explore, learn, and grow throughout the year, ensuring there&apos;s
            always an adventure waiting just around the corner.
          </p>

          {/* Three Categories of Scout Activities */}
          <div className="grid lg:grid-cols-3 gap-8">

          {/* 1. Troop Events */}
          <div className="bg-scouts-bsa-50 border-2 border-scouts-bsa-200 rounded-lg overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/hiking-2.jpg"
                alt="Scouts hiking on mountain trails"
                fill
                className="object-cover opacity-15"
              />
            </div>
            <div className="bg-scouts-bsa-olive text-white p-6 text-center relative z-10">
              <Icon name="hiking" className="text-white mb-3" size="xl" />
              <h2 className="text-2xl font-bold mb-2">Troop Adventures</h2>
              <p className="text-scouts-bsa-100">Weekly adventures close to home</p>
            </div>
            <div className="p-6 relative z-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="mountain" className="text-scouts-bsa-olive mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Weekend Camping</h4>
                    <p className="text-sm text-gray-600">Local and state parks, learning outdoor skills</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="hiking" className="text-scouts-bsa-olive mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Hiking Expeditions</h4>
                    <p className="text-sm text-gray-600">Blue Ridge trails, Appalachian adventures</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="fire" className="text-scouts-bsa-olive mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Outdoor Skills</h4>
                    <p className="text-sm text-gray-600">Fire building, navigation, survival techniques</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="backpack" className="text-scouts-bsa-olive mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Community Service</h4>
                    <p className="text-sm text-gray-600">Real projects helping real communities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 2. District and Council Events */}
          <div className="bg-cub-scouts-50 border-2 border-cub-scouts-200 rounded-lg overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/camping.jpg"
                alt="Scout camping at district events"
                fill
                className="object-cover opacity-15"
              />
            </div>
            <div className="bg-cub-scouts-blue text-white p-6 text-center relative z-10">
              <Icon name="users" className="text-white mb-3" size="xl" />
              <h2 className="text-2xl font-bold mb-2">District Events</h2>
              <p className="text-cub-scouts-100">Compete and learn with other troops</p>
            </div>
            <div className="p-6 relative z-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="tent" className="text-cub-scouts-blue mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Camporees</h4>
                    <p className="text-sm text-gray-600">Multi-troop camping competitions at BRSR</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="swimming" className="text-cub-scouts-blue mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Summer Camp at Powhatan</h4>
                    <p className="text-sm text-gray-600">Week-long resident camp with merit badges</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="winter" className="text-cub-scouts-blue mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Klondike Derby</h4>
                    <p className="text-sm text-gray-600">Winter skills challenge and sled competition</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="badge" className="text-cub-scouts-blue mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Merit Badge Workshops</h4>
                    <p className="text-sm text-gray-600">Specialized skills from certified counselors</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Large Events */}
          <div className="bg-gradient-to-b from-scouting-tan to-scouts-bsa-50 border-2 border-scouting-red rounded-lg overflow-hidden relative">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/images/national.jpg"
                alt="National Scout events and jamborees"
                fill
                className="object-cover opacity-20"
              />
            </div>
            <div className="bg-scouting-red text-white p-6 text-center relative z-10">
              <Icon name="star" className="text-white mb-3" size="xl" />
              <h2 className="text-2xl font-bold mb-2">National Events</h2>
              <p className="text-red-100">Once-in-a-lifetime adventures</p>
            </div>
            <div className="p-6 relative z-10">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="compass" className="text-scouting-red mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">National Jamboree</h4>
                    <p className="text-sm text-gray-600">40,000 Scouts from across America</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="target" className="text-scouting-red mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">World Scout Jamboree</h4>
                    <p className="text-sm text-gray-600">International scouting on a global stage</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="mountain" className="text-scouting-red mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">Philmont Scout Ranch</h4>
                    <p className="text-sm text-gray-600">High adventure backpacking in New Mexico</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="waves" className="text-scouting-red mt-1" size="sm" />
                  <div>
                    <h4 className="font-semibold text-gray-800">High Adventure Bases</h4>
                    <p className="text-sm text-gray-600">Sea Base, Northern Tier, Summit Bechtel</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Section 2: Why Real Adventures Matter */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            Why Real-World Events Matter
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            In an increasingly digital world, Scouting offers something rare and essential: authentic experiences in the real world.
            Our events aren&apos;t simulations or screen time—they&apos;re genuine challenges that build genuine character.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="text-emerald-600" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Leadership</h3>
              <p className="text-sm text-gray-600">Scouts plan and lead their own adventures, building confidence through actual responsibility</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="fire" className="text-sky-600" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Skills</h3>
              <p className="text-sm text-gray-600">From fire-starting to first aid, scouts master practical skills they&apos;ll use for life</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="backpack" className="text-emerald-600" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Challenges</h3>
              <p className="text-sm text-gray-600">No virtual adventures—scouts face actual weather, terrain, and physical challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-sky-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="compass" className="text-sky-600" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Impact</h3>
              <p className="text-sm text-gray-600">Community service projects that create lasting change in the real world</p>
            </div>
          </div>
        </div>

        {/* Section 3: Blue Ridge Scout Reservation - A Unique Local Opportunity */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            A Unique Opportunity in Your Backyard
          </h2>
          <p className="text-lg text-gray-700 text-center mb-10 max-w-3xl mx-auto">
            Great Valley District scouts have access to something extraordinary: the Blue Ridge Scout Reservation.
            Just a short drive away, BRSR offers 16,000 acres of pristine wilderness and world-class programs
            that most scouts travel across the country to experience.
          </p>

          {/* BRSR Hero Card */}
          <div className="relative bg-gradient-to-r from-emerald-600 to-sky-600 text-white rounded-lg overflow-hidden mb-8 shadow-xl">
            <div className="absolute inset-0">
              <Image
                src="/powhatan.jpg"
                alt="Blue Ridge Scout Reservation - Beautiful mountain landscape view"
                fill
                className="object-cover opacity-20"
                priority
              />
            </div>

            {/* Dark overlay for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20"></div>

            <div className="relative z-10 p-8 md:p-12">
              <div className="max-w-4xl mx-auto">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 text-center drop-shadow-lg">
                  Blue Ridge Scout Reservation
                </h3>
                <p className="text-xl text-center mb-8 drop-shadow-md">
                  Virginia&apos;s Blue Ridge Mountains • 16,000 Acres • World-Class Programs
                </p>
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <Icon name="mountain" className="text-white mb-2" size="lg" />
                    <p className="font-semibold drop-shadow-md">Untamed Wilderness</p>
                    <p className="text-sm mt-1 drop-shadow-md">Real mountains, forests, and trails</p>
                  </div>
                  <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <Icon name="swimming" className="text-white mb-2" size="lg" />
                    <p className="font-semibold drop-shadow-md">Claytor Lake</p>
                    <p className="text-sm mt-1 drop-shadow-md">Swimming, boating, and waterfront</p>
                  </div>
                  <div className="bg-black bg-opacity-40 backdrop-blur-sm rounded-lg p-4 text-center border border-white/20">
                    <Icon name="tent" className="text-white mb-2" size="lg" />
                    <p className="font-semibold drop-shadow-md">Five Unique Camps</p>
                    <p className="text-sm mt-1 drop-shadow-md">From traditional to high adventure</p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://brmcreservation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-emerald-600 px-8 py-3 rounded-lg hover:bg-emerald-50 transition-colors font-semibold inline-block shadow-xl"
                  >
                    Explore BRSR Programs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Compact Five Camps Overview */}
          <div className="grid md:grid-cols-5 gap-4">
            {/* Camp Powhatan */}
            <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-emerald-500">
              <Icon name="badge" className="text-emerald-600 mb-2" size="md" />
              <h4 className="font-bold text-gray-800 mb-1 text-sm">Camp Powhatan</h4>
              <p className="text-xs text-gray-600">Traditional summer camp with merit badges</p>
            </div>

            {/* High Knoll Trail Camp */}
            <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-sky-500">
              <Icon name="hiking" className="text-sky-600 mb-2" size="md" />
              <h4 className="font-bold text-gray-800 mb-1 text-sm">High Knoll Trail</h4>
              <p className="text-xs text-gray-600">Backpacking on mountain trails</p>
            </div>

            {/* New River Adventure */}
            <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-emerald-500">
              <Icon name="waves" className="text-emerald-600 mb-2" size="md" />
              <h4 className="font-bold text-gray-800 mb-1 text-sm">New River Adventure</h4>
              <p className="text-xs text-gray-600">Whitewater, climbing, COPE course</p>
            </div>

            {/* Blue Ridge Mountaineer */}
            <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-amber-500">
              <Icon name="fire" className="text-amber-600 mb-2" size="md" />
              <h4 className="font-bold text-gray-800 mb-1 text-sm">Blue Ridge Mountaineer</h4>
              <p className="text-xs text-gray-600">Living history & primitive skills</p>
            </div>

            {/* Voyageur Trek */}
            <div className="bg-white rounded-lg shadow-md p-4 border-t-4 border-sky-500">
              <Icon name="compass" className="text-sky-600 mb-2" size="md" />
              <h4 className="font-bold text-gray-800 mb-1 text-sm">Voyageur Trek</h4>
              <p className="text-xs text-gray-600">Historic river canoeing expedition</p>
            </div>
          </div>
        </div>

        {/* Section 4: Highest Quality Adventures for the Most Adventurous */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center">
          <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
            For the Truly Adventurous
          </h2>
          <p className="text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto">
            Scouting doesn&apos;t stop at the local level. For those seeking the ultimate challenges, Scouting America offers
            world-class high adventure programs that push scouts to their limits and create memories that last a lifetime.
            These aren&apos;t just trips—they&apos;re transformative experiences.
          </p>

          {/* High Adventure Programs Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {/* Philmont Scout Ranch */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-amber-500">
              <div className="p-6">
                <Icon name="mountain" className="text-amber-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Philmont Scout Ranch</h3>
                <p className="text-amber-600 font-semibold mb-3">New Mexico • High Adventure Backpacking</p>
                <p className="text-gray-600 mb-4">
                  Trek through 140,000 acres of rugged backcountry in the Sangre de Cristo Mountains.
                  12 days of authentic wilderness backpacking with peaks over 12,000 feet. The pinnacle of Scout high adventure.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="hiking" className="text-amber-600" size="sm" />
                  <span>50-100 mile treks</span>
                </div>
              </div>
            </div>

            {/* National Jamboree */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-emerald-500">
              <div className="p-6">
                <Icon name="star" className="text-emerald-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">National Jamboree</h3>
                <p className="text-emerald-600 font-semibold mb-3">West Virginia • Summit Bechtel Reserve</p>
                <p className="text-gray-600 mb-4">
                  Join 40,000 scouts from across America for 10 days of adventure, including BMX, skateboarding, zip lines,
                  climbing, shooting sports, and more. A massive celebration of Scouting.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="users" className="text-emerald-600" size="sm" />
                  <span>Every 4 years</span>
                </div>
              </div>
            </div>

            {/* World Scout Jamboree 2026 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-sky-500">
              <div className="p-6">
                <Icon name="target" className="text-sky-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">World Jamboree 2026</h3>
                <p className="text-sky-600 font-semibold mb-3">Poland • International Scouting</p>
                <p className="text-gray-600 mb-4">
                  Experience Scouting on the global stage with 40,000+ scouts from over 170 countries.
                  Cultural exchange, international friendships, and adventures you can&apos;t find anywhere else.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="compass" className="text-sky-600" size="sm" />
                  <span>Once in a lifetime</span>
                </div>
              </div>
            </div>

            {/* Florida Sea Base */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-sky-500">
              <div className="p-6">
                <Icon name="waves" className="text-sky-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Florida Sea Base</h3>
                <p className="text-sky-600 font-semibold mb-3">Florida Keys • Aquatic Adventure</p>
                <p className="text-gray-600 mb-4">
                  Sailing, scuba diving, snorkeling, and fishing in the crystal waters of the Florida Keys and Bahamas.
                  Marine biology meets high adventure in paradise.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="swimming" className="text-sky-600" size="sm" />
                  <span>Year-round programs</span>
                </div>
              </div>
            </div>

            {/* Northern Tier */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-emerald-500">
              <div className="p-6">
                <Icon name="compass" className="text-emerald-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Northern Tier</h3>
                <p className="text-emerald-600 font-semibold mb-3">Minnesota/Canada • Canoe Wilderness</p>
                <p className="text-gray-600 mb-4">
                  Paddle through pristine boundary waters on multi-day canoe expeditions. Portage your gear, camp on remote islands,
                  and experience true wilderness like the voyageurs of old.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="backpack" className="text-emerald-600" size="sm" />
                  <span>7-14 day trips</span>
                </div>
              </div>
            </div>

            {/* Summit Bechtel Reserve */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border-t-4 border-amber-500">
              <div className="p-6">
                <Icon name="target" className="text-amber-600 mb-3" size="xl" />
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Summit Bechtel Reserve</h3>
                <p className="text-amber-600 font-semibold mb-3">West Virginia • Action Sports Hub</p>
                <p className="text-gray-600 mb-4">
                  World-class BMX, mountain biking, skateboarding, climbing, zip lines, and shooting sports at Scouting&apos;s
                  premier high-adventure facility. Year-round programs available.
                </p>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Icon name="fire" className="text-amber-600" size="sm" />
                  <span>Action-packed</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Final Call to Action */}
        <div className="bg-white rounded-lg shadow-lg p-8 md:p-12 text-center mt-16">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready for Real Adventures?</h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Great Valley District offers countless events at every level—from weekly troop meetings to international jamborees.
            Events are numerous, meaningful, locally special, and the highest quality adventures available anywhere.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-now" className="bg-emerald-600 text-white py-3 px-8 rounded-lg hover:bg-emerald-700 transition-colors text-lg font-semibold">
              Find Your Troop
            </Link>
            <Link href="/programs" className="bg-sky-600 text-white py-3 px-8 rounded-lg hover:bg-sky-700 transition-colors text-lg font-semibold">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}