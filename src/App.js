import React, { useState, useEffect } from "react";
import Navbar from "./components/Header/Navbar";
import SQLEditor from "./components/Editor/SQLEditor";
import HistoryList from "./components/History/HistoryList";
import FavoriteList from "./components/Favorite/FavoriteList";
import "./styles/App.css";
import QueryResults from "./components/Results/QueryResults";
import TablesData from "./components/Tables/tablesData";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating SQLEditor loading delay (3-4 seconds)
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 100); // Adjust based on actual delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <aside className="sidebar flex flex-col">
          <div><TablesData/></div>
          <div><FavoriteList/></div>
        </aside>

        <section className="editor-section">
          {isLoading ? (
            <div className="preloader">
              <div className="spinner"></div>
              <p>Loading SQL Editor...</p>
            </div>
          ) : (
            <SQLEditor />
          )}
          <div className="results-placeholder">
            <QueryResults />
          </div>
          <HistoryList />
        </section>
      </div>
    </div>
  );
};

export default App;
