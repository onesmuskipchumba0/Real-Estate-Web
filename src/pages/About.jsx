import React from 'react';
import { FaAward, FaHandshake, FaHome, FaUsers, FaChartLine, FaShieldAlt } from 'react-icons/fa';

const About = () => {
  const teamMembers = [
    {
      name: "Onesmus Kipchumba",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3",
      description: "With over 10 years of experience in Kenyan real estate."
    },
    {
      name: "Wanjiku Kamau",
      role: "Head of Sales",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3",
      description: "Expert in luxury property sales and client relations."
    },
    {
      name: "Omar Hassan",
      role: "Property Consultant",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3",
      description: "Specialized in commercial real estate investments."
    }
  ];

  const values = [
    {
      icon: <FaHandshake className="text-4xl text-primary" />,
      title: "Trust & Integrity",
      description: "Building lasting relationships through honest dealings and transparency."
    },
    {
      icon: <FaChartLine className="text-4xl text-primary" />,
      title: "Market Excellence",
      description: "Staying ahead with data-driven insights and market analysis."
    },
    {
      icon: <FaShieldAlt className="text-4xl text-primary" />,
      title: "Client Protection",
      description: "Ensuring secure transactions and protecting client interests."
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-5xl font-bold mb-6">About DreamHome</h1>
            <p className="text-xl text-base-content/70 max-w-3xl mx-auto">
              Your trusted partner in the Kenyan real estate market, providing exceptional 
              property solutions since 2013. We combine local expertise with international 
              standards to deliver the best real estate experience.
            </p>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Our Mission</h2>
                <p className="text-lg">
                  To revolutionize the Kenyan real estate market by providing transparent, 
                  efficient, and professional services that exceed client expectations while 
                  contributing to sustainable urban development.
                </p>
              </div>
            </div>
            <div className="card bg-base-200 shadow-xl">
              <div className="card-body">
                <h2 className="card-title text-2xl mb-4">Our Vision</h2>
                <p className="text-lg">
                  To be Kenya's most trusted and innovative real estate company, setting 
                  the standard for excellence in property services across East Africa.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="card-body items-center text-center">
                  {value.icon}
                  <h3 className="card-title text-xl mt-4">{value.title}</h3>
                  <p className="text-base-content/70">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-16 bg-base-100">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="card bg-base-200 shadow-xl hover:shadow-2xl transition-all duration-300">
                <figure className="px-4 pt-4">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="rounded-xl h-64 w-full object-cover"
                  />
                </figure>
                <div className="card-body items-center text-center">
                  <h3 className="card-title text-xl">{member.name}</h3>
                  <p className="text-primary font-medium">{member.role}</p>
                  <p className="text-base-content/70">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievement Stats */}
      <div className="py-16 bg-base-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaHome className="text-3xl" />
              </div>
              <div className="stat-title">Properties</div>
              <div className="stat-value text-primary">1,500+</div>
              <div className="stat-desc">Sold in 2023</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaUsers className="text-3xl" />
              </div>
              <div className="stat-title">Clients</div>
              <div className="stat-value text-primary">2,500+</div>
              <div className="stat-desc">Satisfied customers</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaAward className="text-3xl" />
              </div>
              <div className="stat-title">Awards</div>
              <div className="stat-value text-primary">15+</div>
              <div className="stat-desc">Industry recognition</div>
            </div>
            <div className="stat bg-base-100 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="stat-figure text-primary">
                <FaHandshake className="text-3xl" />
              </div>
              <div className="stat-title">Experience</div>
              <div className="stat-value text-primary">10+</div>
              <div className="stat-desc">Years in business</div>
            </div>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-16 bg-primary text-primary-content">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
          <p className="text-xl mb-8 opacity-90">
            Let us help you discover the perfect property in Kenya's most sought-after locations.
          </p>
          <button className="btn btn-lg btn-ghost border-2 border-primary-content hover:bg-primary-content hover:text-primary">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
