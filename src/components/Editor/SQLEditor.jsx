import React, { useRef } from "react";
import Editor from "@monaco-editor/react";
import { useDispatch, useSelector } from "react-redux";

import { addToHistory } from "../../store/historySlice";
import { setQuery } from "../../store/editorSlice";
import { setResult } from "../../store/resultSlice";
import dummyData from "../../dummyData/dummyData";

const SQLEditor = () => {
  const query = useSelector((state) => state.editor.query);
  const editorRef = useRef(null);
  const dispatch = useDispatch();
  const selectedKeyRef = useRef(null); // Store last selected key

  const predefinedTables = {
    "1": "users",
    "2": "products",
    "3": "orders",
    "4": "employees",
    "5": "transactions",
  };

  const extraTables = ["inventory", "shipments", "feedback"];

  const handleEditorChange = (value) => {
    dispatch(setQuery(value));
  };

  const handleRunQuery = () => {
    if (query.trim()) {
      dispatch(addToHistory(query));
  
      let selectedKey = selectedKeyRef.current;
  
      // If no predefined query is selected or user modified the query manually
      if (!selectedKey || query !== `SELECT * FROM ${selectedKey};`) {
        selectedKey = extraTables[Math.floor(Math.random() * extraTables.length)];
      }
  
      dispatch(setResult(dummyData[selectedKey])); // ✅ Update the result slice
      console.log(`Executing: ${query} | Showing results from: ${selectedKey}`);
    }
  };
  

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(query);
    alert("Query copied!");
  };

  const handleClearEditor = () => {
    dispatch(setQuery(""));
  };

  const handleSelectQuery = (event) => {
    let selectedKey = predefinedTables[event.target.value];

    if (!selectedKey) {
      selectedKey = extraTables[Math.floor(Math.random() * extraTables.length)];
    }

    selectedKeyRef.current = selectedKey; // Store the selected table
    dispatch(setQuery(`SELECT * FROM ${selectedKey};`));
  };

  return (
    <div className="editor-container">
      <select onChange={handleSelectQuery} defaultValue="">
        <option value="" disabled>
          Select a query
        </option>
        <option value="1">users</option>
        <option value="2">products</option>
        <option value="3">orders</option>
        <option value="4">employees</option>
        <option value="5">transactions</option>
      </select>

      <Editor
        height="250px"
        language="sql"
        value={query}
        theme="vs-dark"
        onChange={handleEditorChange}
        onMount={(editor) => (editorRef.current = editor)}
      />

      <div className="editor-buttons">
        <button onClick={handleCopyQuery}>Copy</button>
        <button onClick={handleClearEditor}>Clear</button>
        <button onClick={handleRunQuery}>Run</button>
      </div>
    </div>
  );
};

export default SQLEditor;
