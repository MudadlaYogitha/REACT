//update states of objects

import React, { useState } from 'react';
function Component3(){
    const [car,setCar]=useState({year:2024,
                          make:"ford",
                          model:"mustang"});
    function hyear(event){

         setCar(c=>({...c,year:event.target.value}));
    }
    function hmake(event){
        setCar(c=>({...c,make:event.target.value}));
    }
    function hmodel(event){
        setCar(c=>({...c,model:event.target.value}));
    }
    return (<div>
        <p>fav Car is:{car.year} {car.make} {car.model}</p>
        <input type="number" value={car.year} onChange={hyear}/><br/>
        <input type="text" value={car.make} onChange={hmake}/><br/>
        <input type="text" value={car.model} onChange={hmodel}/><br/>
    </div>);
}
export default Component3