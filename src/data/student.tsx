import { Student } from "../types";

export const students:Student[] = [
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
      name: 'Ali Khan',
      profilePicture: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8',
      gender: 'Male',
      area: 'Sindh',
      yearOfStudy: 2,
      fundRequired: 100000,
      fieldOfStudy: 'Electrical Engineering',
      currentCourse: 'Bachelor of Electrical Engineering',
      semester: 3,
      grades: 3.5,
      university: 'NUST',
      projects: [{
        title:'Smart Home Automation',
        description:""
      }],
      achievements: ['Dean’s Honor List (1st Year)'],
      isGraduated: false
    },
    {
      id: '3',
      name: 'Ayesha Malik',
      profilePicture: 'https://images.unsplash.com/photo-1502685104226-ee32379fefbe',
      gender: 'Female',
      area: 'Balochistan',
      yearOfStudy: 4,
      fundRequired: 200000,
      fieldOfStudy: 'Medicine',
      currentCourse: 'Bachelor of Medicine and Surgery (MBBS)',
      semester: 8,
      grades: 3.9,
      university: 'Aga Khan University',
      projects: [{
        title:'Community Health Initiative',
        description:""
      }],
      achievements: ['Research Paper Publication in Medical Journal'],
      isGraduated: false
    },

  ];