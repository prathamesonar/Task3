import React from "react";
import "../../input.css";
function Applyjob({name, setname, email, setemail, jobid, setjobid, applyjob, answer, setanswer,  currentsalary, setcurrentsalary, expected, setexpected, phone, setphone, experience, setexperience, noticeperiod, setnoticeperiod,}){
  return(
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "10px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
      <h3>Apply For Job</h3>
      <input placeholder="Name" value={name} onChange={e=>setname(e.target.value)}/>
      <input placeholder="Email" value={email} onChange={e=>setemail(e.target.value)}/>
      <input placeholder="Job code" value={jobid} onChange={e=>setjobid(e.target.value)}/>
      <input placeholder="Answer" value={answer} onChange={e=>setanswer(e.target.value)}/>     
      <input type="number" placeholder="Current Salary" value={currentsalary} onChange={e=>setcurrentsalary(e.target.value)}/>
      <input type="number" placeholder="Expected Salary" value={expected} onChange={e=>setexpected(e.target.value)}/>
      <input type="tel" placeholder="Phone" value={phone} onChange={e=>setphone(e.target.value)}/>
      <input placeholder="Experience" value={experience} onChange={e=>setexperience(e.target.value)}/>
      <input placeholder="Notice Period" value={noticeperiod} onChange={e=>setnoticeperiod(e.target.value)}/>
      <button onClick={applyjob} style={{ padding:"8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px"}}>Apply</button>
    </div>
  );
}
export default Applyjob;