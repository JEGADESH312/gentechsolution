
'use client'

import React from 'react'
import { MapPin, Phone, Mail, Clock, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Hardware', href: '#hardware' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
    { name: 'Case Studies', href: '#case-studies' }
  ]

  const services = [
    { name: 'Hardware Rental', href: '#hardware' },
    { name: 'IT Infrastructure', href: '#services' },
    { name: 'CCTV Installation', href: '#services' },
    { name: 'AMC Services', href: '#services' },
    { name: '24/7 Support', href: '#contact' },
    { name: 'Data Solutions', href: '#services' }
  ]

  const legalLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Rental Agreement', href: '#' },
    { name: 'Cancellation Policy', href: '#' }
  ]

  return (
    <footer className="bg-gray-900 text-white relative">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-xl">GT</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Gen Tech Solutions</h3>
                <p className="text-gray-400 text-sm">Plug In. Power Up. Rule Your Future.</p>
              </div>
            </div>
            
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Your trusted partner for cost-effective laptop and desktop rental solutions 
              with complete IT support across Tamil Nadu. Making technology accessible 
              and affordable for businesses of all sizes.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <MapPin className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">No.49/1, South West Boag Road, Chennai – 600017, Tamil Nadu</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Phone className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">+91 9444341170 | WhatsApp Available</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Mail className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">Gentechsolutionpvtltd@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <Clock className="h-4 w-4 text-primary-400 flex-shrink-0" />
                <span className="text-sm">Mon-Sat: 9AM-7PM | Sun: By Appointment</span>
              </div>
            </div>
            
            {/* Social Media Placeholder */}
            <div className="mt-6">
              <p className="text-gray-400 text-sm mb-3">Follow us:</p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <span className="text-xs">FB</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <span className="text-xs">LI</span>
                </div>
                <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors cursor-pointer">
                  <span className="text-xs">TW</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:text-primary-400"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <a 
                    href={service.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm hover:text-primary-400"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
              <p className="text-gray-300 text-sm">Get the latest updates on new hardware, special offers, and IT tips.</p>
            </div>
            <div className="flex space-x-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent text-white placeholder-gray-400"
              />
              <button className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <p className="text-gray-400 text-sm">
                © 2024 Gen Tech Solutions. All rights reserved.
              </p>
              <div className="flex space-x-6">
                {legalLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Scroll to top button */}
            <button
              onClick={scrollToTop}
              className="bg-primary-600 text-white p-2 rounded-full hover:bg-primary-700 transition-colors shadow-lg"
              aria-label="Scroll to top"
            >
              <ArrowUp className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary-600 to-secondary-600"></div>
    </footer>
  )
}

export default Footer