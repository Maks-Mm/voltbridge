//VOLTBRIDGE/frontend/src/components/WeatherCard.jsx

function WeatherCard({ environment }) {
  return (
    <div className="card">
      <h2>Environment</h2>

      <p>Outside Temp: {environment.outsideTemperature}°C</p>
      <p>Solar Forecast: {environment.solarForecast}</p>
      <p>Electricity Price: €{environment.electricityPrice}/kWh</p>
    </div>
  )
}

export default WeatherCard