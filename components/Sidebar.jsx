import Link from 'next/link';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <h2 className="brand">⚡ PowerBrain</h2>
      <nav>
        <ul>
          <li><Link href="/">🏠 Home</Link></li>
          <li><Link href="/hce">🧩 HCE Module</Link></li>
          <li><Link href="/dashboard">📊 Dashboard</Link></li>
        </ul>
      </nav>
    </aside>
  );
}
