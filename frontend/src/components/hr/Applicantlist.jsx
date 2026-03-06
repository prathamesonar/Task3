import React, {useState} from "react";
function Applicantlist({applications}){
  const [selected, setselected] = useState(null);
  return(
    <div style={{borderRadius: "6px",textAlign:"center",border: "2px solid blue",padding: "15px",backgroundColor: "white",width: "250px"}}>
      <h3>Applicants</h3>
      {applications.map(a=>(
        <div key={a.id} style={{color:"white",border: "1px solid black", marginBottom: "3px", borderRadius: "4px", backgroundColor: a.status==="Shortlisted" ? "green" : "red", textColor:"white"}}>
          <p onClick={()=>setselected(a.id)}>Name: {a.applicantName}</p>
          {selected ===a.id &&(
          <div>
          <p>Status: {a.status}</p>
          <p>Email: {a.email}</p>
          <p>Answer: {a.answer}</p>
          <p>Current salary: {a.currentsalary} INR</p>
          <p>Expected salary: {a.expected} INR</p>
          <p>Phone: {a.phone}</p>
          <p>Experience: {a.experience} yrs</p>
          <p>Notice period: {a.noticeperiod} days</p>
          </div>
          )}
        </div>
      ))}
    </div>
  );
}
export default Applicantlist;