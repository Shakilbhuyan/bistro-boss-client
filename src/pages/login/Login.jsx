import React, { useContext, useEffect, useState } from 'react';
import img from '../../assets/others/authentication1.png';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import { useRef } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { Link } from 'react-router-dom';

const Login = () => {
     const capchaRef = useRef(null);
     const [disable, setDisable] = useState(true);
     const {signIn} = useContext(AuthContext);
    //  captcha generator
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[]);
// validation captcha
    const handleValidate = () =>{
               const user_captcha_value = capchaRef.current.value;
               if(validateCaptcha(user_captcha_value)){
                     setDisable(false)
               }
               else{
                setDisable(true)
               }
    }
// firebase login
    const handleLogin = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
        .then(result =>{
            const loggedUser = result.user;
            console.log(loggedUser);
        })
    }
    return (
        <div className="hero min-h-screen bg-[rgba(0, 0, 0, 0.25)]">
            <div className="hero-content flex-col lg:flex-row items-center">
                <div className="text-center md:w-1/2 ">
                    <h1 className="text-5xl font-bold mb-4">Login now!</h1>
                    <img src={img} alt="" />
                </div>
                <div className="card  md:w-1/2 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email"  name='email' placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                            <LoadCanvasTemplate />
                            </label>
                            <input type="text" ref={capchaRef} name='captcha' placeholder="captcha" className="input input-bordered" />
                            <button onClick={handleValidate} className='btn btn-outline btn-xs mt-2'>Validate</button>
                        </div>
                        <div className="form-control mt-6">
                           <input disabled={disable} className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </form>
                    <small className='mb-4 ml-2'>New Here ? <Link to="/signup">Create Account</Link></small>
                </div>
            </div>
        </div>
    );
};

export default Login;