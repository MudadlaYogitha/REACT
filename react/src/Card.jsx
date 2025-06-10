import pic from "./assets/logo.png";
function Card(){
      return(
        <div className="card">
              <img className="card-image"src={pic}alt="profile"></img>
              <h2 className="card-title">Yogitha</h2>
              <p className="card-text">i am student of ece!</p>
        </div>
      );
}
export default Card