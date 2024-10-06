import React from 'react'
import { Award, Users, Server } from 'lucide-react'

const About: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">About Profusion AI</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700 mb-4">
          At Profusion AI, our mission is to democratize artificial intelligence for small businesses. We believe that the power of AI should not be limited to large corporations with deep pockets. Our goal is to provide affordable, scalable, and effective AI solutions that help small businesses compete and thrive in the digital age.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-gray-700 mb-4">
          Founded in 2018 by a team of AI researchers and small business owners, Profusion AI was born out of the realization that small businesses were being left behind in the AI revolution. We started with a simple idea: to bridge the gap between cutting-edge AI technology and the practical needs of small businesses.
        </p>
        <p className="text-gray-700 mb-4">
          Since then, we've helped hundreds of small businesses across various industries implement AI solutions that have significantly improved their operations, customer service, and bottom line.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Expertise</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="flex items-start">
            <Server className="text-blue-600 mr-4" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Cloud Platforms</h3>
              <p className="text-gray-700">We specialize in AWS, Azure, and GCP, ensuring that your AI solutions are built on robust, scalable infrastructure.</p>
            </div>
          </div>
          <div className="flex items-start">
            <Award className="text-blue-600 mr-4" size={24} />
            <div>
              <h3 className="text-xl font-semibold mb-2">Data Analytics</h3>
              <p className="text-gray-700">Our expertise in Snowflake allows us to help you harness the power of your data for actionable insights.</p>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Dr. Sarah Chen", role: "Founder & CEO", image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { name: "Michael Rodriguez", role: "CTO", image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" },
            { name: "Emily Watkins", role: "Head of Client Success", image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" }
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-gray-600">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default About