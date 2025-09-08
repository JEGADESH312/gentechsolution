// components/FloatingActions.tsx
'use client'
const phone_number = '9444341170'
import React, { useState, useEffect } from 'react'
import { MessageCircle, Phone, ArrowUp, Mail, Calculator } from 'lucide-react'

const FloatingActions = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [showQuickActions, setShowQuickActions] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickActions = [
    {
      icon: Phone,
      label: 'Call Now',
      action: () => window.open('tel:+91', '_self'),
      bgColor: 'bg-blue-500 hover:bg-blue-600',
      delay: '0ms'
    },
    {
      icon: Mail,
      label: 'Email Us',
      action: () => window.open('mailto:Gentechsolutionpvtltd@gmail.com', '_self'),
      bgColor: 'bg-red-500 hover:bg-red-600',
      delay: '100ms'
    },
    {
      icon: Calculator,
      label: 'Get Quote',
      action: () => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }),
      bgColor: 'bg-purple-500 hover:bg-purple-600',
      delay: '200ms'
    }
  ]

  return (
    <>
      {/* Main WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <div className="relative">
          {/* Quick Actions Menu */}
          {showQuickActions && (
            <div className="absolute bottom-16 right-0 space-y-3 mb-4">
              {quickActions.map((action, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 animate-slide-in-right"
                  style={{ animationDelay: action.delay }}
                >
                  <span className="bg-white text-gray-800 px-3 py-2 rounded-lg shadow-lg text-sm font-medium whitespace-nowrap">
                    {action.label}
                  </span>
                  <button
                    onClick={action.action}
                    className={`w-12 h-12 ${action.bgColor} text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center justify-center`}
                  >
                    <action.icon className="h-5 w-5" />
                  </button>
                </div>
              ))}
            </div>
          )}

          {/* Main WhatsApp Button */}
          <div className="relative">
            <button
              onClick={() => window.open(`https://wa.me/91${phone_number}`, '_blank')}

              className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center justify-center relative z-10"
              aria-label="Contact us on WhatsApp"
            >
              <MessageCircle className="h-6 w-6" />

              {/* Pulse animation */}
              <div className="absolute inset-0 bg-green-500 rounded-full animate-ping opacity-20"></div>
            </button>

            {/* Toggle button for quick actions */}
            <button
              onClick={() => setShowQuickActions(!showQuickActions)}
              className="absolute -top-2 -left-2 w-6 h-6 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-md transition-all duration-200 flex items-center justify-center text-xs"
              aria-label="Show more contact options"
            >
              <span className={`transform transition-transform duration-200 ${showQuickActions ? 'rotate-45' : ''}`}>
                +
              </span>
            </button>
          </div>
        </div>

        {/* Tooltip */}
        <div className="absolute bottom-16 right-0 bg-gray-800 text-white px-3 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap opacity-0 hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-800"></div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <div className="fixed bottom-6 left-6 z-50">
          <button
            onClick={scrollToTop}
            className="w-12 h-12 bg-gray-800 hover:bg-gray-900 text-white rounded-full shadow-lg transition-all duration-200 transform hover:scale-110 flex items-center justify-center animate-fade-in"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </button>
        </div>
      )}

      {/* Emergency Contact Strip (appears on scroll) */}
      {/* {showScrollTop && (
        <div className="fixed top-20 left-1/2 transform -translate-x-1/2 z-40 animate-fade-in">
          <div className="bg-red-600 text-white px-6 py-2 rounded-full shadow-lg">
            <div className="flex items-center space-x-4 text-sm">
              <span className="font-medium">🚨 IT Support:</span>
              <a href="tel:+91" className="hover:underline font-semibold">
                +91{phone_number}
              </a> 
            </div>
          </div>
        </div>
      )} */}

      {/* Floating Offer Banner */}
      <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 animate-slide-in-right animation-delay-2000">
        <div className="bg-gradient-to-l from-orange-500 to-red-500 text-white p-4 rounded-l-2xl shadow-xl max-w-xs">
          <div className="text-center">
            <div className="text-lg font-bold mb-1">🎉 Special Offer!</div>
            <div className="text-sm mb-2">Get 15% OFF on bulk orders</div>
            <button className="bg-white text-orange-600 px-4 py-1 rounded-full text-sm font-semibold hover:bg-orange-50 transition-colors"
            
       onClick={() => window.open(`https://wa.me/91${phone_number}?text=${encodeURIComponent("Hi! I want to claim the 15% offer on bulk orders.")}`, '_blank')}
       
>
              Claim Now
            </button>
          </div>

          {/* Close button */}
          {/* <button 
            className="absolute -top-2 -left-2 w-6 h-6 bg-white text-orange-600 rounded-full shadow-md hover:bg-orange-50 transition-colors flex items-center justify-center text-sm font-bold"
            onClick={(e) => e.target.closest('.fixed').style.display = 'none'}
          >
            ×
          </button> */}
        </div>
      </div>

      {/* Live Chat Widget Simulation */}
      {/* <div className="fixed bottom-24 right-24 z-40">
        <div className="bg-white rounded-lg shadow-2xl p-4 max-w-sm animate-fade-in animation-delay-4000">
          <div className="flex items-center space-x-3 mb-3">
            <div className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-bold">GT</span>
            </div>
            <div>
              <div className="font-semibold text-gray-900 text-sm">Live Support</div>
              <div className="text-green-600 text-xs flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-1"></div>
                Online now
              </div>
            </div> */}
      {/* <button 
              className="ml-auto text-gray-400 hover:text-gray-600"
              onClick={(e) => e.target.closest('.fixed').style.display = 'none'}
            >
              ×
            </button> */}
      {/* </div> */}
      {/* <p className="text-gray-600 text-sm mb-3">
            Hi! 👋 Need help with hardware rental? I'm here to assist you!
          </p>
          <button className="w-full bg-primary-600 text-white py-2 rounded-lg text-sm font-semibold hover:bg-primary-700 transition-colors">
            Start Chat
          </button> */}
      {/* </div>
      </div> */}

      <style jsx>{`
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .animate-slide-in-right {
          animation: slideInRight 0.3s ease-out forwards;
        }
      `}</style>
    </>
  )
}

export default FloatingActions

