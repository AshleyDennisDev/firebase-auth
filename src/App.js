import { useState, useEffect } from 'react';
import {Routes, Route} from 'react-router-dom';
import Login from './scenes/Login';
import Signup from './scenes/Signup';
import Welcome from './scenes/Welcome';

function App() {
  const [ user, setUser] = useState();
  
  useEffect(() => {
    console.log('here is my useEffect', user)
  }, [])

  return (
    <Routes>
            <Route path='/login' element={<Login setUser={setUser} user={user} />}></Route>
            <Route path='/signup' element={<Signup setUser={setUser} />}></Route>
            <Route path='/' element={user 
              // ? <Welcome user={user} setUser={setUser}/> 
              ? <Welcome user={user} /> 
              : <Login setUser={setUser} />}>
              </Route>

    </Routes>
  );
}

export default App;
