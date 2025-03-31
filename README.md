# SQL Query Editor

## Overview

The **SQL Query Editor** is a web-based application that simplifies the process of inputting and executing SQL queries. This tool offers a user-friendly interface with several key features to enhance the query-writing experience and increase productivity.

### Key Features:
- **Web-based SQL Query Editor**: A dedicated interface for writing and executing SQL queries.
- **Structured Table Results**: Displays query results in an organized table format.
- **History Management**: Tracks previously executed queries for quick access.
- **Dark Mode**: Provides a visually comfortable dark theme.
- **Export Functionality**: Enables export of query results in CSV and JSON formats.
- **Favorite Queries**: Allows users to store and easily access frequently used queries.
- **Preloader**: A loading screen enhances user experience during editor loading.

## Features

### 1. Query Editor (Monaco Editor)
- **Code Editor**: A fully-functional SQL query editor powered by Monaco Editor.
- **Execute Button**: Executes queries and displays results.
- **Clear Button**: Resets the editor to a blank state.
- **Copy Query Button**: Copies the current query to the clipboard for easy reuse.
- **Syntax Validation**: Note: The editor does not validate SQL syntax.

### 2. Query Execution & Results
- **Results Display**: Query results are shown in a clean, tabular format.
- **Efficient Rendering**: Optimized rendering for smooth user experience.
- **No SQL Validation**: Query execution does not involve syntax validation.

### 3. Available Tables Panel
- **Table List**: Displays a list of available tables for reference.
- **Search Functionality**: Includes a search bar for easy filtering of tables.
- **Table Insertion**: Clicking on a table name inserts it directly into the query editor for faster query construction.

### 4. Query History (Redux - No Database, No Timestamp)
- **History Management**: Stores the last 10 executed queries for quick access.
- **Latest Queries**: New queries appear at the top of the history list.
- **Query Reuse**: Clicking a query from history reloads it into the editor.
- **Duplicates**: Allows duplicate queries within history.
- **Clear History**: A button is provided to clear all stored query history.

### 5. Favorite Queries
- **Favorites Storage**: Save favorite queries for easy access later.
- **Add to Favorites**: A button next to the query allows users to add it to their favorites list.
- **View Favorites**: A dedicated panel displays all saved favorite queries.
- **Manage Favorites**: Users can delete or edit favorite queries from the list.

### 6. Sidebar Navigation
- **Navigation Sections**: Includes sections like "Getting Started," "Tables Reference," and "Query Editor."

### 7. Dark Mode
- **Theme Toggle**: Switch between light and dark themes to match visual preferences.
- **Navigation Bar Toggle**: Conveniently located in the navigation bar.

### 8. Export Query Results
- **Export Formats**: Export query results in CSV or Excel (.xlsx) format.
- **Download Button**: A download button is available to export results with a single click.

### 9. Additional Features
- **Copy Query**: A dedicated button for quickly copying the SQL query to the clipboard.
- **Preloader**: Displays a loading screen while the editor is initializing to ensure a smooth startup experience.

## Tech Stack

### 1. Frontend
- **Core Framework**: React.js
- **Code Editing**: Monaco Editor (for SQL code editing)
- **State Management**: Redux (for managing query history and favorites)
- **Styling**: CSS (custom styling, no Tailwind CSS)

### Packages Used:
- `@monaco-editor/react` - Version: ^4.7.0
- `@reduxjs/toolkit` - Version: ^2.6.1
- `clipboard-copy` - Version: ^4.0.1
- `file-saver` - Version: ^2.0.5
- `papaparse` - Version: ^5.5.2
- `react` - Version: ^19.1.0
- `react-dom` - Version: ^19.1.0
- `react-icons` - Version: ^5.5.0
- `react-redux` - Version: ^9.2.0
- `react-scripts` - Version: ^5.0.1
- `sql-formatter` - Version: ^15.5.2
- `web-vitals` - Version: ^2.1.4
- `xlsx` - Version: ^0.18.5

### 2. Deployment
- **Version Control**: GitHub (for version control and repository hosting)
- **Deployment Platforms**: Vercel (for deployment)

## Performance Metrics

The following web performance metrics have been recorded for the SQL Query Editor:

- **FID (First Input Delay)**: 0.8 ms
- **TTFB (Time To First Byte)**: 500 ms
- **FCP (First Contentful Paint)**: 1030 ms

These metrics indicate a responsive and smooth user experience with low interaction delay and fast content rendering.

## Installation

### Prerequisites:
- Node.js (Version: ^16.0.0)
- npm (Version: ^7.0.0)

### Steps to Run Locally:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/sql-query-editor.git
   ```

2. Navigate to the project directory:
   ```bash
   cd sql-query-editor
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run the development server:
   ```bash
   npm start
   ```

5. Open your browser and navigate to:
   ```
   http://localhost:3000
   ```


