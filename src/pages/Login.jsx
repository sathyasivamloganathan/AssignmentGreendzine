import { useState } from 'react';
import '../App.css'
import { useNavigate } from 'react-router-dom'
import { loginData } from '../data/EmployeeData';

const Login = () => {
  const[email, setEmail] = useState('')
  const[password, setPassword] = useState('')

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = loginData.find((emp) => emp.email === email);

    if(!email || !password){
      alert('Email and Password is required')
    }

    if(user && user.password===password){
      navigate('/homepage')
    }
    else{
      alert('Wrong Password')
    }
    
  }

  return (
    <div>
        <img src="../../public/assests/Group 3.png" alt="login_img" width={"90px"} height={"90px"} style={{marginTop: "160px"}} className="mx-auto d-flex justify-center items-center"/>
        <p className="subtext text-center">#We are Electric</p>

        <form onSubmit={handleSubmit}>
          <input placeholder='E-mail' type='email' value={email} onChange={(e) => setEmail(e.target.value)} className='Button bg-gray w-70 text-white h-12 rounded-full px-6 flex justify-center items-center m-auto mt-[60px]'/>
          <input placeholder='Password' type='password' value={password} onChange={(e) => setPassword(e.target.value)} className='bg-gray text-white w-70 h-12 rounded-full px-6 flex justify-center items-center m-auto mt-[25px]'/>
          <button type='submit' className='bg-[#00FF2580] text-white w-[14rem] h-12 rounded-full flex justify-center items-center m-auto mt-[47px]'>Login</button>
        </form>
        <p className='text-[#36A546] text-center mt-[26px]'>Forget Password?</p>
    </div>
  )
}

export default Login