import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions about our properties? We're here to help!
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h2 className="card-title mb-4">Send us a Message</h2>
            <form className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="input input-bordered" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="input input-bordered" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Subject</span>
                </label>
                <input 
                  type="text" 
                  placeholder="Subject" 
                  className="input input-bordered" 
                />
              </div>
              
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea 
                  className="textarea textarea-bordered h-24" 
                  placeholder="Your message"
                ></textarea>
              </div>
              
              <button className="btn btn-primary w-full">Send Message</button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-8">
          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title mb-4">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <FaPhone className="text-primary text-xl" />
                  <div>
                    <h3 className="font-bold">Phone</h3>
                    <p>+1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaEnvelope className="text-primary text-xl" />
                  <div>
                    <h3 className="font-bold">Email</h3>
                    <p>info@realestate.com</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <FaMapMarkerAlt className="text-primary text-xl" />
                  <div>
                    <h3 className="font-bold">Address</h3>
                    <p>123 Real Estate Street</p>
                    <p>New York, NY 10001</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="card bg-base-200">
            <div className="card-body">
              <h2 className="card-title mb-4">Office Hours</h2>
              <div className="space-y-2">
                <p><span className="font-bold">Monday - Friday:</span> 9:00 AM - 6:00 PM</p>
                <p><span className="font-bold">Saturday:</span> 10:00 AM - 4:00 PM</p>
                <p><span className="font-bold">Sunday:</span> Closed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
