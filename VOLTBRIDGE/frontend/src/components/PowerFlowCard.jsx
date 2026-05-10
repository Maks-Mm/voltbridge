//VOLTBRIDGE/frontend/src/components/PowerFlowCard.jsx

function PowerFlowCard({ title, value }) {
  return (
    <div className="card">
      <h2>{title}</h2>
      <div className="energy-value">{value}</div>
    </div>
  )
}

export default PowerFlowCard