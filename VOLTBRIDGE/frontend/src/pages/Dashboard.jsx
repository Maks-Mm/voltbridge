//VOLTBRIDGE/frontend/src/pages/Dashboard.jsx

import { useEffect, useState } from 'react'

import api from '../api/client'

import PowerFlowCard from '../components/PowerFlowCard'
import SavingsCard from '../components/SavingsCard'
import EnergyChart from '../components/EnergyChart'
import AutomationsList from '../components/AutomationsList'

function Dashboard() {
  const [energy, setEnergy] = useState(null)
  const [savings, setSavings] = useState(null)
  const [automations, setAutomations] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const energyRes = await api.get('/energy/live')
      const savingsRes = await api.get('/savings')
      const automationRes = await api.get('/energy/automations')

      setEnergy(energyRes.data)
      setSavings(savingsRes.data)
      setAutomations(automationRes.data)
    }

    fetchData()

    const interval = setInterval(fetchData, 5000)

    return () => clearInterval(interval)
  }, [])

  if (!energy || !savings) {
    return <div className="dashboard">Loading...</div>
  }

  return (
    <div className="dashboard">
      <h1 className="dashboard-title">VoltBridge Energy Dashboard</h1>

      <div className="grid">
        <PowerFlowCard title="Solar Production" value={`${energy.solar} kW`} />

        <PowerFlowCard title="Battery Level" value={`${energy.battery}%`} />

        <PowerFlowCard title="Home Usage" value={`${energy.homeUsage} kW`} />

        <PowerFlowCard title="Grid Export" value={`${energy.gridExport} kW`} />

        <SavingsCard savings={savings} />

        <AutomationsList automations={automations} />
      </div>

      <div className="chart-wrapper">
        <EnergyChart />
      </div>
    </div>
  )
}

export default Dashboard