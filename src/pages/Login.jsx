import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaEnvelope, 
  FaLock, 
  FaGoogle, 
  FaFacebook, 
  FaApple,
  FaHome,
  FaEye,
  FaEyeSlash
} from 'react-icons/fa';
import { supabase } from '../config/supabase';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const navigate = useNavigate();
  const { signIn } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });
      
      const { error } = await signIn({ email, password });

      if (error) throw error;
      
      setMessage({ type: 'success', text: 'Login successful!' });
      setTimeout(() => navigate('/'), 1500); // Redirect after showing success message
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });
      if (error) throw error;
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-primary/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>
      
      <div className="max-w-4xl w-full mx-4 bg-base-100 rounded-2xl shadow-2xl overflow-hidden relative z-10">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Form */}
          <div className="w-full md:w-1/2 p-8">
            <div className="flex items-center gap-2 text-2xl font-bold mb-2">
              <FaHome className="text-primary" />
              <span>Dream<span className="text-primary">Home</span></span>
            </div>
            <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
            <p className="text-base-content/60 mb-8">
              Enter your credentials to access your account
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              {message.text && (
                <div className={`p-3 rounded-lg text-sm ${
                  message.type === 'error' 
                    ? 'bg-red-50 text-red-500' 
                    : 'bg-green-50 text-green-500'
                }`}>
                  {message.text}
                </div>
              )}
              <div className="space-y-4">
                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaEnvelope className="text-primary" />
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="input input-bordered w-full pl-10 bg-base-100 border-primary/20 focus:border-primary"
                      placeholder="Email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <FaLock className="text-primary" />
                    </div>
                    <input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      required
                      className="input input-bordered w-full pl-10 pr-10 bg-base-100 border-primary/20 focus:border-primary"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? (
                        <FaEyeSlash className="text-base-content/50 hover:text-primary" />
                      ) : (
                        <FaEye className="text-base-content/50 hover:text-primary" />
                      )}
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="checkbox checkbox-primary checkbox-sm"
                  />
                  <label htmlFor="remember-me" className="text-sm">
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a href="#" className="text-primary hover:text-primary-focus">
                    Forgot password?
                  </a>
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary-focus text-white py-3 rounded-lg transition duration-300"
              >
                {loading ? 'Signing in...' : 'Sign in'}
              </button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-base-300"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-base-100 text-base-content/60">
                    Or continue with
                  </span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <button
                  type="button"
                  onClick={handleGoogleLogin}
                  className="p-3 border rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <FaGoogle className="text-xl" />
                </button>
                <button
                  type="button"
                  onClick={handleFacebookLogin}
                  className="p-3 border rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <FaFacebook className="text-xl" />
                </button>
                <button
                  type="button"
                  className="p-3 border rounded-lg hover:bg-gray-50 transition duration-300"
                >
                  <FaApple className="text-xl" />
                </button>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-base-content/60">
              Don't have an account?{' '}
              <Link to="/signup" className="text-primary hover:text-primary-focus font-semibold">
                Sign up
              </Link>
            </p>
          </div>

          {/* Right Side - Image */}
          <div className="hidden md:block w-1/2 bg-cover bg-center" 
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')",
            }}>
            <div className="h-full w-full bg-gradient-to-br from-primary/80 to-primary p-12 flex items-center justify-center">
              <div className="text-primary-content">
                <h2 className="text-4xl font-bold mb-6">Find Your Dream Home</h2>
                <p className="text-xl opacity-90 mb-8">
                  Discover the perfect property that matches your lifestyle in Kenya's most sought-after locations.
                </p>
                <ul className="space-y-4 text-lg">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-content"></div>
                    Premium Locations
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-content"></div>
                    Expert Guidance
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-primary-content"></div>
                    Secure Transactions
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
