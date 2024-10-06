import React, { useState } from 'react'
import { Search } from 'lucide-react'

const blogPosts = [
  {
    id: 1,
    title: "How AI is Transforming Small Business Operations",
    excerpt: "Discover the ways artificial intelligence is revolutionizing small business efficiency and growth.",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "5 AI Tools Every Small Business Should Consider",
    excerpt: "Explore the top AI-powered tools that can give your small business a competitive edge.",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "The Future of AI in Customer Service",
    excerpt: "Learn how AI is shaping the future of customer service and how small businesses can benefit.",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
]

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="mb-8">
        <div className="relative">
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full p-3 pl-10 border border-gray-300 rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search className="absolute left-3 top-3 text-gray-400" size={20} />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map(post => (
          <div key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">{post.category}</span>
              <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <a href="#" className="text-blue-600 font-semibold hover:underline">Read More</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog