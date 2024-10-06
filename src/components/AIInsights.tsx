import React, { useState, useEffect } from 'react'
import { Lightbulb } from 'lucide-react'

const insights = [
  "AI can improve small business productivity by up to 40%",
  "73% of small business owners believe AI is important for their future",
  "AI-driven analytics can increase sales by 20-30%",
  "Small businesses using AI are 2.5x more likely to outperform competitors",
  "AI can reduce customer support costs by up to 30%"
]

const AIInsights: React.FC = () => {
  const [currentInsight, setCurrentInsight] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentInsight((prevInsight) => (prevInsight + 1) % insights.length)
    }, 5000) // Change insight every 5 seconds

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="bg-white bg-opacity-20 backdrop-blur-lg rounded-lg p-6 shadow-lg max-w-md w-full">
      <div className="flex items-center mb-4">
        <Lightbulb className="text-yellow-300 mr-2" size={24} />
        <h3 className="text-xl font-semibold text-white">AI Insight</h3>
      </div>
      <p className="text-white text-lg font-medium transition-opacity duration-500 ease-in-out">
        {insights[currentInsight]}
      </p>
    </div>
  )
}

export default AIInsights