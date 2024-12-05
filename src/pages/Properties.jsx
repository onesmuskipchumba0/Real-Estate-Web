import { FaSearch, FaBed, FaBath, FaRuler } from 'react-icons/fa';

const Properties = () => {
  const properties = [
    {
      id: 1,
      title: "Modern Apartment",
      price: "$250,000",
      beds: 2,
      baths: 2,
      sqft: 1200,
      image: "https://placehold.co/600x400",
      location: "Downtown"
    },
    {
      id: 2,
      title: "Luxury Villa",
      price: "$500,000",
      beds: 4,
      baths: 3,
      sqft: 2500,
      image: "https://placehold.co/600x400",
      location: "Suburbs"
    },
    // Add more properties as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Search Section */}
      <div className="mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <input 
            type="text" 
            placeholder="Search properties..." 
            className="input input-bordered flex-1" 
          />
          <select className="select select-bordered w-full md:w-auto">
            <option disabled selected>Property Type</option>
            <option>House</option>
            <option>Apartment</option>
            <option>Villa</option>
          </select>
          <select className="select select-bordered w-full md:w-auto">
            <option disabled selected>Price Range</option>
            <option>$100k - $200k</option>
            <option>$200k - $300k</option>
            <option>$300k+</option>
          </select>
          <button className="btn btn-primary">
            <FaSearch /> Search
          </button>
        </div>
      </div>

      {/* Properties Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={property.image} alt={property.title} className="w-full h-48 object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{property.title}</h2>
              <p className="text-primary text-xl font-bold">{property.price}</p>
              <p className="text-gray-500">{property.location}</p>
              <div className="flex justify-between mt-4">
                <span className="flex items-center gap-1">
                  <FaBed /> {property.beds}
                </span>
                <span className="flex items-center gap-1">
                  <FaBath /> {property.baths}
                </span>
                <span className="flex items-center gap-1">
                  <FaRuler /> {property.sqft} sqft
                </span>
              </div>
              <div className="card-actions justify-end mt-4">
                <button className="btn btn-primary">View Details</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Properties;
