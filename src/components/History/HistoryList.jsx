import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/editorSlice"; // Import action from editorSlice
import { addToHistory, clearHistory } from "../../store/historySlice"; // Import actions
import { addFavorite, removeFavorite } from "../../store/favoriteSlice"; // Import favorite actions
import "./HistoryList.css";

const HistoryList = () => {
  const history = useSelector((state) => state.history.history); // Get history from Redux
  const favorites = useSelector((state) => state.favorite.favorites); // Get favorites from Redux
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(setQuery(query)); // Set the clicked query in editorSlice
  };

  const handleDeleteQuery = (index) => {
    // Create a new array without the deleted item
    const newHistory = history.filter((_, i) => i !== index);
    dispatch(clearHistory()); // First, clear existing history
    newHistory.forEach((item) => dispatch(addToHistory(item))); // Then, add back remaining items
  };

  const handleFavoriteToggle = (query) => {
    if (favorites.includes(query)) {
      dispatch(removeFavorite(query));
    } else {
      dispatch(addFavorite(query));
    }
  };

  return (
    <div className="history-list">
      <h3>📜 Query History</h3>
      {history.length > 0 && (
        <button onClick={() => dispatch(clearHistory())} className="clear-btn">
          Delete All
        </button>
      )}
      <ul>
        {history.length > 0 ? (
          history.map((query, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <span onClick={() => handleHistoryClick(query)} style={{ cursor: "pointer", flexGrow: 1 }}>
                {query}
              </span>
              <button onClick={() => handleFavoriteToggle(query)} className="favorite-btn">
                {favorites.includes(query) ? "⭐" : "☆"}
              </button>
              <button onClick={() => handleDeleteQuery(index)} className="delete-btn">
                ❌
              </button>
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
