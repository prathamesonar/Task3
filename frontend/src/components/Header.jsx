import React from "react";
import images from "../assets/images.png"
function Header({setmode}){
  return(
    <div style={{position: "sticky",top:"0",width: "100%",padding: "10px",backgroundColor: "#1E297B",display: "flex",justifyContent: "left"}}>
      <img src={images} alt="Logo" style={{height:"70px", width:"300px"}} onClick={()=>setmode("")}/>
    </div>
  );
}
export default Header;