import { useEffect, useState } from 'react';
import { StudentSearch } from '../components/StudentSearch';
import { StudentCard } from '../components/StudentCard';
import { useStudent } from '../context/studentContext';

const ITEMS_PER_PAGE = 9;

export const StudentsPage = () => {
  const {students} = useStudent()
  const [currentPage, setCurrentPage] = useState(1);

  const totalItems = students.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  
 

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Students Directory</h1>
        <StudentSearch />
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.slice(startIndex, startIndex + ITEMS_PER_PAGE).map((student) => (
            // @ts-ignore
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
        {/* Pagination Controls */}
        <div className="mt-4 flex justify-center space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-md ${currentPage === i + 1 ? 'bg-indigo-600 text-white' : 'bg-gray-200'}`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};
