import React, {useState} from "react";
function Joblist({jobs}){
  const [selectedjob, setjob] =useState(null);
  return(
    <div style={{border: "2px solid blue",borderRadius: "6px", padding: "15px",backgroundColor: "white",width: "250px", textAlign:"center"}}>
      <h3>Open Jobs</h3>
      {jobs.map(j=>(
        <div key={j.id} style={{border: "1px solid black", padding: "10px", marginBottom: "8px", borderRadius: "4px"}}>
          <div onClick={()=>setjob(j.id)}>
            <span>{j.id} - </span>
            <span>{j.title}</span>
          </div>
          {selectedjob === j.id &&(
            <p style={{marginTop:"5px"}}>Description: {j.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}

export default Joblist;