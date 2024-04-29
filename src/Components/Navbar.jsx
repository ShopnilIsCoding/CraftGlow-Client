import { useContext, useEffect, useState } from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'
import { AuthContext } from '../Providers/AuthProvider';

const Navbar = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'coffee');
  const [isHovered, setIsHovered] = useState(false);
  const navigate=useNavigate();
  const {user,logOut,loading}=useContext(AuthContext);
  const [isChecked, setIsChecked] = useState(() => theme === 'valentine');

  const handleMouseEnter = () => {
    setIsHovered(true);
  };
  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleSignOut=()=>
  {
    setIsHovered(false)
    logOut() 
    .then(()=>{navigate('/')})
    .catch()

  }


  const handleToggle = e => {
    const selectedTheme = e.target.checked ? 'valentine' : 'coffee';
    setTheme(selectedTheme);
    setIsChecked(e.target.checked);
    localStorage.setItem('theme', selectedTheme);
  }

  useEffect(() => {
    document.querySelector('html').setAttribute('data-theme', theme);
  }, [theme])

  return (
    <div className='sticky z-50 top-0 '>
      <div className="navbar container mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
      <li><NavLink to={'/'} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>Home</NavLink></li>
      <li><NavLink to={'/all'} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>All Items</NavLink></li>
      {user?<li><NavLink to={'/add'} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>Add Item</NavLink></li>:<></>}
      
      {user && <li><NavLink to={`/${user.email}`} className={({ isActive}) =>
    isActive ? "border-b-2 border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400   font-semibold"
  }>My List</NavLink></li>} 

<label className='cursor-pointer grid place-items-center '>
          <input
            type='checkbox'
            onChange={handleToggle}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-1 row-start-1 stroke-error fill-stroke-error'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-2 row-start-1 stroke-warning fill-stroke-warning'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
      </ul>
    </div>
    <a className="btn btn-ghost md:text-2xl pl-0 lg:text-2xl font-bold bg-gradient-to-r from-orange-300 via-violet-400 to-rose-300
 text-transparent bg-clip-text bg-300% animate-gradient font-kristi">CraftGlow</a>
  </div>
  <div className="navbar-center hidden lg:flex space-x-2">
  <NavLink to={'/'} className={({ isActive}) =>
    isActive ? "border-b-2 font-kristi border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>Home</NavLink>
      <NavLink to={'/all'} className={({ isActive}) =>
    isActive ? "border-b-2 font-kristi border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>All Items</NavLink>
      {user && <NavLink to={'/add'} className={({ isActive}) =>
    isActive ? "border-b-2 font-kristi border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400 font-semibold"
  }>Add Item</NavLink>}
      
      {user && <NavLink to={`/${user.email}`} className={({ isActive}) =>
    isActive ? "border-b-2 font-kristi border-b-rose-300  p-2 text-rose-300 font-semibold text-center delay-75 transition-all" : " p-2 text-violet-400   font-semibold"
  }>My List</NavLink>}


  </div>
  <div className="navbar-end space-x-2">
    {user? <></>:<Link to={'/login'} className="btn btn-outline btn-success font-kristi">Log In</Link>}
    {user? <></>:<Link to={'/register'} className="btn  btn-info font-kristi">Register</Link>}
    {user && <div className="dropdown dropdown-end"  >
      <div tabIndex={0} role="button" className=" relative avatar lg:tooltip lg:tooltip-bottom" data-tip={user.displayName}>
        <div className="w-10 rounded-full m-auto" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
          <img alt="Your Profile" src={ user.photoURL? user.photoURL : '/profile.png'} />
        </div>
        {isHovered ? <ul  className="mt-0 z-[10] p-2 shadow menu menu-sm absolute bg-base-100 rounded-box w-32 right-0 top-0">
      
      <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}><a  onClick={handleSignOut}>Logout</a></li>
      
    </ul>:<></>}
      </div>
      
    </div>}
    <label className='cursor-pointer md:grid place-items-center hidden lg:grid '>
          <input
            type='checkbox'
            onChange={handleToggle}
            checked={isChecked}
            className='toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2'
          />
          <svg
            className='col-start-2 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <circle cx='12' cy='12' r='5' />
            <path d='M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4' />
          </svg>
          <svg
            className='col-start-1 row-start-1 stroke-base-100 fill-base-100'
            xmlns='http://www.w3.org/2000/svg'
            width='14'
            height='14'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <path d='M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z'></path>
          </svg>
        </label>
  </div>
</div>
</div>

     
  )
}

export default Navbar