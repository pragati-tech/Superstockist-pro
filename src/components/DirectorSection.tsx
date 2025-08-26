import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

import { useState, useEffect } from "react";

const DirectorPage=()=>{
    return(
         <div style={{width:"100%", height:"100vh", backgroundColor:"green"}}>
            <Navigation />

            <div id="directors" className="w-100 flex justify-between align-center px-40">
            <div style={{width:"45%", padding:"10px", margin:"auto", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
            <div style={{width:"40vh", height:"40vh", backgroundColor:"blue", borderRadius:"50%", margin:"auto"}} className="circle">
            <div style={{width:"50vh", height:"50vh", backgroundColor:"black"}} className="para">
                
            </div>
            </div>
            </div>
            <div style={{backgroundColor:"red", width:"45%"}}   >
        fhghrfh     
            </div>
            </div>
         </div>
    )
}

export default DirectorPage;