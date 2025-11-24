import React, { useState } from 'react'
import Select from '../../pages/Simulation/components/Select';
import ProjectCard from '../../pages/Simulation/components/ProjectCard';
import DeliverablesChecklist from '../../pages/Simulation/components/DeliverablesChecklist';

const SimulationLayout = () => {
    const [selectedIndustry, setSelectedIndustry] = useState('Technology');
    const [selectedFramework, setSelectedFramework] = useState('Agile');

    const industries = ['Technology', 'Healthcare', 'Finance', 'E-commerce', 'Education'];
    const frameworks = ['Agile', 'Waterfall', 'Scrum', 'Kanban', 'Lean'];

    const currentProject = {
        title: 'E-commerce Platform Development',
        badge: 'Agile',
        description: 'Build a complete e-commerce solution using Agile methodology',
        status: 'Continue',
        progress: 40,
        startDate: 'Jan 15, 2025',
        duration: '8 Weeks',
        endDate: 'Mar 10, 2025',
    };
  return (
      <div className="p-8 bg-slate-50 min-h-screen">
          {/* Header */}
          <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">Project Simulations</h1>
              <p className="text-slate-600">Select your industry and framework to begin</p>
          </div>

          {/* Selection Dropdowns */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Select
                  label="Select Industry"
                  value={selectedIndustry}
                  onChange={setSelectedIndustry}
                  options={industries}
                  placeholder="Choose an industry"
              />
              <Select
                  label="Select Framework"
                  value={selectedFramework}
                  onChange={setSelectedFramework}
                  options={frameworks}
                  placeholder="Choose a framework"
              />
          </div>

          {/* Current Project Card */}
          <div className="mb-8">
              <ProjectCard project={currentProject} />
          </div>

          {/* Deliverables Checklist */}
          <DeliverablesChecklist />
      </div>  )
}

export default SimulationLayout