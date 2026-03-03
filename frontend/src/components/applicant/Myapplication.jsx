import React from "react";
function Myapplication({applications, email, jobs}){
  return(
    <div style={{border:"2px solid blue",textAlign:"center",borderRadius: "6px",padding: "15px",backgroundColor: "white",width: "300px"}}>
      <h3>My Applied jobs</h3>
      {applications.filter(a=>a.email ===email)
        .map(a=>{
          const job =jobs.find(j=>j.id ===a.jobId);
          return(
            <div key={a.id} style={{border: "1px solid black", marginBottom: "3px", borderRadius: "4px"}}>
              {job &&<p>{job.title}</p>}
            </div>
          );
        })}
    </div>
  );
}
export default Myapplication;