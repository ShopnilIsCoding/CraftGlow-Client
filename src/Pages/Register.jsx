import { useState } from "react";
import { Link } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
const Register = () => {
    const[visible,setVisible]=useState(false);
    return (
        <div className="">
          
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-primary">Register now!</h1>
      <p className="py-6 text-xl">Unlock the world of exquisite crafts at <span className="font-bold bg-gradient-to-r from-orange-500 via-violet-500 to-rose-500 text-transparent bg-clip-text bg-300% animate-gradient">CraftGlow</span>. Register now for exclusive access to premium projects and personalized recommendations.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
      <form  className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo</span>
          </label>
          <input type="text" placeholder="Your Photo URL" name="photo" className="input input-bordered"  />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <div className="relative">
          <input type={visible? "text":"password"}  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          <span className="absolute text-xl  right-1 top-[50%] -translate-y-[50%] cursor-pointer" onClick={()=>{setVisible(!visible)}}>{visible? <IoIosEyeOff /> : <IoEye />}</span>
          </div>

        </div>
        <div className="mt-1">
            
            <p>By continuing you agree to <span className="font-bold bg-gradient-to-r from-orange-500 via-violet-500 to-rose-500 text-transparent bg-clip-text bg-300% animate-gradient">CraftGlow</span> Terms of Service.</p>
          </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn btn-primary">Register</button>
        </div>
      </form>
      <p className="pl-8 pb-4">Already have an account ? <span className="link text-primary font-semibold"><Link to={'/login'}>Login</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;