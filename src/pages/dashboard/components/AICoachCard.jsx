import React from 'react'
import Card from './Card'
import { MessageCircle } from 'lucide-react'

const AICoachCard = () => {
  return (
      <Card className="p-6 border-2 border-cyan-200 bg-cyan-50/30">
          <div className="flex items-start justify-between mb-4">
              <div className="w-10 h-10 bg-cyan-100 rounded-lg flex items-center justify-center">
                  <MessageCircle className="w-5 h-5 text-cyan-600" />
              </div>

              <button className="bg-cyan-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition-colors text-sm">
                  Ask TURNVE
              </button>
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">AI Coach</h3>
          <p className="text-slate-600 text-sm mb-4">
              Get expert guidance on frameworks, CV feedback, and career advice
          </p>

          <div className="bg-white rounded-lg p-4 border border-slate-200">
              <p className="text-slate-500 text-sm italic">
                  "Hi! I can help you understand Agile methodologies, review your CV, or suggest next steps in your learning journey. What would you like to know?"
              </p>
          </div>
      </Card>
  )
}

export default AICoachCard