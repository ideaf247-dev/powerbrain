import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function DashboardWidgets(){
  // mock realtime data generator
  const [stats, setStats] = useState({
    activeUsers: 1245,
    tasksToday: 412,
    uptime: 99.98,
    ideas: 73,
  });

  const [chartData, setChartData] = useState([
    { time: '1h', value: 10 },
    { time: '2h', value: 25 },
    { time: '3h', value: 40 },
    { time: '4h', value: 30 },
    { time: '5h', value: 55 },
  ]);

  useEffect(()=> {
    const id = setInterval(()=> {
      // simple mock update
      setStats(prev => ({
        ...prev,
        activeUsers: prev.activeUsers + (Math.random() > .7 ? 5 : -2),
        ideas: prev.ideas + (Math.random() > .8 ? 1 : 0)
      }));
      // append chart datapoint
      setChartData(prev => {
        const next = [...prev.slice(-9)];
        next.push({ time: `${prev.length+1}h`, value: Math.max(0, Math.round((prev[prev.length-1]?.value||20) + (Math.random()*20 - 8))) });
        return next;
      });
    }, 3500);
    return ()=> clearInterval(id);
  }, []);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="card">
          <h4 className="font-semibold">Active Users</h4>
          <div className="text-2xl font-bold mt-2">{stats.activeUsers.toLocaleString()}</div>
          <div className="text-xs mt-1 text-gray-500">Online now</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">AI Tasks Completed</h4>
          <div className="text-2xl font-bold mt-2">{stats.tasksToday}</div>
          <div className="text-xs mt-1 text-gray-500">Today</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Module Uptime</h4>
          <div className="text-2xl font-bold mt-2">{stats.uptime}%</div>
          <div className="text-xs mt-1 text-gray-500">Last 30 days</div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Ideas Generated</h4>
          <div className="text-2xl font-bold mt-2">{stats.ideas}</div>
          <div className="text-xs mt-1 text-gray-500">This session</div>
        </div>
      </div>

      <div className="card mt-6">
        <h4 className="font-semibold mb-4">Activity (last points)</h4>
        <div style={{ height: 200 }}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="time" tick={{ fontSize: 12 }} />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="value" stroke="#6366f1" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
}
