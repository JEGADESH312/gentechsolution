
'use client'

import React, { useState } from 'react'
import { Laptop, Monitor, Server, Printer, Check } from 'lucide-react'

const Hardware = () => {
  const [selectedCategory, setSelectedCategory] = useState(0)
  
  const hardwareCategories = [
    {
      name: "Laptops",
      icon: Laptop,
      description: "Entry-level to high-performance laptops for business and professional use",
      startingPrice: "₹1,800/month",
      features: ["Performance tested", "Pre-configured", "IT support included"],
      models: [
        { name: "Business Laptop", specs: "Intel i5, 8GB RAM, 256GB SSD", price: "₹1,800/month" },
        { name: "Performance Laptop", specs: "Intel i7, 16GB RAM, 512GB SSD", price: "₹2,500/month" },
        { name: "Premium Workstation", specs: "Intel i9, 32GB RAM, 1TB SSD", price: "₹3,500/month" }
      ]
    },
    {
      name: "Desktops & Workstations",
      icon: Monitor,
      description: "Standard desktops, high-end workstations, and custom-configured systems",
      startingPrice: "₹2,200/month",
      features: ["Custom configuration", "High-performance", "Business ready"],
      models: [
        { name: "Office Desktop", specs: "Intel i5, 8GB RAM, 512GB SSD", price: "₹2,200/month" },
        { name: "Power Workstation", specs: "Intel i7, 32GB RAM, 1TB SSD", price: "₹3,800/month" },
        { name: "Server Grade", specs: "Xeon processor, 64GB RAM, 2TB SSD", price: "₹5,500/month" }
      ]
    },
    {
      name: "Servers",
      icon: Server,
      description: "Rack, tower, and blade servers for business-critical operations",
      startingPrice: "₹5,000/month",
      features: ["Enterprise grade", "24/7 support", "Scalable solutions"],
      models: [
        { name: "Entry Server", specs: "Dual Core Xeon, 16GB RAM, 1TB", price: "₹5,000/month" },
        { name: "Business Server", specs: "Quad Core Xeon, 32GB RAM, 2TB", price: "₹8,500/month" },
        { name: "Enterprise Server", specs: "Multi-Core Xeon, 128GB RAM, 4TB", price: "₹15,000/month" }
      ]
    },
    {
      name: "Printers & Peripherals",
      icon: Printer,
      description: "Multifunction printers, scanners, and office equipment",
      startingPrice: "₹800/month",
      features: ["Multifunction", "Office ready", "Maintenance included"],
      models: [
        { name: "Basic Printer", specs: "Color inkjet, WiFi enabled", price: "₹800/month" },
        { name: "Office MFP", specs: "Laser, Print/Scan/Copy", price: "₹1,200/month" },
        { name: "Heavy Duty", specs: "Industrial printer, high volume", price: "₹2,000/month" }
      ]
    }
  ]

  return (
    <section id="hardware" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hardware Catalog</h2>
          <p className="text-xl text-gray-600">
            Performance-tested equipment ready for immediate deployment
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {hardwareCategories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(index)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === index
                  ? 'bg-primary-600 text-white shadow-lg'
                  : 'bg-white text-gray-600 hover:bg-primary-50 hover:text-primary-600'
              }`}
            >
              <category.icon className="h-5 w-5" />
              <span>{category.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Category Details */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 gradient-bg rounded-2xl flex items-center justify-center shadow-lg">
                {React.createElement(hardwareCategories[selectedCategory].icon, {
                  className: "h-8 w-8 text-white"
                })}
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {hardwareCategories[selectedCategory].name}
                </h3>
                <p className="text-primary-600 font-semibold">
                  Starting {hardwareCategories[selectedCategory].startingPrice} + GST
                </p>
              </div>
            </div>
            
            <p className="text-gray-600 text-lg leading-relaxed">
              {hardwareCategories[selectedCategory].description}
            </p>
            
            <ul className="space-y-3">
              {hardwareCategories[selectedCategory].features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-3">
                  <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">
                Request Quote
              </button>
              <button className="btn-secondary">
                View Specifications
              </button>
            </div>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-xl font-semibold text-gray-900 mb-4">Available Models</h4>
            {hardwareCategories[selectedCategory].models.map((model, idx) => (
              <div key={idx} className="card bg-white border border-gray-100 hover:border-primary-200 transition-all duration-300">
                <div className="flex justify-between items-start mb-3">
                  <h5 className="font-semibold text-gray-900">{model.name}</h5>
                  <span className="text-primary-600 font-bold">{model.price}</span>
                </div>
                <p className="text-gray-600 text-sm mb-4">{model.specs}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-gray-500">+ 18% GST</span>
                  <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Select →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Quick Stats */}
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
            <div className="text-gray-600">Devices Available</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-green-600 mb-2">72hr</div>
            <div className="text-gray-600">Delivery Guarantee</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-purple-600 mb-2">24/7</div>
            <div className="text-gray-600">Technical Support</div>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-orange-600 mb-2">100%</div>
            <div className="text-gray-600">Quality Tested</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hardware