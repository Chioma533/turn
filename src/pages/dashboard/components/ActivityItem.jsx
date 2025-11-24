import React from 'react'

const ActivityItem = ({ title, status, progress }) => {
    const statusColors = {
        Agile: 'bg-slate-200 text-slate-700',
        Draft: 'bg-slate-200 text-slate-700',
        Fair: 'bg-slate-200 text-slate-700'
    }

    const progressColor = progress >= 50 ? 'bg-blue-600' : 'bg-blue-600'
    return (
        <div className="bg-white rounded-lg p-4 border border-slate-200">
            <div className="flex items-center justify-between mb-3">
                <h4 className="font-semibold text-slate-900">{title}</h4>
                <span className={`text-xs px-3 py-1 rounded-full ${statusColors[status]}`}>
                    {status}
                </span>
            </div>

            <div className="space-y-2">
                <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Progress</span>
                    <span className="font-semibold text-slate-900">{progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                        className={`${progressColor} h-2 rounded-full transition-all duration-300`}
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default ActivityItem