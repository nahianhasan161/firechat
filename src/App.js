
import './App.css';
import Chat from './components/Chat';
import Signin from './components/Signin';
import {auth} from './firebase'
//import firebase from 'firebase';
import { useAuthState } from 'react-firebase-hooks/auth';


function App() {
   const {User} = useAuthState(auth)
  
   console.log(User)
   //console.log(firebase.auth().currentUser)
  return (
    
    <div id="App">
    {  auth.currentUser ?  <Chat /> : <Signin />    }
    
   
      
    </div>
  );
}

export default App;
