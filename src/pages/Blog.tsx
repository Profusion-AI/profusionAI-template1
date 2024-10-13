import React, { useState, useEffect } from 'react'
import { Search, X } from 'lucide-react'
import ReactMarkdown from 'react-markdown'
import { Link } from 'react-router-dom'

interface BlogPost {
  id: number;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "How AI is Transforming Small Business Operations",
    date: "2024-09-03",
    author: "Kyle Greenwell",
    excerpt: "Discover the ways artificial intelligence is revolutionizing small business efficiency and growth.",
    content: "This is the content for the first blog post.",
    category: "AI Trends",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 2,
    title: "5 AI Tools Every Small Business Should Consider",
    date: "2024-09-08",
    author: "Kyle Greenwell",
    excerpt: "Explore the top AI-powered tools that can give your small business a competitive edge.",
    content: "This is the content for the second blog post.",
    category: "Tools",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  {
    id: 3,
    title: "The Future of AI in Customer Service",
    date: "2024-09-12",
    author: "Kyle Greenwell",
    excerpt: "Learn how AI is shaping the future of customer service and how small businesses can benefit.",
    content: "This is the content for the third blog post.",
    category: "Customer Service",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  }
]

const Blog: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)

  const filteredPosts = blogPosts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const closePopup = () => setSelectedPost(null)

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
            <div className="p-6">
              <span className="text-blue-600 text-sm font-semibold">
                {post.date} - <Link to="/about" className="hover:underline">{post.author}</Link>
              </span>
              <h2 className="text-xl font-bold mt-2 mb-4">{post.title}</h2>
              <p className="text-gray-600 mb-4">{post.excerpt}</p>
              <button
                onClick={() => setSelectedPost(post)}
                className="text-blue-600 font-semibold hover:underline cursor-pointer"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>
      {selectedPost && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50" onClick={closePopup}>
          <div className="bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {selectedPost.date} - <Link to="/about" className="hover:underline">{selectedPost.author}</Link>
                </span>
                <button onClick={closePopup} className="text-gray-500 hover:text-gray-700">
                  <X size={24} />
                </button>
              </div>
              <h2 className="text-3xl font-bold mb-6">{selectedPost.title}</h2>
              <div className="prose prose-lg max-w-none">
                <ReactMarkdown>{selectedPost.content}</ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Blog
