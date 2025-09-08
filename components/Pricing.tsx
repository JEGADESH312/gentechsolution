
'use client'

import React, { useState } from 'react'
import { Check, Star } from 'lucide-react'

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState('monthly')
  
  const plans = [
    {
      name: "Starter",
      price: billingPeriod === 'monthly' ? "₹1,800" : "₹1,620",
      period: "per device/month",
      description: "Perfect for small teams and startups",
      features: [
        "1-5 devices",
        "Basic IT support",
        "72hr delivery",
        "Monthly billing",
        "Email support",
        "Standard warranty"
      ],
      popular: false,
      savings: billingPeriod === 'yearly' ? "Save 10%" : null
    },
    {
      name: "Business",
      price: billingPeriod === 'monthly' ? "₹1,500" : "₹1,275",
      period: "per device/month",
      description: "Most popular for growing businesses",
      features: [
        "6-15 devices",
        "Volume discount included",
        "Priority support",
        "Quarterly billing",
        "Phone support",
        "On-site setup",
        "Extended warranty",
        "Free upgrades"
      ],
      popular: true,
      savings: billingPeriod === 'yearly' ? "Save 15%" : null
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "pricing",
      description: "Tailored solutions for large organizations",
      features: [
        "15+ devices",
        "Maximum discount",
        "Dedicated account manager",
        "Custom billing terms",
        "24/7 support",
        "Full IT services",
        "SLA guarantee",
        "White-glove service"
      ],
      popular: false,
      savings: null
    }
  ]

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Pricing Plans</h2>
          <p className="text-xl text-gray-600 mb-8">Choose the plan that fits your business needs</p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center bg-white rounded-lg p-1 shadow-lg">
            <button
              onClick={() => setBillingPeriod('monthly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                billingPeriod === 'monthly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingPeriod('yearly')}
              className={`px-6 py-2 rounded-md font-semibold transition-all duration-200 ${
                billingPeriod === 'yearly'
                  ? 'bg-primary-600 text-white shadow-md'
                  : 'text-gray-600 hover:text-primary-600'
              }`}
            >
              Yearly
              <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                Save up to 15%
              </span>
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 relative transform hover:-translate-y-2 ${
                plan.popular ? 'ring-2 ring-primary-500 scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-primary-600 to-secondary-600 text-white px-4 py-2 rounded-full text-sm font-medium flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-current" />
                    <span>Most Popular</span>
                  </span>
                </div>
              )}
              
              {plan.savings && (
                <div className="absolute -top-2 -right-2">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                    {plan.savings}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                <p className="text-gray-600 mb-4">{plan.description}</p>
                <div className="mb-2">
                  <span className="text-4xl font-bold text-primary-600">{plan.price}</span>
                  <span className="text-gray-500 ml-2">{plan.period}</span>
                </div>
                <p className="text-sm text-gray-500">+ 18% GST</p>
              </div>
              
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-600">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-200 ${
                plan.popular 
                  ? 'btn-primary transform hover:scale-105' 
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200 border-2 border-transparent hover:border-primary-500'
              }`}>
                {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
              </button>
              
              {plan.name === "Enterprise" && (
                <p className="text-center text-sm text-gray-500 mt-3">
                  Custom pricing based on requirements
                </p>
              )}
            </div>
          ))}
        </div>
        
        {/* Additional Benefits */}
        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">All Plans Include</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: "⚡", title: "72hr Delivery", desc: "Guaranteed delivery within 72 hours" },
              { icon: "🛡️", title: "Quality Tested", desc: "All devices thoroughly tested" },
              { icon: "🔧", title: "IT Support", desc: "Technical support included" },
              { icon: "📞", title: "24/7 Helpline", desc: "Round-the-clock assistance" }
            ].map((benefit, idx) => (
              <div key={idx} className="text-center">
                <div className="text-4xl mb-3">{benefit.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                <p className="text-gray-600 text-sm">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing