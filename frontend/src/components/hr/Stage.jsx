import React from "react";
function Stage({applications}){
  const stages =["Applied", "Shortlisted", "Screening", "Technical Interview", "Final Interview", "Hired", "Rejected"];
  return(
    <div style={{display:"flex",gap:"15px",marginTop:"20px"}}>
        {stages.map(stage=>(
        <div key={stage} style={{padding:"10px",minWidth:"180px", backgroundColor:"white"}}>
            <h4>{stage}</h4>
            {applications.filter(a =>a.status===stage)
                .map(a=>(
                <div key={a.id} style={{border:"1px solid black",padding:"6px",marginBottom:"6px"}}>
                {a.applicantName}
                <hr/>
                {a.email}
                </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export default Stage;