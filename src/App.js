import {Table, table} from "./Data/data"
import DataInColumns from './components/DataInColumns'
import TableInstance from "./components/TableInstance";
// import { useState } from "react";
function App() {
  return (
    <div>
    {
      Table.map((data)=>(
        <DataInColumns props={data}/>
      ))
    }
    {
      Table.map((data)=>(
        <TableInstance props={data}/>
      ))
    }
    </div>
  );
}

export default App;
