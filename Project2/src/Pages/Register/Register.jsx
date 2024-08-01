import React, { useState } from 'react'
import "./Register.scss";
import axios from "axios";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
const Register = () => {
  const navigate = useNavigate();
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
    name: "",
  })
  const [err, setErr] = useState(null);


  const handleChange = e => {
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }


  const handleClick = async e => {
    e.preventDefault()

    try {
      await axios.post("http://localhost:3000/api/auth/register", inputs)
      navigate("/Login");
    } catch (err) {
      setErr(err.response.data);
    }
    
  };







  return (
    <div> <div className='register'>
      <div className="card">
        <div className="left">
          <h1>Social Media.</h1>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's It has survived not only five centuries,
          </p>
          <span>Donyou have an account?</span>
          <Link to="/Login"><button>Login</button></Link>
               
        </div>
        <div className="right">

          <h1>Register</h1>


          <form>
            <input type="text" placeholder='Username' name='username' onChange={handleChange} />
            <input type="text" placeholder='email' name='email' onChange={handleChange} />
            <input type="password" placeholder='Password' name='password' onChange={handleChange} />
            <input type="name" placeholder='Name' name='name' onChange={handleChange} />
            {err && err}
            
            <button onClick={handleClick}>Register</button>
            




          </form>
        </div>
      </div>
    </div></div>
  )
}

export default Register