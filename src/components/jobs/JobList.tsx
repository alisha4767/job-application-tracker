import type { JobApplication } from "../../types/job";
import { EmptyState } from "../common/EmptyState";
import { JobCard } from "./JobCard";

interface JobListProps {
  jobs: JobApplication[];
  onDeleteJob: (id: string) => void;
}

export function JobList({ jobs, onDeleteJob }: JobListProps) {
  if (jobs.length === 0) {
    return <EmptyState message="Try adding a new job or changing your filters." />;
  }

  return (
    <div className="job-list">
      {jobs.map((job) => (
        <JobCard key={job.id} job={job} onDelete={onDeleteJob} />
      ))}
    </div>
  );
}