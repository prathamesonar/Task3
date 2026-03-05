import React from "react";
function Applicantlist({applications}){
  return(
    <div style={{borderRadius: "6px",textAlign:"center",border: "2px solid blue",padding: "15px",backgroundColor: "white",width: "250px"}}>
      <h3>Applicants</h3>
      {applications.map(a=>(
        <div key={a.id} style={{border: "1px solid black", marginBottom: "3px", borderRadius: "4px"}}>
          <p>Name: {a.applicantName}</p>
          <p>Email: {a.email}</p>
          <p>Answer: {a.answer}</p>
        </div>
      ))}
    </div>
  );
}
export default Applicantlist;