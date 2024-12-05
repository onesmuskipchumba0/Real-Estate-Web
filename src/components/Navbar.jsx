import { Link, useNavigate } from 'react-router-dom';
import { FaHome, FaBuilding, FaInfoCircle, FaEnvelope, FaSignInAlt } from 'react-icons/fa';
import { RiHomeSmileFill } from 'react-icons/ri';

const Navbar = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signup');
  };

  return (
    <div className="navbar bg-base-100 shadow-lg fixed top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden rounded-xl">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-xl w-52">
            <li><Link to="/" className="flex items-center gap-2 hover:text-primary"><FaHome /> Home</Link></li>
            <li><Link to="/properties" className="flex items-center gap-2 hover:text-primary"><FaBuilding /> Properties</Link></li>
            <li><Link to="/about" className="flex items-center gap-2 hover:text-primary"><FaInfoCircle /> About</Link></li>
            <li><Link to="/contact" className="flex items-center gap-2 hover:text-primary"><FaEnvelope /> Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl gap-2 hover:bg-transparent">
          <RiHomeSmileFill className="text-primary text-3xl" />
          <span className="font-bold">Dream<span className="text-primary">Home</span></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link to="/" className="rounded-xl hover:text-primary hover:bg-base-200 flex items-center gap-2">
              <FaHome /> Home
            </Link>
          </li>
          <li>
            <Link to="/properties" className="rounded-xl hover:text-primary hover:bg-base-200 flex items-center gap-2">
              <FaBuilding /> Properties
            </Link>
          </li>
          <li>
            <Link to="/about" className="rounded-xl hover:text-primary hover:bg-base-200 flex items-center gap-2">
              <FaInfoCircle /> About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="rounded-xl hover:text-primary hover:bg-base-200 flex items-center gap-2">
              <FaEnvelope /> Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/login" className="btn btn-ghost mr-2">Login</Link>
        <button onClick={handleGetStarted} className="btn btn-primary rounded-xl text-white hover:btn-primary-focus transition-all duration-300">
          <FaSignInAlt className="mr-2" /> Get Started
        </button>
      </div>
    </div>
  );
};

export default Navbar;
