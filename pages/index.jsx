export default function Home() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      fontFamily: 'sans-serif'
    }}>
      <h1>🚀 Welcome to PowerBrain MVP</h1>
      <p>Your AI-driven business growth system is live.</p>
      <div style={{ marginTop: '20px' }}>
        <a href="/hce" style={{ marginRight: '15px', color: '#0070f3' }}>Go to HCE Module</a>
        <a href="/admin" style={{ color: '#0070f3' }}>Go to Admin Dashboard</a>
      </div>
    </div>
  );
}
