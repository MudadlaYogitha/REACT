//conditional rendering

function UserGreeting(props){
      if(props.isLoggedIn){
            return <h2 className="welcome">Welcome {props.username}</h2>
      }else{
        return <h2 className="login">please login</h2>
      }
} 
export default UserGreeting