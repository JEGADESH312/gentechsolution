'use client'

import React, { useState } from 'react'
import { Phone, Mail, MapPin, Clock, ArrowRight, Send, CheckCircle } from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [formStatus, setFormStatus] = useState('idle') // idle, sending, success, error

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleFormSubmit = async (e:any) => {
    e.preventDefault()
    setFormStatus('sending')

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success')
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          company: '',
          email: '',
          phone: '',
          service: '',
          message: ''
        })
        setFormStatus('idle')
      }, 3000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: ['+91 [Your Number]', 'WhatsApp Available'],
      action: 'Call Now'
    },
    {
      icon: Mail,
      title: 'Email',
      details: ['Gentechsolutionpvtltd@gmail.com', 'Quick Response Guaranteed'],
      action: 'Send Email'
    },
    {
      icon: MapPin,
      title: 'Address',
      details: ['No.49/1, South West Boag Road', 'Chennai – 600017, Tamil Nadu'],
      action: 'Get Directions'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Mon-Sat: 9:00 AM - 7:00 PM', 'Sunday: By Appointment'],
      action: 'Schedule Call'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-purple-600 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="text-white space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-xl text-blue-100 leading-relaxed">
                Ready to power up your business? Contact us for a custom quote and consultation.
                Our team is here to help you find the perfect IT solution.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center">
                      <item.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                  </div>
                  <div className="space-y-1 mb-4">
                    {item.details.map((detail, idx) => (
                      <p key={idx} className="text-blue-100 text-sm">{detail}</p>
                    ))}
                  </div>
                  <button className="text-white font-semibold hover:text-blue-200 transition-colors text-sm">
                    {item.action} →
                  </button>
                </div>
              ))}
            </div>

            {/* Quick Response Promise */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-3 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Our Promise
              </h3>
              <ul className="space-y-2 text-blue-100">
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Response within 2 hours during business days</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>Free consultation and quote</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full"></div>
                  <span>No obligation, no pressure</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Send us a Message</h3>
              <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
            </div>

            {formStatus === 'success' ? (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                <p className="text-gray-600">Thank you for your inquiry. We'll get back to you within 24 hours with a custom quote.</p>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                      disabled={formStatus === 'sending'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="Your company name"
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                      disabled={formStatus === 'sending'}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                      placeholder="+91 XXXXX XXXXX"
                      disabled={formStatus === 'sending'}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Service Required</label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    disabled={formStatus === 'sending'}
                  >
                    <option value="">Select a service</option>
                    <option value="rental">Hardware Rental</option>
                    <option value="sales">Hardware Sales</option>
                    <option value="it-support">IT Support</option>
                    <option value="infrastructure">IT Infrastructure</option>
                    <option value="cctv">CCTV Installation</option>
                    <option value="amc">AMC Services</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us about your requirements, number of devices needed, timeline, etc."
                    disabled={formStatus === 'sending'}
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className={`w-full py-4 rounded-lg text-lg font-semibold transition-all duration-200 flex items-center justify-center space-x-2 ${
                    formStatus === 'sending'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : 'bg-blue-600 hover:bg-blue-700 transform hover:scale-105 active:scale-95'
                  } text-white`}
                >
                  {formStatus === 'sending' ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-500 text-center">
                  We respect your privacy. Your information will never be shared with third parties.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
