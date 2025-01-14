export interface Student {
  id: string;
  name: string;
  profilePicture: string;
  gender: 'Male' | 'Female' | 'Other';
  area: string;
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
  isEligibleForFunding?: boolean; // New field
  hasGraduated?: boolean; // New field
  loanDetails?: {
    amountPaid: number;
    remaining: number;
  };
  currentEmployment?: {
    position: string;
    organization: string;
  };
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