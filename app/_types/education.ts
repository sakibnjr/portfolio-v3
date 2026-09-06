import type { IconType } from "react-icons";
import type { StaticImageData } from "next/image";


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
  image?: string | StaticImageData;
}
