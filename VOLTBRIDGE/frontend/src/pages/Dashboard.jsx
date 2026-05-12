//VOLTBRIDGE/frontend/src/pages/Dashboard.jsx

import { useEffect, useState } from 'react'

import api from '../api/client'

import PowerFlowCard from '../components/PowerFlowCard'
import SavingsCard from '../components/SavingsCard'
import EnergyChart from '../components/EnergyChart'
import AutomationsList from '../components/AutomationsList'
import GasUsageCard from '../components/GasUsageCard'
import WaterUsageCard from '../components/WaterUsageCard'
import HeatPumpCard from '../components/HeatPumpCard'
import EVChargerCard from '../components/EVChargerCard'
import WeatherCard from '../components/WeatherCard'

function Dashboard() {
  const [dashboard, setDashboard] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      const energyRes = await api.get('/energy/live')
      const savingsRes = await api.get('/savings')
      const automationRes = await api.get('/energy/automations')

      setDashboard({
        electricity: energyRes.data,
        savings: savingsRes.data,
        automations: automationRes.data,

        gas: {
          dailyUsage: 5.2,
          estimatedCost: 8.7
        },

        water: {
          coldWaterUsage: 122,
          hotWaterUsage: 74,
          leakDetected: false
        },

        heating: {
          heatPumpPower: 2.8,
          indoorTemperature: 22.4,
          bufferTankTemperature: 48
        },

        ev: {
          connected: true,
          charging: true,
          chargingPower: 5.6,
          batteryLevel: 64
        },

        environment: {
          outsideTemperature: 17,
          solarForecast: 'High',
          electricityPrice: 0.29
        }
      })
    }

    fetchData()

    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!dashboard) {
    return <div className="dashboard">Loading...</div>
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">
        VoltBridge Energy Dashboard
      </h1>

      <div className="grid">
        <PowerFlowCard
          title="Solar Production"
          value={`${dashboard.electricity.solar} kW`}
        />

        <PowerFlowCard
          title="Battery Level"
          value={`${dashboard.electricity.battery}%`}
        />

        <PowerFlowCard
          title="Home Usage"
          value={`${dashboard.electricity.homeUsage} kW`}
        />

        <PowerFlowCard
          title="Grid Export"
          value={`${dashboard.electricity.gridExport} kW`}
        />

        <SavingsCard savings={dashboard.savings} />

        <GasUsageCard gas={dashboard.gas} />

        <WaterUsageCard water={dashboard.water} />

        <HeatPumpCard heating={dashboard.heating} />

        <EVChargerCard ev={dashboard.ev} />

        <WeatherCard environment={dashboard.environment} />

        <AutomationsList automations={dashboard.automations} />
      </div>

      <div className="chart-wrapper">
        <EnergyChart />
      </div>
    </div>
  )
}

export default Dashboard