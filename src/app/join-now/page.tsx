'use client';

import { useState } from 'react';
import Navigation from "@/components/Navigation";
import Icon from "@/components/Icon";
import { gradients } from "@/config/colors";

export default function JoinNow() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    parentName: '',
    childName: '',
    childAge: '',
    zipCode: '',
    meetingPreferences: '',
    hearAbout: '',
    specialNeeds: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const getProgram = () => {
    const age = parseInt(formData.childAge);
    if (age >= 5 && age <= 10) return 'Cub Scouts';
    if (age >= 11 && age <= 17) return 'Scouts BSA';
    return 'Please contact us for program options';
  };

  const getTroopRecommendation = () => {
    // Simple ZIP code routing logic (in real implementation, this would use a proper mapping service)
    const zip = formData.zipCode;
    if (zip.startsWith('240') || zip.startsWith('241')) {
      return {
        name: 'Troop 123 - Downtown',
        location: 'Downtown Community Center, 123 Main Street',
        meeting: 'Thursdays, 7:00 PM - 8:30 PM',
        contact: 'troop123@roanokevalleyscouts.org',
        phone: '(540) 555-0123'
      };
    } else {
      return {
        name: 'Troop 456 - Westside',
        location: 'Westside Elementary School, 456 Oak Avenue',
        meeting: 'Tuesdays, 6:30 PM - 8:00 PM',
        contact: 'troop456@roanokevalleyscouts.org',
        phone: '(540) 555-0456'
      };
    }
  };

  return (
    <div className={`min-h-screen bg-gradient-to-b ${gradients.page}`}>
      <Navigation />

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-scout-stone-700">Progress</span>
              <span className="text-sm font-medium text-scout-stone-700">{Math.round((step / 3) * 100)}%</span>
            </div>
            <div className="w-full bg-scout-stone-200 rounded-full h-2">
              <div
                className="bg-scout-forest-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(step / 3) * 100}%` }}
              ></div>
            </div>
          </div>

          {step === 1 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h1 className="text-3xl font-bold text-center mb-6 text-green-800">
                Join the Adventure!
              </h1>
              <p className="text-center text-gray-700 mb-8">
                Start your family&apos;s Scouting journey. Let&apos;s find the perfect troop for you.
              </p>

              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="(540) 555-0123"
                  />
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-green-800 font-semibold text-center">
                    Join 1,000+ Great Valley District Scout families
                  </p>
                  <p className="text-green-700 text-sm text-center mt-1">
                    We&apos;ll connect you with your local troop coordinator within 24 hours
                  </p>
                </div>

                <button
                  type="button"
                  onClick={handleNext}
                  disabled={!formData.email}
                  className="w-full bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Continue to Step 2
                </button>
              </form>
            </div>
          )}

          {step === 2 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
                Tell Us About Your Family
              </h2>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Parent/Guardian Name *
                    </label>
                    <input
                      type="text"
                      name="parentName"
                      value={formData.parentName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Your name"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child&apos;s Name *
                    </label>
                    <input
                      type="text"
                      name="childName"
                      value={formData.childName}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="Child's name"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Child&apos;s Age *
                    </label>
                    <select
                      name="childAge"
                      value={formData.childAge}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      required
                    >
                      <option value="">Select age</option>
                      {Array.from({ length: 13 }, (_, i) => i + 5).map(age => (
                        <option key={age} value={age}>{age} years old</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      ZIP Code *
                    </label>
                    <input
                      type="text"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                      placeholder="24016"
                      maxLength={5}
                      required
                    />
                  </div>
                </div>

                {formData.childAge && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-blue-800 font-semibold">
                      Recommended Program: {getProgram()}
                    </p>
                    <p className="text-blue-700 text-sm mt-1">
                      Based on your child&apos;s age, we&apos;ll connect you with the appropriate program
                    </p>
                  </div>
                )}

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    disabled={!formData.parentName || !formData.childName || !formData.childAge || !formData.zipCode}
                    className="flex-1 bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                  >
                    Continue to Step 3
                  </button>
                </div>
              </form>
            </div>
          )}

          {step === 3 && (
            <div className="bg-white rounded-lg shadow-lg p-8">
              <h2 className="text-2xl font-bold text-center mb-6 text-green-800">
                Preferences & Assignment
              </h2>

              <form
                name="scout-application"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Hidden fields for Netlify form */}
                <input type="hidden" name="form-name" value="scout-application" />
                <div style={{ display: 'none' }}>
                  <label>Don&apos;t fill this out if you&apos;re human: <input name="bot-field" /></label>
                </div>

                {/* Hidden fields to pass data from previous steps */}
                <input type="hidden" name="email" value={formData.email} />
                <input type="hidden" name="phone" value={formData.phone} />
                <input type="hidden" name="parentName" value={formData.parentName} />
                <input type="hidden" name="childName" value={formData.childName} />
                <input type="hidden" name="childAge" value={formData.childAge} />
                <input type="hidden" name="zipCode" value={formData.zipCode} />
                <input type="hidden" name="recommendedProgram" value={getProgram()} />
                <input type="hidden" name="assignedTroop" value={getTroopRecommendation().name} />

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Meeting Time Preferences
                  </label>
                  <select
                    name="meetingPreferences"
                    value={formData.meetingPreferences}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">No preference</option>
                    <option value="weekday-evening">Weekday evenings</option>
                    <option value="weekend">Weekends</option>
                    <option value="flexible">Flexible schedule</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    How did you hear about Scouting?
                  </label>
                  <select
                    name="hearAbout"
                    value={formData.hearAbout}
                    onChange={handleInputChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  >
                    <option value="">Select option</option>
                    <option value="friend-family">Friend or family member</option>
                    <option value="school">School information</option>
                    <option value="online-search">Online search</option>
                    <option value="community-event">Community event</option>
                    <option value="social-media">Social media</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Special Accommodations or Questions
                  </label>
                  <textarea
                    name="comments"
                    value={formData.specialNeeds}
                    onChange={handleInputChange}
                    rows={3}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Any comments or questions you want to have addressed?"
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="button"
                    onClick={handleBack}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Back
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-green-700 text-white py-3 px-6 rounded-lg hover:bg-green-800 transition-colors font-semibold"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Trust indicators */}
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600 mb-2">
              <Icon name="shield" className="inline mr-2" size="sm" />
              Your information is secure and will only be shared with your assigned troop coordinator
            </p>
            <p className="text-sm text-gray-600">
              Questions? Call our 24/7 helpline: <span className="font-semibold text-green-700">1-844-SCOUTS1</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}