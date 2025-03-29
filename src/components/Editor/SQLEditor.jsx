import React, { useState, useRef } from "react";
import Editor from "@monaco-editor/react";
import { useDispatch,useSelector } from "react-redux";

import { addToHistory } from "../../store/historySlice";
import { setQuery } from "../../store/editorSlice";

import SQLQueries from '../../dummyData/SQLQueries.json';

const SQLEditor = ({ selectedQuery }) => {
  const [query, setQuery] = useState("");
  const editorRef = useRef(null);
  const dispatch = useDispatch();

  const handleEditorChange = (value) => {
    setQuery(value);
  };

  const handleRunQuery = () => {
    // console.log("Imported addToHistory:", addToHistory);
    if (query.trim()) {
      dispatch(addToHistory(query)); // Save query in history
      console.log("Executing:", query);
    }
  };

  const handleCopyQuery = () => {
    navigator.clipboard.writeText(query);
    alert("Query copied!");
  };

  const handleClearEditor = () => {
    setQuery("");
  };

  const handleSelectQuery = (event) => {
    const queries = {
      "1": "SELECT * FROM users;",
      "2": "SELECT * FROM products;",
      "3": "SELECT * FROM orders;",
      "4": "SELECT * FROM employees;",
      "5": "SELECT * FROM transactions;",
    };
  
    setQuery(queries[event.target.value]);
  };

  return (
    <div className="editor-container">
       
    <select onChange={handleSelectQuery} defaultValue="">
            <option value="" disabled>Select a query</option>
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
