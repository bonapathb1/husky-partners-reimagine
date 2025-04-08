
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="section bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title text-husky-blue">Contact <span className="text-husky-gold">Us</span></h2>
          <p className="section-subtitle mx-auto">
            Reach out to our team for professional legal assistance tailored to your needs.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="h-full">
              <CardContent className="p-0">
                <div className="p-6">
                  <h3 className="text-2xl font-serif text-husky-blue mb-6">Send Us a Message</h3>
                  
                  <form className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Full Name *
                        </label>
                        <input
                          id="name"
                          type="text"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
                        />
                      </div>
                      <div>
                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1">
                          Service of Interest
                        </label>
                        <select
                          id="service"
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
                        >
                          <option value="" disabled selected>Select Service</option>
                          <option value="corporate">Corporate & Commercial</option>
                          <option value="dispute">Dispute Resolution</option>
                          <option value="realestate">Real Estate & Construction</option>
                          <option value="m&a">Mergers & Acquisitions</option>
                          <option value="investment">Investment & Banking</option>
                          <option value="labor">Labor & Employment</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        rows={5}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-husky-blue"
                        required
                      ></textarea>
                    </div>
                    
                    <div>
                      <Button type="submit" className="bg-husky-blue text-white hover:bg-husky-blue/90 w-full sm:w-auto">
                        Submit Inquiry
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div>
            <Card className="mb-6">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif text-husky-blue mb-5">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-husky-blue/10 flex items-center justify-center text-husky-blue">
                      <MapPin size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Our Office</h4>
                      <p className="text-sm text-gray-600">123 Legal Avenue, Phnom Penh, Cambodia</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-husky-blue/10 flex items-center justify-center text-husky-blue">
                      <Phone size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Phone</h4>
                      <p className="text-sm text-gray-600">+855 23 123 456</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-husky-blue/10 flex items-center justify-center text-husky-blue">
                      <Mail size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Email</h4>
                      <p className="text-sm text-gray-600">info@huskyandpartners.com</p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-10 w-10 rounded-full bg-husky-blue/10 flex items-center justify-center text-husky-blue">
                      <Clock size={20} />
                    </div>
                    <div className="ml-4">
                      <h4 className="text-sm font-medium text-gray-900">Business Hours</h4>
                      <p className="text-sm text-gray-600">Monday - Friday: 8:30 AM - 5:30 PM</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-0">
                <div className="aspect-square w-full bg-gray-100">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62681.80738244801!2d104.8812954543669!3d11.556373761294445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109513dc76a6be3%3A0x9c010ee85ab525bb!2sPhnom%20Penh!5e0!3m2!1sen!2skh!4v1617784936224!5m2!1sen!2skh" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
