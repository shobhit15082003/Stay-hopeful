import React from "react";
import Navbar from "./components/Header/Navbar";
import SQLEditor from "./components/Editor/SQLEditor";
import HistoryList from "./components/History/HistoryList";
import FavoriteList from "./components/Favorite/FavoriteList";
import "./styles/App.css";
import QueryResults from "./components/Results/QueryResults";
import TablesData from "./components/Tables/tablesData";

const App = () => {
  return (
    <div className="app-container">
      <Navbar />
      <div className="main-content">
        <aside className="sidebar flex flex-col">
          <div><TablesData/></div>
          <div><FavoriteList/></div>
        </aside>

        <section className="editor-section">
          <SQLEditor />
          <div className="results-placeholder">
            📊 <QueryResults/>
          </div>
          <HistoryList />
        </section>
      </div>
    </div>
  );
};

export default App;
