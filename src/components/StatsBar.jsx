import "./StatsBar.css";

export default function StatsBar({ stats }) {
  if (!stats) return null;

  return (
    <div className="stats-bar">
      {Object.entries(stats).map(([stat, value]) => (
        <div key={stat} className="stat">
          <span className="stat-label">{stat.toUpperCase()}</span>

          <div className="stat-track">
            <div
              className="stat-fill"
              style={{ width: `${Math.min(value, 100)}%` }}
            />
          </div>

          <span className="stat-value">{value}</span>
        </div>
      ))}
    </div>
  );
}
