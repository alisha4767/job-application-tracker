import { useMemo, useState } from "react";
import { EmptyState } from "./components/common/EmptyState";
import { StatCard } from "./components/common/StatCard";
import { JobFilters } from "./components/jobs/JobFilters";
import { JobForm } from "./components/jobs/JobForm";
import { JobList } from "./components/jobs/JobList";
import { sampleJobs } from "./data/sampleJobs";
import { useLocalStorage } from "./hooks/useLocalStorage";
import type { JobApplication, JobStatus } from "./types/job";

function App() {
  const [jobs, setJobs] = useLocalStorage<JobApplication[]>(
    "job-applications",
    sampleJobs
  );

  const [searchText, setSearchText] = useState("");
  const [selectedStatus, setSelectedStatus] = useState<"All" | JobStatus>("All");

  function handleAddJob(job: JobApplication) {
    setJobs([job, ...jobs]);
  }

  function handleDeleteJob(id: string) {
    const updatedJobs = jobs.filter((job) => job.id !== id);
    setJobs(updatedJobs);
  }

  const filteredJobs = useMemo(() => {
    return jobs.filter((job) => {
      const searchValue = searchText.toLowerCase();

      const matchesSearch =
        job.company.toLowerCase().includes(searchValue) ||
        job.role.toLowerCase().includes(searchValue);

      const matchesStatus =
        selectedStatus === "All" || job.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [jobs, searchText, selectedStatus]);

  const totalApplications = jobs.length;
  const interviewCount = jobs.filter((job) => job.status === "Interview").length;
  const offerCount = jobs.filter((job) => job.status === "Offer").length;
  const rejectedCount = jobs.filter((job) => job.status === "Rejected").length;

  return (
    <main className="app">
      <section className="hero">
        <div>
          <p className="eyebrow">Career Dashboard</p>
          <h1>Job Application Tracker</h1>
          <p className="hero-text">
            Track your job applications, interviews, offers, and rejections in
            one clean dashboard.
          </p>
        </div>

        <div className="hero-card">
          <h3>{totalApplications}</h3>
          <p>Total Applications</p>
        </div>
      </section>

      <section className="stats-grid">
        <StatCard title="Applications" value={totalApplications} icon="📄" />
        <StatCard title="Interviews" value={interviewCount} icon="💬" />
        <StatCard title="Offers" value={offerCount} icon="🎉" />
        <StatCard title="Rejected" value={rejectedCount} icon="❌" />
      </section>

      <section className="content-grid">
        <JobForm onAddJob={handleAddJob} />

        <div className="jobs-section">
          <div className="section-header">
            <div>
              <h2>Applications</h2>
              <p>Manage and filter your job applications</p>
            </div>
          </div>

          <JobFilters
            searchText={searchText}
            selectedStatus={selectedStatus}
            onSearchChange={setSearchText}
            onStatusChange={setSelectedStatus}
          />

          {jobs.length === 0 ? (
            <EmptyState message="Start by adding your first job application." />
          ) : (
            <JobList jobs={filteredJobs} onDeleteJob={handleDeleteJob} />
          )}
        </div>
      </section>
    </main>
  );
}

export default App;