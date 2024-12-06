import React from "react";
import { Header } from "./components/layout/Header";
import { Hero } from "./components/home/Hero";
import { ProductGrid } from "./components/product/ProductGrid";
import { CategoriesSection } from "./components/categories/CategoriesSection";
import { TestimonialsSection } from "./components/testimonials/TestimonialsSection";
import { NewsletterSection } from "./components/newsletter/NewsletterSection";

function App() {
  return (
    <div className="min-h-screen bg-gray-50 relative">
    <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-8xl font-bold text-red-500 opacity-80 pointer-events-none select-none">
  DEMO
</div>


      <Header />
      <main>
        <Hero />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <section id="featured" className="py-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">Featured Gifts</h2>
              <a href="#" className="text-rose-600 hover:text-rose-500">
                View all
              </a>
            </div>
            <ProductGrid />
          </section>

          <CategoriesSection />
        </div>

        <TestimonialsSection />
        <NewsletterSection />

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Free Shipping",
                  description: "On orders over $50",
                },
                {
                  title: "Secure Payment",
                  description: "100% secure payment",
                },
                {
                  title: "Money Back Guarantee",
                  description: "30 days return policy",
                },
              ].map((feature) => (
                <div key={feature.title} className="text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="mt-2 text-gray-500">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">About Us</h3>
              <p className="text-gray-400">
                Curating unique gifts for all your special moments.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Shipping Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Returns & Exchanges
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Gift Cards
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Find a Store
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white">
                  Facebook
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Instagram
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 GiftHaven. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
