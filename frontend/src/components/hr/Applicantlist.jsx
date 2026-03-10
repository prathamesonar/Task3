import React, {useState} from "react";
import Notes from "./Notes";
function Applicantlist({applications, jobs, updatestatus}){
  const [note,setnote] =useState(false);
  const [selectedstatus,setselectedstatus] =useState(null);
  const [newstatus,setnewstatus] =useState("");
  const [selected, setselected] = useState(null);
  const [selectedjob, setselectedjob] = useState("");
  const filtered =selectedjob ?applications.filter(a=>a.jobId ==selectedjob) :applications;
  return(
    <div style={{borderRadius: "6px",textAlign:"center",border: "2px solid blue",padding: "15px",backgroundColor: "#FFF4E6",width: "250px"}}>
      <h3>Applicants</h3>
      <select value={selectedjob} onChange={(e)=>setselectedjob((e.target.value))} style={{marginBottom:"10px" ,border: "1px solid black", borderRadius: "4px", padding:"10px"}}>
      <option value="">select Job</option>
      {jobs.map(j=>(
        <option key={j.id} value={j.id}>{j.title}</option>
      ))}
      </select>
      {filtered.map(a=>(
        <div key={a.id} style={{border: "1px solid black", marginBottom: "3px", borderRadius: "4px", textAlign:"left"}}>
          <p onClick={()=>setselected(selected == a.id ? null : a.id)}>Full Name: {a.applicantName}</p>
          {selected ===a.id &&(
          <div>
             <select value={a.status} onChange={(e)=>{setselectedstatus(a); setnewstatus(e.target.value); setnote(true)}} style={{marginBottom:"8px"}}>
                <option>Shortlisted</option>
                <option>Screening</option>
                <option>Assessment</option>
                <option>Technical Interview</option>
                <option>Final Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
          <p>Email: {a.email}</p>
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
          )}
        </div>
      ))}
      <Notes show={note} status={newstatus} onclose={()=>setnote(false)} onsave={(note)=>{updatestatus(selectedstatus.id,newstatus,note); setnote(false);}}/>
    </div>
  );
}
export default Applicantlist;