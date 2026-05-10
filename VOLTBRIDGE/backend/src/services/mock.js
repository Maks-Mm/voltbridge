//VOLTBRIDGE/backend/src/services/mock.js


export const getLiveEnergyData = () => {
  return {
    solar: 7.4,
    battery: 82,
    homeUsage: 4.1,
    gridExport: 3.3,
    updatedAt: new Date()
  }
}

export const getSavingsData = () => {
  return {
    today: 12.45,
    month: 276.12,
    year: 3244.88,
    co2Saved: 842
  }
}

export const getAutomations = () => {
  return [
    {
      id: 1,
      name: 'Battery Night Charge',
      status: 'Active'
    },
    {
      id: 2,
      name: 'Peak Hour Grid Export',
      status: 'Running'
    },
    {
      id: 3,
      name: 'EV Smart Charging',
      status: 'Scheduled'
    }
  ]
}