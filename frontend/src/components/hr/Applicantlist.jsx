import React, {useState} from "react";
function Applicantlist({applications, jobs, updatestatus}){
  const [selected, setselected] = useState(null);
  const [selectedjob, setselectedjob] = useState("");
  const filtered =selectedjob ?applications.filter(a=>a.jobId ==selectedjob) :applications;
  return(
    <div style={{borderRadius: "6px",textAlign:"center",border: "2px solid blue",padding: "15px",backgroundColor: "white",width: "250px"}}>
      <h3>Applicants</h3>
      <select value={selectedjob} onChange={(e)=>setselectedjob((e.target.value))} style={{marginBottom:"10px" ,border: "1px solid black", borderRadius: "4px", padding:"10px"}}>
      <option value="">select Job</option>
      {jobs.map(j=>(
        <option key={j.id} value={j.id}>{j.title}</option>
      ))}
      </select>
      {filtered.map(a=>(
        <div key={a.id} style={{color:"white",border: "1px solid black", marginBottom: "3px", borderRadius: "4px", backgroundColor: a.status==="Shortlisted" ? "green" : "red", textColor:"white"}}>
          <p onClick={()=>setselected(a.id)}>Name: {a.applicantName}</p>
          {selected ===a.id &&(
          <div>
             <select value={a.status} onChange={(e)=>updatestatus(a.id,e.target.value)} style={{marginBottom:"8px"}}>
                <option>Applied</option>
                <option>Shortlisted</option>
                <option>Screening</option>
                <option>Technical Interview</option>
                <option>Final Interview</option>
                <option>Hired</option>
                <option>Rejected</option>
              </select>
          <p>Status: {a.status}</p>
          <p>Email: {a.email}</p>
          <p>Answer: {a.answer}</p>
          <p>Current salary: {a.currentsalary} INR</p>
          <p>Expected salary: {a.expected} INR</p>
          <p>Phone: {a.phone}</p>
          <p>Experience: {a.experience} yrs</p>
          <p>Notice period: {a.noticeperiod} days</p>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Applicantlist;