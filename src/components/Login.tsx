import { useState } from 'react'

import '../styles/login.css'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('user');
  const [passWord, setpassWord] = useState('123');

  const navigate = useNavigate();

  return (
    <>
     <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>
        <InputText
          value={user}
          onChange={(e) => setUser(e.target.value)}
          placeholder="Username"
        />
        <InputText
          type="password"
          value={passWord}
          onChange={(e) => setpassWord(e.target.value)}
          placeholder="Password"
        />
        <Button label="Login" onClick={() => {{ navigate('/home') }}}/>
      </div>
    </div>

    </>

)
}

export default Login
