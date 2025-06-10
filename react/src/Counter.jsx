//hook

import React,{useState} from "react";
function Counter(){
   const [count,setCount]=useState(0);

   const inc=()=>{
    setCount(count+1);
   }

   const dec=()=>{
    setCount(count-1);
   }

   const reset=()=>{
    setCount(0);
   }

   return(
       <div className="counter">
         <p className="count">{count}</p>
         <button className="button" onClick={dec}>decrease</button>
         <button className="button" onClick={reset}>reset</button>
         <button className="button" onClick={inc}>increase</button>
       
       </div>
   );
}
export default Counter;