//VOLTBRIDGE/frontend/src/components/AutomationsList.jsx

function AutomationsList({ automations }) {
  return (
    <div className="card">
      <h2>Automations</h2>

      {automations.map((automation) => (
        <div className="status-item" key={automation.id}>
          <span>{automation.name}</span>
          <span>{automation.status}</span>
        </div>
      ))}
    </div>
  )
}

export default AutomationsList