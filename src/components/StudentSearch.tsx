import React, { useState } from 'react';
import { Search, Filter } from 'lucide-react';

export const StudentSearch = () => {
  const [filters, setFilters] = useState({
    gender: '',
    area: '',
    yearOfStudy: '',
    fundRequired: '',
    fieldOfStudy: '',
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center mb-6">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          <input
            type="text"
            placeholder="Search students..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <button className="ml-4 p-2 text-gray-600 hover:text-indigo-600">
          <Filter className="h-5 w-5" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        <select
          value={filters.gender}
          onChange={(e) => setFilters({ ...filters, gender: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Gender</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <select
          value={filters.area}
          onChange={(e) => setFilters({ ...filters, area: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Area</option>
          <option value="KPK">KPK</option>
          <option value="Punjab">Punjab</option>
          <option value="Balochistan">Balochistan</option>
          <option value="Gilgit/Chitral">Gilgit/Chitral</option>
          <option value="Sindh">Sindh</option>
        </select>

        <select
          value={filters.yearOfStudy}
          onChange={(e) => setFilters({ ...filters, yearOfStudy: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Year of Study</option>
          <option value="1">1st Year</option>
          <option value="2">2nd Year</option>
          <option value="3">3rd Year</option>
          <option value="4">4th Year</option>
        </select>

        <select
          value={filters.fundRequired}
          onChange={(e) => setFilters({ ...filters, fundRequired: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Fund Required</option>
          <option value="100000">&gt; 100,000</option>
          <option value="150000">&gt; 150,000</option>
          <option value="200000">&gt; 200,000</option>
        </select>

        <select
          value={filters.fieldOfStudy}
          onChange={(e) => setFilters({ ...filters, fieldOfStudy: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500"
        >
          <option value="">Field of Study</option>
          <option value="Computer Science">Computer Science</option>
          <option value="Engineering">Engineering</option>
          <option value="Medicine">Medicine</option>
          <option value="Business">Business</option>
        </select>
      </div>
    </div>
  );
};