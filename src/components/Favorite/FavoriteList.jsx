import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFavorite } from "../../store/favoriteSlice"; // Import favorite actions
import { setQuery } from "../../store/editorSlice"; // Import editor actions
import { FaStar } from "react-icons/fa"; // Import star icon
import "./FavoriteList.css";

const FavoriteList = () => {
  const favorites = useSelector((state) => state.favorite.favorites); // Get favorites from Redux
  const dispatch = useDispatch();

  const handleRemoveFavorite = (query) => {
    dispatch(removeFavorite(query)); // Remove query from favorites
  };

  const handleSelectFavorite = (query) => {
    dispatch(setQuery(query)); // Store selected favorite query in editorSlice
  };

  return (
    <div className="favorite-list-container">
      <h3 className="favorite-heading">⭐ Favorite Queries</h3>
      {favorites.length > 0 ? (
        <ul className="favorite-list">
          {favorites.map((query, index) => (
            <li key={index} className="favorite-item">
              <span className="favorite-text" onClick={() => handleSelectFavorite(query)}>
                {query}
              </span>
              <FaStar
                onClick={() => handleRemoveFavorite(query)}
                className="favorite-icon"
              />
            </li>
          ))}
        </ul>
      ) : (
        <p className="no-favorites">No favorites yet.</p>
      )}
    </div>
  );
};

export default FavoriteList;
