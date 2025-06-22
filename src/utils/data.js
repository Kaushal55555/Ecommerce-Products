export const categories = [
  'Electronics',
  'Clothing',
  'Home & Garden',
  'Sports & Outdoors',
  'Books & Media',
  'Automotive',
  'Health & Beauty',
  'Toys & Games',
  'Jewelry & Watches',
  'Art & Collectibles'
];

export const conditions = ['New', 'Like New', 'Good', 'Fair', 'Used'];

export const dummyProducts = [
  {
    id: 1,
    title: 'iPhone 14 Pro',
    description: 'Latest iPhone with advanced camera system and A16 Bionic chip',
    price: 999.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop',
    seller: {
      id: 1,
      name: 'TechStore',
      rating: 4.8
    },
    stock: 5,
    createdAt: '2024-01-15'
  },
  {
    id: 2,
    title: 'Nike Air Max 270',
    description: 'Comfortable running shoes with Air Max technology',
    price: 129.99,
    category: 'Sports & Outdoors',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 12,
    createdAt: '2024-01-14'
  },
  {
    id: 3,
    title: 'Samsung 4K Smart TV',
    description: '55-inch 4K Ultra HD Smart TV with HDR',
    price: 699.99,
    category: 'Electronics',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400&h=400&fit=crop',
    seller: {
      id: 1,
      name: 'TechStore',
      rating: 4.8
    },
    stock: 3,
    createdAt: '2024-01-13'
  },
  {
    id: 4,
    title: 'Leather Jacket',
    description: 'Classic black leather jacket, perfect for any occasion',
    price: 199.99,
    category: 'Clothing',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=400&fit=crop',
    seller: {
      id: 3,
      name: 'FashionHub',
      rating: 4.4
    },
    stock: 8,
    createdAt: '2024-01-12'
  },
  {
    id: 5,
    title: 'Garden Tool Set',
    description: 'Complete set of essential gardening tools',
    price: 89.99,
    category: 'Home & Garden',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop',
    seller: {
      id: 4,
      name: 'GardenCenter',
      rating: 4.7
    },
    stock: 15,
    createdAt: '2024-01-11'
  },
  {
    id: 6,
    title: 'Wireless Headphones',
    description: 'Noise-cancelling wireless headphones with 30-hour battery life',
    price: 249.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    seller: {
      id: 1,
      name: 'TechStore',
      rating: 4.8
    },
    stock: 7,
    createdAt: '2024-01-10'
  },
  {
    id: 7,
    title: 'Yoga Mat',
    description: 'Premium non-slip yoga mat with carrying strap',
    price: 39.99,
    category: 'Sports & Outdoors',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 25,
    createdAt: '2024-01-09'
  },
  {
    id: 8,
    title: 'Coffee Maker',
    description: 'Programmable coffee maker with thermal carafe',
    price: 79.99,
    category: 'Home & Garden',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=400&h=400&fit=crop',
    seller: {
      id: 5,
      name: 'HomeEssentials',
      rating: 4.5
    },
    stock: 6,
    createdAt: '2024-01-08'
  }
];

export const dummyUsers = [
  {
    id: 1,
    email: 'admin@example.com',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    createdAt: '2024-01-01'
  },
  {
    id: 2,
    email: 'seller@example.com',
    password: 'seller123',
    name: 'John Seller',
    role: 'seller',
    createdAt: '2024-01-02'
  },
  {
    id: 3,
    email: 'buyer@example.com',
    password: 'buyer123',
    name: 'Jane Buyer',
    role: 'buyer',
    createdAt: '2024-01-03'
  }
]; 