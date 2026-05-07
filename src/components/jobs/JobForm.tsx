import { useState } from "react";
import type { JobApplication, JobStatus } from "../../types/job";

interface JobFormProps {
  onAddJob: (job: JobApplication) => void;
}

export function JobForm({ onAddJob }: JobFormProps) {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [status, setStatus] = useState<JobStatus>("Applied");
  const [notes, setNotes] = useState("");

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    if (!company || !role || !location) {
      alert("Please fill company, role, and location");
      return;
    }

    const newJob: JobApplication = {
      id: crypto.randomUUID(),
      company,
      role,
      location,
      status,
      notes,
      appliedDate: new Date().toISOString().split("T")[0],
    };

    onAddJob(newJob);

    setCompany("");
    setRole("");
    setLocation("");
    setStatus("Applied");
    setNotes("");
  }

  return (
    <form className="job-form" onSubmit={handleSubmit}>
      <h2>Add New Application</h2>

      <div className="form-grid">
        <input
          type="text"
          placeholder="Company name"
          value={company}
          onChange={(event) => setCompany(event.target.value)}
        />

        <input
          type="text"
          placeholder="Job role"
          value={role}
          onChange={(event) => setRole(event.target.value)}
        />

        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(event) => setLocation(event.target.value)}
        />

        <select
          value={status}
          onChange={(event) => setStatus(event.target.value as JobStatus)}
        >
          <option value="Applied">Applied</option>
          <option value="Interview">Interview</option>
          <option value="Offer">Offer</option>
          <option value="Rejected">Rejected</option>
        </select>
      </div>

      <textarea
        placeholder="Notes"
        value={notes}
        onChange={(event) => setNotes(event.target.value)}
      />

      <button type="submit">Add Application</button>
    </form>
  );
}