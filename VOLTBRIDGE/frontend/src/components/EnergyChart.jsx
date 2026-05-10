
//VOLTBRIDGE/frontend/src/components/EnergyChart.jsx

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid
} from 'recharts'

const data = [
  { time: '00:00', solar: 0, usage: 2 },
  { time: '04:00', solar: 0, usage: 1.5 },
  { time: '08:00', solar: 3, usage: 2.4 },
  { time: '12:00', solar: 7, usage: 4 },
  { time: '16:00', solar: 5, usage: 3 },
  { time: '20:00', solar: 1, usage: 4.4 }
]

function EnergyChart() {
  return (
    <div className="card">
      <h2>Energy Analytics</h2>

      <ResponsiveContainer width="100%" height={320}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />

          <Line type="monotone" dataKey="solar" stroke="#22c55e" />

          <Line type="monotone" dataKey="usage" stroke="#3b82f6" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}

export default EnergyChart