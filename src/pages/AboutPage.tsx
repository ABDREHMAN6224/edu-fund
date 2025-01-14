import { Link } from 'react-router-dom';
import { Users, Heart, Award, BookOpen } from 'lucide-react';

export const AboutPage = () => {
  const stats = [
    { icon: Users, label: 'Community Members', value: '3000+' },
    { icon: Award, label: 'Graduates Supported', value: '1000+' },
    { icon: Heart, label: 'Donors Contributing', value: '2500+' },
    { icon: BookOpen, label: 'Fields of Study Covered', value: '50+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r h-lvh flex items-center justify-center from-blue-600 to-green-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24 text-center">
          <h1 className="text-5xl font-bold mb-6">About Us</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Empowering students and creating opportunities for a brighter future through community-driven support.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Mission</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            We aim to bridge the gap between talented students and resources by fostering a platform where individuals can contribute
to education and transform lives. By connecting donors and students directly, we strive to create a collaborative community
that values learning and growth.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <stat.icon className="h-8 w-8 mx-auto text-blue-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Vision</h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto text-center">
            To create an inclusive and empowered society by ensuring access to education for all, cultivating a culture of giving,
and inspiring individuals to achieve their dreams.
          </p>
        </div>
      </div>

      {/* How We Work Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Connecting Donors',
                description: 'We provide a transparent platform for donors to find and support students directly.',
              },
              {
                title: 'Empowering Students',
                description: 'Students can showcase their achievements and receive support tailored to their needs.',
              },
              {
                title: 'Building Futures',
                description: 'Together, we help students excel in their fields and contribute to their communities.',
              },
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="py-16 bg-blue-600 text-white text-center">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8">
            Whether you’re a student in need of support or someone who wants to contribute, your participation makes all the difference.
          </p>
          <Link
            to="#"
            className="inline-flex items-center px-8 py-3 bg-white text-blue-600 text-lg font-medium rounded-md hover:bg-gray-100 transition-colors duration-300"
          >
            Get Involved
          </Link>
        </div>
      </div>

    </div>
  );
};
