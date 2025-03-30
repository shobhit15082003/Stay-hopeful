import React, { useState } from "react";
import dummyData from "../../dummyData/dummyData";
import './tablesData.css';

const TablesData = ({ onTableSelect }) => {
  const [expanded, setExpanded] = useState({ gettingStarted: false, tables: false });
  const [hoveredTable, setHoveredTable] = useState(null);
  const [search, setSearch] = useState("");

  // Toggle dropdowns
  const toggleDropdown = (section) => {
    setExpanded((prev) => ({ ...prev, [section]: !prev[section] }));
  };

  // Get all table names
  const tableNames = Object.keys(dummyData);

  // Filter tables based on search input
  const filteredTables = tableNames.filter((table) =>
    table.toLowerCase().includes(search.toLowerCase())
  );

  // Get table schema (columns & data types)
  const getTableSchema = (tableName) => {
    if (!dummyData[tableName] || dummyData[tableName].length === 0) return [];
    
    const firstRow = dummyData[tableName][0]; // Get the first row as reference
    return Object.entries(firstRow).map(([key, value]) => ({
      column: key,
      type: typeof value,
    }));
  };

  return (
    <div className="sidebar">
      {/* Main Heading */}
      {/* <h2 className="sidebar-heading">Lets's Begin</h2> */}

      {/* Getting Started Dropdown */}
      <div className="dropdown">
        <div className="dropdown-header" onClick={() => toggleDropdown("gettingStarted")}>
          <h3>Getting Started</h3>
          <span>{expanded.gettingStarted ? "▲" : "▼"}</span>
        </div>
        {expanded.gettingStarted && (
          <div className="dropdown-content">
            <p>1. Type your SQL query in the editor.</p>
            <p>2. Click "Run" to execute the query.</p>
            <p>3. View results in the table.</p>
            <p>4. Use "Export" to download results.</p>
          </div>
        )}
      </div>

      {/* Available Tables Dropdown */}
      <div className="dropdown">
        <div className="dropdown-header" onClick={() => toggleDropdown("tables")}>
          <h3>Available Tables</h3>
          <span>{expanded.tables ? "▲" : "▼"}</span>
        </div>
        {expanded.tables && (
          <div className="dropdown-content">
            <input
              type="text"
              placeholder="Search tables..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="search-bar"
            />
            <ul className="table-list">
              {filteredTables.map((table) => (
                <li
                  key={table}
                  className="table-item"
                  onClick={() => onTableSelect(table)}
                  onMouseEnter={() => setHoveredTable(table)}
                  onMouseLeave={() => setHoveredTable(null)}
                >
                  {table}
                </li>
              ))}
            </ul>

            {/* Table Schema Preview */}
            {hoveredTable && (
              <div className="table-schema">
                <h4>{hoveredTable} Schema</h4>
                <ul>
                  {getTableSchema(hoveredTable).map((column) => (
                    <li key={column.column}>
                      <strong>{column.column}</strong>: {column.type}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default TablesData;
