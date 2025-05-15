import { Product } from '../types';

const INITIAL_PRODUCTS: Product[] = [
  {
    id: 'p1',
    name: 'Premium Wireless Headphones',
    description: 'High-quality wireless headphones with noise cancellation and premium sound quality. Perfect for music lovers and professionals.',
    price: 299.99,
    image: 'https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'audio',
    featured: true
  },
  {
    id: 'p2',
    name: 'Smart Watch Pro',
    description: 'Advanced smartwatch with health tracking, notifications, and a sleek design. Stay connected and monitor your fitness.',
    price: 249.99,
    image: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'wearables',
    featured: true
  },
  {
    id: 'p3',
    name: 'Ultra HD Camera',
    description: 'Professional-grade camera with 4K video capabilities and advanced photo features. Capture life\'s moments in stunning detail.',
    price: 899.99,
    image: 'https://images.pexels.com/photos/51383/photo-camera-subject-photographer-51383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'photography',
    featured: true
  },
  {
    id: 'p4',
    name: 'Gaming Laptop',
    description: 'High-performance gaming laptop with the latest graphics and processor. Experience gaming at its finest.',
    price: 1499.99,
    image: 'https://images.pexels.com/photos/1229861/pexels-photo-1229861.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'computers',
    featured: false
  }
];

// Initialize localStorage with default products if empty
if (!localStorage.getItem('products')) {
  localStorage.setItem('products', JSON.stringify(INITIAL_PRODUCTS));
}

export const getProducts = async (): Promise<Product[]> => {
  const products = localStorage.getItem('products');
  return products ? JSON.parse(products) : [];
};

export const addProduct = async (product: Omit<Product, 'id'>): Promise<Product | null> => {
  const newProduct = {
    ...product,
    id: `p${Date.now()}`
  };
  
  const products = await getProducts();
  const updatedProducts = [...products, newProduct];
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  
  return newProduct;
};

export const updateProduct = async (id: string, product: Partial<Product>): Promise<Product | null> => {
  const products = await getProducts();
  const updatedProducts = products.map(p => 
    p.id === id ? { ...p, ...product } : p
  );
  
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  return updatedProducts.find(p => p.id === id) || null;
};

export const deleteProduct = async (id: string): Promise<boolean> => {
  const products = await getProducts();
  const updatedProducts = products.filter(p => p.id !== id);
  
  localStorage.setItem('products', JSON.stringify(updatedProducts));
  return true;
};