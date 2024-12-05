import { useState } from 'react';
import { FaSearch, FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaHeart, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

const Properties = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [activeFilters, setActiveFilters] = useState({
    type: 'all',
    priceRange: 'all',
    beds: 'all',
    location: 'all'
  });

  const properties = [
    {
      id: 1,
      title: "Nyumba Heights Estate",
      location: "Kileleshwa, Nairobi",
      price: "Ksh 25M",
      type: "Apartment",
      description: "Modern 3 bedroom apartment with spectacular city views",
      image: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixlib=rb-4.0.3",
      beds: 3,
      baths: 2,
      area: "2,100",
      agent: "Wanjiku Kamau",
      features: ["Swimming Pool", "Garden", "Garage", "Security System"]
    },
    {
      id: 2,
      title: "Baraka Gardens",
      location: "Westlands, Nairobi",
      price: "Ksh 45M",
      type: "Villa",
      description: "Luxurious 4 bedroom villa with private garden",
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3",
      beds: 4,
      baths: 3,
      area: "3,200",
      agent: "Otieno Omondi",
      features: ["Balcony", "Gym", "Parking", "24/7 Security"]
    },
    {
      id: 3,
      title: "Tumaini Towers",
      location: "Kilimani, Nairobi",
      price: "Ksh 18M",
      type: "Penthouse",
      description: "Executive 2 bedroom penthouse with rooftop terrace",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3",
      beds: 2,
      baths: 2,
      area: "1,800",
      agent: "Aisha Hassan",
      features: ["Beach Access", "Patio", "Garden", "Fireplace"]
    },
    {
      id: 4,
      title: "Imani Heights",
      location: "Lavington, Nairobi",
      price: "Ksh 35M",
      type: "Townhouse",
      description: "Modern 3 bedroom townhouse with private parking",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3",
      beds: 3,
      baths: 2,
      area: "2,500",
      agent: "Kiprop Kimutai",
      features: ["Rooftop Terrace", "Private Elevator", "Wine Cellar", "Smart Home"]
    },
  ];

  const toggleFavorite = (id) => {
    setFavorites(prev => {
      const newFavorites = new Set(prev);
      if (newFavorites.has(id)) {
        newFavorites.delete(id);
      } else {
        newFavorites.add(id);
      }
      return newFavorites;
    });
  };

  return (
    <div className="min-h-screen bg-base-100 py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Find Your Perfect Property</h1>
          <p className="text-base-content/70 max-w-2xl mx-auto">
            Browse through our extensive collection of properties and find your dream home
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-base-200 rounded-2xl p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Search Input */}
            <div className="join w-full">
              <input 
                type="text" 
                placeholder="Search properties..." 
                className="input input-bordered join-item flex-1 w-full rounded-l-xl" 
              />
              <button className="btn btn-primary join-item rounded-r-xl text-white">
                <FaSearch />
              </button>
            </div>

            {/* Property Type Filter */}
            <select 
              className="select select-bordered w-full rounded-xl"
              value={activeFilters.type}
              onChange={(e) => setActiveFilters({...activeFilters, type: e.target.value})}
            >
              <option value="all">All Property Types</option>
              <option value="house">House</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
            </select>

            {/* Price Range Filter */}
            <select 
              className="select select-bordered w-full rounded-xl"
              value={activeFilters.priceRange}
              onChange={(e) => setActiveFilters({...activeFilters, priceRange: e.target.value})}
            >
              <option value="all">Any Price Range</option>
              <option value="0-300000">$0 - $300,000</option>
              <option value="300000-600000">$300,000 - $600,000</option>
              <option value="600000-1000000">$600,000 - $1,000,000</option>
              <option value="1000000+">$1,000,000+</option>
            </select>

            {/* Location Filter */}
            <select 
              className="select select-bordered w-full rounded-xl"
              value={activeFilters.location}
              onChange={(e) => setActiveFilters({...activeFilters, location: e.target.value})}
            >
              <option value="all">All Locations</option>
              <option value="beverly-hills">Beverly Hills</option>
              <option value="manhattan">Manhattan</option>
              <option value="malibu">Malibu</option>
              <option value="downtown">Downtown</option>
            </select>
          </div>

          {/* Advanced Filters */}
          <div className="flex flex-wrap gap-4">
            <button className="btn btn-outline btn-sm rounded-xl gap-2">
              <FaFilter /> More Filters
            </button>
            <button className="btn btn-outline btn-sm rounded-xl gap-2">
              <FaSortAmountDown /> Sort By
            </button>
            <div className="flex-grow"></div>
            <span className="text-base-content/70">Showing {properties.length} properties</span>
          </div>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div 
              key={property.id} 
              className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 rounded-2xl overflow-hidden"
            >
              {/* Property Image */}
              <figure className="relative h-64">
                <img 
                  src={property.image} 
                  alt={property.title} 
                  className="w-full h-full object-cover"
                />
                <button 
                  onClick={() => toggleFavorite(property.id)}
                  className={`absolute top-4 right-4 btn btn-circle btn-sm ${
                    favorites.has(property.id) ? 'btn-primary' : 'btn-ghost bg-base-100/50 hover:bg-base-100'
                  }`}
                >
                  <FaHeart className={favorites.has(property.id) ? 'text-white' : 'text-gray-500'} />
                </button>
                <div className="absolute bottom-4 right-4 bg-primary text-white font-semibold text-base px-4 py-1.5 rounded-lg shadow-md">
                  {property.price}
                </div>
              </figure>

              {/* Property Details */}
              <div className="card-body">
                <div className="flex justify-between items-start">
                  <div>
                    <h2 className="card-title text-xl">{property.title}</h2>
                    <p className="flex items-center gap-2 text-base-content/70">
                      <FaMapMarkerAlt className="text-primary" />
                      {property.location}
                    </p>
                  </div>
                  <div className="text-sm badge badge-ghost">
                    {property.type}
                  </div>
                </div>
                <p className="text-base-content/70 mt-2">{property.description}</p>

                {/* Property Features */}
                <div className="flex flex-wrap gap-4 mt-4 text-base-content/70">
                  <div className="flex items-center gap-2">
                    <FaBed /> {property.beds} beds
                  </div>
                  <div className="flex items-center gap-2">
                    <FaBath /> {property.baths} baths
                  </div>
                  <div className="flex items-center gap-2">
                    <BiArea /> {property.area} sqft
                  </div>
                </div>

                {/* Property Amenities */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {property.features.map((feature, index) => (
                    <span key={index} className="badge badge-outline rounded-lg">
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="card-actions justify-end mt-6">
                  <button className="btn btn-primary rounded-xl text-white hover:btn-primary-focus transition-all duration-300">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center mt-12">
          <div className="join">
            <button className="join-item btn btn-outline rounded-l-xl">«</button>
            <button className="join-item btn btn-outline">1</button>
            <button className="join-item btn btn-primary">2</button>
            <button className="join-item btn btn-outline">3</button>
            <button className="join-item btn btn-outline rounded-r-xl">»</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;
