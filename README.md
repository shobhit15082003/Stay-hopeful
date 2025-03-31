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

- **Query Editor**: Fully-functional editor powered by Monaco for writing and executing SQL queries.
- **Results Display**: Query results shown in a clean, tabular format.
- **History Management**: Stores the last 10 executed queries and allows quick reuse.
- **Favorites**: Save and access your favorite queries for later use.
- **Table List**: Reference available tables and insert them into your queries.
- **Export**: Export query results in CSV or Excel (.xlsx) format.
- **Dark Mode**: Toggle between light and dark themes for better visual comfort.
- **Preloader**: Smooth loading experience with an interactive preloader.

For a more detailed explanation of the features, please check the full documentation here:  
[SQL Query Editor Detailed Documentation](https://docs.google.com/document/d/16ZvaZj5PPeeEAj5T1B4usrchc5KPmObferQRokq4C3s/edit?usp=sharing)

## Additional Resources:
- **Folder Structure**: View the folder structure of the project [here](https://drive.google.com/file/d/1AyVJx6u_3uVu62krlMZctauUO3aYfoKj/view?usp=sharing).
- **ER Diagram**: View the ER diagram of the project [here](https://drive.google.com/file/d/1X9igiiqOI2VJwbRGsXkV3Kua0N_FyPhX/view?usp=drive_link).
- **Architecture Diagram**: View the architecture diagram of the project [here](https://drive.google.com/file/d/1SlPY2FPtQrgqMBougb5_i80wxTeL-BCn/view?usp=drive_link).

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
  [GitHub Repository](https://github.com/shobhit15082003/Stay-hopeful)

- **Deployment Platforms**: Vercel (for deployment)  
  [Live Demo on Vercel](https://stay-hopeful.vercel.app/)

  

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
   git clone https://github.com/shobhit15082003/Stay-hopeful.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Stay-hopeful
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

