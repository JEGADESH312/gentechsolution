
'use client'

import React from 'react'

const HowItWorks = () => {
  const steps = [
    { 
      step: 1, 
      title: "Browse & Select", 
      desc: "Choose from our catalog of laptops, desktops, and IT equipment",
      color: "bg-blue-500"
    },
    { 
      step: 2, 
      title: "Request Quote", 
      desc: "Submit your requirements online, via email, or phone",
      color: "bg-green-500"
    },
    { 
      step: 3, 
      title: "Approval", 
      desc: "Quick verification and rental agreement finalization",
      color: "bg-purple-500"
    },
    { 
      step: 4, 
      title: "Delivery & Setup", 
      desc: "72hr delivery with optional installation and configuration",
      color: "bg-orange-500"
    },
    { 
      step: 5, 
      title: "Usage & Support", 
      desc: "Use equipment with full technical support throughout rental",
      color: "bg-red-500"
    },
    { 
      step: 6, 
      title: "Return", 
      desc: "Easy pickup and inspection at end of rental period",
      color: "bg-indigo-500"
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Simple 6-step process to get your hardware</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <div className={`w-16 h-16 ${item.color} text-white rounded-full flex items-center justify-center text-2xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed max-w-sm">{item.desc}</p>
              </div>
              
              {/* Connection line for desktop */}
              {index < steps.length - 1 && index % 3 !== 2 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-gray-200 transform -translate-y-1/2 z-0" 
                     style={{ width: 'calc(100% - 4rem)' }} />
              )}
            </div>
          ))}
        </div>
        
        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center space-x-4 bg-white rounded-2xl p-8 shadow-xl">
            <div className="text-4xl">🚀</div>
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900">Ready to get started?</h3>
              <p className="text-gray-600">Get your hardware delivered in 72 hours</p>
            </div>
            <button className="btn-primary">
              Start Now
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks