import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-4 bg-gray-900 text-white shadow-lg">
      <div className="text-xl font-bold tracking-wide text-purple-400">
        🚀 PowerBrain
      </div>
      <div className="flex space-x-6">
        <Link href="/" className="hover:text-purple-400 transition">Home</Link>
        <Link href="/hce" className="hover:text-purple-400 transition">HCE</Link>
        <Link href="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
      </div>
    </nav>
  );
}
