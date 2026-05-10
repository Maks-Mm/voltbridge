import { useEffect, useState } from 'react';
import { getLiveEnergy } from '../api/client';

export default function PowerFlowCard() {
  const [data, setData]   = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const load = () =>
      getLiveEnergy()
        .then(r => { setData(r.data.data); setError(false); })
        .catch(() => setError(true));

    load();
    const id = setInterval(load, 5000);
    return () => clearInterval(id);
  }, []);

  if (error) return (
    <div className="card">
      <h2>Live Power Flow</h2>
      <p style={{ color: '#ef4444', fontSize: '0.85rem' }}>
        ⚠️ Cannot reach backend — is it running on port 3001?
      </p>
    </div>
  );

  if (!data) return (
    <div className="card">
      <h2>Live Power Flow</h2>
      <p style={{ color: '#94a3b8' }}>Loading...</p>
    </div>
  );

  return (
    <div className="card">
      <h2>Live Power Flow</h2>
      <div className="flow-grid">
        <div className="flow-item solar">
          <span className="icon">☀️</span>
          <span className="label">Solar</span>
          <span className="value">{(data.pv_watts / 1000).toFixed(2)} kW</span>
        </div>
        <div className="flow-item house">
          <span className="icon">🏠</span>
          <span className="label">Consumption</span>
          <span className="value">{(data.house_watts / 1000).toFixed(2)} kW</span>
        </div>
        <div className="flow-item grid">
          <span className="icon">⚡</span>
          <span className="label">Grid import</span>
          <span className="value">{(data.grid_import_watts / 1000).toFixed(2)} kW</span>
        </div>
        <div className="flow-item battery">
          <span className="icon">🔋</span>
          <span className="label">Battery</span>
          <span className="value">{data.battery_percent}%</span>
        </div>
      </div>
      <p className="timestamp">Updated {new Date(data.timestamp).toLocaleTimeString()}</p>
    </div>
  );
}