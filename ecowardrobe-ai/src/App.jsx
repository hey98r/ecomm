'use client';

import React, { useState } from 'react';
import { Leaf, ShoppingBag, Search, User, Menu, Sparkles, Shirt, Recycle, Globe } from 'lucide-react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'} transition-colors duration-500`}>
        {/* Header */}
        <header className={`${darkMode ? 'bg-gray-800/80' : 'bg-white/80'} backdrop-blur-md border-b border-gray-200/50 sticky top-0 z-50`}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
            <div className="flex items-center gap-8">
              <h1 className="text-2xl font-light tracking-wide flex items-center gap-2">
                <Leaf className="w-6 h-6 text-green-600" />
                EcoWardrobe AI
              </h1>
              <nav className="hidden md:flex gap-6 text-sm">
                <a href="#" className="hover:text-green-600 transition">New Arrivals</a>
                <a href="#" className="hover:text-green-600 transition">Sustainable Brands</a>
                <a href="#" className="hover:text-green-600 transition">Eco Materials</a>
              </nav>
            </div>
            <div className="flex items-center gap-4">
              <Search className="w-5 h-5 cursor-pointer" />
              <User className="w-5 h-5 cursor-pointer" />
              <ShoppingBag className="w-5 h-5 cursor-pointer" />
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                {darkMode ? '☀️' : '🌙'}
              </button>
              <Menu className="w-6 h-6 md:hidden" />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent dark:via-green-950/20" />
          <div className="relative z-10 text-center px-6 max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
              Your AI Personal Stylist
              <br />
              <span className="text-green-600">Sustainable Style Made Effortless</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
              Discover ethical fashion that fits your body, values, and lifestyle — powered by intelligent recommendations and transparent eco-impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition flex items-center gap-3 justify-center">
                <Sparkles className="w-5 h-5" />
                Start Your AI Style Quiz
              </button>
              <button className="px-8 py-4 border border-gray-400 rounded-full hover:border-green-600 transition">
                Explore Virtual Wardrobe
              </button>
            </div>
          </div>

          {/* Floating AI Chat Bubble */}
          <div className="absolute bottom-8 right-8 bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-4 max-w-xs border border-gray-200">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-semibold">
                AI
              </div>
              <div>
                <p className="text-sm font-medium">Hi! I'm your stylist 👋</p>
                <p className="text-xs text-gray-600 dark:text-gray-400">Tell me about your style preferences...</p>
              </div>
            </div>
          </div>
        </section>

        {/* AI Recommendations Carousel Preview */}
        <section className="py-20 px-6 max-w-7xl mx-auto">
          <h3 className="text-3xl font-light text-center mb-12 flex items-center justify-center gap-3">
            <Sparkles className="w-8 h-8 text-green-600" />
            AI-Curated Looks for You
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Linen Summer Set", eco: 92, materials: "Organic Linen" },
              { name: "Recycled Wool Coat", eco: 88, materials: "Recycled Wool" },
              { name: "Bamboo Everyday Tee", eco: 95, materials: "Bamboo Viscose" }
            ].map((item) => (
              <div key={item.name} className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition`}>
                <div className="h-96 bg-gray-200 dark:bg-gray-700 border-2 border-dashed rounded-xl" />
                <div className="p-6">
                  <h4 className="text-lg font-medium mb-2">{item.name}</h4>
                  <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Globe className="w-4 h-4 text-green-600" />
                      Eco-Score: <span className="font-semibold text-green-600">{item.eco}/100</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Recycle className="w-4 h-4" />
                      {item.materials}
                    </div>
                  </div>
                  <button className="mt-4 w-full py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-600 hover:text-white transition">
                    AR Try On
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Sustainability Impact */}
        <section className={`py-20 ${darkMode ? 'bg-gray-800' : 'bg-green-50'} px-6`}>
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-light mb-8">Our Community Impact This Month</h3>
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-5xl font-light text-green-600">12,400</p>
                <p className="text-gray-600 dark:text-gray-400">kg CO₂ Saved</p>
              </div>
              <div>
                <p className="text-5xl font-light text-green-600">8,200</p>
                <p className="text-gray-600 dark:text-gray-400">Liters Water Preserved</p>
              </div>
              <div>
                <p className="text-5xl font-light text-green-600">3,100</p>
                <p className="text-gray-600 dark:text-gray-400">Items Resold</p>
              </div>
            </div>
          </div>
        </section>

        <footer className={`py-12 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} text-center text-sm text-gray-600`}>
          <p>© 2026 EcoWardrobe AI — Ethical Fashion, Intelligent Style</p>
        </footer>
      </div>
    </>
  );
}