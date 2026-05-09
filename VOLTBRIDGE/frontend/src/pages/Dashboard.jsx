//VOLTBRIDGE/frontend/src/pages/Dashboard.jsx

import PowerFlowCard from '../components/PowerFlowCard';
import SavingsCard from '../components/SavingsCard';
export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>⚡ VoltBridge</h1>
        <span>Demo Client</span>
      </header>
      <div className="dash-grid">
        <PowerFlowCard />
        <SavingsCard />
      </div>
    </div>
  );
}