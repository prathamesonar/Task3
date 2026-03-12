import React from "react";
import Joblist from "./Joblist";
import Applyjob from "./Applyjob";
import Myapplication from "./Myapplication";
function Applicantdashboard(props) {
  return(
    <div style={{display:"flex",gap:"20px"}}>
      <Joblist jobs={props.jobs}/>
      <Applyjob {...props}/>
      <Myapplication {...props}/>
    </div>
  );
}
export default Applicantdashboard;