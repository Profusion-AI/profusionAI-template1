import React from 'react'
import { BookOpen, Users, TrendingUp, Shield } from 'lucide-react'

const Education: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">AI in Education</h1>
      
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-6">Embracing AI in K-12 Education: A Pathway to Personalized Learning</h2>
        <p className="text-gray-700 mb-4">
          The rapid evolution of artificial intelligence (AI) presents a transformative opportunity for K-12 education in the United States. By integrating AI into classrooms, we can revolutionize personalized learning, tailoring educational experiences to meet the unique needs of each student. Embracing AI in education not only enhances learning outcomes but also prepares students for a future increasingly influenced by technology.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <BookOpen className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Personalized Learning at Scale</h3>
          <p className="text-gray-600">AI-driven educational tools adapt in real-time to a student's performance, providing customized content that matches their learning style and pace.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Users className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Enhancing Teacher Effectiveness</h3>
          <p className="text-gray-600">AI augments teachers' capabilities by automating administrative tasks, allowing them to focus more on instruction and student engagement.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <TrendingUp className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Engaging and Motivating Students</h3>
          <p className="text-gray-600">Interactive AI applications make learning more engaging, increasing motivation and encouraging a growth mindset.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <Shield className="text-blue-600 mb-4" size={40} />
          <h3 className="text-xl font-semibold mb-2">Addressing Equity and Accessibility</h3>
          <p className="text-gray-600">AI has the potential to bridge educational gaps by providing high-quality resources to underrepresented and underserved communities.</p>
        </div>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Preparing for a Technological Future</h3>
        <p className="text-gray-700 mb-4">
          Integrating AI into K-12 education equips students with essential skills for the future workforce. As AI becomes more prevalent across industries, familiarity with these technologies will be crucial. Early exposure demystifies AI, encourages interest in STEM fields, and fosters critical thinking and problem-solving skills.
        </p>
      </section>

      <section className="mb-12">
        <h3 className="text-2xl font-semibold mb-4">Mitigating Challenges and Ethical Considerations</h3>
        <p className="text-gray-700 mb-4">
          While integrating AI into education comes with challenges such as data privacy concerns and the need for infrastructure investments, these are surmountable. Establishing strict data protection policies and forming public-private partnerships can address these issues. Ongoing training for educators will ensure they are prepared to effectively use AI tools.
        </p>
      </section>

      <section>
        <h3 className="text-2xl font-semibold mb-4">The Future of AI in Education</h3>
        <p className="text-gray-700 mb-4">
          Embracing AI in education is not just an advancement; it's a necessary evolution to meet the demands of a rapidly changing world. By supporting its integration, we invest in a more personalized, engaging, and equitable educational experience for all students.
        </p>
      </section>
    </div>
  )
}

export default Education