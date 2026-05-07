import type { JobApplication } from "../../types/job";
import { formatDate } from "../../utils/date";

interface JobCardProps {
  job: JobApplication;
  onDelete: (id: string) => void;
}

export function JobCard({ job, onDelete }: JobCardProps) {
  return (
    <article className="job-card">
      <div className="job-card-header">
        <div>
          <h3>{job.role}</h3>
          <p>{job.company}</p>
        </div>

        <span className={`status ${job.status.toLowerCase()}`}>
          {job.status}
        </span>
      </div>

      <div className="job-meta">
        <span>📍 {job.location}</span>
        <span>📅 {formatDate(job.appliedDate)}</span>
      </div>

      {job.notes && <p className="job-notes">{job.notes}</p>}

      <button className="delete-btn" onClick={() => onDelete(job.id)}>
        Delete
      </button>
    </article>
  );
}