import React, { useEffect } from 'react';
import { Student } from '../types';
import { studentsData } from '../data/student';


type StudentContextType = {
students: Student[];
  addStudent: (student: Student) => void;
  deleteStudent: (id: string) => void;
  updateStudent: (id: string, student: Student) => void;
  setFilters: (filters: any) => void;
  filters:any;
};

const StudentContext = React.createContext<StudentContextType | undefined>(undefined);


export const StudentProvider = ({ children 
}:{
    children: React.ReactNode;
}) => {
    const [students, setStudents] = React.useState<Student[]>(studentsData);
    const [filteredStudents, setFilteredStudents] = React.useState<Student[]>(studentsData);
     const [filters, setFilters] = React.useState({
        search:'',
        gender: '',
        area: '',
        yearOfStudy: '',
        fundRequired: '',
        fieldOfStudy: '',
      });
    
    const addStudent = (student: Student) => {
        setStudents([...students, student]);

    };

    useEffect(() => {
        setFilteredStudents(students);
    }, [students]);
    
    const deleteStudent = (id: string) => {
        setStudents(students.filter((student) => student.id !== id));
    };
    
    const updateStudent = (id: string, student: Student) => {
        setStudents(
        students.map((s) => {
            if (s.id === id) {
            return student;
            }
            return s;
        })
        );
    };
    
    const filterStudents = (filters: any) => {
        let students_:Student[] = [...students];
        if (filters.search) {
        students_ = students_.filter((student) =>
            student.name.toLowerCase().startsWith(filters.search.toLowerCase())
        );
        }
        if (filters.gender) {
                students_ = students_.filter((student) =>
                    student.gender.toLowerCase() === filters.gender.toLowerCase()
            );
        }
        if (filters.area) {
        students_ = students_.filter((student) =>
            student.area.toLowerCase() === filters.area.toLowerCase()
        );}
        if (filters.yearOfStudy) {
        students_ = students_.filter((student) =>
            student.yearOfStudy === parseInt(filters.yearOfStudy)
        );}
        if (filters.fundRequired) {
        students_ = students_.filter((student) =>
            student.fundRequired === parseInt(filters.fundRequired)
        );}
        if (filters.fieldOfStudy) {
        students_ = students_.filter((student) =>
            student.fieldOfStudy.toLowerCase() === filters.fieldOfStudy.toLowerCase()
        );}
        setFilteredStudents(students_)

    };

    useEffect(() => {
        filterStudents(filters);
    }, [filters, students]);

    return (
        <StudentContext.Provider value={{ students:filteredStudents, addStudent, deleteStudent, updateStudent,setFilters,filters }}>
            {children}
        </StudentContext.Provider>
    );
}

export const useStudent = () => {
    const context = React.useContext(StudentContext);
    if (!context) {
        throw new Error('useStudent must be used within a StudentProvider');
    }
    return context;
}

