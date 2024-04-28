import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IoEye } from "react-icons/io5";
import { IoIosEyeOff } from "react-icons/io";
import { AuthContext } from "../Providers/AuthProvider";
import Lottie from "lottie-react";
import register from "../Lotties/register.json"
import loadingAnim from "../Lotties/loading.json"
import Swal from "sweetalert2";
const Register = () => {
    const[visible,setVisible]=useState(false);
    const {createUser,updateUserProfile,loading} =useContext(AuthContext);
    const navigate=useNavigate();
    const handleRegister=(e)=>
    {
        e.preventDefault();
        const form = new FormData(e.currentTarget)
        const email=form.get('email');
        const password=form.get('password');
        const name=form.get('name');
        const photo=form.get('photo');
        const newUser={email,password,name,photo};
        console.log(newUser);
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
        if (!passwordRegex.test(password)) {
            alert('Password must be at least 6 characters and contain at least one uppercase and one lowercase letter.');
            return;
          }

          createUser(email,password)
        .then(res=>{console.log(res.user)
          updateUserProfile(name,photo)
          .then(()=>{
            window.location.reload();
            Swal.fire({
              title: "Greetings!",
              text: "Successfully Registered!",
              icon: "success"
            });
             
             

          })
          navigate('/');
           
        })
        .catch(err=>{console.error(err)})
    }
    return (
        <div className="">
          
            <div className="hero min-h-[90vh] bg-svg-background">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    <div className="size-full lg:size-96 "><Lottie animationData={register} loop={true} /></div>
      <h1 className="text-5xl font-bold  font-kristi">Register now!</h1>
      <p className="py-6 text-xl font-serif">Unlock the world of exquisite crafts at <span className="font-bold bg-gradient-to-r from-orange-500 via-violet-500 to-rose-500 text-transparent bg-clip-text bg-300% animate-gradient font-kristi">CraftGlow</span>. Register now for exclusive access to premium projects and personalized recommendations.</p>
    </div>
    <div className="card shrink-0 w-full max-w-sm shadow-2xl ">
      <form  className="card-body" onSubmit={handleRegister}>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-kristi">Name</span>
          </label>
          <input type="text" placeholder="Your Name" name="name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text font-kristi">Photo</span>
          </label>
          <input type="text" placeholder="Your Photo URL" name="photo" className="input input-bordered"  />
        </div>
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
          <input type={visible? "text":"password"}  name="password" placeholder="Password" className="input input-bordered w-full" required />
          
          <span className="absolute text-xl  right-1 top-[50%] -translate-y-[50%] cursor-pointer" onClick={()=>{setVisible(!visible)}}>{visible? <IoIosEyeOff /> : <IoEye />}</span>
          </div>

        </div>
        <div className="mt-1 font-serif">
            
            <p>By continuing you agree to <span className="font-bold bg-gradient-to-r from-orange-500 via-violet-500 to-rose-500 text-transparent bg-clip-text bg-300% animate-gradient font-kristi">CraftGlow</span> Terms of Service.</p>
          </div>
        <div className="form-control mt-1">
          <button type="submit" className="btn btn-accent font-kristi">Register</button>
        </div>
      </form>
      <p className="pl-8 pb-4 font-serif">Already have an account ? <span className="link text-primary font-semibold"><Link to={'/login'}>Login</Link></span></p>
    </div>
  </div>
</div>
        </div>
    );
};

export default Register;