import React from "react";
import Navbar from "./components/Header/Navbar";
import SQLEditor from "./components/Editor/SQLEditor";
import HistoryList from "./components/History/HistoryList";
import "./styles/App.css";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <aside className="sidebar flex flex-col">
          <div>📌 Tables (Placeholder)</div>
          <div>⭐ Favorite</div>
        </aside>

        <section className="editor-section">
          <SQLEditor />
          <div className="results-placeholder">
            📊 Query Results (Placeholder)
          </div>
          <HistoryList />
        </section>
      </div>
    </div>
  );
};

export default App;
