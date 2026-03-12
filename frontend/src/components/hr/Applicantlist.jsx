import React, {useState} from "react";
function Applicantlist({jobs, selectedJob,setSelectedJob}){
  return(
    <div style={{borderRadius: "6px",textAlign:"center",border: "2px solid blue",padding: "15px",backgroundColor: "#FFF4E6",width: "250px"}}>
      <h3>Applicants</h3>
      <select value={selectedJob} onChange={(e)=>setSelectedJob(e.target.value)} style={{marginBottom:"10px"}}>
        <option value="">select Job</option>
        {jobs.map(j=>(
          <option key={j.id} value={j.id}>{j.title}</option>
        ))}
      </select>
    </div>
  );
}
export default Applicantlist;