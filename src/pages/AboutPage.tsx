import React from 'react';
import { CheckCircle, Users, Briefcase, Heart } from 'lucide-react';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero section */}
      <div className="bg-blue-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <div className="max-w-3xl">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">About TechElite</h1>
            <p className="text-xl text-blue-100">
              We're on a mission to provide premium tech products and expert services to help our customers thrive in the digital age.
            </p>
          </div>
        </div>
      </div>
      
      {/* Our story */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img 
              src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
              alt="Our team" 
              className="rounded-lg shadow-md"
            />
          </div>
          
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <div className="prose prose-lg max-w-none text-gray-700">
              <p>
                Founded in 2020, TechElite began with a simple idea: to provide premium tech products and services without the premium markup.
              </p>
              <p>
                Our founder, a tech enthusiast frustrated with the lack of quality options and expert guidance in the market, decided to create a solution. What started as a small online store has grown into a trusted brand serving thousands of satisfied customers.
              </p>
              <p>
                Today, we continue to curate the best technology products on the market and offer services that help our customers get the most out of their tech. Our team of experts is passionate about technology and committed to providing exceptional customer experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Our values */}
      <div className="bg-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core values guide everything we do and help us deliver exceptional experiences to our customers.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <CheckCircle size={40} className="text-blue-600" />,
                title: 'Quality',
                description: 'We never compromise on quality. Every product we offer is carefully selected for its excellence.'
              },
              {
                icon: <Users size={40} className="text-blue-600" />,
                title: 'Customer Focus',
                description: 'Our customers are at the center of everything we do. We are committed to exceeding your expectations.'
              },
              {
                icon: <Briefcase size={40} className="text-blue-600" />,
                title: 'Expertise',
                description: 'Our team of experts brings deep knowledge and experience to help you make informed decisions.'
              },
              {
                icon: <Heart size={40} className="text-blue-600" />,
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our customer and business relationships.'
              }
            ].map((value, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* CTA section */}
      <div className="bg-gradient-to-r from-teal-800 to-teal-600 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to experience the TechElite difference?</h2>
          <p className="text-teal-100 max-w-2xl mx-auto mb-8">
            Browse our selection of premium products or explore our expert services. We're here to help you find the perfect tech solution.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="primary" size="lg" className="bg-white text-teal-700 hover:bg-teal-50">
              <Link to="/products">Shop Products</Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-teal-700">
              <Link to="/services">Explore Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}