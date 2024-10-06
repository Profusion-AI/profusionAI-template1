import React from 'react'
import { ArrowRight, Zap, TrendingUp, Shield } from 'lucide-react'
import AIInsights from '../components/AIInsights'

const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI Solutions for Small Businesses</h1>
              <p className="text-xl mb-8">Unlock the power of AI to drive growth and efficiency in your business</p>
              <a href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center">
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </a>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <AIInsights />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">AI Strategy Consulting</h3>
              <p className="text-gray-600">Develop a tailored AI roadmap for your business</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">Predictive Analytics</h3>
              <p className="text-gray-600">Leverage data to forecast trends and make informed decisions</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Shield className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Security</h3>
              <p className="text-gray-600">Enhance your cybersecurity with AI-driven threat detection</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Profusion AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Expertise in Leading Platforms</h3>
              <p className="text-gray-600">We specialize in AWS, Azure, GCP, and Snowflake, ensuring you get the best solutions for your needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tailored for Small Businesses</h3>
              <p className="text-gray-600">Our solutions are designed to scale with your business, providing enterprise-level AI at SMB-friendly prices.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Proven Track Record</h3>
              <p className="text-gray-600">We've helped numerous small businesses achieve significant growth and efficiency gains through AI adoption.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Ongoing Support</h3>
              <p className="text-gray-600">Our team provides continuous support and training to ensure you get the most out of your AI investments.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home