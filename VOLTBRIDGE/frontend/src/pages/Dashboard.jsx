import PowerFlowCard   from '../components/PowerFlowCard';
import SavingsCard     from '../components/SavingsCard';
import EnergyChart     from '../components/EnergyChart';
import AutomationsList from '../components/AutomationsList';

export default function Dashboard() {
  return (
    <div className="dashboard">
      <header className="dash-header">
        <h1>⚡ Volt<span>Bridge</span></h1>
        <span className="badge badge-green">● Live — Demo Client GmbH</span>
      </header>

      <div className="dash-grid">
        <PowerFlowCard />
        <SavingsCard />
        <EnergyChart />
        <AutomationsList />
      </div>
    </div>
  );
}