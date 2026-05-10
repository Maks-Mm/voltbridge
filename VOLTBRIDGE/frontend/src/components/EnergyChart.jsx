import { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { getHistory } from '../api/client';

export default function EnergyChart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getHistory(24).then(r => {
      const formatted = r.data.data.map(p => ({
        time:  new Date(p.time).getHours() + ':00',
        Solar: Math.round(p.pv_watts / 100) / 10,
        House: Math.round(p.house_watts / 100) / 10
      }));
      setData(formatted);
    }).catch(console.error);
  }, []);

  return (
    <div className="card dash-grid-wide">
      <h2>24h Energy Overview (kW)</h2>
      <div className="chart-wrap">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="time" tick={{ fontSize: 11 }} interval={3} />
            <YAxis tick={{ fontSize: 11 }} />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Solar" stroke="#f59e0b" dot={false} strokeWidth={2} />
            <Line type="monotone" dataKey="House" stroke="#3b82f6" dot={false} strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}