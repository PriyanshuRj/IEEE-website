import React, { useState } from "react";
import { Collapse, ListGroup, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronCircleDown, faChevronCircleUp} from '@fortawesome/free-solid-svg-icons'
import Style from "../Styles/program.module.css";
export default function Program({data}) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <div className="d-flex justify-content-center">


      <h1 className={Style.title}>{data.track}</h1>
      </div>

      <div
      className={"d-flex my-4 h4 text-center p-4 justify-content-between align-items-center " + Style.tableHeader}
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
      >
       <p>
          {data.professor}
         </p>

      {open?<FontAwesomeIcon icon={faChevronCircleUp} width={40} height={40} />:<FontAwesomeIcon icon={faChevronCircleDown} width={40} height={40} />}
      



      </div>
      <Collapse in={open}>
        <div id="example-collapse-text">
          <ListGroup as="ul">
            {data.topics.map((item)=>{
              return <ListGroup.Item as="li" className={Style.listItem}>
              {item}
            </ListGroup.Item>
            })}
            
            
          </ListGroup>
        </div>
      </Collapse>
    </div>
  );
}
