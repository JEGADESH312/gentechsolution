
'use client'

import React from 'react'
import { ArrowRight, Clock, Shield, Check } from 'lucide-react'

const Hero = () => {
  return (
    <section className="pt-16 bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up">
            <div className="inline-block bg-primary-100 text-primary-800 px-4 py-2 rounded-full text-sm font-medium">
              🚀 Serving All of Tamil Nadu
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Plug In.
              <br />
              <span className="text-gradient">Power Up.</span>
              <br />
              Rule Your Future.
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Cost-effective laptop and desktop rental solutions with complete IT support. 
              Scale your technology without heavy upfront investments.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary flex items-center justify-center space-x-2 text-lg py-4">
                <span>Get Started</span>
                <ArrowRight className="h-5 w-5" />
              </button>
              <button className="btn-secondary text-lg py-4">
                View Catalog
              </button>
            </div>
            
            <div className="flex items-center space-x-8 text-sm text-gray-500">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4 text-primary-600" />
                <span>72hr Delivery</span>
              </div>
              <div className="flex items-center space-x-2">
                <Shield className="h-4 w-4 text-primary-600" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <Check className="h-4 w-4 text-primary-600" />
                <span>Quality Tested</span>
              </div>
            </div>
          </div>
          
          <div className="relative animate-slide-in-right">
            <div className="gradient-bg rounded-3xl p-8 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="bg-white rounded-2xl p-6 space-y-4 transform -rotate-3">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">Quick Quote</h3>
                  <span className="text-green-600 text-sm font-medium bg-green-100 px-3 py-1 rounded-full">
                    ✓ Available
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Laptops (10 units)</span>
                    <span className="font-semibold text-lg">₹18,000/month</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">IT Support</span>
                    <span className="font-semibold text-green-600">Included</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Setup & Delivery</span>
                    <span className="font-semibold text-green-600">Free</span>
                  </div>
                  <div className="border-t pt-3 flex justify-between font-bold text-lg">
                    <span>Total (incl. GST)</span>
                    <span className="text-primary-600">₹21,240/month</span>
                  </div>
                  <p className="text-xs text-gray-500 text-center">
                    *72 hour delivery guarantee
                  </p>
                </div>
                <button className="w-full btn-primary">
                  Get This Quote
                </button>
              </div>
            </div>
            
            {/* Floating elements for visual appeal */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-secondary-200 rounded-full opacity-20 animate-pulse animation-delay-200"></div>
          </div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="relative">
        <svg
          className="w-full h-16 text-white fill-current"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  )
}

export default Hero