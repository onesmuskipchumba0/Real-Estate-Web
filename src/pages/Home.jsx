import { FaSearch, FaHome, FaBuilding, FaHandshake, FaStar, FaMapMarkerAlt, FaDollarSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredProperties = [
    {
      id: 1,
      title: "Luxury Villa",
      price: "$850,000",
      location: "Beverly Hills",
      image: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&auto=format&fit=crop",
      beds: 4,
      baths: 3
    },
    {
      id: 2,
      title: "Modern Apartment",
      price: "$450,000",
      location: "Downtown",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
      beds: 2,
      baths: 2
    },
    {
      id: 3,
      title: "Seaside Cottage",
      price: "$650,000",
      location: "Malibu",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
      beds: 3,
      baths: 2
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
              <div className="stat-title font-medium">Properties</div>
              <div className="stat-value text-primary">1,000+</div>
              <div className="stat-desc text-gray-600">Available listings</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaStar className="text-3xl" />
              </div>
              <div className="stat-title font-medium">Happy Clients</div>
              <div className="stat-value text-primary">500+</div>
              <div className="stat-desc text-gray-600">Satisfied customers</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaMapMarkerAlt className="text-3xl" />
              </div>
              <div className="stat-title font-medium">Locations</div>
              <div className="stat-value text-primary">50+</div>
              <div className="stat-desc text-gray-600">Cities covered</div>
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
                <div className="absolute top-4 right-4 badge badge-primary text-lg p-4 rounded-xl text-white font-medium">
                  {property.price}
                </div>
              </figure>
              <div className="card-body">
                <h3 className="card-title text-xl">{property.title}</h3>
                <p className="flex items-center gap-2">
                  <FaMapMarkerAlt className="text-primary" />
                  {property.location}
                </p>
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
