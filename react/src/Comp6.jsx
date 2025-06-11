//useRef
 
import React,{useEffect,useState,useRef} from "react";

function Comp6(){
    

    const ref=useRef(0);

    useEffect(()=>{
        console.log("comp rendered");
    })

    function handle(){
       ref.currnet=ref.current+1;
       console.log(ref.current);
    }

    return(
        <button onClick={handle}>
            click me!
        </button>
    )

}
export default Comp6;