export interface Job {
  id: string;
  type: string;
  title: string;
  company: string;
  companyLogo?: string | null;
  createdAt: string;
  location: string;
}
