import React from 'react'
import { ArrowRight, Zap, TrendingUp, GraduationCap, Users } from 'lucide-react'
import AIInsights from '../components/AIInsights'

const Home: React.FC = () => {
  return (
    <div>
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">AI-Driven Education for All</h1>
              <p className="text-xl mb-8">Empowering learners through personalized AI solutions and advocacy</p>
              <a href="/contact" className="bg-white text-blue-600 py-3 px-6 rounded-full font-semibold hover:bg-blue-100 transition duration-300 inline-flex items-center">
                Join Our Mission
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
          <h2 className="text-3xl font-bold mb-12 text-center">Our Initiatives</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <Zap className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">AI in Education</h3>
              <p className="text-gray-600">Revolutionizing learning with personalized AI-driven experiences</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <TrendingUp className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">GI Bill Reform</h3>
              <p className="text-gray-600">Advocating for expanded educational benefits for military families</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <GraduationCap className="text-blue-600 mb-4" size={40} />
              <h3 className="text-xl font-semibold mb-2">ProfusionAI Education</h3>
              <p className="text-gray-600">Documenting and supporting the journey to personalized learning</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Why Choose Profusion AI?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning</h3>
              <p className="text-gray-600">We're committed to creating tailored educational experiences that cater to each learner's unique needs and abilities.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Advocacy for Inclusive Education</h3>
              <p className="text-gray-600">We're pushing for reforms that will make quality education accessible to all, including children of military families and those with special needs.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI-Driven Innovation</h3>
              <p className="text-gray-600">Our solutions leverage cutting-edge AI technology to create more effective and engaging learning environments.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Community-Focused Approach</h3>
              <p className="text-gray-600">We're building a supportive community of educators, parents, and technologists dedicated to transforming education.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Join Our Mission</h2>
          <p className="text-xl mb-8">Help us create a future where every learner has access to personalized, AI-enhanced education.</p>
          <a href="/contact" className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300 inline-flex items-center">
            Get Involved
            <Users className="ml-2" size={20} />
          </a>
        </div>
      </section>
    </div>
  )
}

export default Home
