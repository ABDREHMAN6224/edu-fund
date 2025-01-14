import React from 'react';
import { Link } from 'react-router-dom';
import { DonorPreferences } from '../components/DonorPreferences';
import { StudentCard } from '../components/StudentCard';
import { MessageSquare, Users, TrendingUp, Award,  Heart, ArrowRight, CheckCircle, Briefcase } from 'lucide-react';
import { Student } from '../types';

const ITEMS_PER_PAGE = 4;

export const HomePage = () => {
  const [page, setPage] = React.useState(1);
  // Rest of the component remains the same
  const recommendedStudents = [
    {
      id: '3',
      name: 'Sarah Ahmed',
      profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      gender: 'Female',
      area: 'Punjab',
      yearOfStudy: 3,
      fundRequired: 150000,
      fieldOfStudy: 'Computer Science',
      currentCourse: 'Bachelor of Computer Science',
      semester: 5,
      grades: 3.8,
      university: 'LUMS',
      projects: [],
      achievements: [],
      isGraduated: false
    },
    {
      id: '1',
      name: 'Sarah Ahmed',
      profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      gender: 'Female',
      area: 'Punjab',
      yearOfStudy: 3,
      fundRequired: 150000,
      fieldOfStudy: 'Computer Science',
      currentCourse: 'Bachelor of Computer Science',
      semester: 5,
      grades: 3.8,
      university: 'LUMS',
      projects: [],
      achievements: [],
      isGraduated: false
    },
    {
      id: '2',
      name: 'Sarah Ahmed',
      profilePicture: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
      gender: 'Female',
      area: 'Punjab',
      yearOfStudy: 3,
      fundRequired: 150000,
      fieldOfStudy: 'Computer Science',
      currentCourse: 'Bachelor of Computer Science',
      semester: 5,
      grades: 3.8,
      university: 'LUMS',
      projects: [],
      achievements: [],
      isGraduated: false
    },
  ];

  const totalItems = recommendedStudents.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (page - 1) * ITEMS_PER_PAGE;

  const currentStudents = recommendedStudents.slice(startIndex, startIndex + ITEMS_PER_PAGE);


  const handleNextPage = (i:number) => {
    setPage(i);
  }

  const stats = [
    { icon: Users, label: 'Active Students', value: '500+' },
    { icon: TrendingUp, label: 'Success Rate', value: '95%' },
    { icon: Award, label: 'Graduates', value: '1000+' },
    { icon: Heart, label: 'Active Donors', value: '2500+' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section with Animation */}
      <div className="relative bg-gradient-to-r h-lvh flex items-center justify-center from-indigo-600 to-purple-600 text-white">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative max-w-7xl mx-auto px-4 py-24">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
              Empowering Education Through Community Support
            </h1>
            <p className="text-xl mb-8 max-w-2xl">
              Connect with talented students and make a difference in their educational journey through direct funding support.
            </p>
            <Link to="/students" className="inline-flex items-center px-8 py-3 border-2 border-white text-lg font-medium rounded-md hover:bg-white hover:text-indigo-600 transition-colors duration-300">
              Support a Student
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section with Counter Animation */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center transform hover:scale-105 transition-transform duration-300">
                <stat.icon className="h-8 w-8 mx-auto text-indigo-600 mb-4" />
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Browse Students', description: 'Explore profiles of talented students seeking support for their education.' },
              { title: 'Choose & Connect', description: 'Select students based on your preferences and connect directly with them.' },
              { title: 'Make an Impact', description: 'Contribute to their education and track their progress throughout their journey.' }
            ].map((step, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <div className="text-2xl font-bold text-indigo-600 mb-4">0{index + 1}</div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Success Stories Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Ali Hassan',
                image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
                story: 'Graduated from LUMS with distinction, now working as a software engineer at Google.',
                company: 'Google'
              },
              {
                name: 'Fatima Khan',
                image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
                story: 'Completed medical school and now serving as a resident doctor in a public hospital.',
                company: 'Shifa International'
              },
              {
                name: 'Usman Ahmad',
                image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
                story: 'Founded a successful EdTech startup after graduating in Computer Science.',
                company: 'TechEd Solutions'
              }
            ].map((story, index) => (
              <div key={index} className="bg-gray-50 rounded-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
                <img src={story.image} alt={story.name} className="w-full h-48 object-cover" />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{story.name}</h3>
                  <p className="text-gray-600 mb-4">{story.story}</p>
                  <div className="flex items-center text-sm text-gray-500">
                    <Briefcase className="h-4 w-4 mr-2" />
                    {story.company}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
            {/* Testimonials Section */}
<div className="py-16 bg-gray-50">
  <div className="max-w-7xl mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">What Our Donors Say</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          name: 'John Doe',
          feedback: 'Supporting talented students has been a rewarding experience. I am proud to contribute to their success!',
          image: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe'
        },
        {
          name: 'Jane Smith',
          feedback: 'Knowing I am helping students achieve their dreams gives me immense satisfaction.',
          image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e'
        },
        {
          name: 'Robert Johnson',
          feedback: 'This platform makes it easy to connect with and support deserving students.',
          image: 'https://images.unsplash.com/photo-1595152772835-219674b2a8a6'
        }
      ].map((testimonial, index) => (
        <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center">
          <img
            src={testimonial.image}
            alt={testimonial.name}
            className="w-16 h-16 mx-auto rounded-full mb-4"
          />
          <h3 className="text-lg font-semibold mb-2">{testimonial.name}</h3>
          <p className="text-gray-600 italic">"{testimonial.feedback}"</p>
        </div>
      ))}
    </div>
  </div>
</div>

      {/* Impact Section */}
      <div className="py-16 bg-indigo-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              {[
                'Over 1000 students supported in their education',
                '95% graduation rate among funded students',
                'Alumni working in top companies globally',
                'Creating lasting impact in communities'
              ].map((point, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="h-6 w-6 text-indigo-600 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <img src="https://images.unsplash.com/photo-1523240795612-9a054b0db644" alt="Impact 1" className="rounded-lg transform hover:scale-105 transition-transform duration-300" />
              <img src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f" alt="Impact 2" className="rounded-lg transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content - Preferences and Recommendations */}
      <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <DonorPreferences />
          </div>
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Recommended Students</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {currentStudents.map((student) => (
                <StudentCard key={student.id} student={student as Student} />
              ))}
            </div>
            {/* Pagination Controls */}
            <div className="mt-4 flex justify-center space-x-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i}
                  onClick={() => handleNextPage(i+1)}
                  className={`px-4 py-2 rounded-md ${page === i + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
                >
                  {i + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>


      {/* Chatbot Button */}
      <div className="fixed bottom-8 right-8 animate-bounce">
        <button className="bg-indigo-600 text-white p-4 rounded-full shadow-lg hover:bg-indigo-700 transition-colors duration-300">
          <MessageSquare className="h-6 w-6" />
        </button>
      </div>

    </div>
  );
};