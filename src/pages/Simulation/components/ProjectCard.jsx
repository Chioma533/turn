import { Play } from 'lucide-react';
import React from 'react'

const ProjectCard = ({ project }) => {
    return (
        <div className="bg-white rounded-xl border-2 border-cyan-200 p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                        {project.title}
                    </h3>
                    <div className="flex items-center gap-2 mb-1">
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-cyan-100 text-cyan-700">
                            {project.badge}
                        </span>
                    </div>
                    <p className="text-sm text-slate-600">{project.description}</p>
                </div>

                <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm flex items-center gap-2">
                    <Play size={16} />
                    {project.status}
                </button>
            </div>

            {/* Progress Section */}
            <div className="mb-4">
                <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-slate-600">Total Progress</span>
                    <span className="font-semibold text-slate-900">{project.progress}%</span>
                </div>
                <div className="w-full bg-slate-200 rounded-full h-2">
                    <div
                        className="bg-cyan-500 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${project.progress}%` }}
                    ></div>
                </div>
            </div>

            {/* Project Details Grid */}
            <div className="grid grid-cols-3 gap-4">
                <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">Start Date</p>
                    <p className="font-semibold text-slate-900 text-sm">{project.startDate}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">Duration</p>
                    <p className="font-semibold text-slate-900 text-sm">{project.duration}</p>
                </div>
                <div className="bg-slate-50 rounded-lg p-3">
                    <p className="text-xs text-slate-600 mb-1">End Date</p>
                    <p className="font-semibold text-slate-900 text-sm">{project.endDate}</p>
                </div>
            </div>
        </div>
    );

}

export default ProjectCard