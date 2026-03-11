import React from "react";
function Stage({applications,selectedJob}){
  const stages =["Shortlisted", "Screening", "Assessment", "Technical Interview", "Final Interview", "Hired", "Rejected"];
  const filteredApplications = selectedJob ?applications.filter(a =>a.jobId ==selectedJob) :applications;
  return(
    <div style={{display:"flex",gap:"15px",marginTop:"10px"}}>
        {stages.map(stage=>(
        <div key={stage} style={{padding:"10px",minWidth:"180px", backgroundColor:"#FFF4E6"}}>
            <h4>{stage}</h4>
            {filteredApplications.filter(a =>a.status===stage)
                .map(a=>(
                <div key={a.id} style={{border:"1px solid black",padding:"2px"}}>
                {a.applicantName}
                <hr/>
                {a.email}
                <hr />
                <h5>Notes</h5>
                {a.notes?.map((n,index)=>(
                  <div key={index}><p>{n.stage} :{n.text}</p></div>
                ))}
                </div>
            ))}
        </div>
      ))}
    </div>
  );
}
export default Stage;