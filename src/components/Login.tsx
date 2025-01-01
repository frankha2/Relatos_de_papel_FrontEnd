import { useState } from 'react'

import '../styles/login.css'

import { InputText } from 'primereact/inputtext';
import { Button } from 'primereact/button';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = useState('user');
  const [passWord, setpassWord] = useState('123');

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
        <Link to={'/home'}>
          <Button label="Login" />
        </Link>
      </div>
    </div>

    </>

)
}

export default Login
