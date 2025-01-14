import React from 'react';
import { StudentSearch } from '../components/StudentSearch';
import { StudentCard } from '../components/StudentCard';

export const StudentsPage = () => {
  // Mock data for students
  const students = [
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
    // Add more mock students here
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Students Directory</h1>
        
        <StudentSearch />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};