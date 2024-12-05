import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { supabase } from '../config/supabase';
import { 
  FaLock, 
  FaBell, 
  FaShieldAlt, 
  FaGlobe, 
  FaPalette, 
  FaUserShield,
  FaMoon,
  FaSun,
  FaCheck
} from 'react-icons/fa';

const themes = [
  { id: 'light', name: 'Light', icon: FaSun },
  { id: 'dark', name: 'Dark', icon: FaMoon },
  { id: 'cupcake', name: 'Cupcake', icon: FaPalette },
  { id: 'luxury', name: 'Luxury', icon: FaPalette },
  { id: 'dracula', name: 'Dracula', icon: FaPalette },
  { id: 'corporate', name: 'Corporate', icon: FaPalette }
];

export default function Settings() {
  const { user } = useAuth();
  const { theme, setTheme } = useTheme();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [activeTab, setActiveTab] = useState('security');
  const [passwords, setPasswords] = useState({
    current: '',
    new: '',
    confirm: ''
  });

  const [preferences, setPreferences] = useState({
    emailNotifications: true,
    smsNotifications: false,
    twoFactorAuth: false,
    language: 'en'
  });

  useEffect(() => {
    // Load saved preferences
    const loadPreferences = async () => {
      try {
        const { data, error } = await supabase
          .from('user_preferences')
          .select('*')
          .eq('id', user.id)
          .single();

        if (error) throw error;
        if (data) {
          setPreferences(prev => ({ ...prev, ...data }));
        }
      } catch (error) {
        console.error('Error loading preferences:', error);
      }
    };

    loadPreferences();
  }, [user]);

  const updatePassword = async (e) => {
    e.preventDefault();
    if (passwords.new !== passwords.confirm) {
      setMessage({ type: 'error', text: "New passwords don't match" });
      return;
    }

    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      const { error } = await supabase.auth.updateUser({
        password: passwords.new
      });

      if (error) throw error;

      setMessage({ type: 'success', text: 'Password updated successfully!' });
      setPasswords({ current: '', new: '', confirm: '' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const updatePreferences = async (newPrefs) => {
    try {
      setLoading(true);
      setMessage({ type: '', text: '' });

      const updatedPreferences = { ...preferences, ...newPrefs };
      
      const { error } = await supabase
        .from('user_preferences')
        .upsert({
          id: user.id,
          ...updatedPreferences,
          updated_at: new Date()
        });

      if (error) throw error;

      setPreferences(updatedPreferences);
      setMessage({ type: 'success', text: 'Preferences updated successfully!' });
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setLoading(false);
    }
  };

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    setMessage({ type: 'success', text: 'Theme updated successfully!' });
  };

  const tabs = [
    { id: 'security', label: 'Security', icon: FaUserShield },
    { id: 'notifications', label: 'Notifications', icon: FaBell },
    { id: 'appearance', label: 'Appearance', icon: FaPalette }
  ];

  return (
    <div className="min-h-screen bg-base-100 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="bg-base-200 rounded-lg shadow-xl">
          {/* Header */}
          <div className="p-6 border-b border-base-300">
            <h1 className="text-3xl font-bold">Settings</h1>
            <p className="text-base-content/60 mt-1">
              Manage your account settings and preferences
            </p>
          </div>

          {/* Message */}
          {message.text && (
            <div className={`mx-6 mt-6 p-4 rounded-lg text-sm flex items-center ${
              message.type === 'error' 
                ? 'bg-error/10 text-error' 
                : 'bg-success/10 text-success'
            }`}>
              {message.type === 'error' ? '⚠️' : '✅'} {message.text}
            </div>
          )}

          <div className="flex flex-col md:flex-row">
            {/* Tabs */}
            <div className="w-full md:w-64 p-6 border-r border-base-300">
              <nav className="space-y-1">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${
                      activeTab === tab.id 
                        ? 'bg-primary text-primary-content' 
                        : 'text-base-content hover:bg-base-300'
                    }`}
                  >
                    <tab.icon className="w-5 h-5" />
                    <span>{tab.label}</span>
                  </button>
                ))}
              </nav>
            </div>

            {/* Content */}
            <div className="flex-1 p-6">
              {activeTab === 'security' && (
                <div className="space-y-6">
                  <div>
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <FaLock className="mr-2" /> Change Password
                    </h2>
                    <form onSubmit={updatePassword} className="space-y-4 max-w-md">
                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Current Password
                        </label>
                        <input
                          type="password"
                          value={passwords.current}
                          onChange={(e) => setPasswords({ ...passwords, current: e.target.value })}
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          New Password
                        </label>
                        <input
                          type="password"
                          value={passwords.new}
                          onChange={(e) => setPasswords({ ...passwords, new: e.target.value })}
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium mb-1">
                          Confirm New Password
                        </label>
                        <input
                          type="password"
                          value={passwords.confirm}
                          onChange={(e) => setPasswords({ ...passwords, confirm: e.target.value })}
                          className="input input-bordered w-full"
                          required
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={loading}
                        className="btn btn-primary w-full"
                      >
                        {loading ? 'Updating...' : 'Update Password'}
                      </button>
                    </form>
                  </div>

                  <div className="pt-6 border-t border-base-300">
                    <h2 className="text-xl font-semibold mb-4 flex items-center">
                      <FaShieldAlt className="mr-2" /> Security Settings
                    </h2>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-medium">Two-Factor Authentication</h3>
                          <p className="text-sm text-base-content/60">
                            Add an extra layer of security to your account
                          </p>
                        </div>
                        <input
                          type="checkbox"
                          checked={preferences.twoFactorAuth}
                          onChange={(e) => updatePreferences({ twoFactorAuth: e.target.checked })}
                          className="toggle toggle-primary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'notifications' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaBell className="mr-2" /> Notification Preferences
                  </h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                      <div>
                        <h3 className="font-medium">Email Notifications</h3>
                        <p className="text-sm text-base-content/60">
                          Receive updates about your account via email
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.emailNotifications}
                        onChange={(e) => updatePreferences({ emailNotifications: e.target.checked })}
                        className="toggle toggle-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                      <div>
                        <h3 className="font-medium">SMS Notifications</h3>
                        <p className="text-sm text-base-content/60">
                          Get important updates via text message
                        </p>
                      </div>
                      <input
                        type="checkbox"
                        checked={preferences.smsNotifications}
                        onChange={(e) => updatePreferences({ smsNotifications: e.target.checked })}
                        className="toggle toggle-primary"
                      />
                    </div>

                    <div className="flex items-center justify-between p-4 bg-base-300 rounded-lg">
                      <div>
                        <h3 className="font-medium">Language</h3>
                        <p className="text-sm text-base-content/60">
                          Choose your preferred language
                        </p>
                      </div>
                      <select
                        value={preferences.language}
                        onChange={(e) => updatePreferences({ language: e.target.value })}
                        className="select select-bordered"
                      >
                        <option value="en">English</option>
                        <option value="es">Spanish</option>
                        <option value="fr">French</option>
                        <option value="sw">Swahili</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'appearance' && (
                <div className="space-y-6">
                  <h2 className="text-xl font-semibold mb-6 flex items-center">
                    <FaPalette className="mr-2" /> Appearance
                  </h2>
                  
                  <div>
                    <h3 className="font-medium mb-4">Theme</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {themes.map(themeOption => {
                        const Icon = themeOption.icon;
                        return (
                          <button
                            key={themeOption.id}
                            onClick={() => handleThemeChange(themeOption.id)}
                            className={`relative flex items-center space-x-3 p-4 rounded-lg border-2 transition-all ${
                              theme === themeOption.id
                                ? 'border-primary bg-primary/10'
                                : 'border-base-300 hover:border-primary/50'
                            }`}
                          >
                            <Icon className="w-5 h-5" />
                            <span className="font-medium">{themeOption.name}</span>
                            {theme === themeOption.id && (
                              <FaCheck className="absolute right-4 text-primary" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
