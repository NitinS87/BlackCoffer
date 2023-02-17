import React from "react";
import { DataGrid } from "@mui/x-data-grid";

const MainTable = ({ news }) => {
  const columns = [
    {
      field: "id",
      headerName: "ID",
      width: 70,
    },
    { field: "title", headerName: "Title name", width: 200 },
    { field: "source", headerName: "Source", width: 130 },
    { field: "topic", headerName: "Topic", width: 80 },
    { field: "insight", headerName: "Insight", width: 130 },
    { field: "region", headerName: "Region", width: 200 },
    { field: "country", headerName: "Country", width: 200 },
    { field: "pestle", headerName: "Pestle", width: 130 },
    { field: "sector", headerName: "Sector", width: 130 },
    {
      field: "intensity",
      headerName: "Intensity",
      type: "number",
      width: 90,
    },
    {
      field: "relevance",
      headerName: "Relevance",
      type: "number",
      width: 90,
    },
    {
      field: "likelihood",
      headerName: "Likelihood",
      type: "number",
      width: 90,
    },
    {
      field: "end_year",
      headerName: "End Year",
      type: "number",
      width: 20,
    },
    {
      field: "start_year",
      headerName: "Start Year",
      type: "number",
      width: 20,
    },
    {
      field: "added",
      headerName: "Added",
      type: "date",
      width: 20,
    },
    {
      field: "published",
      headerName: "Published",
      type: "date",
      width: 20,
    },
    {
      field: "url",
      headerName: "URL",
      renderCell: (params) => {
        return <a href={`${params.row.url}`}>View</a>;
      },
      cellClassName: "text-gray-500 hover:underline",
      width: 130,
    },
  ];

  return (
    <div style={{ height: 640, width: "100%" }} className="">
      <DataGrid
        className="px-3"
        rows={news.map((item, index) => {
          return { id: index + 1, ...item };
        })}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default MainTable;
