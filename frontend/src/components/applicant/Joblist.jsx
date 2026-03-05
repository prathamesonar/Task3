import React,{useState} from "react";
function Joblist({jobs}){
  const [selectedjob, setselected] =useState(null);
  return(
    <div style={{border:"2px solid blue",textAlign:"center",borderRadius:"6px",padding:"15px",backgroundColor:"white",width:"300px"}}>
      <h2>Available Jobs</h2>
      {jobs.map(j=>(
        <div key={j.id} style={{border: "1px solid black", padding: "10px", marginBottom: "8px", borderRadius:"4px"}}>
            <div onClick={()=>setselected(j.id)}>Job code: {j.id} - {j.title}</div>
            {selectedjob ===j.id &&(
              <div >
              <p style={{textAlign:"left"}}>Description</p>
              <div style={{marginTop:"5px", border: "1px solid black", marginBottom: "2px", borderRadius: "4px", backgroundColor:"pink"}} dangerouslySetInnerHTML={{ __html: j.description }}/>
              <p><i>Question:</i>{j.question}</p>
              </div>
            )}
        </div>
      ))}
    </div>
  );
}
export default Joblist;