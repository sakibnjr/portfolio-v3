import {
  LuGraduationCap,
  LuSchool,
  LuAward,
} from "react-icons/lu";
import { IconType } from "react-icons";

export interface EducationItem {
  id: string;
  badge: string;
  degree: string;
  institution: string;
  location: string;
  period: string;
  gpa: string;
  status?: string;
  featured?: boolean;
  icon: IconType;
}

export const educationData: EducationItem[] = [
  {
    id: "bsc",
    badge: "01 // UNDERGRADUATE",
    degree: "B.Sc. in Computer Science & Engineering",
    institution: "Daffodil International University",
    location: "Dhaka, Bangladesh",
    period: "2021 — 2025",
    gpa: "CGPA 3.50 / 4.00",
    status: "Graduated",
    featured: true,
    icon: LuGraduationCap,
  },
  {
    id: "hsc",
    badge: "02 // HIGHER SECONDARY",
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Joypurhat Govt. College",
    location: "Joypurhat, Bangladesh",
    period: "2018 — 2020",
    gpa: "GPA 4.83 / 5.00",
    status: "Science",
    icon: LuSchool,
  },
  {
    id: "ssc",
    badge: "03 // SECONDARY SCHOOL",
    degree: "Secondary School Certificate (SSC)",
    institution: "R.B Govt. High School",
    location: "Joypurhat, Bangladesh",
    period: "2016 — 2018",
    gpa: "GPA 5.00 / 5.00",
    status: "Science",
    icon: LuAward,
  },
];
