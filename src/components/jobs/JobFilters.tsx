import type { JobStatus } from "../../types/job";

interface JobFiltersProps {
  searchText: string;
  selectedStatus: "All" | JobStatus;
  onSearchChange: (value: string) => void;
  onStatusChange: (value: "All" | JobStatus) => void;
}

export function JobFilters({
  searchText,
  selectedStatus,
  onSearchChange,
  onStatusChange,
}: JobFiltersProps) {
  return (
    <div className="filters">
      <input
        type="text"
        placeholder="Search by company or role..."
        value={searchText}
        onChange={(event) => onSearchChange(event.target.value)}
      />

      <select
        value={selectedStatus}
        onChange={(event) =>
          onStatusChange(event.target.value as "All" | JobStatus)
        }
      >
        <option value="All">All Status</option>
        <option value="Applied">Applied</option>
        <option value="Interview">Interview</option>
        <option value="Offer">Offer</option>
        <option value="Rejected">Rejected</option>
      </select>
    </div>
  );
}