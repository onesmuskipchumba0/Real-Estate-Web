import { FaAward, FaUsers, FaHome } from 'react-icons/fa';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          We are dedicated to helping you find the perfect property that matches your dreams and lifestyle.
          With years of experience in the real estate market, we provide exceptional service to our clients.
        </p>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="card bg-base-200">
          <div className="card-body items-center text-center">
            <FaHome className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold">1000+</h3>
            <p>Properties Sold</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body items-center text-center">
            <FaUsers className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold">500+</h3>
            <p>Happy Clients</p>
          </div>
        </div>
        <div className="card bg-base-200">
          <div className="card-body items-center text-center">
            <FaAward className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold">15+</h3>
            <p>Years Experience</p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="mb-4">
            Our mission is to help our clients achieve their real estate goals by providing expert advice,
            personalized service, and a deep understanding of the local market.
          </p>
          <p>
            We believe in building long-term relationships with our clients based on trust,
            integrity, and professional excellence.
          </p>
        </div>
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title">Why Choose Us?</h3>
            <ul className="space-y-2">
              <li>✓ Expert market knowledge</li>
              <li>✓ Professional service</li>
              <li>✓ Personalized approach</li>
              <li>✓ Transparent communication</li>
              <li>✓ Proven track record</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
