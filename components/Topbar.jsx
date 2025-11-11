import AuthButton from './AuthButton';
// in Topbar JSX: <AuthButton />

export default function Topbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    // read saved preference or system
    const saved = localStorage.getItem('pb-theme');
    if (saved) setTheme(saved);
    else {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    localStorage.setItem('pb-theme', theme);
  }, [theme]);

  return (
    <header className="topbar bg-white dark:bg-[#071127] border-b dark:border-b-neutral-900">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold">🧠 PowerBrain Workspace</h3>
        <div className="flex items-center space-x-3">
          <button className="px-3 py-1 border rounded text-sm">Notifications</button>
          <button className="px-3 py-1 border rounded text-sm">Profile</button>

          <button
            onClick={() => setTheme(prev => prev === 'dark' ? 'light' : 'dark')}
            className="ml-2 px-3 py-1 border rounded text-sm"
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </header>
  );
}

