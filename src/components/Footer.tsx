import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center space-x-2">
              <GraduationCap className="h-8 w-8 text-indigo-400" />
              <span className="text-xl font-bold text-white">EduFund</span>
            </Link>
            <p className="text-sm">
              Empowering students through community-driven educational funding, creating opportunities for a brighter future.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/students" className="hover:text-indigo-400 transition-colors">Find Students</Link></li>
              <li><Link to="/about" className="hover:text-indigo-400 transition-colors">About Us</Link></li>
              <li><Link to="/success-stories" className="hover:text-indigo-400 transition-colors">Success Stories</Link></li>
              <li><Link to="/faq" className="hover:text-indigo-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>contact@edufund.org</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+92 300 1234567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Islamabad, Pakistan</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-indigo-400 transition-colors">
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} EduFund. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};