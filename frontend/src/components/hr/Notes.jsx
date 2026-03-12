import React,{useState} from "react";
function Notes({show,status,onclose,onsave}){
  const [note,setnote] =useState("");
  if(!show) return null;  
  return(
    <div style={{ position: "fixed", top: 0, left: 0, width: "100%", height: "100%", backgroundColor: "rgba(0, 0, 0, 0.5)", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ backgroundColor: "white", padding: "10px", borderRadius: "6px", width: "180px" }}>
        <h4 style={{ marginTop: 0, marginBottom: "5px", fontSize: "14px" }}>Update Status</h4>
        <p style={{ fontSize: "12px", marginBottom: "5px" }}>Stage: {status}</p>
        <textarea placeholder="Add note" value={note} onChange={(e) => setnote(e.target.value)} style={{ width: "100%", height: "35px", fontSize: "12px" }} />
        <div style={{marginTop:"4px"}}>
        <button onClick={()=>onsave(note)}>Save</button>
          <button onClick={onclose} style={{marginLeft:"10px"}}>Cancel</button>
        </div>
      </div>
    </div>
  );
}
export default Notes;