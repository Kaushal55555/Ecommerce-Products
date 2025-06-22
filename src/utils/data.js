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
  },
  {
    id: 9,
    title: 'Apple MacBook Pro 16',
    description: 'Powerful laptop with M1 Pro chip and Liquid Retina XDR display',
    price: 2499.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop',
    seller: {
      id: 1,
      name: 'TechStore',
      rating: 4.8
    },
    stock: 4,
    createdAt: '2024-01-07'
  },
  {
    id: 10,
    title: 'Canon EOS R6 Camera',
    description: 'Mirrorless camera with 20MP sensor and 4K video',
    price: 1899.99,
    category: 'Electronics',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
    seller: {
      id: 6,
      name: 'PhotoPro',
      rating: 4.9
    },
    stock: 2,
    createdAt: '2024-01-06'
  },
  {
    id: 11,
    title: 'Fitbit Versa 3',
    description: 'Health & fitness smartwatch with built-in GPS',
    price: 229.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop',
    seller: {
      id: 7,
      name: 'WearablesInc',
      rating: 4.7
    },
    stock: 10,
    createdAt: '2024-01-05'
  },
  {
    id: 12,
    title: 'GoPro HERO10',
    description: 'Action camera with 5.3K video and HyperSmooth stabilization',
    price: 499.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop',
    seller: {
      id: 8,
      name: 'ActionCams',
      rating: 4.6
    },
    stock: 6,
    createdAt: '2024-01-04'
  },
  {
    id: 13,
    title: 'Amazon Echo Dot (5th Gen)',
    description: 'Smart speaker with Alexa voice assistant',
    price: 49.99,
    category: 'Electronics',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400&h=400&fit=crop',
    seller: {
      id: 9,
      name: 'SmartHome',
      rating: 4.5
    },
    stock: 20,
    createdAt: '2024-01-03'
  },
  {
    id: 14,
    title: 'Adidas Running Shorts',
    description: 'Lightweight and breathable running shorts for men',
    price: 29.99,
    category: 'Clothing',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    seller: {
      id: 3,
      name: 'FashionHub',
      rating: 4.4
    },
    stock: 20,
    createdAt: '2024-01-02'
  },
  {
    id: 15,
    title: 'Women\'s Summer Dress',
    description: 'Floral print, casual summer dress for women',
    price: 49.99,
    category: 'Clothing',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop',
    seller: {
      id: 3,
      name: 'FashionHub',
      rating: 4.4
    },
    stock: 15,
    createdAt: '2024-01-01'
  },
  {
    id: 16,
    title: 'Unisex Hoodie',
    description: 'Comfortable cotton hoodie for all seasons',
    price: 39.99,
    category: 'Clothing',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?w=400&h=400&fit=crop',
    seller: {
      id: 10,
      name: 'UrbanWear',
      rating: 4.3
    },
    stock: 18,
    createdAt: '2023-12-30'
  },
  {
    id: 17,
    title: 'Classic Blue Jeans',
    description: 'Straight fit, classic blue denim jeans',
    price: 59.99,
    category: 'Clothing',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    seller: {
      id: 3,
      name: 'FashionHub',
      rating: 4.4
    },
    stock: 10,
    createdAt: '2023-12-29'
  },
  {
    id: 18,
    title: 'Men\'s Formal Shirt',
    description: 'Slim fit, white formal shirt for men',
    price: 34.99,
    category: 'Clothing',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1469398715555-76331a6c7b29?w=400&h=400&fit=crop',
    seller: {
      id: 11,
      name: 'OfficeAttire',
      rating: 4.2
    },
    stock: 12,
    createdAt: '2023-12-28'
  },
  {
    id: 19,
    title: 'Women\'s Winter Coat',
    description: 'Warm and stylish winter coat for women',
    price: 119.99,
    category: 'Clothing',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    seller: {
      id: 3,
      name: 'FashionHub',
      rating: 4.4
    },
    stock: 7,
    createdAt: '2023-12-27'
  },
  {
    id: 20,
    title: 'Kids\' Graphic T-Shirt',
    description: 'Colorful t-shirt with fun graphic print for kids',
    price: 19.99,
    category: 'Clothing',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    seller: {
      id: 12,
      name: 'KidsStyle',
      rating: 4.1
    },
    stock: 25,
    createdAt: '2023-12-26'
  },
  {
    id: 21,
    title: 'Sports Tracksuit',
    description: 'Breathable tracksuit for sports and workouts',
    price: 69.99,
    category: 'Clothing',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1512436991641-6745cdb1723f?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 14,
    createdAt: '2023-12-25'
  },
  {
    id: 22,
    title: 'Modern Table Lamp',
    description: 'Stylish LED table lamp for living room or bedroom',
    price: 59.99,
    category: 'Home & Garden',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
    seller: {
      id: 5,
      name: 'HomeEssentials',
      rating: 4.5
    },
    stock: 10,
    createdAt: '2023-12-24'
  },
  {
    id: 23,
    title: 'Memory Foam Pillow',
    description: 'Ergonomic memory foam pillow for better sleep',
    price: 24.99,
    category: 'Home & Garden',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?w=400&h=400&fit=crop',
    seller: {
      id: 5,
      name: 'HomeEssentials',
      rating: 4.5
    },
    stock: 30,
    createdAt: '2023-12-23'
  },
  {
    id: 24,
    title: 'Nonstick Cookware Set',
    description: '10-piece nonstick cookware set for all your kitchen needs',
    price: 99.99,
    category: 'Home & Garden',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=400&fit=crop',
    seller: {
      id: 13,
      name: 'KitchenPro',
      rating: 4.6
    },
    stock: 8,
    createdAt: '2023-12-22'
  },
  {
    id: 25,
    title: 'Indoor Plant Set',
    description: 'Set of 3 easy-care indoor plants with pots',
    price: 34.99,
    category: 'Home & Garden',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
    seller: {
      id: 14,
      name: 'GreenThumb',
      rating: 4.7
    },
    stock: 16,
    createdAt: '2023-12-21'
  },
  {
    id: 26,
    title: 'Wall Art Canvas',
    description: 'Abstract wall art canvas for home decoration',
    price: 44.99,
    category: 'Home & Garden',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1464983953574-0892a716854b?w=400&h=400&fit=crop',
    seller: {
      id: 15,
      name: 'Artify',
      rating: 4.8
    },
    stock: 12,
    createdAt: '2023-12-20'
  },
  {
    id: 27,
    title: 'Vacuum Cleaner',
    description: 'Bagless vacuum cleaner with HEPA filter',
    price: 129.99,
    category: 'Home & Garden',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?w=400&h=400&fit=crop',
    seller: {
      id: 5,
      name: 'HomeEssentials',
      rating: 4.5
    },
    stock: 5,
    createdAt: '2023-12-19'
  },
  {
    id: 28,
    title: 'Wilson Tennis Racket',
    description: 'Lightweight graphite tennis racket for all skill levels',
    price: 89.99,
    category: 'Sports & Outdoors',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 10,
    createdAt: '2023-12-18'
  },
  {
    id: 29,
    title: 'Camping Tent 4-Person',
    description: 'Waterproof camping tent suitable for 4 people',
    price: 149.99,
    category: 'Sports & Outdoors',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=400&h=400&fit=crop',
    seller: {
      id: 16,
      name: 'OutdoorGear',
      rating: 4.7
    },
    stock: 5,
    createdAt: '2023-12-17'
  },
  {
    id: 30,
    title: 'Adjustable Dumbbells',
    description: 'Pair of adjustable dumbbells for home workouts',
    price: 119.99,
    category: 'Sports & Outdoors',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1519864600265-abb23847ef2c?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 8,
    createdAt: '2023-12-16'
  },
  {
    id: 31,
    title: 'Mountain Bike',
    description: '21-speed mountain bike with aluminum frame',
    price: 399.99,
    category: 'Sports & Outdoors',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1508780709619-79562169bc64?w=400&h=400&fit=crop',
    seller: {
      id: 17,
      name: 'BikeShop',
      rating: 4.8
    },
    stock: 3,
    createdAt: '2023-12-15'
  },
  {
    id: 32,
    title: 'Soccer Ball',
    description: 'Official size and weight soccer ball',
    price: 24.99,
    category: 'Sports & Outdoors',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400&h=400&fit=crop',
    seller: {
      id: 2,
      name: 'SportWorld',
      rating: 4.6
    },
    stock: 20,
    createdAt: '2023-12-14'
  },
  {
    id: 33,
    title: 'Fishing Rod Combo',
    description: 'Telescopic fishing rod and spinning reel combo',
    price: 59.99,
    category: 'Sports & Outdoors',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?w=400&h=400&fit=crop',
    seller: {
      id: 18,
      name: 'AnglerPro',
      rating: 4.5
    },
    stock: 7,
    createdAt: '2023-12-13'
  },
  {
    id: 34,
    title: 'The Great Gatsby',
    description: 'Classic novel by F. Scott Fitzgerald in hardcover',
    price: 12.99,
    category: 'Books & Media',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    seller: {
      id: 19,
      name: 'BookWorm',
      rating: 4.6
    },
    stock: 15,
    createdAt: '2023-12-12'
  },
  {
    id: 35,
    title: 'Bluetooth Speaker',
    description: 'Portable waterproof Bluetooth speaker with 20-hour battery',
    price: 79.99,
    category: 'Books & Media',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400&h=400&fit=crop',
    seller: {
      id: 20,
      name: 'AudioTech',
      rating: 4.7
    },
    stock: 12,
    createdAt: '2023-12-11'
  },
  {
    id: 36,
    title: 'Harry Potter Complete Set',
    description: 'Complete 7-book Harry Potter series in box set',
    price: 89.99,
    category: 'Books & Media',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    seller: {
      id: 19,
      name: 'BookWorm',
      rating: 4.6
    },
    stock: 5,
    createdAt: '2023-12-10'
  },
  {
    id: 37,
    title: 'Vinyl Record Player',
    description: 'Retro-style vinyl record player with built-in speakers',
    price: 149.99,
    category: 'Books & Media',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=400&h=400&fit=crop',
    seller: {
      id: 20,
      name: 'AudioTech',
      rating: 4.7
    },
    stock: 8,
    createdAt: '2023-12-09'
  },
  {
    id: 38,
    title: 'Cooking Recipe Book',
    description: 'Comprehensive cookbook with 500+ recipes',
    price: 24.99,
    category: 'Books & Media',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    seller: {
      id: 19,
      name: 'BookWorm',
      rating: 4.6
    },
    stock: 20,
    createdAt: '2023-12-08'
  },
  {
    id: 39,
    title: 'Wireless Earbuds',
    description: 'True wireless earbuds with noise cancellation',
    price: 129.99,
    category: 'Books & Media',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    seller: {
      id: 20,
      name: 'AudioTech',
      rating: 4.7
    },
    stock: 10,
    createdAt: '2023-12-07'
  },
  {
    id: 40,
    title: 'Self-Help Book Collection',
    description: 'Set of 5 bestselling self-help and motivation books',
    price: 39.99,
    category: 'Books & Media',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop',
    seller: {
      id: 19,
      name: 'BookWorm',
      rating: 4.6
    },
    stock: 7,
    createdAt: '2023-12-06'
  },
  {
    id: 41,
    title: 'Gaming Headset',
    description: '7.1 surround sound gaming headset with microphone',
    price: 89.99,
    category: 'Books & Media',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    seller: {
      id: 21,
      name: 'GameGear',
      rating: 4.5
    },
    stock: 15,
    createdAt: '2023-12-05'
  },
  {
    id: 42,
    title: 'Car Phone Mount',
    description: 'Universal car phone holder with suction cup mount',
    price: 19.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 22,
      name: 'AutoParts',
      rating: 4.4
    },
    stock: 25,
    createdAt: '2023-12-04'
  },
  {
    id: 43,
    title: 'Dash Camera',
    description: '1080p HD dash cam with night vision and loop recording',
    price: 89.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 22,
      name: 'AutoParts',
      rating: 4.4
    },
    stock: 12,
    createdAt: '2023-12-03'
  },
  {
    id: 44,
    title: 'Car Floor Mats',
    description: 'All-weather car floor mats for front and back seats',
    price: 34.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 23,
      name: 'CarAccessories',
      rating: 4.3
    },
    stock: 18,
    createdAt: '2023-12-02'
  },
  {
    id: 45,
    title: 'Jump Starter',
    description: 'Portable car jump starter with USB charger',
    price: 69.99,
    category: 'Automotive',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 22,
      name: 'AutoParts',
      rating: 4.4
    },
    stock: 8,
    createdAt: '2023-12-01'
  },
  {
    id: 46,
    title: 'Car Air Freshener',
    description: 'Long-lasting car air freshener with natural scent',
    price: 9.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 23,
      name: 'CarAccessories',
      rating: 4.3
    },
    stock: 30,
    createdAt: '2023-11-30'
  },
  {
    id: 47,
    title: 'Steering Wheel Cover',
    description: 'Leather steering wheel cover with anti-slip grip',
    price: 24.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 23,
      name: 'CarAccessories',
      rating: 4.3
    },
    stock: 15,
    createdAt: '2023-11-29'
  },
  {
    id: 48,
    title: 'Car Wash Kit',
    description: 'Complete car washing kit with microfiber towels',
    price: 44.99,
    category: 'Automotive',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 24,
      name: 'CarCare',
      rating: 4.5
    },
    stock: 10,
    createdAt: '2023-11-28'
  },
  {
    id: 49,
    title: 'Bluetooth Car Adapter',
    description: 'Wireless Bluetooth adapter for older car stereos',
    price: 29.99,
    category: 'Automotive',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=400&h=400&fit=crop',
    seller: {
      id: 22,
      name: 'AutoParts',
      rating: 4.4
    },
    stock: 14,
    createdAt: '2023-11-27'
  },
  {
    id: 50,
    title: 'Electric Toothbrush',
    description: 'Sonic electric toothbrush with 3 cleaning modes',
    price: 79.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 25,
      name: 'BeautyPro',
      rating: 4.6
    },
    stock: 15,
    createdAt: '2023-11-26'
  },
  {
    id: 51,
    title: 'Facial Moisturizer',
    description: 'Hydrating facial moisturizer with SPF 30',
    price: 24.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 25,
      name: 'BeautyPro',
      rating: 4.6
    },
    stock: 25,
    createdAt: '2023-11-25'
  },
  {
    id: 52,
    title: 'Hair Dryer',
    description: 'Professional hair dryer with ionic technology',
    price: 89.99,
    category: 'Health & Beauty',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 26,
      name: 'HairCare',
      rating: 4.5
    },
    stock: 8,
    createdAt: '2023-11-24'
  },
  {
    id: 53,
    title: 'Vitamin C Serum',
    description: 'Brightening vitamin C serum for all skin types',
    price: 34.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 25,
      name: 'BeautyPro',
      rating: 4.6
    },
    stock: 18,
    createdAt: '2023-11-23'
  },
  {
    id: 54,
    title: 'Yoga Block Set',
    description: 'Set of 2 high-density foam yoga blocks',
    price: 19.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 27,
      name: 'WellnessStore',
      rating: 4.4
    },
    stock: 30,
    createdAt: '2023-11-22'
  },
  {
    id: 55,
    title: 'Makeup Brush Set',
    description: 'Professional makeup brush set with case',
    price: 49.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 25,
      name: 'BeautyPro',
      rating: 4.6
    },
    stock: 12,
    createdAt: '2023-11-21'
  },
  {
    id: 56,
    title: 'Essential Oil Diffuser',
    description: 'Ultrasonic essential oil diffuser with LED lights',
    price: 39.99,
    category: 'Health & Beauty',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 27,
      name: 'WellnessStore',
      rating: 4.4
    },
    stock: 10,
    createdAt: '2023-11-20'
  },
  {
    id: 57,
    title: 'Hair Straightener',
    description: 'Ceramic hair straightener with temperature control',
    price: 69.99,
    category: 'Health & Beauty',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1559591935-c6c92c6c2c8b?w=400&h=400&fit=crop',
    seller: {
      id: 26,
      name: 'HairCare',
      rating: 4.5
    },
    stock: 14,
    createdAt: '2023-11-19'
  },
  {
    id: 58,
    title: 'LEGO Star Wars Set',
    description: 'Millennium Falcon LEGO building set with 1,329 pieces',
    price: 159.99,
    category: 'Toys & Games',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 28,
      name: 'ToyStore',
      rating: 4.7
    },
    stock: 5,
    createdAt: '2023-11-18'
  },
  {
    id: 59,
    title: 'Board Game Collection',
    description: 'Set of 5 popular board games for family fun',
    price: 79.99,
    category: 'Toys & Games',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 28,
      name: 'ToyStore',
      rating: 4.7
    },
    stock: 8,
    createdAt: '2023-11-17'
  },
  {
    id: 60,
    title: 'Remote Control Car',
    description: 'High-speed RC car with 4WD and rechargeable battery',
    price: 89.99,
    category: 'Toys & Games',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 29,
      name: 'RCToys',
      rating: 4.5
    },
    stock: 12,
    createdAt: '2023-11-16'
  },
  {
    id: 61,
    title: 'Puzzle Set',
    description: '1000-piece jigsaw puzzle with beautiful landscape',
    price: 19.99,
    category: 'Toys & Games',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 28,
      name: 'ToyStore',
      rating: 4.7
    },
    stock: 20,
    createdAt: '2023-11-15'
  },
  {
    id: 62,
    title: 'Doll House',
    description: '3-story doll house with furniture and accessories',
    price: 129.99,
    category: 'Toys & Games',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 30,
      name: 'KidsToys',
      rating: 4.3
    },
    stock: 3,
    createdAt: '2023-11-14'
  },
  {
    id: 63,
    title: 'Video Game Console',
    description: 'Latest gaming console with 2 controllers',
    price: 399.99,
    category: 'Toys & Games',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 31,
      name: 'GameZone',
      rating: 4.8
    },
    stock: 4,
    createdAt: '2023-11-13'
  },
  {
    id: 64,
    title: 'Art Supplies Kit',
    description: 'Complete art kit with paints, brushes, and canvas',
    price: 34.99,
    category: 'Toys & Games',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 32,
      name: 'CreativeKids',
      rating: 4.4
    },
    stock: 15,
    createdAt: '2023-11-12'
  },
  {
    id: 65,
    title: 'Science Experiment Kit',
    description: 'Educational science kit with 50+ experiments',
    price: 49.99,
    category: 'Toys & Games',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=400&h=400&fit=crop',
    seller: {
      id: 33,
      name: 'ScienceToys',
      rating: 4.6
    },
    stock: 10,
    createdAt: '2023-11-11'
  },
  {
    id: 66,
    title: 'Diamond Ring',
    description: '14K white gold diamond ring with 0.5 carat center stone',
    price: 1299.99,
    category: 'Jewelry & Watches',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    seller: {
      id: 34,
      name: 'LuxuryJewelry',
      rating: 4.9
    },
    stock: 2,
    createdAt: '2023-11-10'
  },
  {
    id: 67,
    title: 'Swiss Watch',
    description: 'Automatic Swiss watch with leather strap',
    price: 899.99,
    category: 'Jewelry & Watches',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    seller: {
      id: 35,
      name: 'TimePiece',
      rating: 4.8
    },
    stock: 3,
    createdAt: '2023-11-09'
  },
  {
    id: 68,
    title: 'Pearl Necklace',
    description: 'Freshwater pearl necklace with 18-inch chain',
    price: 149.99,
    category: 'Jewelry & Watches',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    seller: {
      id: 34,
      name: 'LuxuryJewelry',
      rating: 4.9
    },
    stock: 8,
    createdAt: '2023-11-08'
  },
  {
    id: 69,
    title: 'Smart Watch',
    description: 'Fitness smartwatch with heart rate monitor',
    price: 299.99,
    category: 'Jewelry & Watches',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    seller: {
      id: 35,
      name: 'TimePiece',
      rating: 4.8
    },
    stock: 12,
    createdAt: '2023-11-07'
  },
  {
    id: 70,
    title: 'Gold Bracelet',
    description: '18K gold bracelet with intricate design',
    price: 599.99,
    category: 'Jewelry & Watches',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    seller: {
      id: 34,
      name: 'LuxuryJewelry',
      rating: 4.9
    },
    stock: 4,
    createdAt: '2023-11-06'
  },
  {
    id: 71,
    title: 'Silver Earrings',
    description: 'Sterling silver stud earrings with cubic zirconia',
    price: 79.99,
    category: 'Jewelry & Watches',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    seller: {
      id: 36,
      name: 'SilverCraft',
      rating: 4.6
    },
    stock: 15,
    createdAt: '2023-11-05'
  },
  {
    id: 72,
    title: 'Chronograph Watch',
    description: 'Stainless steel chronograph watch with date display',
    price: 249.99,
    category: 'Jewelry & Watches',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop',
    seller: {
      id: 35,
      name: 'TimePiece',
      rating: 4.8
    },
    stock: 6,
    createdAt: '2023-11-04'
  },
  {
    id: 73,
    title: 'Gemstone Ring',
    description: 'Sapphire and diamond ring in rose gold setting',
    price: 799.99,
    category: 'Jewelry & Watches',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
    seller: {
      id: 34,
      name: 'LuxuryJewelry',
      rating: 4.9
    },
    stock: 3,
    createdAt: '2023-11-03'
  },
  {
    id: 74,
    title: 'Oil Painting',
    description: 'Original oil painting of landscape scene',
    price: 599.99,
    category: 'Art & Collectibles',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 37,
      name: 'ArtGallery',
      rating: 4.8
    },
    stock: 1,
    createdAt: '2023-11-02'
  },
  {
    id: 75,
    title: 'Vintage Coin Collection',
    description: 'Collection of rare vintage coins from 1800s',
    price: 899.99,
    category: 'Art & Collectibles',
    condition: 'Fair',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 38,
      name: 'CoinCollector',
      rating: 4.9
    },
    stock: 1,
    createdAt: '2023-11-01'
  },
  {
    id: 76,
    title: 'Sculpture',
    description: 'Bronze sculpture of abstract art piece',
    price: 1299.99,
    category: 'Art & Collectibles',
    condition: 'Like New',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 37,
      name: 'ArtGallery',
      rating: 4.8
    },
    stock: 1,
    createdAt: '2023-10-31'
  },
  {
    id: 77,
    title: 'Comic Book Collection',
    description: 'Rare comic book collection from 1960s',
    price: 499.99,
    category: 'Art & Collectibles',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 39,
      name: 'ComicStore',
      rating: 4.7
    },
    stock: 1,
    createdAt: '2023-10-30'
  },
  {
    id: 78,
    title: 'Watercolor Art',
    description: 'Hand-painted watercolor artwork on canvas',
    price: 299.99,
    category: 'Art & Collectibles',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 37,
      name: 'ArtGallery',
      rating: 4.8
    },
    stock: 3,
    createdAt: '2023-10-29'
  },
  {
    id: 79,
    title: 'Antique Vase',
    description: 'Chinese antique vase from Ming dynasty',
    price: 2499.99,
    category: 'Art & Collectibles',
    condition: 'Fair',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 40,
      name: 'AntiqueDealer',
      rating: 4.9
    },
    stock: 1,
    createdAt: '2023-10-28'
  },
  {
    id: 80,
    title: 'Photography Print',
    description: 'Limited edition photography print signed by artist',
    price: 199.99,
    category: 'Art & Collectibles',
    condition: 'New',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 41,
      name: 'PhotoArt',
      rating: 4.6
    },
    stock: 5,
    createdAt: '2023-10-27'
  },
  {
    id: 81,
    title: 'Stamp Collection',
    description: 'Rare stamp collection from around the world',
    price: 399.99,
    category: 'Art & Collectibles',
    condition: 'Good',
    image: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=400&h=400&fit=crop',
    seller: {
      id: 42,
      name: 'StampWorld',
      rating: 4.5
    },
    stock: 1,
    createdAt: '2023-10-26'
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