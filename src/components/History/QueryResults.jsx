import React from "react";
import "./QueryResults.css";

const QueryResults = ({ data }) => {
  if (!data || data.length === 0) return null; // Don't render if no data

  const columns = Object.keys(data[0]); // Extract column names

  return (
    <div className="query-results">
      <h3>Query Results</h3>
      <table>
        <thead>
          <tr>
            {columns.map((col, index) => (
              <th key={index}>{col.toUpperCase()}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((col, colIndex) => (
                <td key={colIndex}>{row[col]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default QueryResults;
