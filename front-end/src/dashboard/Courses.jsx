import React from "react";
import { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "../index.css";
import { DataGrid } from '@mui/x-data-grid';
import Paper from '@mui/material/Paper';
import { Hidden } from "@mui/material";

const columns = [
  { field: 'id', headerName: 'ID', width: 200, hide: true},
  { field: 'courseName', headerName: 'Course Code', width: 200, editable: true},
  { field: 'lecSection', headerName: 'Lecture Section', width: 200, editable: true },
  { field: 'praSection', headerName: 'Practical Section', width: 200, editable: true },
  { field: 'tutSection', headerName: 'Tutorial Section', width: 200, editable: true }
];

const initialRows = [
  { id: 1, courseName: 33, lecSection: 'Snow', praSection: 'Jon', tutSection: 35 }
];

const paginationModel = { page: 0, pageSize: 5 };

function Courses() {
  const [rows, setRows] = useState(initialRows);

  // Handle row update
  const handleRowUpdate = (newRow, oldRow) => {
    const updatedRows = rows.map((row) =>
      row.id === newRow.id ? newRow : row
    );
    setRows(updatedRows);
    return newRow; // Return the updated row
  };

  return (
    
    <div className="w-full flex flex-col flex-grow gap-8 items-center justify-center bg-black/60 rounded-md transform transition-all duration-300 ease-in-out hover:scale-105 p-8 box-border overflow-scroll">
      <div className="text-center tracking-widest bg-gradient-to-r from-blue-600 via-purple-400 to-pink-600 rounded-md px-4 py-2 w-full">Update Schedule</div>
      <div className="flex flex-row justify-center gap-4">
      <button className="bg-[#798dfc] text-black px-4 py-2 hover:scale-105 hover:bg-white rounded-full">Fall</button>
      <button className="bg-[#798dfc] text-black px-4 py-2 hover:scale-105 hover:bg-white rounded-full">Winter</button>
      </div>
      <form className="flex flex-col gap-4">
        <textarea typeof="input" style={{width: 1000, height: 300}} placeholder="Copy and paste you course information fron the Courses page on Acorn."/>
        <button typeof="input" className="bg-[pink] text-black px-4 py-2 hover:scale-105 hover:bg-white rounded-full">Bulk Update</button>
      </form>
        <Paper sx={{ height: 400, width: '100%' }}>
        <DataGrid
          rows={rows}
          columns={columns}
          processRowUpdate={handleRowUpdate} // Handle updates
          onProcessRowUpdateError={(error) => console.error(error)}
          initialState={{ pagination: { paginationModel },  columns: {
            columnVisibilityModel: {
              id: false, // Hides the ID column
            },
          },}}
          pageSizeOptions={[5, 10]}
          
          sx={{ border: 0,  backgroundColor: "#798dfc", color: "black", fontWeight:"600"}}
        />
      </Paper>
        </div>
  );
}

export default Courses;
