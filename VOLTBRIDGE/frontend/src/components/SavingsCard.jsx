import { useEffect, useState } from 'react';
import { getSavings } from '../api/client';

export default function SavingsCard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getSavings(30).then(r => setData(r.data.data)).catch(console.error);
  }, []);

  if (!data) return (
    <div className="card savings">
      <h2>This Month</h2>
      <p style={{ color: '#94a3b8' }}>Loading...</p>
    </div>
  );

  return (
    <div className="card savings">
      <h2>This Month</h2>
      <div className="savings-big">
        <span className="savings-currency">€</span>
        {data.saved_euros.toFixed(2)}
      </div>
      <p className="savings-sub">saved on electricity</p>
      <div className="savings-row">
        <div>
          <strong>{data.kwh_self_consumed} kWh</strong>
          <span>self-consumed</span>
        </div>
        <div>
          <strong>{data.co2_kg_saved} kg</strong>
          <span>CO₂ avoided</span>
        </div>
        <div>
          <strong>{data.period_days} days</strong>
          <span>tracked</span>
        </div>
      </div>
    </div>
  );
}