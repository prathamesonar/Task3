import React,{useState,useEffect} from "react";

function App() {
  const [mode,setmode] =useState("");
  const [jobs,setjobs] =useState([]);

  const [title,settitle] =useState("");
  const [description,setdescription] =useState("");
  const [name,setname] =useState("");
  const [email,setemail] =useState("");
  const [jobid,setjobid] =useState("");
  const [applications, setapplications] = useState([]);

  useEffect(()=>{
    if(mode==="user" || mode==="hr"){
      fetch("http://localhost:5256/api/jobs").then(res=>res.json()).then(data=>setjobs(data));
      fetch("http://localhost:5256/api/applications").then(res=>res.json()).then(data=>setapplications(data));
    }
    
  },[mode]);

  const createjob =()=>{
    if (!title || !description) {
      alert("fill all fields before creating a job.");
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

  const applyjob =()=>{
    if(!name || !email || !jobid){
      alert(" Fill all fields before applying.");
      return;
    }
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
        alert("Thank you " + name + "! Your application has been submitted.");
        fetch("http://localhost:5256/api/applications").then(res=>res.json()).then(data=>setapplications(data));
      } else {
        alert("already applied");
      }
    });
  };

  if(!mode){
    return(
      <div  style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: "30px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
        <button onClick={()=>setmode("hr")} style={{padding: "8px 16px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px",}}>HR</button>
        <button onClick={()=>setmode("user")} style={{ padding: "8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px",}}>Applicant</button>
      </div>
    );
  }

  if(mode==="hr"){
    return(
      <div style={{display: "flex",flexDirection: "row"}}>
      <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "30px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
        <h2>Create</h2>
        <input placeholder="title" value={title} onChange={e=>settitle(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
        <input placeholder="description" value={description} onChange={e=>setdescription(e.target.value)}  style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
        <button onClick={createjob} style={{ padding: "10px", width: "100%", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px"}}>Post Job</button>
      </div>

      <div style={{ border: "2px solid blue",borderRadius: "6px", padding: "15px",backgroundColor: "white",width: "250px"}}>
        <h3>Created Jobs</h3>
        {jobs.map(j=>(
          <div key={j.id}>
            <p>{j.id}</p>
            <p>{j.title}</p>
            <p>{j.description}</p> 
          </div>
        ))}
      </div>

      <div style={{borderRadius: "6px",border: "2px solid blue",padding: "15px",backgroundColor: "white",width: "250px"}}>
        <h3>Applicants</h3>
        {applications.map(a=>(
          <div key={a.id}>
            <p>Name: {a.applicantName}</p>
            <p>Email: {a.email}</p>
            <p>JobId: {a.jobId}</p>
          </div>
        ))}
      </div>
    </div>
    );
  }

  return (
    <div style={{display: "flex",flexDirection: "row",alignItems: "center",gap: "10px"}}>
      <div style={{ border: "2px solid blue", borderRadius: "6px", padding: "15px", backgroundColor: "white", width: "300px"}}>
      <h2>Available Jobs</h2>
        {jobs.map(j=>(
          <div key={j.id}>
            <p>id:{j.id}</p>
            <p>title: {j.title}</p>
            <p>description: {j.description}</p>
            <hr/>
          </div>
        ))}
      </div>
      <div style={{display: "flex",flexDirection: "column",alignItems: "center",gap: "10px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "white", padding:"20px"}}>
      <h3>Apply For Job</h3>
      <input placeholder="name" value={name} onChange={e=>setname(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <input placeholder="mail" value={email} onChange={e=>setemail(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <input placeholder="job id" value={jobid} onChange={e=>setjobid(e.target.value)} style={{width: "100%",padding: "8px",border: "1px solid black",borderRadius: "4px"}}/>
      <button onClick={applyjob} style={{ padding: "8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px"}}>Apply</button>
      </div>

      <div style={{border: "2px solid blue",borderRadius: "6px",padding: "15px",backgroundColor: "white",width: "300px"}}>
       <h3>My Applied Jobs</h3>
       {applications
        .filter(a=>a.email === email)
        .map(a=>{
          const job =jobs.find(j => j.id === a.jobId);
          return (
            <div key={a.id}>
              {job && <p>Job: {job.title}</p>}
              <hr />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;