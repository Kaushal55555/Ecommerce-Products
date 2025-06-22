import { createContext, useContext, useState, useEffect } from 'react';
import { dummyUsers } from '../utils/data';

const AuthContext = createContext();

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check for stored user data on app load
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    const foundUser = dummyUsers.find(
      u => u.email === email && u.password === password
    );
    
    if (foundUser) {
      const { password: _, ...userWithoutPassword } = foundUser;
      setUser(userWithoutPassword);
      localStorage.setItem('user', JSON.stringify(userWithoutPassword));
      return { success: true };
    }
    
    return { success: false, error: 'Invalid email or password' };
  };

  const signup = (name, email, password, role = 'buyer') => {
    // Check if user already exists
    const existingUser = dummyUsers.find(u => u.email === email);
    if (existingUser) {
      return { success: false, error: 'User with this email already exists' };
    }

    // Create new user
    const newUser = {
      id: dummyUsers.length + 1,
      name,
      email,
      password,
      role,
      createdAt: new Date().toISOString().split('T')[0]
    };

    // In a real app, this would be saved to a database
    dummyUsers.push(newUser);
    
    const { password: _, ...userWithoutPassword } = newUser;
    setUser(userWithoutPassword);
    localStorage.setItem('user', JSON.stringify(userWithoutPassword));
    
    return { success: true };
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
  };

  const value = {
    user,
    login,
    signup,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}; 