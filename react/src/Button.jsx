function Button(){
   const handleClick=()=>console.log("ouch");
   return <button className="button" onClick={handleClick}>Click me 😊</button>
}
export default Button