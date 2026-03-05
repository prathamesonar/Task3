import React, {useState} from "react";
function Joblist({jobs}){
  const [selectedjob, setjob] =useState(null);
  return(
    <div style={{border:"2px solid blue",borderRadius:"6px", padding: "15px",backgroundColor:"white", width: "250px",textAlign:"center"}}>
      <h3>Open Jobs</h3>
      {jobs.map(j=>(
        <div key={j.id} style={{border:"1px solid black", padding:"10px", marginBottom:"8px", borderRadius:"4px"}}>
          <div onClick={()=>setjob(j.id)}>
            <span>{j.id} - </span>
            <span>{j.title}</span>
          </div>
          {selectedjob ===j.id&&(
            <div >
              <p style={{textAlign:"left" }}>Description</p>
              <div style={{marginTop: "5px", border: "1px solid black", marginBottom: "2px", borderRadius: "4px", backgroundColor: "pink" }} dangerouslySetInnerHTML={{ __html: j.description }} />
              <p><i>Question:</i>{j.question}</p>
              <p><i>answer:</i>{j.correctanswer}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Joblist;