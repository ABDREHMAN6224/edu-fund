import React from 'react';
import { Link } from 'react-router-dom';
import { Student } from '../types';
import { GraduationCap, MapPin, Book, Briefcase, DollarSign } from 'lucide-react';

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
          {student.isGraduated ? (
            <div className="mt-4 text-gray-600">
              <div className="flex items-center">
                <Briefcase className="h-4 w-4 mr-2" />
                <span>{student.currentEmployer} - {student.jobPosition}</span>
              </div>
              <div className="flex items-center mt-2">
                <DollarSign className="h-4 w-4 mr-2" />
                <span>Repaid: ${student.amountRepaid?.toLocaleString()} | Left: ${student.amountLeft?.toLocaleString()}</span>
              </div>
            </div>
          ) : (
            <div className="mt-4">
              <span className={`inline-block text-sm px-3 py-1 rounded-full ${student.isEligibleForFunding ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                {student?.isEligibleForFunding ? 'Eligible for funding' : 'Not eligible for funding'}
              </span>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};
