import { StudentSearch } from '../components/StudentSearch';
import { StudentCard } from '../components/StudentCard';
import { students } from '../data/student';

export const StudentsPage = () => {
  // Mock data for students


  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Students Directory</h1>
        
        <StudentSearch />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {students.map((student) => (
            // @ts-ignore
            <StudentCard key={student.id} student={student} />
          ))}
        </div>
      </div>
    </div>
  );
};