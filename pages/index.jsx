export default function Home() {
  return (
    <div style={{ 
      display: "flex", 
      flexDirection: "column", 
      alignItems: "center", 
      justifyContent: "center", 
      height: "100vh", 
      fontFamily: "sans-serif" 
    }}>
      <h1>🚀 Welcome to PowerBrain</h1>
      <p>Your AI-powered system is live.</p>
      <a 
        href="/hce" 
        style={{ color: "#0070f3", textDecoration: "underline", marginTop: "10px" }}
      >
        Go to HCE Dashboard
      </a>
    </div>
  );
}
