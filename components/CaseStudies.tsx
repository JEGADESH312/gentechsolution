
'use client'

import React from 'react'
import { Building, GraduationCap, ShoppingBag, TrendingUp, Clock, DollarSign } from 'lucide-react'

const CaseStudies = () => {
  const caseStudies = [
    {
      icon: Building,
      title: "Corporate Office IT Setup",
      client: "Tech Solutions Corp",
      challenge: "Needed 25 laptops and desktops with IT support for a new office within one week.",
      solution: "Provided bulk rentals, delivery, and on-site setup within 72 hours with dedicated support team.",
      results: [
        "Office operational on time",
        "Zero downtime during setup",
        "40% cost savings vs purchase",
        "Ongoing support satisfaction"
      ],
      metrics: {
        devices: "25",
        timeline: "72 hours",
        savings: "40%"
      },
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: GraduationCap,
      title: "Educational Training Program",
      client: "Digital Learning Institute",
      challenge: "Required 40 laptops for a 3-day workshop for students with pre-configured software.",
      solution: "Delivered and installed laptops with pre-configured educational software and provided on-site IT support throughout the event.",
      results: [
        "Smooth workshop execution",
        "Zero technical downtime", 
        "100% student satisfaction",
        "Seamless software deployment"
      ],
      metrics: {
        devices: "40",
        timeline: "3 days",
        uptime: "100%"
      },
      color: "from-green-500 to-green-600"
    },
    {
      icon: ShoppingBag,
      title: "Retail Business Upgrade",
      client: "Modern Retail Chain",
      challenge: "Needed new desktops for billing and inventory management with minimal operational downtime.",
      solution: "Supplied high-performance desktops and assisted with data migration, network setup, and staff training during off-hours.",
      results: [
        "Minimal operational disruption",
        "50% faster processing speed",
        "Improved inventory accuracy", 
        "Enhanced customer experience"
      ],
      metrics: {
        devices: "15",
        timeline: "48 hours",
        efficiency: "50%"
      },
      color: "from-purple-500 to-purple-600"
    }
  ]

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Success Stories</h2>
          <p className="text-xl text-gray-600">Real results from real clients across different industries</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
              {/* Header */}
              <div className={`bg-gradient-to-r ${study.color} p-6 text-white`}>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                    <study.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">{study.title}</h3>
                    <p className="text-white/80 text-sm">{study.client}</p>
                  </div>
                </div>
                
                {/* Key Metrics */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="text-2xl font-bold">{study.metrics.devices}</div>
                    <div className="text-white/80 text-xs">Devices</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{study.metrics.timeline}</div>
                    <div className="text-white/80 text-xs">Timeline</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold">{Object.values(study.metrics)[2]}</div>
                    <div className="text-white/80 text-xs">
                      {Object.keys(study.metrics)[2] === 'savings' ? 'Savings' : 
                       Object.keys(study.metrics)[2] === 'uptime' ? 'Uptime' : 'Efficiency'}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h4 className="font-semibold text-red-600 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-red-600 rounded-full mr-2"></div>
                    Challenge
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-blue-600 mb-2 flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-2"></div>
                    Solution
                  </h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-green-600 mb-3 flex items-center">
                    <div className="w-2 h-2 bg-green-600 rounded-full mr-2"></div>
                    Results
                  </h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full flex-shrink-0"></div>
                        <span>{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="pt-4 border-t border-gray-100">
                  <button className="w-full text-center text-primary-600 font-semibold hover:text-primary-700 transition-colors">
                    Read Full Case Study →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Be Our Next Success Story?</h3>
            <p className="text-gray-600 mb-6">
              Join hundreds of satisfied clients who have transformed their business with our IT solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">
                Start Your Project
              </button>
              <button className="btn-secondary">
                Schedule Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CaseStudies