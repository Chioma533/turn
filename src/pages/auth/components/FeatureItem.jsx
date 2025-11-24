import React from 'react'

const FeatureItem = ({ icon: Icon, title, description }) => {
  return (
      <div className="flex items-start gap-3 mb-6">
          <div className="shrink-0 w-10 h-10 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Icon className="w-5 h-5 text-cyan-400" />
          </div>
          <div>
              <h3 className="text-white font-semibold mb-1">{title}</h3>
              <p className="text-slate-400 text-sm">{description}</p>
          </div>
      </div>
  )
}

export default FeatureItem
