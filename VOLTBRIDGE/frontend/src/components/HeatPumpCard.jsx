//VOLTBRIDGE/frontend/src/components/HeatPumpCard.jsx

function HeatPumpCard({ heating }) {
  return (
    <div className="card">
      <h2>Heat Pump</h2>

      <p>Power: {heating.heatPumpPower} kW</p>
      <p>Indoor Temp: {heating.indoorTemperature}°C</p>
      <p>Buffer Tank: {heating.bufferTankTemperature}°C</p>
    </div>
  )
}

export default HeatPumpCard