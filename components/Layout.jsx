export default function Layout({ children }) {
  return (
    <div style={{ padding: '20px' }}>
      <nav>
        <a href="/">Home</a> | <a href="/hce">HCE</a> | <a href="/dashboard">Dashboard</a>
      </nav>
      <main>{children}</main>
    </div>
  );
}


