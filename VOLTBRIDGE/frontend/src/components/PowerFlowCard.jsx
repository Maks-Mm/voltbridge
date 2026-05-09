//VOLTBRIDGE/frontend/src/components/PowerFlowCard.jsx


import { useEffect, useState } from 'react';
import { getLiveEnergy } from '../api/client';
export default function PowerFlowCard() {
  const [data, setData] = useState(null);
  useEffect(() => {
    const fetch = () => getLiveEnergy().then(r => setData(r.data.data)).catch(console.error);
    fetch();
    const id = setInterval(fetch, 5000);
    return () => clearInterval(id);
  }, []);
  if (!data) return <div className="card">Loading...</div>;
  return (
    <div className="card">
      <h2>Live Power Flow</h2>
      <div className="flow-grid">
        <div className="flow-item"><span className="icon">☀️</span><span className="label">Solar</span><span className="value">{(data.pv_watts/1000).toFixed(2)} kW</span></div>
        <div className="flow-item"><span className="icon">🏠</span><span className="label">House</span><span className="value">{(data.house_watts/1000).toFixed(2)} kW</span></div>
        <div className="flow-item"><span className="icon">⚡</span><span className="label">Grid export</span><span className="value">{(data.grid_export_watts/1000).toFixed(2)} kW</span></div>
        <div className="flow-item"><span className="icon">🔋</span><span className="label">Battery</span><span className="value">{data.battery_percent}%</span></div>
      </div>
    </div>
  );
}