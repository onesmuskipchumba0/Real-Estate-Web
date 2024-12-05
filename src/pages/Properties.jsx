import { useState, useMemo } from 'react';
import { FaSearch, FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaHeart, FaFilter, FaSortAmountDown } from 'react-icons/fa';
import { BiArea } from 'react-icons/bi';

const Properties = () => {
  const [favorites, setFavorites] = useState(new Set());
  const [searchQuery, setSearchQuery] = useState('');
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

  // Filter properties based on search query and active filters
  const filteredProperties = useMemo(() => {
    return properties.filter(property => {
      const matchesSearch = searchQuery === '' || 
        property.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.type.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.price.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.agent.toLowerCase().includes(searchQuery.toLowerCase()) ||
        property.features.some(feature => 
          feature.toLowerCase().includes(searchQuery.toLowerCase())
        );

      const matchesType = activeFilters.type === 'all' || 
        property.type.toLowerCase() === activeFilters.type.toLowerCase();

      const matchesBeds = activeFilters.beds === 'all' || 
        property.beds === parseInt(activeFilters.beds);

      const matchesLocation = activeFilters.location === 'all' || 
        property.location.toLowerCase().includes(activeFilters.location.toLowerCase());

      // Price range filter
      let matchesPrice = true;
      if (activeFilters.priceRange !== 'all') {
        const propertyPrice = parseInt(property.price.replace(/[^0-9]/g, ''));
        switch (activeFilters.priceRange) {
          case 'under20m':
            matchesPrice = propertyPrice < 20;
            break;
          case '20m-30m':
            matchesPrice = propertyPrice >= 20 && propertyPrice <= 30;
            break;
          case '30m-40m':
            matchesPrice = propertyPrice >= 30 && propertyPrice <= 40;
            break;
          case 'over40m':
            matchesPrice = propertyPrice > 40;
            break;
          default:
            matchesPrice = true;
        }
      }

      return matchesSearch && matchesType && matchesBeds && matchesLocation && matchesPrice;
    });
  }, [searchQuery, activeFilters, properties]);

  const handleFilterChange = (filterType, value) => {
    setActiveFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
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
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="input input-bordered join-item w-full"
              />
              <button className="btn join-item">
                <FaSearch />
              </button>
            </div>

            {/* Property Type Filter */}
            <select 
              className="select select-bordered w-full"
              value={activeFilters.type}
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              <option value="all">All Property Types</option>
              <option value="apartment">Apartment</option>
              <option value="villa">Villa</option>
              <option value="penthouse">Penthouse</option>
              <option value="townhouse">Townhouse</option>
            </select>

            {/* Price Range Filter */}
            <select 
              className="select select-bordered w-full"
              value={activeFilters.priceRange}
              onChange={(e) => handleFilterChange('priceRange', e.target.value)}
            >
              <option value="all">All Price Ranges</option>
              <option value="under20m">Under 20M</option>
              <option value="20m-30m">20M - 30M</option>
              <option value="30m-40m">30M - 40M</option>
              <option value="over40m">Over 40M</option>
            </select>

            {/* Location Filter */}
            <select 
              className="select select-bordered w-full"
              value={activeFilters.location}
              onChange={(e) => handleFilterChange('location', e.target.value)}
            >
              <option value="all">All Locations</option>
              <option value="kileleshwa">Kileleshwa</option>
              <option value="westlands">Westlands</option>
              <option value="kilimani">Kilimani</option>
              <option value="lavington">Lavington</option>
            </select>
          </div>

          {/* Additional Filters */}
          <div className="flex flex-wrap gap-4">
            {/* Bedrooms Filter */}
            <select 
              className="select select-bordered"
              value={activeFilters.beds}
              onChange={(e) => handleFilterChange('beds', e.target.value)}
            >
              <option value="all">Any Beds</option>
              <option value="1">1 Bed</option>
              <option value="2">2 Beds</option>
              <option value="3">3 Beds</option>
              <option value="4">4+ Beds</option>
            </select>
          </div>
        </div>

        {/* Results Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.length === 0 ? (
            <div className="col-span-full text-center py-12">
              <h3 className="text-xl font-semibold mb-2">No properties found</h3>
              <p className="text-base-content/70">
                Try adjusting your search criteria or filters
              </p>
            </div>
          ) : (
            filteredProperties.map(property => (
              <div key={property.id} className="card bg-base-200 shadow-xl">
                <figure className="relative">
                  <img 
                    src={property.image} 
                    alt={property.title}
                    className="h-64 w-full object-cover"
                  />
                  <button
                    onClick={() => toggleFavorite(property.id)}
                    className={`absolute top-4 right-4 btn btn-circle btn-sm ${
                      favorites.has(property.id) ? 'btn-primary' : 'btn-ghost bg-base-100/50'
                    }`}
                  >
                    <FaHeart className={favorites.has(property.id) ? 'text-primary-content' : 'text-base-content'} />
                  </button>
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{property.title}</h2>
                  <p className="flex items-center gap-2 text-base-content/70">
                    <FaMapMarkerAlt /> {property.location}
                  </p>
                  <p className="text-xl font-semibold text-primary">{property.price}</p>
                  <p className="text-base-content/70">{property.description}</p>
                  
                  <div className="flex flex-wrap gap-4 mt-4">
                    <div className="flex items-center gap-2">
                      <FaBed className="text-base-content/70" />
                      <span>{property.beds} Beds</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <FaBath className="text-base-content/70" />
                      <span>{property.baths} Baths</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BiArea className="text-base-content/70" />
                      <span>{property.area} sq ft</span>
                    </div>
                  </div>

                  <div className="card-actions justify-end mt-4">
                    <button className="btn btn-primary">View Details</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Properties;
