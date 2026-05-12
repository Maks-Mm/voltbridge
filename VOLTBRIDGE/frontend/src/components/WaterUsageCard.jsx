//VOLTBRINGE/frontend/src/components/WaterUsageCard.jsx

function WaterUsageCard({ water }) {
  return (
    <div className="card">
      <h2>Water Usage</h2>

      <p>Cold Water: {water.coldWaterUsage} L</p>
      <p>Hot Water: {water.hotWaterUsage} L</p>
      <p>
        Leak Detection:
        {water.leakDetected ? ' ALERT' : ' Normal'}
      </p>
    </div>
  )
}

export default WaterUsageCard