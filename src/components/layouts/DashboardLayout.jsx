import React from 'react'
import RecentActivity from '../../pages/dashboard/components/RecentActivity'
import AICoachCard from '../../pages/dashboard/components/AICoachCard'
import PortfolioHubCard from '../../pages/dashboard/components/PortfolioHubCard'
import ProjectSimulationsCard from '../../pages/dashboard/components/ProjectSimulationsCard'
import FloatingActionButton from './FloatingActionButton'

const DashboardLayout = ({onFABClick}) => {
   
  return (
      <div className="p-8 bg-slate-50 min-h-screen">
          {/* Header */}
          <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Hey there</h1>
              <p className="text-slate-600">Continue your learning journey</p>
          </div>

          {/* Top Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
              <ProjectSimulationsCard />
              <PortfolioHubCard />
          </div>

          {/* AI Coach Card */}
          <div className="mb-8">
              <AICoachCard />
          </div>

          {/* Recent Activity */}
          <RecentActivity />

          {/* Floating Action Button */}
          {/* <button className="fixed bottom-8 right-8 w-14 h-14 bg-cyan-500 hover:bg-cyan-600 text-white rounded-full shadow-lg flex items-center justify-center transition-all hover:scale-110">
              <Plus size={24} />
          </button> */}

          <FloatingActionButton onClick={onFABClick}/>

         
      </div>
  )
}

export default DashboardLayout