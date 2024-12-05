import { FaSearch, FaHome, FaBuilding, FaHandshake, FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Nyumba Heights Estate",
      location: "Kileleshwa, Nairobi",
      price: "Ksh 25M",
      beds: 3,
      baths: 2,
      sqft: "2,100",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      title: "Baraka Gardens",
      location: "Westlands, Nairobi",
      price: "Ksh 45M",
      beds: 4,
      baths: 3,
      sqft: "3,200",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      title: "Tumaini Towers",
      location: "Kilimani, Nairobi",
      price: "Ksh 18M",
      beds: 2,
      baths: 2,
      sqft: "1,800",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "2,500+" },
    { label: "Properties Sold", value: "1,800+" },
    { label: "Awards Won", value: "15+" },
    { label: "Years Experience", value: "10+" }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Wanjiku Kamau",
      role: "Home Buyer",
      comment: "Found my dream home through DreamHome. The process was smooth and professional.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Otieno Omondi",
      role: "Property Investor",
      comment: "The best real estate platform in Kenya. Their market insights are invaluable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3"
    },
    {
      id: 3,
      name: "Aisha Hassan",
      role: "First-time Seller",
      comment: "Sold my property within weeks. Their marketing strategy is exceptional.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with background image and gradient */}
      <div 
        className="hero min-h-screen relative"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1600&auto=format&fit=crop')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="hero-content text-center text-neutral-content relative z-10">
          <div className="max-w-xl">
            <h1 className="mb-5 text-5xl font-bold leading-tight">
              Find Your Perfect Place to Call Home
            </h1>
            <p className="mb-8 text-lg">
              Discover amazing properties that match your lifestyle in the most desired locations
            </p>
            <div className="join shadow-lg bg-base-100 p-1 w-full max-w-md mx-auto rounded-2xl">
              <input 
                className="input join-item flex-1 focus:outline-none rounded-l-xl" 
                placeholder="Search by location..."
              />
              <button className="btn btn-primary join-item rounded-r-xl hover:btn-primary-focus transition-all duration-300 text-white">
                <FaSearch className="mr-2" /> Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-base-200 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaHome className="text-3xl" />
              </div>
              <div className="stat-title font-medium">Happy Clients</div>
              <div className="stat-value text-primary">{stats[0].value}</div>
              <div className="stat-desc text-gray-600">{stats[0].label}</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaStar className="text-3xl" />
              </div>
              <div className="stat-title font-medium">Properties Sold</div>
              <div className="stat-value text-primary">{stats[1].value}</div>
              <div className="stat-desc text-gray-600">{stats[1].label}</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <div className="stat-title font-medium">Awards Won</div>
              <div className="stat-value text-primary">{stats[2].value}</div>
              <div className="stat-desc text-gray-600">{stats[2].label}</div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Properties */}
      <div className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12">Featured Properties</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((property) => (
            <div 
              key={property.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              <figure className="relative h-64">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 right-4 badge badge-ghost bg-base-100/90 text-sm">
                  {property.location}
                </div>
                <div className="absolute bottom-4 right-4 bg-primary text-white font-semibold text-base px-4 py-1.5 rounded-lg shadow-md">
                  {property.price}
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{property.title}</h3>
                <div className="flex justify-between mt-4">
                  <span className="flex items-center gap-2">
                    <FaHome /> {property.beds} beds
                  </span>
                  <span className="flex items-center gap-2">
                    <FaBuilding /> {property.baths} baths
                  </span>
                </div>
                <div className="card-actions justify-end mt-4">
                  <button className="btn btn-primary hover:btn-primary-focus transition-all duration-300 rounded-xl text-white">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link 
            to="/properties"
            className="btn btn-primary btn-lg hover:btn-primary-focus transition-all duration-300 rounded-xl text-white"
          >
            View All Properties
          </Link>
        </div>
      </div>

      {/* Testimonials */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl"
              >
                <div className="card-body items-center text-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-16 h-16 rounded-full mb-4"
                  />
                  <h3 className="card-title">{testimonial.name}</h3>
                  <p className="text-gray-600">{testimonial.role}</p>
                  <p className="text-lg">{testimonial.comment}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div 
        className="relative py-24 bg-fixed bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-primary/60"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl mx-auto text-center text-white">
            <h2 className="text-4xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
            <p className="text-lg mb-8">
              Let us help you find the perfect property that matches your lifestyle and dreams.
            </p>
            <Link 
              to="/contact"
              className="btn btn-secondary btn-lg hover:scale-105 transition-all duration-300 rounded-xl text-white"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center">
                <FaHome className="text-4xl text-primary mb-4" />
                <h3 className="card-title">Property Sales</h3>
                <p>Find your dream home from our extensive collection of properties</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center">
                <FaHandshake className="text-4xl text-primary mb-4" />
                <h3 className="card-title">Expert Consultation</h3>
                <p>Get professional advice from our experienced real estate agents</p>
              </div>
            </div>
            <div className="card bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 rounded-2xl">
              <div className="card-body items-center text-center">
                <FaDollarSign className="text-4xl text-primary mb-4" />
                <h3 className="card-title">Property Valuation</h3>
                <p>Get accurate property valuations from our expert team</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
