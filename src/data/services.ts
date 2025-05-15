import { Service } from '../types';

export const services: Service[] = [
  {
    id: 's1',
    name: 'Premium Technical Support',
    description: 'Get priority access to our technical experts who can help resolve any issues with your devices. Includes remote troubleshooting and step-by-step guidance.',
    price: 99.99,
    image: 'https://images.pexels.com/photos/4974915/pexels-photo-4974915.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: 's2',
    name: 'Professional Website Development',
    description: 'Our team of expert developers will create a stunning, responsive website tailored to your business needs. Includes design, development, and SEO optimization.',
    price: 1499.99,
    image: 'https://images.pexels.com/photos/3194518/pexels-photo-3194518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: true
  },
  {
    id: 's3',
    name: 'Digital Marketing Consultation',
    description: 'Boost your online presence with our digital marketing expertise. Includes strategy development, SEO recommendations, and social media planning.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false
  },
  {
    id: 's4',
    name: 'Cloud Storage Solution',
    description: 'Secure, scalable cloud storage for your business. Keep your important files backed up and accessible from anywhere.',
    price: 49.99,
    image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    featured: false
  }
];