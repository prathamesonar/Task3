import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HRdashboard from "./components/hr/HRdashboard";
import Applicantdashboard from "./components/applicant/Applicantdashboard";

function App() {
  const [mode, setmode] = useState("");
  const [jobs, setjobs] = useState([]);
  const [applications, setapplications] = useState([]);

  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [jobid, setjobid] = useState("");
  const [question, setquestion] = useState("");
  const [correctanswer, setcorrectanswer] = useState("");
  const [answer, setanswer] = useState("");

  const [currentsalary, setcurrentsalary] =useState("");
  const [expected, setexpected] =useState("");
  const [phone, setphone] =useState("");
  const [experience, setexperience] =useState("");
  const [noticeperiod, setnoticeperiod] =useState("");

  useEffect(() => {
    if (mode) {
      fetch("http://localhost:5256/api/jobs").then(res => res.json()).then(data => setjobs(data));
      fetch("http://localhost:5256/api/applications").then(res => res.json()).then(data => setapplications(data));
    }
  }, [mode]);

  const createjob = () => {
    if (!title || !description || !question || !correctanswer) {
      alert("Fill all fields before creating a job");
      return;
    }
    fetch("http://localhost:5256/api/jobs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, description, question, correctanswer })
    }).then(() => {
      alert("job created");
      settitle("");
      setdescription("");
      setquestion("");
      setcorrectanswer("");
      fetch("http://localhost:5256/api/jobs").then(res => res.json()).then(data => setjobs(data));
    });
  };

  const applyjob = () => {
    if (!name || !email || !jobid || !answer|| !currentsalary|| !expected || !phone || !experience || !noticeperiod) {
      alert("Fill all fields before applying.");
      return;
    }
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!valid.test(email)) {
      alert("Please enter a valid email");
      return;
    }
    fetch("http://localhost:5256/api/applications", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        applicantName: name,
        email: email,
        jobId: parseInt(jobid),
        answer: answer, 
        currentsalary: currentsalary,
        expected: expected,
        phone: phone,
        experience: experience,
        noticeperiod: noticeperiod
      })
    }).then(res => {
      if (res.ok) {
        alert("Thank you " + name + "! Your application has been submitted.");
        fetch("http://localhost:5256/api/applications").then(res => res.json()).then(data => setapplications(data));
      } else {
        alert("already applied");
      }
    });
  };

  function updatestatus(id, status){
    fetch(`http://localhost:5256/api/applications/${id}/status`,{
      method:"PUT",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(status)
    })
    .then(()=>{
      fetch("http://localhost:5256/api/applications")
      .then(res=>res.json())
      .then(data=>setapplications(data));
    });
  }

  return (
    <div>
      <Header setmode={setmode} />
      {!mode && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "50px" }}>
          <div style={{ display: "flex", gap: "30px", padding: "20px", border: "2px solid blue", borderRadius: "6px", backgroundColor: "violet", flexDirection: "column" }}>
            <button onClick={() => setmode("hr")} style={{ padding: "8px 16px", backgroundColor: "blue", color: "white", border: "none", borderRadius: "4px" }}>HR</button>
            <button onClick={() => setmode("user")} style={{ padding: "8px 16px", backgroundColor: "green", color: "white", border: "none", borderRadius: "4px" }}>Applicant</button>
            {
              <h1 style={{ margin: "20px", color: "white" }}>
                Welcome to HR Portal
              </h1>
            }
          </div>
        </div>
      )}

      {mode === "hr" && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <HRdashboard title={title} settitle={settitle} description={description} setdescription={setdescription} createjob={createjob} jobs={jobs} applications={applications} setquestion={setquestion} correctanswer={correctanswer} setcorrectanswer={setcorrectanswer} question={question} answer={answer} currentsalary={currentsalary} setcurrentsalary={setcurrentsalary} expected={expected} setexpected={setexpected} phone={phone} setphone={setphone} experience={experience} setexperience={setexperience} noticeperiod={noticeperiod} setnoticeperiod={setnoticeperiod} updatestatus={updatestatus}/>
        </div>
      )}
      {mode === "user" && (
        <div style={{ display: "flex", justifyContent: "center", marginTop: "40px" }}>
          <Applicantdashboard jobs={jobs} applications={applications} name={name} setname={setname} email={email} setemail={setemail} jobid={jobid} setjobid={setjobid} applyjob={applyjob} answer={answer} setanswer={setanswer} question={question}   currentsalary={currentsalary} setcurrentsalary={setcurrentsalary} expected={expected} setexpected={setexpected} phone={phone} setphone={setphone} experience={experience} setexperience={setexperience} noticeperiod={noticeperiod} setnoticeperiod={setnoticeperiod}/>
        </div>
      )}
    </div>
  );
}
export default App;