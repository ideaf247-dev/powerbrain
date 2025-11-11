import { useState } from 'react';

const initial = [
  { id:1, title: 'Climate Horticulture', progress: 100 },
  { id:2, title: 'Solar Panel Install', progress: 75 },
  { id:3, title: 'Video Editing', progress: 30 },
];

export default function HCE(){
  const [skills, setSkills] = useState(initial);

  const boost = (id) => {
    setSkills(prev => prev.map(s => s.id===id ? {...s, progress: Math.min(100, s.progress + 10)} : s));
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">⚙️ Human Cognitive Engine (HCE)</h1>
      <div className="grid gap-4">
        {skills.map(s => (
          <div key={s.id} className="card flex items-center justify-between">
            <div>
              <div className="font-semibold">{s.title}</div>
              <div className="text-xs text-gray-500">Progress: {s.progress}%</div>
              <div className="w-full bg-gray-200 h-2 rounded mt-2">
                <div style={{ width: `${s.progress}%` }} className="h-2 bg-green-500 rounded"></div>
              </div>
            </div>
            <div>
              <button onClick={()=>boost(s.id)} className="px-3 py-1 bg-indigo-600 text-white rounded">Boost</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

