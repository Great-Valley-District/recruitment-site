'use client';

import { useState } from 'react';
import Link from 'next/link';
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function FindYourTroop() {
  const [zipCode, setZipCode] = useState('');
  const [showResults, setShowResults] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (zipCode) {
      setShowResults(true);
    }
  };

  const getTroopRecommendations = () => {
    if (zipCode.startsWith('240') || zipCode.startsWith('241')) {
      return [
        {
          name: 'Troop 123 - Downtown',
          location: 'Downtown Community Center, 123 Main Street',
          meeting: 'Thursdays, 7:00 PM - 8:30 PM',
          contact: 'troop123@greatvalleydistrict.org',
          phone: '(540) 555-0123',
          programs: ['Cub Scouts', 'Scouts BSA']
        }
      ];
    } else {
      return [
        {
          name: 'Troop 456 - Westside',
          location: 'Westside Elementary School, 456 Oak Avenue',
          meeting: 'Tuesdays, 6:30 PM - 8:00 PM',
          contact: 'troop456@greatvalleydistrict.org',
          phone: '(540) 555-0456',
          programs: ['Scouts BSA', 'High Adventure']
        }
      ];
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-8 text-scout-forest-800">
          Find Your Local Scout Troop
        </h1>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg text-scout-stone-700 text-center mb-8">
            Join 1,000+ Great Valley District Scout families in adventure, friendship, and character development
          </p>

          {!showResults ? (
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-2xl font-semibold mb-4">Find Troops Near You</h2>
              <p className="text-scout-stone-600 mb-4">Enter your ZIP code to find troops in your area:</p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  placeholder="Enter your ZIP code"
                  maxLength={5}
                  className="w-full p-3 border border-scout-stone-300 rounded-lg focus:ring-2 focus:ring-scout-forest-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-scout-forest-700 text-white py-3 px-6 rounded-lg hover:bg-scout-forest-800 transition-colors"
                >
                  Find My Troop
                </button>
              </form>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h2 className="text-2xl font-semibold mb-4">Troops Near {zipCode}</h2>

                {getTroopRecommendations().map((troop, index) => (
                  <div key={index} className="border border-scout-stone-200 rounded-lg p-6 mb-4">
                    <h3 className="text-xl font-semibold text-scout-forest-800 mb-3">{troop.name}</h3>
                    <div className="space-y-2 text-scout-stone-700">
                      <p className="flex items-center">
                        <Icon name="mapPin" className="mr-2" size="sm" />
                        {troop.location}
                      </p>
                      <p className="flex items-center">
                        <Icon name="clock" className="mr-2" size="sm" />
                        {troop.meeting}
                      </p>
                      <p className="flex items-center">
                        <Icon name="mail" className="mr-2" size="sm" />
                        {troop.contact}
                      </p>
                      <p className="flex items-center">
                        <Icon name="phone" className="mr-2" size="sm" />
                        {troop.phone}
                      </p>
                      <p className="flex items-center">
                        <Icon name="target" className="mr-2" size="sm" />
                        Programs: {troop.programs.join(', ')}
                      </p>
                    </div>
                    <div className="mt-4 space-x-4">
                      <Link
                        href="/join-now"
                        className="inline-block bg-scout-forest-700 text-white px-6 py-2 rounded-lg hover:bg-scout-forest-800 transition-colors"
                      >
                        Join This Troop
                      </Link>
                      <button className="inline-block border border-scout-forest-700 text-scout-forest-700 px-6 py-2 rounded-lg hover:bg-scout-forest-50 transition-colors">
                        Contact Troop
                      </button>
                    </div>
                  </div>
                ))}

                <button
                  onClick={() => setShowResults(false)}
                  className="w-full mt-4 border border-scout-stone-300 text-scout-stone-700 py-2 px-4 rounded-lg hover:bg-scout-stone-50 transition-colors"
                >
                  Search Different ZIP Code
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}