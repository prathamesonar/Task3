import React, { useState } from "react";
import Notes from "./Notes";
function Stage({ applications, selectedJob, updatestatus }) {
  const stages = ["Shortlisted", "Screening", "Assessment", "Technical Interview", "Final Interview", "Hired", "Rejected"];
  const filteredApplications = selectedJob ? applications.filter(a=>a.jobId == selectedJob) : [];
  const [note, setnote] = useState(false);
  const [selectedstatus, setselectedstatus] = useState(null);
  const [newstatus, setnewstatus] = useState("");
  const [expandedApplicantId, setExpandedApplicantId] = useState(null);

  return (
    <div style={{display: "flex", gap: "15px", marginTop: "10px", overflowX: "auto"}}>
      {stages.map(stage =>(
        <div key={stage} style={{padding: "10px", minWidth: "220px", backgroundColor: "#FFF4E6", borderRadius: "5px" }}>
          <h4>{stage}</h4>
          {filteredApplications.filter(a=>(a.status || "Shortlisted") === stage)
            .map(a => (
              <div key={a.id} style={{border: "1px solid black", padding: "10px", marginBottom: "10px", borderRadius: "6px", backgroundColor: "white" }}>
                <p style={{fontWeight: "bold", marginBottom: "5px", cursor: "pointer" }} onClick={() => setExpandedApplicantId(expandedApplicantId === a.id ? null : a.id)}>
                  Full Name: {a.applicantName}
                  <p>Email: {a.email}</p>
                </p>
                {expandedApplicantId ===a.id &&(
                  <>
                    <div>
                      <select value={a.status} onChange={(e)=>{setselectedstatus(a); setnewstatus(e.target.value); setnote(true)}} style={{marginBottom: "8px", width: "100%", padding: "4px" }}>
                        <option>Shortlisted</option>
                        <option>Screening</option>
                        <option>Assessment</option>
                        <option>Technical Interview</option>
                        <option>Final Interview</option>
                        <option>Hired</option>
                        <option>Rejected</option>
                      </select>
                      <div style={{ fontSize: "13px" }}>
                        <p>Phone: {a.phone}</p>
                        <p>Experience: {a.experience} yrs</p>
                        <p>Current Salary: {a.currentsalary} LPA</p>
                        <p>Expected Salary: {a.expected} LPA</p>
                        <p>Notice Period: {a.noticeperiod} days</p>
                        <p>Reason for Change: {a.reason}</p>
                        <p>Location: {a.location}</p>
                        <p>Answer: {a.answer}</p>
                        <p>Status: {a.status}</p>
                      </div>
                    </div>
                    <h5 style={{ marginTop: "10px", borderTop: "1px solid #ccc", paddingTop: "5px" }}>Notes</h5>
                    {a.notes?.map((n, index) => (
                      <div key={index}><p style={{ fontSize: "12px" }}>{n.stage} :{n.text}</p></div>
                    ))}
                  </>
                )}
              </div>
            ))}
        </div>
      ))}
      {note && <Notes show={note} status={newstatus} onclose={()=>setnote(false)} onsave={(noteText) => { updatestatus(selectedstatus.id, newstatus, noteText); setnote(false); }} />}
    </div>
  );
}
export default Stage;