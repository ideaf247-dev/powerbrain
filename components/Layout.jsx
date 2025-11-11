import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Link from "next/link";

export default function Layout({ children }) {
  return (
    <div>
      <nav className="p-4 bg-gray-900 text-white flex justify-between">
        <div className="font-bold">🧠 PowerBrain</div>
        <div className="space-x-4">
          <Link href="/">Home</Link>
          <Link href="/hce">HCE</Link>
          <Link href="/dashboard">Dashboard</Link>
        </div>
      </nav>
      <main className="p-6">{children}</main>
    </div>
  );
}


