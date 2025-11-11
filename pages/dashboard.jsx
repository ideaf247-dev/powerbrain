import DashboardWidgets from '@/components/DashboardWidgets';

export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">📊 PowerBrain Dashboard</h1>
      <p className="text-gray-600 mb-10">
        Welcome to your PowerBrain control center. Choose a core to analyze, create, or monitor progress.
      </p>
      <DashboardWidgets />
    </div>
  );
}
