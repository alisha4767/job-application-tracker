interface StatCardProps {
  title: string;
  value: number;
  icon: string;
}

export function StatCard({ title, value, icon }: StatCardProps) {
  return (
    <div className="stat-card">
      <div>
        <p>{title}</p>
        <h2>{value}</h2>
      </div>

      <span>{icon}</span>
    </div>
  );
}