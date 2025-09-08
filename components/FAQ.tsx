
'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, MessageCircle } from 'lucide-react'

const FAQ = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)
  
  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept online bank transfers, UPI, corporate cheques, and credit cards. Payments are required as per the agreed rental terms. GST (18%) is applicable on all transactions. We also offer flexible payment terms for enterprise clients."
    },
    {
      question: "How long does delivery take?",
      answer: "Standard delivery is within 72 hours of order confirmation across Tamil Nadu. For urgent requests in Chennai, we can deliver within 24 hours subject to availability. Remote locations may require an additional day."
    },
    {
      question: "What happens if hardware is damaged or lost?",
      answer: "Clients are responsible for damages or loss during the rental period. We provide comprehensive guidelines for safe usage. Repair costs are charged as per market rates, and replacement costs apply for lost items as specified in the rental agreement."
    },
    {
      question: "Can I upgrade or swap devices during the rental period?",
      answer: "Yes! We offer flexible upgrades and swap-outs based on availability. You can upgrade to higher-spec devices by paying the price difference, or swap for different models. We handle the transition smoothly with minimal downtime."
    },
    {
      question: "How can I terminate the rental agreement early?",
      answer: "Early termination is allowed with 7 days prior notice. Charges are calculated based on the actual rental duration used. There may be a small administrative fee, and any additional services will be billed as per usage."
    },
    {
      question: "Do you provide IT support during the rental period?",
      answer: "Absolutely! All rentals include technical support, remote troubleshooting, and basic on-site assistance. We offer phone support during business hours and emergency support for critical issues. Extended support packages are available."
    },
    {
      question: "Are subscription plans flexible?",
      answer: "Yes, our subscription plans are highly flexible. You can choose monthly, quarterly, or annual plans. Device quantities can be adjusted, and additional IT services can be added or removed as needed. We customize plans based on your evolving requirements."
    },
    {
      question: "What areas do you serve?",
      answer: "We provide services across Tamil Nadu with our headquarters in Chennai. Delivery and support are available in all major cities including Coimbatore, Madurai, Trichy, and Salem. Remote area coverage is available with prior arrangement."
    },
    {
      question: "Do you offer bulk discounts?",
      answer: "Yes! Volume discounts are available for orders of 15 devices or more. Larger orders and longer rental durations receive higher discount tiers. Enterprise clients get custom pricing based on their specific requirements."
    },
    {
      question: "What's included in the setup service?",
      answer: "Our setup service includes device delivery, basic software installation, network configuration, user account setup, and testing. We also provide user training and documentation. Advanced setup services like domain joining and custom software installation are available."
    }
  ]

  const toggleFAQ = (index:any) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-xl text-gray-600">Get answers to common questions about our services</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-200"
            >
              <button
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500"
                onClick={() => toggleFAQ(index)}
                aria-expanded={expandedFAQ === index}
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <div className={`transform transition-transform duration-200 ${expandedFAQ === index ? 'rotate-180' : ''}`}>
                  {expandedFAQ === index ? (
                    <ChevronDown className="h-5 w-5 text-primary-600" />
                  ) : (
                    <ChevronRight className="h-5 w-5 text-gray-500" />
                  )}
                </div>
              </button>
              
              {expandedFAQ === index && (
                <div className="px-6 pb-5">
                  <div className="pt-2 border-t border-gray-100">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
        
        {/* Still have questions CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="h-12 w-12 text-white" />
            </div>
            <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
            <p className="text-blue-100 mb-6">Our support team is here to help you find the perfect solution</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                Contact Support
              </a>
              <a href="tel:+91" className="bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-800 transition-colors">
                Call Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FAQ