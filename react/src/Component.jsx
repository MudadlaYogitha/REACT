//useState hook

import React, { useState } from 'react';

function Component() {
  const [name, setName] = useState(""); 
  const [age,setAge]=useState(0);
  const [isemp,setEmp]=useState(false);
  const updateName = () => {
    setName("Yogitha");
  };
  
  const Inc=()=>{
    setAge(age+1);
  }
  const toggleemp=()=>{
    setEmp(!isemp);
  }

  return (
    <div>
      <p>Name: {name}</p>
      <p>Age:{age}</p>
      <p>Employed:{isemp?"Yes":"No"}</p>
      <button onClick={updateName}>Set Name</button>
       <button onClick={Inc}>Set Age</button>
       <button onClick={toggleemp}>Employ</button>
    </div>
  );
}

export default Component;
