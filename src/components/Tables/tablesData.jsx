import React, { useState } from "react";
import dummyData from "../../dummyData/dummyData";
import './tablesData.css'

const TablesData = ({ onTableSelect }) => {
  const [search, setSearch] = useState("");
  const [hoveredTable, setHoveredTable] = useState(null);

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
    <div className="tables-panel">
      <h3>Available Tables</h3>
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
  );
};

export default TablesData;
