import React from "react";
import images from "../assets/images.png"
function Header(){
  return(
    <div style={{position: "sticky",top:"0",width: "100%",padding: "10px",backgroundColor: "blue",display: "flex",justifyContent: "left"}}>
      <img src={images} alt="Logo" style={{height:"70px", width:"300px"}}/>
    </div>
  );
}
export default Header;