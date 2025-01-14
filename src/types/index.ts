export interface Student {
  id: string;
  name: string;
  profilePicture: string;
  gender: 'Male' | 'Female' | 'Other';
  area: 'KPK' | 'Punjab' | 'Balochistan' | 'Gilgit/Chitral' | 'Sindh'|'Islamabad';
  yearOfStudy: 1 | 2 | 3 | 4|5;
  fundRequired: number;
  fieldOfStudy: string;
  currentCourse: string;
  semester: number;
  grades: number;
  university: string;
  linkedin?: string;
  twitter?: string;
  resume?: string;
  projects: Array<{
    title: string;
    description: string;
  }>;
  achievements: string[];
  isGraduated: boolean;
  graduationDate?: string;
  totalFundingReceived?: number;
  loanRepaymentStatus?: string;
  currentEmployer?: string;
  jobPosition?: string;
  email?: string;
  amountRepaid?: number;
  amountLeft?: number;
  isEligibleForFunding?: boolean; // New field
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  linkedin: string;
  twitter: string;
  email: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  type: 'donor' | 'student';
  content: string;
  image: string;
}