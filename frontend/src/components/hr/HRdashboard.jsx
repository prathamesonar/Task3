import React from "react";
import Createjob from "./Createjob";
import Joblist from "./Joblist";
import Applicantlist from "./Applicantlist";
function HRdashboard(props){
  return(
    <div style={{display: "flex", gap: "20px"}}>
      <Createjob {...props}/>
      <Joblist jobs={props.jobs}/>
      <Applicantlist applications={props.applications}/>
    </div>
  );
}
export default HRdashboard;