import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="flex justify-between items-center bg-gray-900 text-white px-6 py-3 shadow-md">
      <h1 className="text-lg font-bold text-purple-400 tracking-wide">🚀 PowerBrain OS</h1>
      <nav className="flex space-x-6">
        <Link href="/" className="hover:text-purple-400 transition">Home</Link>
        <Link href="/hce" className="hover:text-purple-400 transition">HCE</Link>
        <Link href="/dashboard" className="hover:text-purple-400 transition">Dashboard</Link>
      </nav>
    </header>
  );
}
