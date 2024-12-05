import { Link } from 'react-router-dom';
import { FaGithub, FaEnvelope, FaPhone, FaGlobe, FaHome, FaMapMarkerAlt, FaArrowRight } from 'react-icons/fa';
import { RiHomeSmileFill } from 'react-icons/ri';

const Footer = () => {
  return (
    <footer className="bg-base-200">
      <div className="container mx-auto px-4">
        {/* Main Footer */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2 text-2xl font-bold">
              <RiHomeSmileFill className="text-primary text-3xl" />
              <span>Dream<span className="text-primary">Home</span></span>
            </Link>
            <p className="text-base-content/80">
              Your trusted partner in finding the perfect property. We make your dream home a reality.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://github.com/onesmuskipchumba0" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost hover:text-primary"
              >
                <FaGithub className="text-xl" />
              </a>
              <a 
                href="mailto:onesmuskipchumba5@gmail.com" 
                className="btn btn-circle btn-ghost hover:text-primary"
              >
                <FaEnvelope className="text-xl" />
              </a>
              <a 
                href="tel:+254792400709" 
                className="btn btn-circle btn-ghost hover:text-primary"
              >
                <FaPhone className="text-xl" />
              </a>
              <a 
                href="https://onesmusbett.vercel.app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-circle btn-ghost hover:text-primary"
              >
                <FaGlobe className="text-xl" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="footer-title mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-primary flex items-center gap-2">
                  <FaArrowRight className="text-sm" /> Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="hover:text-primary flex items-center gap-2">
                  <FaArrowRight className="text-sm" /> Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary flex items-center gap-2">
                  <FaArrowRight className="text-sm" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary flex items-center gap-2">
                  <FaArrowRight className="text-sm" /> Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="footer-title mb-4">Contact Info</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-primary mt-1" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="text-primary" />
                <a href="tel:+254792400709" className="hover:text-primary">
                  +254 792 400 709
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="text-primary" />
                <a href="mailto:onesmuskipchumba5@gmail.com" className="hover:text-primary">
                  onesmuskipchumba5@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaGlobe className="text-primary" />
                <a 
                  href="https://onesmusbett.vercel.app" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-primary"
                >
                  onesmusbett.vercel.app
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="footer-title mb-4">Newsletter</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
            <div className="join">
              <input 
                type="email" 
                placeholder="Your email" 
                className="input input-bordered join-item rounded-l-xl" 
              />
              <button className="btn btn-primary join-item rounded-r-xl text-white">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-base-300">
          <div className="text-center text-base-content/70">
            <p>© {new Date().getFullYear()} DreamHome. Developed by <a 
              href="https://github.com/onesmuskipchumba0"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:underline"
            >
              Onesmus Kipchumba
            </a></p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
