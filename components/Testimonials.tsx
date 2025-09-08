
'use client'

import React, { useState, useEffect } from 'react'
import { Star, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const testimonials = [
    {
      text: "Gen Tech Solutions provided us with laptops and desktops on short notice. Their IT support ensured everything was up and running smoothly. Highly recommended!",
      author: "Rajesh Kumar",
      company: "ABC Enterprises",
      role: "IT Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "The team helped set up our office IT infrastructure efficiently. Delivery was fast, and support was excellent. Best decision for our startup!",
      author: "Priya Sharma",
      company: "XYZ Startups",
      role: "CEO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b1c0?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "Flexible rental plans and quick response time made our event a success. Great service and reliable equipment. Will definitely use again!",
      author: "Arjun Patel",
      company: "EventCo",
      role: "Operations Head",
      rating: 5,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "Outstanding service! The bulk rental discount saved us a lot of money, and the 24/7 support gave us peace of mind during our critical project.",
      author: "Sneha Reddy",
      company: "Tech Innovations Ltd",
      role: "Project Manager",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      text: "From inquiry to delivery, everything was seamless. The equipment quality exceeded our expectations. Truly professional service!",
      author: "Vikram Singh",
      company: "Digital Solutions Inc",
      role: "CTO",
      rating: 5,
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-blue-50"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          <p className="text-xl text-gray-600">Trusted by businesses across Tamil Nadu</p>
        </div>

        <div className="relative">
          {/* Main Testimonial Slider */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-3xl shadow-2xl p-12 relative">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentSlide].rating)].map((_, i) => (
                    <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-2xl text-gray-700 font-medium leading-relaxed mb-8">
                  "{testimonials[currentSlide].text}"
                </blockquote>
                
                <div className="flex items-center justify-center space-x-4">
                  <img
                    src={testimonials[currentSlide].image}
                    alt={testimonials[currentSlide].author}
                    className="w-16 h-16 rounded-full object-cover border-4 border-primary-100"
                  />
                  <div className="text-left">
                    <div className="font-bold text-gray-900 text-lg">
                      {testimonials[currentSlide].author}
                    </div>
                    <div className="text-primary-600 font-semibold">
                      {testimonials[currentSlide].role}
                    </div>
                    <div className="text-gray-500 text-sm">
                      {testimonials[currentSlide].company}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6 text-gray-600" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-primary-50 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6 text-gray-600" />
              </button>
            </div>
            
            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentSlide === index ? 'bg-primary-600' : 'bg-gray-300 hover:bg-primary-300'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Stats Section */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary-600 mb-2">500+</div>
              <div className="text-gray-600 font-semibold">Happy Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600 font-semibold">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">1000+</div>
              <div className="text-gray-600 font-semibold">Devices Deployed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">24/7</div>
              <div className="text-gray-600 font-semibold">Support Uptime</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials