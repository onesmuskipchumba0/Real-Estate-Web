# DreamHome Real Estate Web Application 🏠

A modern, feature-rich real estate platform built with React and Supabase, focusing on the Kenyan real estate market. This application provides a seamless experience for users to browse, search, and manage property listings with advanced authentication and customization features.

## 🌟 Features

### Authentication & User Management
- **Secure Authentication** via Supabase
  - Email/Password login
  - Google OAuth integration
  - Email verification
  - Password recovery
- **User Profiles**
  - Profile information management
  - Avatar upload functionality
  - Preference settings
  - Two-factor authentication (optional)

### Property Search & Filtering
- **Advanced Search Functionality**
  - Real-time property filtering
  - Multi-field search (title, location, description, etc.)
  - Case-insensitive search
- **Comprehensive Filters**
  - Property type (Apartment, Villa, Penthouse, Townhouse)
  - Price range
  - Location
  - Number of bedrooms
  - Additional amenities

### Customization & Themes
- **Multiple Theme Options**
  - Light
  - Dark
  - Cupcake
  - Luxury
  - Dracula
  - Corporate
- **Persistent Theme Settings**
  - Local storage integration
  - User preference synchronization

### User Interface
- **Responsive Design**
  - Mobile-first approach
  - Adaptive layouts
  - Touch-friendly interfaces
- **Modern UI Components**
  - Interactive property cards
  - Dynamic navigation
  - Loading states
  - Toast notifications

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Supabase account

### Installation

1. Clone the repository
```bash
git clone https://github.com/onesmuskipchumba0/Real-Estate-Web.git
cd Real-Estate-Web
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables
Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

4. Start the development server
```bash
npm run dev
# or
yarn dev
```

## 🛠️ Built With

### Core Technologies
- **React** - Frontend framework
- **Vite** - Build tool
- **Supabase** - Backend and authentication
- **TailwindCSS** - Styling
- **DaisyUI** - Component library

### Key Dependencies
- `@supabase/supabase-js` - Supabase client
- `react-router-dom` - Routing
- `react-icons` - Icon library
- `@headlessui/react` - Accessible UI components

## 📁 Project Structure

```
src/
├── components/          # Reusable components
│   ├── Navbar.jsx
│   ├── Footer.jsx
│   └── ...
├── context/            # React contexts
│   ├── AuthContext.jsx
│   └── ThemeContext.jsx
├── pages/              # Page components
│   ├── Home.jsx
│   ├── Properties.jsx
│   ├── Profile.jsx
│   └── ...
├── config/             # Configuration files
│   └── supabase.js
└── App.jsx            # Root component
```

## 🔐 Security Features

- Secure authentication flow
- Protected routes
- Input validation
- XSS protection
- Secure data storage
- Rate limiting

## 🎨 Customization

### Theme Configuration
Modify `tailwind.config.js` to add or customize themes:
```javascript
module.exports = {
  daisyui: {
    themes: ["light", "dark", "cupcake", "luxury", "dracula", "corporate"]
  }
}
```

### Environment Variables
Required environment variables:
- `VITE_SUPABASE_URL`: Your Supabase project URL
- `VITE_SUPABASE_ANON_KEY`: Your Supabase anonymous key

## 📱 Mobile Support

The application is fully responsive and tested on:
- iOS Safari
- Android Chrome
- Mobile Firefox
- Various tablet devices

## 🔍 Search Implementation

The property search feature uses:
- Real-time filtering
- Debounced search input
- Memoized results
- Multi-field matching
- Advanced filtering options

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## 🙏 Acknowledgments

- [Supabase](https://supabase.io/) for the backend infrastructure
- [TailwindCSS](https://tailwindcss.com/) for the styling framework
- [DaisyUI](https://daisyui.com/) for the component library
- [React Icons](https://react-icons.github.io/react-icons/) for the icon set

## 📞 Support

For support, email support@dreamhome.com or join our Slack channel.

## 🚧 Roadmap

- [ ] Add more OAuth providers
- [ ] Implement chat functionality
- [ ] Add property comparison feature
- [ ] Enhance search algorithm
- [ ] Add map integration
- [ ] Implement real-time notifications
- [ ] Add property recommendations
- [ ] Implement virtual tours
- [ ] Add mortgage calculator

## 💫 Demo

Visit our [live demo](https://dreamhome-demo.com) to see the application in action.

---

Made with ❤️ by the DreamHome Team
