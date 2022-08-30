import { useState, useEffect } from "react";  
import {Routes, Route} from 'react-router-dom';
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import NavBar from "./NavBar";


function App() {

  const [user, setUser] = useState(null);
  const [errors, setErrors]= useState([]);

  useEffect(() => {
    fetch('/api/me').then((r) => {
      if (r.ok) {
        r.json().then((user) => {setUser(user)
        });
      } else{ 
       r.json().then((error) => setErrors(error.errors))
      }
    })
  }, []);

  if(!user) return <Login onLogin={setUser} />;


  return (
    <div className="App">
      <NavBar user={user} setUser={setUser} />
      <Routes>
       
        <Route exact path="/" element={<HomePage user={user} setUser={setUser}/>}></Route>
      </Routes>


      
    </div>
  );
}

export default App;