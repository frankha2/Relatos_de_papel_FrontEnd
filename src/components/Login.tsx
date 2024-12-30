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
    <div className='card flex flex-column align-items-center justify-content-center gap-3 h-screen'>
      
      <InputText value={user} onChange={(e) => setUser(e.target.value)} />
      
      <InputText value={passWord} onChange={(e) => setpassWord(e.target.value)} />

      <Link to={'/home'}>
        <Button label='Login'/>
      </Link>
     
    </div>
    </>

)
}

export default Login
