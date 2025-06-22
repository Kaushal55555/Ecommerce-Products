import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp } from 'lucide-react';
import { dummyProducts, categories } from '../utils/data';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const featuredProducts = dummyProducts.slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Buy & Sell Everything
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-primary-100">
              The best marketplace for buying and selling products online
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/products">
                <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center space-x-2">
                  <span>Browse Products</span>
                  <ArrowRight size={20} />
                </button>
              </Link>
              <Link to="/signup">
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary-600 transition-colors duration-200">
                  Start Selling
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Shop by Category
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              Find exactly what you're looking for in our organized categories
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.slice(0, 10).map((category, index) => (
              <Link
                key={category}
                to={`/products?category=${encodeURIComponent(category)}`}
                className="bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center group"
              >
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors duration-200">
                  <span className="text-primary-600 dark:text-primary-400 font-semibold">
                    {category.charAt(0)}
                  </span>
                </div>
                <h3 className="font-medium text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors duration-200">
                  {category}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                Featured Products
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Handpicked products from our top sellers
              </p>
            </div>
            <Link
              to="/products"
              className="flex items-center space-x-2 text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
            >
              <span>View All</span>
              <ArrowRight size={16} />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold mb-2">10,000+</div>
              <div className="text-primary-100">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">5,000+</div>
              <div className="text-primary-100">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-primary-100">Verified Sellers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Why Choose BuySell?
            </h2>
            <p className="text-gray-600 dark:text-gray-400">
              We make buying and selling simple, secure, and enjoyable
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Quality Products
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                All products are verified and quality-checked before listing
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Best Prices
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Competitive pricing and great deals on all products
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                Secure Transactions
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Safe and secure payment processing for all transactions
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 