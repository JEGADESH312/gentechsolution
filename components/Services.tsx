
'use client'

import React from 'react'
import { Laptop, Server, Shield, Users, Zap, MessageCircle, Check } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Laptop,
      title: "Hardware Rental & Sales",
      description: "Flexible laptop and desktop rental with purchase options. Quality-tested devices with prompt IT support.",
      features: ["Starting ₹1,800/month", "72hr delivery", "Volume discounts"]
    },
    {
      icon: Server,
      title: "IT Infrastructure",
      description: "Complete network setup, server management, and IT infrastructure solutions for businesses of all sizes.",
      features: ["Network setup", "Server management", "24/7 monitoring"]
    },
    {
      icon: Shield,
      title: "CCTV & Security",
      description: "Professional CCTV installation and security system setup with ongoing maintenance and support.",
      features: ["HD surveillance", "Remote monitoring", "Professional installation"]
    },
    {
      icon: Users,
      title: "AMC Services",
      description: "Annual maintenance contracts with dedicated IT support, regular health checks, and priority service.",
      features: ["Preventive maintenance", "Priority support", "Cost savings"]
    },
    {
      icon: Zap,
      title: "Data Solutions",
      description: "Comprehensive data backup, recovery solutions, and secure data management for business continuity.",
      features: ["Automated backups", "Quick recovery", "Data security"]
    },
    {
      icon: MessageCircle,
      title: "24/7 Support",
      description: "Round-the-clock technical support, troubleshooting, and on-site assistance for all your IT needs.",
      features: ["Phone support", "Remote assistance", "On-site visits"]
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete IT Solutions</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardware rentals to complete IT infrastructure management, 
            we provide everything your business needs to stay competitive.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="card group hover:shadow-2xl transition-all duration-500"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 bg-primary-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <service.icon className="h-7 w-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                    <Check className="h-4 w-4 text-green-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button className="text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services