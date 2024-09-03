import Sidebar from "./Sidebar";
import DashboardContent from "./DashboardContent";

function Dashboard() {
  return (
    <>
      <div className="dashboard-container">
        <Sidebar />
        <DashboardContent />
      </div>
    </>
  );
}

export default Dashboard;
