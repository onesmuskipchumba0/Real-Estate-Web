import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  FaUser, 
  FaEnvelope, 
  FaLock, 
  FaPhone, 
  FaGoogle, 
  FaFacebook, 
  FaApple,
  FaHome,
  FaEye,
  FaEyeSlash,
  FaCheckCircle,
  FaMapMarkerAlt,
  FaShieldAlt,
  FaHandshake
} from 'react-icons/fa';
import { supabase } from '../config/supabase';
import { useAuth } from '../context/AuthContext';

const Signup = () => {
  const navigate = useNavigate();
  const { signUp } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      setMessage({ type: 'error', text: "Passwords don't match" });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: '', text: '' });
      
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: window.location.origin + '/login'
        }
      });

      if (error) throw error;
      
      // Check if email confirmation is required
      if (data?.user?.identities?.length === 0) {
        setMessage({ 
          type: 'error', 
          text: 'This email is already registered. Please login or reset your password.' 
        });
      } else {
        setMessage({ 
          type: 'success', 
          text: 'Registration successful! You can now login with your credentials.' 
        });
        setTimeout(() => navigate('/login'), 2000);
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const handleFacebookSignup = async () => {
    try {
      const { data, error } = await supabase.auth.signInWithOAuth({
        provider: 'facebook',
      });
      if (error) throw error;
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    }
  };

  const features = [
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "Prime Locations",
      description: "Access to exclusive properties in prime areas"
    },
    {
      icon: <FaShieldAlt className="text-2xl" />,
      title: "Secure Process",
      description: "Safe and transparent property transactions"
    },
    {
      icon: <FaHandshake className="text-2xl" />,
      title: "Expert Support",
      description: "Professional guidance throughout your journey"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 via-base-100 to-primary/5">
      <div className="absolute top-0 left-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3')] bg-cover bg-center opacity-5"></div>

      <div className="max-w-6xl w-full mx-4 bg-base-100 rounded-2xl shadow-2xl overflow-hidden relative z-10">
        <div className="flex flex-col md:flex-row">
          {/* Left Side - Features */}
          <div className="hidden md:flex w-5/12 bg-gradient-to-br from-primary to-primary/80 p-12 text-primary-content">
            <div className="w-full">
              <div className="flex items-center gap-2 text-2xl font-bold mb-12">
                <FaHome />
                <span>Dream<span className="opacity-75">Home</span></span>
              </div>
              
              <h2 className="text-4xl font-bold mb-6">Start Your Journey Home</h2>
              <p className="text-lg mb-12 opacity-90">
                Join Kenya's premier real estate platform and discover your perfect property
              </p>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="p-3 bg-primary-content/10 rounded-lg">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{feature.title}</h3>
                      <p className="opacity-75">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="w-full md:w-7/12 p-8 md:p-12">
            <h2 className="text-3xl font-bold mb-2">Create Account</h2>
            <p className="text-base-content/60 mb-8">
              Fill in your details to get started
            </p>

            <form onSubmit={handleSignup} className="space-y-6">
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
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaEnvelope className="text-primary" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    required
                    className="input input-bordered w-full pl-10 bg-base-100 border-primary/20 focus:border-primary"
                    placeholder="Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-primary" />
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
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

                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaLock className="text-primary" />
                  </div>
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    name="confirmPassword"
                    required
                    className="input input-bordered w-full pl-10 pr-10 bg-base-100 border-primary/20 focus:border-primary"
                    placeholder="Confirm Password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <FaEyeSlash className="text-base-content/50 hover:text-primary" />
                    ) : (
                      <FaEye className="text-base-content/50 hover:text-primary" />
                    )}
                  </button>
                </div>
              </div>

              <div className="space-y-6">
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-primary hover:bg-primary-focus text-white py-3 rounded-lg transition duration-300"
                >
                  {loading ? 'Creating account...' : 'Create account'}
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-base-300"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-base-100 text-base-content/60">
                      Or sign up with
                    </span>
                  </div>
                </div>

                <div className="flex gap-4 justify-center">
                  <button
                    type="button"
                    onClick={handleGoogleSignup}
                    className="p-3 border rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    <FaGoogle className="text-xl" />
                  </button>
                  <button
                    type="button"
                    onClick={handleFacebookSignup}
                    className="p-3 border rounded-lg hover:bg-gray-50 transition duration-300"
                  >
                    <FaFacebook className="text-xl" />
                  </button>
                </div>
              </div>
            </form>

            <p className="mt-8 text-center text-sm text-base-content/60">
              Already have an account?{' '}
              <Link to="/login" className="text-primary hover:text-primary-focus font-semibold">
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
