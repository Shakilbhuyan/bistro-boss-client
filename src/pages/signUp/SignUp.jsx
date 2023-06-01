import React from 'react';
import img from '../../assets/others/authentication2.png'
import { Link } from 'react-router-dom';

const SignUp = () => {
    return (
        <div class="hero min-h-screen bg-[rgba(0, 0, 0, 0.25)]">
  <div class="hero-content flex-col lg:flex-row items-center">
  <div className="text-center md:w-1/2 ">
                    <h1 className="text-5xl font-bold mb-4">Sign Up!</h1>
                    <img src={img} alt="" />
                </div>
    <div class="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
      <form class="card-body">
        <div class="form-control">
          <label class="label">
            <span class="label-text">Name</span>
          </label>
          <input type="text"  name='name' placeholder="Name" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Email</span>
          </label>
          <input type="email"  name='email' placeholder="email" class="input input-bordered" />
        </div>
        <div class="form-control">
          <label class="label">
            <span class="label-text">Password</span>
          </label>
          <input type="password" name='password' placeholder="password" class="input input-bordered" />
          
        </div>
        <div class="form-control mt-6">
          <input className='btn btn-primary' type="submit" value="Sign Up" />
        </div>
      </form>
      <small className='mb-4 ml-2'>Already have an Account ? <Link to="/login">please Login</Link></small>
    </div>
  </div>
</div>
    );
};

export default SignUp;