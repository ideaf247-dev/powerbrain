export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      background: '#000',
      color: '#00ffcc',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      padding: '2rem'
    }}>
      <h1>🧠 PowerBrain MVP</h1>
      <p>Welcome to the live version of your AI-powered business system.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/admin" style={{ color: '#00ffcc', marginRight: '20px' }}>Admin Dashboard</a>
        <a href="/hce" style={{ color: '#00ffcc' }}>HCE Module</a>
      </div>
    </div>
  );
}

