import Link from 'next/link';
import { Brain, BarChart3, Zap, Settings } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="bg-gray-900 text-white w-64 min-h-screen p-6 flex flex-col space-y-6">
      <div className="flex items-center space-x-3 mb-6">
        <Brain className="text-purple-400" />
        <h2 className="text-xl font-bold tracking-wide">PowerBrain</h2>
      </div>

      <nav className="flex flex-col space-y-4">
        <Link href="/dashboard" className="hover:text-purple-400 flex items-center space-x-2">
          <BarChart3 size={18} /> <span>Dashboard</span>
        </Link>
        <Link href="/hce" className="hover:text-purple-400 flex items-center space-x-2">
          <Zap size={18} /> <span>HCE Module</span>
        </Link>
        <Link href="/" className="hover:text-purple-400 flex items-center space-x-2">
          <Settings size={18} /> <span>System Home</span>
        </Link>
      </nav>

      <div className="mt-auto text-xs text-gray-500">
        v1.0 – Powered by IdeaForge ⚡
      </div>
    </aside>
  );
}
