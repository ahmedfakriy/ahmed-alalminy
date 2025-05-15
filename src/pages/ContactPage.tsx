import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/Button';

export function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    });
    
    setTimeout(() => {
      setSubmitted(false);
    }, 5000);
  };
  
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="bg-teal-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-teal-100">
              Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
            <div className="lg:col-span-2 p-6 md:p-8 bg-gradient-to-br from-teal-600 to-teal-700 text-white">
              <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
              <p className="mb-8">
                Fill out the form or contact us directly using the information below.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Our Location</h3>
                    <p className="text-teal-100">123 Tech Street, Silicon Valley, CA 94024</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone size={24} className="mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Phone</h3>
                    <p className="text-teal-100">01023099469</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail size={24} className="mr-3 mt-1" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p className="text-teal-100">ahmedfakriy010230@gmail.com</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <h3 className="font-semibold text-lg mb-4">Business Hours</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span>10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3 p-6 md:p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
              
              {submitted ? (
                <div className="bg-green-50 p-4 rounded-md mb-6">
                  <div className="flex">
                    <div className="flex-shrink-0">
                      <svg className="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div className="ml-3">
                      <h3 className="text-sm font-medium text-green-800">Message Sent!</h3>
                      <div className="mt-2 text-sm text-green-700">
                        <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                        Subject *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                      >
                        <option value="">Select a subject</option>
                        <option value="Product Inquiry">Product Inquiry</option>
                        <option value="Service Inquiry">Service Inquiry</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Billing Question">Billing Question</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      required
                      className="block w-full rounded-md border-gray-300 shadow-sm focus:border-teal-500 focus:ring-teal-500 sm:text-sm"
                    ></textarea>
                  </div>
                  
                  <div>
                    <Button
                      type="submit"
                      variant="primary"
                      size="lg"
                      className="bg-teal-600 hover:bg-teal-700 flex items-center justify-center"
                    >
                      <Send size={20} className="mr-2" />
                      Send Message
                    </Button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Location</h2>
          <div className="h-96 rounded-lg overflow-hidden shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d101268.8654118899!2d-122.07277847936994!3d37.40327380062864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808fb68ad0cfc739%3A0x7eb356b66bd00bb5!2sSilicon%20Valley%2C%20CA!5e0!3m2!1sen!2sus!4v1662487061972!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="TechElite Location"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}