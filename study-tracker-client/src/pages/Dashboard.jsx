import { useState } from "react";
import {
  Search,
  Plus,
  ChevronLeft,
  ChevronRight,
  Calendar,
  TrendingUp,
  TrendingDown,
} from "lucide-react";

const Dashboard = () => {
  const [currentDate] = useState("June 20, 2021");

  const participants = [
    { id: 1, color: "#FF6B6B", initials: "JD" },
    { id: 2, color: "#4ECDC4", initials: "SM" },
    { id: 3, color: "#FFD93D", initials: "LN" },
    { id: 4, color: "#95E1D3", initials: "MK" },
    { id: 5, color: "#F38181", initials: "AB" },
    { id: 6, color: "#AA96DA", initials: "TC" },
  ];

  const columns = [
    {
      id: "todo",
      title: "To do",
      color: "#FFF4E6",
      tasks: [
        {
          id: 1,
          title: "Restaurant Case",
          tag: "Behance",
          tagColor: "#6C5CE7",
          date: "",
          assignees: [1],
        },
        {
          id: 2,
          title: "Banking App Mobile",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "June 18, 2021",
          assignees: [2],
        },
        {
          id: 3,
          title: "Banking Landing",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "June 18, 2021",
          assignees: [3, 4],
        },
      ],
    },
    {
      id: "progress",
      title: "In progress",
      color: "#EDE7F6",
      tasks: [
        {
          id: 4,
          title: "Health Care Biol",
          tag: "Dribble",
          tagColor: "#E91E63",
          date: "June 18, 2021",
          assignees: [5],
        },
        {
          id: 5,
          title: "Mercedes Case",
          tag: "Behance",
          tagColor: "#6C5CE7",
          date: "June 18, 2021",
          assignees: [1, 2],
        },
        {
          id: 6,
          title: "Furniture Store",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "June 17, 2021",
          assignees: [3],
        },
        {
          id: 7,
          title: "UI Graphic Tips #6",
          tag: "Dribble",
          tagColor: "#E91E63",
          date: "June 18, 2021",
          assignees: [4],
        },
      ],
    },
    {
      id: "approval",
      title: "On approval",
      color: "#E8F5E9",
      tasks: [
        {
          id: 8,
          title: "Porsche Case",
          tag: "Behance",
          tagColor: "#6C5CE7",
          date: "June 18, 2021",
          assignees: [5, 6],
        },
        {
          id: 9,
          title: "Coothing Store",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "June 18, 2021",
          assignees: [1, 2],
        },
      ],
    },
    {
      id: "done",
      title: "Done",
      color: "#FCE4EC",
      tasks: [
        {
          id: 10,
          title: "Logobalie #2",
          tag: "Behance",
          tagColor: "#6C5CE7",
          date: "June 3, 2021",
          assignees: [3],
        },
        {
          id: 11,
          title: "Barber Landing",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "June 3, 2021",
          assignees: [4],
        },
        {
          id: 12,
          title: "Web App",
          tag: "Comments",
          tagColor: "#A8A8A8",
          date: "May 28, 2021",
          assignees: [5, 6],
        },
        {
          id: 13,
          title: "UI Graphic Tips #5",
          tag: "Behance",
          tagColor: "#6C5CE7",
          date: "May 28, 2021",
          assignees: [1, 2],
        },
      ],
    },
  ];

  return (
    <div className="dashboard">
      <aside className="sidebar">
        <div className="logo">
          <div className="logo-icon">⚡</div>
          <span className="time">3:20:00</span>
        </div>

        <nav className="nav-menu">
          <div className="nav-item">
            <span className="nav-icon">📋</span>
            <span>Task tracker</span>
            <span className="nav-badge">+</span>
          </div>
          <div className="nav-item active">
            <span className="nav-icon">📊</span>
            <span>Boards</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📁</span>
            <span>Projects</span>
            <span className="nav-badge">+</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">📈</span>
            <span>Analytics</span>
          </div>
          <div className="nav-item">
            <span className="nav-icon">⚙️</span>
            <span>Settings</span>
          </div>
        </nav>

        <div className="user-profile">
          <img
            src="https://i.pravatar.cc/150?img=5"
            alt="User"
            className="user-avatar"
          />
          <span className="user-name">Lukas Nigma</span>
        </div>
      </aside>

      <main className="main-content">
        <header className="header">
          <div className="header-left">
            <button className="nav-btn">
              <ChevronLeft size={20} />
            </button>
            <h1 className="page-title">Design boards</h1>
            <span className="board-count">3</span>
          </div>

          <div className="header-center">
            <button className="nav-btn">
              <ChevronLeft size={16} />
            </button>
            <div className="date-picker">
              <Calendar size={16} />
              <span>{currentDate}</span>
            </div>
            <button className="nav-btn">
              <ChevronRight size={16} />
            </button>
          </div>

          <div className="header-right">
            <button className="icon-btn">
              <Search size={20} />
            </button>
            <button className="add-task-btn">
              <Plus size={16} />
              Add task
            </button>
          </div>
        </header>

        <div className="stats-bar">
          <div className="stat-card">
            <div className="stat-label">Participants</div>
            <div className="participants-avatars">
              {participants.map((p) => (
                <div
                  key={p.id}
                  className="participant-avatar"
                  style={{ backgroundColor: p.color }}
                >
                  {p.initials}
                </div>
              ))}
              <button className="add-participant">+</button>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Time</div>
            <div className="stat-value">
              <span className="time-value">1:40</span>
              <span className="time-unit">h / 12 h/day</span>
              <div className="trend-icon trend-up">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          <div className="stat-card">
            <div className="stat-label">Activity</div>
            <div className="stat-value">
              <span className="activity-value">5%</span>
              <span className="activity-unit">12 h/day</span>
              <div className="trend-icon trend-up">
                <TrendingUp size={20} />
              </div>
            </div>
          </div>

          <button className="nav-btn">
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="kanban-board">
          {columns.map((column) => (
            <div key={column.id} className="kanban-column">
              <div className="column-header">
                <h3>{column.title}</h3>
              </div>

              <div className="tasks-container">
                {column.tasks.map((task) => (
                  <div
                    key={task.id}
                    className="task-card"
                    style={{ backgroundColor: column.color }}
                  >
                    <h4 className="task-title">{task.title}</h4>
                    <span
                      className="task-tag"
                      style={{ backgroundColor: task.tagColor }}
                    >
                      {task.tag}
                    </span>
                    <div className="task-footer">
                      {task.date && (
                        <span className="task-date">{task.date}</span>
                      )}
                      <div className="task-assignees">
                        {task.assignees.map((assigneeId) => {
                          const participant = participants.find(
                            (p) => p.id === assigneeId
                          );
                          return (
                            <div
                              key={assigneeId}
                              className="task-avatar"
                              style={{ backgroundColor: participant.color }}
                            >
                              {participant.initials}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
