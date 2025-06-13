import React from 'react';
import { useState,useContext } from 'react';
import UserContext from '../Context/UserContext';

function Login() {

    const { setUser } = useContext(UserContext);
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const handleLogin = (e) => {
        e.preventDefault();
        
        setUser({
            username: username,
            password: password
        });
    };

  return (
    <div>
      <h2>Login</h2>
      <input 
            type="text" 
            value={username} 
            onChange={(e) => setUsername(e.target.value)} 
            placeholder='username' 
      />
      {" "}
      <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            placeholder='password' 
      />
        <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
