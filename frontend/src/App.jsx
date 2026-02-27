import React,{useState,useEffect} from "react";

function App() {
  const [mode,setmode] =useState("");
  const [jobs,setjobs] =useState([]);

  const [title,settitle] =useState("");
  const [description,setdescription] =useState("");
  const [name,setname] =useState("");
  const [email,setemail] =useState("");
  const [jobid,setjobid] =useState("");

  useEffect(()=>{if(mode==="user"){
    fetch("http://localhost:5256/api/jobs").then(res=>res.json()).then(data=>setjobs(data));}},[mode]);

  const createjob =()=>{
    fetch("http://localhost:5256/api/jobs",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({title,description})
    }).then(()=>{
      alert("job created");
      settitle("");
      setdescription("");
    });
  };

  const applyjob =()=>{
    fetch("http://localhost:5256/api/applications",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({
        applicantName:name,
        email:email,
        jobId:parseInt(jobid)
      })
    }).then(res=>{
      if(res.ok){
        alert("applied");
      } else {
        alert("already applied");
      }
    });
  };

  if(!mode){
    return(
      <div style={{display: "flex",flexDirection: "row",alignItems: "center",gap: "30px"}}>
        <button onClick={()=>setmode("hr")}>HR</button>
        <button onClick={()=>setmode("user")}>applicant</button>
      </div>
    );
  }

  if(mode==="hr"){
    return(
      <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "30px"}}>
        <h2>create</h2>
        <input placeholder="title" value={title} onChange={e=>settitle(e.target.value)}/>
        <input placeholder="description" value={description} onChange={e=>setdescription(e.target.value)}/>
        <button onClick={createjob}>post</button>
      </div>
    );
  }

  return (
    <div style={{display: "flex",flexDirection: "row",alignItems: "center",gap: "10px"}}>
      <div>
      <h2>jobs</h2>
      {jobs.map(j=>(
        <div key={j.id}>
          <p>id:{j.id}</p>
          <p>title: {j.title}</p>
          <p>description: {j.description}</p>
          <hr/>
        </div>
      ))}</div>
      <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "10px"}}>
      <h3>apply for job</h3>
      <input placeholder="name" value={name} onChange={e=>setname(e.target.value)}/>
      <input placeholder="mail" value={email} onChange={e=>setemail(e.target.value)}/>
      <input placeholder="job id" value={jobid} onChange={e=>setjobid(e.target.value)}/>
      <button onClick={applyjob}>apply</button></div>
    </div>
  );
}

export default App;