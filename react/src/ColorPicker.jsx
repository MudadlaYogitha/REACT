import React,{useState} from "react";

function ColorPicker(){
    const [color,setColor]=useState("#FFFFFF");
    function handlecolor(event){
        setColor(event.target.value);
    }
    return(<div className="color-picker">
        <h1>Color Picker</h1>
        <div className="color-display" style={{backgroundColor:color}}>
            <p>Selected:{color}</p>
        </div>
        <label>select color:</label>
        <input type='color' value={color} onChange={handlecolor}/>

    </div>)

}
export default ColorPicker;