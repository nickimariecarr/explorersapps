import React, { useEffect, useState } from "react";
import SearchTables from "./tableSearch";


export default function FindaGroup() {
const [groups, setGroups] = useState([]);

  const getGroups = async () => {
    const resp = await fetch("http://localhost:3000/group");
    const data = await resp.json();
    setGroups(data);
  };


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
 useEffect(() => {
    getGroups();
  }, []);
  const data = React.useMemo(() => groups, []);


  return (
    <SearchTables columns={columns} data={data}/>
  );
}