//onChange
import React, {useActionState, useState} from "react";

function Component2(){
     const [name,setName]=useState('guest');
     const [q,setQ]=useState(0);
     const [cmt,setcmt]=useState("");
     const [pay,setPay]=useState("");
     const [ship,setShip]=useState("");
     function handle(event){
        setName(event.target.value)
     }
     function qchn(event){
        setQ(event.target.value)
     }
     function cmtchn(event){
        setcmt(event.target.value);
     }
     function handlepay(event){
        setPay(event.target.value);
     }
     function ships(event){
        setShip(event.target.value);
     }
     return(<div>
        <input value={name} onChange={handle}/>
        <p>Name:{name}</p>
        <input value={q} onChange={qchn} type="number"/>
        <p>Quantity:{q}</p>
        <textarea value={cmt} onChange={cmtchn}
        placeholder="Enter delivery instructions"/>
        <p>comment:{cmt}</p>
        <select value={pay} onChange={handlepay}>
            <option value="">select</option>
            <option value='Visa'>Visa</option>
            <option value="mastercard">mastercard</option>
        </select>
        <p>payment:{pay}</p>

        <label>
            <input type="radio" value="pickup"
             checked={ship=='pickup'}
             onChange={ships}/>
            pick up
        </label>
        <label>
            <input type="radio" value="delivery"
             checked={ship=='delivery'}
             onChange={ships}/>
             delivery
        </label>
        <p>Ship:{ship}</p>
     </div>)
}
export default Component2;