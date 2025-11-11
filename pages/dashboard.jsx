import DashboardWidgets from '../components/DashboardWidgets';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-blue-800 mb-6">PowerBrain Dashboard</h1>
      <DashboardWidgets />
    </div>
  );
}

