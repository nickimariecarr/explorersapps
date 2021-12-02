import React, { useEffect, useState } from "react";
import SearchTables from "./tableSearch";
import axios from "axios";


export default function FindaGroup() {
const [groups, setGroups] = useState([]);

  const getGroups = async () => {
     axios.get("https://explorerapps.herokuapp.com/groups").then((res) => {
      setGroups(res.data);
    });
};
  
 useEffect(() => {
    getGroups();
  }, [groups]);

const columns = React.useMemo(
    () => [
      {
        Header: "County",
        accessor: "county" // accessor is the "key" in the data
      },
      {
        Header: "Contact",
        accessor: "contact"
      },
      {
        Header: "Email",
        accessor: "email"
      },
            {
        Header: "State",
        accessor: "state"
      }
    ],
    []
  );
 
 

  const data = React.useMemo(() => groups, []);


  return (
    <SearchTables columns={columns} data={data}/>
  );
}