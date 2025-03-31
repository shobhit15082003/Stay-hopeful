import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setQuery } from "../../store/editorSlice"; 
import { addToHistory, clearHistory } from "../../store/historySlice";
import { addFavorite, removeFavorite } from "../../store/favoriteSlice"; 
import "./HistoryList.css";

const HistoryList = () => {
  const history = useSelector((state) => state.history.history); 
  const favorites = useSelector((state) => state.favorite.favorites); 
  const dispatch = useDispatch();

  const handleHistoryClick = (query) => {
    dispatch(setQuery(query)); // Set the clicked query in editorSlice
  };

  const handleDeleteQuery = (index) => {
    
    const newHistory = history.filter((_, i) => i !== index); // Create a new array without the deleted item
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
