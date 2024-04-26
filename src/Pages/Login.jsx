import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../Lotties/login.json"
const Login = () => {
    return (
        <div className="">
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold text-primary">Login now!</h1>
      <p className="py-6 text-xl">Welcome back to CraftGlow! Log in now to access your personalized craft  and stay updated on the latest paper and glass art projects.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
        <p className="text-center text-xl font-semibold py-2 text-primary">WELCOME BACK !</p>
        <div className="size-40 mx-auto"><Lottie animationData={login} loop={true} /></div>
      <form  className="card-body my-0 py-0">

        <div className="form-control">
          <label className="label">
            <span className="label-text ">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text ">Password</span>
          </label>
          <div className="relative">
          <input type="password"  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          
          </div>
          
          

        </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn border-0 btn-secondary">Login</button>
        </div>
      </form>
      
      <p className="text-center text-xl font-bold">OR</p>
      <div className=" flex flex-col px-8 py-2 gap-2">
        <button  className="btn bg-info border-0"><FaGithub className="text-3xl text-white" /> <span className="text-xl text-white font-semibold">Continue with Github</span>
        </button>
        <button  className="btn"><FcGoogle className="text-3xl" /><span className="text-xl font-semibold">Continue with Google</span></button>
      </div>
      <p className="pl-8 pb-4">Do not have an account ? <span className="link text-primary font-semibold"><Link to={'/register'}>Register</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;