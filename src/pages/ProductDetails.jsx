import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { dummyProducts } from '../utils/data';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';
import ProductCard from '../components/ProductCard';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    const foundProduct = dummyProducts.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
    
    if (foundProduct) {
      // Get related products from same category
      const related = dummyProducts
        .filter(p => p.category === foundProduct.category && p.id !== foundProduct.id)
        .slice(0, 4);
      setRelatedProducts(related);
    }
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity);
      toast.success(`Added ${quantity} ${quantity === 1 ? 'item' : 'items'} to cart`);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addToCart(product, quantity);
      // In a real app, this would redirect to checkout
      toast.success('Redirecting to checkout...');
    }
  };

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Product not found
          </h2>
          <Link to="/products">
            <Button>Back to Products</Button>
          </Link>
        </div>
      </div>
    );
  }

  const images = [product.image]; // In a real app, this would be an array of images

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            to="/products"
            className="flex items-center text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400"
          >
            <ArrowLeft size={16} className="mr-2" />
            Back to Products
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-w-1 aspect-h-1 w-full">
              <img
                src={images[selectedImage]}
                alt={product.title}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
            {images.length > 1 && (
              <div className="grid grid-cols-4 gap-2">
                {images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-w-1 aspect-h-1 w-full rounded-lg overflow-hidden ${
                      selectedImage === index ? 'ring-2 ring-primary-500' : ''
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.title} ${index + 1}`}
                      className="w-full h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center space-x-2 mb-2">
                <span className="text-sm text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  {product.category}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                  product.condition === 'New' 
                    ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200'
                    : 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
                }`}>
                  {product.condition}
                </span>
              </div>
              
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {product.title}
              </h1>
              
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center space-x-1">
                  <Star className="text-yellow-400 fill-current" size={20} />
                  <span className="text-gray-600 dark:text-gray-300">
                    {product.seller.rating}
                  </span>
                </div>
                <span className="text-gray-500 dark:text-gray-400">
                  by {product.seller.name}
                </span>
              </div>
              
              <div className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                ${product.price.toFixed(2)}
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {product.description}
              </p>
              
              <div className="flex items-center space-x-4 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center space-x-1">
                  <Truck size={16} />
                  <span>Free shipping</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Shield size={16} />
                  <span>Secure payment</span>
                </div>
                <div className="flex items-center space-x-1">
                  <RotateCcw size={16} />
                  <span>30-day returns</span>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  Quantity:
                </label>
                <div className="flex items-center border border-gray-300 dark:border-gray-600 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    -
                  </button>
                  <span className="px-4 py-1 text-gray-900 dark:text-white">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                    className="px-3 py-1 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                  >
                    +
                  </button>
                </div>
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {product.stock} in stock
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 flex items-center justify-center space-x-2"
                  disabled={product.stock === 0}
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </Button>
                
                <Button
                  onClick={handleBuyNow}
                  variant="outline"
                  className="flex-1"
                  disabled={product.stock === 0}
                >
                  Buy Now
                </Button>
                
                <button className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200">
                  <Heart size={20} className="text-gray-600 dark:text-gray-400" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <ProductCard key={relatedProduct.id} product={relatedProduct} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetails; 