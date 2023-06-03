import React, { useContext } from 'react';
import img from '../../assets/others/authentication2.png'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import Swal from 'sweetalert2';



const SignUp = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const {createUser, updateUserProfile} = useContext(AuthContext);
  const navigate = useNavigate();
  const onSubmit = data => {
    createUser(data.email, data.password)
    .then(result =>{
      const loggedUser = result.user;
      console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
      .then(()=>{
              console.log("Profile updated")
              reset();
              Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Profile Updated',
                showConfirmButton: false,
                timer: 1500
              });
              navigate('/')
      })
      .catch(error => console.log(error))
    })
  };
 
  return (
   <>
   <Helmet>
    <title>Bistro Boss | Sign Up</title>
   </Helmet>
    <div className="hero min-h-screen bg-[rgba(0, 0, 0, 0.25)]">
      <div className="hero-content flex-col lg:flex-row items-center">
        <div className="text-center md:w-1/2 ">
          <h1 className="text-5xl font-bold mb-4">Sign Up!</h1>
          <img src={img} alt="" />
        </div>
        <div className="card md:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSubmit(onSubmit)} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
              {errors.name && <span className='text-red-600'>Please input Name</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input type="text" {...register("photoURL", { required: true })}  placeholder="Photo URL" className="input input-bordered" />
              {errors.photoURL && <span className='text-red-600'>Please input Name</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" {...register("email", {required: true})} name='email' placeholder="email" className="input input-bordered" />
              {errors.email && <span className='text-red-600'>Please input Email</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" {...register("password", {required: true, minLength: 6, maxLength: 20 , pattern:/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/})} name='password' placeholder="password" className="input input-bordered" />
              {errors.password?.type === "required" && <span className='text-red-600'>Please input Password</span>}
              {errors.password?.type === "minLength" && <span className='text-red-600'>Password Must Be 6 Character</span>}
              {errors.password?.type === "maxLength" && <span className='text-red-600'>Password Must Under 20 Character</span>}
              {errors.password?.type === "pattern" && <span className='text-red-600'>Password Must Have One uppercase, One Lowercase, one Number and One Spacial Character</span>}
            </div>
            <div className="form-control mt-6">
              <input className='btn btn-primary' type="submit" value="Sign Up" />
            </div>
          </form>
          <small className='mb-4 ml-2'>Already have an Account ? <Link to="/login">please Login</Link></small>
        </div>
      </div>
    </div>
   </>
  );
};

export default SignUp;