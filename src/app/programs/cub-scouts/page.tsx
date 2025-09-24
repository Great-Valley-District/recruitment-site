import Link from "next/link";
import Navigation from "@/components/Navigation";
import { gradients } from "@/config/colors";

export default function CubScouts() {
  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-sky-800">
          Cub Scouts (Ages 5-10)
        </h1>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-3xl font-semibold mb-6 text-sky-700">
              Quality Family Time and Adventure Experiences
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">What Your Family Gets:</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Learning by doing with age-appropriate outdoor activities
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Building friendships and confidence in a supportive environment
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Shared adventures that create lasting family memories
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-600 mr-2">✓</span>
                    Character development through outdoor experiences
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Parent Involvement Benefits:</h3>
                <p className="text-gray-700 mb-4">
                  Parent involvement isn&apos;t a burden—it&apos;s an opportunity! Share adventures with your child while
                  connecting with other families who value character development and outdoor experiences.
                </p>
                <div className="bg-sky-50 p-4 rounded-lg">
                  <p className="text-sky-800 font-semibold">
                    &quot;Great value year-round program that brings families together through adventure&quot;
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/join-now"
              className="bg-sky-700 text-white py-3 px-8 rounded-lg hover:bg-sky-800 transition-colors text-lg inline-block"
            >
              Find Cub Scout Troops Near You
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}