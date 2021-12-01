import React from 'react';
import { MDBDataTable } from 'mdbreact';
import {Container, Row, Col, Button} from 'react-bootstrap'
import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import SearchGroups from "./tableSearch";

function FindaGroup() {
const [groups, setGroups] = useState([]);

const getGroups = () => {
  axios.get("http://localhost:3000/group").then((res) => {
    setGroups(res.data);
  });
};

useEffect(() => {
    getGroups();
}, [groups]);

  return (
    <div className="Group">
      <label style={{martinTop:"25px"}}> Search for Group</label>
        <input type="text" name="input" />
        <button>Search</button>
            

            <SearchGroups groups={groups} setGroup={setGroups} />
        <div className="add-group" style={{marginTop: "25px", marginBottom: "25px", marginLeft:"50px", width:"80%", background:"#6D7A69", padding:"1px"}}>
            {groups.map((item) => {
                return (

                  
                  <div className="groups" >
                    <th>{item.county}</th>
                    <th>{item.contact}</th>
                    <th>{item.email}</th>
                    <th>{item.state}</th>
                  </div>
                );
            })}
          
      </div>


      
  </div>
   
  );
} 

export default FindaGroup;