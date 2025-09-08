
'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10
      setScrolled(isScrolled)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#services', label: 'Services' },
    { href: '#hardware', label: 'Hardware' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#about', label: 'About' },
  ]

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/80 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-xl">GT</span>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">Gen Tech Solutions</h1>
              <p className="text-xs text-gray-500">Plug In. Power Up. Rule Your Future.</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-gray-600 hover:text-primary-600 transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-primary"
            >
              Get Quote
            </a>
          </nav>

          {/* Mobile menu button */}
          <button 
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-lg">
          <div className="px-4 py-2 space-y-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-3 py-2 text-gray-600 hover:text-primary-600 hover:bg-gray-50 rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-3 py-2 bg-primary-600 text-white rounded-lg text-center font-semibold hover:bg-primary-700 transition-colors mt-4"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get Quote
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header