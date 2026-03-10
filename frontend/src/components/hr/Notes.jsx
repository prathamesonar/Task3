import React,{useState} from "react";
function Notes({show,status,onclose,onsave}){
  const [note,setnote] =useState("");
  if(!show) return null;
  return(
    <div style={{position:"fixed", top:0, left:0, width:"100%", height:"100%", backgroundColor:"white", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <div style={{backgroundColor:"white",padding:"20px",borderRadius:"6px",width:"300px"}}>
        <h3>Update Status</h3>
        <p>Stage: {status}</p>
        <textarea placeholder="Add note" value={note} onChange={(e)=>setnote(e.target.value)} style={{width:"100%",height:"80px"}}/>
        <div style={{marginTop:"4px"}}>
          <button onClick={()=>onsave(note)}>Save</button>
          <button onClick={onclose} style={{marginLeft:"10px"}}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default Notes;