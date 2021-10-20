export interface Job {
  id: number;
  type: string;
  title: string;
  company: string;
  companyLogo?: string | null;
  createdAt: string;
  location: string;
}
