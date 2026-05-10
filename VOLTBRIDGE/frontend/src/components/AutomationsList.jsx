// Static for now — will connect to Home Assistant automations API later

const AUTOMATIONS = [
  { id: 1, name: 'Charge EV when PV surplus > 2kW',  active: true,  lastRun: '10 min ago' },
  { id: 2, name: 'Heat pump on cheap grid tariff',    active: true,  lastRun: '2 hrs ago'  },
  { id: 3, name: 'Close blinds when sun > 600W/m²',  active: false, lastRun: 'Never'       },
  { id: 4, name: 'Night mode: reduce heating 18°C',  active: true,  lastRun: '8 hrs ago'   },
];

export default function AutomationsList() {
  return (
    <div className="card dash-grid-wide">
      <h2>Active Automations</h2>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
        {AUTOMATIONS.map(a => (
          <div key={a.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0.75rem 1rem', background: '#f8fafc', borderRadius: '8px' }}>
            <div>
              <div style={{ fontWeight: 500, fontSize: '0.9rem' }}>{a.name}</div>
              <div style={{ fontSize: '0.72rem', color: '#94a3b8', marginTop: '2px' }}>Last run: {a.lastRun}</div>
            </div>
            <span className={`badge ${a.active ? 'badge-green' : 'badge-gray'}`}>
              {a.active ? 'Active' : 'Off'}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}