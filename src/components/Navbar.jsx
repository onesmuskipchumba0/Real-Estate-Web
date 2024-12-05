import { Link } from 'react-router-dom';
import { FaHome, FaBuilding, FaInfoCircle, FaEnvelope } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            <li><Link to="/"><FaHome className="mr-2" /> Home</Link></li>
            <li><Link to="/properties"><FaBuilding className="mr-2" /> Properties</Link></li>
            <li><Link to="/about"><FaInfoCircle className="mr-2" /> About</Link></li>
            <li><Link to="/contact"><FaEnvelope className="mr-2" /> Contact</Link></li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">RealEstate</Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/"><FaHome className="mr-2" /> Home</Link></li>
          <li><Link to="/properties"><FaBuilding className="mr-2" /> Properties</Link></li>
          <li><Link to="/about"><FaInfoCircle className="mr-2" /> About</Link></li>
          <li><Link to="/contact"><FaEnvelope className="mr-2" /> Contact</Link></li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to="/contact" className="btn btn-primary">Get Started</Link>
      </div>
    </div>
  );
};

export default Navbar;
