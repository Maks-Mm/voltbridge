//VOLTBRIDGE/frontend/src/components/SavingsCard.jsx

function SavingsCard({ savings }) {
  return (
    <div className="card">
      <h2>Savings</h2>

      <p>Today: €{savings.today}</p>
      <p>Month: €{savings.month}</p>
      <p>Year: €{savings.year}</p>
      <p>CO₂ Saved: {savings.co2Saved} kg</p>
    </div>
  )
}

export default SavingsCard