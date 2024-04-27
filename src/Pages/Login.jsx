import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import login from "../Lotties/login.json"
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
const Login = () => {
    const {signIn,googleLogin,githubLogin}=useContext(AuthContext)
    const navigate =useNavigate();
    const location=useLocation();
    const handleLogin=(e) => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const email=form.get('email');
        const password=form.get('password');
        signIn(email,password)
        .then( (res)=>
    {
        alert("Successfully logged in")
        navigate(location?.state? location.state : '/')
    })
        .catch(()=>{
            alert('Invalid Credentials')
        })
    };
    return (
        <div className="">
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold  font-kristi">Login now!</h1>
      <p className="py-6 text-xl font-serif">Welcome back to CraftGlow! Log in now to access your personalized craft  and stay updated on the latest paper and glass art projects.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
        <p className="text-center text-xl font-semibold py-2 font-kristi">WELCOME BACK !</p>
        <div className="size-full lg:size-40 mx-auto"><Lottie animationData={login} loop={true} /></div>
      <form  className="card-body my-0 py-0" onSubmit={handleLogin}>

        <div className="form-control">
          <label className="label">
            <span className="label-text font-kristi">Email</span>
          </label>
          <input type="email" placeholder="Email" name="email" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-kristi">Password</span>
          </label>
          <div className="relative">
          <input type="password"  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          
          </div>
          
          

        </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn border-0 btn-accent font-kristi">Login</button>
        </div>
      </form>
      
      <p className="text-center text-xl font-bold font-kristi">OR</p>
      <div className=" flex flex-col px-8 py-2 gap-2">
        <button onClick={()=>githubLogin()
        .then(()=>{
            alert("Successfully logged in")
            navigate(location?.state? location.state : '/')})}  className="btn bg-info border-0"><FaGithub className="text-3xl text-white" /> <span className="lg:text-xl  text-white font-semibold">Continue with Github</span>
        </button>
        <button onClick={()=>googleLogin()
        .then(()=>{
            alert("Successfully logged in")
            navigate(location?.state? location.state : '/')})}  className="btn"><FcGoogle className="text-3xl" /><span className="lg:text-xl font-semibold">Continue with Google</span></button>
      </div>
      <p className="pl-8 pb-4">Do not have an account ? <span className="link text-info font-semibold"><Link to={'/register'}>Register</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Login;