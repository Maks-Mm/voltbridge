// Future: list of all B2B clients with their energy stats
// Each client = separate Home Assistant instance or API key

export default function Clients() {
  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>⚡ Volt<span>Bridge</span> — Clients</h1>
      </header>
      <div className="card">
        <h2>Your Clients</h2>
        <p style={{ color: '#94a3b8' }}>No clients yet. Add your first client to get started.</p>
      </div>
    </div>
  );
}