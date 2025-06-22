import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ArrowLeft, CreditCard } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';
import Button from '../components/Button';

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
      toast.success('Item removed from cart');
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const handleCheckout = () => {
    // In a real app, this would redirect to a checkout page
    toast.success('Redirecting to checkout...');
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center py-12">
            <div className="text-gray-400 dark:text-gray-500 mb-4">
              <svg className="mx-auto h-24 w-24" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m6 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              Looks like you haven't added any items to your cart yet.
            </p>
            <Link to="/products">
              <Button className="flex items-center space-x-2">
                <ArrowLeft size={16} />
                <span>Continue Shopping</span>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Shopping Cart
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            {cart.length} {cart.length === 1 ? 'item' : 'items'} in your cart
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
              <div className="p-6">
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center space-x-4 py-4 border-b border-gray-200 dark:border-gray-700 last:border-b-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-medium text-gray-900 dark:text-white truncate">
                          {item.title}
                        </h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          {item.category} • {item.condition}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          by {item.seller.name}
                        </p>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          -
                        </button>
                        <span className="w-12 text-center text-gray-900 dark:text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          +
                        </button>
                      </div>
                      
                      <div className="text-right">
                        <p className="text-lg font-medium text-gray-900 dark:text-white">
                          ${(item.price * item.quantity).toFixed(2)}
                        </p>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          ${item.price.toFixed(2)} each
                        </p>
                      </div>
                      
                      <button
                        onClick={() => {
                          removeFromCart(item.id);
                          toast.success('Item removed from cart');
                        }}
                        className="text-red-500 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Order Summary
              </h2>
              
              <div className="space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Subtotal</span>
                  <span className="text-gray-900 dark:text-white">${getCartTotal().toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Shipping</span>
                  <span className="text-green-600 dark:text-green-400">Free</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600 dark:text-gray-400">Tax</span>
                  <span className="text-gray-900 dark:text-white">${(getCartTotal() * 0.08).toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-200 dark:border-gray-700 pt-3">
                  <div className="flex justify-between text-lg font-semibold">
                    <span className="text-gray-900 dark:text-white">Total</span>
                    <span className="text-gray-900 dark:text-white">
                      ${(getCartTotal() * 1.08).toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="space-y-3">
                <Button
                  onClick={handleCheckout}
                  className="w-full flex items-center justify-center space-x-2"
                >
                  <CreditCard size={20} />
                  <span>Proceed to Checkout</span>
                </Button>
                
                <Link to="/products">
                  <Button variant="outline" className="w-full">
                    Continue Shopping
                  </Button>
                </Link>
                
                <Button
                  variant="secondary"
                  onClick={() => {
                    clearCart();
                    toast.success('Cart cleared');
                  }}
                  className="w-full"
                >
                  Clear Cart
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                <h3 className="text-sm font-medium text-gray-900 dark:text-white mb-2">
                  Secure Checkout
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Your payment information is encrypted and secure. We never store your credit card details.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart; 