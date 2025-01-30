// src/components/layout/Layout.jsx
import React from 'react';
import Navbar from './Navbar/Navbar';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#171d32]">
      <Navbar />
      <main className="pt-20">
        {children}
      </main>
      <footer className="bg-[#1a1f38] text-center py-6 text-gray-400">
        <p>© {new Date().getFullYear()} Manoj R. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Layout;