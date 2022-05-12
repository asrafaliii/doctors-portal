import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from "react-hook-form";

const Login = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    
    if(user) {
        console.log(user);
    }

    const onSubmit = data => console.log(data);
    
    return (
        <div className='flex h-screen justify-center items-center'>
            <div class="card w-96 bg-base-100 shadow-xl">
  <div class="card-body">
    <h2 class="text-center text-2xl font-bold">Login</h2>

    <form onSubmit={handleSubmit(onSubmit)}>

    <div class="form-control w-full max-w-xs">
  <label class="label">
    <span class="label-text">Email</span>
    
  </label>
  <input type="Email" placeholder="Your Email" 
  class="input input-bordered w-full max-w-xs" 
  {...register("email", {
    pattern: {
      value: /[A-Za-z]{3}/,
      message: 'error message' 
    }
  })}
  />
  <label class="label">
    <span class="label-text-alt">Alt label</span>
    
  </label>
</div>


      <input  />
      {errors.firstName?.type === 'required' && "First name is required"}
      
      <input {...register("lastName", { required: true })} />
      {errors.lastName && "Last name is required"}
      
      <input type="submit" />
    </form>


    <div class="divider">OR</div>
    <button 
    onClick={() => signInWithGoogle()}
    class="btn btn-outline"
    >CONTINUE WITH GOOGLE</button>
    
  </div>
</div>
        </div>
    );
};

export default Login;