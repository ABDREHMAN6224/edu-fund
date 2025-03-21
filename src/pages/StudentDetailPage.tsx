import { useParams } from 'react-router-dom';
import { Linkedin, Twitter, FileText, Award } from 'lucide-react';
import { studentsData as students } from '../data/student';

export const StudentDetails = () => {
  const { id } = useParams();

  // Find the student by ID
  const student = students.find((s) => s.id === id);
  if (!student) {
    return <div className="text-center mt-20 text-gray-600">Student not found.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4">
        {/* Profile Header */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="h-48 bg-indigo-600"></div>
          <div className="relative px-6 pb-6">
            <div className="flex flex-col sm:flex-row items-center">
              <img
                src={student.profilePicture}
                alt={student.name}
                className="w-32 h-32 rounded-full border-4 border-white -mt-16"
              />
              <div className="mt-4 sm:mt-0 sm:ml-6 text-center sm:text-left">
                <h1 className="text-2xl font-bold text-gray-900">{student.name}</h1>
                <p className="text-gray-600">
                  {student.currentCourse} at {student.university}
                </p>
                {student.isGraduated && (
                  <p className="text-sm text-gray-500 mt-2">Graduated on: {student.graduationDate}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Basic Info */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Basic Information</h2>
              <div className="space-y-3">
                <p>
                  <span className="font-medium">Field of Study:</span> {student.fieldOfStudy}
                </p>
                <p>
                  <span className="font-medium">Year:</span>{' '}
                  {student.isGraduated ? 'Graduated' : `${student.yearOfStudy}rd Year`}
                </p>
                <p>
                  <span className="font-medium">Semester:</span>{' '}
                  {student.isGraduated ? 'N/A' : student.semester}
                </p>
                <p>
                  <span className="font-medium">GPA:</span> {student.grades}
                </p>
                <p>
                  <span className="font-medium">Area:</span> {student.area}
                </p>
                <p>
                  <span className="font-medium">Eligible for Funding:</span>{' '}
                  {student.grades >= 3.5 ? 'Yes' : 'No'}
                </p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-lg font-semibold mb-4">Connect</h2>
              <div className="space-y-4">
                {student.linkedin && (
                  <a
                    href={student.linkedin}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Linkedin className="h-5 w-5 mr-2" />
                    LinkedIn
                  </a>
                )}
                {student.twitter && (
                  <a
                    href={student.twitter}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <Twitter className="h-5 w-5 mr-2" />
                    Twitter
                  </a>
                )}
                {student.resume && (
                  <a
                    href={student.resume}
                    className="flex items-center text-gray-600 hover:text-indigo-600"
                  >
                    <FileText className="h-5 w-5 mr-2" />
                    Resume
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Projects, Achievements, and Funding */}
          <div className="md:col-span-2 space-y-8">
            {!student.isGraduated && (
              <>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Projects</h2>
                  <div className="space-y-6">
                    {student.projects.map((project, index) => (
                      <div key={index}>
                        <h3 className="font-medium text-gray-900">{project.title}</h3>
                        <p className="text-gray-600 mt-1">{project.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Achievements</h2>
                  <div className="space-y-3">
                    {student.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-start">
                        <Award className="h-5 w-5 text-indigo-600 mr-2 mt-0.5" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-lg font-semibold mb-4">Funding Required</h2>
                  <div className="text-center">
                    <p className="text-3xl font-bold text-indigo-600">
                      ${student.fundRequired.toLocaleString()}
                    </p>
                    <button className="mt-4 bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700">
                      Support {student.name.split(' ')[0]}'s Education
                    </button>
                  </div>
                </div>
              </>
            )}

            {student.isGraduated && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-4">Loan Repayment Status</h2>
                <div className="space-y-3">
                  <p>
                    <span className="font-medium">Employer:</span> {student.currentEmployer || 'N/A'}
                  </p>
                  <p>
                    <span className="font-medium">Position:</span> {student.jobPosition || 'N/A'}
                  </p>
                  <p>
                    <span className="font-medium">Amount Repaid:</span> $
                    {student.loanDetails?.amountPaid.toLocaleString()|| 0}
                  </p>
                  <p>
                    <span className="font-medium">Remaining Balance:</span> $
                    {(
                      student.loanDetails?.remaining || (student.totalFundingReceived||0) - student.fundRequired|| 0
                    ).toLocaleString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;