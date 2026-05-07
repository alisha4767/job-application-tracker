import type { JobApplication } from "../types/job";

export const sampleJobs: JobApplication[] = [
  {
    id: "1",
    company: "Google",
    role: "Frontend Developer Intern",
    location: "Remote",
    status: "Applied",
    appliedDate: "2026-05-01",
    notes: "Applied through careers page",
  },
  {
    id: "2",
    company: "Microsoft",
    role: "React Developer Intern",
    location: "Bengaluru",
    status: "Interview",
    appliedDate: "2026-05-03",
    notes: "Technical interview scheduled",
  },
  {
    id: "3",
    company: "Zomato",
    role: "Web Developer",
    location: "Gurugram",
    status: "Offer",
    appliedDate: "2026-04-28",
    notes: "Received offer email",
  },
];