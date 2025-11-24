import React from 'react'
import Card from './Card'
import { Play, PlayCircle } from 'lucide-react'

const ProjectSimulationsCard = () => {
  return (
      <Card className="p-6 bg-linear-to-br from-blue-600 to-blue-800 text-white relative overflow-hidden">
          <div className="relative z-10">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <PlayCircle className="w-5 h-5" />
              </div>

              <h3 className="text-xl font-bold mb-2">Project Simulations</h3>
              <p className="text-blue-100 text-sm mb-6">
                  Practice real-world scenarios with AI-generated projects. Choose your industry and framework to get started.
              </p>

              <div className="flex items-center justify-between">
                  <div>
                      <p className="text-blue-200 text-xs mb-1">Active Simulations</p>
                      <p className="text-3xl font-bold">3</p>
                  </div>

                  <button className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                      Start New
                  </button>
              </div>
          </div>

          {/* Decorative circles */}
          <div className="absolute -right-8 -top-8 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="absolute -right-4 top-16 w-20 h-20 bg-white/10 rounded-full"></div>
      </Card>  )
}

export default ProjectSimulationsCard