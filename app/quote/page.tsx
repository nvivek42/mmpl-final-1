'use client'

import React from 'react';

export default function QuotePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Request a Quote</h1>
          <p className="text-lg text-gray-600">Fill out the form below and we'll get back to you shortly</p>
        </div>

        <form className="space-y-6 bg-white p-8 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label className="block text-sm font-medium text-gray-700">First Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Last Name</label>
              <input type="text" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input type="email" className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Project Details</label>
            <textarea rows={4} className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2"></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition-colors duration-300"
          >
            Submit Quote Request
          </button>
        </form>
      </div>
    </div>
  );
}