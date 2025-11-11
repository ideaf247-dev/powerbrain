export default function DashboardWidgets() {
  const modules = [
    { title: "⚙️ HCE Module", desc: "Human Cognitive Engine" },
    { title: "🧩 Creative Core", desc: "Design and concept generation" },
    { title: "📈 Analytical Core", desc: "Data, logic, and performance" },
    { title: "💬 Emotional Core", desc: "Sentiment and feedback engine" },
    { title: "🧠 Neural Sync", desc: "Cross-system brain sync control" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {modules.map((mod, i) => (
        <div key={i} className="bg-white rounded-2xl shadow-md hover:shadow-lg transition-all p-6">
          <h3 className="font-bold text-xl text-gray-800 mb-2">{mod.title}</h3>
          <p className="text-gray-500">{mod.desc}</p>
        </div>
      ))}
    </div>
  );
}
