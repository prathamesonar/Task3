import React,{useState} from "react";
function Joblist({jobs}){
  const [selectedjob, setselected] =useState(null);
  return(
    <div style={{border:"2px solid blue",textAlign:"center",borderRadius:"6px",padding:"15px",backgroundColor:"white",width:"300px"}}>
      <h2>Available Jobs</h2>
      {jobs.map(j=>(
        <div key={j.id} style={{border: "1px solid black", padding: "10px", marginBottom: "8px", borderRadius:"4px"}}>
            <div onClick={()=>setselected(j.id)}>Job id: {j.id} - {j.title}</div>
            {selectedjob ===j.id &&(
              <p>{j.description}</p>
            )}
        </div>
      ))}
    </div>
  );
}
export default Joblist;