import React from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
function Createjob({title, settitle, description, setdescription, createjob, question, correctanswer, setcorrectanswer, setquestion}){
  return(
    <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "15px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "#FFF4E6", padding:"20px"}}>
      <h2>Create a Job</h2>
      <input placeholder="Title" value={title} onChange={e=>settitle(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <div style={{width:"100%", marginBottom:"10px" }}><ReactQuill placeholder="Description" value={description} onChange={value => setdescription(value)} /></div>
      <input placeholder="Question" value={question} onChange={e=> setquestion(e.target.value)} style={{width:"100%",padding:"8px"}}/>
      <input placeholder="Correct Answer" value={correctanswer} onChange={e=>setcorrectanswer(e.target.value)} style={{width:"100%",padding:"8px"}}/>
      <button onClick={createjob} style={{padding: "10px", width: "100%", backgroundColor: "#2563EB", color: "white", border: "none", borderRadius: "4px"}}>Post Job</button>
    </div>
  );
}
export default Createjob;