import React from "react";
import { MDBTable, MDBTableBody } from "mdbreact";
const TablePage = (props) => {
  const data_calander = {
    columns: [
      {
        label: "Name",
        field: "name",
        sort: "asc",
      },
      {
        label: "Date",
        field: "date",
        sort: "asc",
      },
    ],
    rows: [
      {
        name: "Last Deadline for submission:",
        date: "7th Feb 2023",
      },
      {
        name: "Camera-Ready Paper Submission due:",
        date: "5th April 2023",
      },
      {
        name: "Conference Date :",
        date: "4-6 May 2023",
      },
    ],
  };
  return (
    <div className="d-flex flex-column align-items-center justify-content-center my-4">
      <div
        className="h1 my-4 display-5"
        style={{
          textAlign: "center",
          marginBottom: "2rem",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#1D619C",
        }}
      >
        Important Dates
      </div>
      <MDBTable autoWidth striped>
        <MDBTableBody rows={data_calander.rows} />
      </MDBTable>
    </div>
  );
};

export default TablePage;
