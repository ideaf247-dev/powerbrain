export default function DashboardWidgets() {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <h4>Active Users</h4>
        <p>1,245 Online</p>
      </div>
      <div className="card">
        <h4>AI Tasks Completed</h4>
        <p>412 Today</p>
      </div>
      <div className="card">
        <h4>Module Uptime</h4>
        <p>99.98%</p>
      </div>
      <div className="card">
        <h4>Ideas Generated</h4>
        <p>73 New Concepts</p>
      </div>
    </div>
  );
}

