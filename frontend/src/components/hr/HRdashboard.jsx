import React from "react";
import Createjob from "./Createjob";
import Joblist from "./Joblist";
import Applicantlist from "./Applicantlist";
import Stage from "./Stage";
function HRdashboard(props){
  return(
    <div>
      <div style={{display: "flex", gap: "20px"}}>
      <Createjob {...props}/>
      <Joblist jobs={props.jobs}/>
      <Applicantlist applications={props.applications} jobs={props.jobs} updatestatus={props.updatestatus}/>
      </div>
      <div style={{marginTop:"30px"}}>
      <Stage applications={props.applications}/>
      </div>
      </div>
  );
}
export default HRdashboard;