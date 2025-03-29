import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/editorSlice"; // Import action from editorSlice
import "./HistoryList.css";

const HistoryList = () => {
  const history = useSelector((state) => state.history.history); // Get history from Redux
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(setQuery(query)); // Set the clicked query in editorSlice
  };

  return (
    <div className="history-list">
      <h3>📜 Query History</h3>
      <ul>
        {history.length > 0 ? (
          history.map((query, index) => (
            <li key={index} onClick={() => handleHistoryClick(query)} style={{ cursor: "pointer" }}>
              {query}
            </li>
          ))
        ) : (
          <p>No queries yet.</p>
        )}
      </ul>
    </div>
  );
};

export default HistoryList;
