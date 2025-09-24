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
          <div className="inline-flex items-center space-x-2 bg-white px-6 py-3 rounded-lg shadow-md">
            <Icon name="compass" className="text-scouts-bsa-olive" size="md" />
            <span className="text-scouts-bsa-olive font-semibold">16,000 acres of adventure at Blue Ridge Scout Reservation</span>
          </div>
        </div>

        {/* Three Categories of Scout Activities */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">

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

        {/* Real World Impact Section */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
            Why Real Adventures Matter
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-scouts-bsa-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="users" className="text-scouts-bsa-olive" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Leadership</h3>
              <p className="text-sm text-gray-600">Scouts plan and lead their own adventures, building confidence through actual responsibility</p>
            </div>
            <div className="text-center">
              <div className="bg-cub-scouts-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="fire" className="text-cub-scouts-blue" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Skills</h3>
              <p className="text-sm text-gray-600">From fire-starting to first aid, scouts master practical skills they&apos;ll use for life</p>
            </div>
            <div className="text-center">
              <div className="bg-scouts-bsa-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="backpack" className="text-scouts-bsa-olive" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Challenges</h3>
              <p className="text-sm text-gray-600">No virtual adventures—scouts face actual weather, terrain, and physical challenges</p>
            </div>
            <div className="text-center">
              <div className="bg-cub-scouts-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Icon name="compass" className="text-cub-scouts-blue" size="lg" />
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Real Impact</h3>
              <p className="text-sm text-gray-600">Community service projects that create lasting change in the real world</p>
            </div>
          </div>
        </div>

        {/* Blue Ridge Scout Reservation */}
        <div className="mb-16">
          <div className="relative bg-gradient-to-r from-scouts-bsa-olive to-cub-scouts-blue text-white rounded-lg overflow-hidden mb-12">
            {/* Background Image */}
            <div className="absolute inset-0">
              <Image
                src="/powhatan.jpg"
                alt="Blue Ridge Scout Reservation - Beautiful mountain landscape view"
                fill
                className="object-cover opacity-30"
                priority
              />
            </div>

            {/* Content Overlay */}
            <div className="relative z-10 p-8 lg:p-16">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                  Blue Ridge Scout Reservation
                </h2>
                <p className="text-xl lg:text-2xl text-scouts-bsa-100 mb-6">
                  Where Real Adventures Happen Every Day
                </p>
                <p className="text-lg text-white mb-8 max-w-2xl mx-auto">
                  On 16,000 acres of Virginia&apos;s Blue Ridge Mountains, scouts don&apos;t just learn about the outdoors—
                  they live it. Real weather. Real challenges. Real skills that last a lifetime.
                </p>
                <div className="grid md:grid-cols-3 gap-4 mb-8 text-sm">
                  <div className="bg-black bg-opacity-30 rounded-lg p-4">
                    <Icon name="mountain" className="text-white mb-2" size="md" />
                    <p><strong>Real Wilderness:</strong> Untamed forests and mountain trails</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-lg p-4">
                    <Icon name="swimming" className="text-white mb-2" size="md" />
                    <p><strong>Real Water:</strong> Claytor Lake for swimming and boating</p>
                  </div>
                  <div className="bg-black bg-opacity-30 rounded-lg p-4">
                    <Icon name="fire" className="text-white mb-2" size="md" />
                    <p><strong>Real Skills:</strong> Primitive camping and survival techniques</p>
                  </div>
                </div>
                <div className="text-center">
                  <a
                    href="https://brmcreservation.org/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-scouts-bsa-olive px-6 py-3 rounded-lg hover:bg-scouts-bsa-50 transition-colors font-semibold inline-block"
                  >
                    Explore BRSR Programs
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* BRSR Camp Programs */}
          <div className="w-full mb-12">
            <h3 className="text-3xl font-bold text-center mb-4 text-gray-800">
              Five Real-World Camp Programs
            </h3>
            <p className="text-lg text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              Each program at Blue Ridge Scout Reservation offers authentic outdoor experiences that build real skills and lasting character.
            </p>

            {/* Camp Powhatan - Featured Program */}
            <div className="bg-scouts-bsa-50 border border-scouts-bsa-300 rounded-lg p-8 mb-8">
              <div className="max-w-4xl mx-auto">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">Camp Powhatan</h4>
                <p className="text-scouts-bsa-olive text-center mb-4 font-semibold">Traditional Summer Camp - Where Real Skills Meet Real Fun</p>
                <p className="text-gray-700 mb-4">
                  The heart of Blue Ridge Scout Reservation, Camp Powhatan puts scouts in real outdoor situations where they master practical skills.
                  From actual archery and rifle shooting to hands-on nature studies and waterfront activities on Claytor Lake,
                  Powhatan builds competence through authentic outdoor experiences.
                </p>
                <div className="flex justify-center items-center space-x-6">
                  <div className="text-center">
                    <Icon name="swimming" className="text-scouts-bsa-olive mx-auto mb-2" size="lg" />
                    <p className="text-sm text-gray-600">Real Swimming</p>
                  </div>
                  <div className="text-center">
                    <Icon name="target" className="text-scouts-bsa-olive mx-auto mb-2" size="lg" />
                    <p className="text-sm text-gray-600">Live Fire Sports</p>
                  </div>
                  <div className="text-center">
                    <Icon name="tree" className="text-scouts-bsa-olive mx-auto mb-2" size="lg" />
                    <p className="text-sm text-gray-600">Wild Nature</p>
                  </div>
                  <div className="text-center">
                    <Icon name="badge" className="text-scouts-bsa-olive mx-auto mb-2" size="lg" />
                    <p className="text-sm text-gray-600">Earned Merit Badges</p>
                  </div>
                </div>
              </div>
            </div>

            {/* High Adventure Programs */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              <div className="bg-cub-scouts-50 border-l-4 border-cub-scouts-blue p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">High Knoll Trail Camp</h4>
                <p className="text-cub-scouts-blue mb-4 font-semibold">Real Backpacking on Real Mountain Trails</p>
                <p className="text-gray-700 mb-4">
                  No simulated challenges here—scouts carry real packs on actual mountain trails, navigate with compass and map,
                  and camp under the stars. Over 100 miles of Blue Ridge trails challenge scouts with real elevation, weather, and terrain.
                  Perfect preparation for Philmont or any high-adventure experience.
                </p>
                <div className="flex items-center space-x-3">
                  <Icon name="hiking" className="text-cub-scouts-blue" size="md" />
                  <Icon name="backpack" className="text-cub-scouts-blue" size="md" />
                  <Icon name="mountain" className="text-cub-scouts-blue" size="md" />
                </div>
              </div>

              <div className="bg-scouts-bsa-50 border-l-4 border-scouts-bsa-olive p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3">New River Adventure</h4>
                <p className="text-scouts-bsa-olive mb-4 font-semibold">Real River Challenges & Team Building</p>
                <p className="text-gray-700 mb-4">
                  Experience the actual thrill of whitewater, real rock climbing, and authentic team challenges on the historic New River.
                  Our nationally accredited COPE course builds genuine confidence through real physical and mental challenges that can&apos;t be found in any virtual world.
                </p>
                <div className="flex items-center space-x-3">
                  <Icon name="waves" className="text-scouts-bsa-olive" size="md" />
                  <Icon name="mountain" className="text-scouts-bsa-olive" size="md" />
                  <Icon name="users" className="text-scouts-bsa-olive" size="md" />
                </div>
              </div>
            </div>

            {/* Additional Specialty Programs */}
            <div className="grid lg:grid-cols-2 gap-8 mb-12">
              {/* Blue Ridge Mountaineer */}
              <div className="bg-gradient-to-b from-scouting-tan to-scouts-bsa-100 border border-scouts-bsa-300 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">Blue Ridge Mountaineer</h4>
                <p className="text-scouts-bsa-olive mb-4 font-semibold text-center">Living History & Primitive Skills</p>
                <p className="text-gray-700 mb-4">
                  Step into the 18th century and live like the mountain pioneers who carved out life in these same Blue Ridge Mountains.
                  Scouts use period tools, cook over wood fires, and learn the survival skills that sustained generations of mountain families.
                  Real history, real skills, real character building.
                </p>
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <Icon name="fire" className="text-scouts-bsa-olive" size="lg" />
                  <Icon name="compass" className="text-scouts-bsa-olive" size="lg" />
                  <Icon name="tree" className="text-scouts-bsa-olive" size="lg" />
                </div>
              </div>

              {/* Voyageur Trek */}
              <div className="bg-gradient-to-b from-cub-scouts-100 to-cub-scouts-50 border border-cub-scouts-300 rounded-lg p-8">
                <h4 className="text-2xl font-bold text-gray-800 mb-3 text-center">Voyageur Trek</h4>
                <p className="text-cub-scouts-blue mb-4 font-semibold text-center">Historic River Adventure</p>
                <p className="text-gray-700 mb-4">
                  Follow in the paddle strokes of French voyageurs who traveled these waters for 300 years. Scouts navigate the actual New River,
                  portage real canoes, and camp along historic routes. Experience the authentic challenges and teamwork that built a continent.
                </p>
                <div className="flex justify-center items-center space-x-4 mt-6">
                  <Icon name="waves" className="text-cub-scouts-blue" size="lg" />
                  <Icon name="compass" className="text-cub-scouts-blue" size="lg" />
                  <Icon name="backpack" className="text-cub-scouts-blue" size="lg" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Special Event Spotlight - Jamboree 2026 */}
        <div className="bg-gradient-to-r from-scouting-red to-scouting-blue text-white rounded-lg overflow-hidden mb-16 relative">
          <div className="absolute inset-0">
            <Image
              src="/images/national.jpg"
              alt="National Jamboree adventure"
              fill
              className="object-cover opacity-30"
            />
          </div>
          <div className="relative z-10 p-8 text-center">
            <div className="mb-6">
              <Image
                src="/images/Jamboree-2026.png"
                alt="2026 World Scout Jamboree"
                width={300}
                height={200}
                className="mx-auto object-contain"
              />
            </div>
            <h3 className="text-3xl font-bold mb-4">2026 World Scout Jamboree - Poland</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              The ultimate scouting adventure awaits! Join 40,000+ scouts from around the world for the experience of a lifetime.
              Great Valley District scouts can participate in this once-in-a-lifetime international event.
            </p>
            <div className="inline-flex items-center space-x-2 bg-white bg-opacity-20 px-6 py-3 rounded-lg">
              <Icon name="star" className="text-white" size="md" />
              <span className="font-semibold">Start planning now for 2026!</span>
            </div>
          </div>
        </div>

        {/* Adventure On Campaign */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto">
              <Image
                src="/images/AdventureOn.jpg"
                alt="Adventure On - Scouting campaign"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 flex flex-col justify-center">
              <div className="mb-4">
                <Image
                  src="/images/AdventureOn-logo.png"
                  alt="Adventure On logo"
                  width={200}
                  height={80}
                  className="object-contain"
                />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-800">Adventure Is Calling</h3>
              <p className="text-gray-600 mb-6">
                Real adventures. Real friendships. Real skills for life. Discover what makes Scouting America
                the premier youth development organization in the country.
              </p>
              <Link href="/join-now" className="bg-scouts-bsa-olive text-white py-3 px-6 rounded-lg hover:bg-scouts-bsa-olive-dark transition-colors font-semibold inline-block text-center">
                Start Your Adventure
              </Link>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="bg-white rounded-lg shadow-lg p-8 text-center">
          <h3 className="text-3xl font-bold mb-4 text-gray-800">Ready for Real Adventures?</h3>
          <p className="text-lg text-gray-600 mb-6 max-w-2xl mx-auto">
            Join Great Valley District Scouts and discover what it means to do real things in the real world.
            Your next adventure starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/join-now" className="bg-scouts-bsa-olive text-white py-3 px-8 rounded-lg hover:bg-scouts-bsa-olive-dark transition-colors text-lg font-semibold">
              Find Your Troop
            </Link>
            <Link href="/programs" className="bg-cub-scouts-blue text-white py-3 px-8 rounded-lg hover:bg-cub-scouts-blue-dark transition-colors text-lg font-semibold">
              Explore Programs
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}