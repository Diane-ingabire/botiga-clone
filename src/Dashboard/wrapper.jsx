import React, { useState, useEffect } from "react";
import DashboardNavbar from "./DashboardNavbar";
import Sidebar from "./Sidebar"; 
// import "./dashboard_styles/DashboardNavbar.css"; 
// import "./dashboard_styles/DashboardSidebar.css";

const wrapper = ({ children }) => {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem("theme") === "dark";
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  return (
    <div className={`app-container ${isDark ? "dark-mode" : ""}`}>
      <DashboardNavbar toggleTheme={toggleTheme} isDark={isDark} />
      <Sidebar />
      <main className="content">{children}</main>
    </div>
  );
};

export default wrapper;
