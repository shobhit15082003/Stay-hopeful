import React from "react";
import { useSelector } from "react-redux";
import './QueryResults.css'

const QueryResults = () => {
  const result = useSelector((state) => state.result.result); // Corrected state reference

  return (
    <div className="query-results">
      <h2>Query Results</h2>
      {result && result.length > 0 ? (
        <table>
          <thead>
            <tr>
              {Object.keys(result[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {result.map((row, index) => (
              <tr key={index}>
                {Object.values(row).map((value, idx) => (
                  <td key={idx}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No data available. Run a query to see results.</p>
      )}
    </div>
  );
};

export default QueryResults;
