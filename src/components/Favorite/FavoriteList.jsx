import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../store/favoriteSlice"; // Import favorite actions
import "./FavoriteList.css";

const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorite.favorites); // Get favorites from Redux
  const dispatch = useDispatch();

  const handleRemoveFavorite = (query) => {
    dispatch(removeFavorite(query)); // Remove query from favorites
  };

  return (
    <div className="history-list">
      <h3>⭐ Favorite Queries</h3>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map((query, index) => (
            <li key={index} style={{ display: "flex", alignItems: "center" }}>
              <span style={{ flexGrow: 1 }}>{query}</span>
              <button onClick={() => handleRemoveFavorite(query)} className="delete-btn">
                ❌
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoriteList;
