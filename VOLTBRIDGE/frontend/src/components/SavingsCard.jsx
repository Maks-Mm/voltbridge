//VOLTBRIDGE/frontend/src/components/SavingsCard.jsx

 import { useEffect, useState } from 'react';
import { getSavings } from '../api/client';
export default function SavingsCard() {
  const [data, setData] = useState(null);
  useEffect(() => { getSavings(30).then(r => setData(r.data.data)); }, []);
  if (!data) return <div className="card">Loading...</div>;
  return (
    <div className="card savings">
      <h2>This Month</h2>
      <div className="savings-big">€{data.saved_euros.toFixed(2)}</div>
      <p className="savings-sub">saved on electricity</p>
      <div className="savings-details">
        <div><strong>{data.kwh_self_consumed} kWh</strong> self-consumed</div>
        <div><strong>{data.co2_kg_saved} kg</strong> CO₂ avoided</div>
      </div>
    </div>
  );
}