import React, {useState,useEffect} from "react";
import Header from "./components/Header";
import HRdashboard from "./components/hr/HRdashboard";
import Applicantdashboard from "./components/applicant/Applicantdashboard";

function App(){
  const [mode, setmode] =useState("");
  const [jobs, setjobs] =useState([]);
  const [applications, setapplications] =useState([]);

  const [title, settitle] =useState("");
  const [description, setdescription] =useState("");
  const [name, setname] =useState("");
  const [email, setemail] =useState("");
  const [jobid, setjobid] =useState("");

  useEffect(()=>{
    if(mode){
      fetch("http://localhost:5256/api/jobs").then(res=>res.json()).then(data=>setjobs(data));
      fetch("http://localhost:5256/api/applications").then(res=>res.json()).then(data=>setapplications(data));
    }
  },[mode]);

  const createjob=()=>{
    if(!title || !description){
      alert("Fill all fields before creating a job");
      return;
    }
    fetch("http://localhost:5256/api/jobs",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify({title,description})
    }).then(()=>{
      alert("job created");
      settitle("");
      setdescription("");
      fetch("http://localhost:5256/api/jobs").then(res=>res.json()).then(data=>setjobs(data));
    });
  };

  const applyjob=()=>{
    if(!name || !email || !jobid){
      alert("Fill all fields before applying.");
      return;
    }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
     if(!valid.test(email)){
      alert("Please enter a valid email");
      return;
    }
    fetch("http://localhost:5256/api/applications",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify({
        applicantName:name,
        email:email,
        jobId:parseInt(jobid)
      })
    }).then(res=>{
      if(res.ok){
        alert("Thank you "+ name +"! Your application has been submitted.");
        fetch("http://localhost:5256/api/applications").then(res=>res.json()).then(data=>setapplications(data));
      } else {
        alert("already applied");
      }
    });
  };

  return(
    <div>
      <Header/>
      {!mode &&(
        <div style={{display: "flex", justifyContent: "center", marginTop: "50px"}}>
          <div style={{display:"flex",gap:"30px",padding:"20px",border:"2px solid blue",borderRadius:"6px",backgroundColor:"violet", flexDirection: "column"}}>
          <button onClick={()=>setmode("hr")} style={{padding: "8px 16px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px"}}>HR</button>
          <button onClick={()=>setmode("user")} style={{ padding: "8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px"}}>Applicant</button>
          {
             <h1 style={{margin:"20px",color:"white"}}>
             Welcome to HR Portal
             </h1>
          }
          </div>
        </div>
      )}

      {mode ==="hr"&&(
        <div style={{display: "flex",justifyContent: "center",marginTop: "40px"}}>
        <HRdashboard title={title} settitle={settitle} description={description} setdescription={setdescription} createjob={createjob} jobs={jobs} applications={applications}/>
        </div> 
      )}
      {mode ==="user"&&(
        <div style={{display: "flex",justifyContent: "center",marginTop: "40px"}}>
        <Applicantdashboard jobs={jobs} applications={applications} name={name} setname={setname} email={email} setemail={setemail} jobid={jobid} setjobid={setjobid} applyjob={applyjob}/>
          </div>
      )}
    </div>
  );
}
export default App;