//VOLTBRIDGE/backend/src/services/mock.js


function getLiveEnergy() {
  const pv = Math.floor(Math.random() * 4000) + 500;
  const house = Math.floor(Math.random() * 2000) + 800;
  const battery = Math.floor(Math.random() * 100);
  const grid = house - pv > 0 ? house - pv : 0;
  const export_w = pv - house > 0 ? pv - house : 0;
  return {
    pv_watts: pv,
    house_watts: house,
    grid_import_watts: grid,
    grid_export_watts: export_w,
    battery_percent: battery,
    timestamp: new Date().toISOString()
  };
}

function getSavings(days = 30) {
  const saved = (Math.random() * 80 + 20).toFixed(2);
  const kwh = Math.floor(Math.random() * 200 + 100);
  return {
    period_days: days,
    saved_euros: parseFloat(saved),
    kwh_self_consumed: kwh,
    co2_kg_saved: (kwh * 0.4).toFixed(1)
  };
}

function getHistory(hours = 24) {
  const points = [];
  const now = Date.now();
  for (let i = hours; i >= 0; i--) {
    const hour = new Date(now - i * 3600000);
    const isDay = hour.getHours() >= 7 && hour.getHours() <= 19;
    points.push({
      time: hour.toISOString(),
      pv_watts: isDay ? Math.floor(Math.random() * 3500 + 200) : 0,
      house_watts: Math.floor(Math.random() * 1500 + 600),
    });
  }
  return points;
}

module.exports = { getLiveEnergy, getSavings, getHistory };