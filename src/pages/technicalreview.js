import React from 'react'
import SecondaryHero from "../components/SecondaryHero";
import Styles from "../Styles/TechnicalReview.module.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table';
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css';
const data = [
    { Sno:"1", name: "Dr. Mrs Shweta N shah", designation: "SVNIT, Surat" },
    { Sno:"2", name: "Dr. Vishal Ramesh Satpute", designation: "VNIT, Nagpur" },
    { Sno:"3", name: "Dr. Kalpana P ", designation: "PSG Tech, Coimbatore" },
    { Sno:"4", name: "Dr. Nandhini S", designation: "PSG Tech, Coimbatore" },
    { Sno:"5", name: "Dr. Ekta Goel", designation: "NIT Warangal" },
    { Sno:"6", name: "Dr. Sushil Kumar Pandey", designation: "NIT Surathkal" },
    { Sno:"7", name: "Dr. Vipin Kamble", designation: "VNIT, Nagpur" },
    { Sno:"8", name: "Dr. S Manipriya", designation: "IIIT Sri City" },
    { Sno:"9", name: "Dr. Priyambada S", designation: "IIIT Sri City" },
    { Sno:"10", name: "Dr. Lokendra Chouhan", designation: "IIIT Sri City" },
    { Sno:"11", name: "Dr. Rajeev Kumar", designation: "IIIT Sri City" },
    { Sno:"12", name: "Dr. N Jaswanth", designation: "Woxsen Univ, Hyd" },
    { Sno:"13", name: "Dr. S. Harivardhagini", designation: "CVR College of Engg, Hyderabad" },
    { Sno:"14", name: "Dr. S Jayaprakasan", designation: "Sreenidhi Institute of Sci. & Technology, Hyd" },
    { Sno:"15", name: "Dr. Sudarshan Jayabalan", designation: "GR College of Engg & Tech, Hyd" },
    { Sno:"16", name: "Dr. Bharath Ramakrishna", designation: "Defense Institute of Adv. Technology (DIAT), Pune" },
    { Sno:"17", name: "K Prabhakaran", designation: "National Institute of Ocean Technology (NIOT), Chennai" },
    { Sno:"18", name: "Kesava Kumar", designation: "National Institute of Ocean Technology (NIOT), Chennai" },
    { Sno:"19", name: "Dr. Sreeja SR", designation: "IIIT Sri City" },
    { Sno:"20", name: "Dr. Shathanaa R", designation: "IIIT Sri City" },
  ]
export default function technicalreview() {
  return (
    <div >
        <SecondaryHero header={"Technical Review Committee"} majorHeader={"Committee"}/>
        <div className = {Styles.container}>
        <div className={Styles.heading}>Technical Review Committee</div>
    <Table style={{"borderWidth":"1px", 'borderColor':"#aaaaaa", 'borderStyle':'solid'}}>
        <Thead>
            <Tr>
                <Th style = {{ textAlign: 'center' ,fontSize: '20px', fontWeight: 'bold' }}>S.No</Th>
                <Th  style = {{ textAlign: 'center' ,fontSize: '20px', fontWeight: 'bold' }}> Name</Th>
                <Th  style = {{ textAlign: 'center' ,fontSize: '20px', fontWeight: 'bold' }}>Affliation(Name of Institute)</Th>
            </Tr>
        </Thead>
        <tbody>
          {
            data.map((value, key) => {
              return (
                <tr key={key}>
                  <td style = {{fontSize: '20px'}}>{value.Sno}</td>
                  <td style = {{fontSize: '20px'}}>{value.name}</td>
                  <td style = {{fontSize: '20px'}}>{value.designation}</td>
                </tr>
              )
            })
          }
        </tbody>
    </Table>
    <div style={{ paddingBottom: "3.8125rem" }}></div>
        </div>
    </div>
  )
}
