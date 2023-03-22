import {useState} from 'react'
import {auth,provider,google} from './firebase'
import { signInWithPopup} from 'firebase/auth'

function App() {
  const handleLogin=()=>{
    signInWithPopup(auth,provider).then((result)=>{
      console.log(result);
    }).catch((err)=>{
        console.log(err);
    })

  }
  const handle=()=>{
    signInWithPopup(auth,google).then((result)=>{
      console.log(result);
    }).catch((err)=>{
      console.log(err);
  })
  }
  const [user,setUser]=useState(null)
  return (
    <div className="App">
      <button onClick={handleLogin}>Login</button>
      <button onClick={handle}>Lon</button>
    </div>
  );
}

export default App;
