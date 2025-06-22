import React, { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { dummyProducts } from '../utils/data';
import { toast } from 'react-hot-toast';
import { Plus, Edit, Trash2, Eye, TrendingUp, Package, DollarSign } from 'lucide-react';
import Button from '../components/Button';
import Input from '../components/Input';

const Dashboard = () => {
  const { user } = useAuth();
  const [products, setProducts] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    category: '',
    condition: '',
    image: '',
    stock: ''
  });

  useEffect(() => {
    // Filter products by current seller (in a real app, this would come from an API)
    const sellerProducts = dummyProducts.filter(p => p.seller.id === user?.id);
    setProducts(sellerProducts);
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (editingProduct) {
      // Update existing product
      const updatedProducts = products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, price: parseFloat(formData.price), stock: parseInt(formData.stock) }
          : p
      );
      setProducts(updatedProducts);
      toast.success('Product updated successfully!');
    } else {
      // Add new product
      const newProduct = {
        id: Date.now(),
        ...formData,
        price: parseFloat(formData.price),
        stock: parseInt(formData.stock),
        seller: {
          id: user.id,
          name: user.name,
          rating: 4.5
        },
        createdAt: new Date().toISOString().split('T')[0]
      };
      setProducts([...products, newProduct]);
      toast.success('Product added successfully!');
    }
    
    resetForm();
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData({
      title: product.title,
      description: product.description,
      price: product.price.toString(),
      category: product.category,
      condition: product.condition,
      image: product.image,
      stock: product.stock.toString()
    });
    setShowAddForm(true);
  };

  const handleDelete = (productId) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== productId));
      toast.success('Product deleted successfully!');
    }
  };

  const resetForm = () => {
    setFormData({
      title: '',
      description: '',
      price: '',
      category: '',
      condition: '',
      image: '',
      stock: ''
    });
    setEditingProduct(null);
    setShowAddForm(false);
  };

  const stats = {
    totalProducts: products.length,
    totalValue: products.reduce((sum, p) => sum + (p.price * p.stock), 0),
    totalStock: products.reduce((sum, p) => sum + p.stock, 0)
  };

  if (!user || user.role !== 'seller') {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Access Denied
          </h2>
          <p className="text-gray-600 dark:text-gray-400">
            You need seller permissions to access this page.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
            Seller Dashboard
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Manage your products and track your sales
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <Package className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Products</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalProducts}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <DollarSign className="w-6 h-6 text-green-600 dark:text-green-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Value</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">${stats.totalValue.toFixed(2)}</p>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <div className="flex items-center">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <TrendingUp className="w-6 h-6 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400">Total Stock</p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white">{stats.totalStock}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Add Product Button */}
        <div className="mb-6">
          <Button
            onClick={() => setShowAddForm(true)}
            className="flex items-center space-x-2"
          >
            <Plus size={20} />
            <span>Add New Product</span>
          </Button>
        </div>

        {/* Add/Edit Product Form */}
        {showAddForm && (
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              {editingProduct ? 'Edit Product' : 'Add New Product'}
            </h2>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input
                  label="Product Title"
                  name="title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
                
                <Input
                  label="Price"
                  type="number"
                  name="price"
                  value={formData.price}
                  onChange={(e) => setFormData({ ...formData, price: e.target.value })}
                  step="0.01"
                  required
                />
                
                <Input
                  label="Category"
                  name="category"
                  value={formData.category}
                  onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                  required
                />
                
                <Input
                  label="Condition"
                  name="condition"
                  value={formData.condition}
                  onChange={(e) => setFormData({ ...formData, condition: e.target.value })}
                  required
                />
                
                <Input
                  label="Stock Quantity"
                  type="number"
                  name="stock"
                  value={formData.stock}
                  onChange={(e) => setFormData({ ...formData, stock: e.target.value })}
                  required
                />
                
                <Input
                  label="Image URL"
                  name="image"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Description
                </label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-gray-800 dark:border-gray-600 dark:text-white"
                  required
                />
              </div>
              
              <div className="flex space-x-3">
                <Button type="submit">
                  {editingProduct ? 'Update Product' : 'Add Product'}
                </Button>
                <Button type="button" variant="secondary" onClick={resetForm}>
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        )}

        {/* Products List */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md">
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              Your Products
            </h2>
            
            {products.length === 0 ? (
              <div className="text-center py-8">
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  You haven't added any products yet.
                </p>
                <Button onClick={() => setShowAddForm(true)}>
                  Add Your First Product
                </Button>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Product
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Category
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Price
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Stock
                      </th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {products.map((product) => (
                      <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <img
                              src={product.image}
                              alt={product.title}
                              className="w-10 h-10 object-cover rounded-lg"
                            />
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900 dark:text-white">
                                {product.title}
                              </div>
                              <div className="text-sm text-gray-500 dark:text-gray-400">
                                {product.condition}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          ${product.price.toFixed(2)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">
                          {product.stock}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                          <div className="flex space-x-2">
                            <button
                              onClick={() => handleEdit(product)}
                              className="text-primary-600 hover:text-primary-900 dark:text-primary-400 dark:hover:text-primary-300"
                            >
                              <Edit size={16} />
                            </button>
                            <button
                              onClick={() => handleDelete(product.id)}
                              className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 