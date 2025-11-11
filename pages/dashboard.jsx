export default function Dashboard() {
  return (
    <div className="max-w-6xl mx-auto mt-16 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">📊 PowerBrain Dashboard</h1>
      <p className="text-gray-600 mb-12">
        Your central control system — track modules, monitor insights, and access AI tools.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg">⚙️ HCE Module</h2>
          <p className="text-gray-500 text-sm mt-2">Analyze and control emotional cores.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg">🧩 Creative Core</h2>
          <p className="text-gray-500 text-sm mt-2">Design systems, ideas, and visuals.</p>
        </div>
        <div className="bg-white rounded-2xl shadow p-6">
          <h2 className="font-semibold text-lg">📈 Analytical Core</h2>
          <p className="text-gray-500 text-sm mt-2">Track, forecast, and optimize results.</p>
        </div>
      </div>
    </div>
  );
}
