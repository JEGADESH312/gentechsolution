
'use client'

import React from 'react'
import { Target, Eye, Users, TrendingUp, Award, Clock } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: Users, value: "500+", label: "Happy Clients", color: "text-blue-600" },
    { icon: Clock, value: "72hr", label: "Delivery Time", color: "text-green-600" },
    { icon: Award, value: "24/7", label: "Support Available", color: "text-purple-600" },
    { icon: TrendingUp, value: "100%", label: "Quality Tested", color: "text-orange-600" }
  ]

  const milestones = [
    { year: "2024", title: "Company Founded", desc: "Started with a vision to make technology accessible" },
    { year: "2024", title: "First 100 Clients", desc: "Achieved our first milestone of serving 100+ businesses" },
    { year: "2024", title: "Service Expansion", desc: "Added CCTV, AMC, and data solutions to our portfolio" },
    { year: "2024", title: "500+ Devices", desc: "Deployed over 500 devices across Tamil Nadu" }
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Gen Tech Solutions</h2>
              <div className="w-20 h-1 bg-gradient-to-r from-primary-600 to-secondary-600 rounded-full mb-8"></div>
            </div>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Founded in 2024, we began with a simple vision – to make technology more accessible 
              and affordable for businesses and individuals. We recognized that many startups, small 
              companies, and even large organizations face challenges with high upfront costs for IT infrastructure.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Over the years, we have expanded our services to include IT infrastructure management, 
              network setup, CCTV installation, AMC services, and data solutions, becoming a one-stop 
              technology partner. Built on trust, reliability, and customer satisfaction.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-xl hover:shadow-lg transition-shadow">
                  <div className={`w-12 h-12 mx-auto mb-4 rounded-full bg-white flex items-center justify-center shadow-lg`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-2`}>{stat.value}</div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="btn-primary">
                Learn More About Us
              </button>
              <button className="btn-secondary">
                View Our Portfolio
              </button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Mission */}
            <div className="bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Target className="h-8 w-8 text-blue-200 mr-3" />
                <h3 className="text-2xl font-bold">Our Mission</h3>
              </div>
              <p className="text-blue-100 leading-relaxed">
                To deliver dependable and cost-effective laptop and desktop rental and sales solutions 
                that meet the evolving technology needs of businesses and individuals. We are committed 
                to offering flexible rental plans, quality-tested devices, and prompt IT support.
              </p>
            </div>
            
            {/* Vision */}
            <div className="bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl p-8 text-white transform hover:scale-105 transition-transform duration-300">
              <div className="flex items-center mb-4">
                <Eye className="h-8 w-8 text-purple-200 mr-3" />
                <h3 className="text-2xl font-bold">Our Vision</h3>
              </div>
              <p className="text-purple-100 leading-relaxed">
                To become a leading and trusted partner in the IT rental and sales industry by providing 
                innovative, scalable, and sustainable technology solutions. We envision a future where 
                technology is within reach of all, enabling smarter work and better opportunities.
              </p>
            </div>
            
            {/* Company Timeline */}
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Our Journey</h3>
              <div className="space-y-4">
                {milestones.map((milestone, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                      {milestone.year}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{milestone.title}</h4>
                      <p className="text-gray-600 text-sm">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
