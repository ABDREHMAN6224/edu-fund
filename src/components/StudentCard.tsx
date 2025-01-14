import React from 'react';
import { Link } from 'react-router-dom';
import { Student } from '../types';
import { GraduationCap, MapPin, Book } from 'lucide-react';

interface StudentCardProps {
  student: Student;
}

export const StudentCard: React.FC<StudentCardProps> = ({ student }) => {
  return (
    <Link to={`/student/${student.id}`} className="block">
      <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <img
          src={student.profilePicture}
          alt={student.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">{student.name}</h3>
          <div className="mt-2 space-y-2">
            <div className="flex items-center text-gray-600">
              <Book className="h-4 w-4 mr-2" />
              <span>{student.fieldOfStudy}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <MapPin className="h-4 w-4 mr-2" />
              <span>{student.area}</span>
            </div>
            <div className="flex items-center text-gray-600">
              <GraduationCap className="h-4 w-4 mr-2" />
              <span>{student.university}</span>
            </div>
          </div>
          <div className="mt-4">
            <span className="inline-block bg-indigo-100 text-indigo-800 text-sm px-3 py-1 rounded-full">
              Funding needed: ${student.fundRequired.toLocaleString()}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};