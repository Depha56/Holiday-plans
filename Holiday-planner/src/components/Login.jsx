import React from 'react'
import { Link } from 'react-router-dom'
import lo from '/lo.avif'
import{GrFacebookOption} from 'react-icons/gr'
import{FcGoogle} from 'react-icons/fc'
import {FaTimes} from 'react-icons/fa'
import '../styles/Login.css'
function Login() {
  return (
    <div className='login-wrapper'>
           <div className="login-page">

    
         <div className="login-form">
       <h1>Login</h1>
        <form action="" method="post">
        <p>Doesn't have account yet ? <Link to='/Signup' className='signs'>Signup</Link></p>
            <label htmlFor="email"> Email address</label>
            <input type="email"  placeholder='you@example.com'/>
            <div className='password-forgot'>
            <label htmlFor="password">password</label>
            <Link to='/Login' className='forget'>forgot password</Link>
            </div>
            <input type="password"  placeholder='password'/>
            <div className='check-box'>
            <input type="checkbox" className='check-box1' />remember me
            </div>
            
            <button  className='btn-login'><Link to='/admin/dashboard' className='lnk'>Login</Link></button>
             <p className='pLog'>-----------------------------or login with--------------------------</p>
             <div className="loginImages">
                <button className='google'><FcGoogle/><span> Google</span></button>
                <button className='facebook'><GrFacebookOption/> <span>Facebook</span></button>
             </div>
        </form>
        
    </div>
</div>
<div className="login-image">

    <div className="login-image-container">
    <Link to='/'className='lnk'>Back to Home
 </Link>
        <img src={lo} alt=""  />
    </div>
</div>
    </div>
  )
}

export default Login