export default function Home() {
  return (
    <div style={{
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      background: '#000',
      color: '#00ffcc',
      fontFamily: 'Arial, sans-serif',
    }}>
      <h1>🧠 PowerBrain is Live</h1>
      <p>Welcome to your AI-driven business system MVP.</p>
      <a href="/admin" style={{
        marginTop: '20px',
        color: '#00ffcc',
        textDecoration: 'underline',
      }}>Go to Admin Dashboard</a>
    </div>
  );
}
