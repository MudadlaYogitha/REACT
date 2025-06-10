import Header from './header.jsx'
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import Button from './Button.jsx';
import Student from './Student.jsx';
import List from './List.jsx';
import List2 from './List2.jsx';
import UserGreeting from './UserGreeting.jsx';
import Component from './Component.jsx';
import Counter from './Counter.jsx';
import Component2 from './Component2.jsx';
import ColorPicker from './ColorPicker.jsx';
import Counter2 from './Counter2.jsx';
import Component3 from './Component3.jsx';
import ToDo from './ToDo.jsx';

function App() {
     return(
      <div>
         <Header/>
         <Food></Food>
         <Card></Card>
         <Card/>
         <Button/>
         <Student name="Yogi" age={30} isStudent={true}/>
         <Student name="thilak" age={20} isStudent={true}/>
         <List/>
         <List2/>
         <UserGreeting isLoggedIn={true} username="Yogi"/>
         <Component/>
         <Component2/>
         <Component3/>
       
         <ColorPicker/>
         <Counter/>
         <Counter2/>
         <ToDo/>
         <Footer/>
         
      </div>
      
     );
}

export default App
