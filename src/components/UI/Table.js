import React from "react";
import { MDBTable, MDBTableBody } from 'mdbreact';
const TablePage=(props)=>{
    const data_people ={
        columns:[
            {
                label: 'Name',
                field: 'name',
                sort: 'asc'
            },
            {
                label: 'Date',
                field: 'date',
                sort: 'asc'
              },
        ],
        rows:[
            {
                'name':'Special Session/ Workshop Proposal due:',
                'date':'15th September 2022'
            },
            {
                'name':'Last Deadline for Submission:',
                'date':'7th February 2023'
            },
            {
                'name':'Paper Acceptance Date',
                'date':'15th March 2023'
            },
            {
                'name':'Camera-Ready Paper Submission due:',
                'date':'15th April 2023'
            },
            {
                'name':'Early Registration due:',
                'date':'1st April 2023'
            },
            {
                'name':'Late Registration Due',
                'date':'1st May 2023'
            },
        ]
    };
return(
    <MDBTable autoWidth striped>
      <MDBTableBody rows={data_people.rows}/>
    </MDBTable>
  );
};

export default TablePage;