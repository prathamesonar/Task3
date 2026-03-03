import React from "react";
function Createjob({title, settitle, description, setdescription, createjob}){
  return(
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "30px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
      <h2>Create a Job</h2>
      <input placeholder="title" value={title} onChange={e=>settitle(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <input placeholder="description" value={description} onChange={e=>setdescription(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <button onClick={createjob} style={{ padding: "10px", width: "100%", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px"}}>Post Job</button>
    </div>
  );
}
export default Createjob;