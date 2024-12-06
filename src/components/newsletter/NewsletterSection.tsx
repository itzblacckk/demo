import React, { useState } from 'react';
import { Mail } from 'lucide-react';

export function NewsletterSection() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <section className="bg-rose-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <Mail className="mx-auto h-12 w-12 text-rose-600" />
          <h2 className="mt-4 text-3xl font-bold text-gray-900">
            Subscribe to Our Newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Get updates about new products and special offers
          </p>
        </div>

        {subscribed ? (
          <div className="mt-8 max-w-md mx-auto text-center">
            <p className="text-green-600 font-medium">
              Thank you for subscribing! Check your email for confirmation.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto">
            <div className="flex gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 rounded-md border-gray-300 shadow-sm focus:border-rose-500 focus:ring-rose-500"
                required
              />
              <button
                type="submit"
                className="bg-rose-600 text-white px-6 py-2 rounded-md hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
              >
                Subscribe
              </button>
            </div>
          </form>
        )}
      </div>
    </section>
  );
}