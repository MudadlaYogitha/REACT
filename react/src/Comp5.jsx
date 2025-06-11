//useEffect()

import React,{useEffect,useState} from "react";
function Comp5(){
    const [count,setCount]=useState(0);
    const [color,setcolor]=useState("green");
    //every time the count changes,the title also changes
    //even without use effect same function happens but using it code is organized,and also can say the when it renders,mounts etc
    useEffect(()=>{
        document.title='Count: ${count} ${color}';
    },[count,color]//if we use [] it happens only once
    );
    function addcnt(){
        setCount(c=>c+1);
    }
     function subcnt(){
        setCount(c=>c-1);
    }
    function chng(){
        setcolor(c=>c==='green'?"red":"green");
    }
    return(
        <>
        <p style={{color: color}}>Count:{count}</p>
        <button className="abt" onClick={addcnt}>Add</button>
        <button className="abt" onClick={subcnt}>Sub</button><br/>
        <button className="abt" onClick={chng}>Change Color</button>
        </>
    )

}
export default Comp5;