//VOLTBIDGE/frontend/src/components/GasUsageCard.jsx


function GasUsageCard({ gas }) {
  return (
    <div className="card">
      <h2>Gas Usage</h2>

      <p>Daily Usage: {gas.dailyUsage} m³</p>
      <p>Estimated Cost: €{gas.estimatedCost}</p>
    </div>
  )
}

export default GasUsageCard