import React, { useContext, useState } from 'react'
import "./Login.scss"
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
import { AuthContext } from '../../context/Authcontext';


const Login = () => {

  const [inputs, setInputs] = useState({
    username: "",
    password: ""
  })
  const [err, setErr] = useState(null);

 const navigate=useNavigate()
  const handleChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }
  const { login } = useContext(AuthContext);
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      await login(inputs);
      navigate("/");

    } catch (err) {
      setErr(err.response.data)
    }

  }

  return (
    <div className='login'>
      <div className="card">
        <div className="left">
          <h1>Welcome Back.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's It has survived not only five centuries,
          </p>
          <span>Don't you have an Account?</span>
          <Link to="/Register"><button>Register</button></Link>


        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            {err && err}
            <button onClick={handleLogin}>Login</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login