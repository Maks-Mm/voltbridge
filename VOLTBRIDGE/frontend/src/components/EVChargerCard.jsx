//VOLTBRIDGE/frontend/src/components/EVChargerCard.jsx

function EVChargerCard({ ev }) {
  return (
    <div className="card">
      <h2>EV Charger</h2>

      <p>Connected: {ev.connected ? 'Yes' : 'No'}</p>
      <p>Charging: {ev.charging ? 'Active' : 'Stopped'}</p>
      <p>Power: {ev.chargingPower} kW</p>
      <p>Battery: {ev.batteryLevel}%</p>
    </div>
  )
}

export default EVChargerCard