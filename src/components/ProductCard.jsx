import React from 'react';
import { Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart } from 'lucide-react';
import Button from './Button';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    addToCart(product, 1);
  };

  return (
    <Link to={`/product/${product.id}`} className="group">
      <div className="card overflow-hidden h-full flex flex-col">
        <div className="relative overflow-hidden">
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-2 right-2">
            <button className="p-2 bg-white/80 hover:bg-white rounded-full transition-colors duration-200">
              <Heart size={16} className="text-gray-600" />
            </button>
          </div>
          <div className="absolute top-2 left-2">
            <span className={`px-2 py-1 text-xs font-medium rounded-full ${
              product.condition === 'New' 
                ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
            }`}>
              {product.condition}
            </span>
          </div>
        </div>
        
        <div className="p-4 flex-1 flex flex-col">
          <div className="mb-2">
            <span className="text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">
              {product.category}
            </span>
          </div>
          
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors duration-200">
            {product.title}
          </h3>
          
          <p className="text-sm text-gray-600 dark:text-gray-300 mb-3 line-clamp-2 flex-1">
            {product.description}
          </p>
          
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center space-x-1">
              <Star size={16} className="text-yellow-400 fill-current" />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                {product.seller.rating}
              </span>
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              by {product.seller.name}
            </span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              ${product.price.toFixed(2)}
            </span>
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="flex items-center space-x-1"
            >
              <ShoppingCart size={16} />
              <span>Add</span>
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard; 