import "../styles/Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard">
      <h2>My Study Tracker</h2>
      <button>Add Study Session</button>
      <div className="sessions-list">
        <p>No study sessions yet.</p>
      </div>
    </div>
  );
}

export default Dashboard;
