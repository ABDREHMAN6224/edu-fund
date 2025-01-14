import React, { useState } from 'react';
import { Save, Sliders } from 'lucide-react';

interface Preferences {
  fundingCriteria: string[];
  fieldOfStudy: string[];
  financialLimit: string;
  location: string[];
  academicPerformance: string;
  gender: string;
  yearOfStudy: string[];
}

export const DonorPreferences = () => {
  const [preferences, setPreferences] = useState<Preferences>({
    fundingCriteria: [],
    fieldOfStudy: [],
    financialLimit: '',
    location: [],
    academicPerformance: '',
    gender: '',
    yearOfStudy: [],
  });

  const handleMultiSelect = (field: keyof Preferences, value: string) => {
    setPreferences(prev => ({
      ...prev,
      [field]: prev[field].includes(value)
        ? prev[field].filter(item => item !== value)
        : [...prev[field], value]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle preferences submission
    console.log('Preferences updated:', preferences);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center space-x-2 mb-6">
        <Sliders className="h-5 w-5 text-indigo-600" />
        <h2 className="text-2xl font-bold">Your Preferences</h2>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Funding Criteria */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Funding Criteria
          </label>
          <div className="space-y-2">
            {['Merit-based', 'Need-based', 'Special Talent', 'Research Focus'].map(criteria => (
              <label key={criteria} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.fundingCriteria.includes(criteria)}
                  onChange={() => handleMultiSelect('fundingCriteria', criteria)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{criteria}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Field of Study */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Field of Study
          </label>
          <div className="space-y-2">
            {['Computer Science', 'Engineering', 'Medicine', 'Business', 'Arts', 'Social Sciences'].map(field => (
              <label key={field} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.fieldOfStudy.includes(field)}
                  onChange={() => handleMultiSelect('fieldOfStudy', field)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{field}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Financial Limit */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Financial Limit (PKR)
          </label>
          <select
            value={preferences.financialLimit}
            onChange={(e) => setPreferences({ ...preferences, financialLimit: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select limit</option>
            <option value="100000">Up to 100,000</option>
            <option value="200000">Up to 200,000</option>
            <option value="300000">Up to 300,000</option>
            <option value="unlimited">No Limit</option>
          </select>
        </div>

        {/* Location */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Preferred Locations
          </label>
          <div className="space-y-2">
            {['KPK', 'Punjab', 'Balochistan', 'Gilgit/Chitral', 'Sindh'].map(location => (
              <label key={location} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.location.includes(location)}
                  onChange={() => handleMultiSelect('location', location)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{location}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Academic Performance */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Minimum Academic Performance
          </label>
          <select
            value={preferences.academicPerformance}
            onChange={(e) => setPreferences({ ...preferences, academicPerformance: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">Select GPA</option>
            <option value="2.5">2.5+ GPA</option>
            <option value="3.0">3.0+ GPA</option>
            <option value="3.5">3.5+ GPA</option>
            <option value="3.8">3.8+ GPA</option>
          </select>
        </div>

        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Gender Preference
          </label>
          <select
            value={preferences.gender}
            onChange={(e) => setPreferences({ ...preferences, gender: e.target.value })}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
          >
            <option value="">No Preference</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>

        {/* Year of Study */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Year of Study
          </label>
          <div className="space-y-2">
            {['1st Year', '2nd Year', '3rd Year', '4th Year'].map(year => (
              <label key={year} className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={preferences.yearOfStudy.includes(year)}
                  onChange={() => handleMultiSelect('yearOfStudy', year)}
                  className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                />
                <span>{year}</span>
              </label>
            ))}
          </div>
        </div>

        <button
          type="submit"
          className="w-full flex items-center justify-center space-x-2 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 transition-colors"
        >
          <Save className="h-5 w-5" />
          <span>Save Preferences</span>
        </button>
      </form>
    </div>
  );
};