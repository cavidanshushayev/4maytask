import { useState } from "react";
import Welcome from "./Welcome";
import Loginin from "./Loginin";
import  { users} from "./users";
function App() {

  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});
  return (
    <>

      <div >
        {isLoggedIn ? <Welcome username={user}/> : <Loginin user={user}  setUser={setUser} setIsLoggedIn={setIsLoggedIn} users={users}/>  }
           </div>

    </>

  )
}

export default App;