import React from 'react'
import Card from './Card'
import { Folder } from 'lucide-react'

const PortfolioHubCard = () => {
  return (
      <Card className="p-6">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
              <Folder className="w-5 h-5 text-blue-600" />
          </div>

          <h3 className="text-xl font-bold text-slate-900 mb-2">Portfolio Hub</h3>
          <p className="text-slate-600 text-sm mb-6">
              Your completed work, artifacts and masterpieces
          </p>

          <div className="flex items-center justify-between">
              <div>
                  <p className="text-slate-500 text-xs mb-1">Total Projects</p>
                  <p className="text-3xl font-bold text-slate-900">3</p>
              </div>
          </div>
      </Card>
  )
}

export default PortfolioHubCard