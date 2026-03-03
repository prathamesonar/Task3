import React from "react";
function Applyjob({name, setname, email, setemail, jobid, setjobid, applyjob}){
  return(
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "10px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
      <h3>Apply For Job</h3>
      <input placeholder="Name" value={name} onChange={e=>setname(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <input placeholder="Email" value={email} onChange={e=>setemail(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <input placeholder="Job id" value={jobid} onChange={e=>setjobid(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <button onClick={applyjob} style={{ padding:"8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px"}}>Apply</button>
    </div>
  );
}
export default Applyjob;