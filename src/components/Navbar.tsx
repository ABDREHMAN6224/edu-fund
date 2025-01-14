import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

export const Navbar = () => {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-600" />
              <span className="text-xl font-bold text-gray-900">EduFund</span>
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link to="/students" className="text-gray-700 hover:text-indigo-600">Students</Link>
            {/* <Link to="/team" className="text-gray-700 hover:text-indigo-600">Team</Link> */}
            {/* <Link to="/testimonials" className="text-gray-700 hover:text-indigo-600">Testimonials</Link> */}
            {/* <Link to="/statistics" className="text-gray-700 hover:text-indigo-600">Statistics</Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
};