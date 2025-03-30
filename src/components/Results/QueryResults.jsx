import React, { useState } from "react";
import { useSelector } from "react-redux";
import * as XLSX from "xlsx";
import './QueryResults.css';

const QueryResults = () => {
  const result = useSelector((state) => state.result.result);
  const [format, setFormat] = useState("csv");

  const handleDownload = () => {
    if (!result || result.length === 0) {
      alert("No data available to download.");
      return;
    }

    const filename = `query_results.${format}`;
    
    if (format === "csv") {
      const csvContent = [
        Object.keys(result[0]).join(","), // Header row
        ...result.map(row => Object.values(row).join(",")) // Data rows
      ].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv" });
      const link = document.createElement("a");
      link.href = URL.createObjectURL(blob);
      link.download = filename;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } 
    else if (format === "xlsx") {
      const worksheet = XLSX.utils.json_to_sheet(result);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, "Results");
      XLSX.writeFile(workbook, filename);
    }
  };

  return (
    <div className="query-results">
      <h2>Query Results</h2>
      {result && result.length > 0 ? (
        <>
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
          
          <div className="download-section">
            <label htmlFor="format">Download as: </label>
            <select id="format" value={format} onChange={(e) => setFormat(e.target.value)}>
              <option value="csv">CSV</option>
              <option value="xlsx">Excel (.xlsx)</option>
            </select>
            <button onClick={handleDownload}>Download</button>
          </div>
        </>
      ) : (
        <p>No data available. Run a query to see results.</p>
      )}
    </div>
  );
};

export default QueryResults;
